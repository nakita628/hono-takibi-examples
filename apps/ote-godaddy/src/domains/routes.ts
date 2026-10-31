import { createRoute, z } from '@hono/zod-openapi'

const ConsentDomainUpdateSchema = z
  .object({
    agreedAt: z
      .string()
      .openapi({
        description: 'Timestamp indicating when the end-user consented to these agreements',
      }),
    agreedBy: z
      .string()
      .openapi({
        description:
          "Originating client IP address of the end-user's computer when they consented to the agreements",
      }),
    agreementKeys: z
      .array(z.literal('EXPOSE_WHOIS'))
      .openapi({
        description:
          "Unique identifiers of the agreements to which the end-user has agreed, as required by the elements being updated<br/><ul><li><strong style='margin-left: 12px;'>EXPOSE_WHOIS</strong> - Required when the exposeWhois field is updated to true</li></ul>",
      }),
  })
  .openapi({ required: ['agreementKeys', 'agreedBy', 'agreedAt'] })
  .openapi('ConsentDomainUpdate')

type DomainUpdateType = {
  consent?: z.infer<typeof ConsentDomainUpdateSchema>
  exposeWhois?: boolean
  locked?: boolean
  nameServers?: { [key: string]: unknown }[]
  renewAuto?: boolean
  subaccountId?: string
}

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
      .openapi({
        description:
          'Human-readable, English description of the problem with the contents of the field',
      }),
    path: z
      .string()
      .openapi({
        description:
          "<ul>\n<li style='margin-left: 12px;'>JSONPath referring to a field containing an error</li>\n<strong style='margin-left: 12px;'>OR</strong>\n<li style='margin-left: 12px;'>JSONPath referring to a field that refers to an object containing an error, with more detail in `pathRelated`</li>\n</ul>",
      }),
    pathRelated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'JSONPath referring to a field containing an error, which is referenced by `path`',
      }),
  })
  .openapi({ required: ['path', 'code'] })
  .openapi('ErrorField')

const ActionReasonSchema = z
  .strictObject({
    code: z
      .string()
      .regex(/^[A-Z_][A-Z0-9_]*$/)
      .openapi({
        description:
          'Short identifier, suitable for indicating the reason for the current status and how to handle within client code',
      }),
    fields: z
      .array(ErrorFieldSchema)
      .exactOptional()
      .openapi({
        description: 'List of the specific fields, and the errors found with their contents',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable, English description of the code' }),
  })
  .openapi({ required: ['code'] })
  .openapi('ActionReason')

const ActionSchema = z
  .object({
    completedAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp indicating when the action was completed' }),
    createdAt: z
      .string()
      .openapi({ description: 'Timestamp indicating when the action was created' }),
    modifiedAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp indicating when the action was last modified' }),
    origination: z
      .enum(['USER', 'SYSTEM'])
      .openapi({
        description:
          "The origination of the action<br/><ul><li><strong style='margin-left: 12px;'>USER</strong> - These are user requests.</li><li><strong style='margin-left: 12px;'>SYSTEM</strong> - These are system processing actions.</li></ul>",
      }),
    reason: ActionReasonSchema.exactOptional(),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A client provided identifier (via X-Request-Id header) used for tracking individual requests',
      }),
    startedAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp indicating when the action was started' }),
    status: z
      .enum(['ACCEPTED', 'AWAITING', 'CANCELLED', 'FAILED', 'PENDING', 'SUCCESS'])
      .default('ACCEPTED')
      .openapi({
        description:
          "The current status of the action<br/><ul><li><strong style='margin-left: 12px;'>ACCEPTED</strong> - The action has been queued, processing has not started.</li><li><strong style='margin-left: 12px;'>AWAITING</strong> - The action is waiting on a user input.</li><li><strong style='margin-left: 12px;'>CANCELLED</strong> - The action has been cancelled by the user.</li><li><strong style='margin-left: 12px;'>FAILED</strong> - An error occurred while the action was processing, no more processing will be performed.</li><li><strong style='margin-left: 12px;'>PENDING</strong> - The action is being processed.</li><li><strong style='margin-left: 12px;'>SUCCESS</strong> - The action has completed, no additional processing is required.</li></ul>",
      }),
    type: z
      .enum([
        'AUTH_CODE_PURCHASE',
        'AUTH_CODE_REGENERATE',
        'AUTO_RENEWAL',
        'BACKORDER_PURCHASE',
        'BACKORDER_DELETE',
        'BACKORDER_UPDATE',
        'CONTACT_CREATE',
        'CONTACT_DELETE',
        'CONTACT_UPDATE',
        'DNS_VERIFICATION',
        'DNSSEC_CREATE',
        'DNSSEC_DELETE',
        'DOMAIN_DELETE',
        'DOMAIN_UPDATE',
        'DOMAIN_UPDATE_CONTACTS',
        'DOMAIN_UPDATE_NAME_SERVERS',
        'EXPIRY',
        'HOST_CREATE',
        'HOST_DELETE',
        'ICANN_VERIFICATION',
        'MIGRATE',
        'MIGRATE_IN',
        'PREMIUM',
        'PRIVACY_PURCHASE',
        'PRIVACY_DELETE',
        'REDEEM',
        'REGISTER',
        'RENEW',
        'RENEW_UNDO',
        'TRADE',
        'TRADE_CANCEL',
        'TRADE_PURCHASE',
        'TRADE_PURCHASE_AUTH_TEXT_MESSAGE',
        'TRADE_RESEND_AUTH_EMAIL',
        'TRANSFER',
        'TRANSFER_IN',
        'TRANSFER_IN_CANCEL',
        'TRANSFER_OUT',
        'TRANSFER_OUT_ACCEPT',
        'TRANSFER_OUT_REJECT',
        'TRANSFER_OUT_REQUESTED',
        'TRANSIT',
      ])
      .openapi({
        description:
          "The type of action being performed<br/><ul><li><strong style='margin-left: 12px;'>AUTH_CODE_PURCHASE</strong> - Request for an auth code for a .de domain via POST /v2/customers/{customerId}/domains/{domain}/purchaseAuthCode.</li><li><strong style='margin-left: 12px;'>AUTH_CODE_REGENERATE</strong> - Request to regenerate the authCode for a domain via POST /v2/customers/{customerId}/domains/{domain}/regenerateAuthCode</li><li><strong style='margin-left: 12px;'>AUTO_RENEWAL</strong> - A Domain Auto Renew is in progress.</li><li><strong style='margin-left: 12px;'>BACKORDER_PURCHASE</strong> - Request to purchase a domain backorder via POST /v2/customers/{customerId}/domains/backorders/purchase.</li><li><strong style='margin-left: 12px;'>BACKORDER_DELETE</strong> - Request to cancel the current domain backorder via DELETE /v2/customers/{customerId}/domains/backorders/{domain}.</li><li><strong style='margin-left: 12px;'>BACKORDER_UPDATE</strong> - Request update the current domain backorder via PATCH /v2/customers/{customerId}/domains/backorders/{domain}.</li><li><strong style='margin-left: 12px;'>CONTACT_CREATE</strong> - Request to create a contact via POST /v2/customers/{customerId}/domains/contacts.</li><li><strong style='margin-left: 12px;'>CONTACT_DELETE</strong> - Request to delete a contact via DELETE /v2/customers/{customerId}/domains/contacts/{contactId}</li><li><strong style='margin-left: 12px;'>CONTACT_UPDATE</strong> - Request to update a contact via PATCH /v2/customers/{customerId}/domains/contacts/{contactId}</li><li><strong style='margin-left: 12px;'>DNS_VERIFICATION</strong> - Domain requires zone file setup.</li><li><strong style='margin-left: 12px;'>DNSSEC_CREATE</strong> - Request to create DNSSEC record for the domain via PATCH /v2/customers/{customerId}/domains/{domain}/dnssecRecords.</li><li><strong style='margin-left: 12px;'>DNSSEC_DELETE</strong> - Request to delete DNSSEC record for the domain via DELETE /v2/customers/{customerId}/domains/{domain}/dnssecRecords.</li><li><strong style='margin-left: 12px;'>DOMAIN_DELETE</strong> - Request to delete the domain via DELETE /v2/customers/{customerId}/domains/{domain}</li><li><strong style='margin-left: 12px;'>DOMAIN_UPDATE</strong> - Request to update the domain via PATCH /v2/customers/{customerId}/domains/{domain}</li><li><strong style='margin-left: 12px;'>DOMAIN_UPDATE_CONTACTS</strong> -Request to update the domain contacts via PATCH /v2/customers/{customerId}/domains/{domain}/contacts</li><li><strong style='margin-left: 12px;'>DOMAIN_UPDATE_NAME_SERVERS</strong> - Request to update the domain name servers via PUT /v2/customers/{customerId}/domains/{domain}/nameServers</li><li><strong style='margin-left: 12px;'>EXPIRY</strong> - A Domain Expiration is in progress.</li><li><strong style='margin-left: 12px;'>HOST_CREATE</strong> - Request to create a hostname via PUT /v2/customers/{customerId}/domains/{domain}/hosts/{hostname}</li><li><strong style='margin-left: 12px;'>HOST_DELETE</strong> - Request to delete a hostname via DELETE /v2/customers/{customerId}/domains/{domain}/hosts/{hostname}</li><li><strong style='margin-left: 12px;'>ICANN_VERIFICATION</strong> - Domain requires registrant verification for Icann.</li><li><strong style='margin-left: 12px;'>PREMIUM</strong> - Premium Domain domain sale is in progress.</li><li><strong style='margin-left: 12px;'>PRIVACY_PURCHASE</strong> - Request to purchase privacy for a domain via POST /v2/customers/{customerId}/domains/{domain}/privacy/purchase</li><li><strong style='margin-left: 12px;'>PRIVACY_DELETE</strong> - Request to remove privacy from a domain via DELETE /v2/customers/{customerId}/domains/{domain}/privacy</li><li><strong style='margin-left: 12px;'>REDEEM</strong> - Request to redeem a domain via POST /v2/customers/{customerId}/domains/{domain}/redeem</li><li><strong style='margin-left: 12px;'>REGISTER</strong> - Request to register a domain via POST /v2/customers/{customerId}/domains/{domain}/register</li><li><strong style='margin-left: 12px;'>RENEW</strong> - Request to renew a domain via POST /v2/customers/{customerId}/domains/{domain}/renew</li><li><strong style='margin-left: 12px;'>RENEW_UNDO</strong> - Request to undo a renewal for a uk domain via POST /v2/customers/{customerId}/domains/{domain}/undoRenew</li><li><strong style='margin-left: 12px;'>TRADE</strong> - A domain trade request is in progress</li><li><strong style='margin-left: 12px;'>TRADE_CANCEL</strong> - Request to cancel a trade for a domain via POST /v2/customers/{customerId}/domains/{domain}/tradeCancel</li><li><strong style='margin-left: 12px;'>TRADE_PURCHASE</strong> - Request to purchase a trade for a domain via POST /v2/customers/{customerId}/domains/{domain}/tradePurchase</li><li><strong style='margin-left: 12px;'>TRADE_PURCHASE_AUTH_TEXT_MESSAGE</strong> - Request for a trade purchase text message for a domain via POST /v2/customers/{customerId}/domains/{domain}/tradePurchaseAuthorizationTextMessage</li><li><strong style='margin-left: 12px;'>TRADE_RESEND_AUTH_EMAIL</strong> - Request to resend the trade auth email message for a domain via POST /v2/customers/{customerId}/domains/{domain}/tradeResendAuthorizationEmail</li><li><strong style='margin-left: 12px;'>TRANSFER</strong> - Request to transfer a domain via POST /v2/customers/{customerId}/domains/{domain}/transfer</li><li><strong style='margin-left: 12px;'>TRANSFER_IN</strong> - A domain transfer in request is in progress.</li><li><strong style='margin-left: 12px;'>TRANSFER_IN_CANCEL</strong> - Request to cancel a domain transfer via POST /v2/customers/{customerId}/domains/{domain}/transferInCancel</li><li><strong style='margin-left: 12px;'>TRANSFER_OUT</strong> - A domain transfer out request is in progress.</li><li><strong style='margin-left: 12px;'>TRANSFER_OUT_ACCEPT</strong> - Request to accept a transfer out request for a domain via POST /v2/customers/{customerId}/domains/{domain}/transferOutAccept</li><li><strong style='margin-left: 12px;'>TRANSFER_OUT_REJECT</strong> - Request to reject a transfer out request for a domain via POST /v2/customers/{customerId}/domains/{domain}/transferOutReject</li><li><strong style='margin-left: 12px;'>TRANSFER_OUT_REQUESTED</strong> - Request to transfer out for a domain (.de) via POST /v2/customers/{customerId}/domains/{domain}/transferOut</li><li><strong style='margin-left: 12px;'>TRANSIT</strong> - Request to transit a de or at domain at the registry via POST /v2/customers/{customerId}/domains/{domain}/transit</li></ul>",
      }),
  })
  .openapi({ required: ['type', 'origination', 'createdAt', 'status'] })
  .openapi('Action')

const AddressSchema = z
  .object({
    address1: z.string(),
    address2: z.string().exactOptional(),
    city: z.string(),
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
        'AO',
        'AQ',
        'AR',
        'AS',
        'AT',
        'AU',
        'AW',
        'AX',
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
        'BQ',
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
        'CW',
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
        'KV',
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
        'MK',
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
        'SX',
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
        'ZA',
        'ZM',
        'ZW',
      ])
      .default('US')
      .openapi({
        description:
          "Two-letter ISO country code to be used as a hint for target region<br/><br/>\nNOTE: These are sample values, there are many\n<a href='http://www.iso.org/iso/country_codes.htm'>more</a>",
      }),
    postalCode: z.string().openapi({ description: 'Postal or zip code' }),
    state: z.string().openapi({ description: 'State or province or territory' }),
  })
  .openapi({ required: ['address1', 'city', 'state', 'postalCode', 'country'] })
  .openapi('Address')

const DNSRecordSchema = z
  .object({
    data: z.string(),
    name: z.string(),
    port: z
      .int()
      .min(1)
      .max(65535)
      .exactOptional()
      .openapi({ description: 'Service port (SRV only)' }),
    priority: z.int().exactOptional().openapi({ description: 'Record priority (MX and SRV only)' }),
    protocol: z.string().exactOptional().openapi({ description: 'Service protocol (SRV only)' }),
    service: z.string().exactOptional().openapi({ description: 'Service type (SRV only)' }),
    ttl: z.int().exactOptional(),
    type: z.enum(['A', 'AAAA', 'CNAME', 'MX', 'NS', 'SOA', 'SRV', 'TXT']),
    weight: z.int().exactOptional().openapi({ description: 'Record weight (SRV only)' }),
  })
  .openapi({ required: ['type', 'name', 'data'] })
  .openapi('DNSRecord')

const ArrayOfDNSRecordSchema = z.array(DNSRecordSchema).openapi('ArrayOfDNSRecord')

const ConsentSchema = z
  .object({
    agreedAt: z
      .string()
      .openapi({
        description: 'Timestamp indicating when the end-user consented to these legal agreements',
      }),
    agreedBy: z
      .string()
      .openapi({
        description:
          "Originating client IP address of the end-user's computer when they consented to these legal agreements",
      }),
    agreementKeys: z
      .array(z.string())
      .openapi({
        description:
          'Unique identifiers of the legal agreements to which the end-user has agreed, as returned from the/domains/agreements endpoint',
      }),
  })
  .openapi({ required: ['agreementKeys', 'agreedBy', 'agreedAt'] })
  .openapi('Consent')

const ConsentRedemptionSchema = z
  .strictObject({
    agreedAt: z
      .string()
      .openapi({
        description: 'Timestamp indicating when the end-user consented to these legal agreements',
      }),
    agreedBy: z
      .string()
      .openapi({
        description:
          "Originating client IP address of the end-user's computer when they consented to these legal agreements",
      }),
    currency: z
      .string()
      .regex(/^[A-Z][A-Z][A-Z]$/)
      .default('USD')
      .openapi({ description: 'Currency in which the `price` and `fee` are listed' }),
    fee: z
      .int()
      .openapi({
        description:
          'Fee charged for the domain redemption. Please use GET /v2/customers/{customerId}/domains/{domain} to retrieve the redemption fee and currency for the domain',
      }),
    price: z
      .int()
      .openapi({
        description:
          'Price for the domain renewal (if domain renewal required for redemption). Please use GET /v2/customers/{customerId}/domains/{domain} to retrieve the redemption price and currency for the domain',
      }),
  })
  .openapi({ required: ['price', 'fee', 'currency', 'agreedBy', 'agreedAt'] })
  .openapi('ConsentRedemption')

const ContactSchema = z
  .object({
    addressMailing: AddressSchema,
    email: z.email(),
    fax: z.string().exactOptional(),
    jobTitle: z.string().exactOptional(),
    nameFirst: z.string(),
    nameLast: z.string(),
    nameMiddle: z.string().exactOptional(),
    organization: z.string().exactOptional(),
    phone: z.string(),
  })
  .openapi({ required: ['nameFirst', 'nameLast', 'email', 'phone', 'addressMailing'] })
  .openapi('Contact')

const ContactDomainSchema = z
  .object({
    _createdAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp indicating when the contact was created' }),
    _deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag indicating if the contact has been logically deleted in the system',
      }),
    _modifiedAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp indicating when the contact was last modified' }),
    _revision: z
      .int()
      .exactOptional()
      .openapi({ description: 'The current revision number of the contact.' }),
    addressMailing: AddressSchema,
    contactId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for this Contact' }),
    email: z.email().max(80),
    encoding: z
      .enum(['ASCII', 'UTF-8'])
      .default('ASCII')
      .exactOptional()
      .openapi({
        description:
          "The encoding of the contact data<br/><ul><li><strong style='margin-left: 12px;'>ASCII</strong> - Data contains only ASCII characters that are not region or language specific</li><li><strong style='margin-left: 12px;'>UTF-8</strong> - Data contains characters that are specific to a region or language</li></ul>",
      }),
    exposeWhois: z
      .boolean()
      .openapi({ description: 'Whether or not the contact details should be shown in the WHOIS' }),
    fax: z.string().max(17).exactOptional(),
    jobTitle: z.string().exactOptional(),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'The contact eligibility data fields as specified by GET /v2/customers/{customerId}/domains/contacts/schema/{tld}',
      }),
    nameFirst: z.string().max(30),
    nameLast: z.string().max(30),
    nameMiddle: z.string().exactOptional(),
    organization: z.string().max(100).exactOptional(),
    phone: z.string().max(17),
    tlds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The tlds that this contact can be assigned to' }),
  })
  .openapi({
    required: ['nameFirst', 'nameLast', 'email', 'phone', 'addressMailing', 'exposeWhois'],
  })
  .openapi('ContactDomain')

const DNSRecordCreateTypeSchema = z
  .object({
    data: z.string(),
    name: z.string(),
    port: z
      .int()
      .min(1)
      .max(65535)
      .exactOptional()
      .openapi({ description: 'Service port (SRV only)' }),
    priority: z.int().exactOptional().openapi({ description: 'Record priority (MX and SRV only)' }),
    protocol: z.string().exactOptional().openapi({ description: 'Service protocol (SRV only)' }),
    service: z.string().exactOptional().openapi({ description: 'Service type (SRV only)' }),
    ttl: z.int().exactOptional(),
    weight: z.int().exactOptional().openapi({ description: 'Record weight (SRV only)' }),
  })
  .openapi({ required: ['name', 'data'] })
  .openapi('DNSRecordCreateType')

const DNSRecordCreateTypeNameSchema = z
  .object({
    data: z.string(),
    port: z
      .int()
      .min(1)
      .max(65535)
      .exactOptional()
      .openapi({ description: 'Service port (SRV only)' }),
    priority: z.int().exactOptional().openapi({ description: 'Record priority (MX and SRV only)' }),
    protocol: z.string().exactOptional().openapi({ description: 'Service protocol (SRV only)' }),
    service: z.string().exactOptional().openapi({ description: 'Service type (SRV only)' }),
    ttl: z.int().exactOptional(),
    weight: z.int().exactOptional().openapi({ description: 'Record weight (SRV only)' }),
  })
  .openapi({ required: ['data'] })
  .openapi('DNSRecordCreateTypeName')

