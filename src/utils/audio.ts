/**
 * Web Audio API synthesizer for Gymnasium Table Horn, Whistle, and Goal Beep
 * Zero external audio file dependencies, instant, works on all devices
 */

class SoundSynthesizer {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  /**
   * Powerful Table Buzzer / Gymnasium Horn sound (typically used at end of period or time-out)
   */
  playHorn(durationMs = 900) {
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const duration = durationMs / 1000;

      // Two detuned sawtooth oscillators to create a loud, brassy sports arena buzzer
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc1.type = 'sawtooth';
      osc2.type = 'sawtooth';

      osc1.frequency.setValueAtTime(140, now); // low buzz fundamental
      osc2.frequency.setValueAtTime(146, now); // detune beat frequency

      // Filter to shape arena buzzer tone
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, now);

      gainNode.gain.setValueAtTime(0.01, now);
      gainNode.gain.linearRampToValueAtTime(0.35, now + 0.05);
      gainNode.gain.setValueAtTime(0.35, now + duration - 0.08);
      gainNode.gain.linearRampToValueAtTime(0.001, now + duration);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration);
      osc2.stop(now + duration);
    } catch {
      // Audio not permitted without interaction or muted
    }
  }

  /**
   * Referee Whistle sound (double oscillating trill)
   */
  playWhistle() {
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;
      const duration = 0.4;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const lfo = ctx.createOscillator(); // trill modulation
      const lfoGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(2400, now);

      lfo.frequency.setValueAtTime(32, now); // fast pea trill
      lfoGain.gain.setValueAtTime(180, now);

      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      lfo.start(now);
      osc.start(now);
      lfo.stop(now + duration);
      osc.stop(now + duration);
    } catch {
      // Audio muted
    }
  }

  /**
   * Goal confirmed crisp beep chime
   */
  playGoalChime() {
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch {
      // Audio muted
    }
  }
}

export const soundFx = new SoundSynthesizer();
