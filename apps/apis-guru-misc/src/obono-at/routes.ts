import { createRoute, z } from '@hono/zod-openapi'

const AbschlussbelegdatenSchema = z
  .object({
    'Abschluss-Beginn-Datum-Uhrzeit': z.string(),
    'Abschluss-Ende-Datum-Uhrzeit': z.string(),
  })
  .openapi({ required: ['Abschluss-Beginn-Datum-Uhrzeit', 'Abschluss-Ende-Datum-Uhrzeit'] })
  .openapi('Abschlussbelegdaten')

const AuthResultSchema = z
  .object({
    accessToken: z.string().exactOptional(),
    registrierkasseUuid: z.uuid().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthResult')

const PostenSchema = z
  .object({
    Bezeichnung: z.string(),
    BruttoBetrag: z.int().openapi({ description: 'The amount in cents' }),
    'Externer-Beleg-Belegkreis': z.string().exactOptional(),
    'Externer-Beleg-Bezeichnung': z.string().exactOptional(),
    'Externer-Beleg-Referenz': z.string().exactOptional(),
    Menge: z.int(),
    NettoBetrag: z.int().openapi({ description: 'The amount in cents' }),
    Satz: z.enum(['NORMAL', 'ERMAESSIGT1', 'ERMAESSIGT2', 'BESONDERS', 'NULL']),
  })
  .openapi({ required: ['Bezeichnung', 'Satz', 'Menge', 'NettoBetrag', 'BruttoBetrag'] })
  .openapi('Posten')

const RabattSchema = z
  .object({
    'Betrag-Brutto': z.int().openapi({ description: 'The amount in cents' }),
    'Betrag-Netto': z.int().openapi({ description: 'The amount in cents' }),
    Bezeichnung: z.string(),
    Satz: z.enum(['NORMAL', 'ERMAESSIGT1', 'ERMAESSIGT2', 'BESONDERS', 'NULL']).exactOptional(),
  })
  .openapi({ required: ['Bezeichnung', 'Betrag-Netto', 'Betrag-Brutto'] })
  .openapi('Rabatt')

const ZahlungSchema = z
  .object({
    Betrag: z.int().openapi({ description: 'The amount in cents' }),
    Bezeichnung: z.string(),
    Referenz: z.string().exactOptional(),
  })
  .openapi({ required: ['Bezeichnung', 'Betrag'] })
  .openapi('Zahlung')

const SignierteBelegdatenSchema = z
  .object({
    'Beleg-Datum-Uhrzeit': z.string().exactOptional(),
    Belegnummer: z.string().exactOptional(),
    'Betrag-Brutto': z.int().exactOptional(),
    'Betrag-Netto': z.int().exactOptional(),
    'Betrag-Satz-Besonders-Brutto': z
      .int()
      .exactOptional()
      .openapi({ description: 'The total amount in cents' }),
    'Betrag-Satz-Besonders-Netto': z
      .int()
      .exactOptional()
      .openapi({ description: 'The total amount in cents' }),
    'Betrag-Satz-Ermaessigt-1-Brutto': z
      .int()
      .exactOptional()
      .openapi({ description: 'The total amount in cents' }),
    'Betrag-Satz-Ermaessigt-1-Netto': z
      .int()
      .exactOptional()
      .openapi({ description: 'The total amount in cents' }),
    'Betrag-Satz-Ermaessigt-2-Brutto': z
      .int()
      .exactOptional()
      .openapi({ description: 'The total amount in cents' }),
    'Betrag-Satz-Ermaessigt-2-Netto': z
      .int()
      .exactOptional()
      .openapi({ description: 'The total amount in cents' }),
    'Betrag-Satz-Normal-Brutto': z
      .int()
      .exactOptional()
      .openapi({ description: 'The total amount in cents' }),
    'Betrag-Satz-Normal-Netto': z
      .int()
      .exactOptional()
      .openapi({ description: 'The total amount in cents' }),
    'Betrag-Satz-Null-Brutto': z
      .int()
      .exactOptional()
      .openapi({ description: 'The total amount in cents' }),
    'Betrag-Satz-Null-Netto': z
      .int()
      .exactOptional()
      .openapi({ description: 'The total amount in cents' }),
    'Externer-Beleg-Belegkreis': z.string().exactOptional(),
    'Externer-Beleg-Bezeichnung': z.string().exactOptional(),
    'Externer-Beleg-Referenz': z.string().exactOptional(),
    'Kassen-ID': z.string().exactOptional(),
    Kunde: z.string().exactOptional(),
    Notizen: z.array(z.string()).exactOptional(),
    Posten: z.array(PostenSchema).exactOptional(),
    Rabatte: z.array(RabattSchema).exactOptional(),
    Storno: z.boolean().exactOptional().openapi({ description: 'Storno?' }),
    'Storno-Beleg-UUID': z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The `Beleg-UUID` property of the `Beleg` to be cancelled' }),
    'Storno-Text': z.string().exactOptional(),
    Training: z.boolean().exactOptional().openapi({ description: 'Training?' }),
    'Unternehmen-Adresse1': z.string().exactOptional(),
    'Unternehmen-Adresse2': z.string().exactOptional(),
    'Unternehmen-Fusszeile': z.string().exactOptional(),
    'Unternehmen-ID': z.string().exactOptional(),
    'Unternehmen-ID-Typ': z.enum(['steuernummer', 'uid', 'gln']).exactOptional(),
    'Unternehmen-Kopfzeile': z.string().exactOptional(),
    'Unternehmen-Name': z.string().exactOptional(),
    'Unternehmen-Ort': z.string().exactOptional(),
    'Unternehmen-PLZ': z.string().exactOptional(),
    Zahlungen: z.array(ZahlungSchema).exactOptional(),
    'Zertifikat-Seriennummer': z.string().exactOptional(),
  })
  .openapi({
    description:
      'The complete `Beleg` that has been signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".',
    required: [],
  })
  .openapi('SignierteBelegdaten')

const BelegSchema = z
  .object({
    'Beleg-Codes': z.array(z.string()).exactOptional(),
    'Beleg-Typen': z
      .array(
        z.enum([
          'Belegkreisinitialisierung',
          'Kassenbericht',
          'Monatsabschluss',
          'Startbeleg',
          'Storno',
          'Systembeleg',
          'Training',
        ]),
      )
      .exactOptional(),
    Belegdaten: SignierteBelegdatenSchema.exactOptional(),
    JWS: z
      .string()
      .exactOptional()
      .openapi({ description: 'The signed `Beleg` as a JWS signature token.' }),
    QR: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The portion of the `JWS` token to be used for generating QR codes.',
      }),
    'QR-Link': z
      .url()
      .exactOptional()
      .openapi({ description: 'A hyperlink that retrieves the `QR` data.' }),
    'Registrierkasse-UUID': z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The `_uuid` of the `Registrierkasse` that has issued this `Beleg`.',
      }),
    'Signaturerstellungseinheit-UUID': z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The `_uuid` of the `Signaturerstellungseinheit` that has signed this `Beleg`.',
      }),
    _href: z
      .url()
      .exactOptional()
      .openapi({ description: 'URL of the particular `Beleg` instance.' }),
    _uuid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique ID of the particular `Beleg` instance.' }),
  })
  .openapi({ required: [] })
  .openapi('Beleg')

