export type Language = 'fr' | 'en' | 'ar';

export interface TranslationDictionary {
  nav: {
    features: string;
    demo: string;
    sheet: string;
    display: string;
    pricing: string;
    faq: string;
    buyCta: string;
    testDemo: string;
  };
  hero: {
    kicker: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    badges: {
      ihf: string;
      offline: string;
      screens: string;
    };
    liveStatus: string;
    period: string;
    homeTeam: string;
    awayTeam: string;
    penaltyWarning: string;
  };
  stats: {
    stat1Value: string;
    stat1Label: string;
    stat1Desc: string;
    stat2Value: string;
    stat2Label: string;
    stat2Desc: string;
    stat3Value: string;
    stat3Label: string;
    stat3Desc: string;
    stat4Value: string;
    stat4Label: string;
    stat4Desc: string;
  };
  beforeAfter: {
    kicker: string;
    title: string;
    subtitle: string;
    beforeTitle: string;
    beforeSubtitle: string;
    afterTitle: string;
    afterSubtitle: string;
    points: {
      before: string;
      after: string;
    }[];
  };
  features: {
    kicker: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      tag: string;
      title: string;
      description: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
    }[];
  };
  demoSection: {
    kicker: string;
    title: string;
    subtitle: string;
    tabs: {
      tableConsole: string;
      matchSheet: string;
      scoreboard: string;
    };
    console: {
      matchTime: string;
      start: string;
      pause: string;
      reset: string;
      add2Min: string;
      triggerHorn: string;
      triggerWhistle: string;
      timeoutBtn: string;
      homeGoals: string;
      awayGoals: string;
      penaltiesActive: string;
      noPenalties: string;
      remainingTime: string;
      playerNum: string;
    };
    sheet: {
      officialHeader: string;
      subHeader: string;
      signaturesTitle: string;
      referee1: string;
      referee2: string;
      timekeeper: string;
      secretary: string;
      signedNotice: string;
      signPrompt: string;
      clearSig: string;
      printBtn: string;
    };
    displayTab: {
      arenaViewNotice: string;
      fullscreenBtn: string;
    };
  };
  pricing: {
    kicker: string;
    title: string;
    subtitle: string;
    billingNotice: string;
    plans: {
      id: string;
      badge?: string;
      name: string;
      tagline: string;
      price: string;
      period: string;
      features: string[];
      cta: string;
      highlighted?: boolean;
    }[];
    guarantee: string;
    instantAccess: string;
  };
  testimonials: {
    kicker: string;
    title: string;
    subtitle: string;
    items: {
      quote: string;
      author: string;
      role: string;
      club: string;
      rating: number;
    }[];
  };
  faq: {
    kicker: string;
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  ctaBanner: {
    title: string;
    subtitle: string;
    primaryBtn: string;
    secondaryBtn: string;
    secureNotice: string;
  };
  footer: {
    brandTagline: string;
    navigationTitle: string;
    legalTitle: string;
    supportTitle: string;
    contactNotice: string;
    rights: string;
    disclaimer: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  fr: {
    nav: {
      features: 'Fonctionnalités',
      demo: 'Démo Interactive',
      sheet: 'Feuille Fédérale',
      display: 'Écran Salle',
      pricing: 'Tarifs & Soutien',
      faq: 'FAQ',
      buyCta: 'Accéder à l\'App',
      testDemo: 'Tester l\'App',
    },
    hero: {
      kicker: '⚡ La Référence Numérique de la Table de Marque',
      headlinePart1: 'Modernisez vos matchs de handball.',
      headlineHighlight: 'Chronomètre pro, exclusions 2 min',
      headlinePart2: 'et feuille officielle en un clic.',
      subtitle:
        'Fini les erreurs de chronométrage manuel et les fiches papier raturées. Équipez votre club d\'une application web/PWA homologuée IHF, ultra-intuitive sur tablette tactile et prête à être projetée sur l\'écran géant de votre gymnase.',
      primaryCta: 'Obtenir l\'Application Web (30 DH / an)',
      secondaryCta: 'Tester la Démo Interactive',
      badges: {
        ihf: '100% Conforme Règles Officielles IHF',
        offline: 'Fonctionne 100% Hors-Ligne (PWA)',
        screens: 'Compatible Tout Écran & HDMI Gymnase',
      },
      liveStatus: 'MATCH EN DIRECT · 2e MI-TEMPS',
      period: 'Période 2',
      homeTeam: 'إعدادية وادزا',
      awayTeam: 'إعدادية بدر',
      penaltyWarning: 'FIN D\'EXCLUSION DANS 00:24',
    },
    stats: {
      stat1Value: '+1 500',
      stat1Label: 'Matchs chronométrés',
      stat1Desc: 'Des championnats scolaires aux coupes régionales',
      stat2Value: '0 litige',
      stat2Label: 'Sur les exclusions 2 min',
      stat2Desc: 'Alertes visuelles et sonores de fin de pénalité',
      stat3Value: '100%',
      stat3Label: 'Hors-ligne garanti',
      stat3Desc: 'Fonctionne même sans connexion Wi-Fi ni 4G',
      stat4Value: '< 3 min',
      stat4Label: 'Prise en main',
      stat4Desc: 'Interface conçue pour des bénévoles et jeunes arbitres',
    },
    beforeAfter: {
      kicker: 'Transformation Digitale',
      title: 'Pourquoi les clubs abandonnent définitivement le papier',
      subtitle:
        'Chaque week-end, les erreurs de table gâchent des matchs. Découvrez comment HandballScore Pro sécurise l\'arbitrage et apporte le professionnalisme à votre salle.',
      beforeTitle: 'Méthode Traditionnelle Papier & Chrono Basique',
      beforeSubtitle: 'Risques élevés d\'erreurs, stress pour les bénévoles et tensions avec les bancs',
      afterTitle: 'Avec HandballScore Pro sur Tablette',
      afterSubtitle: 'Sérénité absolue, précision au dixième de seconde et rapport officiel instantané',
      points: [
        {
          before: 'Oubli fréquent du retour d\'un joueur exclu 2 minutes, provoquant la colère du coach adverse.',
          after: 'Compte à rebours automatique par joueur avec avertisseur sonore et surbrillance verte au retour.',
        },
        {
          before: 'Feuille de match en papier raturée, difficilement lisible pour les commissions et perdue dans le sac.',
          after: 'Feuille officielle PDF conforme aux critères IHF générée en 1 clic et archivée automatiquement.',
        },
        {
          before: 'Chronomètre de poche imprécis, difficile à synchroniser lors des temps-morts d\'équipe (TMO 60s).',
          after: 'Gestion automatique des périodes réglementaires, arrêts de temps et compte à rebours officiel TMO.',
        },
        {
          before: 'Panneau d\'affichage mural en panne ou télécommande infrarouge capricieuse et introuvable.',
          after: 'Branchez n\'importe quel écran TV ou vidéoprojecteur en HDMI : affichage public temps réel fluide.',
        },
        {
          before: 'Signatures d\'arbitres et capitaines réclamées à la hâte dans le couloir après la douche.',
          after: 'Module de signatures tactiles directement sur l\'écran dès le coup de sifflet final.',
        },
      ],
    },
    features: {
      kicker: 'Arsenal Complet de Match',
      title: 'Toutes les exigences fédérales réunies dans un outil fluide',
      subtitle:
        'Conçu en collaboration étroite avec des arbitres de haut niveau et des secrétaires de table expérimentés.',
      items: [
        {
          id: 'chrono',
          tag: 'Précision IHF',
          title: 'Chronomètre & Gestion des Périodes',
          description:
            'Prend en charge tous les formats de match : Seniors (2x30 min), Scolaire U15 (2x20 min), prolongations réglementaires et arrêts de jeu au dixième de seconde.',
          bullet1: 'Temps-morts d\'équipe (T1, T2, T3) avec compte à rebours 60s sonore',
          bullet2: 'Gestion des pauses et prolongation automatique',
          bullet3: 'Arrêt instantané sur coup de sifflet d\'arbitre',
        },
        {
          id: 'exclusions',
          tag: 'Zéro Litige',
          title: 'Moteur Intelligent des Sanctions & 2 Minutes',
          description:
            'Gérez simultanément jusqu\'à 6 exclusions avec le numéro de maillot du joueur sanctionné. Décompte en direct et alerte sonore nette à l\'autorisation de rentrée.',
          bullet1: 'Cartons Jaunes (avertissements) avec seuils par équipe',
          bullet2: 'Cartons Rouges (disqualification) et Cartons Bleus (rapport écrit)',
          bullet3: 'Décompte synchronisé avec l\'affichage salle',
        },
        {
          id: 'pdf',
          tag: 'Homologation',
          title: 'Feuille de Match Électronique Officielle (PDF A4)',
          description:
            'Générez une feuille de match exhaustive conforme aux standards IHF et fédéraux : composition complète des équipes, chronologie exacte de chaque but, fautes et arrêts de gardien.',
          bullet1: 'Mise en page format A4 standard prête pour impression directe',
          bullet2: 'Exportation immédiate par e-mail ou téléchargement local',
          bullet3: 'Historique sécurisé pour les commissions de discipline',
        },
        {
          id: 'signatures',
          tag: 'Sans Papier',
          title: 'Signatures Tactiles des Arbitres & Officiels',
          description:
            'À la fin de la rencontre, recueillez les signatures électroniques directement sur votre tablette : Arbitre 1, Arbitre 2, Chronométreur et Secrétaire de table.',
          bullet1: 'Horodatage infalsifiable de la validation du score',
          bullet2: 'Section dédiée aux réserves techniques ou réclamations',
          bullet3: 'Verrouillage automatique anti-modification après signature',
        },
        {
          id: 'display',
          tag: 'Expérience Public',
          title: 'Affichage Grand Écran / TV Gymnase',
          description:
            'Transformez n\'importe quel téléviseur, projecteur ou tableau LED en un panneau d\'affichage professionnel via simple câble HDMI ou Chromecast sans aucun lag.',
          bullet1: 'Contraste ultra-élevé visible depuis tous les gradins',
          bullet2: 'Affichage des noms des clubs, logos, scores et exclusions en cours',
          bullet3: 'Mode plein écran natif (F11) sans barre d\'adresse ni curseur gênant',
        },
        {
          id: 'pwa',
          tag: 'Fiabilité 100%',
          title: 'PWA Hors-Ligne & Sauvegarde Locale Autonome',
          description:
            'Le réseau 4G ne passe pas dans le sous-sol du gymnase ? Aucun souci. HandballScore Pro fonctionne en totale autonomie une fois ouvert et sauvegarde chaque action localement.',
          bullet1: 'Technologie Progressive Web App installable sur iPad, Android, PC',
          bullet2: 'Zéro risque de perte de données en cas de coupure de courant',
          bullet3: 'Synchronisation automatique dès reconnexion au réseau',
        },
      ],
    },
    demoSection: {
      kicker: 'Prise en Main Immédiate',
      title: 'Testez l\'interface en direct ci-dessous',
      subtitle:
        'Cliquez sur les commandes pour lancer le chrono, marquer un but, déclencher une exclusion de 2 minutes ou tester le buzzer sonore.',
      tabs: {
        tableConsole: '1. Console Table de Marque',
        matchSheet: '2. Feuille de Match A4 IHF',
        scoreboard: '3. Affichage Écran Gymnase',
      },
      console: {
        matchTime: 'TEMPS DE JEU',
        start: 'Démarrer le Chrono',
        pause: 'Arrêter le Chrono',
        reset: 'Réinitialiser',
        add2Min: '+ Exclusion 2 Min',
        triggerHorn: 'Actionner le Buzzer Table',
        triggerWhistle: 'Sifflet Arbitre',
        timeoutBtn: 'Temps-Mort d\'Équipe (60s)',
        homeGoals: 'Buts Domicile',
        awayGoals: 'Buts Visiteur',
        penaltiesActive: 'Exclusions 2 Min en cours',
        noPenalties: 'Aucune exclusion en cours sur le terrain',
        remainingTime: 'Temps restant',
        playerNum: 'Joueur N°',
      },
      sheet: {
        officialHeader: 'FEUILLE DE MATCH OFFICIELLE DE HANDBALL',
        subHeader: 'Conforme aux Statuts et Règlements de la Fédération & IHF',
        signaturesTitle: 'VALIDATION & SIGNATURES DU CORPS ARBITRAL',
        referee1: '1er Arbitre',
        referee2: '2e Arbitre',
        timekeeper: 'Chronométreur',
        secretary: 'Secrétaire de Table',
        signedNotice: 'Document certifié conforme après vérification des scores',
        signPrompt: 'Signer avec le doigt ou la souris dans l\'encadré :',
        clearSig: 'Effacer la signature',
        printBtn: 'Imprimer / Exporter en PDF A4',
      },
      displayTab: {
        arenaViewNotice: 'Vue optimisée pour transmission HDMI vers écran géant ou TV de salle.',
        fullscreenBtn: 'Basculer en Plein Écran',
      },
    },
    pricing: {
      kicker: 'Soutien & Tarifs',
      title: 'Un accès complet pour seulement 30 DH par an',
      subtitle:
        'Pour encourager le développeur et soutenir la maintenance de l\'application, l\'abonnement annuel est fixé à un tarif symbolique de 30 dirhams.',
      billingNotice: 'Paiement unique de 30 DH / an sans aucun engagement caché. Accès immédiat à l\'application web.',
      plans: [
        {
          id: 'tournament',
          name: 'Accès Découverte',
          tagline: 'Idéal pour tester l\'application sur un tournoi ou un week-end.',
          price: '10 DH',
          period: 'pour 7 jours',
          features: [
            'Chronomètre officiel complet',
            'Exclusions 2 min & sanctions',
            'Feuille de match officielle PDF',
            'Mode Affichage Écran TV / HDMI',
            'Fonctionne 100% hors-ligne (PWA)',
          ],
          cta: 'Essayer l\'App',
        },
        {
          id: 'club',
          badge: '⭐ RECOMMANDÉ (SOUTIEN DÉVELOPPEUR)',
          name: 'Licence Annuelle Complète',
          tagline: 'L\'accès illimité à l\'application web pour toute l\'année.',
          price: '30 DH',
          period: 'par an (30 درهم)',
          features: [
            'Matchs & équipes illimités toute l\'année',
            'Feuille de match officielle avec signatures tactiles',
            'Module de projection plein écran HD/4K pour gymnase',
            'Alertes sonores et buzzer officiel intégrés',
            'Mises à jour régulières et support prioritaire',
            'Contribution de soutien (تشجيع للمبرمج)',
          ],
          cta: 'Obtenir l\'Application (30 DH)',
          highlighted: true,
        },
        {
          id: 'league',
          name: 'Licence Établissement / Ligue',
          tagline: 'Pour équiper l\'ensemble des salles d\'un comité ou d\'une délégation.',
          price: '100 DH',
          period: 'pour 5 comptes',
          features: [
            '5 accès complets pour vos différents responsables',
            'Personnalisation avec logo de l\'établissement',
            'Support direct avec le développeur',
          ],
          cta: 'Soutenir l\'Équipe',
        },
      ],
      guarantee: 'Garantie satisfait ou remboursé sous 14 jours.',
      instantAccess: 'Accès immédiat et configuration en 30 secondes sur https://handballpro.printomrdesigne.workers.dev/.',
    },
    testimonials: {
      kicker: 'Retour du Terrain',
      title: 'Adopté par les arbitres et secrétaires de table',
      subtitle: 'Ils ont éliminé le stress des 2 minutes et professionnalisé leur salle.',
      items: [
        {
          quote:
            'Avant, chaque match sous tension voyait un coach réclamer la fin d\'un 2 min alors qu\'il restait 15 secondes. Avec HandballScore Pro sur notre tablette branchée à la TV du gymnase, le chrono est géant et indiscutable. Vraiment bravo au développeur pour ces 30 DH symboliques !',
          author: 'Youssef E.',
          role: 'Professeur & Responsable Sport Solaire',
          club: 'Délégation Taourirt',
          rating: 5,
        },
        {
          quote:
            'Une application extrêmement fluide, légère et qui fonctionne sans internet dans notre salle. Le rendu de la feuille de match officielle est parfait.',
          author: 'Karim B.',
          role: 'Secrétaire de Table',
          club: 'Ligue Régionale de Handball',
          rating: 5,
        },
        {
          quote:
            'Pour notre tournoi scolaire U15, ce logiciel a sauvé notre organisation. Simple, rapide et pro. Merci pour ce super travail.',
          author: 'Fatima Z.',
          role: 'Organisatrice de Tournoi',
          club: 'Comité Sport Scolaire',
          rating: 5,
        },
      ],
    },
    faq: {
      kicker: 'Questions Fréquentes',
      title: 'Tout ce que vous devez savoir sur l\'application',
      subtitle: 'Des réponses claires et précises aux interrogations techniques.',
      items: [
        {
          question: 'Pourquoi l\'abonnement annuel est-il fixé à seulement 30 DH ?',
          answer:
            'L\'abonnement de 30 DH par an est un tarif symbolique de soutien (تشجيع للمبرمج) pour encourager le développeur marocain derrière ce projet, couvrir les frais minimes d\'hébergement et garantir la pérennité et les futures mises à jour de l\'application web.',
        },
        {
          question: 'L\'application nécessite-t-elle une connexion Internet pendant le match ?',
          answer:
            'Non, absolument pas. HandballScore Pro est une Progressive Web App (PWA). Une fois ouverte une première fois, elle tourne 100% en local et hors-ligne dans votre gymnase.',
        },
        {
          question: 'Comment accéder à l\'application web officielle ?',
          answer:
            'L\'application est accessible directement en ligne à l\'adresse : https://handballpro.printomrdesigne.workers.dev/. Vous pouvez l\'ouvrir sur n\'importe quel navigateur (Chrome, Safari, Edge) sur PC ou tablette.',
        },
        {
          question: 'Puis-je brancher l\'application sur la télévision de notre gymnase ?',
          answer:
            'Oui, tout à fait ! Il suffit de relier votre tablette ou PC portable à votre TV ou projecteur par un câble HDMI ou via Chromecast/AirPlay pour afficher le tableau des scores en grand.',
        },
      ],
    },
    ctaBanner: {
      title: 'Passez votre club ou école à l\'ère numérique dès aujourd\'hui.',
      subtitle:
        'Soutenez le développeur pour seulement 30 DH par an et profitez de la meilleure application de table de marque.',
      primaryBtn: 'Accéder à l\'Application (30 DH)',
      secondaryBtn: 'Tester la Démo en Ligne',
      secureNotice: 'Paiement sécurisé · Activation instantanée · Accessible sur https://handballpro.printomrdesigne.workers.dev/',
    },
    footer: {
      brandTagline:
        'La solution numérique de référence pour la table de marque, le chronométrage et l\'arbitrage du Handball moderne.',
      navigationTitle: 'Navigation',
      legalTitle: 'Informations Légales',
      supportTitle: 'Contact & Support',
      contactNotice: 'Service client et support développeur disponibles 7j/7.',
      rights: 'Tous droits réservés. HandballScore Pro est édité par PrintOMR Designe.',
      disclaimer: 'Hébergé sur https://handballpro.printomrdesigne.workers.dev/',
    },
  },
  en: {
    nav: {
      features: 'Features',
      demo: 'Live Demo',
      sheet: 'Official Sheet',
      display: 'Arena Display',
      pricing: 'Pricing & Support',
      faq: 'FAQ',
      buyCta: 'Get App',
      testDemo: 'Try App',
    },
    hero: {
      kicker: '⚡ The Digital Gold Standard for Handball Table Officials',
      headlinePart1: 'Modernize your handball matches.',
      headlineHighlight: 'Pro clock, 2-min penalties',
      headlinePart2: 'and official scoresheet in one click.',
      subtitle:
        'No more manual stopwatch mistakes. Equip your club with an IHF-compliant web application, intuitive on tablets and ready for giant gym display via HDMI.',
      primaryCta: 'Get Web App (30 DH / year)',
      secondaryCta: 'Launch Interactive Live Demo',
      badges: {
        ihf: '100% Compliant with Official Rules',
        offline: 'Works 100% Offline (PWA)',
        screens: 'Compatible with All Screens & Gym HDMI',
      },
      liveStatus: 'LIVE MATCH · 2nd HALF',
      period: 'Period 2',
      homeTeam: 'إعدادية وادزا',
      awayTeam: 'إعدادية بدر',
      penaltyWarning: 'PENALTY EXPIRATION IN 00:24',
    },
    stats: {
      stat1Value: '+1,500',
      stat1Label: 'Matches timed',
      stat1Desc: 'From school championships to regional cups',
      stat2Value: '0 disputes',
      stat2Label: 'On 2-min suspensions',
      stat2Desc: 'Visual & acoustic alerts when penalties expire',
      stat3Value: '100%',
      stat3Label: 'Guaranteed offline',
      stat3Desc: 'Operates seamlessly with zero Wi-Fi or cellular network',
      stat4Value: '< 3 min',
      stat4Label: 'Learning curve',
      stat4Desc: 'Designed for volunteer teachers and young table officials',
    },
    beforeAfter: {
      kicker: 'Digital Transformation',
      title: 'Why sports clubs are abandoning paper sheets for good',
      subtitle:
        'Every weekend, manual scoring errors disrupt crucial games. Discover how HandballScore Pro secures refereeing and elevates your gymnasium.',
      beforeTitle: 'Traditional Paper & Basic Stopwatch',
      beforeSubtitle: 'High risk of human error, stressed volunteers, and coach disputes',
      afterTitle: 'With HandballScore Pro on Tablet',
      afterSubtitle: 'Zero friction, tenth-of-a-second accuracy, and instant official report',
      points: [
        {
          before: 'Volunteers forget when a 2-minute penalty ends, triggering intense bench disputes.',
          after: 'Simultaneous digital countdown per player with audio chime and green indicator upon return.',
        },
        {
          before: 'Messy paper sheet, crossed-out goals, and lost match reports in gym locker rooms.',
          after: 'Standard A4 PDF match sheet matching federation guidelines generated in 1 click.',
        },
        {
          before: 'Inaccurate stopwatches with stressful 60-second team timeout (TMO) management.',
          after: 'Built-in 60s timeout countdown with automated acoustic buzzer horn.',
        },
        {
          before: 'Broken wall scoreboard or lost infrared remote controller.',
          after: 'Plug any HDMI TV or projector for a high-contrast real-time scoreboard.',
        },
        {
          before: 'Chasing referees and coaches in corridors for manual post-game signatures.',
          after: 'Clean touchscreen signing module directly on the tablet right after the final buzzer.',
        },
      ],
    },
    features: {
      kicker: 'Pro Match Suite',
      title: 'Every regulation requirement combined into one seamless tool',
      subtitle: 'Engineered closely with certified handball referees and table secretaries.',
      items: [
        {
          id: 'chrono',
          tag: 'Precision',
          title: 'Official Match Clock & Period Manager',
          description:
            'Handles all game formats: Senior, Youth, School U15, overtime periods, and tenth-of-a-second stoppages.',
          bullet1: 'Team Timeouts with acoustic 60-second countdown',
          bullet2: 'Half-time breaks and automatic overtime rules',
          bullet3: 'Instant time halt upon referee whistle',
        },
        {
          id: 'exclusions',
          tag: 'Zero Contest',
          title: 'Intelligent 2-Minute Penalty Engine',
          description:
            'Track multiple simultaneous suspensions per player jersey number. Real-time countdowns and clear audio signals when players are cleared to return.',
          bullet1: 'Yellow cards (warnings) with team threshold monitoring',
          bullet2: 'Red cards (disqualification) and Blue cards (written report)',
          bullet3: 'Synchronized live penalty times shown on the arena display',
        },
        {
          id: 'pdf',
          tag: 'Sanctioned',
          title: 'Official Electronic Scoresheet (A4 PDF)',
          description:
            'Generate a complete match sheet: full rosters, license IDs, precise goal timestamps, goalkeeper saves, and disciplinary logs.',
          bullet1: 'Ready for instant A4 standard printing',
          bullet2: 'One-click email export and secure local download',
          bullet3: 'Immutable archive for league disciplinary committees',
        },
        {
          id: 'signatures',
          tag: 'Paperless',
          title: 'Touchscreen Signatures for Referees & Officials',
          description:
            'Gather verified electronic signatures immediately after the final whistle: Referee 1, Referee 2, Timekeeper, and Table Secretary.',
          bullet1: 'Tamper-evident timestamped match validation',
          bullet2: 'Official section for technical complaints or reserves',
          bullet3: 'Automatic lock preventing alterations post-signature',
        },
        {
          id: 'display',
          tag: 'Arena View',
          title: 'Arena & Gymnasium Giant TV Display',
          description:
            'Turn any TV, projector, or LED board into a broadcast-quality scoreboard via HDMI or wireless mirroring with zero perceptible latency.',
          bullet1: 'Ultra-high contrast legible from across the gymnasium',
          bullet2: 'Displays team names, logos, score, and active 2-min penalties',
          bullet3: 'Dedicated full-screen mode without annoying browser toolbars',
        },
        {
          id: 'pwa',
          tag: 'Bulletproof',
          title: '100% Offline PWA & Autonomous Local Storage',
          description:
            'Gymnasium basement with zero Wi-Fi or cellular service? No problem. HandballScore Pro runs fully offline and saves every second locally.',
          bullet1: 'Progressive Web App installable on iPad, Android, Windows, Mac',
          bullet2: 'Zero data loss during accidental reboots or power outages',
          bullet3: 'Automatic cloud sync once network connectivity resumes',
        },
      ],
    },
    demoSection: {
      kicker: 'Hands-on Experience',
      title: 'Interact with the live simulator below',
      subtitle: 'Test starting the match clock, adding goals, triggering a 2-min penalty, or testing the arena buzzer.',
      tabs: {
        tableConsole: '1. Scorer Table Console',
        matchSheet: '2. Official Match Sheet',
        scoreboard: '3. Arena LED Display',
      },
      console: {
        matchTime: 'GAME CLOCK',
        start: 'Start Clock',
        pause: 'Pause Clock',
        reset: 'Reset',
        add2Min: '+ 2-Min Suspension',
        triggerHorn: 'Table Buzzer Horn',
        triggerWhistle: 'Referee Whistle',
        timeoutBtn: 'Team Timeout (60s)',
        homeGoals: 'Home Goals',
        awayGoals: 'Away Goals',
        penaltiesActive: 'Active 2-Min Suspensions',
        noPenalties: 'No active suspensions on the court',
        remainingTime: 'Time remaining',
        playerNum: 'Player #',
      },
      sheet: {
        officialHeader: 'OFFICIAL HANDBALL MATCH REPORT SHEET',
        subHeader: 'In Accordance with Regulations',
        signaturesTitle: 'OFFICIAL MATCH VALIDATION & SIGNATURES',
        referee1: '1st Referee',
        referee2: '2nd Referee',
        timekeeper: 'Timekeeper',
        secretary: 'Table Secretary',
        signedNotice: 'Certified official document after score reconciliation',
        signPrompt: 'Sign using touch or mouse in the box below:',
        clearSig: 'Clear signature',
        printBtn: 'Print / Export A4 PDF',
      },
      displayTab: {
        arenaViewNotice: 'Optimized layout for HDMI cable feed to gym LED board or wall TV.',
        fullscreenBtn: 'Toggle Fullscreen Mode',
      },
    },
    pricing: {
      kicker: 'Pricing & Developer Support',
      title: 'Full access for only 30 DH per year',
      subtitle:
        'To encourage the developer and support app maintenance, the annual subscription is set at a symbolic rate of 30 Moroccan Dirhams.',
      billingNotice: 'One-time annual payment of 30 DH with zero hidden fees. Instant web app access.',
      plans: [
        {
          id: 'tournament',
          name: 'Discovery Access',
          tagline: 'Ideal for testing the app during a tournament or weekend.',
          price: '10 DH',
          period: 'for 7 days',
          features: [
            'Complete official match clock',
            '2-min suspensions & cards',
            'Official A4 PDF scoresheet',
            'Arena TV / HDMI Scoreboard display',
            '100% offline functionality (PWA)',
          ],
          cta: 'Try App',
        },
        {
          id: 'club',
          badge: '⭐ RECOMMENDED (DEVELOPER SUPPORT)',
          name: 'Full Annual License',
          tagline: 'Unlimited web app access for the whole year.',
          price: '30 DH',
          period: 'per year (30 درهم)',
          features: [
            'Unlimited matches & teams all year long',
            'Official scoresheet with touch signatures',
            'HD/4K gym projection display mode',
            'Built-in acoustic buzzer horns & alerts',
            'Regular updates and priority support',
            'Developer support contribution (تشجيع للمبرمج)',
          ],
          cta: 'Get Web App (30 DH)',
          highlighted: true,
        },
        {
          id: 'league',
          name: 'Institution / League License',
          tagline: 'Equip multiple halls for a sports delegation or school committee.',
          price: '100 DH',
          period: 'for 5 accounts',
          features: [
            '5 full accounts for your sports officials',
            'Custom branding with organization logo',
            'Direct support with the developer',
          ],
          cta: 'Support Team',
        },
      ],
      guarantee: '14-day money-back guarantee.',
      instantAccess: 'Instant access and setup in 30 seconds on https://handballpro.printomrdesigne.workers.dev/.',
    },
    testimonials: {
      kicker: 'Field Testimonials',
      title: 'Trusted by sports teachers and referees',
      subtitle: 'They eradicated 2-minute disputes and elevated their gym matchday experience.',
      items: [
        {
          quote:
            'In intense games, visiting coaches always disputed when a 2-minute penalty was over. With HandballScore Pro on our tablet connected to the gym TV, the timer is huge and undeniable. Truly bravo to the developer for these symbolic 30 DH!',
          author: 'Youssef E.',
          role: 'Sports Teacher & Coordinator',
          club: 'Delegation Taourirt',
          rating: 5,
        },
        {
          quote:
            'An extremely smooth, lightweight app that works offline in our gymnasium. The official scoresheet output is spotless.',
          author: 'Karim B.',
          role: 'Table Secretary',
          club: 'Regional Handball League',
          rating: 5,
        },
        {
          quote:
            'For our U15 school tournament, this software saved our organization. Simple, fast, and pro. Thank you for this great work.',
          author: 'Fatima Z.',
          role: 'Tournament Director',
          club: 'School Sports Committee',
          rating: 5,
        },
      ],
    },
    faq: {
      kicker: 'Frequently Asked Questions',
      title: 'Everything you need to know about the app',
      subtitle: 'Clear, direct answers regarding technical requirements.',
      items: [
        {
          question: 'Why is the annual subscription set at only 30 DH?',
          answer:
            'The 30 DH per year subscription is a symbolic support rate (تشجيع للمبرمج) to encourage the Moroccan developer behind this project, cover minimal hosting costs, and ensure long-term maintenance and future updates.',
        },
        {
          question: 'Does the application require an active Internet connection during matches?',
          answer:
            'No, not at all. HandballScore Pro is an advanced Progressive Web App (PWA). Once opened once, it runs 100% locally and offline in your gymnasium.',
        },
        {
          question: 'How do I access the official web application?',
          answer:
            'The application is directly accessible online at: https://handballpro.printomrdesigne.workers.dev/. You can open it on any browser (Chrome, Safari, Edge) on a PC or tablet.',
        },
        {
          question: 'Can I connect it to our gym TV or projector?',
          answer:
            'Yes, effortlessly! Simply connect your tablet or laptop to your TV or projector using an HDMI cable or Chromecast/AirPlay to display the scoreboard in large format.',
        },
      ],
    },
    ctaBanner: {
      title: 'Upgrade your club or school to the digital age today.',
      subtitle: 'Support the developer for only 30 DH per year and enjoy the ultimate scorer table app.',
      primaryBtn: 'Get Web App (30 DH)',
      secondaryBtn: 'Explore Live Simulator',
      secureNotice: 'Secure checkout · Instant activation · Hosted on https://handballpro.printomrdesigne.workers.dev/',
    },
    footer: {
      brandTagline: 'The gold standard digital solution for handball scorer tables, timing, and officiating.',
      navigationTitle: 'Navigation',
      legalTitle: 'Legal & Compliance',
      supportTitle: 'Contact & Support',
      contactNotice: 'Customer support and developer assistance available 7/7.',
      rights: 'All rights reserved. HandballScore Pro is operated by PrintOMR Designe.',
      disclaimer: 'Hosted on https://handballpro.printomrdesigne.workers.dev/',
    },
  },
  ar: {
    nav: {
      features: 'المميزات',
      demo: 'تجربة حية',
      sheet: 'ورقة المباراة',
      display: 'شاشة القاعة',
      pricing: 'الأسعار والدعم',
      faq: 'الأسئلة الشائعة',
      buyCta: 'الحصول على التطبيق',
      testDemo: 'جرّب التطبيق',
    },
    hero: {
      kicker: '⚡ المرجع الرقمي لطاولة التحكيم في كرة اليد',
      headlinePart1: 'طوّر مباريات كرة اليد في ناديك أو مؤسستك.',
      headlineHighlight: 'توقيت رسمي، إيقافات دقيقتين',
      headlinePart2: 'وورقة مباراة رسمية بنقرة واحدة.',
      subtitle:
        'وداعاً لأخطاء التوقيت اليدوي. جهّز ناديك بتطبيق ويب احترافي متوافق مع لوائح الاتحاد الدولي، سهل الاستخدام على الأجهزة اللوحية وجاهز للعرض على شاشات القاعة عبر كابل HDMI.',
      primaryCta: 'احصل على تطبيق الويب (30 درهم / سنة)',
      secondaryCta: 'شاهد التجربة التفاعلية المباشرة',
      badges: {
        ihf: 'متوافق 100% مع اللوائح الرسمية',
        offline: 'يعمل 100% بدون إنترنت (PWA)',
        screens: 'متوافق مع جميع الشاشات وHDMI القاعات',
      },
      liveStatus: 'مباراة مباشرة · الشوط الثاني',
      period: 'الشوط 2',
      homeTeam: 'إعدادية وادزا',
      awayTeam: 'إعدادية بدر',
      penaltyWarning: 'انتهاء الإيقاف خلال 00:24',
    },
    stats: {
      stat1Value: '+1500',
      stat1Label: 'مباراة مُسجلة',
      stat1Desc: 'من البطولات المدرسية إلى الكؤوس الإقليمية',
      stat2Value: '0 نزاع',
      stat2Label: 'حول إيقافات الدقيقتين',
      stat2Desc: 'تنبيهات صوتية وبصرية فور انتهاء العقوبة',
      stat3Value: '100%',
      stat3Label: 'يعمل دون إنترنت',
      stat3Desc: 'استقرار تام حتى داخل القاعات المغلقة والمعزولة',
      stat4Value: '< 3 دقائق',
      stat4Label: 'سهولة التعلم',
      stat4Desc: 'واجهة مصممة للمتطوعين والأساتذة وحكام الطاولة',
    },
    beforeAfter: {
      kicker: 'التحول الرقمي',
      title: 'لماذا تتخلى المؤسسات والأندية عن الأوراق التقليدية؟',
      subtitle: 'أخطاء التوقيت تسبب مشاكل أسبوعية. اكتشف كيف يضمن HandballScore Pro نزاهة واحترافية التحكيم.',
      beforeTitle: 'الطريقة الورقية والساعة اليدوية التقليدية',
      beforeSubtitle: 'مخاطر أخطاء عالية، توتر للمتطوعين، واحتجاجات مستمرة',
      afterTitle: 'مع HandballScore Pro على الجهاز اللوحي',
      afterSubtitle: 'دقة مطلقة بجزء من الثانية، إشارات صوتية واضحة، وتقرير رسمي فوري',
      points: [
        {
          before: 'نسيان موعد عودة اللاعب الموقوف لدقيقتين، مما يثير غضب مقاعد البدلاء.',
          after: 'عد تنازلي رقمي متزامن لكل لاعب مع رنين صوتي ومؤشر أخضر عند انتهاء العقوبة.',
        },
        {
          before: 'ورقة مباراة مليئة بالشطب وغير مقروءة، وضياع الأوراق في غرف الملابس.',
          after: 'ورقة مباراة رسمية بصيغة A4 PDF متوافقة مع الاتحادات الرياضية بنقرة واحدة.',
        },
        {
          before: 'ساعات توقيت غير دقيقة وصعوبة ضبط الأوقات المستقطعة (60 ثانية).',
          after: 'إدارة آلية للأشواط، الإيقافات التكتيكية وعد تنازلي تلقائي للوقت المستقطع.',
        },
        {
          before: 'لوحة الصالة معطلة أو فقدان جهاز التحكم عن بعد.',
          after: 'توصيل أي شاشة تلفاز أو جهاز عرض عبر كابل HDMI لعرض النتائج مباشرة للجمهور.',
        },
        {
          before: 'البحث عن الحكام في الممرات بعد المباراة للحصول على التوقيعات اليدوية.',
          after: 'شاشة توقيع إلكتروني مدمجة مباشرة على الجهاز فور إطلاق صافرة النهاية.',
        },
      ],
    },
    features: {
      kicker: 'المنظومة المتكاملة للمباريات',
      title: 'جميع المعايير الرسمية في أداة رقمية واحدة فائقة السلاسة',
      subtitle: 'تم تطويرها بالتعاون المباشر مع حكام معتمدين ومسؤولي طاولات كرة اليد.',
      items: [
        {
          id: 'chrono',
          tag: 'دقة عالية',
          title: 'ساعة المباراة وإدارة الأشواط',
          description:
            'تدعم جميع الفئات: الكبار، الناشئين، البطولة المدرسية U15، الأشواط الإضافية وإيقاف التوقيت بدقة أجزاء الثانية.',
          bullet1: 'الأوقات المستقطعة للفرق مع عد تنازلي 60 ثانية وتنبيه صوتي',
          bullet2: 'إدارة فترات الراحة والأشواط الإضافية تلقائياً',
          bullet3: 'إيقاف فوري للوقت بنقرة واحدة عند صافرة الحكم',
        },
        {
          id: 'exclusions',
          tag: 'إنهاء النزاعات',
          title: 'نظام ذكي لإدارة عقوبات الدقيقتين والبطاقات',
          description:
            'إدارة متزامنة لعقوبات متعددة مع تحديد رقم قميص اللاعب. عد تنازلي مباشر ورنين صوتي يتيح للاعب العودة فوراً.',
          bullet1: 'البطاقات الصفراء (الإنذارات) مع مراقبة الحد الأقصى للفريق',
          bullet2: 'البطاقات الحمراء (استبعاد) والبطاقات الزرقاء (تقرير خطي)',
          bullet3: 'مزامنة دقيقة مع شاشة القاعة المعروضة للجمهور',
        },
        {
          id: 'pdf',
          tag: 'اعتماد رسمي',
          title: 'ورقة المباراة الإلكترونية الرسمية (PDF A4)',
          description:
            'إنشاء ورقة مباراة شاملة متوافقة مع اللوائح الرسمية: تشكيلة الفريقين، أرقام الرخص، التسلسل الزمني للأهداف، والعقوبات.',
          bullet1: 'تنسيق قياسي A4 جاهز للطباعة الفورية',
          bullet2: 'تصدير مباشر عبر البريد الإلكتروني أو الحفظ المحلي',
          bullet3: 'أرشيف رقمي آمن للجان المسابقات',
        },
        {
          id: 'signatures',
          tag: 'بلا أوراق',
          title: 'التوقيع الإلكتروني للحكام ومسؤولي الطاولة',
          description:
            'في ختام اللقاء، اجمع التوقيعات الرقمية مباشرة على شاشة اللمس: الحكم الأول، الحكم الثاني، الميقاتي، ومسجل الطاولة.',
          bullet1: 'توثيق زمني دقيق غير قابل للتلاعب لنتيجة المباراة',
          bullet2: 'خانة خاصة للتحفظات الفنية والاحتجاجات الرسمية',
          bullet3: 'قفل تلقائي يمنع أي تعديل بعد اعتماد التوقيعات',
        },
        {
          id: 'display',
          tag: 'تجربة الجمهور',
          title: 'عرض الشاشة الكبرى / تلفزيون القاعة',
          description:
            'حوّل أي شاشة تلفزيون أو جهاز عرض في صالتك إلى لوحة نتائج رقمية احترافية عبر كابل HDMI وبدون أي تأخير مرئي.',
          bullet1: 'تباين بصري فائق الوضوح ومقروء من جميع مدرجات الصالة',
          bullet2: 'عرض أسماء الفرق، الشعارات، النتيجة، وعقوبات الـ 2 دقيقة الجارية',
          bullet3: 'وضع الشاشة الكاملة (Full Screen) دون أشرطة تصفح مزعجة',
        },
        {
          id: 'pwa',
          tag: 'موثوقية مطلقة',
          title: 'تطبيق PWA يعمل بدون إنترنت مع حفظ محلي',
          description:
            'هل تعاني من انعدام شبكة الهاتف داخل الصالة الرياضية؟ لا تقلق. التطبيق يعمل باستقلالية تامة ويحفظ كل حركة محلياً.',
          bullet1: 'تطبيق ويب تقدمي قابل للتثبيت على iPad، أندرويد، ويندوز، ماك',
          bullet2: 'صفر فقدان للبيانات في حال انقطاع التيار الكهربائي',
          bullet3: 'مزامنة تلقائية فور توفر اتصال بالإنترنت',
        },
      ],
    },
    demoSection: {
      kicker: 'تجربة عملية فورية',
      title: 'جرّب وحدة التحكم التفاعلية مباشرة أدناه',
      subtitle: 'انقر على الأزرار لتشغيل التوقيت، تسجيل الأهداف، تفعيل عقوبة الدقيقتين، أو اختبار بوق القاعة الصوتي.',
      tabs: {
        tableConsole: '1. وحدة تحكم طاولة الحكام',
        matchSheet: '2. ورقة المباراة الرسمية A4',
        scoreboard: '3. شاشة العرض بالقاعة',
      },
      console: {
        matchTime: 'وقت المباراة',
        start: 'بدء التوقيت',
        pause: 'إيقاف مؤقت',
        reset: 'إعادة ضبط',
        add2Min: '+ إيقاف دقيقتين',
        triggerHorn: 'تشغيل بوق الطاولة',
        triggerWhistle: 'صافرة الحكم',
        timeoutBtn: 'وقت مستقطع (60 ثانية)',
        homeGoals: 'أهداف المضيف',
        awayGoals: 'أهداف الضيف',
        penaltiesActive: 'عقوبات الـ 2 دقيقة الجارية',
        noPenalties: 'لا توجد عقوبات جارية في الملعب حالياً',
        remainingTime: 'الوقت المتبقي',
        playerNum: 'لاعب رقم',
      },
      sheet: {
        officialHeader: 'ورقة المباراة الرسمية لكرة اليد',
        subHeader: 'وفقاً للقوانين واللوائح الرسمية',
        signaturesTitle: 'اعتماد وتوقيعات طاقم التحكيم',
        referee1: 'الحكم الأول',
        referee2: 'الحكم الثاني',
        timekeeper: 'الميقاتي',
        secretary: 'مسجل الطاولة',
        signedNotice: 'وثيقة رسمية معتمدة بعد مراجعة النتيجة وتفاصيل اللقاء',
        signPrompt: 'التوقيع بالإصبع أو بالفأرة في المربع أدناه:',
        clearSig: 'مسح التوقيع',
        printBtn: 'طباعة / تصدير PDF A4',
      },
      displayTab: {
        arenaViewNotice: 'تصميم مخصص للبث المباشر عبر HDMI لشاشات القاعة الكبرى.',
        fullscreenBtn: 'تبديل إلى وضع ملء الشاشة',
      },
    },
    pricing: {
      kicker: 'الدعم والأسعار',
      title: 'اشتراك سنوي بـ 30 درهم فقط (تشجيع للمبرمج)',
      subtitle: 'لتحفيز المبرمج ودعم تطوير التطبيق واستمرار صيانته، تم تحديد رمز اشتراك سنوي قدره 30 درهم مغربي فقط.',
      billingNotice: 'دفعة سنوية واحدة بقيمة 30 DH بدون أي رسوم خفية. وصول فوري إلى تطبيق الويب.',
      plans: [
        {
          id: 'tournament',
          name: 'تجربة سريعة',
          tagline: 'مثالي لتجربة التطبيق خلال بطولة عطلة نهاية الأسبوع.',
          price: '10 درهم',
          period: 'لمدة 7 أيام',
          features: [
            'ساعة مباراة رسمية كاملة',
            'إيقافات دقيقتين وبطاقات',
            'ورقة مباراة PDF رسمية',
            'وضع عرض الشاشة TV / HDMI',
            'يعمل 100% بدون إنترنت',
          ],
          cta: 'تجربة التطبيق',
        },
        {
          id: 'club',
          badge: '⭐ الأكثر طلباً (تشجيع للمبرمج)',
          name: 'الاشتراك السنوي الكامل',
          tagline: 'وصول غير محدود لتطبيق الويب طوال السنة.',
          price: '30 درهم',
          period: 'سنوياً (30 DH)',
          features: [
            'مباريات وفرق غير محدودة طوال العام',
            'ورقة مباراة رسمية مع التوقيع الإلكتروني',
            'وضع العرض فائق الوضوح HD/4K للقاعات',
            'تنبيهات وأبواق صوتية مدمجة',
            'تحديثات مستمرة ودعم تقني مباشر',
            'مساهمة تشجيعية للمبرمج (تشجيع للمبرمج)',
          ],
          cta: 'الحصول على التطبيق (30 DH)',
          highlighted: true,
        },
        {
          id: 'league',
          name: 'باقة المندوبية / المؤسسة',
          tagline: 'لتجهيز عدة قاعات وأقسام رياضية متعددة.',
          price: '100 درهم',
          period: 'لـ 5 حسابات',
          features: [
            '5 حسابات كاملة للمسؤولين الرياضيين',
            'تخصيص بشعار المؤسسة أو اللجنة',
            'دعم مباشر مع المبرمج',
          ],
          cta: 'دعم الفريق',
        },
      ],
      guarantee: 'ضمان استرداد المبلغ خلال 14 يوماً.',
      instantAccess: 'تفعيل فوري خلال ثوانٍ على الرابط الرسمي: https://handballpro.printomrdesigne.workers.dev/.',
    },
    testimonials: {
      kicker: 'آراء من أرض الميدان',
      title: 'يحظى بثقة الأساتذة والحكام ومسؤولي الطاولات',
      subtitle: 'تخلصوا من ضغوط التوقيت ومنحوا قاعاتهم طابعاً احترافياً.',
      items: [
        {
          quote:
            'في المباريات الحاسمة، كان المدربون دائماً يحتجون على وقت الإيقاف. مع هذا التطبيق على جهازنا اللوحي وشاشة الصالة، أصبح الوقت واضحاً وبارزاً للجميع. شكراً جزيلاً للمبرمج على هذه المبادرة الرمزية بـ 30 درهم!',
          author: 'يوسف إ.',
          role: 'أستاذ ومؤطر رياضي',
          club: 'ديرسية تاوريرت',
          rating: 5,
        },
        {
          quote:
            'تطبيق سلس للغاية وخفيف، يعمل بكفاءة تامة بدون إنترنت داخل الصالة الرياضية. تقرير الورقة الرسمية احترافي وجاهز.',
          author: 'كريم ب.',
          role: 'مسجل الطاولة',
          club: 'الصبغة الجهوية لكرة اليد',
          rating: 5,
        },
        {
          quote:
            'خلال دورتنا الرياضية المدرسية U15، أنقذنا هذا البرنامج تنظيمياً. بسيط، سريع، واحترافي. بارك الله في جهود المبرمج.',
          author: 'فاطمة ز.',
          role: 'منظمة دوريات مدرسية',
          club: 'لجنة الرياضة المدرسية',
          rating: 5,
        },
      ],
    },
    faq: {
      kicker: 'الأسئلة الشائعة',
      title: 'كل ما تحتاج معرفته عن التطبيق',
      subtitle: 'إجابات مباشرة وواضحة لجميع الاستفسارات.',
      items: [
        {
          question: 'لماذا تم تحديد الاشتراك السنوي في 30 درهم فقط؟',
          answer:
            'الاشتراك السنوي بقيمة 30 درهم هو مبلغ رمزي جداً بهدف تشجيع المبرمج (تشجيع للمبرمج) ودعم استمرار صيانة التطبيق وتطوير مميزات إضافية، وتغطية تكاليف الاستضافة البسيطة.',
        },
        {
          question: 'هل يحتاج التطبيق إلى اتصال بالإنترنت أثناء المباراة؟',
          answer:
            'لا، على الإطلاق. التطبيق مصمم بتقنية PWA الحديثة ويعمل 100% محلياً ودون الحاجة لشبكة إنترنت داخل القاعة الرياضية.',
        },
        {
          question: 'كيف يمكنني الولوج إلى التطبيق الرسمي؟',
          answer:
            'التطبيق متاح ومستضاف مباشرة على الرابط الرسمي: https://handballpro.printomrdesigne.workers.dev/. يمكنك فتحه في أي متصفح على حاسوبك أو جهازك اللوحي.',
        },
        {
          question: 'هل يمكن ربطه بشاشة التلفاز في القاعة؟',
          answer:
            'نعم بكل سهولة! يكفي توصيل اللابتوب أو التابلت بالشاشة عبر كابل HDMI لعرض النتيجة والتوقيت بخط عريض وواضح لجميع الحاضرين.',
        },
      ],
    },
    ctaBanner: {
      title: 'ارتقِ بمستوى ناديك أو مؤسستك الرياضية اليوم.',
      subtitle: 'ادعم المبرمج بـ 30 درهم فقط سنوياً واحصل على التطبيق الرائد لإدارة مباريات كرة اليد.',
      primaryBtn: 'احصل على التطبيق (30 درهم)',
      secondaryBtn: 'جرّب التجربة الحية',
      secureNotice: 'دفع آمن · تفعيل فوري · مستضاف على https://handballpro.printomrdesigne.workers.dev/',
    },
    footer: {
      brandTagline: 'الحل الرقمي المرجعي لطاولة التحكيم، التوقيت المعتمد وإدارة مباريات كرة اليد الحديثة.',
      navigationTitle: 'التنقل في الموقع',
      legalTitle: 'المعلومات القانونية',
      supportTitle: 'الدعم الفني والتواصل',
      contactNotice: 'الدعم الفني ومساعدة المبرمج متاحون طيلة أيام الأسبوع.',
      rights: 'جميع الحقوق محفوظة. HandballScore Pro مقدم من PrintOMR Designe.',
      disclaimer: 'مستضاف على الرابط الرسمي https://handballpro.printomrdesigne.workers.dev/',
    },
  },
};
