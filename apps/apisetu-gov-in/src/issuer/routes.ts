import { createRoute, z } from '@hono/zod-openapi'

const PullDocRequestSchema = z
  .object({
    DocDetails: z
      .object({
        DOB: z
          .string()
          .min(1)
          .openapi({
            description:
              'Date of birth of the DigiLocker user accessing the document/certificate as in Aadhaar in DD-MM-YYYY format. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.',
            example: '31-12-1990',
          }),
        DigiLockerId: z
          .string()
          .min(1)
          .openapi({
            description: 'A unique 36 character DigiLocker Id of the user account.',
            example: '123e4567-e89b-12d3-a456-426655440000',
          }),
        FullName: z
          .string()
          .min(1)
          .openapi({
            description:
              'Name of the DigiLocker user accessing the document/certificate as in Aadhaar. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.',
            example: 'Sunil Kumar',
          }),
        UID: z
          .string()
          .min(1)
          .openapi({
            description:
              'Aadhaar number of the DigiLocker user accessing the document/certificate. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.',
            example: 123456789012,
          }),
        URI: z
          .string()
          .min(1)
          .openapi({
            description: 'URI identifies the document uniquely.',
            example: 'in.gov.kerala.edistrict-INCER-123456',
          }),
      })
      .openapi({ required: ['URI', 'DigiLockerId', 'UID', 'FullName', 'DOB'] }),
    format: z
      .string()
      .min(1)
      .openapi({
        description:
          'The certificate data in the response. Possible values of this attribute are:\n  xml: for certificate data in machine readable xml format\n  pdf: for certificate data in printable pdf format\n  both: for certificate data in both xml and pdf format. If the format attribute is not present in the request, then the API must return Base64 encoded PDF data in the response. Please see the response section below for more details.',
        xml: { attribute: true },
      }),
    orgId: z
      .string()
      .openapi({
        description:
          'Org Id is the user id provided to the Digital Locker application by the issuer application for accessing the API.',
        xml: { attribute: true },
      }),
    ts: z
      .string()
      .min(1)
      .openapi({
        description:
          'A timestamp value. This will be used to decode the keyHash element described below.',
        xml: { attribute: true },
      }),
    txn: z.string().openapi({ description: 'Transaction id.', xml: { attribute: true } }),
    ver: z
      .string()
      .min(1)
      .openapi({ description: 'API version.', xml: { attribute: true } }),
  })
  .openapi({ required: ['ver', 'ts', 'txn', 'orgId', 'format', 'DocDetails'] })
  .openapi('PullDocRequest')

const PullDocResponseSchema = z
  .object({
    DocDetails: z
      .object({
        DataContent: z
          .string()
          .min(1)
          .openapi({
            description:
              'Enclose the Base64 byte encoded certificate metadata in XML format. The DataContent element should be sent only if the original request contains format attribute as “xml” or “both”.',
          }),
        DocContent: z
          .string()
          .min(1)
          .openapi({
            description:
              'Enclose the Base64 byte encoded contents of PDF file in this element. The DocContent element should be sent only if the format attribute in the original request is sent as “pdf” or “both” or is absent.',
          }),
      })
      .openapi({
        description: 'Issuer can add meta content specific to document here.',
        required: ['DocContent', 'DataContent'],
      }),
    ResponseStatus: z
      .object({
        Status: z
          .string()
          .min(1)
          .openapi({ description: '1 for success, 0 for error.', xml: { attribute: true } }),
        ts: z
          .string()
          .min(1)
          .openapi({
            description: 'A timestamp value as sent in the request.',
            xml: { attribute: true },
          }),
        txn: z
          .string()
          .openapi({
            description: 'Transaction id value as sent in the request.',
            xml: { attribute: true },
          }),
      })
      .openapi({ required: ['Status', 'ts', 'txn'] }),
  })
  .openapi({ required: ['ResponseStatus', 'DocDetails'] })
  .openapi('PullDocResponse')

