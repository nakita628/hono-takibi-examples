import { createRoute, z } from '@hono/zod-openapi'

const ComptageReponseEtatEtatSchema = z
  .object({
    nb_caractere: z.string().exactOptional().openapi({ description: 'nombre de caractères' }),
    nb_sms: z.string().exactOptional().openapi({ description: 'nombre de sms nécessaires' }),
    tel: z.string().exactOptional().openapi({ description: 'numéro de téléphone' }),
  })
  .openapi({ required: [] })
  .openapi('ComptageReponseEtatEtat')

const ComptageReponseEtatSchema = z
  .object({ etat: z.array(ComptageReponseEtatEtatSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ComptageReponseEtat')

const ComptageReponseSchema = z
  .object({ etat: ComptageReponseEtatSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ComptageReponse')

const ComptageRequestSchema = z
  .object({
    comptage: z.literal('1').default('1'),
    date_envoi: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Date d'envoi au format YYYY-MM-DD hh:mm . Ce paramètre est optionnel, si il est omis l'envoi est réalisé immédiatement.",
      }),
    emetteur: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "- L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères.\n\n- Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace.\n\n- Il ne peut pas comporter uniquement des chiffres. \n\n- Pour la modification de l'émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d'ajouter en fin de message le texte \"STOP XXXXX\". De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement.\n",
      }),
    gmt_zone: z
      .enum([
        'Pacific/Midway',
        'America/Adak',
        'Etc/GMT+10',
        'Pacific/Marquesas',
        'Pacific/Gambier',
        'America/Anchorage',
        'America/Ensenada',
        'Etc/GMT+8',
        'America/Los_Angeles',
        'America/Denver',
        'America/Chihuahua',
        'America/Dawson_Creek',
        'America/Belize',
        'America/Cancun',
        'Chile/EasterIsland',
        'America/Chicago',
        'America/New_York',
        'America/Havana',
        'America/Bogota',
        'America/Caracas',
        'America/Santiago',
        'America/La_Paz',
        'Atlantic/Stanley',
        'America/Campo_Grande',
        'America/Goose_Bay',
        'America/Glace_Bay',
        'America/St_Johns',
        'America/Araguaina',
        'America/Montevideo',
        'America/Miquelon',
        'America/Godthab',
        'America/Argentina/Buenos_Aires',
        'America/Sao_Paulo',
        'America/Noronha',
        'Atlantic/Cape_Verde',
        'Atlantic/Azores',
        'Europe/Belfast',
        'Europe/Dublin',
        'Europe/Lisbon',
        'Europe/London',
        'Africa/Abidjan',
        'Europe/Amsterdam',
        'Europe/Belgrade',
        'Europe/Brussels',
        'Africa/Algiers',
        'Africa/Windhoek',
        'Asia/Beirut',
        'Africa/Cairo',
        'Asia/Gaza',
        'Africa/Blantyre',
        'Asia/Jerusalem',
        'Europe/Minsk',
        'Asia/Damascus',
        'Europe/Moscow',
        'Africa/Addis_Ababa',
        'Asia/Tehran',
        'Asia/Dubai',
        'Asia/Yerevan',
        'Asia/Kabul',
        'Asia/Yekaterinburg',
        'Asia/Tashkent',
        'Asia/Kolkata',
        'Asia/Katmandu',
        'Asia/Dhaka',
        'Asia/Novosibirsk',
        'Asia/Rangoon',
        'Asia/Bangkok',
        'Asia/Krasnoyarsk',
        'Asia/Hong_Kong',
        'Asia/Irkutsk',
        'Australia/Perth',
        'Australia/Eucla',
        'Asia/Tokyo',
        'Asia/Seoul',
        'Asia/Yakutsk',
        'Australia/Adelaide',
        'Australia/Darwin',
        'Australia/Brisbane',
        'Australia/Hobart',
        'Asia/Vladivostok',
        'Australia/Lord_Howe',
        'Etc/GMT-11',
        'Asia/Magadan',
        'Pacific/Norfolk',
        'Asia/Anadyr',
        'Pacific/Auckland',
        'Etc/GMT-12',
        'Pacific/Chatham',
        'Pacific/Tongatapu',
        'Pacific/Kiritimati',
      ])
      .exactOptional()
      .openapi({ description: "Fuseau horaire de la date d'envoi" }),
    keyid: z.string().openapi({ description: 'Clé API' }),
    nostop: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1"',
      }),
    num: z
      .string()
      .openapi({
        description:
          'Numero de téléphone au format national (exemple 0680010203) ou international (example 33680010203)',
      }),
    numAzur: z.literal('1').exactOptional(),
    sms: z
      .string()
      .openapi({
        description:
          "Message à envoyer aux destinataires. Le message doit être encodé au format utf-8 et ne contenir que des caractères existant dans l'alphabet GSM. Il est également possible d'envoyer (à l'étranger uniquement) des SMS en UCS-2, cf paramètre ucs2 pour plus de détails.",
      }),
    smslong: z
      .literal('999')
      .default('999')
      .exactOptional()
      .openapi({
        description:
          'Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué\nde plusieurs SMS.\nIl est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918\ncaractères par message.\nPour des raisons technique, la limite par SMS concaténé étant de 153 caractères.\nEn cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères\ndu « STOP SMS ».\nPour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = "999"\n',
      }),
    tracker: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Le tracker doit être une chaine alphanumérique de moins de 50 caractères. Ce tracker sera ensuite renvoyé en paramètre des urls pour les retours des accusés de réception. ',
      }),
    ucs2: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur\nles numéros hors France métropolitaine.\nPour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = "1"\nDu fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu\ndes 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères.\n',
      }),
  })
  .openapi({
    example: {
      comptage: '1',
      emetteur: 'iSendPro',
      keyid: 'VOTRE_KEYID',
      num: '0600123456',
      sms: 'Bonjour! Bienvenue sur iSendPro!',
    },
    required: ['comptage', 'keyid', 'num', 'sms'],
  })
  .openapi('ComptageRequest')