const BelegdatenSchema = z
  .object({
    'Externer-Beleg-Belegkreis': z.string().exactOptional(),
    'Externer-Beleg-Bezeichnung': z.string().exactOptional(),
    'Externer-Beleg-Referenz': z.string().exactOptional(),
    Kunde: z.string().exactOptional(),
    Notizen: z.array(z.string()).exactOptional(),
    Posten: z.array(PostenSchema).exactOptional(),
    Rabatte: z.array(RabattSchema).exactOptional(),
    Storno: z.boolean().exactOptional().openapi({ description: 'Storno?' }),
    'Storno-Beleg-UUID': z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The `Beleg-UUID` property of the `Beleg` to be cancelled' }),
    'Storno-Text': z.string().exactOptional(),
    Training: z.boolean().exactOptional().openapi({ description: 'Training?' }),
    'Unternehmen-Adresse1': z.string().exactOptional(),
    'Unternehmen-Adresse2': z.string().exactOptional(),
    'Unternehmen-Fusszeile': z.string().exactOptional(),
    'Unternehmen-ID': z.string().exactOptional(),
    'Unternehmen-ID-Typ': z.enum(['steuernummer', 'uid', 'gln']).exactOptional(),
    'Unternehmen-Kopfzeile': z.string().exactOptional(),
    'Unternehmen-Name': z.string().exactOptional(),
    'Unternehmen-Ort': z.string().exactOptional(),
    'Unternehmen-PLZ': z.string().exactOptional(),
    Zahlungen: z.array(ZahlungSchema).exactOptional(),
  })
  .openapi({
    description:
      'The `Beleg` to be signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".',
    required: [],
  })
  .openapi('Belegdaten')