const PullURIRequestSchema = z
  .object({
    DocDetails: z
      .object({
        DOB: z
          .string()
          .openapi({
            description:
              'Date of birth of the DigiLocker user searching for the document/certificate as on Aadhaar in DD-MM-YYYY format. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.',
            example: '09-08-1989',
          }),
        DigiLockerId: z
          .string()
          .openapi({
            description: 'A unique 36 character DigiLocker Id of the user account.',
            example: '123e4567-e89b-12d3-a456-426655440000',
          }),
        DocType: z
          .string()
          .openapi({
            description:
              'Digital Locker will pass the document type being searched in this parameter.',
            example: 'Pdf',
          }),
        FullName: z
          .string()
          .openapi({
            description:
              'Name of the DigiLocker user searching for the document/certificate as on Aadhaar. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.',
            example: 'Sunil',
          }),
        Photo: z
          .string()
          .openapi({
            description:
              'The base 64 encoded contents of JPEG photograph as on Aadhaar. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.',
          }),
        UDF1: z
          .string()
          .openapi({
            description:
              'User defined search parameters to search a unique document/certificate. The <UDF> may be <RollNo> for CBSE, <RegistrationNo> for Transportation Dept. and <PAN> for Income Tax Dept. The search parameters for the API will be configured in the issuer portal of Digital Locker while configuring this API.',
          }),
        UDF2: z.string(),
        UDF3: z.string(),
        UDFn: z.string(),
        UID: z
          .string()
          .openapi({
            description:
              'Aadhaar number of the DigiLocker user searching for the document/certificate. This is an optional parameter and will be sent only if the issuer opts for it while configuring the API on Digital Locker Issuer Portal.',
            example: 123443211122,
          }),
      })
      .openapi({
        required: [
          'DocType',
          'DigiLockerId',
          'UID',
          'FullName',
          'DOB',
          'Photo',
          'UDF1',
          'UDF2',
          'UDF3',
          'UDFn',
        ],
      }),
    format: z
      .string()
      .min(1)
      .openapi({
        description:
          'Indicates the desired format of the certificate data in the response. Possible values of this attribute are:\n  xml: for certificate data in machine readable xml format.\n  pdf: for certificate data in printable pdf format\n  both: for certificate data in both xml and pdf format. If the format attribute is not present in the request, then the API must return Base64 encoded PDF data in the response. Please see the response section below for more details',
        xml: { attribute: true },
      }),
    orgId: z
      .string()
      .openapi({
        description:
          'Org Id is the user id provided to the Digital Locker application by the issuer application for accessing the API.',
        xml: { attribute: true },
      }),
    ts: z
      .string()
      .min(1)
      .openapi({
        description:
          'A timestamp value. This will be used to decode the keyHash element described below.',
        xml: { attribute: true },
      }),
    txn: z
      .string()
      .min(1)
      .openapi({ description: 'Transaction id.', xml: { attribute: true } }),
    ver: z
      .string()
      .min(1)
      .openapi({ description: 'API version.', xml: { attribute: true } }),
  })
  .openapi({ required: ['ver', 'ts', 'txn', 'orgId', 'format', 'DocDetails'] })
  .openapi('PullURIRequest')

const PullURIResponseSchema = z
  .object({
    DocDetails: z
      .object({
        DOB: z
          .string()
          .min(1)
          .openapi({
            description: 'The date of birth if sent in the original request.',
            example: '31-12-1990',
          }),
        DataContent: z
          .string()
          .min(1)
          .openapi({
            description:
              'Enclose the base64 byte encoded certificate metadata in XML format. The DataContent element should be sent only if the original request contains format attribute as “xml” or “both”.',
          }),
        DigiLockerId: z
          .string()
          .min(1)
          .openapi({
            description: 'A unique 36 character DigiLocker Id as sent in the original request.',
            example: '123e4567-e89b-12d3-a456-426655440000',
          }),
        DocContent: z
          .string()
          .min(1)
          .openapi({
            description: 'Enclose the Base64 byte encoded contents of PDF file in this element.',
          }),
        DocType: z
          .string()
          .min(1)
          .openapi({
            description: 'The document type sent in the original request.',
            example: 'INCER',
          }),
        FullName: z
          .string()
          .min(1)
          .openapi({
            description: 'The full name if sent in the original request.',
            example: 'Sunil Kumar',
          }),
        UDF1: z
          .string()
          .min(1)
          .openapi({
            description: 'Search parameters sent in the original request.',
            example: 1333,
          }),
        UDF2: z
          .string()
          .min(1)
          .openapi({
            description: 'Search parameters sent in the original request.',
            example: 2016,
          }),
        UID: z
          .string()
          .min(1)
          .openapi({
            description: 'The Aadhaar number if sent in the original request.',
            example: 123412341234,
          }),
        URI: z
          .string()
          .min(1)
          .openapi({
            description:
              'URI corresponding to the search criteria that identifies the document uniquely.',
            example: 'in.gov.dept.state-INCER-1234567',
          }),
      })
      .openapi({
        description: 'Issuer can add meta content specific to document here.',
        required: [
          'DocType',
          'DigiLockerId',
          'UID',
          'FullName',
          'DOB',
          'UDF1',
          'UDF2',
          'URI',
          'DocContent',
          'DataContent',
        ],
      }),
    ResponseStatus: z
      .object({
        Status: z
          .string()
          .min(1)
          .openapi({
            description: '1 for success, 0 for error and 9 for pending.',
            xml: { attribute: true },
          }),
        ts: z
          .string()
          .min(1)
          .openapi({
            description: 'A timestamp value as sent in the request.',
            xml: { attribute: true },
          }),
        txn: z
          .string()
          .min(1)
          .openapi({
            description: 'Transaction id value as sent in the request.',
            xml: { attribute: true },
          }),
      })
      .openapi({ required: ['Status', 'ts', 'txn'] }),
  })
  .openapi({ required: ['ResponseStatus', 'DocDetails'] })
  .openapi('PullURIResponse')

