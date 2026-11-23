type ErreurEtatEtat = { code?: string | undefined; message?: string | undefined }
type ErreurEtat = { etat?: ErreurEtatEtat[] | undefined }
type Erreur = { etat?: ErreurEtat | undefined }
type ComptageRequest = {
  comptage: '1'
  date_envoi?: string | undefined
  emetteur?: string | undefined
  gmt_zone?:
    | 'Pacific/Midway'
    | 'America/Adak'
    | 'Etc/GMT+10'
    | 'Pacific/Marquesas'
    | 'Pacific/Gambier'
    | 'America/Anchorage'
    | 'America/Ensenada'
    | 'Etc/GMT+8'
    | 'America/Los_Angeles'
    | 'America/Denver'
    | 'America/Chihuahua'
    | 'America/Dawson_Creek'
    | 'America/Belize'
    | 'America/Cancun'
    | 'Chile/EasterIsland'
    | 'America/Chicago'
    | 'America/New_York'
    | 'America/Havana'
    | 'America/Bogota'
    | 'America/Caracas'
    | 'America/Santiago'
    | 'America/La_Paz'
    | 'Atlantic/Stanley'
    | 'America/Campo_Grande'
    | 'America/Goose_Bay'
    | 'America/Glace_Bay'
    | 'America/St_Johns'
    | 'America/Araguaina'
    | 'America/Montevideo'
    | 'America/Miquelon'
    | 'America/Godthab'
    | 'America/Argentina/Buenos_Aires'
    | 'America/Sao_Paulo'
    | 'America/Noronha'
    | 'Atlantic/Cape_Verde'
    | 'Atlantic/Azores'
    | 'Europe/Belfast'
    | 'Europe/Dublin'
    | 'Europe/Lisbon'
    | 'Europe/London'
    | 'Africa/Abidjan'
    | 'Europe/Amsterdam'
    | 'Europe/Belgrade'
    | 'Europe/Brussels'
    | 'Africa/Algiers'
    | 'Africa/Windhoek'
    | 'Asia/Beirut'
    | 'Africa/Cairo'
    | 'Asia/Gaza'
    | 'Africa/Blantyre'
    | 'Asia/Jerusalem'
    | 'Europe/Minsk'
    | 'Asia/Damascus'
    | 'Europe/Moscow'
    | 'Africa/Addis_Ababa'
    | 'Asia/Tehran'
    | 'Asia/Dubai'
    | 'Asia/Yerevan'
    | 'Asia/Kabul'
    | 'Asia/Yekaterinburg'
    | 'Asia/Tashkent'
    | 'Asia/Kolkata'
    | 'Asia/Katmandu'
    | 'Asia/Dhaka'
    | 'Asia/Novosibirsk'
    | 'Asia/Rangoon'
    | 'Asia/Bangkok'
    | 'Asia/Krasnoyarsk'
    | 'Asia/Hong_Kong'
    | 'Asia/Irkutsk'
    | 'Australia/Perth'
    | 'Australia/Eucla'
    | 'Asia/Tokyo'
    | 'Asia/Seoul'
    | 'Asia/Yakutsk'
    | 'Australia/Adelaide'
    | 'Australia/Darwin'
    | 'Australia/Brisbane'
    | 'Australia/Hobart'
    | 'Asia/Vladivostok'
    | 'Australia/Lord_Howe'
    | 'Etc/GMT-11'
    | 'Asia/Magadan'
    | 'Pacific/Norfolk'
    | 'Asia/Anadyr'
    | 'Pacific/Auckland'
    | 'Etc/GMT-12'
    | 'Pacific/Chatham'
    | 'Pacific/Tongatapu'
    | 'Pacific/Kiritimati'
    | undefined
  keyid: string
  nostop?: string | undefined
  num: string
  numAzur?: '1' | undefined
  sms: string
  smslong?: '999' | undefined
  tracker?: string | undefined
  ucs2?: string | undefined
}
type ComptageReponseEtatEtat = {
  nb_caractere?: string | undefined
  nb_sms?: string | undefined
  tel?: string | undefined
}
type ComptageReponseEtat = { etat?: ComptageReponseEtatEtat[] | undefined }
type ComptageReponse = { etat?: ComptageReponseEtat | undefined }
type CreditResponseEtat = { credit?: number | undefined; quantite?: string | undefined }
type CreditResponse = { etat?: CreditResponseEtat | undefined }
type LISTENOIREReponseEtatEtat = { listeNoire: string; tel: string }
type LISTENOIREReponseEtat = { etat: LISTENOIREReponseEtatEtat[] }
type LISTENOIREReponse = { etat?: LISTENOIREReponseEtat | undefined }
type HLRrequest = { getHLR: '1'; keyid: string; num: string[] }
type HLRReponseEtatEtat = { operateur: string; tel: string }
type HLRReponseEtat = { etat: HLRReponseEtatEtat[] }
type HLRReponse = { etat?: HLRReponseEtat | undefined }
type REPERTOIREcreaterequest = { keyid: string; repertoireEdit: 'create'; repertoireNom: string }
type REPERTOIREcreatereponseEtatEtat = {
  code: string
  message?: string | undefined
  repertoireId?: string | undefined
}
type REPERTOIREcreatereponseEtat = { etat?: REPERTOIREcreatereponseEtatEtat[] | undefined }
type REPERTOIREcreatereponse = { etat?: REPERTOIREcreatereponseEtat | undefined }
type REPERTOIREmodifrequest = {
  champ1?: string[] | undefined
  champ10?: string[] | undefined
  champ11?: string[] | undefined
  champ12?: string[] | undefined
  champ13?: string[] | undefined
  champ14?: string[] | undefined
  champ15?: string[] | undefined
  champ16?: string[] | undefined
  champ17?: string[] | undefined
  champ18?: string[] | undefined
  champ19?: string[] | undefined
  champ2?: string[] | undefined
  champ20?: string[] | undefined
  champ21?: string[] | undefined
  champ22?: string[] | undefined
  champ23?: string[] | undefined
  champ24?: string[] | undefined
  champ25?: string[] | undefined
  champ26?: string[] | undefined
  champ27?: string[] | undefined
  champ3?: string[] | undefined
  champ4?: string[] | undefined
  champ5?: string[] | undefined
  champ6?: string[] | undefined
  champ7?: string[] | undefined
  champ8?: string[] | undefined
  champ9?: string[] | undefined
  keyid: string
  num: string[]
  repertoireEdit: 'add' | 'del'
  repertoireId: string
}
type REPERTOIREmodifreponseEtatEtat = {
  code: string
  message?: string | undefined
  repertoireId?: string | undefined
  tel?: string | undefined
}
type REPERTOIREmodifreponseEtat = { etat?: REPERTOIREmodifreponseEtatEtat[] | undefined }
type REPERTOIREmodifreponse = { etat?: REPERTOIREmodifreponseEtat | undefined }
type ShortlinkRequest = { keyid: string; shortlink: string }
type ShortlinkResponse = {
  etat?:
    | {
        etat?:
          | {
              code?: number | undefined
              message?: string | undefined
              shortlink?: string | undefined
            }[]
          | undefined
      }
    | undefined
}
type SmsUniqueRequest = {
  date_envoi?: string | undefined
  emetteur?: string | undefined
  gmt_zone?:
    | 'Pacific/Midway'
    | 'America/Adak'
    | 'Etc/GMT+10'
    | 'Pacific/Marquesas'
    | 'Pacific/Gambier'
    | 'America/Anchorage'
    | 'America/Ensenada'
    | 'Etc/GMT+8'
    | 'America/Los_Angeles'
    | 'America/Denver'
    | 'America/Chihuahua'
    | 'America/Dawson_Creek'
    | 'America/Belize'
    | 'America/Cancun'
    | 'Chile/EasterIsland'
    | 'America/Chicago'
    | 'America/New_York'
    | 'America/Havana'
    | 'America/Bogota'
    | 'America/Caracas'
    | 'America/Santiago'
    | 'America/La_Paz'
    | 'Atlantic/Stanley'
    | 'America/Campo_Grande'
    | 'America/Goose_Bay'
    | 'America/Glace_Bay'
    | 'America/St_Johns'
    | 'America/Araguaina'
    | 'America/Montevideo'
    | 'America/Miquelon'
    | 'America/Godthab'
    | 'America/Argentina/Buenos_Aires'
    | 'America/Sao_Paulo'
    | 'America/Noronha'
    | 'Atlantic/Cape_Verde'
    | 'Atlantic/Azores'
    | 'Europe/Belfast'
    | 'Europe/Dublin'
    | 'Europe/Lisbon'
    | 'Europe/London'
    | 'Africa/Abidjan'
    | 'Europe/Amsterdam'
    | 'Europe/Belgrade'
    | 'Europe/Brussels'
    | 'Africa/Algiers'
    | 'Africa/Windhoek'
    | 'Asia/Beirut'
    | 'Africa/Cairo'
    | 'Asia/Gaza'
    | 'Africa/Blantyre'
    | 'Asia/Jerusalem'
    | 'Europe/Minsk'
    | 'Asia/Damascus'
    | 'Europe/Moscow'
    | 'Africa/Addis_Ababa'
    | 'Asia/Tehran'
    | 'Asia/Dubai'
    | 'Asia/Yerevan'
    | 'Asia/Kabul'
    | 'Asia/Yekaterinburg'
    | 'Asia/Tashkent'
    | 'Asia/Kolkata'
    | 'Asia/Katmandu'
    | 'Asia/Dhaka'
    | 'Asia/Novosibirsk'
    | 'Asia/Rangoon'
    | 'Asia/Bangkok'
    | 'Asia/Krasnoyarsk'
    | 'Asia/Hong_Kong'
    | 'Asia/Irkutsk'
    | 'Australia/Perth'
    | 'Australia/Eucla'
    | 'Asia/Tokyo'
    | 'Asia/Seoul'
    | 'Asia/Yakutsk'
    | 'Australia/Adelaide'
    | 'Australia/Darwin'
    | 'Australia/Brisbane'
    | 'Australia/Hobart'
    | 'Asia/Vladivostok'
    | 'Australia/Lord_Howe'
    | 'Etc/GMT-11'
    | 'Asia/Magadan'
    | 'Pacific/Norfolk'
    | 'Asia/Anadyr'
    | 'Pacific/Auckland'
    | 'Etc/GMT-12'
    | 'Pacific/Chatham'
    | 'Pacific/Tongatapu'
    | 'Pacific/Kiritimati'
    | undefined
  keyid: string
  nostop?: string | undefined
  num: string
  numAzur?: '1' | undefined
  sms: string
  smslong?: string | undefined
  tracker?: string | undefined
  ucs2?: string | undefined
}
type SMSReponseEtatEtat = {
  code?: number | undefined
  message?: string | undefined
  smslong?: string | undefined
  tel?: string | undefined
}
type SMSReponseEtat = { etat?: SMSReponseEtatEtat[] | undefined }
type SMSReponse = { etat?: SMSReponseEtat | undefined }
type SMSRequest = {
  date_envoi?: string | undefined
  emetteur?: string | undefined
  gmt_zone?:
    | 'Pacific/Midway'
    | 'America/Adak'
    | 'Etc/GMT+10'
    | 'Pacific/Marquesas'
    | 'Pacific/Gambier'
    | 'America/Anchorage'
    | 'America/Ensenada'
    | 'Etc/GMT+8'
    | 'America/Los_Angeles'
    | 'America/Denver'
    | 'America/Chihuahua'
    | 'America/Dawson_Creek'
    | 'America/Belize'
    | 'America/Cancun'
    | 'Chile/EasterIsland'
    | 'America/Chicago'
    | 'America/New_York'
    | 'America/Havana'
    | 'America/Bogota'
    | 'America/Caracas'
    | 'America/Santiago'
    | 'America/La_Paz'
    | 'Atlantic/Stanley'
    | 'America/Campo_Grande'
    | 'America/Goose_Bay'
    | 'America/Glace_Bay'
    | 'America/St_Johns'
    | 'America/Araguaina'
    | 'America/Montevideo'
    | 'America/Miquelon'
    | 'America/Godthab'
    | 'America/Argentina/Buenos_Aires'
    | 'America/Sao_Paulo'
    | 'America/Noronha'
    | 'Atlantic/Cape_Verde'
    | 'Atlantic/Azores'
    | 'Europe/Belfast'
    | 'Europe/Dublin'
    | 'Europe/Lisbon'
    | 'Europe/London'
    | 'Africa/Abidjan'
    | 'Europe/Amsterdam'
    | 'Europe/Belgrade'
    | 'Europe/Brussels'
    | 'Africa/Algiers'
    | 'Africa/Windhoek'
    | 'Asia/Beirut'
    | 'Africa/Cairo'
    | 'Asia/Gaza'
    | 'Africa/Blantyre'
    | 'Asia/Jerusalem'
    | 'Europe/Minsk'
    | 'Asia/Damascus'
    | 'Europe/Moscow'
    | 'Africa/Addis_Ababa'
    | 'Asia/Tehran'
    | 'Asia/Dubai'
    | 'Asia/Yerevan'
    | 'Asia/Kabul'
    | 'Asia/Yekaterinburg'
    | 'Asia/Tashkent'
    | 'Asia/Kolkata'
    | 'Asia/Katmandu'
    | 'Asia/Dhaka'
    | 'Asia/Novosibirsk'
    | 'Asia/Rangoon'
    | 'Asia/Bangkok'
    | 'Asia/Krasnoyarsk'
    | 'Asia/Hong_Kong'
    | 'Asia/Irkutsk'
    | 'Australia/Perth'
    | 'Australia/Eucla'
    | 'Asia/Tokyo'
    | 'Asia/Seoul'
    | 'Asia/Yakutsk'
    | 'Australia/Adelaide'
    | 'Australia/Darwin'
    | 'Australia/Brisbane'
    | 'Australia/Hobart'
    | 'Asia/Vladivostok'
    | 'Australia/Lord_Howe'
    | 'Etc/GMT-11'
    | 'Asia/Magadan'
    | 'Pacific/Norfolk'
    | 'Asia/Anadyr'
    | 'Pacific/Auckland'
    | 'Etc/GMT-12'
    | 'Pacific/Chatham'
    | 'Pacific/Tongatapu'
    | 'Pacific/Kiritimati'
    | undefined
  keyid: string
  nostop?: string | undefined
  num: string[]
  numAzur?: '1' | undefined
  repertoireId?: string | undefined
  sms: string[]
  smslong?: string | undefined
  tracker?: string[] | undefined
  ucs2?: string | undefined
}
type SubaccountAddRequest = {
  keyid: string
  subAccountEdit: 'addAccount'
  subAccountLogin: string
  subAccountPassword: string
}
type SubaccountAddResponse = {
  etat?:
    | {
        etat?:
          | {
              code?: number | undefined
              message?: string | undefined
              subAccountId?: string | undefined
              subAccountKeyId?: string | undefined
              subAccountLogin?: string | undefined
            }[]
          | undefined
      }
    | undefined
}
type SubaccountRequest = {
  keyid: string
  subAccountAddCredit?: string | undefined
  subAccountCountryCode?: string | undefined
  subAccountEdit: 'setPrice' | 'addCredit' | 'setRestriction'
  subAccountKeyId?: string | undefined
  subAccountPrice?: string | undefined
  subAccountRestrictionStop?: '0' | '1' | undefined
  subAccountRestrictionTime?: '0' | '1' | undefined
}
type SubaccountResponse = {
  etat?:
    | {
        etat?:
          | {
              code?: string | undefined
              message?: string | undefined
              subAccountId?: string | undefined
              subAccountKeyid?: string | undefined
            }[]
          | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/campagne': {
      $get:
        | {
            input: {
              query: { keyid: string; rapportCampagne: '1'; date_deb: string; date_fin: string }
            }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { keyid: string; rapportCampagne: '1'; date_deb: string; date_fin: string }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { keyid: string; rapportCampagne: '1'; date_deb: string; date_fin: string }
            }
            output: Erreur
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { keyid: string; rapportCampagne: '1'; date_deb: string; date_fin: string }
            }
            output: Erreur
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/comptage': {
      $post:
        | {
            input: { json: ComptageRequest }
            output: ComptageReponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ComptageRequest }; output: Erreur; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/credit': {
      $get:
        | {
            input: { query: { keyid: string; credit: '1' | '2' } }
            output: CreditResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { keyid: string; credit: '1' | '2' } }
            output: Erreur
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/dellistenoire': {
      $post:
        | {
            input: { query: { keyid: string; delListeNoire: '1'; num: string } }
            output: LISTENOIREReponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { keyid: string; delListeNoire: '1'; num: string } }
            output: Erreur
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/getlistenoire': {
      $post:
        | {
            input: { query: { keyid: string; getListeNoire: '1' } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { keyid: string; getListeNoire: '1' } }
            output: Erreur
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/hlr': {
      $post:
        | { input: { json: HLRrequest }; output: HLRReponse; outputFormat: 'json'; status: 200 }
        | { input: { json: HLRrequest }; output: Erreur; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/repertoire': {
      $post:
        | {
            input: { json: REPERTOIREcreaterequest }
            output: REPERTOIREcreatereponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: REPERTOIREcreaterequest }
            output: Erreur
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { json: REPERTOIREmodifrequest }
            output: REPERTOIREmodifreponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: REPERTOIREmodifrequest }
            output: Erreur
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/setlistenoire': {
      $post:
        | {
            input: { query: { keyid: string; setlisteNoire: '1'; num: string } }
            output: LISTENOIREReponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { keyid: string; setlisteNoire: '1'; num: string } }
            output: Erreur
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/shortlink': {
      $post:
        | {
            input: { json: ShortlinkRequest }
            output: ShortlinkResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ShortlinkRequest }; output: Erreur; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/sms': {
      $post:
        | {
            input: { json: SmsUniqueRequest }
            output: SMSReponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: SmsUniqueRequest }; output: Erreur; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/smsmulti': {
      $post:
        | { input: { json: SMSRequest }; output: SMSReponse; outputFormat: 'json'; status: 200 }
        | { input: { json: SMSRequest }; output: Erreur; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/subaccount': {
      $post:
        | {
            input: { json: SubaccountAddRequest }
            output: SubaccountAddResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SubaccountAddRequest }
            output: Erreur
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { json: SubaccountRequest }
            output: SubaccountResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: SubaccountRequest }; output: Erreur; outputFormat: 'json'; status: 400 }
    }
  },
  '/'
>
export default routes