const CreditResponseEtatSchema = z
  .object({
    credit: z.float64().exactOptional().openapi({ description: 'Montant du crédit restant' }),
    quantite: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Equivalence du crédit en nombre de SMS vers la France Métropolitaine.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreditResponseEtat')

const CreditResponseSchema = z
  .object({ etat: CreditResponseEtatSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreditResponse')

const ErreurEtatEtatSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Code retour. Voir "tableau des code retour" dans l\'annexe de la documentation',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Libellé associé au code de retour' }),
  })
  .openapi({ required: [] })
  .openapi('ErreurEtatEtat')

const ErreurEtatSchema = z
  .object({ etat: z.array(ErreurEtatEtatSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ErreurEtat')

const ErreurSchema = z
  .object({ etat: ErreurEtatSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Erreur')

const HLRReponseEtatEtatSchema = z
  .object({
    operateur: z.string().openapi({ description: 'Opérateur associé (si numéro valide)' }),
    tel: z.string().openapi({ description: 'Numero de téléphone concerné' }),
  })
  .openapi({ required: ['operateur', 'tel'] })
  .openapi('HLRReponseEtatEtat')

const HLRReponseEtatSchema = z
  .object({ etat: z.array(HLRReponseEtatEtatSchema).openapi({ description: 'liste des retours' }) })
  .openapi({ required: ['etat'] })
  .openapi('HLRReponseEtat')

const HLRReponseSchema = z
  .object({ etat: HLRReponseEtatSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('HLRReponse')

const HLRrequestSchema = z
  .object({
    getHLR: z.literal('1').default('1').openapi({ description: 'Doit valoir "1"' }),
    keyid: z.string().openapi({ description: 'Clé API' }),
    num: z
      .array(
        z.string().openapi({ description: 'numéro au format national français ou international' }),
      )
      .openapi({ description: 'liste de numéros de téléphone' }),
  })
  .openapi({
    example: { getHLR: '1', keyid: 'VOTRE_KEYID', num: ['06123456789', '06345687899'] },
    required: ['getHLR', 'keyid', 'num'],
  })
  .openapi('HLRrequest')

const LISTENOIREReponseEtatEtatSchema = z
  .object({
    listeNoire: z.string().openapi({ description: 'Doit valoir "OK"' }),
    tel: z
      .string()
      .openapi({
        description:
          'Numéro de téléphone à placer en liste noire. Format national Français ou international.',
      }),
  })
  .openapi({ required: ['listeNoire', 'tel'] })
  .openapi('LISTENOIREReponseEtatEtat')

const LISTENOIREReponseEtatSchema = z
  .object({ etat: z.array(LISTENOIREReponseEtatEtatSchema) })
  .openapi({ required: ['etat'] })
  .openapi('LISTENOIREReponseEtat')

const LISTENOIREReponseSchema = z
  .object({ etat: LISTENOIREReponseEtatSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('LISTENOIREReponse')

const REPERTOIREcreatereponseEtatEtatSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Code retour. Voir "tableau des code retour" dans l\'annexe de la documentation',
      }),
    message: z.string().exactOptional().openapi({ description: 'Libellé associé au code retour.' }),
    repertoireId: z
      .string()
      .exactOptional()
      .openapi({ description: 'repertoireId du repertoire crée.' }),
  })
  .openapi({ required: ['code'] })
  .openapi('REPERTOIREcreatereponseEtatEtat')

const REPERTOIREcreatereponseEtatSchema = z
  .object({ etat: z.array(REPERTOIREcreatereponseEtatEtatSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('REPERTOIREcreatereponseEtat')

const REPERTOIREcreatereponseSchema = z
  .object({ etat: REPERTOIREcreatereponseEtatSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('REPERTOIREcreatereponse')

const REPERTOIREcreaterequestSchema = z
  .object({
    keyid: z.string().openapi({ description: 'Clé API' }),
    repertoireEdit: z
      .literal('create')
      .default('create')
      .openapi({ description: 'Action à réaliser doit valoir "create" ici.' }),
    repertoireNom: z.string().openapi({ description: 'Nom du répertoire (libellé) à créer' }),
  })
  .openapi({
    example: {
      keyid: 'VOTRE_KEYID',
      repertoireEdit: 'create',
      repertoireNom: 'Repertoire de test',
    },
    required: ['keyid', 'repertoireEdit', 'repertoireNom'],
  })
  .openapi('REPERTOIREcreaterequest')

const REPERTOIREmodifreponseEtatEtatSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Code retour. Voir "tableau des code retour" dans l\'annexe de la documentation',
      }),
    message: z.string().exactOptional().openapi({ description: 'Libellé associé au code retour.' }),
    repertoireId: z
      .string()
      .exactOptional()
      .openapi({ description: "repertoireId passé en argument lors de l'appel" }),
    tel: z.string().exactOptional().openapi({ description: 'Numéro de téléphone' }),
  })
  .openapi({
    description: 'Tableau de code retour. Si succès, un code retour distinct par numéro soumis.',
    required: ['code'],
  })
  .openapi('REPERTOIREmodifreponseEtatEtat')

const REPERTOIREmodifreponseEtatSchema = z
  .object({ etat: z.array(REPERTOIREmodifreponseEtatEtatSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('REPERTOIREmodifreponseEtat')

const REPERTOIREmodifreponseSchema = z
  .object({ etat: REPERTOIREmodifreponseEtatSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('REPERTOIREmodifreponse')

const REPERTOIREmodifrequestSchema = z
  .object({
    champ1: z
      .array(z.string().openapi({ description: 'Nom des contacts' }))
      .exactOptional()
      .openapi({ description: 'Noms des contact' }),
    champ10: z
      .array(z.string().openapi({ description: 'Champ I' }))
      .exactOptional()
      .openapi({ description: 'Champs I des contacts' }),
    champ11: z
      .array(z.string().openapi({ description: 'Champ J' }))
      .exactOptional()
      .openapi({ description: 'Champs J des contacts' }),
    champ12: z
      .array(z.string().openapi({ description: 'Champ K' }))
      .exactOptional()
      .openapi({ description: 'Champs K des contacts' }),
    champ13: z
      .array(z.string().openapi({ description: 'Champ L' }))
      .exactOptional()
      .openapi({ description: 'Champs L des contacts' }),
    champ14: z
      .array(z.string().openapi({ description: 'Champ M' }))
      .exactOptional()
      .openapi({ description: 'Champs M des contacts' }),
    champ15: z
      .array(z.string().openapi({ description: 'Champ N' }))
      .exactOptional()
      .openapi({ description: 'Champs N des contacts' }),
    champ16: z
      .array(z.string().openapi({ description: 'Champ O' }))
      .exactOptional()
      .openapi({ description: 'Champs O des contacts' }),
    champ17: z
      .array(z.string().openapi({ description: 'Champ P' }))
      .exactOptional()
      .openapi({ description: 'Champs P des contacts' }),
    champ18: z
      .array(z.string().openapi({ description: 'Champ Q' }))
      .exactOptional()
      .openapi({ description: 'Champs Q des contacts' }),
    champ19: z
      .array(z.string().openapi({ description: 'Champ R' }))
      .exactOptional()
      .openapi({ description: 'Champs R des contacts' }),
    champ2: z
      .array(z.string().openapi({ description: 'Champ A' }))
      .exactOptional()
      .openapi({ description: 'Champs A des contacts' }),
    champ20: z
      .array(z.string().openapi({ description: 'Champ S' }))
      .exactOptional()
      .openapi({ description: 'Champs S des contacts' }),
    champ21: z
      .array(z.string().openapi({ description: 'Champ T' }))
      .exactOptional()
      .openapi({ description: 'Champs T des contacts' }),
    champ22: z
      .array(z.string().openapi({ description: 'Champ U' }))
      .exactOptional()
      .openapi({ description: 'Champs U des contacts' }),
    champ23: z
      .array(z.string().openapi({ description: 'Champ V' }))
      .exactOptional()
      .openapi({ description: 'Champs V des contacts' }),
    champ24: z
      .array(z.string().openapi({ description: 'Champ W' }))
      .exactOptional()
      .openapi({ description: 'Champs W des contacts' }),
    champ25: z
      .array(z.string().openapi({ description: 'Champ X' }))
      .exactOptional()
      .openapi({ description: 'Champs X des contacts' }),
    champ26: z
      .array(z.string().openapi({ description: 'Champ Y' }))
      .exactOptional()
      .openapi({ description: 'Champs Y des contacts' }),
    champ27: z
      .array(z.string().openapi({ description: 'Champ Z' }))
      .exactOptional()
      .openapi({ description: 'Champs Z des contacts' }),
    champ3: z
      .array(z.string().openapi({ description: 'Champ B' }))
      .exactOptional()
      .openapi({ description: 'Champs B des contacts' }),
    champ4: z
      .array(z.string().openapi({ description: 'Champ C' }))
      .exactOptional()
      .openapi({ description: 'Champs C des contacts' }),
    champ5: z
      .array(z.string().openapi({ description: 'Champ D' }))
      .exactOptional()
      .openapi({ description: 'Champs D des contacts' }),
    champ6: z
      .array(z.string().openapi({ description: 'Champ E' }))
      .exactOptional()
      .openapi({ description: 'Champs E des contacts' }),
    champ7: z
      .array(z.string().openapi({ description: 'Champ F' }))
      .exactOptional()
      .openapi({ description: 'Champs F des contacts' }),
    champ8: z
      .array(z.string().openapi({ description: 'Champ G' }))
      .exactOptional()
      .openapi({ description: 'Champs G des contacts' }),
    champ9: z
      .array(z.string().openapi({ description: 'Champ H' }))
      .exactOptional()
      .openapi({ description: 'Champs H des contacts' }),
    keyid: z.string().openapi({ description: 'Clé API' }),
    num: z
      .array(
        z
          .string()
          .openapi({ description: 'Numéro de téléphone au format national ou international' }),
      )
      .openapi({ description: 'liste des numéros des téléphone à ajouter ou supprimer' }),
    repertoireEdit: z
      .enum(['add', 'del'])
      .openapi({
        description:
          'action à réaliser, "add" pour l\'ajout de numéros, "del" pour la suppression de numéros',
      }),
    repertoireId: z.string().openapi({ description: 'repertoireId du répertoire cible' }),
  })
  .openapi({
    example: {
      keyid: 'VOTRE_KEYID',
      num: ['06123456789', '07123456789'],
      repertoireEdit: 'add',
      repertoireId: 'VOTRE_REPERTOIRE_ID',
    },
    required: ['keyid', 'num', 'repertoireEdit', 'repertoireId'],
  })
  .openapi('REPERTOIREmodifrequest')

const SMSReponseEtatEtatSchema = z
  .object({
    code: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Code retour. Voir "tableau des code retour" dans l\'annexe de la documentation',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Libellé associé au code de retour' }),
    smslong: z.string().exactOptional().openapi({ description: 'Nombre de SMS longs facturés' }),
    tel: z.string().exactOptional().openapi({ description: 'Numero de téléphone concerné' }),
  })
  .openapi({ required: [] })
  .openapi('SMSReponseEtatEtat')

const SMSReponseEtatSchema = z
  .object({ etat: z.array(SMSReponseEtatEtatSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('SMSReponseEtat')

const SMSReponseSchema = z
  .object({ etat: SMSReponseEtatSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('SMSReponse')

const SMSRequestSchema = z
  .object({
    date_envoi: z
      .string()
      .exactOptional()
      .openapi({ description: "Paramètre optionnel, date d'envoi au format YYYY-MM-DD hh:mm" }),
    emetteur: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères. Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace. Il ne peut pas comporter uniquement des chiffres. Pour la modification de l’émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d’ajouter en fin de message le texte suivant : STOP XXXXX De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement.",
      }),
    gmt_zone: z
      .enum([
        'Pacific/Midway',
        'America/Adak',
        'Etc/GMT+10',
        'Pacific/Marquesas',
        'Pacific/Gambier',
        'America/Anchorage',
        'America/Ensenada',
        'Etc/GMT+8',
        'America/Los_Angeles',
        'America/Denver',
        'America/Chihuahua',
        'America/Dawson_Creek',
        'America/Belize',
        'America/Cancun',
        'Chile/EasterIsland',
        'America/Chicago',
        'America/New_York',
        'America/Havana',
        'America/Bogota',
        'America/Caracas',
        'America/Santiago',
        'America/La_Paz',
        'Atlantic/Stanley',
        'America/Campo_Grande',
        'America/Goose_Bay',
        'America/Glace_Bay',
        'America/St_Johns',
        'America/Araguaina',
        'America/Montevideo',
        'America/Miquelon',
        'America/Godthab',
        'America/Argentina/Buenos_Aires',
        'America/Sao_Paulo',
        'America/Noronha',
        'Atlantic/Cape_Verde',
        'Atlantic/Azores',
        'Europe/Belfast',
        'Europe/Dublin',
        'Europe/Lisbon',
        'Europe/London',
        'Africa/Abidjan',
        'Europe/Amsterdam',
        'Europe/Belgrade',
        'Europe/Brussels',
        'Africa/Algiers',
        'Africa/Windhoek',
        'Asia/Beirut',
        'Africa/Cairo',
        'Asia/Gaza',
        'Africa/Blantyre',
        'Asia/Jerusalem',
        'Europe/Minsk',
        'Asia/Damascus',
        'Europe/Moscow',
        'Africa/Addis_Ababa',
        'Asia/Tehran',
        'Asia/Dubai',
        'Asia/Yerevan',
        'Asia/Kabul',
        'Asia/Yekaterinburg',
        'Asia/Tashkent',
        'Asia/Kolkata',
        'Asia/Katmandu',
        'Asia/Dhaka',
        'Asia/Novosibirsk',
        'Asia/Rangoon',
        'Asia/Bangkok',
        'Asia/Krasnoyarsk',
        'Asia/Hong_Kong',
        'Asia/Irkutsk',
        'Australia/Perth',
        'Australia/Eucla',
        'Asia/Tokyo',
        'Asia/Seoul',
        'Asia/Yakutsk',
        'Australia/Adelaide',
        'Australia/Darwin',
        'Australia/Brisbane',
        'Australia/Hobart',
        'Asia/Vladivostok',
        'Australia/Lord_Howe',
        'Etc/GMT-11',
        'Asia/Magadan',
        'Pacific/Norfolk',
        'Asia/Anadyr',
        'Pacific/Auckland',
        'Etc/GMT-12',
        'Pacific/Chatham',
        'Pacific/Tongatapu',
        'Pacific/Kiritimati',
      ])
      .exactOptional()
      .openapi({ description: "Fuseau horaire de la date d'envoi" }),
    keyid: z.string().openapi({ description: 'Clé API' }),
    nostop: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1"',
      }),
    num: z.array(
      z
        .string()
        .openapi({
          description:
            'Numeros de téléphone au format national (exemple 0680010203) ou international (example 33680010203)',
        }),
    ),
    numAzur: z.literal('1').exactOptional(),
    repertoireId: z.string().exactOptional().openapi({ description: 'Id du repertoire' }),
    sms: z.array(
      z
        .string()
        .openapi({
          description:
            'Message à envoyer aux destinataires. Il peut y avoir un seul message ou 1 message par destintaire différent.',
        }),
    ),
    smslong: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué de plusieurs SMS. Il est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918 caractères par message. Pour des raisons technique, la limite par SMS concaténé étant de 153 caractères. En cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères du « STOP SMS ». Pour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = "999" ',
      }),
    tracker: z
      .array(
        z
          .string()
          .openapi({
            description:
              'Le tracker doit être une chaine alphanumérique de moins de 50 caractères. Ce tracker sera ensuite renvoyé en paramètre des urls pour les retours des accusés de réception. ',
          }),
      )
      .exactOptional(),
    ucs2: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur les numéros hors France métropolitaine. Pour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = "1" Du fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu des 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères.',
      }),
  })
  .openapi({
    example: {
      emetteur: 'iSendPro',
      keyid: 'VOTRE_KEYID',
      num: ['0600123456', '0612345678'],
      sms: 'Bonjour! Bienvenue sur iSendPro!',
    },
    required: ['keyid', 'num', 'sms'],
  })
  .openapi('SMSRequest')

const ShortlinkRequestSchema = z
  .object({ keyid: z.string(), shortlink: z.string() })
  .openapi({ required: ['keyid', 'shortlink'] })
  .openapi('ShortlinkRequest')

const ShortlinkResponseSchema = z
  .object({
    etat: z
      .object({
        etat: z
          .array(
            z
              .object({
                code: z.number().exactOptional(),
                message: z.string().exactOptional(),
                shortlink: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ShortlinkResponse')

const SmsUniqueRequestSchema = z
  .object({
    date_envoi: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Date d'envoi au format YYYY-MM-DD hh:mm . Ce paramètre est optionnel, si il est omis l'envoi est réalisé immédiatement.",
      }),
    emetteur: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "- L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères.\n\n- Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace.\n\n- Il ne peut pas comporter uniquement des chiffres. \n\n- Pour la modification de l'émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d'ajouter en fin de message le texte \"STOP XXXXX\". De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement.\n",
      }),
    gmt_zone: z
      .enum([
        'Pacific/Midway',
        'America/Adak',
        'Etc/GMT+10',
        'Pacific/Marquesas',
        'Pacific/Gambier',
        'America/Anchorage',
        'America/Ensenada',
        'Etc/GMT+8',
        'America/Los_Angeles',
        'America/Denver',
        'America/Chihuahua',
        'America/Dawson_Creek',
        'America/Belize',
        'America/Cancun',
        'Chile/EasterIsland',
        'America/Chicago',
        'America/New_York',
        'America/Havana',
        'America/Bogota',
        'America/Caracas',
        'America/Santiago',
        'America/La_Paz',
        'Atlantic/Stanley',
        'America/Campo_Grande',
        'America/Goose_Bay',
        'America/Glace_Bay',
        'America/St_Johns',
        'America/Araguaina',
        'America/Montevideo',
        'America/Miquelon',
        'America/Godthab',
        'America/Argentina/Buenos_Aires',
        'America/Sao_Paulo',
        'America/Noronha',
        'Atlantic/Cape_Verde',
        'Atlantic/Azores',
        'Europe/Belfast',
        'Europe/Dublin',
        'Europe/Lisbon',
        'Europe/London',
        'Africa/Abidjan',
        'Europe/Amsterdam',
        'Europe/Belgrade',
        'Europe/Brussels',
        'Africa/Algiers',
        'Africa/Windhoek',
        'Asia/Beirut',
        'Africa/Cairo',
        'Asia/Gaza',
        'Africa/Blantyre',
        'Asia/Jerusalem',
        'Europe/Minsk',
        'Asia/Damascus',
        'Europe/Moscow',
        'Africa/Addis_Ababa',
        'Asia/Tehran',
        'Asia/Dubai',
        'Asia/Yerevan',
        'Asia/Kabul',
        'Asia/Yekaterinburg',
        'Asia/Tashkent',
        'Asia/Kolkata',
        'Asia/Katmandu',
        'Asia/Dhaka',
        'Asia/Novosibirsk',
        'Asia/Rangoon',
        'Asia/Bangkok',
        'Asia/Krasnoyarsk',
        'Asia/Hong_Kong',
        'Asia/Irkutsk',
        'Australia/Perth',
        'Australia/Eucla',
        'Asia/Tokyo',
        'Asia/Seoul',
        'Asia/Yakutsk',
        'Australia/Adelaide',
        'Australia/Darwin',
        'Australia/Brisbane',
        'Australia/Hobart',
        'Asia/Vladivostok',
        'Australia/Lord_Howe',
        'Etc/GMT-11',
        'Asia/Magadan',
        'Pacific/Norfolk',
        'Asia/Anadyr',
        'Pacific/Auckland',
        'Etc/GMT-12',
        'Pacific/Chatham',
        'Pacific/Tongatapu',
        'Pacific/Kiritimati',
      ])
      .exactOptional()
      .openapi({ description: "Fuseau horaire de la date d'envoi" }),
    keyid: z.string().openapi({ description: 'Clé API' }),
    nostop: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = "1"',
      }),
    num: z
      .string()
      .openapi({
        description:
          'Numero de téléphone au format national (exemple 0680010203) ou international (example 33680010203)',
      }),
    numAzur: z.literal('1').exactOptional(),
    sms: z
      .string()
      .openapi({
        description:
          "Message à envoyer aux destinataires. Le message doit être encodé au format utf-8 et ne contenir que des caractères existant dans l'alphabet GSM. Il est également possible d'envoyer (à l'étranger uniquement) des SMS en UCS-2, cf paramètre ucs2 pour plus de détails.",
      }),
    smslong: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué\nde plusieurs SMS.\nIl est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918\ncaractères par message.\nPour des raisons technique, la limite par SMS concaténé étant de 153 caractères.\nEn cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères\ndu « STOP SMS ».\nPour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = "999"\n',
      }),
    tracker: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Le tracker doit être une chaine alphanumérique de moins de 50 caractères. Ce tracker sera ensuite renvoyé en paramètre des urls pour les retours des accusés de réception. ',
      }),
    ucs2: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur\nles numéros hors France métropolitaine.\nPour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = "1"\nDu fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu\ndes 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères.\n',
      }),
  })
  .openapi({
    example: {
      emetteur: 'iSendPro',
      keyid: 'VOTRE_KEYID',
      num: '0600123456',
      sms: 'Bonjour! Bienvenue sur iSendPro!',
    },
    required: ['keyid', 'num', 'sms'],
  })
  .openapi('SmsUniqueRequest')

const SubaccountAddRequestSchema = z
  .object({
    keyid: z.string(),
    subAccountEdit: z.literal('addAccount'),
    subAccountLogin: z.string(),
    subAccountPassword: z.string(),
  })
  .openapi({ required: ['keyid', 'subAccountEdit', 'subAccountLogin', 'subAccountPassword'] })
  .openapi('SubaccountAddRequest')

const SubaccountAddResponseSchema = z
  .object({
    etat: z
      .object({
        etat: z
          .array(
            z
              .object({
                code: z.number().exactOptional(),
                message: z.string().exactOptional(),
                subAccountId: z.string().exactOptional(),
                subAccountKeyId: z.string().exactOptional(),
                subAccountLogin: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('SubaccountAddResponse')

const SubaccountRequestSchema = z
  .object({
    keyid: z.string().openapi({ description: 'Clé API' }),
    subAccountAddCredit: z
      .string()
      .exactOptional()
      .openapi({ description: 'montant du crédit à ajouter' }),
    subAccountCountryCode: z.string().exactOptional(),
    subAccountEdit: z
      .enum(['setPrice', 'addCredit', 'setRestriction'])
      .openapi({
        description:
          'action à réaliser soit setPrice pour définir un prix ou addCredit pour ajouter du credit ou setRestriction modifier la restriction stop /',
      }),
    subAccountKeyId: z.string().exactOptional().openapi({ description: 'keyid du sous-compte' }),
    subAccountPrice: z.string().exactOptional(),
    subAccountRestrictionStop: z.enum(['0', '1']).exactOptional(),
    subAccountRestrictionTime: z.enum(['0', '1']).exactOptional(),
  })
  .openapi({ required: ['keyid', 'subAccountEdit'] })
  .openapi('SubaccountRequest')

const SubaccountResponseSchema = z
  .object({
    etat: z
      .object({
        etat: z
          .array(
            z
              .object({
                code: z.string().exactOptional(),
                message: z.string().exactOptional(),
                subAccountId: z.string().exactOptional(),
                subAccountKeyid: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('SubaccountResponse')

export const getCampagneRoute = createRoute({
  method: 'get',
  path: '/campagne',
  tags: ['campagne'],
  summary: 'Retourne les SMS envoyés sur une période donnée',
  description:
    "Retourne les SMS envoyés sur une période donnée en fonction d'une date de début et d'une date de fin. \n\nLes dates sont au format YYYY-MM-DD hh:mm. \n\nLe fichier rapport de campagne est sous la forme d'un fichier zip + contenant un fichier csv contenant le détail des envois.\n",
  operationId: 'getCampagne',
  request: {
    query: z.object({
      keyid: z
        .string()
        .openapi({
          param: {
            description: 'Clé API',
            in: 'query',
            name: 'keyid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      rapportCampagne: z
        .literal('1')
        .openapi({
          param: {
            description: 'Doit valoir "1"',
            in: 'query',
            name: 'rapportCampagne',
            required: true,
            schema: { enum: ['1'], type: 'string' },
          },
        }),
      date_deb: z
        .string()
        .openapi({
          param: {
            description: 'date de debut au format YYYY-MM-DD hh:mm',
            in: 'query',
            name: 'date_deb',
            required: true,
            schema: { type: 'string' },
          },
        }),
      date_fin: z
        .string()
        .openapi({
          param: {
            description: 'date de fin au format YYYY-MM-DD hh:mm',
            in: 'query',
            name: 'date_fin',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        file: { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: {
      description: 'Erreur',
      content: { 'application/json': { schema: ErreurSchema }, file: { schema: ErreurSchema } },
    },
  },
})

export const postComptageRoute = createRoute({
  method: 'post',
  path: '/comptage',
  tags: ['comptage'],
  summary: 'Compter le nombre de caractère ',
  description: 'Compte le nombre de SMS necessaire à un envoi',
  operationId: 'comptage',
  request: {
    body: {
      description: 'sms request',
      content: { 'application/json': { schema: ComptageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Reponse OK',
      content: { 'application/json': { schema: ComptageReponseSchema } },
    },
    400: {
      description: 'Dysfonctionnement',
      content: { 'application/json': { schema: ErreurSchema } },
    },
  },
})

export const getCreditRoute = createRoute({
  method: 'get',
  path: '/credit',
  tags: ['credit'],
  summary: 'Interrogation credit',
  description: 'Retourne le credit existant associe au compte.\n',
  operationId: 'getCredit',
  request: {
    query: z.object({
      keyid: z
        .string()
        .openapi({
          param: {
            description: 'Clé API',
            in: 'query',
            name: 'keyid',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      credit: z
        .enum(['1', '2'])
        .openapi({
          param: {
            description: 'Type de reponse demandée, 1 pour euro, 2 pour euro + estimation quantité',
            in: 'query',
            name: 'credit',
            required: true,
            schema: { enum: ['1', '2'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: CreditResponseSchema,
          examples: { response: { value: { etat: { credit: '10.0' } } } },
        },
      },
    },
    400: { description: 'Erreur', content: { 'application/json': { schema: ErreurSchema } } },
  },
})

export const postDellistenoireRoute = createRoute({
  method: 'post',
  path: '/dellistenoire',
  tags: ['delListeNoire'],
  summary: 'Ajoute un numero en liste noire',
  description: 'Supprime un numero en liste noire',
  operationId: 'delListeNoire',
  request: {
    query: z.object({
      keyid: z
        .string()
        .openapi({
          param: {
            description: 'Clé API',
            in: 'query',
            name: 'keyid',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      delListeNoire: z
        .literal('1')
        .openapi({
          param: {
            description: 'Doit valoir "1"',
            in: 'query',
            name: 'delListeNoire',
            required: true,
            schema: { enum: ['1'], type: 'string' },
          },
        }),
      num: z
        .string()
        .openapi({
          param: {
            description: 'numéro de mobile à supprimer',
            in: 'query',
            name: 'num',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LISTENOIREReponseSchema } },
    },
    400: { description: 'Erreur', content: { 'application/json': { schema: ErreurSchema } } },
  },
})

export const postGetlistenoireRoute = createRoute({
  method: 'post',
  path: '/getlistenoire',
  tags: ['getListeNoire'],
  summary: 'Retourne le liste noire',
  description: 'Retourne un fichier csv zippé contenant la liste noire',
  operationId: 'getListeNoire',
  request: {
    query: z.object({
      keyid: z
        .string()
        .openapi({
          param: {
            description: 'Clé API',
            in: 'query',
            name: 'keyid',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      getListeNoire: z
        .literal('1')
        .openapi({
          param: {
            description: 'Doit valoir "1"',
            in: 'query',
            name: 'getListeNoire',
            required: true,
            schema: { enum: ['1'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: { description: 'Erreur', content: { 'application/json': { schema: ErreurSchema } } },
  },
})

export const postHlrRoute = createRoute({
  method: 'post',
  path: '/hlr',
  tags: ['hlr'],
  summary: "Vérifier la validité d'un numéro",
  description: 'Réalise un lookup HLR sur les numéros \n',
  operationId: 'getHlr',
  request: {
    body: { content: { 'application/json': { schema: HLRrequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Reponse OK',
      content: {
        'application/json': {
          schema: HLRReponseSchema,
          examples: {
            response: { value: { etat: { etat: { operateur: 'ORAN', tel: '0680010203' } } } },
          },
        },
      },
    },
    400: {
      description: 'Dysfonctionnement',
      content: { 'application/json': { schema: ErreurSchema } },
    },
  },
})

export const putRepertoireRoute = createRoute({
  method: 'put',
  path: '/repertoire',
  tags: ['repertoire'],
  summary: 'Gestion repertoire (modification)',
  description: 'Ajoute ou supprime une liste de numéros à un répertoire existant.',
  operationId: 'repertoire',
  request: {
    body: {
      description: 'Requête de creation repertoire',
      content: { 'application/json': { schema: REPERTOIREmodifrequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: REPERTOIREmodifreponseSchema } },
    },
    400: { description: 'Erreur', content: { 'application/json': { schema: ErreurSchema } } },
  },
})

export const postRepertoireRoute = createRoute({
  method: 'post',
  path: '/repertoire',
  tags: ['repertoire'],
  summary: 'Gestion repertoire (creation)',
  description:
    "Cree un nouveau répertoire et retourne son identifiant. Cet identifiant pourra être utilisé pour ajouter ou supprimer des numéros via l'API.",
  operationId: 'repertoireCrea',
  request: {
    body: {
      description: 'Creation repertoire',
      content: { 'application/json': { schema: REPERTOIREcreaterequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: REPERTOIREcreatereponseSchema } },
    },
    400: { description: 'Erreur', content: { 'application/json': { schema: ErreurSchema } } },
  },
})

export const postSetlistenoireRoute = createRoute({
  method: 'post',
  path: '/setlistenoire',
  tags: ['setListeNoire'],
  summary: 'Ajoute un numero en liste noire',
  description:
    "Ajoute un numero en liste noire. Une fois ajouté, les requêtes d'envoi de SMS marketing vers ce numéro seront refusées.",
  operationId: 'setListeNoire',
  request: {
    query: z.object({
      keyid: z
        .string()
        .openapi({
          param: {
            description: 'Clé API',
            in: 'query',
            name: 'keyid',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      setlisteNoire: z
        .literal('1')
        .openapi({
          param: {
            description: 'Doit valoir "1"',
            in: 'query',
            name: 'setlisteNoire',
            required: true,
            schema: { enum: ['1'], type: 'string' },
          },
        }),
      num: z
        .string()
        .openapi({
          param: {
            description: 'numéro de mobile à insérer en liste noire',
            in: 'query',
            name: 'num',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LISTENOIREReponseSchema } },
    },
    400: { description: 'Erreur', content: { 'application/json': { schema: ErreurSchema } } },
  },
})

export const postShortlinkRoute = createRoute({
  method: 'post',
  path: '/shortlink',
  tags: ['add shortlink'],
  summary: 'add a shortlink',
  description: 'add a shortlink',
  operationId: 'addShortlink',
  request: {
    body: {
      description: 'add sub account request',
      content: { 'application/json': { schema: ShortlinkRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Reponse OK',
      content: { 'application/json': { schema: ShortlinkResponseSchema } },
    },
    400: {
      description: 'Dysfonctionnement',
      content: { 'application/json': { schema: ErreurSchema } },
    },
  },
})

export const postSmsRoute = createRoute({
  method: 'post',
  path: '/sms',
  tags: ['sms'],
  summary: 'Envoyer un sms',
  description: 'Envoi un sms vers un unique destinataire',
  operationId: 'sendSms',
  request: {
    body: {
      description: 'sms request',
      content: { 'application/json': { schema: SmsUniqueRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Reponse OK',
      content: { 'application/json': { schema: SMSReponseSchema } },
    },
    400: {
      description: 'Dysfonctionnement',
      content: { 'application/json': { schema: ErreurSchema } },
    },
  },
})

export const postSmsmultiRoute = createRoute({
  method: 'post',
  path: '/smsmulti',
  tags: ['sms'],
  summary: 'Envoyer des SMS',
  description: 'Envoi de SMS vers 1 ou plusieurs destinataires\n',
  operationId: 'sendSmsMulti',
  request: {
    body: {
      description: 'sms request',
      content: { 'application/json': { schema: SMSRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Reponse OK',
      content: { 'application/json': { schema: SMSReponseSchema } },
    },
    400: {
      description: 'Dysfonctionnement',
      content: { 'application/json': { schema: ErreurSchema } },
    },
  },
})

export const putSubaccountRoute = createRoute({
  method: 'put',
  path: '/subaccount',
  tags: ['edit subaccount'],
  summary: 'Edit a subaccount',
  description: 'Edit a subaccount',
  operationId: 'subaccountEdit',
  request: {
    body: {
      description: 'edit sub account request',
      content: { 'application/json': { schema: SubaccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Reponse OK',
      content: { 'application/json': { schema: SubaccountResponseSchema } },
    },
    400: {
      description: 'Dysfonctionnement',
      content: { 'application/json': { schema: ErreurSchema } },
    },
  },
})

export const postSubaccountRoute = createRoute({
  method: 'post',
  path: '/subaccount',
  tags: ['add subaccount'],
  summary: 'Ajoute un sous compte',
  description: 'Ajoute un sous compte',
  operationId: 'subaccountAdd',
  request: {
    body: {
      description: 'add sub account request',
      content: { 'application/json': { schema: SubaccountAddRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Reponse OK',
      content: { 'application/json': { schema: SubaccountAddResponseSchema } },
    },
    400: {
      description: 'Dysfonctionnement',
      content: { 'application/json': { schema: ErreurSchema } },
    },
  },
})