export const postYourPullDOCRequestAPIPathRoute = createRoute({
  method: 'post',
  path: '/Your Pull DOC Request API Path',
  tags: ['APIs'],
  summary: 'Pull Doc Request API.',
  description:
    'The Pull Doc Request API has to be implemented by the issuers and will be consumed by Digital Locker system. This API will be invoked when the resident clicks on the URI displayed in the Issued documents section of DigLocker. The issuer API will by sending the certificate data. The certificate data should be sent in one of the two formats depending on the request send by Digital Locker:|- a. PDF document format b. XML format for machine readable metadata',
  operationId: 'Pull Doc',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'application/xml',
            in: 'header',
            name: 'Content-Type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'x-digilocker-hmac': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This is used for authentication and to verify the integrity of the request. DigiLocker calculates the hash message authentication code (hmac) of the HTTP request body using SHA256 hashing algorithm and the API Key provided by the issuer as the hashing key. The API Key is specified by the issuer while configuring the Pull Doc API in DigiLocker Partner Portal. The resulting hmac is converted to Base64 format and sent in this parameter. It is strongly recommended that the issuer API calculates the hmac of the HTTP request body, convert it to Base64 and match it with this parameter to ensure authenticity of the request.',
            in: 'header',
            name: 'x-digilocker-hmac',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/xml': { schema: PullDocRequestSchema } } },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/xml': { schema: PullDocResponseSchema } },
    },
  },
})

export const postYourPullURIRequestAPIPathRoute = createRoute({
  method: 'post',
  path: '/Your Pull URI Request API Path',
  tags: ['APIs'],
  summary: 'Pull URI Request API .',
  description:
    'The Pull URI Request API has to be implemented by the issuers and will be consumed by Digital Locker application. This API will be invoked when a citizen searches the issuer repository for his/her certificate. If the certificate data is Aadhaar seeded, the issuer may choose to use Aadhaar number as the search parameter. Digital Locker provides Aadhaar number, name and date of birth as on Aadhaar to the issuer API as additional parameters. The option for these Aadhaar based parameters can be selected while configuring this API in Digital Locker Partner’s Portal. If the certificate data is not Aadhaar seeded then the issuer may use any other unique parameter e.g. driving license number to search for a driving license. These custom parameters will be passed in the UDF elements as shown in the sample request below. The custom parameter(s) can be configured while configuring the API in the DigiLocker Partner’s Portal. The Digital Locker system will query the issuer repository to fetch the URI for any document that match the search criteria. The citizen can save this URI in his/her Digital Locker. It is strongly recommended that the issuer API validate that the name, date of birth details sent by DigiLocker in Aadhaar parameters match with the corresponding details on the certificate before returning the certificate data. This will ensure that only authentic owners get access to a certificate.',
  operationId: 'Pull Uri',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'application/xml',
            in: 'header',
            name: 'Content-Type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'x-digilocker-hmac': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This is used for authentication and to verify the integrity of the request. DigiLocker calculates the hash message authentication code (hmac) of the HTTP request body using SHA256 hashing algorithm and the API Key provided by the issuer as the hashing key. The API Key is specified by the issuer while configuring the Pull Doc API in DigiLocker Partner Portal. The resulting hmac is converted to Base64 format and sent in this parameter. It is strongly recommended that the issuer API calculates the hmac of the HTTP request body, convert it to Base64 and match it with this parameter to ensure authenticity of the request.',
            in: 'header',
            name: 'x-digilocker-hmac',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/xml': { schema: PullURIRequestSchema } } },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/xml': { schema: PullURIResponseSchema } },
    },
  },
})