const DomainAvailableResponseSchema = z
  .object({
    available: z.boolean().openapi({ description: 'Whether or not the domain name is available' }),
    currency: z
      .string()
      .default('USD')
      .exactOptional()
      .openapi({
        description: 'Currency in which the `price` is listed. Only returned if tld is offered',
      }),
    definitive: z
      .boolean()
      .openapi({
        description:
          'Whether or not the `available` answer has been definitively verified with the registry',
      }),
    domain: z.string().openapi({ description: 'Domain name' }),
    period: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of years included in the price. Only returned if tld is offered',
      }),
    price: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Price of the domain excluding taxes or fees. Only returned if tld is offered',
      }),
  })
  .openapi({ required: ['domain', 'available', 'definitive'] })
  .openapi('DomainAvailableResponse')

const DomainAvailableBulkSchema = z
  .object({
    domains: z
      .array(DomainAvailableResponseSchema)
      .openapi({ description: 'Domain available response array' }),
  })
  .openapi({ required: ['domains'] })
  .openapi('DomainAvailableBulk')

const DomainAvailableErrorSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Short identifier for the error, suitable for indicating the specific error within client code',
      }),
    domain: z.string().openapi({ description: 'Domain name' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable, English description of the error' }),
    path: z
      .string()
      .openapi({
        description:
          "<ul>\n<li style='margin-left: 12px;'>JSONPath referring to a field containing an error</li>\n<strong style='margin-left: 12px;'>OR</strong>\n<li style='margin-left: 12px;'>JSONPath referring to a field that refers to an object containing an error, with more detail in `pathRelated`</li>\n</ul>",
      }),
    status: z
      .int()
      .openapi({ description: 'HTTP status code that would return for a single check' }),
  })
  .openapi({ required: ['code', 'domain', 'path', 'status'] })
  .openapi('DomainAvailableError')

const DomainAvailableBulkMixedSchema = z
  .object({
    domains: z
      .array(DomainAvailableResponseSchema)
      .openapi({ description: 'Domain available response array' }),
    errors: z
      .array(DomainAvailableErrorSchema)
      .exactOptional()
      .openapi({ description: 'Errors encountered while performing a domain available check' }),
  })
  .openapi({ required: ['domains'] })
  .openapi('DomainAvailableBulkMixed')

const DomainContactsSchema = z
  .object({
    contactAdmin: ContactSchema.exactOptional(),
    contactBilling: ContactSchema.exactOptional(),
    contactRegistrant: ContactSchema,
    contactTech: ContactSchema.exactOptional(),
  })
  .openapi({ required: ['contactRegistrant'] })
  .openapi('DomainContacts')

const DomainContactsV2Schema = z
  .strictObject({
    admin: ContactDomainSchema.exactOptional(),
    billing: ContactDomainSchema.exactOptional(),
    registrant: ContactDomainSchema.exactOptional(),
    tech: ContactDomainSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DomainContactsV2')

const VerificationDomainNameSchema = z
  .object({
    status: z
      .enum(['APPROVED', 'PENDING', 'REJECTED', 'UNABLE_TO_RETRIEVE_STATUS'])
      .openapi({ description: 'Status of the domain name verification' }),
  })
  .openapi({ required: ['status'] })
  .openapi('VerificationDomainName')

const VerificationRealNameSchema = z
  .object({
    status: z
      .enum([
        'APPROVED',
        'PENDING',
        'REJECTED_DOCUMENT_OUTDATED',
        'REJECTED_EXPIRED_BUSINESS_LICENSE',
        'REJECTED_EXPIRED_ORGANIZATION_CODE',
        'REJECTED_ILLEGIBLE_DOCUMENT_NAME',
        'REJECTED_ILLEGIBLE_IDENTIFICATION',
        'REJECTED_INCOMPLETE_IDENTIFICATION',
        'REJECTED_INCOMPLETE_REGISTRATION_LETTER',
        'REJECTED_INCONSISTENT_IDENTITY_CARD',
        'REJECTED_INCONSISTENT_ORGANIZATION_CODE',
        'REJECTED_INCONSISTENT_REGISTRANT_NAME',
        'REJECTED_INVALID_BUSINESS_LICENSE_OR_ORGANIZATION_CODE',
        'REJECTED_INVALID_DOCUMENT',
        'REJECTED_MISMATCH_BUSINESS_ID',
        'REJECTED_MISMATCH_BUSINESS_NAME',
        'REJECTED_MISMATCH_DOCUMENT_ID',
        'REJECTED_MISMATCH_DOCUMENT_NAME',
        'REJECTED_MISMATCH_DOCUMENT_TYPE',
        'REJECTED_MISMATCH_REGISTRANT_INFO',
        'REJECTED_MISMATCH_REGISTRANT_LOCALITY',
        'REJECTED_MISMATCH_REGISTRANT_NAME',
        'REJECTED_UNABLE_TO_OPEN',
        'REJECTED_UNABLE_TO_VERIFY',
        'REJECTED_UNKNOWN_ERROR',
        'UNABLE_TO_RETRIEVE_STATUS',
      ])
      .openapi({
        description:
          "Status of the real name verification<br/><ul> <li><strong style='margin-left: 12px;'>APPROVED</strong> - All is well</li> <li><strong style='margin-left: 12px;'>PENDING</strong> - Real name verification is working its way through the workflow</li> <li><strong style='margin-left: 12px;'>REJECTED_DOCUMENT_OUTDATED</strong> - Local government verification shows there is a newer version of your document.  Upload the latest version of the document and retry real name verification</li> <li><strong style='margin-left: 12px;'>REJECTED_EXPIRED_BUSINESS_LICENSE</strong> - Business license is expired</li> <li><strong style='margin-left: 12px;'>REJECTED_EXPIRED_ORGANIZATION_CODE</strong> - Organization code certificate number has expired</li> <li><strong style='margin-left: 12px;'>REJECTED_ILLEGIBLE_DOCUMENT_NAME</strong> - There isn’t a clear name on your uploaded document, please upload a different document to retry real name verification</li> <li><strong style='margin-left: 12px;'>REJECTED_ILLEGIBLE_IDENTIFICATION</strong> - Registrant identification is not clear.  Upload a better image to retry</li> <li><strong style='margin-left: 12px;'>REJECTED_INCOMPLETE_IDENTIFICATION</strong> - Registrant identification is incomplete</li> <li><strong style='margin-left: 12px;'>REJECTED_INCOMPLETE_REGISTRATION_LETTER</strong> - Registration letter is incomplete</li> <li><strong style='margin-left: 12px;'>REJECTED_INCONSISTENT_IDENTITY_CARD</strong> - Provided identity card is inconsistent with the identity card on record</li> <li><strong style='margin-left: 12px;'>REJECTED_INCONSISTENT_ORGANIZATION_CODE</strong> - Provided organization information is inconsistent with the results obtained using the submitted organization code</li> <li><strong style='margin-left: 12px;'>REJECTED_INCONSISTENT_REGISTRANT_NAME</strong> - Name on the registrant identification does not match the name in the system</li> <li><strong style='margin-left: 12px;'>REJECTED_INVALID_BUSINESS_LICENSE_OR_ORGANIZATION_CODE</strong> - Your document contains an invalid business license or organization code certificate number</li> <li><strong style='margin-left: 12px;'>REJECTED_INVALID_DOCUMENT</strong> - Document is invalid.  Please upload another document to retry real name verification</li> <li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_BUSINESS_ID</strong> - Business id does not match the business id in the document</li> <li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_BUSINESS_NAME</strong> - Business name does not match the business name in the document</li> <li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_DOCUMENT_ID</strong> - Document id does not match the id in the document</li> <li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_DOCUMENT_NAME</strong> - Document name does not match the name in the document</li> <li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_DOCUMENT_TYPE</strong> - Document type does not match the document</li> <li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_REGISTRANT_INFO</strong> - The information provided for the registrant does not match the document</li> <li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_REGISTRANT_LOCALITY</strong> - Registrant region is overseas, but a local identity document was provided</li> <li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_REGISTRANT_NAME</strong> - Registrant name has been changed, so the request must be resubmitted</li> <li><strong style='margin-left: 12px;'>REJECTED_UNABLE_TO_OPEN</strong> - Registrant identification could not be opened.  Please upload the document again to retry real name verification</li> <li><strong style='margin-left: 12px;'>REJECTED_UNABLE_TO_VERIFY</strong> - Unable to initiate verification.  Please upload the document again to retry real name verification</li> <li><strong style='margin-left: 12px;'>REJECTED_UNKNOWN_ERROR</strong> - Document was rejected due to an unknown error. For more information, contact customer support</li> <li><strong style='margin-left: 12px;'>UNABLE_TO_RETRIEVE_STATUS</strong> - Unable to retrieve status for the real name verification process.  Retry, if this status persists, contact customer support</li> </ul>",
      }),
  })
  .openapi({ required: ['status'] })
  .openapi('VerificationRealName')

const VerificationsDomainSchema = z
  .object({
    domainName: VerificationDomainNameSchema.exactOptional(),
    realName: VerificationRealNameSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VerificationsDomain')

const DomainDetailSchema = z
  .object({
    authCode: z.string().openapi({ description: 'Authorization code for transferring the Domain' }),
    contactAdmin: ContactSchema,
    contactBilling: ContactSchema,
    contactRegistrant: ContactSchema,
    contactTech: ContactSchema,
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date and time when this domain was created' }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time when this domain was deleted' }),
    domain: z.string().openapi({ description: 'Name of the domain' }),
    domainId: z.float64().openapi({ description: 'Unique identifier for this Domain' }),
    expirationProtected: z
      .boolean()
      .openapi({ description: 'Whether or not the domain is protected from expiration' }),
    expires: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time when this domain will expire' }),
    exposeWhois: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether or not the domain contact details should be shown in the WHOIS',
      }),
    holdRegistrar: z
      .boolean()
      .openapi({ description: 'Whether or not the domain is on-hold by the registrar' }),
    locked: z
      .boolean()
      .openapi({ description: 'Whether or not the domain is locked to prevent transfers' }),
    nameServers: z
      .array(z.string())
      .openapi({ description: 'Fully-qualified domain names for DNS servers' }),
    privacy: z
      .boolean()
      .openapi({ description: 'Whether or not the domain has privacy protection' }),
    registrarCreatedAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date and time when this domain was created by the registrar' }),
    renewAuto: z
      .boolean()
      .openapi({ description: 'Whether or not the domain is configured to automatically renew' }),
    renewDeadline: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the domain must renew on' }),
    status: z
      .string()
      .openapi({
        description:
          "Processing status of the domain<br/><ul>\n<li><strong style='margin-left: 12px;'>ACTIVE</strong> - All is well</li>\n<li><strong style='margin-left: 12px;'>AWAITING*</strong> - System is waiting for the end-user to complete an action</li>\n<li><strong style='margin-left: 12px;'>CANCELLED*</strong> - Domain has been cancelled, and may or may not be reclaimable</li>\n<li><strong style='margin-left: 12px;'>CONFISCATED</strong> - Domain has been confiscated, usually for abuse, chargeback, or fraud</li>\n<li><strong style='margin-left: 12px;'>DISABLED*</strong> - Domain has been disabled</li>\n<li><strong style='margin-left: 12px;'>EXCLUDED*</strong> - Domain has been excluded from Firehose registration</li>\n<li><strong style='margin-left: 12px;'>EXPIRED*</strong> - Domain has expired</li>\n<li><strong style='margin-left: 12px;'>FAILED*</strong> - Domain has failed a required action, and the system is no longer retrying</li>\n<li><strong style='margin-left: 12px;'>HELD*</strong> - Domain has been placed on hold, and likely requires intervention from Support</li>\n<li><strong style='margin-left: 12px;'>LOCKED*</strong> - Domain has been locked, and likely requires intervention from Support</li>\n<li><strong style='margin-left: 12px;'>PARKED*</strong> - Domain has been parked, and likely requires intervention from Support</li>\n<li><strong style='margin-left: 12px;'>PENDING*</strong> - Domain is working its way through an automated workflow</li>\n<li><strong style='margin-left: 12px;'>RESERVED*</strong> - Domain is reserved, and likely requires intervention from Support</li>\n<li><strong style='margin-left: 12px;'>REVERTED</strong> - Domain has been reverted, and likely requires intervention from Support</li>\n<li><strong style='margin-left: 12px;'>SUSPENDED*</strong> - Domain has been suspended, and likely requires intervention from Support</li>\n<li><strong style='margin-left: 12px;'>TRANSFERRED*</strong> - Domain has been transferred out</li>\n<li><strong style='margin-left: 12px;'>UNKNOWN</strong> - Domain is in an unknown state</li>\n<li><strong style='margin-left: 12px;'>UNLOCKED*</strong> - Domain has been unlocked, and likely requires intervention from Support</li>\n<li><strong style='margin-left: 12px;'>UNPARKED*</strong> - Domain has been unparked, and likely requires intervention from Support</li>\n<li><strong style='margin-left: 12px;'>UPDATED*</strong> - Domain ownership has been transferred to another account</li>\n</ul>",
      }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reseller subaccount shopperid who can manage the domain' }),
    transferAwayEligibleAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time when this domain is eligible to transfer' }),
    transferProtected: z
      .boolean()
      .openapi({ description: 'Whether or not the domain is protected from transfer' }),
    verifications: VerificationsDomainSchema.exactOptional(),
  })
  .openapi({
    required: [
      'domainId',
      'domain',
      'status',
      'expirationProtected',
      'holdRegistrar',
      'locked',
      'privacy',
      'renewAuto',
      'renewDeadline',
      'transferProtected',
      'createdAt',
      'authCode',
      'nameServers',
      'contactRegistrant',
      'contactBilling',
      'contactAdmin',
      'contactTech',
    ],
  })
  .openapi('DomainDetail')

const DomainDnssecSchema = z
  .object({
    algorithm: z
      .enum([
        'RSAMD5',
        'DH',
        'DSA',
        'RSASHA1',
        'DSA_NSEC3_SHA1',
        'RSASHA1_NSEC3_SHA1',
        'RSASHA256',
        'RSASHA512',
        'ECC_GOST',
        'ECDSAP256SHA256',
        'ECDSAP384SHA384',
        'ED25519',
        'ED448',
        'PRIVATEDNS',
        'PRIVATEOID',
      ])
      .openapi({
        description:
          "This identifies the cryptographic algorithm used to generate the signature<br/><ul><li><strong style='margin-left: 12px;'>RSAMD5</strong> - [01] DRSA/MD5 </li><li><strong style='margin-left: 12px;'>DSA</strong> - [03] DSA/SHA1</li><li><strong style='margin-left: 12px;'>RSASHA1</strong> - [05] RSA/SHA-1</li><li><strong style='margin-left: 12px;'>DSA_NSEC3_SHA1</strong> - [06] DSA-NSEC3-SHA1</li><li><strong style='margin-left: 12px;'>RSASHA1_NSEC3_SHA1</strong> - [07] RSASHA1-NSEC3-SHA1</li><li><strong style='margin-left: 12px;'>RSASHA256</strong> - [08] RSA/SHA-256</li><li><strong style='margin-left: 12px;'>RSASHA512</strong> - [10] RSA/SHA-512</li><li><strong style='margin-left: 12px;'>ECC_GOST</strong> - [12] GOST R 34.10-2001</li><li><strong style='margin-left: 12px;'>ECDSAP256SHA256</strong> - [13] ECDSA Curve P-256 with SHA-256</li><li><strong style='margin-left: 12px;'>ECDSAP384SHA384</strong> - [14] ECDSA Curve P-384 with SHA-384</li><li><strong style='margin-left: 12px;'>ED25519</strong> - [15] Ed25519</li><li><strong style='margin-left: 12px;'>ED448</strong> - [16] Ed448</li></ul>",
      }),
    digest: z
      .string()
      .exactOptional()
      .openapi({ description: 'The digest is an alpha-numeric value' }),
    digestType: z
      .enum(['SHA1', 'SHA256', 'GOST', 'SHA384'])
      .exactOptional()
      .openapi({
        description:
          "This identifies the algorithm used to construct the digest<br/><ul><li><strong style='margin-left: 12px;'>SHA1</strong> - [01] SHA-1</li><li><strong style='margin-left: 12px;'>SHA256</strong> - [02] SHA-256</li><li><strong style='margin-left: 12px;'>GOST</strong> - [03] GOST R 34.11-94</li><li><strong style='margin-left: 12px;'>SHA384</strong> - [04] SHA-384</li></ul>",
      }),
    flags: z
      .enum(['ZSK', 'KSK'])
      .exactOptional()
      .openapi({
        description:
          "This identifies the key type; either a Zone-Signing Key or a Key-Signing Key<br/><ul><li><strong style='margin-left: 12px;'>ZSK</strong> - [256] Zone-Signing Key</li><li><strong style='margin-left: 12px;'>KSK</strong> - [257] Key-Signing Key</li></ul>",
      }),
    keyTag: z
      .int()
      .max(65536)
      .exactOptional()
      .openapi({
        description:
          'This is an integer value less than 65536 used to identify the DNSSEC record for the domain name.',
      }),
    maxSignatureLife: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'This specifies the validity period for the signature. The value is expressed in seconds. You can use any integer value larger than zero',
      }),
    publicKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Registries use this value to encrypt DS records. Decryption requires a matching public key',
      }),
  })
  .openapi({ required: ['algorithm'] })
  .openapi('DomainDnssec')

const RenewalDetailsSchema = z
  .object({
    currency: z
      .string()
      .regex(/^[A-Z][A-Z][A-Z]$/)
      .default('USD')
      .openapi({ description: 'Currency in which the `price` is listed' }),
    price: z.int().openapi({ description: 'Price for the domain renewal excluding taxes or fees' }),
    renewable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the domain is eligble for renewal based on status' }),
  })
  .openapi({ required: ['price', 'currency'] })
  .openapi('RenewalDetails')

