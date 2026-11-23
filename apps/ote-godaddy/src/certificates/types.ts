type CertificateContact = {
  email: string
  jobTitle?: string | undefined
  nameFirst: string
  nameLast: string
  nameMiddle?: string | undefined
  phone: string
  suffix?: string | undefined
}
type CertificateAddress = {
  address1: string
  address2?: string | undefined
  city?: string | undefined
  country:
    | 'AC'
    | 'AD'
    | 'AE'
    | 'AF'
    | 'AG'
    | 'AI'
    | 'AL'
    | 'AM'
    | 'AN'
    | 'AO'
    | 'AQ'
    | 'AR'
    | 'AS'
    | 'AT'
    | 'AU'
    | 'AW'
    | 'AZ'
    | 'BA'
    | 'BB'
    | 'BD'
    | 'BE'
    | 'BF'
    | 'BG'
    | 'BH'
    | 'BI'
    | 'BJ'
    | 'BM'
    | 'BN'
    | 'BO'
    | 'BR'
    | 'BS'
    | 'BT'
    | 'BV'
    | 'BW'
    | 'BY'
    | 'BZ'
    | 'CA'
    | 'CC'
    | 'CD'
    | 'CF'
    | 'CG'
    | 'CH'
    | 'CI'
    | 'CK'
    | 'CL'
    | 'CM'
    | 'CN'
    | 'CO'
    | 'CR'
    | 'CV'
    | 'CX'
    | 'CY'
    | 'CZ'
    | 'DE'
    | 'DJ'
    | 'DK'
    | 'DM'
    | 'DO'
    | 'DZ'
    | 'EC'
    | 'EE'
    | 'EG'
    | 'EH'
    | 'ER'
    | 'ES'
    | 'ET'
    | 'FI'
    | 'FJ'
    | 'FK'
    | 'FM'
    | 'FO'
    | 'FR'
    | 'GA'
    | 'GB'
    | 'GD'
    | 'GE'
    | 'GF'
    | 'GG'
    | 'GH'
    | 'GI'
    | 'GL'
    | 'GM'
    | 'GN'
    | 'GP'
    | 'GQ'
    | 'GR'
    | 'GS'
    | 'GT'
    | 'GU'
    | 'GW'
    | 'GY'
    | 'HK'
    | 'HM'
    | 'HN'
    | 'HR'
    | 'HT'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IM'
    | 'IN'
    | 'IO'
    | 'IQ'
    | 'IS'
    | 'IT'
    | 'JE'
    | 'JM'
    | 'JO'
    | 'JP'
    | 'KE'
    | 'KG'
    | 'KH'
    | 'KI'
    | 'KM'
    | 'KN'
    | 'KR'
    | 'KW'
    | 'KY'
    | 'KZ'
    | 'LA'
    | 'LB'
    | 'LC'
    | 'LI'
    | 'LK'
    | 'LR'
    | 'LS'
    | 'LT'
    | 'LU'
    | 'LV'
    | 'LY'
    | 'MA'
    | 'MC'
    | 'MD'
    | 'ME'
    | 'MG'
    | 'MH'
    | 'ML'
    | 'MM'
    | 'MN'
    | 'MO'
    | 'MP'
    | 'MQ'
    | 'MR'
    | 'MS'
    | 'MT'
    | 'MU'
    | 'MV'
    | 'MW'
    | 'MX'
    | 'MY'
    | 'MZ'
    | 'NA'
    | 'NC'
    | 'NE'
    | 'NF'
    | 'NG'
    | 'NI'
    | 'NL'
    | 'NO'
    | 'NP'
    | 'NR'
    | 'NU'
    | 'NZ'
    | 'OM'
    | 'PA'
    | 'PE'
    | 'PF'
    | 'PG'
    | 'PH'
    | 'PK'
    | 'PL'
    | 'PM'
    | 'PN'
    | 'PR'
    | 'PS'
    | 'PT'
    | 'PW'
    | 'PY'
    | 'QA'
    | 'RE'
    | 'RO'
    | 'RS'
    | 'RU'
    | 'RW'
    | 'SA'
    | 'SB'
    | 'SC'
    | 'SE'
    | 'SG'
    | 'SH'
    | 'SI'
    | 'SJ'
    | 'SK'
    | 'SL'
    | 'SM'
    | 'SN'
    | 'SO'
    | 'SR'
    | 'ST'
    | 'SV'
    | 'SZ'
    | 'TC'
    | 'TD'
    | 'TF'
    | 'TG'
    | 'TH'
    | 'TJ'
    | 'TK'
    | 'TL'
    | 'TM'
    | 'TN'
    | 'TO'
    | 'TP'
    | 'TR'
    | 'TT'
    | 'TV'
    | 'TW'
    | 'TZ'
    | 'UA'
    | 'UG'
    | 'UM'
    | 'US'
    | 'UY'
    | 'UZ'
    | 'VA'
    | 'VC'
    | 'VE'
    | 'VG'
    | 'VI'
    | 'VN'
    | 'VU'
    | 'WF'
    | 'WS'
    | 'YE'
    | 'YT'
    | 'YU'
    | 'ZA'
    | 'ZM'
    | 'ZW'
  postalCode?: string | undefined
  state?: string | undefined
}
type CertificateOrganizationCreate = {
  address?: CertificateAddress | undefined
  assumedName?: string | undefined
  name: string
  phone: string
  registrationAgent?: string | undefined
  registrationNumber?: string | undefined
}
type CertificateCreate = {
  callbackUrl?: string | undefined
  commonName?: string | undefined
  contact: CertificateContact
  csr: string
  intelVPro?: boolean | undefined
  organization?: CertificateOrganizationCreate | undefined
  period: number
  productType:
    | 'DV_SSL'
    | 'DV_WILDCARD_SSL'
    | 'EV_SSL'
    | 'OV_CS'
    | 'OV_DS'
    | 'OV_SSL'
    | 'OV_WILDCARD_SSL'
    | 'UCC_DV_SSL'
    | 'UCC_EV_SSL'
    | 'UCC_OV_SSL'
  rootType?: 'GODADDY_SHA_1' | 'GODADDY_SHA_2' | 'STARFIELD_SHA_1' | 'STARFIELD_SHA_2' | undefined
  slotSize?:
    | 'FIVE'
    | 'TEN'
    | 'FIFTEEN'
    | 'TWENTY'
    | 'THIRTY'
    | 'FOURTY'
    | 'FIFTY'
    | 'ONE_HUNDRED'
    | undefined
  subjectAlternativeNames?: string[] | undefined
}
type CertificateIdentifier = { certificateId: string }
type ErrorField = { code: string; message?: string | undefined; path: string }
type Error = { code: string; fields?: ErrorField[] | undefined; message?: string | undefined }
type JurisdictionOfIncorporation = {
  city?: string | undefined
  country: string
  county?: string | undefined
  state?: string | undefined
}
type CertificateOrganization = {
  address: CertificateAddress
  assumedName?: string | undefined
  jurisdictionOfIncorporation?: JurisdictionOfIncorporation | undefined
  name: string
  phone: string
  registrationAgent?: string | undefined
  registrationNumber?: string | undefined
}
type SubjectAlternativeNameDetails = {
  status: 'PENDING' | 'INVALID' | 'COMPLETED' | 'FRAUD'
  subjectAlternativeName: string
}
type Certificate = {
  certificateId: string
  commonName?: string | undefined
  contact: CertificateContact
  createdAt: string
  deniedReason?: string | undefined
  organization?: CertificateOrganization | undefined
  period: number
  productType:
    | 'DV_SSL'
    | 'DV_WILDCARD_SSL'
    | 'EV_SSL'
    | 'OV_CS'
    | 'OV_DS'
    | 'OV_SSL'
    | 'OV_WILDCARD_SSL'
    | 'UCC_DV_SSL'
    | 'UCC_EV_SSL'
    | 'UCC_OV_SSL'
  progress?: number | undefined
  revokedAt?: string | undefined
  rootType?: 'GODADDY_SHA_1' | 'GODADDY_SHA_2' | 'STARFIELD_SHA_1' | 'STARFIELD_SHA_2' | undefined
  serialNumber?: string | undefined
  serialNumberHex?: string | undefined
  slotSize?:
    | 'FIVE'
    | 'TEN'
    | 'FIFTEEN'
    | 'TWENTY'
    | 'THIRTY'
    | 'FOURTY'
    | 'FIFTY'
    | 'ONE_HUNDRED'
    | undefined
  status:
    | 'PENDING_ISSUANCE'
    | 'ISSUED'
    | 'REVOKED'
    | 'CANCELED'
    | 'DENIED'
    | 'PENDING_REVOCATION'
    | 'PENDING_REKEY'
    | 'UNUSED'
    | 'EXPIRED'
  subjectAlternativeNames?: SubjectAlternativeNameDetails[] | undefined
  validEnd?: string | undefined
  validStart?: string | undefined
}
type CertificateAction = {
  createdAt: string
  type:
    | 'CERTIFICATE_ISSUED'
    | 'CERTIFICATE_ORDER_CANCELED'
    | 'CERTIFICATE_ORDER_CREATED'
    | 'CERTIFICATE_REVOKED'
    | 'DOMAIN_VALIDATION_COMPLETE'
    | 'FRAUD_DETECTED'
    | 'ORG_NAME_CHANGE'
    | 'ORG_VALIDATION_COMPLETE'
    | 'SAN_DROP'
}
type ArrayOfCertificateAction = CertificateAction[]
type CertificateCallback = { callbackUrl: string }
type PEMCertificates = {
  certificate: string
  cross?: string | undefined
  intermediate?: string | undefined
  root?: string | undefined
}
type CertificateBundle = { pems: PEMCertificates; serialNumber: string }
type CertificateEmailHistory = {
  accountId: number
  body: string
  dateEntered: string
  fromType: string
  id: number
  recipients: string
  subject: string
  templateType: string
}
type CertificateReissue = {
  callbackUrl?: string | undefined
  commonName?: string | undefined
  csr?: string | undefined
  delayExistingRevoke?: number | undefined
  forceDomainRevetting?: string[] | undefined
  rootType?: 'GODADDY_SHA_1' | 'GODADDY_SHA_2' | 'STARFIELD_SHA_1' | 'STARFIELD_SHA_2' | undefined
  subjectAlternativeNames?: string[] | undefined
}
type CertificateRenew = {
  callbackUrl?: string | undefined
  commonName?: string | undefined
  csr?: string | undefined
  period?: number | undefined
  rootType?: 'GODADDY_SHA_1' | 'GODADDY_SHA_2' | 'STARFIELD_SHA_1' | 'STARFIELD_SHA_2' | undefined
  subjectAlternativeNames?: string[] | undefined
}
type CertificateRevoke = {
  reason:
    | 'AFFILIATION_CHANGED'
    | 'CESSATION_OF_OPERATION'
    | 'KEY_COMPROMISE'
    | 'PRIVILEGE_WITHDRAWN'
    | 'SUPERSEDED'
}
type CertificateSiteSeal = { html: string }
type CertificateSummaryV2 = {
  certificateId: string
  commonName: string
  completedAt?: string | undefined
  createdAt: string
  period: number
  renewalAvailable?: boolean | undefined
  revokedAt?: string | undefined
  serialNumber?: string | undefined
  slotSize?:
    | 'FIVE'
    | 'TEN'
    | 'FIFTEEN'
    | 'TWENTY'
    | 'THIRTY'
    | 'FOURTY'
    | 'FIFTY'
    | 'ONE_HUNDRED'
    | undefined
  status:
    | 'ISSUED'
    | 'CANCELED'
    | 'DENIED'
    | 'EXPIRED'
    | 'PENDING_ISSUANCE'
    | 'PENDING_REKEY'
    | 'PENDING_REVOCATION'
    | 'REVOKED'
    | 'UNUSED'
  subjectAlternativeNames?: string[] | undefined
  type:
    | 'DV_SSL'
    | 'DV_WILDCARD_SSL'
    | 'EV_SSL'
    | 'OV_CODE_SIGNING'
    | 'OV_DRIVER_SIGNING'
    | 'OV_SSL'
    | 'OV_WILDCARD_SSL'
    | 'UCC_DV_SSL'
    | 'UCC_EV_SSL'
    | 'UCC_OV_SSL'
  validEndAt?: string | undefined
  validStartAt?: string | undefined
}
type Pagination = {
  first?: string | undefined
  last?: string | undefined
  next?: string | undefined
  previous?: string | undefined
  total?: number | undefined
}
type CertificateSummariesV2 = { certificates: CertificateSummaryV2[]; pagination: Pagination }
type ErrorLimit = {
  retryAfterSec: number
  code: string
  fields?: ErrorField[] | undefined
  message?: string | undefined
}
type ExternalAccountBinding = { directoryUrl: string; hmacKey: string; keyId: string }
type CertificateDetailV2 = {
  certificateId: string
  commonName: string
  completedAt?: string | undefined
  contact: CertificateContact
  createdAt: string
  csr?: string | undefined
  deniedReason?: string | undefined
  organization?: CertificateOrganization | undefined
  period: number
  progress?: number | undefined
  renewalAvailable?: boolean | undefined
  revokedAt?: string | undefined
  rootType?: 'GODADDY_SHA_1' | 'GODADDY_SHA_2' | 'STARFIELD_SHA_1' | 'STARFIELD_SHA_2' | undefined
  serialNumber?: string | undefined
  serialNumberHex?: string | undefined
  slotSize?:
    | 'FIVE'
    | 'TEN'
    | 'FIFTEEN'
    | 'TWENTY'
    | 'THIRTY'
    | 'FOURTY'
    | 'FIFTY'
    | 'ONE_HUNDRED'
    | undefined
  status:
    | 'PENDING_ISSUANCE'
    | 'ISSUED'
    | 'REVOKED'
    | 'CANCELED'
    | 'DENIED'
    | 'PENDING_REVOCATION'
    | 'PENDING_REKEY'
    | 'UNUSED'
    | 'EXPIRED'
  subjectAlternativeNames?: string[] | undefined
  type:
    | 'DV_SSL'
    | 'DV_WILDCARD_SSL'
    | 'EV_SSL'
    | 'OV_CODE_SIGNING'
    | 'OV_DRIVER_SIGNING'
    | 'OV_SSL'
    | 'OV_WILDCARD_SSL'
    | 'UCC_DV_SSL'
    | 'UCC_EV_SSL'
    | 'UCC_OV_SSL'
  validEndAt?: string | undefined
  validStartAt?: string | undefined
}
type DomainVerificationSummary = {
  createdAt: string
  dceToken?: string | undefined
  domain: string
  domainEntityId: number
  modifiedAt: string
  status:
    | 'COMPLETED'
    | 'FAILED_VERIFICATION'
    | 'VERIFIED_POSSIBLE_FRAUD'
    | 'DROPPED'
    | 'DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION'
    | 'DROPPED_GOOGLE_SAFE_BROWSING'
    | 'INVALID'
    | 'AWAITING'
    | 'PENDING_POSSIBLE_FRAUD'
    | 'REVOKED_CERTIFICATE'
  type:
    | 'DOMAIN_CONTROL_EMAIL'
    | 'AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN'
    | 'AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR'
    | 'AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER'
    | 'AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER'
    | 'AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER'
    | 'DOMAIN_ACCESS_EMAIL'
    | 'DOMAIN_ACCESS_LETTER'
    | 'DOMAIN_ZONE_CONTROL'
    | 'MANUAL_DOMAIN_ACCESS_EMAIL'
    | 'PREVIOUS_DOMAIN_ACCESS_EMAIL'
    | 'REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER'
    | 'REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL'
    | 'REGISTRATION_AUTHORITY_OVERRIDE'
    | 'REGISTRATION_AUTHORITY_WEBSITE_CONTROL'
    | 'CUSTOMER_OWNED'
    | 'WEBSITE_CONTROL'
  usage: 'COMMON_NAME' | 'SUBJECT_ALTERNATIVE_NAME'
}
type DomainVerificationDetail = {
  createdAt: string
  dceToken?: string | undefined
  domain: string
  domainEntityId: number
  modifiedAt: string
  status:
    | 'COMPLETED'
    | 'FAILED_VERIFICATION'
    | 'VERIFIED_POSSIBLE_FRAUD'
    | 'DROPPED'
    | 'DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION'
    | 'DROPPED_GOOGLE_SAFE_BROWSING'
    | 'INVALID'
    | 'AWAITING'
    | 'PENDING_POSSIBLE_FRAUD'
    | 'REVOKED_CERTIFICATE'
  type:
    | 'DOMAIN_CONTROL_EMAIL'
    | 'AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN'
    | 'AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR'
    | 'AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER'
    | 'AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER'
    | 'AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER'
    | 'DOMAIN_ACCESS_EMAIL'
    | 'DOMAIN_ACCESS_LETTER'
    | 'DOMAIN_ZONE_CONTROL'
    | 'MANUAL_DOMAIN_ACCESS_EMAIL'
    | 'PREVIOUS_DOMAIN_ACCESS_EMAIL'
    | 'REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER'
    | 'REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL'
    | 'REGISTRATION_AUTHORITY_OVERRIDE'
    | 'REGISTRATION_AUTHORITY_WEBSITE_CONTROL'
    | 'CUSTOMER_OWNED'
    | 'WEBSITE_CONTROL'
  usage: 'COMMON_NAME' | 'SUBJECT_ALTERNATIVE_NAME'
  certificateAuthorityAuthorization?:
    | {
        completedAt?: string | undefined
        queryPaths?: string[] | undefined
        recommendations?:
          | (
              | 'ADD_CA_TO_CAA'
              | 'CREATE_TARGET_DOMAIN_CAA'
              | 'DISABLE_DNSSEC'
              | 'FIX_CRITICAL_TAG'
              | 'VALIDATE_SOA'
            )[]
          | undefined
        status?:
          | 'PENDING'
          | 'REMOVED_DNS_ERROR'
          | 'REMOVED_DNSSEC_ENABLED'
          | 'REMOVED_NOT_FOUND_CA'
          | 'REMOVED_UNKNOWN_CRITICAL_TAG'
          | 'SUCCESS_CAA'
          | 'SUCCESS_DNSSEC'
          | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/certificates': {
      $post:
        | {
            input: { header: { 'X-Market-Id'?: string | undefined } } & { json: CertificateCreate }
            output: CertificateIdentifier
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { header: { 'X-Market-Id'?: string | undefined } } & { json: CertificateCreate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Market-Id'?: string | undefined } } & { json: CertificateCreate }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Market-Id'?: string | undefined } } & { json: CertificateCreate }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Market-Id'?: string | undefined } } & { json: CertificateCreate }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Market-Id'?: string | undefined } } & { json: CertificateCreate }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Market-Id'?: string | undefined } } & { json: CertificateCreate }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/certificates/validate': {
      $post:
        | {
            input: { header: { 'X-Market-Id'?: string | undefined } } & { json: CertificateCreate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'X-Market-Id'?: string | undefined } } & { json: CertificateCreate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Market-Id'?: string | undefined } } & { json: CertificateCreate }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Market-Id'?: string | undefined } } & { json: CertificateCreate }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Market-Id'?: string | undefined } } & { json: CertificateCreate }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Market-Id'?: string | undefined } } & { json: CertificateCreate }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Market-Id'?: string | undefined } } & { json: CertificateCreate }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/certificates/:certificateId': {
      $get:
        | {
            input: { param: { certificateId: string } }
            output: Certificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/certificates/:certificateId/actions': {
      $get:
        | {
            input: { param: { certificateId: string } }
            output: ArrayOfCertificateAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/certificates/:certificateId/callback': {
      $delete:
        | {
            input: { param: { certificateId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { certificateId: string } }
            output: CertificateCallback
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { certificateId: string } } & { query: { callbackUrl: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { certificateId: string } } & { query: { callbackUrl: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificateId: string } } & { query: { callbackUrl: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { certificateId: string } } & { query: { callbackUrl: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { certificateId: string } } & { query: { callbackUrl: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificateId: string } } & { query: { callbackUrl: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { certificateId: string } } & { query: { callbackUrl: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/certificates/:certificateId/cancel': {
      $post:
        | {
            input: { param: { certificateId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/certificates/:certificateId/download': {
      $get:
        | {
            input: { param: { certificateId: string } }
            output: CertificateBundle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/certificates/:certificateId/email/history': {
      $get:
        | {
            input: { param: { certificateId: string } }
            output: CertificateEmailHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/certificates/:certificateId/email/resend/:emailAddress': {
      $post:
        | {
            input: { param: { certificateId: string; emailAddress: string } }
            output: CertificateEmailHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certificateId: string; emailAddress: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificateId: string; emailAddress: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { certificateId: string; emailAddress: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/certificates/:certificateId/email/:emailId/resend': {
      $post:
        | {
            input: { param: { certificateId: string; emailId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { certificateId: string; emailId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificateId: string; emailId: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { certificateId: string; emailId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/certificates/:certificateId/email/:emailId/resend/:emailAddress': {
      $post:
        | {
            input: { param: { certificateId: string; emailId: string; emailAddress: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { certificateId: string; emailId: string; emailAddress: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificateId: string; emailId: string; emailAddress: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { certificateId: string; emailId: string; emailAddress: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/certificates/:certificateId/reissue': {
      $post:
        | {
            input: { param: { certificateId: string } } & { json: CertificateReissue }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateReissue }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateReissue }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateReissue }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateReissue }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateReissue }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateReissue }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateReissue }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/certificates/:certificateId/renew': {
      $post:
        | {
            input: { param: { certificateId: string } } & { json: CertificateRenew }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateRenew }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateRenew }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateRenew }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateRenew }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateRenew }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateRenew }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateRenew }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/certificates/:certificateId/revoke': {
      $post:
        | {
            input: { param: { certificateId: string } } & { json: CertificateRevoke }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateRevoke }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateRevoke }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateRevoke }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateRevoke }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateRevoke }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { certificateId: string } } & { json: CertificateRevoke }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/certificates/:certificateId/siteSeal': {
      $get:
        | {
            input: { param: { certificateId: string } } & {
              query: { theme?: 'DARK' | 'LIGHT' | undefined; locale?: string | undefined }
            }
            output: CertificateSiteSeal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certificateId: string } } & {
              query: { theme?: 'DARK' | 'LIGHT' | undefined; locale?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificateId: string } } & {
              query: { theme?: 'DARK' | 'LIGHT' | undefined; locale?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { certificateId: string } } & {
              query: { theme?: 'DARK' | 'LIGHT' | undefined; locale?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { certificateId: string } } & {
              query: { theme?: 'DARK' | 'LIGHT' | undefined; locale?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificateId: string } } & {
              query: { theme?: 'DARK' | 'LIGHT' | undefined; locale?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { certificateId: string } } & {
              query: { theme?: 'DARK' | 'LIGHT' | undefined; locale?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { certificateId: string } } & {
              query: { theme?: 'DARK' | 'LIGHT' | undefined; locale?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/certificates/:certificateId/verifyDomainControl': {
      $post:
        | {
            input: { param: { certificateId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { certificateId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/certificates': {
      $get:
        | {
            input: { query: { entitlementId: string; latest?: boolean | undefined } }
            output: Certificate[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { entitlementId: string; latest?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { entitlementId: string; latest?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { entitlementId: string; latest?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { entitlementId: string; latest?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { entitlementId: string; latest?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/certificates/download': {
      $get:
        | {
            input: { query: { entitlementId: string } }
            output: CertificateBundle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { entitlementId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { entitlementId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { entitlementId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { entitlementId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { entitlementId: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { entitlementId: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { entitlementId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/customers/:customerId/certificates': {
      $get:
        | {
            input: { param: { customerId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: CertificateSummariesV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { customerId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { customerId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { customerId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { customerId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v2/customers/:customerId/certificates/acme/externalAccountBinding': {
      $get:
        | {
            input: { param: { customerId: string } }
            output: ExternalAccountBinding
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { customerId: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { customerId: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { customerId: string } }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { customerId: string } }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { customerId: string } }
            output: Error
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v2/customers/:customerId/certificates/:certificateId': {
      $get:
        | {
            input: { param: { customerId: string; certificateId: string } }
            output: CertificateDetailV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: string; certificateId: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { customerId: string; certificateId: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { customerId: string; certificateId: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { customerId: string; certificateId: string } }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { customerId: string; certificateId: string } }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { customerId: string; certificateId: string } }
            output: Error
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v2/customers/:customerId/certificates/:certificateId/domainVerifications': {
      $get:
        | {
            input: { param: { customerId: string; certificateId: string } }
            output: DomainVerificationSummary[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: string; certificateId: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { customerId: string; certificateId: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { customerId: string; certificateId: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { customerId: string; certificateId: string } }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { customerId: string; certificateId: string } }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { customerId: string; certificateId: string } }
            output: Error
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v2/customers/:customerId/certificates/:certificateId/domainVerifications/:domain': {
      $get:
        | {
            input: { param: { customerId: string; certificateId: string; domain: string } }
            output: DomainVerificationDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: string; certificateId: string; domain: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { customerId: string; certificateId: string; domain: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { customerId: string; certificateId: string; domain: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { customerId: string; certificateId: string; domain: string } }
            output: Error
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { customerId: string; certificateId: string; domain: string } }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { customerId: string; certificateId: string; domain: string } }
            output: Error
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes
