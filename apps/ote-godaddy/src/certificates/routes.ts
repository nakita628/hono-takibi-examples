import { createRoute, z } from '@hono/zod-openapi'

const CertificateActionSchema = z
  .object({
    createdAt: z.string().openapi({ description: 'Date action created' }),
    type: z.enum([
      'CERTIFICATE_ISSUED',
      'CERTIFICATE_ORDER_CANCELED',
      'CERTIFICATE_ORDER_CREATED',
      'CERTIFICATE_REVOKED',
      'DOMAIN_VALIDATION_COMPLETE',
      'FRAUD_DETECTED',
      'ORG_NAME_CHANGE',
      'ORG_VALIDATION_COMPLETE',
      'SAN_DROP',
    ]),
  })
  .openapi({ required: ['type', 'createdAt'] })
  .openapi('CertificateAction')

const ArrayOfCertificateActionSchema = z
  .array(CertificateActionSchema)
  .openapi('ArrayOfCertificateAction')

const CertificateContactSchema = z
  .object({
    email: z.string().openapi({ description: 'Email address of requestor contact' }),
    jobTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only used for EVSSL. Job title of requestor contact' }),
    nameFirst: z.string().openapi({ description: 'First name of requestor contact' }),
    nameLast: z.string().openapi({ description: 'Last name of requestor contact' }),
    nameMiddle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Middle initial of requestor contact' }),
    phone: z.string().openapi({ description: 'Phone number for requestor contact' }),
    suffix: z.string().exactOptional().openapi({ description: 'Suffix of requestor contact' }),
  })
  .openapi({ required: ['nameFirst', 'nameLast', 'email', 'phone'] })
  .openapi('CertificateContact')

const CertificateAddressSchema = z
  .object({
    address1: z.string().openapi({ description: 'Address line 1 of organization address' }),
    address2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Address line 2 of organization address' }),
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'City/Locality of organization address' }),
    country: z
      .enum([
        'AC',
        'AD',
        'AE',
        'AF',
        'AG',
        'AI',
        'AL',
        'AM',
        'AN',
        'AO',
        'AQ',
        'AR',
        'AS',
        'AT',
        'AU',
        'AW',
        'AZ',
        'BA',
        'BB',
        'BD',
        'BE',
        'BF',
        'BG',
        'BH',
        'BI',
        'BJ',
        'BM',
        'BN',
        'BO',
        'BR',
        'BS',
        'BT',
        'BV',
        'BW',
        'BY',
        'BZ',
        'CA',
        'CC',
        'CD',
        'CF',
        'CG',
        'CH',
        'CI',
        'CK',
        'CL',
        'CM',
        'CN',
        'CO',
        'CR',
        'CV',
        'CX',
        'CY',
        'CZ',
        'DE',
        'DJ',
        'DK',
        'DM',
        'DO',
        'DZ',
        'EC',
        'EE',
        'EG',
        'EH',
        'ER',
        'ES',
        'ET',
        'FI',
        'FJ',
        'FK',
        'FM',
        'FO',
        'FR',
        'GA',
        'GB',
        'GD',
        'GE',
        'GF',
        'GG',
        'GH',
        'GI',
        'GL',
        'GM',
        'GN',
        'GP',
        'GQ',
        'GR',
        'GS',
        'GT',
        'GU',
        'GW',
        'GY',
        'HK',
        'HM',
        'HN',
        'HR',
        'HT',
        'HU',
        'ID',
        'IE',
        'IL',
        'IM',
        'IN',
        'IO',
        'IQ',
        'IS',
        'IT',
        'JE',
        'JM',
        'JO',
        'JP',
        'KE',
        'KG',
        'KH',
        'KI',
        'KM',
        'KN',
        'KR',
        'KW',
        'KY',
        'KZ',
        'LA',
        'LB',
        'LC',
        'LI',
        'LK',
        'LR',
        'LS',
        'LT',
        'LU',
        'LV',
        'LY',
        'MA',
        'MC',
        'MD',
        'ME',
        'MG',
        'MH',
        'ML',
        'MM',
        'MN',
        'MO',
        'MP',
        'MQ',
        'MR',
        'MS',
        'MT',
        'MU',
        'MV',
        'MW',
        'MX',
        'MY',
        'MZ',
        'NA',
        'NC',
        'NE',
        'NF',
        'NG',
        'NI',
        'NL',
        'NO',
        'NP',
        'NR',
        'NU',
        'NZ',
        'OM',
        'PA',
        'PE',
        'PF',
        'PG',
        'PH',
        'PK',
        'PL',
        'PM',
        'PN',
        'PR',
        'PS',
        'PT',
        'PW',
        'PY',
        'QA',
        'RE',
        'RO',
        'RS',
        'RU',
        'RW',
        'SA',
        'SB',
        'SC',
        'SE',
        'SG',
        'SH',
        'SI',
        'SJ',
        'SK',
        'SL',
        'SM',
        'SN',
        'SO',
        'SR',
        'ST',
        'SV',
        'SZ',
        'TC',
        'TD',
        'TF',
        'TG',
        'TH',
        'TJ',
        'TK',
        'TL',
        'TM',
        'TN',
        'TO',
        'TP',
        'TR',
        'TT',
        'TV',
        'TW',
        'TZ',
        'UA',
        'UG',
        'UM',
        'US',
        'UY',
        'UZ',
        'VA',
        'VC',
        'VE',
        'VG',
        'VI',
        'VN',
        'VU',
        'WF',
        'WS',
        'YE',
        'YT',
        'YU',
        'ZA',
        'ZM',
        'ZW',
      ])
      .openapi({ description: 'Two character country code of organization' }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Postal code of organization address' }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'Full name of State/Province/Territory of organization address' }),
  })
  .openapi({ required: ['address1', 'country'] })
  .openapi('CertificateAddress')

const JurisdictionOfIncorporationSchema = z
  .object({
    city: z.string().exactOptional(),
    country: z.string(),
    county: z.string().exactOptional(),
    state: z.string().exactOptional(),
  })
  .openapi({ required: ['country'] })
  .openapi('JurisdictionOfIncorporation')

const CertificateOrganizationSchema = z
  .object({
    address: CertificateAddressSchema,
    assumedName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Only for EVSSL. The DBA(does business as) name for the organization.',
      }),
    jurisdictionOfIncorporation: JurisdictionOfIncorporationSchema.exactOptional(),
    name: z.string().openapi({ description: 'Name of organization that owns common name' }),
    phone: z.string().openapi({ description: 'Phone number for organization' }),
    registrationAgent: z.string().exactOptional().openapi({ description: 'Only for EVSSL.' }),
    registrationNumber: z.string().exactOptional().openapi({ description: 'Only for EVSSL.' }),
  })
  .openapi({ required: ['name', 'phone', 'address'] })
  .openapi('CertificateOrganization')

const SubjectAlternativeNameDetailsSchema = z
  .object({
    status: z
      .enum(['PENDING', 'INVALID', 'COMPLETED', 'FRAUD'])
      .openapi({ description: 'Total number of page results' }),
    subjectAlternativeName: z
      .string()
      .openapi({ description: 'Subject alternative name to be included in certificate' }),
  })
  .openapi({ required: ['subjectAlternativeName', 'status'] })
  .openapi('SubjectAlternativeNameDetails')

const CertificateSchema = z
  .object({
    certificateId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the certificate request. Only present if no errors returned',
      }),
    commonName: z.string().exactOptional().openapi({ description: 'Common name of certificate' }),
    contact: CertificateContactSchema,
    createdAt: z.string().openapi({ description: 'The date the certificate was ordered.' }),
    deniedReason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only present if certificate order has been denied' }),
    organization: CertificateOrganizationSchema.exactOptional(),
    period: z.int().openapi({ description: 'Validity period of order. Specified in years' }),
    productType: z
      .enum([
        'DV_SSL',
        'DV_WILDCARD_SSL',
        'EV_SSL',
        'OV_CS',
        'OV_DS',
        'OV_SSL',
        'OV_WILDCARD_SSL',
        'UCC_DV_SSL',
        'UCC_EV_SSL',
        'UCC_OV_SSL',
      ])
      .openapi({ description: 'Certificate product type' }),
    progress: z
      .int()
      .exactOptional()
      .openapi({ description: 'Percentage of completion for certificate vetting' }),
    revokedAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'The revocation date of certificate (if revoked).' }),
    rootType: z
      .enum(['GODADDY_SHA_1', 'GODADDY_SHA_2', 'STARFIELD_SHA_1', 'STARFIELD_SHA_2'])
      .exactOptional()
      .openapi({ description: 'Root Type' }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serial number of certificate (if issued or revoked)' }),
    serialNumberHex: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Hexadecmial format for Serial number of certificate(if issued or revoked)',
      }),
    slotSize: z
      .enum(['FIVE', 'TEN', 'FIFTEEN', 'TWENTY', 'THIRTY', 'FOURTY', 'FIFTY', 'ONE_HUNDRED'])
      .exactOptional()
      .openapi({
        description: 'Number of subject alternative names(SAN) to be included in certificate ',
      }),
    status: z
      .enum([
        'PENDING_ISSUANCE',
        'ISSUED',
        'REVOKED',
        'CANCELED',
        'DENIED',
        'PENDING_REVOCATION',
        'PENDING_REKEY',
        'UNUSED',
        'EXPIRED',
      ])
      .openapi({ description: 'Status of certificate' }),
    subjectAlternativeNames: z
      .array(SubjectAlternativeNameDetailsSchema)
      .exactOptional()
      .openapi({ description: 'Contains subject alternative names set' }),
    validEnd: z
      .string()
      .exactOptional()
      .openapi({
        description: "The end date of the certificate's validity (if issued or revoked).",
      }),
    validStart: z
      .string()
      .exactOptional()
      .openapi({
        description: "The start date of the certificate's validity (if issued or revoked).",
      }),
  })
  .openapi({
    required: ['certificateId', 'status', 'contact', 'period', 'createdAt', 'productType'],
  })
  .openapi('Certificate')

const PEMCertificatesSchema = z
  .object({
    certificate: z.string().openapi({ description: 'End entity certificate in PEM format' }),
    cross: z
      .string()
      .exactOptional()
      .openapi({ description: 'CA Cross Intermediate certificate in PEM format' }),
    intermediate: z
      .string()
      .exactOptional()
      .openapi({ description: 'CA Signing Intermediate certificate in PEM format' }),
    root: z.string().exactOptional().openapi({ description: 'CA Root certificate in PEM format' }),
  })
  .openapi({ required: ['certificate'] })
  .openapi('PEMCertificates')

const CertificateBundleSchema = z
  .object({
    pems: PEMCertificatesSchema,
    serialNumber: z.string().openapi({ description: 'Serial number of certificate requested' }),
  })
  .openapi({ required: ['serialNumber', 'pems'] })
  .openapi('CertificateBundle')

const CertificateCallbackSchema = z
  .object({
    callbackUrl: z
      .string()
      .openapi({ description: 'Callback url registered to receive stateful actions' }),
  })
  .openapi({ required: ['callbackUrl'] })
  .openapi('CertificateCallback')

const CertificateOrganizationCreateSchema = z
  .object({
    address: CertificateAddressSchema.exactOptional(),
    assumedName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Only for EVSSL. The DBA(does business as) name for the organization.',
      }),
    name: z.string().openapi({ description: 'Name of organization that owns common name' }),
    phone: z.string().openapi({ description: 'Phone number for organization' }),
    registrationAgent: z.string().exactOptional().openapi({ description: 'Only for EVSSL.' }),
    registrationNumber: z.string().exactOptional().openapi({ description: 'Only for EVSSL.' }),
  })
  .openapi({ required: ['name', 'phone'] })
  .openapi('CertificateOrganizationCreate')

const CertificateCreateSchema = z
  .object({
    callbackUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if client would like to receive stateful actions via callback during certificate lifecyle',
      }),
    commonName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name to be secured in certificate. If provided, CN field in CSR will be ignored.',
      }),
    contact: CertificateContactSchema,
    csr: z.string().openapi({ description: 'Certificate Signing Request' }),
    intelVPro: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Only used for OV' }),
    organization: CertificateOrganizationCreateSchema.exactOptional(),
    period: z.int().openapi({ description: 'Number of years for certificate validity period' }),
    productType: z
      .enum([
        'DV_SSL',
        'DV_WILDCARD_SSL',
        'EV_SSL',
        'OV_CS',
        'OV_DS',
        'OV_SSL',
        'OV_WILDCARD_SSL',
        'UCC_DV_SSL',
        'UCC_EV_SSL',
        'UCC_OV_SSL',
      ])
      .openapi({
        description: 'Type of product requesting a certificate. Only required non-renewal',
      }),
    rootType: z
      .enum(['GODADDY_SHA_1', 'GODADDY_SHA_2', 'STARFIELD_SHA_1', 'STARFIELD_SHA_2'])
      .default('STARFIELD_SHA_2')
      .exactOptional()
      .openapi({
        description:
          'Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date',
      }),
    slotSize: z
      .enum(['FIVE', 'TEN', 'FIFTEEN', 'TWENTY', 'THIRTY', 'FOURTY', 'FIFTY', 'ONE_HUNDRED'])
      .exactOptional()
      .openapi({
        description: 'Number of subject alternative names(SAN) to be included in certificate ',
      }),
    subjectAlternativeNames: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description:
          'Subject Alternative names. Collection of subjectAlternativeNames to be included in certificate.',
      }),
  })
  .openapi({ required: ['csr', 'productType', 'period', 'contact'] })
  .openapi('CertificateCreate')

const CertificateDetailV2Schema = z
  .object({
    certificateId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the certificate request. Only present if no errors returned',
      }),
    commonName: z.string().openapi({ description: 'Common name of certificate' }),
    completedAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date the certificate request completed processing.' }),
    contact: CertificateContactSchema,
    createdAt: z.string().openapi({ description: 'The date the certificate was ordered.' }),
    csr: z
      .string()
      .exactOptional()
      .openapi({ description: 'Certificate signing request (if present) in PEM format' }),
    deniedReason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only present if certificate order has been denied' }),
    organization: CertificateOrganizationSchema.exactOptional(),
    period: z.int().openapi({ description: 'Validity period of order. Specified in years' }),
    progress: z
      .int()
      .exactOptional()
      .openapi({ description: 'Percentage of completion for certificate vetting' }),
    renewalAvailable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Only returned when a renewal is available.' }),
    revokedAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'The revocation date of certificate (if revoked).' }),
    rootType: z
      .enum(['GODADDY_SHA_1', 'GODADDY_SHA_2', 'STARFIELD_SHA_1', 'STARFIELD_SHA_2'])
      .exactOptional()
      .openapi({
        description:
          'Root type: \n  * `GODADDY_SHA_1` - GoDaddy (Secure Hash Algorithm 1) SHA-1 root type\n  * `GODADDY_SHA_2` - GoDaddy (Secure Hash Algorithm 2) SHA-2 root type\n  * `STARFIELD_SHA_1` - Starfield SHA-1 root type\n  * `STARFIELD_SHA_2` - Starfield SHA-2 root type\n',
      }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serial number of certificate (if issued or revoked)' }),
    serialNumberHex: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Hexadecmial format for Serial number of certificate(if issued or revoked)',
      }),
    slotSize: z
      .enum(['FIVE', 'TEN', 'FIFTEEN', 'TWENTY', 'THIRTY', 'FOURTY', 'FIFTY', 'ONE_HUNDRED'])
      .exactOptional()
      .openapi({
        description:
          'Number of subject alternative names (SAN) to be included in certificate (if UCC): \n  * `FIVE` - Five slot UCC request\n  * `TEN` - Ten slot UCC request\n  * `FIFTEEN` - Fifteen slot UCC request\n  * `TWENTY` - Twenty slot UCC request\n  * `THIRTY` - Thirty slot UCC request\n  * `FOURTY` - Fourty slot UCC request\n  * `FIFTY` - Fifty slot UCC request\n  * `ONE_HUNDRED` - One hundred slot UCC request\n',
      }),
    status: z
      .enum([
        'PENDING_ISSUANCE',
        'ISSUED',
        'REVOKED',
        'CANCELED',
        'DENIED',
        'PENDING_REVOCATION',
        'PENDING_REKEY',
        'UNUSED',
        'EXPIRED',
      ])
      .openapi({
        description:
          'Certificate status (if issued or revoked): \n  * `CANCELED` - Certificate request was canceled by customer\n  * `DENIED` - Certificate request was denied by customer\\n  * `EXPIRED` - Issued certificate has exceeded the valid end date\n  * `ISSUED` - Certificate has been issued and is within validity period\n  * `PENDING_ISSUANCE` - Certificate request has completed domain verification and is in the process of being issued\n  * `PENDING_REKEY` - Previously issued certificate was rekeyed by customer and is in the process of being reissued\n  * `PENDING_REVOCATION` - Previously issued certificate is in the process of being revoked\n  * `REVOKED` - Issued certificate has been revoked\\n  * `UNUSED` - Certificate in an error state\n',
      }),
    subjectAlternativeNames: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description:
          'Subject Alternative names. Collection of subjectAlternativeNames to be included in certificate.',
      }),
    type: z
      .enum([
        'DV_SSL',
        'DV_WILDCARD_SSL',
        'EV_SSL',
        'OV_CODE_SIGNING',
        'OV_DRIVER_SIGNING',
        'OV_SSL',
        'OV_WILDCARD_SSL',
        'UCC_DV_SSL',
        'UCC_EV_SSL',
        'UCC_OV_SSL',
      ])
      .openapi({
        description:
          'Certificate type: \n  * `DV_SSL` - (Domain Validated Secure Sockets Layer) SSL certificate validated using domain name only\n  * `DV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using domain name only\n  * `EV_SSL` - (Extended Validation) SSL certificate validated using organization information, domain name, business legal status, and other factors\n  * `OV_CODE_SIGNING` - Code signing SSL certificate used by software developers to digitally sign apps. Validated using organization information\n  * `OV_DRIVER_SIGNING` - Driver signing SSL certificate request used by software developers to digitally sign secure code for Windows hardware drivers. Validated using organization information\n  * `OV_SSL` - SSL certificate validated using organization information and domain name\n  * `OV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using organization information and domain name\n  * `UCC_DV_SSL` - (Unified Communication Certificate) Multi domain SSL certificate validated using domain name only\n  * `UCC_EV_SSL` - Multi domain SSL certificate validated using organization information, domain name, business legal status, and other factors\n  * `UCC_OV_SSL` - Multi domain SSL certificate validated using organization information and domain name\n',
      }),
    validEndAt: z
      .string()
      .exactOptional()
      .openapi({
        description: "The end date of the certificate's validity (if issued or revoked).",
      }),
    validStartAt: z
      .string()
      .exactOptional()
      .openapi({
        description: "The start date of the certificate's validity (if issued or revoked).",
      }),
  })
  .openapi({
    required: ['certificateId', 'commonName', 'period', 'type', 'status', 'createdAt', 'contact'],
  })
  .openapi('CertificateDetailV2')

const CertificateEmailHistorySchema = z
  .object({
    accountId: z.int().openapi({ description: 'Shopper Id requested certificate' }),
    body: z.string().openapi({ description: 'Email message' }),
    dateEntered: z.string().openapi({ description: 'Date email sent' }),
    fromType: z.string().openapi({ description: 'Email from address' }),
    id: z.int().openapi({ description: 'Email Id' }),
    recipients: z.string().openapi({ description: 'Email address email was sent' }),
    subject: z.string().openapi({ description: 'Email subject' }),
    templateType: z.string().openapi({ description: 'Email template type name' }),
  })
  .openapi({
    required: [
      'id',
      'accountId',
      'templateType',
      'fromType',
      'recipients',
      'body',
      'dateEntered',
      'subject',
    ],
  })
  .openapi('CertificateEmailHistory')

const CertificateIdentifierSchema = z
  .object({
    certificateId: z
      .string()
      .openapi({
        description: 'The unique identifier of the certificate request. Only present if verified.',
      }),
  })
  .openapi({ required: ['certificateId'] })
  .openapi('CertificateIdentifier')

const CertificateReissueSchema = z
  .object({
    callbackUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if client would like to receive stateful action via callback during certificate lifecyle',
      }),
    commonName: z
      .string()
      .default('Existing common name')
      .exactOptional()
      .openapi({ description: 'The common name of certificate to be secured' }),
    csr: z
      .string()
      .default('Existing CSR')
      .exactOptional()
      .openapi({ description: 'Certificate Signing Request.' }),
    delayExistingRevoke: z
      .int()
      .max(168)
      .default(72)
      .exactOptional()
      .openapi({
        description:
          'In hours, time to delay revoking existing certificate after issuance of new certificate. If revokeExistingCertOnIssuance is enabled, this value will be ignored',
      }),
    forceDomainRevetting: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description:
          'Optional field. Domain verification will be required for each domain listed here. Specify a value of * to indicate that all domains associated with the request should have their domain information reverified.',
      }),
    rootType: z
      .enum(['GODADDY_SHA_1', 'GODADDY_SHA_2', 'STARFIELD_SHA_1', 'STARFIELD_SHA_2'])
      .default('GODADDY_SHA_1')
      .exactOptional()
      .openapi({
        description:
          'Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date',
      }),
    subjectAlternativeNames: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description:
          'Only used for UCC products. An array of subject alternative names to include in certificate.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CertificateReissue')

const CertificateRenewSchema = z
  .object({
    callbackUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if client would like to receive stateful actions via callback during certificate lifecyle',
      }),
    commonName: z
      .string()
      .default('Existing common name')
      .exactOptional()
      .openapi({ description: 'The common name of certificate to be secured' }),
    csr: z
      .string()
      .default('Existing CSR')
      .exactOptional()
      .openapi({ description: 'Certificate Signing Request.' }),
    period: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'Number of years for certificate validity period, if different from previous certificate',
      }),
    rootType: z
      .enum(['GODADDY_SHA_1', 'GODADDY_SHA_2', 'STARFIELD_SHA_1', 'STARFIELD_SHA_2'])
      .default('GODADDY_SHA_1')
      .exactOptional()
      .openapi({
        description:
          'Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date',
      }),
    subjectAlternativeNames: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description:
          'Only used for UCC products. An array of subject alternative names to include in certificate. Not including a subject alternative name that was in the previous certificate will remove it from the renewed certificate.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CertificateRenew')

const CertificateRevokeSchema = z
  .object({
    reason: z
      .enum([
        'AFFILIATION_CHANGED',
        'CESSATION_OF_OPERATION',
        'KEY_COMPROMISE',
        'PRIVILEGE_WITHDRAWN',
        'SUPERSEDED',
      ])
      .openapi({ description: 'Reason for revocation' }),
  })
  .openapi({ required: ['reason'] })
  .openapi('CertificateRevoke')

const CertificateSiteSealSchema = z
  .object({ html: z.string().openapi({ description: 'Certificate Seal HTML' }) })
  .openapi({ required: ['html'] })
  .openapi('CertificateSiteSeal')