const VerificationsDomainV2Schema = z
  .strictObject({
    domainName: z
      .enum(['APPROVED', 'PENDING', 'REJECTED', 'UNABLE_TO_RETRIEVE_STATUS'])
      .exactOptional()
      .openapi({
        description:
          'Status of the verification of the domain name against a prohibited list maintained by the government',
      }),
    icann: z
      .enum(['COMPLETED', 'PENDING', 'UNABLE_TO_RETRIEVE_STATUS'])
      .exactOptional()
      .openapi({
        description:
          "Status of the Icann verification of domain registrant contact by completing email and/or phone verification<br/><ul><li><strong style='margin-left: 12px;'>COMPLETED</strong> - Icann verification has been completed.</li><li><strong style='margin-left: 12px;'>PENDING</strong> - Icann verification has not been completed.</li></ul>",
      }),
    realName: z
      .enum([
        'APPROVED',
        'PENDING',
        'REJECTED_DOCUMENT_OUTDATED',
        'REJECTED_EXPIRED_BUSINESS_LICENSE',
        'REJECTED_EXPIRED_ORGANIZATION_CODE',
        'REJECTED_ILLEGIBLE_DOCUMENT_NAME',
        'REJECTED_ILLEGIBLE_IDENTIFICATION',
        'REJECTED_INCOMPLETE_IDENTIFICATION',
        'REJECTED_INCOMPLETE_REGISTRATION_LETTER',
        'REJECTED_INCONSISTENT_IDENTITY_CARD',
        'REJECTED_INCONSISTENT_ORGANIZATION_CODE',
        'REJECTED_INCONSISTENT_REGISTRANT_NAME',
        'REJECTED_INVALID_BUSINESS_LICENSE_OR_ORGANIZATION_CODE',
        'REJECTED_INVALID_DOCUMENT',
        'REJECTED_MISMATCH_BUSINESS_ID',
        'REJECTED_MISMATCH_BUSINESS_NAME',
        'REJECTED_MISMATCH_DOCUMENT_ID',
        'REJECTED_MISMATCH_DOCUMENT_NAME',
        'REJECTED_MISMATCH_DOCUMENT_TYPE',
        'REJECTED_MISMATCH_REGISTRANT_INFO',
        'REJECTED_MISMATCH_REGISTRANT_LOCALITY',
        'REJECTED_MISMATCH_REGISTRANT_NAME',
        'REJECTED_UNABLE_TO_OPEN',
        'REJECTED_UNABLE_TO_VERIFY',
        'REJECTED_UNKNOWN_ERROR',
        'UNABLE_TO_RETRIEVE_STATUS',
      ])
      .exactOptional()
      .openapi({
        description:
          "Status of the real name verification of an identity by comparing registration data against government issued documents<br/><ul><li><strong style='margin-left: 12px;'>APPROVED</strong> - All is well</li><li><strong style='margin-left: 12px;'>PENDING</strong> - Real name verification is working its way through the workflow</li><li><strong style='margin-left: 12px;'>REJECTED_DOCUMENT_OUTDATED</strong> - Local government verification shows there is a newer version of your document.  Upload the latest version of the document and retry real name verification</li><li><strong style='margin-left: 12px;'>REJECTED_EXPIRED_BUSINESS_LICENSE</strong> - Business license is expired</li><li><strong style='margin-left: 12px;'>REJECTED_EXPIRED_ORGANIZATION_CODE</strong> - Organization code certificate number has expired</li><li><strong style='margin-left: 12px;'>REJECTED_ILLEGIBLE_DOCUMENT_NAME</strong> - There isn’t a clear name on your uploaded document, please upload a different document to retry real name verification</li><li><strong style='margin-left: 12px;'>REJECTED_ILLEGIBLE_IDENTIFICATION</strong> - Registrant identification is not clear.  Upload a better image to retry</li><li><strong style='margin-left: 12px;'>REJECTED_INCOMPLETE_IDENTIFICATION</strong> - Registrant identification is incomplete</li><li><strong style='margin-left: 12px;'>REJECTED_INCOMPLETE_REGISTRATION_LETTER</strong> - Registration letter is incomplete</li><li><strong style='margin-left: 12px;'>REJECTED_INCONSISTENT_IDENTITY_CARD</strong> - Provided identity card is inconsistent with the identity card on record</li><li><strong style='margin-left: 12px;'>REJECTED_INCONSISTENT_ORGANIZATION_CODE</strong> - Provided organization information is inconsistent with the results obtained using the submitted organization code</li><li><strong style='margin-left: 12px;'>REJECTED_INCONSISTENT_REGISTRANT_NAME</strong> - Name on the registrant identification does not match the name in the system</li><li><strong style='margin-left: 12px;'>REJECTED_INVALID_BUSINESS_LICENSE_OR_ORGANIZATION_CODE</strong> - Your document contains an invalid business license or organization code certificate number</li><li><strong style='margin-left: 12px;'>REJECTED_INVALID_DOCUMENT</strong> - Document is invalid.  Please upload another document to retry real name verification</li><li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_BUSINESS_ID</strong> - Business id does not match the business id in the document</li><li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_BUSINESS_NAME</strong> - Business name does not match the business name in the document</li><li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_DOCUMENT_ID</strong> - Document id does not match the id in the document</li><li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_DOCUMENT_NAME</strong> - Document name does not match the name in the document</li><li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_DOCUMENT_TYPE</strong> - Document type does not match the document</li><li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_REGISTRANT_INFO</strong> - The information provided for the registrant does not match the document</li><li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_REGISTRANT_LOCALITY</strong> - Registrant region is overseas, but a local identity document was provided</li><li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_REGISTRANT_NAME</strong> - Registrant name has been changed, so the request must be resubmitted</li><li><strong style='margin-left: 12px;'>REJECTED_UNABLE_TO_OPEN</strong> - Registrant identification could not be opened.  Please upload the document again to retry real name verification</li><li><strong style='margin-left: 12px;'>REJECTED_UNABLE_TO_VERIFY</strong> - Unable to initiate verification.  Please upload the document again to retry real name verification</li><li><strong style='margin-left: 12px;'>REJECTED_UNKNOWN_ERROR</strong> - Document was rejected due to an unknown error. For more information, contact customer support</li><li><strong style='margin-left: 12px;'>UNABLE_TO_RETRIEVE_STATUS</strong> - Unable to retrieve status for the real name verification process.  Retry, if this status persists, contact customer support</li></ul>",
      }),
  })
  .openapi({ required: [] })
  .openapi('VerificationsDomainV2')

const DomainDetailV2Schema = z
  .strictObject({
    actions: z
      .array(ActionSchema)
      .exactOptional()
      .openapi({ description: 'List of current actions in progress for this domain' }),
    authCode: z.string().openapi({ description: 'Authorization code for transferring the Domain' }),
    contacts: DomainContactsV2Schema,
    createdAt: z.string().openapi({ description: 'Date and time when this domain was created' }),
    deletedAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date and time when this domain was deleted' }),
    dnssecRecords: z
      .array(DomainDnssecSchema)
      .exactOptional()
      .openapi({ description: 'List of active DNSSEC records for this domain' }),
    domain: z.string().openapi({ description: 'Name of the domain' }),
    domainId: z.string().openapi({ description: 'Unique identifier for this Domain' }),
    expirationProtected: z
      .boolean()
      .openapi({ description: 'Whether or not the domain is protected from expiration' }),
    expiresAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date and time when this domain will expire' }),
    holdRegistrar: z
      .boolean()
      .openapi({ description: 'Whether or not the domain is on-hold by the registrar' }),
    hostnames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Hostnames owned by the domain' }),
    locked: z
      .boolean()
      .openapi({ description: 'Whether or not the domain is locked to prevent transfers' }),
    modifiedAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date and time when this domain was last modified' }),
    nameServers: z
      .array(z.string())
      .openapi({ description: 'Fully-qualified domain names for DNS servers' }),
    privacy: z
      .boolean()
      .openapi({ description: 'Whether or not the domain has privacy protection' }),
    registrarCreatedAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date and time when this domain was created by the registrar' }),
    registryStatusCodes: z
      .array(
        z.enum([
          'ADD_PERIOD',
          'AUTO_RENEW_PERIOD',
          'CLIENT_DELETE_PROHIBITED',
          'CLIENT_HOLD',
          'CLIENT_RENEW_PROHIBITED',
          'CLIENT_TRANSFER_PROHIBITED',
          'CLIENT_UPDATE_PROHIBITED',
          'INACTIVE',
          'OK',
          'PENDING_CREATE',
          'PENDING_DELETE',
          'PENDING_RENEW',
          'PENDING_RESTORE',
          'PENDING_TRANSFER',
          'PENDING_UPDATE',
          'REDEMPTION_PERIOD',
          'RENEW_PERIOD',
          'SERVER_DELETE_PROHIBITED',
          'SERVER_HOLD',
          'SERVER_RENEW_PROHIBITED',
          'SERVER_TRANSFER_PROHIBITED',
          'SERVER_UPDATE_PROHIBITED',
          'TRANSFER_PERIOD',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          "The current registry status codes of the domain<br/><ul><li><strong style='margin-left: 12px;'>ADD_PERIOD</strong> - This grace period is provided after the initial registration of a domain name.</li><li><strong style='margin-left: 12px;'>AUTO_RENEW_PERIOD</strong> - This grace period is provided after a domain name registration period expires and is extended (renewed) automatically by the registry.</li><li><strong style='margin-left: 12px;'>CLIENT_DELETE_PROHIBITED</strong> - This status code tells your domain's registry to reject requests to delete the domain.</li><li><strong style='margin-left: 12px;'>CLIENT_HOLD</strong> - This status code tells your domain's registry to not activate your domain in the DNS and as a consequence, it will not resolve.</li><li><strong style='margin-left: 12px;'>CLIENT_RENEW_PROHIBITED</strong> - This status code tells your domain's registry to reject requests to renew your domain.</li><li><strong style='margin-left: 12px;'>CLIENT_TRANSFER_PROHIBITED</strong> - This status code tells your domain's registry to reject requests to transfer the domain from your current registrar to another.</li><li><strong style='margin-left: 12px;'>CLIENT_UPDATE_PROHIBITED</strong> - This status code tells your domain's registry to reject requests to update the domain.</li><li><strong style='margin-left: 12px;'>INACTIVE</strong> - This status code indicates that delegation information (name servers) has not been associated with your domain.</li><li><strong style='margin-left: 12px;'>OK</strong> - This is the standard status for a domain, meaning it has no pending operations or prohibitions.</li><li><strong style='margin-left: 12px;'>PENDING_CREATE</strong> - This status code indicates that a request to create your domain has been received and is being processed.</li><li><strong style='margin-left: 12px;'>PENDING_DELETE</strong> - This status code indicates that the domain is either in a redemption period if combined with either REDEMPTION_PERIOD or PENDING_RESTORE, if not combined with these, then indicates that the redemption period for the domain has ended and domain will be be purged and dropped from the registry database.</li><li><strong style='margin-left: 12px;'>PENDING_RENEW</strong> - This status code indicates that a request to renew your domain has been received and is being processed.</li><li><strong style='margin-left: 12px;'>PENDING_RESTORE</strong> - This status code indicates that your registrar has asked the registry to restore your domain that was in REDEMPTION_PERIOD status</li><li><strong style='margin-left: 12px;'>PENDING_TRANSFER</strong> - This status code indicates that a request to transfer your domain to a new registrar has been received and is being processed.</li><li><strong style='margin-left: 12px;'>PENDING_UPDATE</strong> - This status code indicates that a request to update your domain has been received and is being processed.</li><li><strong style='margin-left: 12px;'>REDEMPTION_PERIOD</strong> - This status code indicates that your registrar has asked the registry to delete your domain.</li><li><strong style='margin-left: 12px;'>RENEW_PERIOD</strong> - This grace period is provided after a domain name registration period is explicitly extended (renewed) by the registrar.</li><li><strong style='margin-left: 12px;'>SERVER_DELETE_PROHIBITED</strong> - This status code prevents your domain from being deleted. </li><li><strong style='margin-left: 12px;'>SERVER_HOLD</strong> - This status code is set by your domain's Registry Operator. Your domain is not activated in the DNS.</li><li><strong style='margin-left: 12px;'>SERVER_RENEW_PROHIBITED</strong> - This status code indicates your domain's Registry Operator will not allow your registrar to renew your domain.</li><li><strong style='margin-left: 12px;'>SERVER_TRANSFER_PROHIBITED</strong> - This status code prevents your domain from being transferred from your current registrar to another. </li><li><strong style='margin-left: 12px;'>SERVER_UPDATE_PROHIBITED</strong> - This status code locks your domain preventing it from being updated.</li><li><strong style='margin-left: 12px;'>TRANSFER_PERIOD</strong> - This grace period is provided after the successful transfer of a domain name from one registrar to another. </li></ul>",
      }),
    renewAuto: z
      .boolean()
      .openapi({ description: 'Whether or not the domain is configured to automatically renew' }),
    renewDeadline: z.string().openapi({ description: 'Date the domain must renew on' }),
    renewal: RenewalDetailsSchema.exactOptional(),
    status: z
      .enum([
        'ACTIVE',
        'CANCELLED',
        'DELETED_REDEEMABLE',
        'EXPIRED',
        'FAILED',
        'LOCKED_REGISTRAR',
        'PARKED',
        'HELD_REGISTRAR',
        'OWNERSHIP_CHANGED',
        'PENDING_TRANSFER',
        'PENDING_REGISTRATION',
        'REPOSSESSED',
        'SUSPENDED',
        'TRANSFERRED',
      ])
      .openapi({
        description:
          "The current status of the domain<br/><ul><li><strong style='margin-left: 12px;'>ACTIVE</strong> - Domain has been registered and is active.</li><li><strong style='margin-left: 12px;'>CANCELLED</strong> - Domain has been cancelled by the user or system, and is not be reclaimable.</li><li><strong style='margin-left: 12px;'>DELETED_REDEEMABLE</strong> - Domain is deleted but is redeemable.</li><li><strong style='margin-left: 12px;'>EXPIRED</strong> - Domain has expired.</li><li><strong style='margin-left: 12px;'>FAILED</strong> - Domain registration or transfer error.</li><li><strong style='margin-left: 12px;'>LOCKED_REGISTRAR</strong> - Domain is locked at the registrar - this is usually the result of a spam, abuse, etc.</li><li><strong style='margin-left: 12px;'>PARKED</strong> - Domain has been parked.</li><li><strong style='margin-left: 12px;'>HELD_REGISTRAR</strong> - Domain is held at the registrar and cannot be transferred or modified - this is usually the result of a dispute.</li><li><strong style='margin-left: 12px;'>OWNERSHIP_CHANGED</strong> - Domain has been moved to another account.</li><li><strong style='margin-left: 12px;'>PENDING_TRANSFER</strong> - Domain transfer has been requested and is pending the transfer process.</li><li><strong style='margin-left: 12px;'>PENDING_REGISTRATION</strong> - Domain is pending setup at the registry.</li><li><strong style='margin-left: 12px;'>REPOSSESSED</strong> - Domain has been confiscated - this is usually the result of a chargeback, fraud, abuse, etc.).</li><li><strong style='margin-left: 12px;'>SUSPENDED</strong> - Domain is in violation and has been suspended.</li><li><strong style='margin-left: 12px;'>TRANSFERRED</strong> - Domain has been transferred to another registrar.</li></ul>",
      }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reseller subaccount shopperid who can manage the domain' }),
    transferAwayEligibleAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date and time when this domain is eligible to transfer' }),
    transferProtected: z
      .boolean()
      .openapi({ description: 'Whether or not the domain is protected from transfer' }),
    verifications: VerificationsDomainV2Schema.exactOptional(),
  })
  .openapi({
    required: [
      'domainId',
      'domain',
      'status',
      'expirationProtected',
      'holdRegistrar',
      'locked',
      'privacy',
      'renewAuto',
      'renewDeadline',
      'transferProtected',
      'createdAt',
      'authCode',
      'nameServers',
      'contacts',
    ],
  })
  .openapi('DomainDetailV2')

const DomainForwardingMaskSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A short description of your website to display in search engine results.',
      }),
    keywords: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A list of comma-separated keywords that describes the content and purpose of your website.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Displays at the top of the browser window and in search results.' }),
  })
  .openapi({ required: [] })
  .openapi('DomainForwardingMask')

const DomainForwardingSchema = z
  .object({
    fqdn: z
      .string()
      .openapi({
        description:
          'The fqdn (domain or sub domain) to forward (ex somedomain.com or sub.somedomain.com)',
      }),
    mask: DomainForwardingMaskSchema.exactOptional(),
    type: z
      .enum(['MASKED', 'REDIRECT_PERMANENT', 'REDIRECT_TEMPORARY'])
      .default('REDIRECT_PERMANENT')
      .openapi({
        description:
          "The type of fowarding to implement<br/><ul><li><strong style='margin-left: 12px;'>MASKED</strong> - Prevents the forwarded domain or subdomain URL from displaying in the browser's address bar.</li><li><strong style='margin-left: 12px;'>REDIRECT_PERMANENT*</strong> - Redirects to the url you specified in the forwardTo field using a `301 Moved Permanently` HTTP response. The HTTP 301 response code tells user-agents (including search engines) that the location has permanently moved.</li><li><strong style='margin-left: 12px;'>REDIRECT_TEMPORARY</strong> - Redirects to the url you specified in the forwardTo field using a `302 Found` HTTP response. The HTTP 302 response code tells user-agents (including search engines) that the location has temporarily moved.</li></ul>",
      }),
    url: z
      .url()
      .openapi({
        description:
          'Forwards http(s) traffic to this destination url (ex. http://www.somedomain.com/)',
      }),
  })
  .openapi({ required: ['fqdn', 'type', 'url'] })
  .openapi('DomainForwarding')

const DomainForwardingCreateSchema = z
  .object({
    mask: DomainForwardingMaskSchema.exactOptional(),
    type: z
      .enum(['MASKED', 'REDIRECT_PERMANENT', 'REDIRECT_TEMPORARY'])
      .default('REDIRECT_PERMANENT')
      .openapi({
        description:
          "The type of fowarding to implement<br/><ul><li><strong style='margin-left: 12px;'>MASKED</strong> - Prevents the forwarded domain or subdomain URL from displaying in the browser's address bar.</li><li><strong style='margin-left: 12px;'>REDIRECT_PERMANENT*</strong> - Redirects to the url you specified in the forwardTo field using a `301 Moved Permanently` HTTP response. The HTTP 301 response code tells user-agents (including search engines) that the location has permanently moved.</li><li><strong style='margin-left: 12px;'>REDIRECT_TEMPORARY</strong> - Redirects to the url you specified in the forwardTo field using a `302 Found` HTTP response. The HTTP 302 response code tells user-agents (including search engines) that the location has temporarily moved.</li></ul>",
      }),
    url: z
      .url()
      .openapi({
        description:
          'Forwards http(s) traffic to this destination url (ex. http://www.somedomain.com/)',
      }),
  })
  .openapi({ required: ['type', 'url'] })
  .openapi('DomainForwardingCreate')

const DomainNotificationSchema = z
  .object({
    addedAt: z.string().default('').openapi({ description: 'The date the notification was added' }),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'The notification data for the given type as specifed by GET /v2/customers/{customerId}/domains/notifications/schema',
        default: '',
      }),
    notificationId: z
      .string()
      .default('')
      .openapi({
        description:
          'The notification ID to be used in POST /v2/customers/{customerId}/domains/notifications to acknowledge the notification',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A client provided identifier (via X-Request-Id header) indicating the request this notification is for',
      }),
    resource: z
      .string()
      .default('')
      .openapi({ description: 'The resource the notification pertains to.' }),
    resourceType: z
      .enum(['CONTACT', 'DOMAIN', 'HOST'])
      .openapi({ description: 'The type of resource the notification relates to' }),
    status: z
      .enum(['AWAITING', 'CANCELLED', 'FAILED', 'PENDING', 'SUCCESS'])
      .openapi({ description: 'The resulting status of the action.' }),
    type: z
      .enum([
        'AUTH_CODE_PURCHASE',
        'AUTH_CODE_REGENERATE',
        'AUTO_RENEWAL',
        'BACKORDER',
        'BACKORDER_PURCHASE',
        'BACKORDER_DELETE',
        'BACKORDER_UPDATE',
        'CONTACT_CREATE',
        'CONTACT_DELETE',
        'CONTACT_UPDATE',
        'DNS_VERIFICATION',
        'DNSSEC_CREATE',
        'DNSSEC_DELETE',
        'DOMAIN_DELETE',
        'DOMAIN_UPDATE',
        'DOMAIN_UPDATE_CONTACTS',
        'DOMAIN_UPDATE_NAME_SERVERS',
        'EXPIRY',
        'HOST_CREATE',
        'HOST_DELETE',
        'ICANN_VERIFICATION',
        'MIGRATE',
        'MIGRATE_IN',
        'PREMIUM',
        'PRIVACY_PURCHASE',
        'PRIVACY_DELETE',
        'REDEEM',
        'REGISTER',
        'RENEW',
        'RENEW_UNDO',
        'TRADE',
        'TRADE_CANCEL',
        'TRADE_PURCHASE',
        'TRADE_PURCHASE_AUTH_TEXT_MESSAGE',
        'TRADE_RESEND_AUTH_EMAIL',
        'TRANSFER',
        'TRANSFER_IN',
        'TRANSFER_IN_CANCEL',
        'TRANSFER_OUT',
        'TRANSFER_OUT_ACCEPT',
        'TRANSFER_OUT_REJECT',
        'TRANSFER_OUT_REQUESTED',
        'TRANSIT',
      ])
      .openapi({ description: 'The type of action the notification relates to' }),
  })
  .openapi({
    required: ['notificationId', 'type', 'resource', 'resourceType', 'status', 'addedAt'],
  })
  .openapi('DomainNotification')

const DomainNotificationTypeSchema = z
  .object({
    type: z
      .enum([
        'AUTH_CODE_PURCHASE',
        'AUTH_CODE_REGENERATE',
        'AUTO_RENEWAL',
        'BACKORDER',
        'BACKORDER_PURCHASE',
        'BACKORDER_DELETE',
        'BACKORDER_UPDATE',
        'CONTACT_CREATE',
        'CONTACT_DELETE',
        'CONTACT_UPDATE',
        'DNS_VERIFICATION',
        'DNSSEC_CREATE',
        'DNSSEC_DELETE',
        'DOMAIN_DELETE',
        'DOMAIN_UPDATE',
        'DOMAIN_UPDATE_CONTACTS',
        'DOMAIN_UPDATE_NAME_SERVERS',
        'EXPIRY',
        'HOST_CREATE',
        'HOST_DELETE',
        'ICANN_VERIFICATION',
        'MIGRATE',
        'MIGRATE_IN',
        'PREMIUM',
        'PRIVACY_PURCHASE',
        'PRIVACY_DELETE',
        'REDEEM',
        'REGISTER',
        'RENEW',
        'RENEW_UNDO',
        'TRADE',
        'TRADE_CANCEL',
        'TRADE_PURCHASE',
        'TRADE_PURCHASE_AUTH_TEXT_MESSAGE',
        'TRADE_RESEND_AUTH_EMAIL',
        'TRANSFER',
        'TRANSFER_IN',
        'TRANSFER_IN_CANCEL',
        'TRANSFER_OUT',
        'TRANSFER_OUT_ACCEPT',
        'TRANSFER_OUT_REJECT',
        'TRANSFER_OUT_REQUESTED',
        'TRANSIT',
      ])
      .openapi({ description: 'The notification type' }),
  })
  .openapi({ required: ['type'] })
  .openapi('DomainNotificationType')

const DomainPurchaseSchema = z
  .object({
    consent: ConsentSchema,
    contactAdmin: ContactSchema.exactOptional(),
    contactBilling: ContactSchema.exactOptional(),
    contactRegistrant: ContactSchema.exactOptional(),
    contactTech: ContactSchema.exactOptional(),
    domain: z
      .string()
      .openapi({
        description:
          'For internationalized domain names with non-ascii characters, the domain name is converted to punycode before format and pattern validation rules are checked',
      }),
    nameServers: z.array(z.string()).exactOptional(),
    period: z.int().min(1).max(10).default(1).exactOptional(),
    privacy: z.boolean().default(false).exactOptional(),
    renewAuto: z.boolean().default(true).exactOptional(),
  })
  .openapi({ required: ['domain', 'consent'] })
  .openapi('DomainPurchase')

const DomainPurchaseResponseSchema = z
  .object({
    currency: z
      .string()
      .default('USD')
      .exactOptional()
      .openapi({ description: 'Currency in which the `total` is listed' }),
    itemCount: z.int().openapi({ description: 'Number items included in the order' }),
    orderId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unique identifier of the order processed to purchase the domain',
      }),
    total: z.int().openapi({ description: 'Total cost of the domain and any selected add-ons' }),
  })
  .openapi({ required: ['orderId', 'itemCount', 'total'] })
  .openapi('DomainPurchaseResponse')

const DomainRedeemV2Schema = z
  .strictObject({ consent: ConsentRedemptionSchema })
  .openapi({ required: ['consent'] })
  .openapi('DomainRedeemV2')

const DomainRenewSchema = z
  .object({
    period: z
      .int()
      .min(1)
      .max(10)
      .exactOptional()
      .openapi({
        description:
          'Number of years to extend the Domain. Must not exceed maximum for TLD. When omitted, defaults to `period` specified during original purchase',
      }),
  })
  .openapi({ required: [] })
  .openapi('DomainRenew')

const DomainSuggestionSchema = z
  .object({ domain: z.string().openapi({ description: 'Suggested domain name' }) })
  .openapi({ required: ['domain'] })
  .openapi('DomainSuggestion')

const DomainSummarySchema = z
  .object({
    authCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Authorization code for transferring the Domain' }),
    contactAdmin: ContactSchema.exactOptional(),
    contactBilling: ContactSchema.exactOptional(),
    contactRegistrant: ContactSchema,
    contactTech: ContactSchema.exactOptional(),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date and time when this domain was created' }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time when this domain was deleted' }),
    domain: z.string().openapi({ description: 'Name of the domain' }),
    domainId: z.float64().openapi({ description: 'Unique identifier for this Domain' }),
    expirationProtected: z
      .boolean()
      .openapi({ description: 'Whether or not the domain is protected from expiration' }),
    expires: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time when this domain will expire' }),
    exposeWhois: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether or not the domain contact details should be shown in the WHOIS',
      }),
    holdRegistrar: z
      .boolean()
      .openapi({ description: 'Whether or not the domain is on-hold by the registrar' }),
    locked: z
      .boolean()
      .openapi({ description: 'Whether or not the domain is locked to prevent transfers' }),
    nameServers: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Fully-qualified domain names for DNS servers' }),
    privacy: z
      .boolean()
      .openapi({ description: 'Whether or not the domain has privacy protection' }),
    registrarCreatedAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date and time when this domain was created by the registrar' }),
    renewAuto: z
      .boolean()
      .openapi({ description: 'Whether or not the domain is configured to automatically renew' }),
    renewDeadline: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the domain must renew on' }),
    renewable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the domain is eligble for renewal based on status' }),
    status: z
      .string()
      .openapi({
        description:
          "Processing status of the domain<br/><ul>\n<li><strong style='margin-left: 12px;'>ACTIVE</strong> - All is well</li>\n<li><strong style='margin-left: 12px;'>AWAITING*</strong> - System is waiting for the end-user to complete an action</li>\n<li><strong style='margin-left: 12px;'>CANCELLED*</strong> - Domain has been cancelled, and may or may not be reclaimable</li>\n<li><strong style='margin-left: 12px;'>CONFISCATED</strong> - Domain has been confiscated, usually for abuse, chargeback, or fraud</li>\n<li><strong style='margin-left: 12px;'>DISABLED*</strong> - Domain has been disabled</li>\n<li><strong style='margin-left: 12px;'>EXCLUDED*</strong> - Domain has been excluded from Firehose registration</li>\n<li><strong style='margin-left: 12px;'>EXPIRED*</strong> - Domain has expired</li>\n<li><strong style='margin-left: 12px;'>FAILED*</strong> - Domain has failed a required action, and the system is no longer retrying</li>\n<li><strong style='margin-left: 12px;'>HELD*</strong> - Domain has been placed on hold, and likely requires intervention from Support</li>\n<li><strong style='margin-left: 12px;'>LOCKED*</strong> - Domain has been locked, and likely requires intervention from Support</li>\n<li><strong style='margin-left: 12px;'>PARKED*</strong> - Domain has been parked, and likely requires intervention from Support</li>\n<li><strong style='margin-left: 12px;'>PENDING*</strong> - Domain is working its way through an automated workflow</li>\n<li><strong style='margin-left: 12px;'>RESERVED*</strong> - Domain is reserved, and likely requires intervention from Support</li>\n<li><strong style='margin-left: 12px;'>REVERTED</strong> - Domain has been reverted, and likely requires intervention from Support</li>\n<li><strong style='margin-left: 12px;'>SUSPENDED*</strong> - Domain has been suspended, and likely requires intervention from Support</li>\n<li><strong style='margin-left: 12px;'>TRANSFERRED*</strong> - Domain has been transferred out</li>\n<li><strong style='margin-left: 12px;'>UNKNOWN</strong> - Domain is in an unknown state</li>\n<li><strong style='margin-left: 12px;'>UNLOCKED*</strong> - Domain has been unlocked, and likely requires intervention from Support</li>\n<li><strong style='margin-left: 12px;'>UNPARKED*</strong> - Domain has been unparked, and likely requires intervention from Support</li>\n<li><strong style='margin-left: 12px;'>UPDATED*</strong> - Domain ownership has been transferred to another account</li>\n</ul>",
      }),
    transferAwayEligibleAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time when this domain is eligible to transfer' }),
    transferProtected: z
      .boolean()
      .openapi({ description: 'Whether or not the domain is protected from transfer' }),
  })
  .openapi({
    required: [
      'domainId',
      'domain',
      'status',
      'expirationProtected',
      'holdRegistrar',
      'locked',
      'privacy',
      'renewAuto',
      'renewDeadline',
      'transferProtected',
      'createdAt',
      'contactRegistrant',
    ],
  })
  .openapi('DomainSummary')

const DomainTransferInSchema = z
  .object({
    authCode: z
      .string()
      .openapi({ description: 'Authorization code from registrar for transferring a domain' }),
    consent: ConsentSchema,
    contactAdmin: ContactSchema.exactOptional(),
    contactBilling: ContactSchema.exactOptional(),
    contactRegistrant: ContactSchema.exactOptional(),
    contactTech: ContactSchema.exactOptional(),
    period: z
      .int()
      .min(1)
      .max(10)
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'Can be more than 1 but no more than 10 years total including current registration length',
      }),
    privacy: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether or not privacy has been requested' }),
    renewAuto: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'Whether or not the domain should be configured to automatically renew',
      }),
  })
  .openapi({ required: ['authCode', 'consent'] })
  .openapi('DomainTransferIn')

const DomainUpdateSchema: z.ZodType<DomainUpdateType> = z
  .lazy(() =>
    z
      .object({
        consent: ConsentDomainUpdateSchema.exactOptional(),
        exposeWhois: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether or not the domain contact details should be shown in the WHOIS',
          }),
        locked: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether or not the domain should be locked to prevent transfers',
          }),
        nameServers: z
          .array(z.any())
          .exactOptional()
          .openapi({
            description:
              'Fully-qualified domain names for Name Servers to associate with the domain',
          }),
        renewAuto: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether or not the domain should be configured to automatically renew',
          }),
        subaccountId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Reseller subaccount shopperid who can manage the domain' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('DomainUpdate')

const DomainsContactsBulkSchema = z
  .object({
    contactAdmin: ContactSchema.exactOptional(),
    contactBilling: ContactSchema.exactOptional(),
    contactPresence: ContactSchema.exactOptional(),
    contactRegistrant: ContactSchema.exactOptional(),
    contactTech: ContactSchema.exactOptional(),
    domains: z
      .array(z.string())
      .openapi({
        description:
          'An array of domain names to be validated against. Alternatively, you can specify the extracted tlds. However, full domain names are required if the tld is `uk`',
      }),
    entityType: z
      .enum([
        'ABORIGINAL',
        'ASSOCIATION',
        'CITIZEN',
        'CORPORATION',
        'EDUCATIONAL',
        'GOVERNMENT',
        'HOSPITAL',
        'INDIAN_BAND',
        'LEGAL_REPRESENTATIVE',
        'LIBRARY_ARCHIVE_MUSEUM',
        'MARK_REGISTERED',
        'MARK_TRADE',
        'PARTNERSHIP',
        'POLITICAL_PARTY',
        'RESIDENT_PERMANENT',
        'TRUST',
        'UNION',
      ])
      .exactOptional()
      .openapi({ description: 'Canadian Presence Requirement (CA)' }),
  })
  .openapi({ required: ['domains'] })
  .openapi('DomainsContactsBulk')

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
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable, English description of the error' }),
  })
  .openapi({ required: ['code'] })
  .openapi('Error')

const ErrorFieldDomainContactsValidateSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Short identifier for the error, suitable for indicating the specific error within client code',
      }),
    domains: z
      .array(z.string())
      .openapi({
        description:
          'An array of domain names the error is for. If tlds are specified in the request, `domains` will contain tlds. For example, if `domains` in request is ["test1.com", "test2.uk", "net"], and the field is invalid for com and net, then one of the `fields` in response will have ["test1.com", "net"] as `domains`',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Human-readable, English description of the problem with the contents of the field',
      }),
    path: z
      .string()
      .openapi({
        description:
          '1) JSONPath referring to the field within the data containing an error<br/>or<br/>2) JSONPath referring to an object containing an error',
      }),
    pathRelated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'JSONPath referring to the field on the object referenced by `path` containing an error',
      }),
  })
  .openapi({ required: ['code', 'domains', 'path'] })
  .openapi('ErrorFieldDomainContactsValidate')

const ErrorDomainContactsValidateSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Short identifier for the error, suitable for indicating the specific error within client code',
      }),
    fields: z
      .array(ErrorFieldDomainContactsValidateSchema)
      .exactOptional()
      .openapi({
        description: 'List of the specific fields, and the errors found with their contents',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable, English description of the error' }),
    stack: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Stack trace indicating where the error occurred.<br/>NOTE: This attribute <strong>MAY</strong> be included for Development and Test environments. However, it <strong>MUST NOT</strong> be exposed from OTE nor Production systems',
      }),
  })
  .openapi({ required: ['code'] })
  .openapi('ErrorDomainContactsValidate')

const ErrorLimitSchema = z
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
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable, English description of the error' }),
    retryAfterSec: z
      .int()
      .openapi({ description: 'Number of seconds to wait before attempting a similar request' }),
  })
  .openapi({ required: ['retryAfterSec', 'code'] })
  .openapi('ErrorLimit')

const JsonDataTypeSchema = z
  .object({
    format: z.string().exactOptional(),
    pattern: z.string().exactOptional(),
    type: z.string(),
  })
  .openapi({ required: ['type', '$ref'] })
  .openapi('JsonDataType')

const JsonPropertySchema = z
  .object({
    defaultValue: z.string().exactOptional(),
    format: z.string().exactOptional(),
    items: z.object({}).exactOptional(),
    maxItems: z.int().exactOptional(),
    maximum: z.int().exactOptional(),
    minItems: z.int().exactOptional(),
    minimum: z.int().exactOptional(),
    pattern: z.string().exactOptional(),
    required: z.boolean(),
    type: z.string(),
  })
  .openapi({ required: ['type', '$ref', 'required'] })
  .openapi('JsonProperty')

const JsonSchemaSchema = z
  .object({
    id: z.string(),
    models: z.object({}),
    properties: z.object({}),
    required: z.array(z.string()),
  })
  .openapi({ required: ['id', 'properties', 'required', 'models'] })
  .openapi('JsonSchema')

const LegalAgreementSchema = z
  .object({
    agreementKey: z.string().openapi({ description: 'Unique identifier for the legal agreement' }),
    content: z
      .string()
      .openapi({ description: 'Contents of the legal agreement, suitable for embedding' }),
    title: z.string().openapi({ description: 'Title of the legal agreement' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ description: 'URL to a page containing the legal agreement' }),
  })
  .openapi({ required: ['agreementKey', 'title', 'content'] })
  .openapi('LegalAgreement')

const MaintenanceSchema = z
  .strictObject({
    createdAt: z
      .string()
      .openapi({ description: 'Date and time (UTC) when this maintenance was created' }),
    endsAt: z
      .string()
      .openapi({ description: 'Date and time (UTC) when this maintenance will complete' }),
    environment: z
      .enum(['OTE', 'PRODUCTION'])
      .openapi({
        description:
          "The environment on which the maintenance will be performed<br/><ul><li><strong style='margin-left: 12px;'>OTE</strong> - The Operational Testing Environment.</li><li><strong style='margin-left: 12px;'>PRODUCTION</strong> - The Live Production Environment.</li></ul>",
      }),
    maintenanceId: z.string().openapi({ description: 'The identifier for the system maintenance' }),
    modifiedAt: z
      .string()
      .openapi({ description: 'Date and time (UTC) when this maintenance was last modified' }),
    reason: z
      .enum(['EMERGENCY', 'PLANNED'])
      .openapi({
        description:
          "The reason for the maintenance being performed<br/><ul><li><strong style='margin-left: 12px;'>EMERGENCY</strong> - Unexpected Emergency maintenance.</li><li><strong style='margin-left: 12px;'>PLANNED</strong> - Planned system maintenance.</li></ul>",
      }),
    startsAt: z
      .string()
      .openapi({ description: 'Date and time (UTC) when this maintenance will start' }),
    status: z
      .enum(['ACTIVE', 'CANCELLED'])
      .openapi({
        description:
          "The status of maintenance<br/><ul><li><strong style='margin-left: 12px;'>ACTIVE</strong> - The upcoming maintenance is active.</li><li><strong style='margin-left: 12px;'>CANCELLED</strong> - The upcoming maintenance has been cancelled.</li></ul>",
      }),
    summary: z.string().openapi({ description: 'A brief description of what is being performed' }),
    tlds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of tlds that are in maintenance.  Generally only applies when `type` is REGISTRY',
      }),
    type: z
      .enum(['API', 'REGISTRY', 'UI'])
      .openapi({
        description:
          "The type of maintenance being performed<br/><ul><li><strong style='margin-left: 12px;'>API</strong> - Programmatic Api components.</li><li><strong style='margin-left: 12px;'>REGISTRY</strong> - The underlying Registry providing the tld(s).</li><li><strong style='margin-left: 12px;'>UI</strong> - User Interface components.</li></ul>",
      }),
  })
  .openapi({
    required: [
      'createdAt',
      'endsAt',
      'environment',
      'maintenanceId',
      'modifiedAt',
      'reason',
      'startsAt',
      'status',
      'summary',
      'type',
    ],
  })
  .openapi('Maintenance')

const MaintenanceSystemSchema = z
  .strictObject({
    impact: z
      .array(z.enum(['DELAYED', 'DOWN', 'NON_AUTHORITATIVE', 'PARTIAL']))
      .openapi({
        description:
          "The impact of the maintenance to the system<br/><ul><li><strong style='margin-left: 12px;'>DELAYED</strong> - This response generally applies to systems where the request is queued up and processed once the system is back online.</li><li><strong style='margin-left: 12px;'>DOWN</strong> - The system will be entirely offline; errors are expected.</li><li><strong style='margin-left: 12px;'>NON_AUTHORITATIVE</strong> - This response generally applies to DOMAIN_CHECKS and DOMAIN_MANAGEMENT `system` values where a cached answer will be supplied.</li><li><strong style='margin-left: 12px;'>PARTIAL</strong> - The system will experience partial feature outages; some errors are expected.</li></ul>",
      }),
    name: z
      .enum([
        'DOMAIN_CHECKS',
        'DOMAIN_MANAGEMENT',
        'DOMAIN_REGISTRATION',
        'DOMAIN_REGISTRATION_DATA',
        'DOMAIN_RESOLUTION',
        'RESELLER_ADMIN_PORTAL',
        'RESELLER_STOREFRONT',
      ])
      .openapi({
        description:
          "The name of the system affected by the maintenance<br/><ul><li><strong style='margin-left: 12px;'>DOMAIN_CHECKS</strong> - Refers to domain availability checks.</li><li><strong style='margin-left: 12px;'>DOMAIN_MANAGEMENT</strong> - Refers to domain management options including various update options on the domain, contacts, records, etc.</li><li><strong style='margin-left: 12px;'>DOMAIN_REGISTRATION</strong> - Refers to domain registrations, renewals, transfers.</li><li><strong style='margin-left: 12px;'>DOMAIN_REGISTRATION_DATA</strong> - Refers to RDAP and WHOIS Service queries for domains.</li><li><strong style='margin-left: 12px;'>DOMAIN_RESOLUTION</strong> - Refers to DNS resolution for domains.</li><li><strong style='margin-left: 12px;'>RESELLER_ADMIN_PORTAL</strong> - Refers to Admin portals to manage the reseller account and settings.</li><li><strong style='margin-left: 12px;'>RESELLER_STOREFRONT</strong> - Refers to the Reseller Storefront features (Standard and Custom).</li></ul>",
      }),
  })
  .openapi({ required: ['name', 'impact'] })
  .openapi('MaintenanceSystem')