const BelegformatSchema = z
  .object({ Belege: z.array(BelegSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Belegformat')

const ExportformatSchema = z
  .object({
    'Belege-Gruppe': z
      .array(
        z
          .object({
            'Belege-kompakt': z.array(z.base64()).min(1),
            Signaturzertifikat: z.base64(),
            Zertifizierungsstellen: z.array(z.base64()).min(1),
          })
          .openapi({
            required: ['Signaturzertifikat', 'Zertifizierungsstellen', 'Belege-kompakt'],
          }),
      )
      .min(1)
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Exportformat')

const BelegeSchema = BelegformatSchema.and(ExportformatSchema).openapi('Belege')

const MonatsbelegSchema = z
  .object({
    'Beleg-UUID': z.uuid().exactOptional(),
    'FON-Geprueft-Datum-Uhrzeit': z.string().exactOptional(),
    'FON-Geprueft-Erfolgreich': z.boolean().exactOptional(),
    Jahr: z.int().exactOptional(),
    Monat: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Monatsbeleg')

const RegistrierkasseSchema = z
  .object({
    Benutzerschluessel: z
      .base64()
      .exactOptional()
      .openapi({
        description: 'The base64 encoded AES 256 key used for encrypting the "Umsatzzaehler".',
      }),
    'Kassen-ID': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The (RKSV) "Kassenidentifikationsnummer" of this particular `Registrierkasse`.',
      }),
    'Signaturerstellungseinheit-UUID': z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The `_uuid` of the paired "Signaturerstellungseinheit".' }),
    _href: z
      .url()
      .exactOptional()
      .openapi({ description: 'URL of the particular `Registrierkasse` instance.' }),
    _uuid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique ID of the particular `Registrierkasse` instance.' }),
  })
  .openapi({ required: [] })
  .openapi('Registrierkasse')

const BasicAuthSecurityScheme = {
  description: 'HTTP Basic Authentication.',
  scheme: 'basic',
  type: 'http',
}

const JwtSecurityScheme = {
  description: 'A JSON Web Token (JWT) used for access control and authorization.',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

export const getAuthRoute = createRoute({
  method: 'get',
  path: '/auth',
  tags: ['auth'],
  description: 'Request a JWT access token using your obono username and password.',
  responses: {
    200: {
      description:
        'The JWT `accessToken` to use for accessing secured resourced as well as the `registrierkassenUuid` of the corresponding "Registrierkasse".',
      content: { 'application/json': { schema: AuthResultSchema } },
    },
  },
  security: [{ basicAuth: [] }],
})

export const getBelegeBelegUuidRoute = createRoute({
  method: 'get',
  path: '/belege/{belegUuid}',
  tags: ['beleg'],
  description: 'Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".',
  request: {
    params: z.object({
      belegUuid: z
        .string()
        .openapi({
          param: {
            description: 'The `_uuid` of the `Beleg` to fetch.',
            in: 'path',
            name: 'belegUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested `Beleg` resource.',
      content: { 'application/json': { schema: BelegSchema } },
    },
    404: { description: 'The requested `Beleg` resource does not exist.' },
  },
  security: [],
})

export const getExportCsvRegistrierkassenRegistrierkasseUuidBelegeRoute = createRoute({
  method: 'get',
  path: '/export/csv/registrierkassen/{registrierkasseUuid}/belege',
  tags: ['export'],
  request: {
    params: z.object({
      registrierkasseUuid: z
        .string()
        .openapi({
          param: {
            description: 'The `_uuid` of the `Registrierkasse` to export.',
            in: 'path',
            name: 'registrierkasseUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return results that were saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).',
            in: 'query',
            name: 'before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return results that were saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).',
            in: 'query',
            name: 'after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      posten: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Export `Posten` instead of `Belegdaten`.',
            in: 'query',
            name: 'posten',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The exported data of a particular `Registrierkasse` in its CSV representation.',
    },
  },
})

export const getExportDep131RegistrierkassenRegistrierkasseUuidBelegeRoute = createRoute({
  method: 'get',
  path: '/export/dep131/registrierkassen/{registrierkasseUuid}/belege',
  tags: ['export'],
  request: {
    params: z.object({
      registrierkasseUuid: z
        .string()
        .openapi({
          param: {
            description: 'The `_uuid` of the `Registrierkasse` to export.',
            in: 'path',
            name: 'registrierkasseUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return results that were saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).',
            in: 'query',
            name: 'before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return results that were saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).',
            in: 'query',
            name: 'after',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The exported data of a particular `Registrierkasse` in its DEP131 / CSV representation.',
    },
  },
})

export const getExportDep7RegistrierkassenRegistrierkasseUuidBelegeRoute = createRoute({
  method: 'get',
  path: '/export/dep7/registrierkassen/{registrierkasseUuid}/belege',
  tags: ['export'],
  request: {
    params: z.object({
      registrierkasseUuid: z
        .string()
        .openapi({
          param: {
            description: 'The `_uuid` of the `Registrierkasse` to export.',
            in: 'path',
            name: 'registrierkasseUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return results that were saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).',
            in: 'query',
            name: 'before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return results that were saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).',
            in: 'query',
            name: 'after',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The exported data of a particular `Registrierkasse` in its DEP7 representation.',
    },
  },
})

export const getExportGobdRegistrierkassenRegistrierkasseUuidRoute = createRoute({
  method: 'get',
  path: '/export/gobd/registrierkassen/{registrierkasseUuid}',
  tags: ['export'],
  request: {
    params: z.object({
      registrierkasseUuid: z
        .string()
        .openapi({
          param: {
            description: 'The `_uuid` of the `Registrierkasse` to export.',
            in: 'path',
            name: 'registrierkasseUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return results that were saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).',
            in: 'query',
            name: 'before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return results that were saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).',
            in: 'query',
            name: 'after',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The exported data of a particular `Registrierkasse` in its GoBD representation.',
    },
  },
})

export const getExportHtmlBelegeBelegUuidRoute = createRoute({
  method: 'get',
  path: '/export/html/belege/{belegUuid}',
  tags: ['export'],
  request: {
    params: z.object({
      belegUuid: z
        .string()
        .openapi({
          param: {
            description: 'The `_uuid` of a particular `Beleg` to export.',
            in: 'path',
            name: 'belegUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'A particular `Beleg` in its HTML representation.' } },
  security: [],
})

export const getExportPdfBelegeBelegUuidRoute = createRoute({
  method: 'get',
  path: '/export/pdf/belege/{belegUuid}',
  tags: ['export'],
  request: {
    params: z.object({
      belegUuid: z
        .string()
        .openapi({
          param: {
            description: 'The `_uuid` of a particular `Beleg` to export.',
            in: 'path',
            name: 'belegUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'A particular `Beleg` in its PDF representation.' } },
  security: [],
})

export const getExportQrBelegeBelegUuidRoute = createRoute({
  method: 'get',
  path: '/export/qr/belege/{belegUuid}',
  tags: ['export'],
  request: {
    params: z.object({
      belegUuid: z
        .string()
        .openapi({
          param: {
            description: 'The `_uuid` of a particular `Beleg` to export.',
            in: 'path',
            name: 'belegUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'The RKSV QR-Code as PNG file.' } },
  security: [],
})

export const getExportThermalPrintBelegeBelegUuidRoute = createRoute({
  method: 'get',
  path: '/export/thermal-print/belege/{belegUuid}',
  tags: ['export'],
  request: {
    params: z.object({
      belegUuid: z
        .string()
        .openapi({
          param: {
            description: 'The `_uuid` of a particular `Beleg` to export.',
            in: 'path',
            name: 'belegUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      qr: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should the RKSV QR code should be rendered?',
            in: 'query',
            name: 'qr',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(42)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of characters per line.',
            in: 'query',
            name: 'width',
            schema: { default: 42, type: 'integer' },
            required: false,
          },
        }),
      dialect: z
        .enum(['escpos', 'escposlite', 'star', 'text'])
        .default('escpos')
        .exactOptional()
        .openapi({
          param: {
            description: 'The thermal printer dialect.',
            in: 'query',
            name: 'dialect',
            schema: {
              default: 'escpos',
              enum: ['escpos', 'escposlite', 'star', 'text'],
              type: 'string',
            },
            required: false,
          },
        }),
      encoding: z
        .enum(['raw', 'base64'])
        .default('raw')
        .exactOptional()
        .openapi({
          param: {
            description: 'The encoding of the binary data.',
            in: 'query',
            name: 'encoding',
            schema: { default: 'raw', enum: ['raw', 'base64'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'A particular `Beleg` in its ESC/POS or STAR representation.' },
  },
  security: [],
})

export const getExportXlsRegistrierkassenRegistrierkasseUuidBelegeRoute = createRoute({
  method: 'get',
  path: '/export/xls/registrierkassen/{registrierkasseUuid}/belege',
  tags: ['export'],
  request: {
    params: z.object({
      registrierkasseUuid: z
        .string()
        .openapi({
          param: {
            description: 'The `_uuid` of the `Registrierkasse` to export.',
            in: 'path',
            name: 'registrierkasseUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return results that were saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).',
            in: 'query',
            name: 'before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return results that were saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).',
            in: 'query',
            name: 'after',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The exported data of a particular `Registrierkasse` in its Microsoft Excel representation.',
    },
  },
})

export const getRegistrierkassenRegistrierkasseUuidRoute = createRoute({
  method: 'get',
  path: '/registrierkassen/{registrierkasseUuid}',
  tags: ['registrierkasse'],
  description: 'Returns information about a particular `Registrierkasse`.',
  operationId: 'getRegistrierkasse',
  request: {
    params: z.object({
      registrierkasseUuid: z
        .string()
        .openapi({
          param: {
            description: 'The `_uuid` of a particular `Registrierkasse` to fetch.',
            in: 'path',
            name: 'registrierkasseUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Information about a particular `Registrierkasse`.',
      content: { 'application/json': { schema: RegistrierkasseSchema } },
    },
    404: { description: 'This particular `Registrierkasse` does not exist.' },
  },
})

export const postRegistrierkassenRegistrierkasseUuidAbschlussRoute = createRoute({
  method: 'post',
  path: '/registrierkassen/{registrierkasseUuid}/abschluss',
  tags: ['beleg'],
  description: 'Generates an `Abschlussbeleg`.',
  operationId: 'createAbschluss',
  request: {
    params: z.object({
      registrierkasseUuid: z
        .string()
        .openapi({
          param: {
            description: 'The `_uuid` of the `Registrierkasse` to retrieve the `Beleg` collection.',
            in: 'path',
            name: 'registrierkasseUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'An object that contains all data for a particular `Abschlussbeleg`.',
      content: { 'application/json': { schema: AbschlussbelegdatenSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description:
        'The `Abschlussbeleg` has been created, signed and added to the "Datenerfassungsprotokoll".',
      headers: z.object({
        Location: {
          description: 'The URL (`_href`) of the newly created `Beleg` resource.',
          schema: z
            .url()
            .exactOptional()
            .openapi({
              description: 'The URL (`_href`) of the newly created `Beleg` resource.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getRegistrierkassenRegistrierkasseUuidBelegeRoute = createRoute({
  method: 'get',
  path: '/registrierkassen/{registrierkasseUuid}/belege',
  tags: ['beleg'],
  description: 'Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".',
  operationId: 'getBelege',
  request: {
    params: z.object({
      registrierkasseUuid: z
        .string()
        .openapi({
          param: {
            description: 'The `_uuid` of the `Registrierkasse` to retrieve the `Beleg` collection.',
            in: 'path',
            name: 'registrierkasseUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      format: z
        .enum(['export', 'beleg', 'uuidlist'])
        .default('export')
        .openapi({
          param: {
            description: 'Determines the format of the `Beleg` collection.',
            in: 'query',
            name: 'format',
            required: true,
            schema: { default: 'export', enum: ['export', 'beleg', 'uuidlist'], type: 'string' },
          },
        }),
      order: z
        .enum(['asc', 'desc'])
        .default('asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Determines the sorting order.',
            in: 'query',
            name: 'order',
            schema: { default: 'asc', enum: ['asc', 'desc'], type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the number of returned results.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Skips the specified number of results from the result set.',
            in: 'query',
            name: 'offset',
            schema: { default: 0, type: 'integer' },
            required: false,
          },
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return results that where saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).',
            in: 'query',
            name: 'before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return results that where saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).',
            in: 'query',
            name: 'after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      gte: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return results that have at least a particular `Belegnummer`.',
            in: 'query',
            name: 'gte',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      lte: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return results that have at most a particular `Belegnummer`.',
            in: 'query',
            name: 'lte',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The `Beleg` collection from the "Datenerfassungsprotokoll".',
      content: { 'application/json': { schema: BelegeSchema } },
    },
  },
})

export const getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidRoute = createRoute({
  method: 'get',
  path: '/registrierkassen/{registrierkasseUuid}/belege/{belegUuid}',
  tags: ['beleg'],
  description: 'Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".',
  operationId: 'getBeleg',
  request: {
    params: z.object({
      registrierkasseUuid: z
        .string()
        .openapi({
          param: {
            description:
              'The `_uuid` of the `Registrierkasse` that contains the requested `Beleg`.',
            in: 'path',
            name: 'registrierkasseUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      belegUuid: z
        .string()
        .openapi({
          param: {
            description: 'The `_uuid` of the `Beleg` to fetch.',
            in: 'path',
            name: 'belegUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested `Beleg` resource.',
      content: { 'application/json': { schema: BelegSchema } },
    },
    404: { description: 'The requested `Beleg` resource does not exist.' },
  },
})

export const putRegistrierkassenRegistrierkasseUuidBelegeBelegUuidRoute = createRoute({
  method: 'put',
  path: '/registrierkassen/{registrierkasseUuid}/belege/{belegUuid}',
  tags: ['beleg'],
  description: 'Signs a receipt and stores it in the "Datenerfassungsprotokoll".',
  operationId: 'addBeleg',
  request: {
    params: z.object({
      registrierkasseUuid: z
        .string()
        .openapi({
          param: {
            description: 'The `_uuid` of the `Registrierkasse` to use for signing data.',
            in: 'path',
            name: 'registrierkasseUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      belegUuid: z
        .string()
        .openapi({
          param: {
            description: 'The `_uuid` of the `Beleg` to store.',
            in: 'path',
            name: 'belegUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'An object that contains all data for a particular `Beleg` and is formatted according to RKSV "Signaturformat".',
      content: { 'application/json': { schema: BelegdatenSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The `Beleg` has been signed and added to the "Datenerfassungsprotokoll".',
      headers: z.object({
        Location: {
          description: 'The URL (`_href`) of the newly created `Beleg` resource.',
          schema: z
            .url()
            .exactOptional()
            .openapi({
              description: 'The URL (`_href`) of the newly created `Beleg` resource.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'The provided request payload is invalid i.e. not conform the the JSON schema.',
    },
    403: {
      description:
        'Access token is either missing or invalid. Be sure to include the Authorization HTTP header.',
    },
    409: { description: 'A `Beleg` with this particular `belegUuid` already exists.' },
    415: { description: 'The provided request payload is not JSON encoded.' },
    429: { description: 'Request limit exceeded.' },
    500: {
      description:
        'The receipt could not be signed either because the HSM delivered invalid data or the request signing request timed out (currently after 10 seconds).',
    },
  },
})

export const getRegistrierkassenRegistrierkasseUuidDepRoute = createRoute({
  method: 'get',
  path: '/registrierkassen/{registrierkasseUuid}/dep',
  tags: ['registrierkasse'],
  description: 'Generates a DEP file.',
  operationId: 'getDEP',
  request: {
    params: z.object({
      registrierkasseUuid: z
        .string()
        .openapi({
          param: {
            description: 'The `_uuid` of the `Registrierkasse` to retrieve the DEP file.',
            in: 'path',
            name: 'registrierkasseUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'The DEP file.' } },
})

export const getRegistrierkassenRegistrierkasseUuidMonatsbelegeRoute = createRoute({
  method: 'get',
  path: '/registrierkassen/{registrierkasseUuid}/monatsbelege',
  tags: ['monatsbelege'],
  description: 'Returns a list of `Monatsbelege`.',
  operationId: 'getMonatsbelege',
  request: {
    params: z.object({
      registrierkasseUuid: z
        .string()
        .openapi({
          param: {
            description: 'The `_uuid` of the `Registrierkasse`.',
            in: 'path',
            name: 'registrierkasseUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'year', schema: { type: 'integer' }, required: false },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'month', schema: { type: 'integer' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Information about `Monatsbelege`.',
      content: { 'application/json': { schema: z.array(MonatsbelegSchema) } },
    },
  },
})