const CertificateSummaryV2Schema = z
  .object({
    certificateId: z
      .string()
      .openapi({ description: 'The unique identifier of the certificate request.' }),
    commonName: z.string().openapi({ description: 'Common name for the certificate request.' }),
    completedAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date the certificate request completed processing (if issued or revoked).',
      }),
    createdAt: z
      .string()
      .openapi({ description: 'Date that the certificate request was received.' }),
    period: z.int().openapi({ description: 'Validity period of order. Specified in years.' }),
    renewalAvailable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Only returned when a renewal is available.' }),
    revokedAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'The revocation date of certificate (if revoked).' }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serial number of certificate (if issued or revoked).' }),
    slotSize: z
      .enum(['FIVE', 'TEN', 'FIFTEEN', 'TWENTY', 'THIRTY', 'FOURTY', 'FIFTY', 'ONE_HUNDRED'])
      .exactOptional()
      .openapi({
        description:
          'Number of subject alternative names (SAN) to be included in certificate (if UCC): \n  * `FIVE` - Five slot UCC request\n  * `TEN` - Ten slot UCC request\n  * `FIFTEEN` - Fifteen slot UCC request\n  * `TWENTY` - Twenty slot UCC request\n  * `THIRTY` - Thirty slot UCC request\n  * `FOURTY` - Fourty slot UCC request\n  * `FIFTY` - Fifty slot UCC request\n  * `ONE_HUNDRED` - One hundred slot UCC request\n',
      }),
    status: z
      .enum([
        'ISSUED',
        'CANCELED',
        'DENIED',
        'EXPIRED',
        'PENDING_ISSUANCE',
        'PENDING_REKEY',
        'PENDING_REVOCATION',
        'REVOKED',
        'UNUSED',
      ])
      .openapi({
        description:
          'Certificate status (if issued or revoked): \n  * `CANCELED` - Certificate request was canceled by customer\n  * `DENIED` - Certificate request was denied by customer\n  * `EXPIRED` - Issued certificate has exceeded the valid end date\n  * `ISSUED` - Certificate has been issued and is within validity period\n  * `PENDING_ISSUANCE` - Certificate request has completed domain verification and is in the process of being issued\n  * `PENDING_REKEY` - Previously issued certificate was rekeyed by customer and is in the process of being reissued\n  * `PENDING_REVOCATION` - Previously issued certificate is in the process of being revoked\n  * `REVOKED` - Issued certificate has been revoked\n  * `UNUSED` - Certificate in an error state\n',
      }),
    subjectAlternativeNames: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description:
          'Subject Alternative names (if UCC). Collection of subjectAlternativeNames to be included in certificate.',
      }),
    type: z
      .enum([
        'DV_SSL',
        'DV_WILDCARD_SSL',
        'EV_SSL',
        'OV_CODE_SIGNING',
        'OV_DRIVER_SIGNING',
        'OV_SSL',
        'OV_WILDCARD_SSL',
        'UCC_DV_SSL',
        'UCC_EV_SSL',
        'UCC_OV_SSL',
      ])
      .openapi({
        description:
          'Certificate type: \n  * `DV_SSL` - (Domain Validated Secure Sockets Layer) SSL certificate validated using domain name only\n  * `DV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using domain name only\n  * `EV_SSL` - (Extended Validation) SSL certificate validated using organization information, domain name, business legal status, and other factors\n  * `OV_CODE_SIGNING` - Code signing SSL certificate used by software developers to digitally sign apps. Validated using organization information\n  * `OV_DRIVER_SIGNING` - Driver signing SSL certificate request used by software developers to digitally sign secure code for Windows hardware drivers. Validated using organization information\n  * `OV_SSL` - SSL certificate validated using organization information and domain name\n  * `OV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using organization information and domain name\n  * `UCC_DV_SSL` - (Unified Communication Certificate) Multi domain SSL certificate validated using domain name only\n  * `UCC_EV_SSL` - Multi domain SSL certificate validated using organization information, domain name, business legal status, and other factors\n  * `UCC_OV_SSL` - Multi domain SSL certificate validated using organization information and domain name\n',
      }),
    validEndAt: z
      .string()
      .exactOptional()
      .openapi({
        description: "The end date of the certificate's validity (if issued or revoked).",
      }),
    validStartAt: z
      .string()
      .exactOptional()
      .openapi({
        description: "The start date of the certificate's validity (if issued or revoked).",
      }),
  })
  .openapi({ required: ['certificateId', 'commonName', 'period', 'type', 'createdAt', 'status'] })
  .openapi('CertificateSummaryV2')

const PaginationSchema = z
  .object({
    first: z.string().exactOptional().openapi({ description: 'URI to access the first page' }),
    last: z.string().exactOptional().openapi({ description: 'URI to access the last page' }),
    next: z.string().exactOptional().openapi({ description: 'URI to access the next page' }),
    previous: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI to access the previous page' }),
    total: z.int().exactOptional().openapi({ description: 'Number of records available' }),
  })
  .openapi({ required: [] })
  .openapi('Pagination')

const CertificateSummariesV2Schema = z
  .object({
    certificates: z
      .array(CertificateSummaryV2Schema)
      .openapi({ description: 'List of certificates for a specified customer.' }),
    pagination: PaginationSchema,
  })
  .openapi({ required: ['certificates', 'pagination'] })
  .openapi('CertificateSummariesV2')

const DomainVerificationSummarySchema = z
  .object({
    createdAt: z
      .string()
      .openapi({
        description: 'Timestamp indicating when the domain verification process was started',
      }),
    dceToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'DCE verification type token (if DCE verification type).' }),
    domain: z.string().openapi({ description: 'Domain name' }),
    domainEntityId: z
      .int()
      .openapi({
        description:
          'A unique identifier that can be leveraged for retrieving domain verification related information. Primarily used when troubleshooting a request',
      }),
    modifiedAt: z
      .string()
      .openapi({
        description: 'Timestamp indicating when the domain verification process was last updated',
      }),
    status: z
      .enum([
        'COMPLETED',
        'FAILED_VERIFICATION',
        'VERIFIED_POSSIBLE_FRAUD',
        'DROPPED',
        'DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION',
        'DROPPED_GOOGLE_SAFE_BROWSING',
        'INVALID',
        'AWAITING',
        'PENDING_POSSIBLE_FRAUD',
        'REVOKED_CERTIFICATE',
      ])
      .openapi({
        description:
          'Domain verification status: \n  * `AWAITING` - Verification pending customer input\n  * `INVALID` - SAN connected to a cancelled request\n  * `COMPLETED` - Verification completed\n  * `FAILED_VERIFICATION` - Verification failed\n  * `PENDING_POSSIBLE_FRAUD` - Flagged for a system level fraud review\n  * `VERIFIED_POSSIBLE_FRAUD` - Fraud detection reviewed but verified\n  * `DROPPED` - SAN dropped from request\n  * `REVOKED_CERT` - Certificate revoked\n  * `DROPPED_GOOGLE_SAFE_BROWSING` - SAN dropped from request due to Google Safe Browsing check\n  * `DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION` - SAN dropped from request due to Certificate Authorization Authority DNS record check\n',
      }),
    type: z
      .enum([
        'DOMAIN_CONTROL_EMAIL',
        'AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN',
        'AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR',
        'AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER',
        'AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER',
        'AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER',
        'DOMAIN_ACCESS_EMAIL',
        'DOMAIN_ACCESS_LETTER',
        'DOMAIN_ZONE_CONTROL',
        'MANUAL_DOMAIN_ACCESS_EMAIL',
        'PREVIOUS_DOMAIN_ACCESS_EMAIL',
        'REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER',
        'REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL',
        'REGISTRATION_AUTHORITY_OVERRIDE',
        'REGISTRATION_AUTHORITY_WEBSITE_CONTROL',
        'CUSTOMER_OWNED',
        'WEBSITE_CONTROL',
      ])
      .openapi({
        description:
          'Domain verification type: \n  * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN` - Domain verified using domain control verification email sent to admin@<your.domain.com>\n  * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR` - Domain verified using domain control verification email sent to administrator@<your.domain.com>\n  * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER` - Domain verified using domain control verification email sent to hostmaster@<your.domain.com>\n  * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER` - Domain verified using domain control verification email sent to postmaster@<your.domain.com>\n  * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER` - Domain verified using domain control verification email sent to webmaster@<your.domain.com>\n  * `DOMAIN_ACCESS_EMAIL` - Domain verified using a domain access email\n  * `DOMAIN_ACCESS_LETTER` - Customer completed a domain access letter which was used for domain verification\n  * `DOMAIN_CONTROL_EMAIL` - Domain verified using HTML file or DNS zone file text value\n  * `DOMAIN_ZONE_CONTROL` - DNS zone file containing a pre-generated text value used for domain verification\n  * `MANUAL_DOMAIN_ACCESS_EMAIL` - DAE sent to an email address manually entered by a rep\n  * `PREVIOUS_DOMAIN_ACCESS_EMAIL` - Customers domain access email for a prior certificate request was used for domain verification\n  * `REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER` - Representative reviewed a customer provided domain access letter and verified domain\n  * `REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL` - Representative verified domain using a manual domain zone control check\n  * `REGISTRATION_AUTHORITY_OVERRIDE` - Representative verified domain using alternative methods\n  * `REGISTRATION_AUTHORITY_WEBSITE_CONTROL` - Representative verified domain using a manual website control check\n  * `CUSTOMER_OWNED` - Validated customer account information used for domain control verification\n  * `WEBSITE_CONTROL` - HTML file in root website directory containing pre-generated value used for domain control verification\n',
      }),
    usage: z
      .enum(['COMMON_NAME', 'SUBJECT_ALTERNATIVE_NAME'])
      .openapi({ description: 'Type of domain name used for domain verification' }),
  })
  .openapi({
    required: ['domain', 'domainEntityId', 'status', 'createdAt', 'modifiedAt', 'type', 'usage'],
  })
  .openapi('DomainVerificationSummary')

const DomainVerificationDetailSchema = DomainVerificationSummarySchema.and(
  z
    .object({
      certificateAuthorityAuthorization: z
        .object({
          completedAt: z
            .string()
            .exactOptional()
            .openapi({ description: 'The date the certificate request completed processing.' }),
          queryPaths: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'Details all the individual DNS paths that were scanned for CAA records for this domain, as detailed by RFC 6844. This element not only contains the parts determined from parsing the domain, but also any CNAME or DNAME targets specified by any of those individual parts.',
            }),
          recommendations: z
            .array(
              z
                .enum([
                  'ADD_CA_TO_CAA',
                  'CREATE_TARGET_DOMAIN_CAA',
                  'DISABLE_DNSSEC',
                  'FIX_CRITICAL_TAG',
                  'VALIDATE_SOA',
                ])
                .openapi({
                  description:
                    "* `ADD_CA_TO_CAA` - The system found a CAA record in the domain hierarchy, but it did not find our CA in the record's values. Add `godaddy.com` or `starfieldtech.com` to the CAA record's values.\n* `CREATE_TARGET_DOMAIN_CAA` - Create a CAA record on the specified domain with `godaddy.com` or `starfieldtech.com` as the value. If the system finds a CAA record in the specified domain, it will stop scanning the domain hierarchy, thereby preventing potentially problematic parent domain paths from being scanned.\n* `DISABLE_DNSSEC` - Disable DNSSEC on the domain if CAA lookups fail and a DNSSEC scan is being used as the method for determining if the specified domain can remain in the certificate request.\n* `FIX_CRITICAL_TAG` - When setting the critical flag in a CAA record, you must ensure you're using a well-known tag, per RFC 6844.\n* `VALIDATE_SOA` - Make sure all queryPaths for the specified domain have an SOA record pointing to a valid publicly-accessible nameserver and respond in a timely fashion.\n",
                }),
            )
            .exactOptional()
            .openapi({
              description:
                'Returns a list of fix recommendations if the query was unsuccessful, or if the domain was dropped from the certificate request, so that a subsequent certificate request with the specified domain will successfully pass its CAA scan.',
            }),
          status: z
            .enum([
              'PENDING',
              'REMOVED_DNS_ERROR',
              'REMOVED_DNSSEC_ENABLED',
              'REMOVED_NOT_FOUND_CA',
              'REMOVED_UNKNOWN_CRITICAL_TAG',
              'SUCCESS_CAA',
              'SUCCESS_DNSSEC',
            ])
            .exactOptional()
            .openapi({
              description:
                'Returns the status of the CAA Lookup for the specified domain:\n* `PENDING` - The CAA lookup has not yet been attempted for the specified domain.\n* `REMOVED_DNS_ERROR` - Repeated errors occurred while scanning for CAA records, thereby resulting in a DNSSEC scan. DNS errors then prevented the system from determining if DNSSEC was enabled for the specified domain, and it had to be removed from the certificate request.\n* `REMOVED_DNSSEC_ENABLED` - Repeated errors occurred while scanning for CAA records, thereby resulting in a DNSSEC scan. DNSSEC was determined to be enabled for the specified domain, and it had to be removed from the certificate request.\n* `REMOVED_NOT_FOUND_CA` - CAA records were found during the CAA lookup for the speicified domain, but `godaddy.com` or `starfieldtech.com` was not listed as a value, thereby not allowing us to issue a certificate with this domain. The specified domain was removed from the certificate request.\n* `REMOVED_UNKNOWN_CRITICAL_TAG` - A CAA record was found during the CAA lookup with its Critical bit set, as outlined by RFC 6844, yet the Tag of the CAA record was not understood (as outlined by RFC 6844). The specified domain was removed from the certificate request.\n* `SUCCESS_CAA` - The CAA lookup was successful for the specified domain, and the domain can remain in the certificate request.\n* `SUCCESS_DNSSEC` - Repeated errors occurred while scanning for CAA records, thereby resulting in a DNSSEC scan. The system detemined that DNSSEC was not enabled for the specified domain, so the domain is allowed to remain in the certificate request.\n',
            }),
        })
        .exactOptional()
        .openapi({
          description:
            "Contains information about the last Certificate Authority Authorization (CAA) Lookup details for the specified domain.\n\nIn order for a domain to be eligible to be included in the certificate, the entire domain hierarchy must be scanned for DNS CAA records, as outlined by RFC 6844.\n\nThe absence of any CAA records found in the domain hierarchy indicates that the domain may be included in the certificate. Alternatively, if CAA records are found when scanning the domain hierarchy, the domain may be included in the certificate as long as `godaddy.com` or `starfieldtech.com` is found in the DNS record value. However, if CAA records are found, yet `godaddy.com` or `starfieldtech.com` is not found in any CAA record's value, then we must drop the domain from the certificate request.\n\nIn the case where there are repeated DNS errors when scanning the domain hierarchy for CAA records, thus ending in an unsuccessful scan, then the domain can still be included in the certificate provided the primary domain is not setup with DNSSEC. Conversely, if DNSSEC is found to be setup on the primary domain when scanning following repeated CAA failures, the domain must be dropped from the certificate request. Finally, if DNS errors persist to the point where a successful DNSSEC query could not be obtained, then the domain must be dropped from the certificate request.\n",
          required: [],
        }),
    })
    .openapi({ required: [] }),
).openapi('DomainVerificationDetail')

const ErrorFieldSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Short identifier for the error, suitable for indicating the specific error within client code',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the problem with the contents of the field' }),
    path: z
      .string()
      .openapi({
        description:
          'JSONPath referring to the field within the submitted data containing an error',
      }),
  })
  .openapi({ required: ['path', 'code'] })
  .openapi('ErrorField')

const ErrorSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Short identifier for the error, suitable for indicating the specific error within client code',
      }),
    fields: z
      .array(ErrorFieldSchema)
      .exactOptional()
      .openapi({
        description: 'List of the specific fields, and the errors found with their contents',
      }),
    message: z.string().exactOptional().openapi({ description: 'Description of the error' }),
  })
  .openapi({ required: ['code'] })
  .openapi('Error')

const ErrorLimitSchema = z
  .object({
    retryAfterSec: z
      .int()
      .openapi({ description: 'Number of seconds to wait before attempting a similar request' }),
  })
  .openapi({ required: ['retryAfterSec'] })
  .and(ErrorSchema)
  .openapi({ 'x-error-model': true })
  .openapi('ErrorLimit')

