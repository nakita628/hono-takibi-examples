type AuthResult = { accessToken?: string | undefined; registrierkasseUuid?: string | undefined }
type Posten = {
  Bezeichnung: string
  BruttoBetrag: number
  'Externer-Beleg-Belegkreis'?: string | undefined
  'Externer-Beleg-Bezeichnung'?: string | undefined
  'Externer-Beleg-Referenz'?: string | undefined
  Menge: number
  NettoBetrag: number
  Satz: 'NORMAL' | 'ERMAESSIGT1' | 'ERMAESSIGT2' | 'BESONDERS' | 'NULL'
}
type Rabatt = {
  'Betrag-Brutto': number
  'Betrag-Netto': number
  Bezeichnung: string
  Satz?: 'NORMAL' | 'ERMAESSIGT1' | 'ERMAESSIGT2' | 'BESONDERS' | 'NULL' | undefined
}
type Zahlung = { Betrag: number; Bezeichnung: string; Referenz?: string | undefined }
type SignierteBelegdaten = {
  'Beleg-Datum-Uhrzeit'?: string | undefined
  Belegnummer?: string | undefined
  'Betrag-Brutto'?: number | undefined
  'Betrag-Netto'?: number | undefined
  'Betrag-Satz-Besonders-Brutto'?: number | undefined
  'Betrag-Satz-Besonders-Netto'?: number | undefined
  'Betrag-Satz-Ermaessigt-1-Brutto'?: number | undefined
  'Betrag-Satz-Ermaessigt-1-Netto'?: number | undefined
  'Betrag-Satz-Ermaessigt-2-Brutto'?: number | undefined
  'Betrag-Satz-Ermaessigt-2-Netto'?: number | undefined
  'Betrag-Satz-Normal-Brutto'?: number | undefined
  'Betrag-Satz-Normal-Netto'?: number | undefined
  'Betrag-Satz-Null-Brutto'?: number | undefined
  'Betrag-Satz-Null-Netto'?: number | undefined
  'Externer-Beleg-Belegkreis'?: string | undefined
  'Externer-Beleg-Bezeichnung'?: string | undefined
  'Externer-Beleg-Referenz'?: string | undefined
  'Kassen-ID'?: string | undefined
  Kunde?: string | undefined
  Notizen?: string[] | undefined
  Posten?: Posten[] | undefined
  Rabatte?: Rabatt[] | undefined
  Storno?: boolean | undefined
  'Storno-Beleg-UUID'?: string | undefined
  'Storno-Text'?: string | undefined
  Training?: boolean | undefined
  'Unternehmen-Adresse1'?: string | undefined
  'Unternehmen-Adresse2'?: string | undefined
  'Unternehmen-Fusszeile'?: string | undefined
  'Unternehmen-ID'?: string | undefined
  'Unternehmen-ID-Typ'?: 'steuernummer' | 'uid' | 'gln' | undefined
  'Unternehmen-Kopfzeile'?: string | undefined
  'Unternehmen-Name'?: string | undefined
  'Unternehmen-Ort'?: string | undefined
  'Unternehmen-PLZ'?: string | undefined
  Zahlungen?: Zahlung[] | undefined
  'Zertifikat-Seriennummer'?: string | undefined
}
type Beleg = {
  'Beleg-Codes'?: string[] | undefined
  'Beleg-Typen'?:
    | (
        | 'Belegkreisinitialisierung'
        | 'Kassenbericht'
        | 'Monatsabschluss'
        | 'Startbeleg'
        | 'Storno'
        | 'Systembeleg'
        | 'Training'
      )[]
    | undefined
  Belegdaten?: SignierteBelegdaten | undefined
  JWS?: string | undefined
  QR?: string | undefined
  'QR-Link'?: string | undefined
  'Registrierkasse-UUID'?: string | undefined
  'Signaturerstellungseinheit-UUID'?: string | undefined
  _href?: string | undefined
  _uuid?: string | undefined
}
type Registrierkasse = {
  Benutzerschluessel?: string | undefined
  'Kassen-ID'?: string | undefined
  'Signaturerstellungseinheit-UUID'?: string | undefined
  _href?: string | undefined
  _uuid?: string | undefined
}
type Abschlussbelegdaten = {
  'Abschluss-Beginn-Datum-Uhrzeit': string
  'Abschluss-Ende-Datum-Uhrzeit': string
}
type Belege = {
  Belege?: Beleg[] | undefined
  'Belege-Gruppe'?:
    | { 'Belege-kompakt': string[]; Signaturzertifikat: string; Zertifizierungsstellen: string[] }[]
    | undefined
}
type Belegdaten = {
  'Externer-Beleg-Belegkreis'?: string | undefined
  'Externer-Beleg-Bezeichnung'?: string | undefined
  'Externer-Beleg-Referenz'?: string | undefined
  Kunde?: string | undefined
  Notizen?: string[] | undefined
  Posten?: Posten[] | undefined
  Rabatte?: Rabatt[] | undefined
  Storno?: boolean | undefined
  'Storno-Beleg-UUID'?: string | undefined
  'Storno-Text'?: string | undefined
  Training?: boolean | undefined
  'Unternehmen-Adresse1'?: string | undefined
  'Unternehmen-Adresse2'?: string | undefined
  'Unternehmen-Fusszeile'?: string | undefined
  'Unternehmen-ID'?: string | undefined
  'Unternehmen-ID-Typ'?: 'steuernummer' | 'uid' | 'gln' | undefined
  'Unternehmen-Kopfzeile'?: string | undefined
  'Unternehmen-Name'?: string | undefined
  'Unternehmen-Ort'?: string | undefined
  'Unternehmen-PLZ'?: string | undefined
  Zahlungen?: Zahlung[] | undefined
}
type Monatsbeleg = {
  'Beleg-UUID'?: string | undefined
  'FON-Geprueft-Datum-Uhrzeit'?: string | undefined
  'FON-Geprueft-Erfolgreich'?: boolean | undefined
  Jahr?: number | undefined
  Monat?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/auth': { $get: { input: {}; output: AuthResult; outputFormat: 'json'; status: 200 } } } & {
    '/belege/:belegUuid': {
      $get:
        | {
            input: { param: { belegUuid: string } }
            output: Beleg
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { belegUuid: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/export/csv/registrierkassen/:registrierkasseUuid/belege': {
      $get: {
        input: { param: { registrierkasseUuid: string } } & {
          query: {
            before?: string | undefined
            after?: string | undefined
            posten?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/export/dep131/registrierkassen/:registrierkasseUuid/belege': {
      $get: {
        input: { param: { registrierkasseUuid: string } } & {
          query: { before?: string | undefined; after?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/export/dep7/registrierkassen/:registrierkasseUuid/belege': {
      $get: {
        input: { param: { registrierkasseUuid: string } } & {
          query: { before?: string | undefined; after?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/export/gobd/registrierkassen/:registrierkasseUuid': {
      $get: {
        input: { param: { registrierkasseUuid: string } } & {
          query: { before?: string | undefined; after?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/export/html/belege/:belegUuid': {
      $get: {
        input: { param: { belegUuid: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/export/pdf/belege/:belegUuid': {
      $get: {
        input: { param: { belegUuid: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/export/qr/belege/:belegUuid': {
      $get: {
        input: { param: { belegUuid: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/export/thermal-print/belege/:belegUuid': {
      $get: {
        input: { param: { belegUuid: string } } & {
          query: {
            qr?: boolean | undefined
            width?: number | undefined
            dialect?: 'escpos' | 'escposlite' | 'star' | 'text' | undefined
            encoding?: 'raw' | 'base64' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/export/xls/registrierkassen/:registrierkasseUuid/belege': {
      $get: {
        input: { param: { registrierkasseUuid: string } } & {
          query: { before?: string | undefined; after?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/registrierkassen/:registrierkasseUuid': {
      $get:
        | {
            input: { param: { registrierkasseUuid: string } }
            output: Registrierkasse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { registrierkasseUuid: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/registrierkassen/:registrierkasseUuid/abschluss': {
      $post: {
        input: { param: { registrierkasseUuid: string } } & { json: Abschlussbelegdaten }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/registrierkassen/:registrierkasseUuid/belege': {
      $get: {
        input: { param: { registrierkasseUuid: string } } & {
          query: {
            format: 'export' | 'beleg' | 'uuidlist'
            order?: 'asc' | 'desc' | undefined
            limit?: number | undefined
            offset?: number | undefined
            before?: string | undefined
            after?: string | undefined
            gte?: number | undefined
            lte?: number | undefined
          }
        }
        output: Belege
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/registrierkassen/:registrierkasseUuid/belege/:belegUuid': {
      $get:
        | {
            input: { param: { registrierkasseUuid: string; belegUuid: string } }
            output: Beleg
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { registrierkasseUuid: string; belegUuid: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { registrierkasseUuid: string; belegUuid: string } } & {
              json: Belegdaten
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { registrierkasseUuid: string; belegUuid: string } } & {
              json: Belegdaten
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { registrierkasseUuid: string; belegUuid: string } } & {
              json: Belegdaten
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { registrierkasseUuid: string; belegUuid: string } } & {
              json: Belegdaten
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { registrierkasseUuid: string; belegUuid: string } } & {
              json: Belegdaten
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { registrierkasseUuid: string; belegUuid: string } } & {
              json: Belegdaten
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { registrierkasseUuid: string; belegUuid: string } } & {
              json: Belegdaten
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/registrierkassen/:registrierkasseUuid/dep': {
      $get: {
        input: { param: { registrierkasseUuid: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/registrierkassen/:registrierkasseUuid/monatsbelege': {
      $get: {
        input: { param: { registrierkasseUuid: string } } & {
          query: { year?: number | undefined; month?: number | undefined }
        }
        output: Monatsbeleg[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