const MaintenanceDetailSchema = z
  .strictObject({
    createdAt: z
      .string()
      .openapi({ description: 'Date and time (UTC) when this maintenance was created' }),
    endsAt: z
      .string()
      .openapi({ description: 'Date and time (UTC) when this maintenance will complete' }),
    environment: z
      .enum(['OTE', 'PRODUCTION'])
      .openapi({
        description:
          "The environment on which the maintenance will be performed<br/><ul><li><strong style='margin-left: 12px;'>OTE</strong> - The Operational Testing Environment.</li><li><strong style='margin-left: 12px;'>PRODUCTION</strong> - The Live Production Environment.</li></ul>",
      }),
    maintenanceId: z.string().openapi({ description: 'The identifier for the system maintenance' }),
    modifiedAt: z
      .string()
      .openapi({ description: 'Date and time (UTC) when this maintenance was last modified' }),
    reason: z
      .enum(['EMERGENCY', 'PLANNED'])
      .openapi({
        description:
          "The reason for the maintenance being performed<br/><ul><li><strong style='margin-left: 12px;'>EMERGENCY</strong> - Unexpected Emergency maintenance.</li><li><strong style='margin-left: 12px;'>PLANNED</strong> - Planned system maintenance.</li></ul>",
      }),
    startsAt: z
      .string()
      .openapi({ description: 'Date and time (UTC) when this maintenance will start' }),
    status: z
      .enum(['ACTIVE', 'CANCELLED'])
      .openapi({
        description:
          "The status of maintenance<br/><ul><li><strong style='margin-left: 12px;'>ACTIVE</strong> - The upcoming maintenance is active.</li><li><strong style='margin-left: 12px;'>CANCELLED</strong> - The upcoming maintenance has been cancelled.</li></ul>",
      }),
    summary: z.string().openapi({ description: 'A brief description of what is being performed' }),
    systems: z
      .array(MaintenanceSystemSchema)
      .exactOptional()
      .openapi({ description: 'List of systems that are impacted by the maintenance.' }),
    tlds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of tlds that are in maintenance.  Generally only applies when `type` is REGISTRY',
      }),
    type: z
      .enum(['API', 'REGISTRY', 'UI'])
      .openapi({
        description:
          "The type of maintenance being performed<br/><ul><li><strong style='margin-left: 12px;'>API</strong> - Programmatic Api components.</li><li><strong style='margin-left: 12px;'>REGISTRY</strong> - The underlying Registry providing the tld(s).</li><li><strong style='margin-left: 12px;'>UI</strong> - User Interface components.</li></ul>",
      }),
  })
  .openapi({
    required: [
      'createdAt',
      'endsAt',
      'environment',
      'maintenanceId',
      'modifiedAt',
      'reason',
      'startsAt',
      'status',
      'summary',
      'type',
    ],
  })
  .openapi('MaintenanceDetail')

const PrivacyPurchaseSchema = z
  .object({ consent: ConsentSchema })
  .openapi({ required: ['consent'] })
  .openapi('PrivacyPurchase')

const RealNameValidationSchema = z
  .object({
    status: z
      .enum([
        'APPROVED',
        'PENDING',
        'PENDING_ASSOCIATION_WITH_DOMAIN',
        'PENDING_SUBMISSION_TO_VERIFICATION_SERVICE',
        'PENDING_VERIFICATION_SERVICE_REPLY',
        'PENDING_SUBMISSION_TO_REGISTRY',
        'PENDING_REGISTRY_REPLY',
        'PENDING_DOMAIN_UPDATE',
        'REJECTED',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RealNameValidation')

const TldSummarySchema = z
  .object({
    name: z.string().openapi({ description: 'Name of the top-level domain' }),
    type: z
      .enum(['COUNTRY_CODE', 'GENERIC'])
      .default('GENERIC')
      .openapi({ description: 'Type of the top-level domain' }),
  })
  .openapi({ required: ['name', 'type'] })
  .openapi('TldSummary')

const DomainSchema = z
  .object({ id: z.float64().exactOptional() })
  .openapi({ required: [] })
  .openapi('Domain')

const DomainPurchaseRequestBody = {
  description:
    'An instance document expected to match the JSON schema returned by `./schema/{tld}`',
  content: {
    'application/json': { schema: DomainPurchaseSchema },
    'application/xml': { schema: DomainPurchaseSchema },
    'text/xml': { schema: DomainPurchaseSchema },
  },
  required: true,
}

export const getV1DomainsRoute = createRoute({
  method: 'get',
  path: '/v1/domains',
  tags: ['v1'],
  summary: 'Retrieve a list of Domains for the specified Shopper',
  operationId: 'list',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopper ID whose domains are to be retrieved',
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      statuses: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.enum([
              'ACTIVE',
              'AWAITING_CLAIM_ACK',
              'AWAITING_DOCUMENT_AFTER_TRANSFER',
              'AWAITING_DOCUMENT_AFTER_UPDATE_ACCOUNT',
              'AWAITING_DOCUMENT_UPLOAD',
              'AWAITING_FAILED_TRANSFER_WHOIS_PRIVACY',
              'AWAITING_PAYMENT',
              'AWAITING_RENEWAL_TRANSFER_IN_COMPLETE',
              'AWAITING_TRANSFER_IN_ACK',
              'AWAITING_TRANSFER_IN_AUTH',
              'AWAITING_TRANSFER_IN_AUTO',
              'AWAITING_TRANSFER_IN_WHOIS',
              'AWAITING_TRANSFER_IN_WHOIS_FIX',
              'AWAITING_VERIFICATION_ICANN',
              'AWAITING_VERIFICATION_ICANN_MANUAL',
              'CANCELLED',
              'CANCELLED_HELD',
              'CANCELLED_REDEEMABLE',
              'CANCELLED_TRANSFER',
              'CONFISCATED',
              'DISABLED_SPECIAL',
              'EXCLUDED_INVALID_CLAIM_FIREHOSE',
              'EXPIRED_REASSIGNED',
              'FAILED_BACKORDER_CAPTURE',
              'FAILED_DROP_IMMEDIATE_THEN_ADD',
              'FAILED_PRE_REGISTRATION',
              'FAILED_REDEMPTION',
              'FAILED_REDEMPTION_REPORT',
              'FAILED_REGISTRATION',
              'FAILED_REGISTRATION_FIREHOSE',
              'FAILED_RESTORATION_REDEMPTION_MOCK',
              'FAILED_SETUP',
              'FAILED_TRANSFER_IN',
              'FAILED_TRANSFER_IN_BAD_STATUS',
              'FAILED_TRANSFER_IN_REGISTRY',
              'HELD_COURT_ORDERED',
              'HELD_DISPUTED',
              'HELD_EXPIRATION_PROTECTION',
              'HELD_EXPIRED_REDEMPTION_MOCK',
              'HELD_REGISTRAR_ADD',
              'HELD_REGISTRAR_REMOVE',
              'HELD_SHOPPER',
              'HELD_TEMPORARY',
              'LOCKED_ABUSE',
              'LOCKED_COPYRIGHT',
              'LOCKED_REGISTRY',
              'LOCKED_SUPER',
              'PARKED_AND_HELD',
              'PARKED_EXPIRED',
              'PARKED_VERIFICATION_ICANN',
              'PENDING_ABORT_CANCEL_SETUP',
              'PENDING_AGREEMENT_PRE_REGISTRATION',
              'PENDING_APPLY_RENEWAL_CREDITS',
              'PENDING_BACKORDER_CAPTURE',
              'PENDING_BLOCKED_REGISTRY',
              'PENDING_CANCEL_REGISTRANT_PROFILE',
              'PENDING_COMPLETE_REDEMPTION_WITHOUT_RECEIPT',
              'PENDING_COMPLETE_REGISTRANT_PROFILE',
              'PENDING_COO',
              'PENDING_COO_COMPLETE',
              'PENDING_DNS',
              'PENDING_DNS_ACTIVE',
              'PENDING_DNS_INACTIVE',
              'PENDING_DOCUMENT_VALIDATION',
              'PENDING_DOCUMENT_VERIFICATION',
              'PENDING_DROP_IMMEDIATE',
              'PENDING_DROP_IMMEDIATE_THEN_ADD',
              'PENDING_EPP_CREATE',
              'PENDING_EPP_DELETE',
              'PENDING_EPP_UPDATE',
              'PENDING_ESCALATION_REGISTRY',
              'PENDING_EXPIRATION',
              'PENDING_EXPIRATION_RESPONSE',
              'PENDING_EXPIRATION_SYNC',
              'PENDING_EXPIRED_REASSIGNMENT',
              'PENDING_EXPIRE_AUTO_ADD',
              'PENDING_EXTEND_REGISTRANT_PROFILE',
              'PENDING_FAILED_COO',
              'PENDING_FAILED_EPP_CREATE',
              'PENDING_FAILED_HELD',
              'PENDING_FAILED_PURCHASE_PREMIUM',
              'PENDING_FAILED_RECONCILE_FIREHOSE',
              'PENDING_FAILED_REDEMPTION_WITHOUT_RECEIPT',
              'PENDING_FAILED_RELEASE_PREMIUM',
              'PENDING_FAILED_RENEW_EXPIRATION_PROTECTION',
              'PENDING_FAILED_RESERVE_PREMIUM',
              'PENDING_FAILED_SUBMIT_FIREHOSE',
              'PENDING_FAILED_TRANSFER_ACK_PREMIUM',
              'PENDING_FAILED_TRANSFER_IN_ACK_PREMIUM',
              'PENDING_FAILED_TRANSFER_IN_PREMIUM',
              'PENDING_FAILED_TRANSFER_PREMIUM',
              'PENDING_FAILED_TRANSFER_SUBMIT_PREMIUM',
              'PENDING_FAILED_UNLOCK_PREMIUM',
              'PENDING_FAILED_UPDATE_API',
              'PENDING_FRAUD_VERIFICATION',
              'PENDING_FRAUD_VERIFIED',
              'PENDING_GET_CONTACTS',
              'PENDING_GET_HOSTS',
              'PENDING_GET_NAME_SERVERS',
              'PENDING_GET_STATUS',
              'PENDING_HOLD_ESCROW',
              'PENDING_HOLD_REDEMPTION',
              'PENDING_LOCK_CLIENT_REMOVE',
              'PENDING_LOCK_DATA_QUALITY',
              'PENDING_LOCK_THEN_HOLD_REDEMPTION',
              'PENDING_PARKING_DETERMINATION',
              'PENDING_PARK_INVALID_WHOIS',
              'PENDING_PARK_INVALID_WHOIS_REMOVAL',
              'PENDING_PURCHASE_PREMIUM',
              'PENDING_RECONCILE',
              'PENDING_RECONCILE_FIREHOSE',
              'PENDING_REDEMPTION',
              'PENDING_REDEMPTION_REPORT',
              'PENDING_REDEMPTION_REPORT_COMPLETE',
              'PENDING_REDEMPTION_REPORT_SUBMITTED',
              'PENDING_REDEMPTION_WITHOUT_RECEIPT',
              'PENDING_REDEMPTION_WITHOUT_RECEIPT_MOCK',
              'PENDING_RELEASE_PREMIUM',
              'PENDING_REMOVAL',
              'PENDING_REMOVAL_HELD',
              'PENDING_REMOVAL_PARKED',
              'PENDING_REMOVAL_UNPARK',
              'PENDING_RENEWAL',
              'PENDING_RENEW_EXPIRATION_PROTECTION',
              'PENDING_RENEW_INFINITE',
              'PENDING_RENEW_LOCKED',
              'PENDING_RENEW_WITHOUT_RECEIPT',
              'PENDING_REPORT_REDEMPTION_WITHOUT_RECEIPT',
              'PENDING_RESERVE_PREMIUM',
              'PENDING_RESET_VERIFICATION_ICANN',
              'PENDING_RESPONSE_FIREHOSE',
              'PENDING_RESTORATION',
              'PENDING_RESTORATION_INACTIVE',
              'PENDING_RESTORATION_REDEMPTION_MOCK',
              'PENDING_RETRY_EPP_CREATE',
              'PENDING_RETRY_HELD',
              'PENDING_SEND_AUTH_CODE',
              'PENDING_SETUP',
              'PENDING_SETUP_ABANDON',
              'PENDING_SETUP_AGREEMENT_LANDRUSH',
              'PENDING_SETUP_AGREEMENT_SUNRISE2_A',
              'PENDING_SETUP_AGREEMENT_SUNRISE2_B',
              'PENDING_SETUP_AGREEMENT_SUNRISE2_C',
              'PENDING_SETUP_AUTH',
              'PENDING_SETUP_DNS',
              'PENDING_SETUP_FAILED',
              'PENDING_SETUP_REVIEW',
              'PENDING_SETUP_SUNRISE',
              'PENDING_SETUP_SUNRISE_PRE',
              'PENDING_SETUP_SUNRISE_RESPONSE',
              'PENDING_SUBMIT_FAILURE',
              'PENDING_SUBMIT_FIREHOSE',
              'PENDING_SUBMIT_HOLD_FIREHOSE',
              'PENDING_SUBMIT_HOLD_LANDRUSH',
              'PENDING_SUBMIT_HOLD_SUNRISE',
              'PENDING_SUBMIT_LANDRUSH',
              'PENDING_SUBMIT_RESPONSE_FIREHOSE',
              'PENDING_SUBMIT_RESPONSE_LANDRUSH',
              'PENDING_SUBMIT_RESPONSE_SUNRISE',
              'PENDING_SUBMIT_SUCCESS_FIREHOSE',
              'PENDING_SUBMIT_SUCCESS_LANDRUSH',
              'PENDING_SUBMIT_SUCCESS_SUNRISE',
              'PENDING_SUBMIT_SUNRISE',
              'PENDING_SUBMIT_WAITING_LANDRUSH',
              'PENDING_SUCCESS_PRE_REGISTRATION',
              'PENDING_SUSPENDED_DATA_QUALITY',
              'PENDING_TRANSFER_ACK_PREMIUM',
              'PENDING_TRANSFER_IN',
              'PENDING_TRANSFER_IN_ACK',
              'PENDING_TRANSFER_IN_ACK_PREMIUM',
              'PENDING_TRANSFER_IN_BAD_REGISTRANT',
              'PENDING_TRANSFER_IN_CANCEL',
              'PENDING_TRANSFER_IN_CANCEL_REGISTRY',
              'PENDING_TRANSFER_IN_COMPLETE_ACK',
              'PENDING_TRANSFER_IN_DELETE',
              'PENDING_TRANSFER_IN_LOCK',
              'PENDING_TRANSFER_IN_NACK',
              'PENDING_TRANSFER_IN_NOTIFICATION',
              'PENDING_TRANSFER_IN_PREMIUM',
              'PENDING_TRANSFER_IN_RELEASE',
              'PENDING_TRANSFER_IN_RESPONSE',
              'PENDING_TRANSFER_IN_UNDERAGE',
              'PENDING_TRANSFER_OUT',
              'PENDING_TRANSFER_OUT_ACK',
              'PENDING_TRANSFER_OUT_NACK',
              'PENDING_TRANSFER_OUT_PREMIUM',
              'PENDING_TRANSFER_OUT_UNDERAGE',
              'PENDING_TRANSFER_OUT_VALIDATION',
              'PENDING_TRANSFER_PREMIUM',
              'PENDING_TRANSFER_PREMUIM',
              'PENDING_TRANSFER_SUBMIT_PREMIUM',
              'PENDING_UNLOCK_DATA_QUALITY',
              'PENDING_UNLOCK_PREMIUM',
              'PENDING_UPDATE',
              'PENDING_UPDATED_REGISTRANT_DATA_QUALITY',
              'PENDING_UPDATE_ACCOUNT',
              'PENDING_UPDATE_API',
              'PENDING_UPDATE_API_RESPONSE',
              'PENDING_UPDATE_AUTH',
              'PENDING_UPDATE_CONTACTS',
              'PENDING_UPDATE_CONTACTS_PRIVACY',
              'PENDING_UPDATE_DNS',
              'PENDING_UPDATE_DNS_SECURITY',
              'PENDING_UPDATE_ELIGIBILITY',
              'PENDING_UPDATE_EPP_CONTACTS',
              'PENDING_UPDATE_MEMBERSHIP',
              'PENDING_UPDATE_OWNERSHIP',
              'PENDING_UPDATE_OWNERSHIP_AUTH_AUCTION',
              'PENDING_UPDATE_OWNERSHIP_HELD',
              'PENDING_UPDATE_REGISTRANT',
              'PENDING_UPDATE_REPO',
              'PENDING_VALIDATION_DATA_QUALITY',
              'PENDING_VERIFICATION_FRAUD',
              'PENDING_VERIFICATION_STATUS',
              'PENDING_VERIFY_REGISTRANT_DATA_QUALITY',
              'RESERVED',
              'RESERVED_PREMIUM',
              'REVERTED',
              'SUSPENDED_VERIFICATION_ICANN',
              'TRANSFERRED_OUT',
              'UNLOCKED_ABUSE',
              'UNLOCKED_SUPER',
              'UNPARKED_AND_UNHELD',
              'UPDATED_OWNERSHIP',
              'UPDATED_OWNERSHIP_HELD',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Only include results with `status` value in the specified set',
            explode: false,
            in: 'query',
            name: 'statuses',
            required: false,
            schema: {
              items: {
                enum: [
                  'ACTIVE',
                  'AWAITING_CLAIM_ACK',
                  'AWAITING_DOCUMENT_AFTER_TRANSFER',
                  'AWAITING_DOCUMENT_AFTER_UPDATE_ACCOUNT',
                  'AWAITING_DOCUMENT_UPLOAD',
                  'AWAITING_FAILED_TRANSFER_WHOIS_PRIVACY',
                  'AWAITING_PAYMENT',
                  'AWAITING_RENEWAL_TRANSFER_IN_COMPLETE',
                  'AWAITING_TRANSFER_IN_ACK',
                  'AWAITING_TRANSFER_IN_AUTH',
                  'AWAITING_TRANSFER_IN_AUTO',
                  'AWAITING_TRANSFER_IN_WHOIS',
                  'AWAITING_TRANSFER_IN_WHOIS_FIX',
                  'AWAITING_VERIFICATION_ICANN',
                  'AWAITING_VERIFICATION_ICANN_MANUAL',
                  'CANCELLED',
                  'CANCELLED_HELD',
                  'CANCELLED_REDEEMABLE',
                  'CANCELLED_TRANSFER',
                  'CONFISCATED',
                  'DISABLED_SPECIAL',
                  'EXCLUDED_INVALID_CLAIM_FIREHOSE',
                  'EXPIRED_REASSIGNED',
                  'FAILED_BACKORDER_CAPTURE',
                  'FAILED_DROP_IMMEDIATE_THEN_ADD',
                  'FAILED_PRE_REGISTRATION',
                  'FAILED_REDEMPTION',
                  'FAILED_REDEMPTION_REPORT',
                  'FAILED_REGISTRATION',
                  'FAILED_REGISTRATION_FIREHOSE',
                  'FAILED_RESTORATION_REDEMPTION_MOCK',
                  'FAILED_SETUP',
                  'FAILED_TRANSFER_IN',
                  'FAILED_TRANSFER_IN_BAD_STATUS',
                  'FAILED_TRANSFER_IN_REGISTRY',
                  'HELD_COURT_ORDERED',
                  'HELD_DISPUTED',
                  'HELD_EXPIRATION_PROTECTION',
                  'HELD_EXPIRED_REDEMPTION_MOCK',
                  'HELD_REGISTRAR_ADD',
                  'HELD_REGISTRAR_REMOVE',
                  'HELD_SHOPPER',
                  'HELD_TEMPORARY',
                  'LOCKED_ABUSE',
                  'LOCKED_COPYRIGHT',
                  'LOCKED_REGISTRY',
                  'LOCKED_SUPER',
                  'PARKED_AND_HELD',
                  'PARKED_EXPIRED',
                  'PARKED_VERIFICATION_ICANN',
                  'PENDING_ABORT_CANCEL_SETUP',
                  'PENDING_AGREEMENT_PRE_REGISTRATION',
                  'PENDING_APPLY_RENEWAL_CREDITS',
                  'PENDING_BACKORDER_CAPTURE',
                  'PENDING_BLOCKED_REGISTRY',
                  'PENDING_CANCEL_REGISTRANT_PROFILE',
                  'PENDING_COMPLETE_REDEMPTION_WITHOUT_RECEIPT',
                  'PENDING_COMPLETE_REGISTRANT_PROFILE',
                  'PENDING_COO',
                  'PENDING_COO_COMPLETE',
                  'PENDING_DNS',
                  'PENDING_DNS_ACTIVE',
                  'PENDING_DNS_INACTIVE',
                  'PENDING_DOCUMENT_VALIDATION',
                  'PENDING_DOCUMENT_VERIFICATION',
                  'PENDING_DROP_IMMEDIATE',
                  'PENDING_DROP_IMMEDIATE_THEN_ADD',
                  'PENDING_EPP_CREATE',
                  'PENDING_EPP_DELETE',
                  'PENDING_EPP_UPDATE',
                  'PENDING_ESCALATION_REGISTRY',
                  'PENDING_EXPIRATION',
                  'PENDING_EXPIRATION_RESPONSE',
                  'PENDING_EXPIRATION_SYNC',
                  'PENDING_EXPIRED_REASSIGNMENT',
                  'PENDING_EXPIRE_AUTO_ADD',
                  'PENDING_EXTEND_REGISTRANT_PROFILE',
                  'PENDING_FAILED_COO',
                  'PENDING_FAILED_EPP_CREATE',
                  'PENDING_FAILED_HELD',
                  'PENDING_FAILED_PURCHASE_PREMIUM',
                  'PENDING_FAILED_RECONCILE_FIREHOSE',
                  'PENDING_FAILED_REDEMPTION_WITHOUT_RECEIPT',
                  'PENDING_FAILED_RELEASE_PREMIUM',
                  'PENDING_FAILED_RENEW_EXPIRATION_PROTECTION',
                  'PENDING_FAILED_RESERVE_PREMIUM',
                  'PENDING_FAILED_SUBMIT_FIREHOSE',
                  'PENDING_FAILED_TRANSFER_ACK_PREMIUM',
                  'PENDING_FAILED_TRANSFER_IN_ACK_PREMIUM',
                  'PENDING_FAILED_TRANSFER_IN_PREMIUM',
                  'PENDING_FAILED_TRANSFER_PREMIUM',
                  'PENDING_FAILED_TRANSFER_SUBMIT_PREMIUM',
                  'PENDING_FAILED_UNLOCK_PREMIUM',
                  'PENDING_FAILED_UPDATE_API',
                  'PENDING_FRAUD_VERIFICATION',
                  'PENDING_FRAUD_VERIFIED',
                  'PENDING_GET_CONTACTS',
                  'PENDING_GET_HOSTS',
                  'PENDING_GET_NAME_SERVERS',
                  'PENDING_GET_STATUS',
                  'PENDING_HOLD_ESCROW',
                  'PENDING_HOLD_REDEMPTION',
                  'PENDING_LOCK_CLIENT_REMOVE',
                  'PENDING_LOCK_DATA_QUALITY',
                  'PENDING_LOCK_THEN_HOLD_REDEMPTION',
                  'PENDING_PARKING_DETERMINATION',
                  'PENDING_PARK_INVALID_WHOIS',
                  'PENDING_PARK_INVALID_WHOIS_REMOVAL',
                  'PENDING_PURCHASE_PREMIUM',
                  'PENDING_RECONCILE',
                  'PENDING_RECONCILE_FIREHOSE',
                  'PENDING_REDEMPTION',
                  'PENDING_REDEMPTION_REPORT',
                  'PENDING_REDEMPTION_REPORT_COMPLETE',
                  'PENDING_REDEMPTION_REPORT_SUBMITTED',
                  'PENDING_REDEMPTION_WITHOUT_RECEIPT',
                  'PENDING_REDEMPTION_WITHOUT_RECEIPT_MOCK',
                  'PENDING_RELEASE_PREMIUM',
                  'PENDING_REMOVAL',
                  'PENDING_REMOVAL_HELD',
                  'PENDING_REMOVAL_PARKED',
                  'PENDING_REMOVAL_UNPARK',
                  'PENDING_RENEWAL',
                  'PENDING_RENEW_EXPIRATION_PROTECTION',
                  'PENDING_RENEW_INFINITE',
                  'PENDING_RENEW_LOCKED',
                  'PENDING_RENEW_WITHOUT_RECEIPT',
                  'PENDING_REPORT_REDEMPTION_WITHOUT_RECEIPT',
                  'PENDING_RESERVE_PREMIUM',
                  'PENDING_RESET_VERIFICATION_ICANN',
                  'PENDING_RESPONSE_FIREHOSE',
                  'PENDING_RESTORATION',
                  'PENDING_RESTORATION_INACTIVE',
                  'PENDING_RESTORATION_REDEMPTION_MOCK',
                  'PENDING_RETRY_EPP_CREATE',
                  'PENDING_RETRY_HELD',
                  'PENDING_SEND_AUTH_CODE',
                  'PENDING_SETUP',
                  'PENDING_SETUP_ABANDON',
                  'PENDING_SETUP_AGREEMENT_LANDRUSH',
                  'PENDING_SETUP_AGREEMENT_SUNRISE2_A',
                  'PENDING_SETUP_AGREEMENT_SUNRISE2_B',
                  'PENDING_SETUP_AGREEMENT_SUNRISE2_C',
                  'PENDING_SETUP_AUTH',
                  'PENDING_SETUP_DNS',
                  'PENDING_SETUP_FAILED',
                  'PENDING_SETUP_REVIEW',
                  'PENDING_SETUP_SUNRISE',
                  'PENDING_SETUP_SUNRISE_PRE',
                  'PENDING_SETUP_SUNRISE_RESPONSE',
                  'PENDING_SUBMIT_FAILURE',
                  'PENDING_SUBMIT_FIREHOSE',
                  'PENDING_SUBMIT_HOLD_FIREHOSE',
                  'PENDING_SUBMIT_HOLD_LANDRUSH',
                  'PENDING_SUBMIT_HOLD_SUNRISE',
                  'PENDING_SUBMIT_LANDRUSH',
                  'PENDING_SUBMIT_RESPONSE_FIREHOSE',
                  'PENDING_SUBMIT_RESPONSE_LANDRUSH',
                  'PENDING_SUBMIT_RESPONSE_SUNRISE',
                  'PENDING_SUBMIT_SUCCESS_FIREHOSE',
                  'PENDING_SUBMIT_SUCCESS_LANDRUSH',
                  'PENDING_SUBMIT_SUCCESS_SUNRISE',
                  'PENDING_SUBMIT_SUNRISE',
                  'PENDING_SUBMIT_WAITING_LANDRUSH',
                  'PENDING_SUCCESS_PRE_REGISTRATION',
                  'PENDING_SUSPENDED_DATA_QUALITY',
                  'PENDING_TRANSFER_ACK_PREMIUM',
                  'PENDING_TRANSFER_IN',
                  'PENDING_TRANSFER_IN_ACK',
                  'PENDING_TRANSFER_IN_ACK_PREMIUM',
                  'PENDING_TRANSFER_IN_BAD_REGISTRANT',
                  'PENDING_TRANSFER_IN_CANCEL',
                  'PENDING_TRANSFER_IN_CANCEL_REGISTRY',
                  'PENDING_TRANSFER_IN_COMPLETE_ACK',
                  'PENDING_TRANSFER_IN_DELETE',
                  'PENDING_TRANSFER_IN_LOCK',
                  'PENDING_TRANSFER_IN_NACK',
                  'PENDING_TRANSFER_IN_NOTIFICATION',
                  'PENDING_TRANSFER_IN_PREMIUM',
                  'PENDING_TRANSFER_IN_RELEASE',
                  'PENDING_TRANSFER_IN_RESPONSE',
                  'PENDING_TRANSFER_IN_UNDERAGE',
                  'PENDING_TRANSFER_OUT',
                  'PENDING_TRANSFER_OUT_ACK',
                  'PENDING_TRANSFER_OUT_NACK',
                  'PENDING_TRANSFER_OUT_PREMIUM',
                  'PENDING_TRANSFER_OUT_UNDERAGE',
                  'PENDING_TRANSFER_OUT_VALIDATION',
                  'PENDING_TRANSFER_PREMIUM',
                  'PENDING_TRANSFER_PREMUIM',
                  'PENDING_TRANSFER_SUBMIT_PREMIUM',
                  'PENDING_UNLOCK_DATA_QUALITY',
                  'PENDING_UNLOCK_PREMIUM',
                  'PENDING_UPDATE',
                  'PENDING_UPDATED_REGISTRANT_DATA_QUALITY',
                  'PENDING_UPDATE_ACCOUNT',
                  'PENDING_UPDATE_API',
                  'PENDING_UPDATE_API_RESPONSE',
                  'PENDING_UPDATE_AUTH',
                  'PENDING_UPDATE_CONTACTS',
                  'PENDING_UPDATE_CONTACTS_PRIVACY',
                  'PENDING_UPDATE_DNS',
                  'PENDING_UPDATE_DNS_SECURITY',
                  'PENDING_UPDATE_ELIGIBILITY',
                  'PENDING_UPDATE_EPP_CONTACTS',
                  'PENDING_UPDATE_MEMBERSHIP',
                  'PENDING_UPDATE_OWNERSHIP',
                  'PENDING_UPDATE_OWNERSHIP_AUTH_AUCTION',
                  'PENDING_UPDATE_OWNERSHIP_HELD',
                  'PENDING_UPDATE_REGISTRANT',
                  'PENDING_UPDATE_REPO',
                  'PENDING_VALIDATION_DATA_QUALITY',
                  'PENDING_VERIFICATION_FRAUD',
                  'PENDING_VERIFICATION_STATUS',
                  'PENDING_VERIFY_REGISTRANT_DATA_QUALITY',
                  'RESERVED',
                  'RESERVED_PREMIUM',
                  'REVERTED',
                  'SUSPENDED_VERIFICATION_ICANN',
                  'TRANSFERRED_OUT',
                  'UNLOCKED_ABUSE',
                  'UNLOCKED_SUPER',
                  'UNPARKED_AND_UNHELD',
                  'UPDATED_OWNERSHIP',
                  'UPDATED_OWNERSHIP_HELD',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
          },
        }),
      statusGroups: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.enum([
              'INACTIVE',
              'PRE_REGISTRATION',
              'REDEMPTION',
              'RENEWABLE',
              'VERIFICATION_ICANN',
              'VISIBLE',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Only include results with `status` value in any of the specified groups',
            explode: false,
            in: 'query',
            name: 'statusGroups',
            required: false,
            schema: {
              items: {
                enum: [
                  'INACTIVE',
                  'PRE_REGISTRATION',
                  'REDEMPTION',
                  'RENEWABLE',
                  'VERIFICATION_ICANN',
                  'VISIBLE',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of domains to return',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Marker Domain to use as the offset in results',
            in: 'query',
            name: 'marker',
            required: false,
            schema: { type: 'string' },
          },
        }),
      includes: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['authCode', 'contacts', 'nameServers'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional details to be included in the response',
            explode: false,
            in: 'query',
            name: 'includes',
            required: false,
            schema: {
              items: { enum: ['authCode', 'contacts', 'nameServers'], type: 'string' },
              type: 'array',
            },
            style: 'form',
          },
        }),
      modifiedDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only include results that have been modified since the specified date',
            in: 'query',
            name: 'modifiedDate',
            required: false,
            schema: { format: 'iso-datetime', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: z.array(DomainSummarySchema) },
        'application/json': { schema: z.array(DomainSummarySchema) },
        'application/xml': { schema: z.array(DomainSummarySchema) },
        'text/javascript': { schema: z.array(DomainSummarySchema) },
        'text/xml': { schema: z.array(DomainSummarySchema) },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: 'Limit must have a value no greater than 1000',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const getV1DomainsAgreementsRoute = createRoute({
  method: 'get',
  path: '/v1/domains/agreements',
  tags: ['v1'],
  summary: 'Retrieve the legal agreement(s) required to purchase the specified TLD and add-ons',
  operationId: 'getAgreement',
  request: {
    headers: z.object({
      'X-Market-Id': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Unique identifier of the Market used to retrieve/translate Legal Agreements',
            in: 'header',
            name: 'X-Market-Id',
            required: false,
            schema: { default: 'en-US', format: 'bcp-47', type: 'string' },
          },
        }),
    }),
    query: z.object({
      tlds: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'list of TLDs whose legal agreements are to be retrieved',
            explode: false,
            in: 'query',
            name: 'tlds',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      privacy: z
        .stringbool()
        .openapi({
          param: {
            description: 'Whether or not privacy has been requested',
            in: 'query',
            name: 'privacy',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
      forTransfer: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether or not domain tranfer has been requested',
            in: 'query',
            name: 'forTransfer',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: z.array(LegalAgreementSchema) },
        'application/json': { schema: z.array(LegalAgreementSchema) },
        'application/xml': { schema: z.array(LegalAgreementSchema) },
        'text/javascript': { schema: z.array(LegalAgreementSchema) },
        'text/xml': { schema: z.array(LegalAgreementSchema) },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const getV1DomainsAvailableRoute = createRoute({
  method: 'get',
  path: '/v1/domains/available',
  tags: ['v1'],
  summary: 'Determine whether or not the specified domain is available for purchase',
  operationId: 'available',
  request: {
    query: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain name whose availability is to be checked',
            in: 'query',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
      checkType: z
        .enum(['FAST', 'FULL', 'fast', 'full'])
        .default('FAST')
        .exactOptional()
        .openapi({
          param: {
            description: "Optimize for time ('FAST') or accuracy ('FULL')",
            in: 'query',
            name: 'checkType',
            required: false,
            schema: { default: 'FAST', enum: ['FAST', 'FULL', 'fast', 'full'], type: 'string' },
          },
        }),
      forTransfer: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether or not to include domains available for transfer. If set to True, checkType is ignored',
            in: 'query',
            name: 'forTransfer',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: DomainAvailableResponseSchema },
        'application/json': { schema: DomainAvailableResponseSchema },
        'application/xml': { schema: DomainAvailableResponseSchema },
        'text/javascript': { schema: DomainAvailableResponseSchema },
        'text/xml': { schema: DomainAvailableResponseSchema },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description:
        'Cannot convert domain label error<br>Domain is missing IDN script<br>Domain segment ends with dash<br>Domain starts with dashbr>Domain uses unsupported IDN script<br>FQDN fails generic validity regex<br>Invalid character(s) error<br>Invalid tld error<br>Non-IDN domain name must not have dashes at the third and fourth position<br>Reserved name error<br>domain must be specified',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const postV1DomainsAvailableRoute = createRoute({
  method: 'post',
  path: '/v1/domains/available',
  tags: ['v1'],
  summary: 'Determine whether or not the specified domains are available for purchase',
  operationId: 'availableBulk',
  request: {
    query: z.object({
      checkType: z
        .enum(['FAST', 'FULL', 'fast', 'full'])
        .default('FAST')
        .exactOptional()
        .openapi({
          param: {
            description: "Optimize for time ('FAST') or accuracy ('FULL')",
            in: 'query',
            name: 'checkType',
            required: false,
            schema: { default: 'FAST', enum: ['FAST', 'FULL', 'fast', 'full'], type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Domain names for which to check availability',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
        'text/xml': { schema: z.array(z.string()) },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: DomainAvailableBulkSchema },
        'application/json': { schema: DomainAvailableBulkSchema },
        'application/xml': { schema: DomainAvailableBulkSchema },
        'text/javascript': { schema: DomainAvailableBulkSchema },
        'text/xml': { schema: DomainAvailableBulkSchema },
      },
    },
    203: {
      description: 'Request was partially successful',
      content: {
        'application/javascript': { schema: DomainAvailableBulkMixedSchema },
        'application/json': { schema: DomainAvailableBulkMixedSchema },
        'application/xml': { schema: DomainAvailableBulkMixedSchema },
        'text/javascript': { schema: DomainAvailableBulkMixedSchema },
        'text/xml': { schema: DomainAvailableBulkMixedSchema },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description:
        'Cannot convert domain label error<br>Domain is missing IDN script<br>Domain segment ends with dash<br>Domain starts with dash<br>Domain uses unsupported IDN script<br>FQDN fails generic validity regex<br>Invalid character(s) error<br>Invalid tld error<br>Non-IDN domain name must not have dashes at the third and fourth position<br>Reserved name error<br>Reserved name error<br>domain must be specified',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const postV1DomainsContactsValidateRoute = createRoute({
  method: 'post',
  path: '/v1/domains/contacts/validate',
  tags: ['v1'],
  summary:
    'Validate the request body using the Domain Contact Validation Schema for specified domains.',
  description:
    'All contacts specified in request will be validated against all domains specifed in "domains". As an alternative, you can also pass in tlds, with the exception of `uk`, which requires full domain names',
  operationId: 'ContactsValidate',
  request: {
    headers: z.object({
      'X-Private-Label-Id': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'PrivateLabelId to operate as, if different from JWT',
            in: 'header',
            name: 'X-Private-Label-Id',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
    }),
    query: z.object({
      marketId: z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            description:
              'MarketId in which the request is being made, and for which responses should be localized',
            in: 'query',
            name: 'marketId',
            required: false,
            schema: { default: 'en-US', format: 'bcp-47', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'An instance document expected for domains contacts validation',
      content: {
        'application/json': { schema: DomainsContactsBulkSchema },
        'application/xml': { schema: DomainsContactsBulkSchema },
        'text/xml': { schema: DomainsContactsBulkSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'No response was specified' },
    204: { description: 'Request was successful' },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: "Request body doesn't fulfill schema, see details in `fields`",
      content: {
        'application/javascript': { schema: ErrorDomainContactsValidateSchema },
        'application/json': { schema: ErrorDomainContactsValidateSchema },
        'application/xml': { schema: ErrorDomainContactsValidateSchema },
        'text/javascript': { schema: ErrorDomainContactsValidateSchema },
        'text/xml': { schema: ErrorDomainContactsValidateSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const postV1DomainsPurchaseRoute = createRoute({
  method: 'post',
  path: '/v1/domains/purchase',
  tags: ['v1'],
  summary: 'Purchase and register the specified Domain',
  operationId: 'purchase',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Shopper for whom the domain should be purchased',
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: DomainPurchaseRequestBody,
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: DomainPurchaseResponseSchema },
        'application/json': { schema: DomainPurchaseResponseSchema },
        'application/xml': { schema: DomainPurchaseResponseSchema },
        'text/javascript': { schema: DomainPurchaseResponseSchema },
        'text/xml': { schema: DomainPurchaseResponseSchema },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description:
        'domain must be specified<br>Based on restrictions declared in JSON schema returned by `./schema/{tld}`<br>Cannot convert domain label error<br>Domain is missing IDN script<br>Domain segment ends with dash<br>Domain starts with dash<br>Domain uses unsupported IDN script<br>FQDN fails generic validity regex<br>Invalid character(s) error<br>Invalid tld error<br>Non-IDN domain name must not have dashes at the third and fourth position<br>Reserved name error<br>`body` must be specified',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const getV1DomainsPurchaseSchemaTldRoute = createRoute({
  method: 'get',
  path: '/v1/domains/purchase/schema/{tld}',
  tags: ['v1'],
  summary: 'Retrieve the schema to be submitted when registering a Domain for the specified TLD',
  operationId: 'schema',
  request: {
    params: z.object({
      tld: z
        .string()
        .openapi({
          param: {
            description: 'The Top-Level Domain whose schema should be retrieved',
            in: 'path',
            name: 'tld',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: JsonSchemaSchema },
        'application/json': { schema: JsonSchemaSchema },
        'application/xml': { schema: JsonSchemaSchema },
        'text/javascript': { schema: JsonSchemaSchema },
        'text/xml': { schema: JsonSchemaSchema },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: '`tld` must be specified',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const postV1DomainsPurchaseValidateRoute = createRoute({
  method: 'post',
  path: '/v1/domains/purchase/validate',
  tags: ['v1'],
  summary: 'Validate the request body using the Domain Purchase Schema for the specified TLD',
  operationId: 'validate',
  request: { body: DomainPurchaseRequestBody },
  responses: {
    200: { description: 'Request was successful' },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: 'Based on restrictions declared in JSON schema returned by `./schema/{tld}`',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const getV1DomainsSuggestRoute = createRoute({
  method: 'get',
  path: '/v1/domains/suggest',
  tags: ['v1'],
  summary:
    "Suggest alternate Domain names based on a seed Domain, a set of keywords, or the shopper's purchase history",
  operationId: 'suggest',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopper ID for which the suggestions are being generated',
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Domain name or set of keywords for which alternative domain names will be suggested',
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
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
          'AO',
          'AQ',
          'AR',
          'AS',
          'AT',
          'AU',
          'AW',
          'AX',
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
          'BQ',
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
          'CW',
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
          'KV',
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
          'MK',
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
          'SX',
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
          'ZA',
          'ZM',
          'ZW',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Two-letter ISO country code to be used as a hint for target region<br/><br/>\nNOTE: These are sample values, there are many\n<a href="http://www.iso.org/iso/country_codes.htm">more</a>',
            in: 'query',
            name: 'country',
            required: false,
            schema: {
              enum: [
                'AC',
                'AD',
                'AE',
                'AF',
                'AG',
                'AI',
                'AL',
                'AM',
                'AO',
                'AQ',
                'AR',
                'AS',
                'AT',
                'AU',
                'AW',
                'AX',
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
                'BQ',
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
                'CW',
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
                'KV',
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
                'MK',
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
                'SX',
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
                'ZA',
                'ZM',
                'ZW',
              ],
              format: 'iso-country-code',
              type: 'string',
            },
          },
        }),
      city: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of city to be used as a hint for target region',
            in: 'query',
            name: 'city',
            required: false,
            schema: { format: 'city-name', type: 'string' },
          },
        }),
      sources: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.enum([
              'CC_TLD',
              'EXTENSION',
              'KEYWORD_SPIN',
              'PREMIUM',
              'cctld',
              'extension',
              'keywordspin',
              'premium',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sources to be queried<br/><br/><ul>\n<li><strong>CC_TLD</strong> - Varies the TLD using Country Codes</li>\n<li><strong>EXTENSION</strong> - Varies the TLD</li>\n<li><strong>KEYWORD_SPIN</strong> - Identifies keywords and then rotates each one</li>\n<li><strong>PREMIUM</strong> - Includes variations with premium prices</li></ul>',
            explode: false,
            in: 'query',
            name: 'sources',
            required: false,
            schema: {
              items: {
                enum: [
                  'CC_TLD',
                  'EXTENSION',
                  'KEYWORD_SPIN',
                  'PREMIUM',
                  'cctld',
                  'extension',
                  'keywordspin',
                  'premium',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
          },
        }),
      tlds: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Top-level domains to be included in suggestions<br/><br/>\nNOTE: These are sample values, there are many\n<a href="http://www.godaddy.com/tlds/gtld.aspx#domain_search_form">more</a>',
            explode: false,
            in: 'query',
            name: 'tlds',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      lengthMax: z
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
            description: 'Maximum length of second-level domain',
            in: 'query',
            name: 'lengthMax',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      lengthMin: z
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
            description: 'Minimum length of second-level domain',
            in: 'query',
            name: 'lengthMin',
            required: false,
            schema: { type: 'integer' },
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
            description: 'Maximum number of suggestions to return',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      waitMs: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum amount of time, in milliseconds, to wait for responses\nIf elapses, return the results compiled up to that point',
            in: 'query',
            name: 'waitMs',
            required: false,
            schema: { default: 1000, format: 'integer-positive', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: z.array(DomainSuggestionSchema) },
        'application/json': { schema: z.array(DomainSuggestionSchema) },
        'application/xml': { schema: z.array(DomainSuggestionSchema) },
        'text/javascript': { schema: z.array(DomainSuggestionSchema) },
        'text/xml': { schema: z.array(DomainSuggestionSchema) },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: '`query` must be specified',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    504: {
      description: 'Gateway timeout',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const getV1DomainsTldsRoute = createRoute({
  method: 'get',
  path: '/v1/domains/tlds',
  tags: ['v1'],
  summary: 'Retrieves a list of TLDs supported and enabled for sale',
  operationId: 'tlds',
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: z.array(TldSummarySchema) },
        'application/json': { schema: z.array(TldSummarySchema) },
        'application/xml': { schema: z.array(TldSummarySchema) },
        'text/javascript': { schema: z.array(TldSummarySchema) },
        'text/xml': { schema: z.array(TldSummarySchema) },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const getV1DomainsDomainRoute = createRoute({
  method: 'get',
  path: '/v1/domains/{domain}',
  tags: ['v1'],
  summary: 'Retrieve details for the specified Domain',
  operationId: 'get',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopper ID expected to own the specified domain',
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain name whose details are to be retrieved',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: DomainDetailSchema },
        'application/json': { schema: DomainDetailSchema },
        'application/xml': { schema: DomainDetailSchema },
        'text/javascript': { schema: DomainDetailSchema },
        'text/xml': { schema: DomainDetailSchema },
      },
    },
    203: {
      description: 'Request was partially successful, see verifications.status for further detail',
      content: {
        'application/javascript': { schema: DomainDetailSchema },
        'application/json': { schema: DomainDetailSchema },
        'application/xml': { schema: DomainDetailSchema },
        'text/javascript': { schema: DomainDetailSchema },
        'text/xml': { schema: DomainDetailSchema },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: '`domain` must be specified',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const deleteV1DomainsDomainRoute = createRoute({
  method: 'delete',
  path: '/v1/domains/{domain}',
  tags: ['v1'],
  summary: 'Cancel a purchased domain',
  operationId: 'cancel',
  request: {
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain to cancel',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Request was successful' },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'The domain does not exist',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description:
        'Unknown domain error<br>At least two apex (aka @) `nameServers` must be specified',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const patchV1DomainsDomainRoute = createRoute({
  method: 'patch',
  path: '/v1/domains/{domain}',
  tags: ['v1'],
  summary: 'Update details for the specified Domain',
  operationId: 'update',
  request: {
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain whose details are to be updated',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Shopper for whom Domain is to be updated. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com",
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Changes to apply to existing Domain',
      content: {
        'application/json': { schema: DomainUpdateSchema },
        'application/xml': { schema: DomainUpdateSchema },
        'text/xml': { schema: DomainUpdateSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Request was successful' },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Specified Subaccount not owned by authenticated Shopper',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    409: {
      description: 'The given domain is not eligible to have its nameservers changed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description:
        'At least two apex (aka @) `nameServers` must be specified<br>Failed to update nameservers',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const patchV1DomainsDomainContactsRoute = createRoute({
  method: 'patch',
  path: '/v1/domains/{domain}/contacts',
  tags: ['v1'],
  summary: 'Update domain',
  operationId: 'updateContacts',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Shopper for whom domain contacts are to be updated. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com",
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain whose Contacts are to be updated.',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Changes to apply to existing Contacts',
      content: {
        'application/json': { schema: DomainContactsSchema },
        'application/xml': { schema: DomainContactsSchema },
        'text/xml': { schema: DomainContactsSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'No response was specified' },
    204: { description: 'Request was successful' },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Domain not found<br>Identity document not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: '`domain` is not a valid Domain name',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    504: {
      description: 'Gateway timeout',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const deleteV1DomainsDomainPrivacyRoute = createRoute({
  method: 'delete',
  path: '/v1/domains/{domain}/privacy',
  tags: ['v1'],
  summary: 'Submit a privacy cancellation request for the given domain',
  operationId: 'cancelPrivacy',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopper ID of the owner of the domain',
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain whose privacy is to be cancelled',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Request was successful' },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'The domain does not exist',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description:
        'Customer has purchased Domain Ownership Protection and the domain has expired<br>The domain status does not allow performing the operation<br>Unknown domain error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const postV1DomainsDomainPrivacyPurchaseRoute = createRoute({
  method: 'post',
  path: '/v1/domains/{domain}/privacy/purchase',
  tags: ['v1'],
  summary: 'Purchase privacy for a specified domain',
  operationId: 'purchasePrivacy',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopper ID of the owner of the domain',
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain for which to purchase privacy',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Options for purchasing privacy',
      content: {
        'application/json': { schema: PrivacyPurchaseSchema },
        'application/xml': { schema: PrivacyPurchaseSchema },
        'text/xml': { schema: PrivacyPurchaseSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: DomainPurchaseResponseSchema },
        'application/json': { schema: DomainPurchaseResponseSchema },
        'application/xml': { schema: DomainPurchaseResponseSchema },
        'text/javascript': { schema: DomainPurchaseResponseSchema },
        'text/xml': { schema: DomainPurchaseResponseSchema },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    409: {
      description: 'The domain status does not allow performing the operation',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description:
        'End-user must read and consent to all of the following legal agreements<br>`domain` must match `sld.tld`',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const putV1DomainsDomainRecordsRoute = createRoute({
  method: 'put',
  path: '/v1/domains/{domain}/records',
  tags: ['v1'],
  summary: 'Replace all DNS Records for the specified Domain',
  operationId: 'recordReplace',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com",
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain whose DNS Records are to be replaced',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'DNS Records to replace whatever currently exists',
      content: {
        'application/json': { schema: z.array(DNSRecordSchema) },
        'application/xml': { schema: z.array(DNSRecordSchema) },
        'text/xml': { schema: z.array(DNSRecordSchema) },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Request was successful' },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: '`domain` is not a valid Domain name<br>`record` does not fulfill the schema',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    504: {
      description: 'Gateway timeout',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const patchV1DomainsDomainRecordsRoute = createRoute({
  method: 'patch',
  path: '/v1/domains/{domain}/records',
  tags: ['v1'],
  summary: 'Add the specified DNS Records to the specified Domain',
  operationId: 'recordAdd',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com",
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain whose DNS Records are to be augmented',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'DNS Records to add to whatever currently exists',
      content: {
        'application/json': { schema: ArrayOfDNSRecordSchema },
        'application/xml': { schema: ArrayOfDNSRecordSchema },
        'text/xml': { schema: ArrayOfDNSRecordSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Request was successful' },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: '`domain` is not a valid Domain name',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    504: {
      description: 'Gateway timeout',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const putV1DomainsDomainRecordsTypeRoute = createRoute({
  method: 'put',
  path: '/v1/domains/{domain}/records/{type}',
  tags: ['v1'],
  summary: 'Replace all DNS Records for the specified Domain with the specified Type',
  operationId: 'recordReplaceType',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com",
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain whose DNS Records are to be replaced',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['A', 'AAAA', 'CNAME', 'MX', 'NS', 'SOA', 'SRV', 'TXT'])
        .openapi({
          param: {
            description: 'DNS Record Type for which DNS Records are to be replaced',
            in: 'path',
            name: 'type',
            required: true,
            schema: {
              enum: ['A', 'AAAA', 'CNAME', 'MX', 'NS', 'SOA', 'SRV', 'TXT'],
              type: 'string',
            },
          },
        }),
    }),
    body: {
      description: 'DNS Records to replace whatever currently exists',
      content: {
        'application/json': { schema: z.array(DNSRecordCreateTypeSchema) },
        'application/xml': { schema: z.array(DNSRecordCreateTypeSchema) },
        'text/xml': { schema: z.array(DNSRecordCreateTypeSchema) },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Request was successful' },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: '`record` does not fulfill the schema',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    504: {
      description: 'Gateway timeout',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const getV1DomainsDomainRecordsTypeNameRoute = createRoute({
  method: 'get',
  path: '/v1/domains/{domain}/records/{type}/{name}',
  tags: ['v1'],
  summary:
    'Retrieve DNS Records for the specified Domain, optionally with the specified Type and/or Name',
  operationId: 'recordGet',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com",
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain whose DNS Records are to be retrieved',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['A', 'AAAA', 'CNAME', 'MX', 'NS', 'SOA', 'SRV', 'TXT'])
        .openapi({
          param: {
            description: 'DNS Record Type for which DNS Records are to be retrieved',
            in: 'path',
            name: 'type',
            required: true,
            schema: {
              enum: ['A', 'AAAA', 'CNAME', 'MX', 'NS', 'SOA', 'SRV', 'TXT'],
              type: 'string',
            },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'DNS Record Name for which DNS Records are to be retrieved',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to skip for pagination',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
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
            description: 'Maximum number of items to return',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: z.array(DNSRecordSchema) },
        'application/json': { schema: z.array(DNSRecordSchema) },
        'application/xml': { schema: z.array(DNSRecordSchema) },
        'text/javascript': { schema: z.array(DNSRecordSchema) },
        'text/xml': { schema: z.array(DNSRecordSchema) },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: '`record` does not fulfill the schema<br>`domain` is not a valid Domain name',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    504: {
      description: 'Gateway timeout',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const putV1DomainsDomainRecordsTypeNameRoute = createRoute({
  method: 'put',
  path: '/v1/domains/{domain}/records/{type}/{name}',
  tags: ['v1'],
  summary: 'Replace all DNS Records for the specified Domain with the specified Type and Name',
  operationId: 'recordReplaceTypeName',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com",
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain whose DNS Records are to be replaced',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['A', 'AAAA', 'CNAME', 'MX', 'NS', 'SOA', 'SRV', 'TXT'])
        .openapi({
          param: {
            description: 'DNS Record Type for which DNS Records are to be replaced',
            in: 'path',
            name: 'type',
            required: true,
            schema: {
              enum: ['A', 'AAAA', 'CNAME', 'MX', 'NS', 'SOA', 'SRV', 'TXT'],
              type: 'string',
            },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'DNS Record Name for which DNS Records are to be replaced',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'DNS Records to replace whatever currently exists',
      content: {
        'application/json': { schema: z.array(DNSRecordCreateTypeNameSchema) },
        'application/xml': { schema: z.array(DNSRecordCreateTypeNameSchema) },
        'text/xml': { schema: z.array(DNSRecordCreateTypeNameSchema) },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Request was successful' },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: '`record` does not fulfill the schema',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    504: {
      description: 'Gateway timeout',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const deleteV1DomainsDomainRecordsTypeNameRoute = createRoute({
  method: 'delete',
  path: '/v1/domains/{domain}/records/{type}/{name}',
  tags: ['v1'],
  summary: 'Delete all DNS Records for the specified Domain with the specified Type and Name',
  operationId: 'recordDeleteTypeName',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com",
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain whose DNS Records are to be deleted',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['A', 'AAAA', 'CNAME', 'MX', 'SRV', 'TXT'])
        .openapi({
          param: {
            description: 'DNS Record Type for which DNS Records are to be deleted',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['A', 'AAAA', 'CNAME', 'MX', 'SRV', 'TXT'], type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'DNS Record Name for which DNS Records are to be deleted',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Request was successful' },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Domain not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    409: {
      description: 'The given domain is not eligible to have its records changed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: '`domain` is not a valid Domain name',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    504: {
      description: 'Gateway timeout',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const postV1DomainsDomainRenewRoute = createRoute({
  method: 'post',
  path: '/v1/domains/{domain}/renew',
  tags: ['v1'],
  summary: 'Renew the specified Domain',
  operationId: 'renew',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Shopper for whom Domain is to be renewed. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com",
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain to renew',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Options for renewing existing Domain',
      content: {
        'application/json': { schema: DomainRenewSchema },
        'application/xml': { schema: DomainRenewSchema },
        'text/xml': { schema: DomainRenewSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: DomainPurchaseResponseSchema },
        'application/json': { schema: DomainPurchaseResponseSchema },
        'application/xml': { schema: DomainPurchaseResponseSchema },
        'text/javascript': { schema: DomainPurchaseResponseSchema },
        'text/xml': { schema: DomainPurchaseResponseSchema },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    409: {
      description: 'The domain status does not allow performing the operation',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description:
        'End-user must read and consent to all of the following legal agreements<br>`domain` must match `sld.tld`',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const postV1DomainsDomainTransferRoute = createRoute({
  method: 'post',
  path: '/v1/domains/{domain}/transfer',
  tags: ['v1'],
  summary: 'Purchase and start or restart transfer process',
  operationId: 'transferIn',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Shopper to whom the domain should be transfered',
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain to transfer in',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Details for domain transfer purchase',
      content: {
        'application/json': { schema: DomainTransferInSchema },
        'application/xml': { schema: DomainTransferInSchema },
        'text/xml': { schema: DomainTransferInSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: DomainPurchaseResponseSchema },
        'application/json': { schema: DomainPurchaseResponseSchema },
        'application/xml': { schema: DomainPurchaseResponseSchema },
        'text/javascript': { schema: DomainPurchaseResponseSchema },
        'text/xml': { schema: DomainPurchaseResponseSchema },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    409: {
      description: "`domain` (domain) isn't available for transfer",
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description:
        'Based on restrictions declared in JSON schema returned by `./schema/{tld}`<br>Cannot convert domain label error<br>Domain is missing IDN script<br>Domain segment ends with dash<br>Domain starts with dash<br>Domain uses unsupported IDN script<br>End-user must read and consent to all of the following legal agreements<br>FQDN fails generic validity regex<br>Invalid character(s) error<br>Invalid period range<br>Invalid tld error<br>Non-IDN domain name must not have dashes at the third and fourth position<br>Reserved name error<br>`authCode` cannot be empty<br>`domain` must match `sld.tld`<br>domain must be specified',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const postV1DomainsDomainVerifyRegistrantEmailRoute = createRoute({
  method: 'post',
  path: '/v1/domains/{domain}/verifyRegistrantEmail',
  tags: ['v1'],
  summary: 'Re-send Contact E-mail Verification for specified Domain',
  operationId: 'verifyEmail',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Shopper for whom domain contact e-mail should be verified. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com",
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain whose Contact E-mail should be verified.',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Request was successful' },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: '`domain` is not a valid Domain name',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    504: {
      description: 'Gateway timeout',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const getV2CustomersCustomerIdDomainsForwardsFqdnRoute = createRoute({
  method: 'get',
  path: '/v2/customers/{customerId}/domains/forwards/{fqdn}',
  tags: ['Domains'],
  summary: 'Retrieve the forwarding information for the given fqdn',
  description:
    '<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>',
  operationId: 'domainsForwardsGet',
  request: {
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fqdn: z
        .string()
        .openapi({
          param: {
            description:
              'The fully qualified domain name whose forwarding details are to be retrieved.',
            in: 'path',
            name: 'fqdn',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      includeSubs: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optionally include all sub domains if the fqdn specified is a domain and not a sub domain.',
            in: 'query',
            name: 'includeSubs',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: { 'application/json': { schema: z.array(DomainForwardingSchema) } },
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
      description: 'Resource not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'A valid `fqdn` must be specified',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests received within interval',
      content: { 'application/json': { schema: ErrorLimitSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putV2CustomersCustomerIdDomainsForwardsFqdnRoute = createRoute({
  method: 'put',
  path: '/v2/customers/{customerId}/domains/forwards/{fqdn}',
  tags: ['Domains'],
  summary: 'Modify the forwarding information for the given fqdn',
  description:
    '<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>',
  operationId: 'domainsForwardsPut',
  request: {
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fqdn: z
        .string()
        .openapi({
          param: {
            description:
              'The fully qualified domain name whose forwarding details are to be modified.',
            in: 'path',
            name: 'fqdn',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Domain forwarding rule to create or replace on the fqdn',
      content: { 'application/json': { schema: DomainForwardingCreateSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Request was successful' },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Resource not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'The domain status does not allow performing the operation',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: "Request body doesn't fulfill schema, see details in `fields`",
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests received within interval',
      content: { 'application/json': { schema: ErrorLimitSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2CustomersCustomerIdDomainsForwardsFqdnRoute = createRoute({
  method: 'post',
  path: '/v2/customers/{customerId}/domains/forwards/{fqdn}',
  tags: ['Domains'],
  summary: 'Create a new forwarding configuration for the given FQDN',
  description:
    '<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>',
  operationId: 'domainsForwardsPost',
  request: {
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your own customer id.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fqdn: z
        .string()
        .openapi({
          param: {
            description:
              'The fully qualified domain name whose forwarding details are to be modified.',
            in: 'path',
            name: 'fqdn',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Domain forwarding rule to create for the specified fqdn',
      content: { 'application/json': { schema: DomainForwardingCreateSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Request was successful' },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Resource not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'Provided `fqdn` already has forwarding setup',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: "Request body doesn't fulfill schema, see details in `fields`",
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests received within interval',
      content: { 'application/json': { schema: ErrorLimitSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteV2CustomersCustomerIdDomainsForwardsFqdnRoute = createRoute({
  method: 'delete',
  path: '/v2/customers/{customerId}/domains/forwards/{fqdn}',
  tags: ['Domains'],
  summary: 'Submit a forwarding cancellation request for the given fqdn',
  description:
    '<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>',
  operationId: 'domainsForwardsDelete',
  request: {
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fqdn: z
        .string()
        .openapi({
          param: {
            description:
              'The fully qualified domain name whose forwarding details are to be deleted.',
            in: 'path',
            name: 'fqdn',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Request was successful' },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Resource not found',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'The domain status does not allow performing the operation',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'A valid `fqdn` must be specified',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests received within interval',
      content: { 'application/json': { schema: ErrorLimitSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2CustomersCustomerIdDomainsNotificationsRoute = createRoute({
  method: 'get',
  path: '/v2/customers/{customerId}/domains/notifications',
  tags: ['Notifications'],
  summary: 'Retrieve the next domain notification',
  request: {
    headers: z.object({
      'X-Request-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A client provided identifier for tracking this request.',
            in: 'header',
            name: 'X-Request-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: { 'application/json': { schema: DomainNotificationSchema } },
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
      description: 'The customer does not exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests received within interval',
      content: { 'application/json': { schema: ErrorLimitSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2CustomersCustomerIdDomainsNotificationsOptInRoute = createRoute({
  method: 'get',
  path: '/v2/customers/{customerId}/domains/notifications/optIn',
  tags: ['Notifications'],
  summary: 'Retrieve a list of notification types that are opted in',
  request: {
    headers: z.object({
      'X-Request-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A client provided identifier for tracking this request.',
            in: 'header',
            name: 'X-Request-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: { 'application/json': { schema: z.array(DomainNotificationSchema) } },
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
      description: 'The customer does not exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests received within interval',
      content: { 'application/json': { schema: ErrorLimitSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putV2CustomersCustomerIdDomainsNotificationsOptInRoute = createRoute({
  method: 'put',
  path: '/v2/customers/{customerId}/domains/notifications/optIn',
  tags: ['Notifications'],
  summary: 'Opt in to recieve notifications for the submitted notification types',
  request: {
    headers: z.object({
      'X-Request-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A client provided identifier for tracking this request.',
            in: 'header',
            name: 'X-Request-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      types: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.enum([
              'AUTH_CODE_PURCHASE',
              'AUTH_CODE_REGENERATE',
              'AUTO_RENEWAL',
              'BACKORDER',
              'BACKORDER_PURCHASE',
              'BACKORDER_DELETE',
              'BACKORDER_UPDATE',
              'CONTACT_CREATE',
              'CONTACT_DELETE',
              'CONTACT_UPDATE',
              'DNS_VERIFICATION',
              'DNSSEC_CREATE',
              'DNSSEC_DELETE',
              'DOMAIN_DELETE',
              'DOMAIN_UPDATE',
              'DOMAIN_UPDATE_CONTACTS',
              'DOMAIN_UPDATE_NAME_SERVERS',
              'EXPIRY',
              'HOST_CREATE',
              'HOST_DELETE',
              'ICANN_VERIFICATION',
              'MIGRATE',
              'MIGRATE_IN',
              'PREMIUM',
              'PRIVACY_PURCHASE',
              'PRIVACY_DELETE',
              'REDEEM',
              'REGISTER',
              'RENEW',
              'RENEW_UNDO',
              'TRADE',
              'TRADE_CANCEL',
              'TRADE_PURCHASE',
              'TRADE_PURCHASE_AUTH_TEXT_MESSAGE',
              'TRADE_RESEND_AUTH_EMAIL',
              'TRANSFER',
              'TRANSFER_IN',
              'TRANSFER_IN_CANCEL',
              'TRANSFER_OUT',
              'TRANSFER_OUT_ACCEPT',
              'TRANSFER_OUT_REJECT',
              'TRANSFER_OUT_REQUESTED',
              'TRANSIT',
            ]),
          ),
        )
        .openapi({
          param: {
            description: 'The notification types that should be opted in',
            explode: false,
            in: 'query',
            name: 'types',
            required: true,
            schema: {
              items: {
                enum: [
                  'AUTH_CODE_PURCHASE',
                  'AUTH_CODE_REGENERATE',
                  'AUTO_RENEWAL',
                  'BACKORDER',
                  'BACKORDER_PURCHASE',
                  'BACKORDER_DELETE',
                  'BACKORDER_UPDATE',
                  'CONTACT_CREATE',
                  'CONTACT_DELETE',
                  'CONTACT_UPDATE',
                  'DNS_VERIFICATION',
                  'DNSSEC_CREATE',
                  'DNSSEC_DELETE',
                  'DOMAIN_DELETE',
                  'DOMAIN_UPDATE',
                  'DOMAIN_UPDATE_CONTACTS',
                  'DOMAIN_UPDATE_NAME_SERVERS',
                  'EXPIRY',
                  'HOST_CREATE',
                  'HOST_DELETE',
                  'ICANN_VERIFICATION',
                  'MIGRATE',
                  'MIGRATE_IN',
                  'PREMIUM',
                  'PRIVACY_PURCHASE',
                  'PRIVACY_DELETE',
                  'REDEEM',
                  'REGISTER',
                  'RENEW',
                  'RENEW_UNDO',
                  'TRADE',
                  'TRADE_CANCEL',
                  'TRADE_PURCHASE',
                  'TRADE_PURCHASE_AUTH_TEXT_MESSAGE',
                  'TRADE_RESEND_AUTH_EMAIL',
                  'TRANSFER',
                  'TRANSFER_IN',
                  'TRANSFER_IN_CANCEL',
                  'TRANSFER_OUT',
                  'TRANSFER_OUT_ACCEPT',
                  'TRANSFER_OUT_REJECT',
                  'TRANSFER_OUT_REQUESTED',
                  'TRANSIT',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Command successful' },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'The customer does not exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: '`type` must be specified',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests received within interval',
      content: { 'application/json': { schema: ErrorLimitSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2CustomersCustomerIdDomainsNotificationsSchemasTypeRoute = createRoute({
  method: 'get',
  path: '/v2/customers/{customerId}/domains/notifications/schemas/{type}',
  tags: ['Notifications'],
  summary: 'Retrieve the schema for the notification data for the specified notification type',
  request: {
    headers: z.object({
      'X-Request-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A client provided identifier for tracking this request.',
            in: 'header',
            name: 'X-Request-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum([
          'AUTO_RENEWAL',
          'BACKORDER',
          'BACKORDER_PURCHASE',
          'EXPIRY',
          'PREMIUM',
          'PRIVACY_PURCHASE',
          'REDEEM',
          'REGISTER',
          'RENEW',
          'TRADE',
          'TRANSFER',
        ])
        .openapi({
          param: {
            description: 'The notification type whose schema should be retrieved',
            in: 'path',
            name: 'type',
            required: true,
            schema: {
              enum: [
                'AUTO_RENEWAL',
                'BACKORDER',
                'BACKORDER_PURCHASE',
                'EXPIRY',
                'PREMIUM',
                'PRIVACY_PURCHASE',
                'REDEEM',
                'REGISTER',
                'RENEW',
                'TRADE',
                'TRANSFER',
              ],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: { 'application/json': { schema: JsonSchemaSchema } },
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
      description: 'The schema type does not exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: '`type` must be specified',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests received within interval',
      content: { 'application/json': { schema: ErrorLimitSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2CustomersCustomerIdDomainsNotificationsNotificationIdAcknowledgeRoute =
  createRoute({
    method: 'post',
    path: '/v2/customers/{customerId}/domains/notifications/{notificationId}/acknowledge',
    tags: ['Notifications'],
    summary: 'Acknowledge a domain notification',
    request: {
      headers: z.object({
        'X-Request-Id': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'A client provided identifier for tracking this request.',
              in: 'header',
              name: 'X-Request-Id',
              required: false,
              schema: { type: 'string' },
            },
          }),
      }),
      params: z.object({
        customerId: z
          .string()
          .openapi({
            param: {
              description:
                "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
              in: 'path',
              name: 'customerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        notificationId: z
          .string()
          .openapi({
            param: {
              description: 'The notification ID to acknowledge',
              in: 'path',
              name: 'notificationId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Message acknowledged' },
      401: {
        description: 'Authentication info not sent or invalid',
        content: { 'application/json': { schema: ErrorSchema } },
      },
      403: {
        description: 'Authenticated user is not allowed access',
        content: { 'application/json': { schema: ErrorSchema } },
      },
      404: {
        description: 'The domain does not exist',
        content: { 'application/json': { schema: ErrorSchema } },
      },
      429: {
        description: 'Too many requests received within interval',
        content: { 'application/json': { schema: ErrorLimitSchema } },
      },
      500: {
        description: 'Internal server error',
        content: { 'application/json': { schema: ErrorSchema } },
      },
    },
  })

export const getV2CustomersCustomerIdDomainsDomainRoute = createRoute({
  method: 'get',
  path: '/v2/customers/{customerId}/domains/{domain}',
  tags: ['Domains'],
  summary: 'Retrieve details for the specified Domain',
  request: {
    headers: z.object({
      'X-Request-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A client provided identifier for tracking this request.',
            in: 'header',
            name: 'X-Request-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain name whose details are to be retrieved',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      includes: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['actions', 'contacts', 'dnssecRecords', 'registryStatusCodes'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional details to be included in the response',
            explode: false,
            in: 'query',
            name: 'includes',
            required: false,
            schema: {
              items: {
                enum: ['actions', 'contacts', 'dnssecRecords', 'registryStatusCodes'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: { 'application/json': { schema: DomainDetailV2Schema } },
    },
    203: {
      description:
        'Request was partially successful, but actions, contacts, and/or verifications may not be included.',
      content: { 'application/json': { schema: DomainDetailV2Schema } },
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
      description: 'The contact does not exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: '`domain` must be specified',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests received within interval',
      content: { 'application/json': { schema: ErrorLimitSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2CustomersCustomerIdDomainsDomainActionsRoute = createRoute({
  method: 'get',
  path: '/v2/customers/{customerId}/domains/{domain}/actions',
  tags: ['Actions'],
  summary: 'Retrieves a list of the most recent actions for the specified domain',
  request: {
    headers: z.object({
      'X-Request-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A client provided identifier for tracking this request.',
            in: 'header',
            name: 'X-Request-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain whose actions are to be retrieved',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: { 'application/json': { schema: z.array(ActionSchema) } },
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
      description: 'The domain does not exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests received within interval',
      content: { 'application/json': { schema: ErrorLimitSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2CustomersCustomerIdDomainsDomainActionsTypeRoute = createRoute({
  method: 'get',
  path: '/v2/customers/{customerId}/domains/{domain}/actions/{type}',
  tags: ['Actions'],
  summary: 'Retrieves the most recent action for the specified domain',
  request: {
    headers: z.object({
      'X-Request-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A client provided identifier for tracking this request.',
            in: 'header',
            name: 'X-Request-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain whose action is to be retrieved',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum([
          'AUTH_CODE_PURCHASE',
          'AUTH_CODE_REGENERATE',
          'AUTO_RENEWAL',
          'BACKORDER_PURCHASE',
          'BACKORDER_DELETE',
          'BACKORDER_UPDATE',
          'DNS_VERIFICATION',
          'DNSSEC_CREATE',
          'DNSSEC_DELETE',
          'DOMAIN_DELETE',
          'DOMAIN_UPDATE',
          'DOMAIN_UPDATE_CONTACTS',
          'DOMAIN_UPDATE_NAME_SERVERS',
          'EXPIRY',
          'ICANN_VERIFICATION',
          'MIGRATE',
          'MIGRATE_IN',
          'PREMIUM',
          'PRIVACY_PURCHASE',
          'PRIVACY_DELETE',
          'REDEEM',
          'REGISTER',
          'RENEW',
          'RENEW_UNDO',
          'TRADE',
          'TRADE_CANCEL',
          'TRADE_PURCHASE',
          'TRADE_PURCHASE_AUTH_TEXT_MESSAGE',
          'TRADE_RESEND_AUTH_EMAIL',
          'TRANSFER',
          'TRANSFER_IN',
          'TRANSFER_IN_CANCEL',
          'TRANSFER_OUT',
          'TRANSFER_OUT_ACCEPT',
          'TRANSFER_OUT_REJECT',
          'TRANSFER_OUT_REQUESTED',
          'TRANSIT',
        ])
        .openapi({
          param: {
            description: 'The type of action to retrieve',
            in: 'path',
            name: 'type',
            required: true,
            schema: {
              enum: [
                'AUTH_CODE_PURCHASE',
                'AUTH_CODE_REGENERATE',
                'AUTO_RENEWAL',
                'BACKORDER_PURCHASE',
                'BACKORDER_DELETE',
                'BACKORDER_UPDATE',
                'DNS_VERIFICATION',
                'DNSSEC_CREATE',
                'DNSSEC_DELETE',
                'DOMAIN_DELETE',
                'DOMAIN_UPDATE',
                'DOMAIN_UPDATE_CONTACTS',
                'DOMAIN_UPDATE_NAME_SERVERS',
                'EXPIRY',
                'ICANN_VERIFICATION',
                'MIGRATE',
                'MIGRATE_IN',
                'PREMIUM',
                'PRIVACY_PURCHASE',
                'PRIVACY_DELETE',
                'REDEEM',
                'REGISTER',
                'RENEW',
                'RENEW_UNDO',
                'TRADE',
                'TRADE_CANCEL',
                'TRADE_PURCHASE',
                'TRADE_PURCHASE_AUTH_TEXT_MESSAGE',
                'TRADE_RESEND_AUTH_EMAIL',
                'TRANSFER',
                'TRANSFER_IN',
                'TRANSFER_IN_CANCEL',
                'TRANSFER_OUT',
                'TRANSFER_OUT_ACCEPT',
                'TRANSFER_OUT_REJECT',
                'TRANSFER_OUT_REQUESTED',
                'TRANSIT',
              ],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: { 'application/json': { schema: ActionSchema } },
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
      description: 'The domain does not exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'The domain status does not allow performing the operation',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests received within interval',
      content: { 'application/json': { schema: ErrorLimitSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteV2CustomersCustomerIdDomainsDomainActionsTypeRoute = createRoute({
  method: 'delete',
  path: '/v2/customers/{customerId}/domains/{domain}/actions/{type}',
  tags: ['Actions'],
  summary: 'Cancel the most recent user action for the specified domain',
  request: {
    headers: z.object({
      'X-Request-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A client provided identifier for tracking this request.',
            in: 'header',
            name: 'X-Request-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain whose action is to be cancelled',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum([
          'AUTH_CODE_PURCHASE',
          'AUTH_CODE_REGENERATE',
          'BACKORDER_PURCHASE',
          'BACKORDER_DELETE',
          'BACKORDER_UPDATE',
          'DNSSEC_CREATE',
          'DNSSEC_DELETE',
          'DOMAIN_DELETE',
          'DOMAIN_UPDATE',
          'DOMAIN_UPDATE_CONTACTS',
          'DOMAIN_UPDATE_NAME_SERVERS',
          'MIGRATE',
          'PRIVACY_PURCHASE',
          'PRIVACY_DELETE',
          'REDEEM',
          'REGISTER',
          'RENEW',
          'RENEW_UNDO',
          'TRADE',
          'TRADE_CANCEL',
          'TRADE_PURCHASE',
          'TRADE_PURCHASE_AUTH_TEXT_MESSAGE',
          'TRADE_RESEND_AUTH_EMAIL',
          'TRANSFER',
          'TRANSFER_IN_CANCEL',
          'TRANSFER_OUT_ACCEPT',
          'TRANSFER_OUT_REJECT',
          'TRANSFER_OUT_REQUESTED',
          'TRANSIT',
        ])
        .openapi({
          param: {
            description: 'The type of action to cancel',
            in: 'path',
            name: 'type',
            required: true,
            schema: {
              enum: [
                'AUTH_CODE_PURCHASE',
                'AUTH_CODE_REGENERATE',
                'BACKORDER_PURCHASE',
                'BACKORDER_DELETE',
                'BACKORDER_UPDATE',
                'DNSSEC_CREATE',
                'DNSSEC_DELETE',
                'DOMAIN_DELETE',
                'DOMAIN_UPDATE',
                'DOMAIN_UPDATE_CONTACTS',
                'DOMAIN_UPDATE_NAME_SERVERS',
                'MIGRATE',
                'PRIVACY_PURCHASE',
                'PRIVACY_DELETE',
                'REDEEM',
                'REGISTER',
                'RENEW',
                'RENEW_UNDO',
                'TRADE',
                'TRADE_CANCEL',
                'TRADE_PURCHASE',
                'TRADE_PURCHASE_AUTH_TEXT_MESSAGE',
                'TRADE_RESEND_AUTH_EMAIL',
                'TRANSFER',
                'TRANSFER_IN_CANCEL',
                'TRANSFER_OUT_ACCEPT',
                'TRANSFER_OUT_REJECT',
                'TRANSFER_OUT_REQUESTED',
                'TRANSIT',
              ],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Request was successful' },
    401: {
      description: 'Authentication info not sent or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'The domain does not exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'The action status does not allow performing the operation',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests received within interval',
      content: { 'application/json': { schema: ErrorLimitSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2CustomersCustomerIdDomainsDomainRedeemRoute = createRoute({
  method: 'post',
  path: '/v2/customers/{customerId}/domains/{domain}/redeem',
  tags: ['Domains'],
  summary: 'Purchase a restore for the given domain to bring it out of redemption',
  request: {
    headers: z.object({
      'X-Request-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A client provided identifier for tracking this request.',
            in: 'header',
            name: 'X-Request-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain to request redeem for',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Options for redeeming existing Domain',
      content: { 'application/json': { schema: DomainRedeemV2Schema } },
    },
  },
  responses: {
    202: {
      description:
        'Request Accepted. You may use GET /v2/customers/{customerId}/domains/{domain}/actions/REDEEM to poll status',
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
      description: 'The domain does not exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'There is already a similar action processing',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'Domain invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests received within interval',
      content: { 'application/json': { schema: ErrorLimitSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV2CustomersCustomerIdDomainsDomainTransferOutRoute = createRoute({
  method: 'post',
  path: '/v2/customers/{customerId}/domains/{domain}/transferOut',
  tags: ['Domains'],
  summary: 'Initiate transfer out to another registrar for a .uk domain.',
  request: {
    headers: z.object({
      'X-Request-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A client provided identifier for tracking this request.',
            in: 'header',
            name: 'X-Request-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain to initiate the transfer out for',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      registrar: z
        .string()
        .openapi({
          param: {
            description: 'Registrar tag to push transfer to',
            in: 'query',
            name: 'registrar',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description:
        'Request Accepted. You may use GET /v2/customers/{customerId}/domains/{domain}/actions/TRANSFER_OUT_REQUESTED to poll status',
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
      description: 'The domain does not exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'There is already a similar action processing',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'Domain invalid. TLD must be .uk',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests received within interval',
      content: { 'application/json': { schema: ErrorLimitSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2DomainsMaintenancesRoute = createRoute({
  method: 'get',
  path: '/v2/domains/maintenances',
  tags: ['Domains'],
  summary: 'Retrieve a list of upcoming system Maintenances',
  request: {
    headers: z.object({
      'X-Request-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A client provided identifier for tracking this request.',
            in: 'header',
            name: 'X-Request-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      status: z
        .enum(['ACTIVE', 'CANCELLED'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Only include results with the selected `status` value.  Returns all results if omitted<br/><ul><li><strong style='margin-left: 12px;'>ACTIVE</strong> - The upcoming maintenance is active.</li><li><strong style='margin-left: 12px;'>CANCELLED</strong> - The upcoming maintenance has been cancelled.</li></ul>",
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['ACTIVE', 'CANCELLED'], type: 'string' },
          },
        }),
      modifiedAtAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only include results with `modifiedAt` after the supplied date',
            in: 'query',
            name: 'modifiedAtAfter',
            required: false,
            schema: { format: 'iso-datetime', type: 'string' },
          },
        }),
      startsAtAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only include results with `startsAt` after the supplied date',
            in: 'query',
            name: 'startsAtAfter',
            required: false,
            schema: { format: 'iso-datetime', type: 'string' },
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
          z.int().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: { 'application/json': { schema: MaintenanceSchema } },
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
      description: "Filter parameters don't match schema and/or restrictions",
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests received within interval',
      content: { 'application/json': { schema: ErrorLimitSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV2DomainsMaintenancesMaintenanceIdRoute = createRoute({
  method: 'get',
  path: '/v2/domains/maintenances/{maintenanceId}',
  tags: ['Domains'],
  summary: 'Retrieve the details for an upcoming system Maintenances',
  request: {
    headers: z.object({
      'X-Request-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A client provided identifier for tracking this request.',
            in: 'header',
            name: 'X-Request-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      maintenanceId: z
        .string()
        .openapi({
          param: {
            description: 'The identifier for the system maintenance',
            in: 'path',
            name: 'maintenanceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: { 'application/json': { schema: MaintenanceDetailSchema } },
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
      description: 'The maintenance does not exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests received within interval',
      content: { 'application/json': { schema: ErrorLimitSchema } },
    },
    500: {
      description: 'Internal server error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})