const ExternalAccountBindingSchema = z
  .object({
    directoryUrl: z.url().openapi({ description: 'ACME directory resource URL.' }),
    hmacKey: z.string().openapi({ description: 'EAB HMAC key for the ACME account' }),
    keyId: z.string().openapi({ description: 'EAB key identifier for the ACME account.' }),
  })
  .openapi({ required: ['directoryUrl', 'keyId', 'hmacKey'] })
  .openapi('ExternalAccountBinding')

const _401Response = {
  description: 'Authentication info not sent or is invalid',
  content: { '*/*': { schema: ErrorSchema } },
}

const _403Response = {
  description: 'Authenticated user is not allowed access',
  content: { '*/*': { schema: ErrorSchema } },
}

const _404Response = {
  description: 'Resource not found',
  content: { '*/*': { schema: ErrorSchema } },
}

const _422Response = {
  description: 'Application-specific request error',
  content: { '*/*': { schema: ErrorSchema } },
}

const _429Response = {
  description: 'Too many requests received within interval',
  content: { '*/*': { schema: ErrorLimitSchema } },
}

const _500Response = {
  description: 'Internal server error',
  content: { '*/*': { schema: ErrorSchema } },
}

const CertificateIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Certificate id to lookup',
      in: 'path',
      name: 'certificateId',
      required: true,
      schema: { type: 'string' },
    },
  })

const CustomerIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'An identifier for a customer',
      in: 'path',
      name: 'customerId',
      required: true,
      schema: { type: 'string' },
    },
  })

const DomainParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'A valid domain name in the certificate request',
      in: 'path',
      name: 'domain',
      required: true,
      schema: { format: 'domain', type: 'string' },
    },
  })

const LimitParamsSchema = z
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
      description: 'Maximum number of items to return',
      in: 'query',
      name: 'limit',
      required: false,
      schema: { format: 'integer-positive', pattern: '^[0-9]+$', type: 'integer' },
    },
  })

const OffsetParamsSchema = z
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
      description: 'Number of results to skip for pagination',
      in: 'query',
      name: 'offset',
      required: false,
      schema: { format: 'integer-positive', pattern: '^[0-9]+$', type: 'integer' },
    },
  })

export const postV1CertificatesRoute = createRoute({
  method: 'post',
  path: '/v1/certificates',
  tags: ['v1'],
  summary: 'Create a pending order for certificate',
  description:
    "<p>Creating a certificate order can be a long running asynchronous operation in the PKI workflow. The PKI API supports 2 options for getting the completion stateful actions for this asynchronous operations: 1) by polling operations -- see /v1/certificates/{certificateId}/actions 2) via WebHook style callback -- see '/v1/certificates/{certificateId}/callback'.</p>",
  operationId: 'certificate_create',
  request: {
    headers: z.object({
      'X-Market-Id': z
        .string()
        .default('Default locale for shopper account')
        .exactOptional()
        .openapi({
          param: {
            description: 'Setting locale for communications such as emails and error messages',
            in: 'header',
            name: 'X-Market-Id',
            required: false,
            schema: { default: 'Default locale for shopper account', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The certificate order information',
      content: { 'application/json': { schema: CertificateCreateSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Request was successful',
      content: { 'application/json': { schema: CertificateIdentifierSchema } },
    },
    400: {
      description: 'Request was malformed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'Certificate state does not allow renew',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: '`email` is not empty<br>`csr` is invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV1CertificatesValidateRoute = createRoute({
  method: 'post',
  path: '/v1/certificates/validate',
  tags: ['v1'],
  summary: 'Validate a pending order for certificate',
  operationId: 'certificate_validate',
  request: {
    headers: z.object({
      'X-Market-Id': z
        .string()
        .default('Default locale for shopper account')
        .exactOptional()
        .openapi({
          param: {
            description: 'Setting locale for communications such as emails and error messages',
            in: 'header',
            name: 'X-Market-Id',
            required: false,
            schema: { default: 'Default locale for shopper account', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The certificate order info',
      content: { 'application/json': { schema: CertificateCreateSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Request validated successfully' },
    400: {
      description: 'Request was malformed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'Certificate state does not allow renew',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: '`email` is not empty <br> `csr` is invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1CertificatesCertificateIdRoute = createRoute({
  method: 'get',
  path: '/v1/certificates/{certificateId}',
  tags: ['v1'],
  summary: 'Retrieve certificate details',
  description:
    'Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificate.',
  operationId: 'certificate_get',
  request: {
    params: z.object({
      certificateId: z
        .string()
        .openapi({
          param: {
            description: 'Certificate id to lookup',
            in: 'path',
            name: 'certificateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Certificate details retrieved',
      content: { 'application/json': { schema: CertificateSchema } },
    },
    400: {
      description: 'Request was malformed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Certificate id not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1CertificatesCertificateIdActionsRoute = createRoute({
  method: 'get',
  path: '/v1/certificates/{certificateId}/actions',
  tags: ['v1'],
  summary: 'Retrieve all certificate actions',
  description:
    'This method is used to retrieve all stateful actions relating to a certificate lifecycle.',
  operationId: 'certificate_action_retrieve',
  request: {
    params: z.object({
      certificateId: z
        .string()
        .openapi({
          param: {
            description: 'Certificate id to register for callback',
            in: 'path',
            name: 'certificateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Action retrieval successful',
      content: { 'application/json': { schema: ArrayOfCertificateActionSchema } },
    },
    400: {
      description: 'Request was malformed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Certificate not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1CertificatesCertificateIdCallbackRoute = createRoute({
  method: 'get',
  path: '/v1/certificates/{certificateId}/callback',
  tags: ['v1'],
  summary: 'Retrieve system stateful action callback url',
  description: 'This method is used to retrieve the registered callback url for a certificate.',
  operationId: 'certificate_callback_get',
  request: {
    params: z.object({
      certificateId: z
        .string()
        .openapi({
          param: {
            description: 'Certificate id to register for stateful action callback',
            in: 'path',
            name: 'certificateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Callback registered',
      content: { 'application/json': { schema: CertificateCallbackSchema } },
    },
    400: {
      description: 'Request was malformed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Certificate id not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putV1CertificatesCertificateIdCallbackRoute = createRoute({
  method: 'put',
  path: '/v1/certificates/{certificateId}/callback',
  tags: ['v1'],
  summary: 'Register of certificate action callback',
  description:
    'This method is used to register/replace url for callbacks for stateful actions relating to a certificate lifecycle. The callback url is a Webhook style pattern and will receive POST http requests with json body defined in the CertificateAction model definition for each certificate action.  Only one callback URL is allowed to be registered for each certificateId, so it will replace a previous registration.',
  operationId: 'certificate_callback_replace',
  request: {
    params: z.object({
      certificateId: z
        .string()
        .openapi({
          param: {
            description: 'Certificate id to register/replace for callback',
            in: 'path',
            name: 'certificateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      callbackUrl: z
        .string()
        .openapi({
          param: {
            description: 'Callback url registered/replaced to receive stateful actions',
            in: 'query',
            name: 'callbackUrl',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Callback replaced/registered' },
    400: {
      description: 'Request was malformed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Certificate id not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'Callback url is missing <br> Callback url is malformed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteV1CertificatesCertificateIdCallbackRoute = createRoute({
  method: 'delete',
  path: '/v1/certificates/{certificateId}/callback',
  tags: ['v1'],
  summary: 'Unregister system callback',
  description: 'Unregister the callback for a particular certificate.',
  operationId: 'certificate_callback_delete',
  request: {
    params: z.object({
      certificateId: z
        .string()
        .openapi({
          param: {
            description: 'Certificate id to unregister callback',
            in: 'path',
            name: 'certificateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Callback removed' },
    400: {
      description: 'Request was malformed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Certificate id not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV1CertificatesCertificateIdCancelRoute = createRoute({
  method: 'post',
  path: '/v1/certificates/{certificateId}/cancel',
  tags: ['v1'],
  summary: 'Cancel a pending certificate',
  description: 'Use the cancel call to cancel a pending certificate order.',
  operationId: 'certificate_cancel',
  request: {
    params: z.object({
      certificateId: z
        .string()
        .openapi({
          param: {
            description: 'Certificate id to cancel',
            in: 'path',
            name: 'certificateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Certificate order has been canceled' },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Certificate id not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'Certificate state does not allow cancel',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1CertificatesCertificateIdDownloadRoute = createRoute({
  method: 'get',
  path: '/v1/certificates/{certificateId}/download',
  tags: ['v1'],
  summary: 'Download certificate',
  operationId: 'certificate_download',
  request: {
    params: z.object({
      certificateId: z
        .string()
        .openapi({
          param: {
            description: 'Certificate id to download',
            in: 'path',
            name: 'certificateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Certificate retrieved',
      content: { 'application/json': { schema: CertificateBundleSchema } },
    },
    400: {
      description: 'Request was malformed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Certificate id not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'Certificate state does not allow download',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1CertificatesCertificateIdEmailHistoryRoute = createRoute({
  method: 'get',
  path: '/v1/certificates/{certificateId}/email/history',
  tags: ['v1'],
  summary: 'Retrieve email history',
  description: 'This method can be used to retrieve all emails sent for a certificate.',
  operationId: 'certificate_email_history',
  request: {
    params: z.object({
      certificateId: z
        .string()
        .openapi({
          param: {
            description: 'Certificate id to retrieve email history',
            in: 'path',
            name: 'certificateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Email history retrieval successful',
      content: { 'application/json': { schema: CertificateEmailHistorySchema } },
    },
    409: {
      description: 'Email history not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV1CertificatesCertificateIdEmailResendEmailAddressRoute = createRoute({
  method: 'post',
  path: '/v1/certificates/{certificateId}/email/resend/{emailAddress}',
  tags: ['v1'],
  summary: 'Add alternate email address',
  description:
    'This method adds an alternate email address to a certificate order and re-sends all existing request emails to that address.',
  operationId: 'certificate_alternate_email_address',
  request: {
    params: z.object({
      certificateId: z
        .string()
        .openapi({
          param: {
            description: 'Certificate id to resend emails',
            in: 'path',
            name: 'certificateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      emailAddress: z
        .string()
        .openapi({
          param: {
            description: 'Specific email address to resend email',
            in: 'path',
            name: 'emailAddress',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Alternate email address added and emails re-sent',
      content: { 'application/json': { schema: CertificateEmailHistorySchema } },
    },
    404: {
      description: 'Certificate not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'Certificate state does not allow alternate email address',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV1CertificatesCertificateIdEmailEmailIdResendRoute = createRoute({
  method: 'post',
  path: '/v1/certificates/{certificateId}/email/{emailId}/resend',
  tags: ['v1'],
  summary: 'Resend an email',
  description:
    'This method can be used to resend emails by providing the certificate id and the email id',
  operationId: 'certificate_resend_email',
  request: {
    params: z.object({
      certificateId: z
        .string()
        .openapi({
          param: {
            description: 'Certificate id to resend email',
            in: 'path',
            name: 'certificateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      emailId: z
        .string()
        .openapi({
          param: {
            description: 'Email id for email to resend',
            in: 'path',
            name: 'emailId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Email sent successfully' },
    404: {
      description: 'Certificate not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'Email Id not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV1CertificatesCertificateIdEmailEmailIdResendEmailAddressRoute = createRoute({
  method: 'post',
  path: '/v1/certificates/{certificateId}/email/{emailId}/resend/{emailAddress}',
  tags: ['v1'],
  summary: 'Resend email to email address',
  description:
    'This method can be used to resend emails by providing the certificate id, the email id, and the recipient email address',
  operationId: 'certificate_resend_email_address',
  request: {
    params: z.object({
      certificateId: z
        .string()
        .openapi({
          param: {
            description: 'Certificate id to resend emails',
            in: 'path',
            name: 'certificateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      emailId: z
        .string()
        .openapi({
          param: {
            description: 'Email id for email to resend',
            in: 'path',
            name: 'emailId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      emailAddress: z
        .string()
        .openapi({
          param: {
            description: 'Specific email address to resend email',
            in: 'path',
            name: 'emailAddress',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Email sent successfully' },
    404: {
      description: 'Certificate not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'Email Id not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV1CertificatesCertificateIdReissueRoute = createRoute({
  method: 'post',
  path: '/v1/certificates/{certificateId}/reissue',
  tags: ['v1'],
  summary: 'Reissue active certificate',
  description:
    '<p>Rekeying is the process by which the private and public key is changed for a certificate. It is a simplified reissue,where only the CSR is changed. Reissuing is the process by which domain names are added or removed from a certificate.Once a request is validated and approved, the certificate will be reissued with the new common name and sans specified. Unlimited reissues are available during the lifetime of the certificate.New names added to a certificate that do not share the base domain of the common name may take additional time to validate. If this API call is made before a previous pending reissue has been validated and issued, the previous reissue request is automatically rejected and replaced with the current request.</p>',
  operationId: 'certificate_reissue',
  request: {
    params: z.object({
      certificateId: z
        .string()
        .openapi({
          param: {
            description: 'Certificate id to reissue',
            in: 'path',
            name: 'certificateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The reissue request info',
      content: { 'application/json': { schema: CertificateReissueSchema } },
      required: true,
    },
  },
  responses: {
    202: { description: 'Reissue request created' },
    400: {
      description: 'Request was malformed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Certificate id not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'Certificate state does not allow reissue',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: '`csr` is invalid<br>Delay revocation exceeds maximum',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV1CertificatesCertificateIdRenewRoute = createRoute({
  method: 'post',
  path: '/v1/certificates/{certificateId}/renew',
  tags: ['v1'],
  summary: 'Renew active certificate',
  description:
    'Renewal is the process by which the validity of a certificate is extended. Renewal is only available 60 days prior to expiration of the previous certificate and 30 days after the expiration of the previous certificate. The renewal supports modifying a set of the original certificate order information. Once a request is validated and approved, the certificate will be issued with extended validity. Since subject alternative names can be removed during a renewal, we require that you provide the subject alternative names you expect in the renewed certificate. New names added to a certificate that do not share the base domain of the common name may take additional time to validate. </p>',
  operationId: 'certificate_renew',
  request: {
    params: z.object({
      certificateId: z
        .string()
        .openapi({
          param: {
            description: 'Certificate id to renew',
            in: 'path',
            name: 'certificateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The renew request info',
      content: { 'application/json': { schema: CertificateRenewSchema } },
      required: true,
    },
  },
  responses: {
    202: { description: 'Renew request created' },
    400: {
      description: 'Request was malformed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Certificate id not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'Certificate state does not allow renew',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: '`csr` is invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV1CertificatesCertificateIdRevokeRoute = createRoute({
  method: 'post',
  path: '/v1/certificates/{certificateId}/revoke',
  tags: ['v1'],
  summary: 'Revoke active certificate',
  description:
    'Use revoke call to revoke an active certificate, if the certificate has not been issued a 404 response will be returned.',
  operationId: 'certificate_revoke',
  request: {
    params: z.object({
      certificateId: z
        .string()
        .openapi({
          param: {
            description: 'Certificate id to revoke',
            in: 'path',
            name: 'certificateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The certificate revocation request',
      content: { 'application/json': { schema: CertificateRevokeSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Certificate Revoked' },
    400: {
      description: 'Request was malformed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Certificate id not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'Certificate state does not allow revoke',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1CertificatesCertificateIdSiteSealRoute = createRoute({
  method: 'get',
  path: '/v1/certificates/{certificateId}/siteSeal',
  tags: ['v1'],
  summary: 'Get Site seal',
  description:
    "<p>This method is used to obtain the site seal information for an issued certificate. A site seal is a graphic that the certificate purchaser can embed on their web site to show their visitors information about their SSL certificate. If a web site visitor clicks on the site seal image, a pop-up page is displayed that contains detailed information about the SSL certificate. The site seal token is used to link the site seal graphic image to the appropriate certificate details pop-up page display when a user clicks on the site seal. The site seal images are expected to be static images and hosted on the reseller's website, to minimize delays for customer page load times.</p>",
  operationId: 'certificate_siteseal_get',
  request: {
    params: z.object({
      certificateId: z
        .string()
        .openapi({
          param: {
            description: 'Certificate id',
            in: 'path',
            name: 'certificateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      theme: z
        .enum(['DARK', 'LIGHT'])
        .default('LIGHT')
        .exactOptional()
        .openapi({
          param: {
            description:
              "This value represents the visual theme of the seal. If seal doesn't exist, default values are used if params not present. If seal does exist, default values will not be used to update unless params present.",
            in: 'query',
            name: 'theme',
            required: false,
            schema: { default: 'LIGHT', enum: ['DARK', 'LIGHT'], type: 'string' },
          },
        }),
      locale: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Determine locale for text displayed in seal image and verification page. If seal doesn't exist, default values are used if params not present. If seal does exist, default values will not be used to update unless params present.",
            in: 'query',
            name: 'locale',
            required: false,
            schema: { default: 'en', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Site seal retrieved',
      content: { 'application/json': { schema: CertificateSiteSealSchema } },
    },
    400: {
      description: 'Request was malformed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Certificate id not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'Certificate state does not allow seal',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: "'locale' is invalid",
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV1CertificatesCertificateIdVerifyDomainControlRoute = createRoute({
  method: 'post',
  path: '/v1/certificates/{certificateId}/verifyDomainControl',
  tags: ['v1'],
  summary: 'Check Domain Control',
  description:
    'Domain control is a means for verifying the domain included in the certificate order. This resource is useful for resellers that control the domains for their customers, and can expedite the verification process. See https://www.godaddy.com/help/verifying-your-domain-ownership-for-ssl-certificate-requests-html-or-dns-7452',
  operationId: 'certificate_verifydomaincontrol',
  request: {
    params: z.object({
      certificateId: z
        .string()
        .openapi({
          param: {
            description: 'Certificate id to lookup',
            in: 'path',
            name: 'certificateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Domain control was successful' },
    400: {
      description: 'Request was malformed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Certificate id not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description:
        'Domain control was not successful <br> Certificate state does not allow domain control',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2CertificatesRoute = createRoute({
  method: 'get',
  path: '/v2/certificates',
  tags: ['v1'],
  summary: 'Search for certificate details by entitlement',
  description:
    'Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificates associated to an entitlement.',
  operationId: 'certificate_get_entitlement',
  request: {
    query: z.object({
      entitlementId: z
        .string()
        .openapi({
          param: {
            description: 'Entitlement id to lookup',
            in: 'query',
            name: 'entitlementId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      latest: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Fetch only the most recent certificate',
            in: 'query',
            name: 'latest',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Certificate details retrieved',
      content: { 'application/json': { schema: z.array(CertificateSchema) } },
    },
    400: {
      description: 'Request was malformed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'Entitlement id not provided',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2CertificatesDownloadRoute = createRoute({
  method: 'get',
  path: '/v2/certificates/download',
  tags: ['v1'],
  summary: 'Download certificate by entitlement',
  operationId: 'certificate_download_entitlement',
  request: {
    query: z.object({
      entitlementId: z
        .string()
        .openapi({
          param: {
            description: 'Entitlement id to download',
            in: 'query',
            name: 'entitlementId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Certificate retrieved',
      content: { 'application/json': { schema: CertificateBundleSchema } },
    },
    400: {
      description: 'Request was malformed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Entitlement id not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'Certificate state does not allow download',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'Entitlement id not provided',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2CustomersCustomerIdCertificatesRoute = createRoute({
  method: 'get',
  path: '/v2/customers/{customerId}/certificates',
  tags: ['v2'],
  summary: "Retrieve customer's certificates",
  description:
    'This method can be used to retrieve a list of certificates for a specified customer. <ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>',
  operationId: 'getCustomerCertificatesByCustomerId',
  request: {
    params: z.object({ customerId: CustomerIdParamsSchema }),
    query: z.object({ offset: OffsetParamsSchema, limit: LimitParamsSchema }),
  },
  responses: {
    200: {
      description: 'Customer certificate information retrieved.',
      content: { 'application/json': { schema: CertificateSummariesV2Schema } },
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    500: _500Response,
  },
})

export const getV2CustomersCustomerIdCertificatesAcmeExternalAccountBindingRoute = createRoute({
  method: 'get',
  path: '/v2/customers/{customerId}/certificates/acme/externalAccountBinding',
  tags: ['v2'],
  summary: 'Retrieves the external account binding for the specified customer',
  description:
    'Use this endpoint to retrieve a key identifier and Hash-based Message Authentication Code (HMAC) key for Automated Certificate Management Environment (ACME) External Account Binding (EAB). These credentials can be used with an ACME client that supports EAB (ex. CertBot) to automate the issuance request and deployment of DV SSL certificates',
  operationId: 'getAcmeExternalAccountBinding',
  request: { params: z.object({ customerId: CustomerIdParamsSchema }) },
  responses: {
    200: {
      description:
        'Acme key identifier and HMAC key for the external account binding. Directory URI is also provided for making ACME requests.',
      content: { 'application/json': { schema: ExternalAccountBindingSchema } },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    429: _429Response,
    500: _500Response,
  },
})

export const getV2CustomersCustomerIdCertificatesCertificateIdRoute = createRoute({
  method: 'get',
  path: '/v2/customers/{customerId}/certificates/{certificateId}',
  tags: ['v2'],
  summary: 'Retrieve individual certificate details',
  description:
    'Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificate. <ul><li>**shopperId** is **not the same** as **customerId**. **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>',
  operationId: 'getCertificateDetailByCertIdentifier',
  request: {
    params: z.object({
      customerId: CustomerIdParamsSchema,
      certificateId: CertificateIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Certificate details retrieved',
      content: { 'application/json': { schema: CertificateDetailV2Schema } },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    429: _429Response,
    500: _500Response,
  },
})

export const getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsRoute =
  createRoute({
    method: 'get',
    path: '/v2/customers/{customerId}/certificates/{certificateId}/domainVerifications',
    tags: ['v2'],
    summary: 'Retrieve domain verification status',
    description:
      'This method can be used to retrieve the domain verification status for a certificate request.<ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>"',
    operationId: 'getDomainInformationByCertificateId',
    request: {
      params: z.object({
        customerId: CustomerIdParamsSchema,
        certificateId: CertificateIdParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'Domain verification status list for specified certificateId.',
        content: { 'application/json': { schema: z.array(DomainVerificationSummarySchema) } },
      },
      401: _401Response,
      403: _403Response,
      404: _404Response,
      422: _422Response,
      429: _429Response,
      500: _500Response,
    },
  })

export const getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomainRoute =
  createRoute({
    method: 'get',
    path: '/v2/customers/{customerId}/certificates/{certificateId}/domainVerifications/{domain}',
    tags: ['v2'],
    summary: 'Retrieve detailed information for supplied domain',
    description:
      'Retrieve detailed information for supplied domain, including domain verification details and Certificate Authority Authorization (CAA) verification details. <ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>',
    operationId: 'getDomainDetailsByDomain',
    request: {
      params: z.object({
        customerId: CustomerIdParamsSchema,
        certificateId: CertificateIdParamsSchema,
        domain: DomainParamsSchema,
      }),
    },
    responses: {
      200: {
        description:
          'Retrieve detailed information for supplied domain, including domain verification details and Certificate Authority Authorization (CAA) verification details.',
        content: { 'application/json': { schema: DomainVerificationDetailSchema } },
      },
      401: _401Response,
      403: _403Response,
      404: _404Response,
      422: _422Response,
      429: _429Response,
      500: _500Response,
    },
  })
