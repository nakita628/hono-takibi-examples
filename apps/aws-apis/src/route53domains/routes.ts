import { createRoute, z } from '@hono/zod-openapi'

const OperationIdSchema = z.string().max(255).openapi('OperationId')

const AcceptDomainTransferFromAnotherAwsAccountResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for tracking the progress of the request. To query the operation status, use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The AcceptDomainTransferFromAnotherAwsAccount response includes the following element.',
    required: [],
  })
  .openapi('AcceptDomainTransferFromAnotherAwsAccountResponse')

const DomainNameSchema = z.string().max(255).openapi('DomainName')

const StringSchema = z.string().openapi('String')

const AcceptDomainTransferFromAnotherAwsAccountRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the domain that was specified when another Amazon Web Services account submitted a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a> request. ',
        }),
    ),
    Password: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The password that was returned by the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a> request. ',
        }),
    ),
  })
  .openapi({
    required: ['DomainName', 'Password'],
    title: 'AcceptDomainTransferFromAnotherAwsAccountRequest',
    description:
      'The AcceptDomainTransferFromAnotherAwsAccount request includes the following elements.',
  })
  .openapi('AcceptDomainTransferFromAnotherAwsAccountRequest')

const InvalidInputSchema = z.any().openapi('InvalidInput')

const OperationLimitExceededSchema = z.any().openapi('OperationLimitExceeded')

const DomainLimitExceededSchema = z.any().openapi('DomainLimitExceeded')

const UnsupportedTLDSchema = z.any().openapi('UnsupportedTLD')

const AssociateDelegationSignerToDomainResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for tracking the progress of the request. To query the operation status, use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssociateDelegationSignerToDomainResponse')

const NullableIntegerSchema = z.int().openapi('NullableInteger')

const DnssecPublicKeySchema = z.string().max(32768).openapi('DnssecPublicKey')

const DnssecSigningAttributesSchema = z
  .object({
    Algorithm: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description: ' Algorithm which was used to generate the digest from the public key. ',
        }),
    ).exactOptional(),
    Flags: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Defines the type of key. It can be either a KSK (key-signing-key, value 257) or ZSK (zone-signing-key, value 256). Using KSK is always encouraged. Only use ZSK if your DNS provider isn't Route 53 and you don’t have KSK available.</p> <p>If you have KSK and ZSK keys, always use KSK to create a delegations signer (DS) record. If you have ZSK keys only – use ZSK to create a DS record.</p>",
        }),
    ).exactOptional(),
    PublicKey: DnssecPublicKeySchema.and(
      z
        .any()
        .openapi({
          description:
            ' The base64-encoded public key part of the key pair that is passed to the registry. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a delegation signer (DS) record that was created in the registry by <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AssociateDelegationSignerToDomain.html">AssociateDelegationSignerToDomain</a>. ',
    required: [],
  })
  .openapi('DnssecSigningAttributes')

const AssociateDelegationSignerToDomainRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(z.any().openapi({ description: 'The name of the domain.' })),
    SigningAttributes: DnssecSigningAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The information about a key, including the algorithm, public key-value, and flags.',
        }),
    ),
  })
  .openapi({
    required: ['DomainName', 'SigningAttributes'],
    title: 'AssociateDelegationSignerToDomainRequest',
  })
  .openapi('AssociateDelegationSignerToDomainRequest')

const DuplicateRequestSchema = z.any().openapi('DuplicateRequest')

const TLDRulesViolationSchema = z.any().openapi('TLDRulesViolation')

const DnssecLimitExceededSchema = z.any().openapi('DnssecLimitExceeded')

const CancelDomainTransferToAnotherAwsAccountResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier that <code>TransferDomainToAnotherAwsAccount</code> returned to track the progress of the request. Because the transfer request was canceled, the value is no longer valid, and you can't use <code>GetOperationDetail</code> to query the operation status.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The <code>CancelDomainTransferToAnotherAwsAccount</code> response includes the following element.',
    required: [],
  })
  .openapi('CancelDomainTransferToAnotherAwsAccountResponse')

const CancelDomainTransferToAnotherAwsAccountRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the domain for which you want to cancel the transfer to another Amazon Web Services account.',
        }),
    ),
  })
  .openapi({
    required: ['DomainName'],
    title: 'CancelDomainTransferToAnotherAwsAccountRequest',
    description:
      'The CancelDomainTransferToAnotherAwsAccount request includes the following element.',
  })
  .openapi('CancelDomainTransferToAnotherAwsAccountRequest')

const DomainAvailabilitySchema = z
  .enum([
    'AVAILABLE',
    'AVAILABLE_RESERVED',
    'AVAILABLE_PREORDER',
    'UNAVAILABLE',
    'UNAVAILABLE_PREMIUM',
    'UNAVAILABLE_RESTRICTED',
    'RESERVED',
    'DONT_KNOW',
  ])
  .openapi('DomainAvailability')

const CheckDomainAvailabilityResponseSchema = z
  .object({
    Availability: DomainAvailabilitySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Whether the domain name is available for registering.</p> <note> <p>You can register only domains designated as <code>AVAILABLE</code>.</p> </note> <p>Valid values:</p> <dl> <dt>AVAILABLE</dt> <dd> <p>The domain name is available.</p> </dd> <dt>AVAILABLE_RESERVED</dt> <dd> <p>The domain name is reserved under specific conditions.</p> </dd> <dt>AVAILABLE_PREORDER</dt> <dd> <p>The domain name is available and can be preordered.</p> </dd> <dt>DONT_KNOW</dt> <dd> <p>The TLD registry didn't reply with a definitive answer about whether the domain name is available. Route 53 can return this response for a variety of reasons, for example, the registry is performing maintenance. Try again later.</p> </dd> <dt>PENDING</dt> <dd> <p>The TLD registry didn't return a response in the expected amount of time. When the response is delayed, it usually takes just a few extra seconds. You can resubmit the request immediately.</p> </dd> <dt>RESERVED</dt> <dd> <p>The domain name has been reserved for another person or organization.</p> </dd> <dt>UNAVAILABLE</dt> <dd> <p>The domain name is not available.</p> </dd> <dt>UNAVAILABLE_PREMIUM</dt> <dd> <p>The domain name is not available.</p> </dd> <dt>UNAVAILABLE_RESTRICTED</dt> <dd> <p>The domain name is forbidden.</p> </dd> </dl>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The CheckDomainAvailability response includes the following elements.',
    required: [],
  })
  .openapi('CheckDomainAvailabilityResponse')

const LangCodeSchema = z.string().max(3).openapi('LangCode')

const CheckDomainAvailabilityRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the domain that you want to get availability for. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>The domain name can contain only the following characters:</p> <ul> <li> <p>Letters a through z. Domain names are not case sensitive.</p> </li> <li> <p>Numbers 0 through 9.</p> </li> <li> <p>Hyphen (-). You can\'t specify a hyphen at the beginning or end of a label. </p> </li> <li> <p>Period (.) to separate the labels in the name, such as the <code>.</code> in <code>example.com</code>.</p> </li> </ul> <p>Internationalized domain names are not supported for some top-level domains. To determine whether the TLD that you want to use supports internationalized domain names, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a>. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html#domain-name-format-idns">Formatting Internationalized Domain Names</a>. </p>',
        }),
    ),
    IdnLangCode: LangCodeSchema.and(
      z.any().openapi({ description: 'Reserved for future use.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName'],
    title: 'CheckDomainAvailabilityRequest',
    description: 'The CheckDomainAvailability request contains the following elements.',
  })
  .openapi('CheckDomainAvailabilityRequest')

const TransferableSchema = z
  .enum([
    'TRANSFERABLE',
    'UNTRANSFERABLE',
    'DONT_KNOW',
    'DOMAIN_IN_OWN_ACCOUNT',
    'DOMAIN_IN_ANOTHER_ACCOUNT',
    'PREMIUM_DOMAIN',
  ])
  .openapi({
    description:
      "<p>Whether the domain name can be transferred to Route 53.</p> <note> <p>You can transfer only domains that have a value of <code>TRANSFERABLE</code> or <code>Transferable</code>.</p> </note> <p>Valid values:</p> <dl> <dt>TRANSFERABLE</dt> <dd> <p>The domain name can be transferred to Route 53.</p> </dd> <dt>UNTRANSFERRABLE</dt> <dd> <p>The domain name can't be transferred to Route 53.</p> </dd> <dt>DONT_KNOW</dt> <dd> <p>Reserved for future use.</p> </dd> <dt>DOMAIN_IN_OWN_ACCOUNT</dt> <dd> <p>The domain already exists in the current Amazon Web Services account.</p> </dd> <dt>DOMAIN_IN_ANOTHER_ACCOUNT</dt> <dd> <p> the domain exists in another Amazon Web Services account.</p> </dd> <dt>PREMIUM_DOMAIN</dt> <dd> <p>Premium domain transfer is not supported.</p> </dd> </dl>",
  })
  .openapi('Transferable')

const DomainTransferabilitySchema = z
  .object({ Transferable: TransferableSchema.exactOptional() })
  .openapi({
    description:
      'A complex type that contains information about whether the specified domain can be transferred to Route 53.',
    required: [],
  })
  .openapi('DomainTransferability')

const CheckDomainTransferabilityResponseSchema = z
  .object({
    Transferability: DomainTransferabilitySchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about whether the specified domain can be transferred to Route 53.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The CheckDomainTransferability response includes the following elements.',
    required: [],
  })
  .openapi('CheckDomainTransferabilityResponse')

const DomainAuthCodeSchema = z.string().max(1024).openapi('DomainAuthCode')

const CheckDomainTransferabilityRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the domain that you want to transfer to Route 53. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>The domain name can contain only the following characters:</p> <ul> <li> <p>Letters a through z. Domain names are not case sensitive.</p> </li> <li> <p>Numbers 0 through 9.</p> </li> <li> <p>Hyphen (-). You can\'t specify a hyphen at the beginning or end of a label. </p> </li> <li> <p>Period (.) to separate the labels in the name, such as the <code>.</code> in <code>example.com</code>.</p> </li> </ul>',
        }),
    ),
    AuthCode: DomainAuthCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the registrar for the top-level domain (TLD) requires an authorization code to transfer the domain, the code that you got from the current registrar for the domain.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName'],
    title: 'CheckDomainTransferabilityRequest',
    description: 'The CheckDomainTransferability request contains the following elements.',
  })
  .openapi('CheckDomainTransferabilityRequest')

const DeleteDomainResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for tracking the progress of the request. To query the operation status, use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteDomainResponse')

const DeleteDomainRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'Name of the domain to be deleted.' }),
    ),
  })
  .openapi({ required: ['DomainName'], title: 'DeleteDomainRequest' })
  .openapi('DeleteDomainRequest')

const DeleteTagsForDomainResponseSchema = z.object({}).openapi('DeleteTagsForDomainResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const DeleteTagsForDomainRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The domain for which you want to delete one or more tags.' }),
    ),
    TagsToDelete: TagKeyListSchema.and(
      z.any().openapi({ description: 'A list of tag keys to delete.' }),
    ),
  })
  .openapi({
    required: ['DomainName', 'TagsToDelete'],
    title: 'DeleteTagsForDomainRequest',
    description: 'The DeleteTagsForDomainRequest includes the following elements.',
  })
  .openapi('DeleteTagsForDomainRequest')

const DisableDomainAutoRenewResponseSchema = z.object({}).openapi('DisableDomainAutoRenewResponse')

const DisableDomainAutoRenewRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the domain that you want to disable automatic renewal for.',
        }),
    ),
  })
  .openapi({ required: ['DomainName'], title: 'DisableDomainAutoRenewRequest' })
  .openapi('DisableDomainAutoRenewRequest')

const DisableDomainTransferLockResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for tracking the progress of the request. To query the operation status, use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The DisableDomainTransferLock response includes the following element.',
    required: [],
  })
  .openapi('DisableDomainTransferLockResponse')

const DisableDomainTransferLockRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the domain that you want to remove the transfer lock for.',
        }),
    ),
  })
  .openapi({
    required: ['DomainName'],
    title: 'DisableDomainTransferLockRequest',
    description: 'The DisableDomainTransferLock request includes the following element.',
  })
  .openapi('DisableDomainTransferLockRequest')

const DisassociateDelegationSignerFromDomainResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for tracking the progress of the request. To query the operation status, use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DisassociateDelegationSignerFromDomainResponse')

const DisassociateDelegationSignerFromDomainRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(z.any().openapi({ description: 'Name of the domain.' })),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An internal identification number assigned to each DS record after it’s created. You can retrieve it as part of DNSSEC information returned by <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetDomainDetail.html">GetDomainDetail</a>.',
        }),
    ),
  })
  .openapi({
    required: ['DomainName', 'Id'],
    title: 'DisassociateDelegationSignerFromDomainRequest',
  })
  .openapi('DisassociateDelegationSignerFromDomainRequest')

const EnableDomainAutoRenewResponseSchema = z.object({}).openapi('EnableDomainAutoRenewResponse')

const EnableDomainAutoRenewRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the domain that you want to enable automatic renewal for.',
        }),
    ),
  })
  .openapi({ required: ['DomainName'], title: 'EnableDomainAutoRenewRequest' })
  .openapi('EnableDomainAutoRenewRequest')

const EnableDomainTransferLockResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for tracking the progress of the request. To use this ID to query the operation status, use GetOperationDetail.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The EnableDomainTransferLock response includes the following elements.',
    required: [],
  })
  .openapi('EnableDomainTransferLockResponse')

const EnableDomainTransferLockRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the domain that you want to set the transfer lock for.',
        }),
    ),
  })
  .openapi({
    required: ['DomainName'],
    title: 'EnableDomainTransferLockRequest',
    description: 'A request to set the transfer lock for the specified domain.',
  })
  .openapi('EnableDomainTransferLockRequest')

const ReachabilityStatusSchema = z
  .enum(['PENDING', 'DONE', 'EXPIRED'])
  .openapi('ReachabilityStatus')

const GetContactReachabilityStatusResponseSchema = z
  .object({
    domainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The domain name for which you requested the reachability status.',
        }),
    ).exactOptional(),
    status: ReachabilityStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Whether the registrant contact has responded. Values include the following:</p> <dl> <dt>PENDING</dt> <dd> <p>We sent the confirmation email and haven't received a response yet.</p> </dd> <dt>DONE</dt> <dd> <p>We sent the email and got confirmation from the registrant contact.</p> </dd> <dt>EXPIRED</dt> <dd> <p>The time limit expired before the registrant contact responded.</p> </dd> </dl>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetContactReachabilityStatusResponse')

const GetContactReachabilityStatusRequestSchema = z
  .object({
    domainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the domain for which you want to know whether the registrant contact has confirmed that the email address is valid.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetContactReachabilityStatusRequest', required: [] })
  .openapi('GetContactReachabilityStatusRequest')

const HostNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_\-.]*/)
  .max(255)
  .openapi('HostName')

const GlueIpSchema = z.string().max(45).openapi('GlueIp')

const GlueIpListSchema = z.array(GlueIpSchema).openapi('GlueIpList')

const NameserverSchema = z
  .object({
    Name: HostNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The fully qualified host name of the name server.</p> <p>Constraint: Maximum 255 characters</p>',
        }),
    ),
    GlueIps: GlueIpListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Glue IP address of a name server entry. Glue IP addresses are required only when the name of the name server is a subdomain of the domain. For example, if your domain is example.com and the name server for the domain is ns.example.com, you need to specify the IP address for ns.example.com.</p> <p>Constraints: The list can contain only one IPv4 and one IPv6 address.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], description: 'Name server includes the following elements.' })
  .openapi('Nameserver')

const NameserverListSchema = z.array(NameserverSchema).openapi('NameserverList')

const BooleanSchema = z.boolean().openapi('Boolean')

const ContactNameSchema = z.string().max(255).openapi('ContactName')

const ContactTypeSchema = z
  .enum(['PERSON', 'COMPANY', 'ASSOCIATION', 'PUBLIC_BODY', 'RESELLER'])
  .openapi('ContactType')

const AddressLineSchema = z.string().max(255).openapi('AddressLine')

const CitySchema = z.string().max(255).openapi('City')

const StateSchema = z.string().max(255).openapi('State')

const CountryCodeSchema = z
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
    'BL',
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
    'CU',
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
    'IR',
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
    'KP',
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
    'MF',
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
    'SD',
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
    'SS',
    'ST',
    'SV',
    'SX',
    'SY',
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
  .openapi('CountryCode')

const ZipCodeSchema = z.string().max(255).openapi('ZipCode')

const ContactNumberSchema = z.string().max(30).openapi('ContactNumber')

const EmailSchema = z.string().max(254).openapi('Email')

const ExtraParamNameSchema = z
  .enum([
    'DUNS_NUMBER',
    'BRAND_NUMBER',
    'BIRTH_DEPARTMENT',
    'BIRTH_DATE_IN_YYYY_MM_DD',
    'BIRTH_COUNTRY',
    'BIRTH_CITY',
    'DOCUMENT_NUMBER',
    'AU_ID_NUMBER',
    'AU_ID_TYPE',
    'CA_LEGAL_TYPE',
    'CA_BUSINESS_ENTITY_TYPE',
    'CA_LEGAL_REPRESENTATIVE',
    'CA_LEGAL_REPRESENTATIVE_CAPACITY',
    'ES_IDENTIFICATION',
    'ES_IDENTIFICATION_TYPE',
    'ES_LEGAL_FORM',
    'FI_BUSINESS_NUMBER',
    'FI_ID_NUMBER',
    'FI_NATIONALITY',
    'FI_ORGANIZATION_TYPE',
    'IT_NATIONALITY',
    'IT_PIN',
    'IT_REGISTRANT_ENTITY_TYPE',
    'RU_PASSPORT_DATA',
    'SE_ID_NUMBER',
    'SG_ID_NUMBER',
    'VAT_NUMBER',
    'UK_CONTACT_TYPE',
    'UK_COMPANY_NUMBER',
    'EU_COUNTRY_OF_CITIZENSHIP',
    'AU_PRIORITY_TOKEN',
  ])
  .openapi('ExtraParamName')

const ExtraParamValueSchema = z.string().max(2048).openapi('ExtraParamValue')

const ExtraParamSchema = z
  .object({
    Name: ExtraParamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of an additional parameter that is required by a top-level domain. Here are the top-level domains that require additional parameters and the names of the parameters that they require:</p> <dl> <dt>.com.au and .net.au</dt> <dd> <ul> <li> <p> <code>AU_ID_NUMBER</code> </p> </li> <li> <p> <code>AU_ID_TYPE</code> </p> <p>Valid values include the following:</p> <ul> <li> <p> <code>ABN</code> (Australian business number)</p> </li> <li> <p> <code>ACN</code> (Australian company number)</p> </li> <li> <p> <code>TM</code> (Trademark number)</p> </li> </ul> </li> </ul> </dd> <dt>.ca</dt> <dd> <ul> <li> <p> <code>BRAND_NUMBER</code> </p> </li> <li> <p> <code>CA_BUSINESS_ENTITY_TYPE</code> </p> <p>Valid values include the following:</p> <ul> <li> <p> <code>BANK</code> (Bank)</p> </li> <li> <p> <code>COMMERCIAL_COMPANY</code> (Commercial company)</p> </li> <li> <p> <code>COMPANY</code> (Company)</p> </li> <li> <p> <code>COOPERATION</code> (Cooperation)</p> </li> <li> <p> <code>COOPERATIVE</code> (Cooperative)</p> </li> <li> <p> <code>COOPRIX</code> (Cooprix)</p> </li> <li> <p> <code>CORP</code> (Corporation)</p> </li> <li> <p> <code>CREDIT_UNION</code> (Credit union)</p> </li> <li> <p> <code>FOMIA</code> (Federation of mutual insurance associations)</p> </li> <li> <p> <code>INC</code> (Incorporated)</p> </li> <li> <p> <code>LTD</code> (Limited)</p> </li> <li> <p> <code>LTEE</code> (Limitée)</p> </li> <li> <p> <code>LLC</code> (Limited liability corporation)</p> </li> <li> <p> <code>LLP</code> (Limited liability partnership)</p> </li> <li> <p> <code>LTE</code> (Lte.)</p> </li> <li> <p> <code>MBA</code> (Mutual benefit association)</p> </li> <li> <p> <code>MIC</code> (Mutual insurance company)</p> </li> <li> <p> <code>NFP</code> (Not-for-profit corporation)</p> </li> <li> <p> <code>SA</code> (S.A.)</p> </li> <li> <p> <code>SAVINGS_COMPANY</code> (Savings company)</p> </li> <li> <p> <code>SAVINGS_UNION</code> (Savings union)</p> </li> <li> <p> <code>SARL</code> (Société à responsabilité limitée)</p> </li> <li> <p> <code>TRUST</code> (Trust)</p> </li> <li> <p> <code>ULC</code> (Unlimited liability corporation)</p> </li> </ul> </li> <li> <p> <code>CA_LEGAL_TYPE</code> </p> <p>When <code>ContactType</code> is <code>PERSON</code>, valid values include the following:</p> <ul> <li> <p> <code>ABO</code> (Aboriginal Peoples indigenous to Canada)</p> </li> <li> <p> <code>CCT</code> (Canadian citizen)</p> </li> <li> <p> <code>LGR</code> (Legal Representative of a Canadian Citizen or Permanent Resident)</p> </li> <li> <p> <code>RES</code> (Permanent resident of Canada)</p> </li> </ul> <p>When <code>ContactType</code> is a value other than <code>PERSON</code>, valid values include the following:</p> <ul> <li> <p> <code>ASS</code> (Canadian unincorporated association)</p> </li> <li> <p> <code>CCO</code> (Canadian corporation)</p> </li> <li> <p> <code>EDU</code> (Canadian educational institution)</p> </li> <li> <p> <code>GOV</code> (Government or government entity in Canada)</p> </li> <li> <p> <code>HOP</code> (Canadian Hospital)</p> </li> <li> <p> <code>INB</code> (Indian Band recognized by the Indian Act of Canada)</p> </li> <li> <p> <code>LAM</code> (Canadian Library, Archive, or Museum)</p> </li> <li> <p> <code>MAJ</code> (Her/His Majesty the Queen/King)</p> </li> <li> <p> <code>OMK</code> (Official mark registered in Canada)</p> </li> <li> <p> <code>PLT</code> (Canadian Political Party)</p> </li> <li> <p> <code>PRT</code> (Partnership Registered in Canada)</p> </li> <li> <p> <code>TDM</code> (Trademark registered in Canada)</p> </li> <li> <p> <code>TRD</code> (Canadian Trade Union)</p> </li> <li> <p> <code>TRS</code> (Trust established in Canada)</p> </li> </ul> </li> </ul> </dd> <dt>.es</dt> <dd> <ul> <li> <p> <code>ES_IDENTIFICATION</code> </p> <p>The value of <code>ES_IDENTIFICATION</code> depends on the following values:</p> <ul> <li> <p>The value of <code>ES_LEGAL_FORM</code> </p> </li> <li> <p>The value of <code>ES_IDENTIFICATION_TYPE</code> </p> </li> </ul> <p> <b>If <code>ES_LEGAL_FORM</code> is any value other than <code>INDIVIDUAL</code>:</b> </p> <ul> <li> <p>Specify 1 letter + 8 numbers (CIF [Certificado de Identificación Fiscal])</p> </li> <li> <p>Example: B12345678</p> </li> </ul> <p> <b>If <code>ES_LEGAL_FORM</code> is <code>INDIVIDUAL</code>, the value that you specify for <code>ES_IDENTIFICATION</code> depends on the value of <code>ES_IDENTIFICATION_TYPE</code>:</b> </p> <ul> <li> <p>If <code>ES_IDENTIFICATION_TYPE</code> is <code>DNI_AND_NIF</code> (for Spanish contacts):</p> <ul> <li> <p>Specify 8 numbers + 1 letter (DNI [Documento Nacional de Identidad], NIF [Número de Identificación Fiscal])</p> </li> <li> <p>Example: 12345678M</p> </li> </ul> </li> <li> <p>If <code>ES_IDENTIFICATION_TYPE</code> is <code>NIE</code> (for foreigners with legal residence):</p> <ul> <li> <p>Specify 1 letter + 7 numbers + 1 letter ( NIE [Número de Identidad de Extranjero])</p> </li> <li> <p>Example: Y1234567X</p> </li> </ul> </li> <li> <p>If <code>ES_IDENTIFICATION_TYPE</code> is <code>OTHER</code> (for contacts outside of Spain):</p> <ul> <li> <p>Specify a passport number, drivers license number, or national identity card number</p> </li> </ul> </li> </ul> </li> <li> <p> <code>ES_IDENTIFICATION_TYPE</code> </p> <p>Valid values include the following:</p> <ul> <li> <p> <code>DNI_AND_NIF</code> (For Spanish contacts)</p> </li> <li> <p> <code>NIE</code> (For foreigners with legal residence)</p> </li> <li> <p> <code>OTHER</code> (For contacts outside of Spain)</p> </li> </ul> </li> <li> <p> <code>ES_LEGAL_FORM</code> </p> <p>Valid values include the following:</p> <ul> <li> <p> <code>ASSOCIATION</code> </p> </li> <li> <p> <code>CENTRAL_GOVERNMENT_BODY</code> </p> </li> <li> <p> <code>CIVIL_SOCIETY</code> </p> </li> <li> <p> <code>COMMUNITY_OF_OWNERS</code> </p> </li> <li> <p> <code>COMMUNITY_PROPERTY</code> </p> </li> <li> <p> <code>CONSULATE</code> </p> </li> <li> <p> <code>COOPERATIVE</code> </p> </li> <li> <p> <code>DESIGNATION_OF_ORIGIN_SUPERVISORY_COUNCIL</code> </p> </li> <li> <p> <code>ECONOMIC_INTEREST_GROUP</code> </p> </li> <li> <p> <code>EMBASSY</code> </p> </li> <li> <p> <code>ENTITY_MANAGING_NATURAL_AREAS</code> </p> </li> <li> <p> <code>FARM_PARTNERSHIP</code> </p> </li> <li> <p> <code>FOUNDATION</code> </p> </li> <li> <p> <code>GENERAL_AND_LIMITED_PARTNERSHIP</code> </p> </li> <li> <p> <code>GENERAL_PARTNERSHIP</code> </p> </li> <li> <p> <code>INDIVIDUAL</code> </p> </li> <li> <p> <code>LIMITED_COMPANY</code> </p> </li> <li> <p> <code>LOCAL_AUTHORITY</code> </p> </li> <li> <p> <code>LOCAL_PUBLIC_ENTITY</code> </p> </li> <li> <p> <code>MUTUAL_INSURANCE_COMPANY</code> </p> </li> <li> <p> <code>NATIONAL_PUBLIC_ENTITY</code> </p> </li> <li> <p> <code>ORDER_OR_RELIGIOUS_INSTITUTION</code> </p> </li> <li> <p> <code>OTHERS (Only for contacts outside of Spain)</code> </p> </li> <li> <p> <code>POLITICAL_PARTY</code> </p> </li> <li> <p> <code>PROFESSIONAL_ASSOCIATION</code> </p> </li> <li> <p> <code>PUBLIC_LAW_ASSOCIATION</code> </p> </li> <li> <p> <code>PUBLIC_LIMITED_COMPANY</code> </p> </li> <li> <p> <code>REGIONAL_GOVERNMENT_BODY</code> </p> </li> <li> <p> <code>REGIONAL_PUBLIC_ENTITY</code> </p> </li> <li> <p> <code>SAVINGS_BANK</code> </p> </li> <li> <p> <code>SPANISH_OFFICE</code> </p> </li> <li> <p> <code>SPORTS_ASSOCIATION</code> </p> </li> <li> <p> <code>SPORTS_FEDERATION</code> </p> </li> <li> <p> <code>SPORTS_LIMITED_COMPANY</code> </p> </li> <li> <p> <code>TEMPORARY_ALLIANCE_OF_ENTERPRISES</code> </p> </li> <li> <p> <code>TRADE_UNION</code> </p> </li> <li> <p> <code>WORKER_OWNED_COMPANY</code> </p> </li> <li> <p> <code>WORKER_OWNED_LIMITED_COMPANY</code> </p> </li> </ul> </li> </ul> </dd> <dt>.eu</dt> <dd> <ul> <li> <p> <code> EU_COUNTRY_OF_CITIZENSHIP</code> </p> </li> </ul> </dd> <dt>.fi</dt> <dd> <ul> <li> <p> <code>BIRTH_DATE_IN_YYYY_MM_DD</code> </p> </li> <li> <p> <code>FI_BUSINESS_NUMBER</code> </p> </li> <li> <p> <code>FI_ID_NUMBER</code> </p> </li> <li> <p> <code>FI_NATIONALITY</code> </p> <p>Valid values include the following:</p> <ul> <li> <p> <code>FINNISH</code> </p> </li> <li> <p> <code>NOT_FINNISH</code> </p> </li> </ul> </li> <li> <p> <code>FI_ORGANIZATION_TYPE</code> </p> <p>Valid values include the following:</p> <ul> <li> <p> <code>COMPANY</code> </p> </li> <li> <p> <code>CORPORATION</code> </p> </li> <li> <p> <code>GOVERNMENT</code> </p> </li> <li> <p> <code>INSTITUTION</code> </p> </li> <li> <p> <code>POLITICAL_PARTY</code> </p> </li> <li> <p> <code>PUBLIC_COMMUNITY</code> </p> </li> <li> <p> <code>TOWNSHIP</code> </p> </li> </ul> </li> </ul> </dd> <dt>.fr</dt> <dd> <ul> <li> <p> <code>BIRTH_CITY</code> </p> </li> <li> <p> <code>BIRTH_COUNTRY</code> </p> </li> <li> <p> <code>BIRTH_DATE_IN_YYYY_MM_DD</code> </p> </li> <li> <p> <code>BIRTH_DEPARTMENT</code>: Specify the INSEE code that corresponds with the department where the contact was born. If the contact was born somewhere other than France or its overseas departments, specify <code>99</code>. For more information, including a list of departments and the corresponding INSEE numbers, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Departments_of_France">Departments of France</a>.</p> </li> <li> <p> <code>BRAND_NUMBER</code> </p> </li> </ul> </dd> <dt>.it</dt> <dd> <ul> <li> <p> <code>IT_NATIONALITY</code> </p> </li> <li> <p> <code>IT_PIN</code> </p> </li> <li> <p> <code>IT_REGISTRANT_ENTITY_TYPE</code> </p> <p>Valid values include the following:</p> <ul> <li> <p> <code>FOREIGNERS</code> </p> </li> <li> <p> <code>FREELANCE_WORKERS</code> (Freelance workers and professionals)</p> </li> <li> <p> <code>ITALIAN_COMPANIES</code> (Italian companies and one-person companies)</p> </li> <li> <p> <code>NON_PROFIT_ORGANIZATIONS</code> </p> </li> <li> <p> <code>OTHER_SUBJECTS</code> </p> </li> <li> <p> <code>PUBLIC_ORGANIZATIONS</code> </p> </li> </ul> </li> </ul> </dd> <dt>.ru</dt> <dd> <ul> <li> <p> <code>BIRTH_DATE_IN_YYYY_MM_DD</code> </p> </li> <li> <p> <code>RU_PASSPORT_DATA</code> </p> </li> </ul> </dd> <dt>.se</dt> <dd> <ul> <li> <p> <code>BIRTH_COUNTRY</code> </p> </li> <li> <p> <code>SE_ID_NUMBER</code> </p> </li> </ul> </dd> <dt>.sg</dt> <dd> <ul> <li> <p> <code>SG_ID_NUMBER</code> </p> </li> </ul> </dd> <dt>.uk, .co.uk, .me.uk, and .org.uk</dt> <dd> <ul> <li> <p> <code>UK_CONTACT_TYPE</code> </p> <p>Valid values include the following:</p> <ul> <li> <p> <code>CRC</code> (UK Corporation by Royal Charter)</p> </li> <li> <p> <code>FCORP</code> (Non-UK Corporation)</p> </li> <li> <p> <code>FIND</code> (Non-UK Individual, representing self)</p> </li> <li> <p> <code>FOTHER</code> (Non-UK Entity that does not fit into any other category)</p> </li> <li> <p> <code>GOV</code> (UK Government Body)</p> </li> <li> <p> <code>IND</code> (UK Individual (representing self))</p> </li> <li> <p> <code>IP</code> (UK Industrial/Provident Registered Company)</p> </li> <li> <p> <code>LLP</code> (UK Limited Liability Partnership)</p> </li> <li> <p> <code>LTD</code> (UK Limited Company)</p> </li> <li> <p> <code>OTHER</code> (UK Entity that does not fit into any other category)</p> </li> <li> <p> <code>PLC</code> (UK Public Limited Company)</p> </li> <li> <p> <code>PTNR</code> (UK Partnership)</p> </li> <li> <p> <code>RCHAR</code> (UK Registered Charity)</p> </li> <li> <p> <code>SCH</code> (UK School)</p> </li> <li> <p> <code>STAT</code> (UK Statutory Body)</p> </li> <li> <p> <code>STRA</code> (UK Sole Trader)</p> </li> </ul> </li> <li> <p> <code>UK_COMPANY_NUMBER</code> </p> </li> </ul> </dd> </dl> <p>In addition, many TLDs require a <code>VAT_NUMBER</code>.</p>',
        }),
    ),
    Value: ExtraParamValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The value that corresponds with the name of an extra parameter.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Value'],
    description: 'ExtraParam includes the following elements.',
  })
  .openapi('ExtraParam')

const ExtraParamListSchema = z.array(ExtraParamSchema).openapi('ExtraParamList')

const ContactDetailSchema = z
  .object({
    FirstName: ContactNameSchema.and(
      z.any().openapi({ description: 'First name of contact.' }),
    ).exactOptional(),
    LastName: ContactNameSchema.and(
      z.any().openapi({ description: 'Last name of contact.' }),
    ).exactOptional(),
    ContactType: ContactTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the contact is a person, company, association, or public organization. Note the following:</p> <ul> <li> <p>If you specify a value other than <code>PERSON</code>, you must also specify a value for <code>OrganizationName</code>.</p> </li> <li> <p>For some TLDs, the privacy protection available depends on the value that you specify for <code>Contact Type</code>. For the privacy protection settings for your TLD, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i> </p> </li> <li> <p>For .es domains, the value of <code>ContactType</code> must be <code>PERSON</code> for all three contacts.</p> </li> </ul>',
        }),
    ).exactOptional(),
    OrganizationName: ContactNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Name of the organization for contact types other than <code>PERSON</code>.',
        }),
    ).exactOptional(),
    AddressLine1: AddressLineSchema.and(
      z.any().openapi({ description: "First line of the contact's address." }),
    ).exactOptional(),
    AddressLine2: AddressLineSchema.and(
      z.any().openapi({ description: "Second line of contact's address, if any." }),
    ).exactOptional(),
    City: CitySchema.and(
      z.any().openapi({ description: "The city of the contact's address." }),
    ).exactOptional(),
    State: StateSchema.and(
      z.any().openapi({ description: "The state or province of the contact's city." }),
    ).exactOptional(),
    CountryCode: CountryCodeSchema.and(
      z.any().openapi({ description: "Code for the country of the contact's address." }),
    ).exactOptional(),
    ZipCode: ZipCodeSchema.and(
      z.any().openapi({ description: "The zip or postal code of the contact's address." }),
    ).exactOptional(),
    PhoneNumber: ContactNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The phone number of the contact.</p> <p>Constraints: Phone number must be specified in the format "+[country dialing code].[number including any area code&gt;]". For example, a US phone number might appear as <code>"+1.1234567890"</code>.</p>',
        }),
    ).exactOptional(),
    Email: EmailSchema.and(
      z.any().openapi({ description: 'Email address of the contact.' }),
    ).exactOptional(),
    Fax: ContactNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Fax number of the contact.</p> <p>Constraints: Phone number must be specified in the format "+[country dialing code].[number including any area code]". For example, a US phone number might appear as <code>"+1.1234567890"</code>.</p>',
        }),
    ).exactOptional(),
    ExtraParams: ExtraParamListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of name-value pairs for parameters required by certain top-level domains.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'ContactDetail includes the following elements.', required: [] })
  .openapi('ContactDetail')

const RegistrarNameSchema = z.string().openapi('RegistrarName')

const RegistrarWhoIsServerSchema = z.string().openapi('RegistrarWhoIsServer')

const RegistrarUrlSchema = z.string().openapi('RegistrarUrl')

const RegistryDomainIdSchema = z.string().openapi('RegistryDomainId')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ResellerSchema = z.string().openapi('Reseller')

const DNSSecSchema = z.string().openapi('DNSSec')

const DomainStatusSchema = z.string().openapi('DomainStatus')

const DomainStatusListSchema = z.array(DomainStatusSchema).openapi('DomainStatusList')

const DnssecKeySchema = z
  .object({
    Algorithm: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of the public key’s cryptographic algorithm according to an <a href="https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xml">IANA</a> assignment. </p> <p>If Route 53 is your DNS service, set this to 13.</p> <p>For more information about enabling DNSSEC signing, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec-enable-signing.html">Enabling DNSSEC signing and establishing a chain of trust</a>.</p>',
        }),
    ).exactOptional(),
    Flags: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Defines the type of key. It can be either a KSK (key-signing-key, value 257) or ZSK (zone-signing-key, value 256). Using KSK is always encouraged. Only use ZSK if your DNS provider isn't Route 53 and you don’t have KSK available.</p> <p>If you have KSK and ZSK keys, always use KSK to create a delegations signer (DS) record. If you have ZSK keys only – use ZSK to create a DS record.</p>",
        }),
    ).exactOptional(),
    PublicKey: DnssecPublicKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The base64-encoded public key part of the key pair that is passed to the registry .',
        }),
    ).exactOptional(),
    DigestType: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The number of the DS digest algorithm according to an IANA assignment.</p> <p>For more information, see <a href="https://www.iana.org/assignments/ds-rr-types/ds-rr-types.xhtml">IANA</a> for DNSSEC Delegation Signer (DS) Resource Record (RR) Type Digest Algorithms. </p>',
        }),
    ).exactOptional(),
    Digest: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The delegation signer digest.</p> <p>Digest is calculated from the public key provided using specified digest algorithm and this digest is the actual value returned from the registry nameservers as the value of DS records. </p>',
        }),
    ).exactOptional(),
    KeyTag: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A numeric identification of the DNSKEY record referred to by this DS record. ',
        }),
    ).exactOptional(),
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An ID assigned to each DS record created by <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AssociateDelegationSignerToDomain.html">AssociateDelegationSignerToDomain</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Information about the DNSSEC key.</p> <p>You get this from your DNS provider and then give it to Route 53 (by using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AssociateDelegationSignerToDomain.html">AssociateDelegationSignerToDomain</a>) to pass it to the registry to establish the chain of trust.</p>',
    required: [],
  })
  .openapi('DnssecKey')

const DnssecKeyListSchema = z.array(DnssecKeySchema).openapi('DnssecKeyList')

const GetDomainDetailResponseSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The name of a domain.' }),
    ).exactOptional(),
    Nameservers: NameserverListSchema.and(
      z.any().openapi({ description: 'The name servers of the domain.' }),
    ).exactOptional(),
    AutoRenew: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether the domain registration is set to renew automatically.',
        }),
    ).exactOptional(),
    AdminContact: ContactDetailSchema.and(
      z.any().openapi({ description: 'Provides details about the domain administrative contact.' }),
    ).exactOptional(),
    RegistrantContact: ContactDetailSchema.and(
      z.any().openapi({ description: 'Provides details about the domain registrant.' }),
    ).exactOptional(),
    TechContact: ContactDetailSchema.and(
      z.any().openapi({ description: 'Provides details about the domain technical contact.' }),
    ).exactOptional(),
    AdminPrivacy: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether contact information is concealed from WHOIS queries. If the value is <code>true</code>, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If the value is <code>false</code>, WHOIS queries return the information that you entered for the admin contact.',
        }),
    ).exactOptional(),
    RegistrantPrivacy: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether contact information is concealed from WHOIS queries. If the value is <code>true</code>, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If the value is <code>false</code>, WHOIS queries return the information that you entered for the registrant contact (domain owner).',
        }),
    ).exactOptional(),
    TechPrivacy: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether contact information is concealed from WHOIS queries. If the value is <code>true</code>, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If the value is <code>false</code>, WHOIS queries return the information that you entered for the technical contact.',
        }),
    ).exactOptional(),
    RegistrarName: RegistrarNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of the registrar of the domain as identified in the registry. Domains with a .com, .net, or .org TLD are registered by Amazon Registrar. All other domains are registered by our registrar associate, Gandi. The value for domains that are registered by Gandi is <code>"GANDI SAS"</code>. ',
        }),
    ).exactOptional(),
    WhoIsServer: RegistrarWhoIsServerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified name of the WHOIS server that can answer the WHOIS query for the domain.',
        }),
    ).exactOptional(),
    RegistrarUrl: RegistrarUrlSchema.and(
      z.any().openapi({ description: 'Web address of the registrar.' }),
    ).exactOptional(),
    AbuseContactEmail: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            'Email address to contact to report incorrect contact information for a domain, to report that the domain is being used to send spam, to report that someone is cybersquatting on a domain name, or report some other type of abuse.',
        }),
    ).exactOptional(),
    AbuseContactPhone: ContactNumberSchema.and(
      z.any().openapi({ description: 'Phone number for reporting abuse.' }),
    ).exactOptional(),
    RegistryDomainId: RegistryDomainIdSchema.and(
      z.any().openapi({ description: 'Reserved for future use.' }),
    ).exactOptional(),
    CreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date when the domain was created as found in the response to a WHOIS query. The date and time is in Unix time format and Coordinated Universal time (UTC).',
        }),
    ).exactOptional(),
    UpdatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The last updated date of the domain as found in the response to a WHOIS query. The date and time is in Unix time format and Coordinated Universal time (UTC).',
        }),
    ).exactOptional(),
    ExpirationDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date when the registration for the domain is set to expire. The date and time is in Unix time format and Coordinated Universal time (UTC).',
        }),
    ).exactOptional(),
    Reseller: ResellerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Reseller of the domain. Domains registered or transferred using Route 53 domains will have <code>"Amazon"</code> as the reseller. ',
        }),
    ).exactOptional(),
    DnsSec: DNSSecSchema.and(z.any().openapi({ description: 'Deprecated.' })).exactOptional(),
    StatusList: DomainStatusListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of domain name status codes, also known as Extensible Provisioning Protocol (EPP) status codes.</p> <p>ICANN, the organization that maintains a central database of domain names, has developed a set of domain name status codes that tell you the status of a variety of operations on a domain name, for example, registering a domain name, transferring a domain name to another registrar, renewing the registration for a domain name, and so on. All registrars use this same set of status codes.</p> <p>For a current list of domain name status codes and an explanation of what each code means, go to the <a href="https://www.icann.org/">ICANN website</a> and search for <code>epp status codes</code>. (Search on the ICANN website; web searches sometimes return an old version of the document.)</p>',
        }),
    ).exactOptional(),
    DnssecKeys: DnssecKeyListSchema.and(
      z
        .any()
        .openapi({
          description: 'A complex type that contains information about the DNSSEC configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The GetDomainDetail response includes the following elements.',
    required: [],
  })
  .openapi('GetDomainDetailResponse')

const GetDomainDetailRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the domain that you want to get detailed information about.',
        }),
    ),
  })
  .openapi({
    required: ['DomainName'],
    title: 'GetDomainDetailRequest',
    description: 'The GetDomainDetail request includes the following element.',
  })
  .openapi('GetDomainDetailRequest')

const DomainSuggestionSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'A suggested domain name.' }),
    ).exactOptional(),
    Availability: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Whether the domain name is available for registering.</p> <note> <p>You can register only the domains that are designated as <code>AVAILABLE</code>.</p> </note> <p>Valid values:</p> <dl> <dt>AVAILABLE</dt> <dd> <p>The domain name is available.</p> </dd> <dt>AVAILABLE_RESERVED</dt> <dd> <p>The domain name is reserved under specific conditions.</p> </dd> <dt>AVAILABLE_PREORDER</dt> <dd> <p>The domain name is available and can be preordered.</p> </dd> <dt>DONT_KNOW</dt> <dd> <p>The TLD registry didn't reply with a definitive answer about whether the domain name is available. Route 53 can return this response for a variety of reasons, for example, the registry is performing maintenance. Try again later.</p> </dd> <dt>PENDING</dt> <dd> <p>The TLD registry didn't return a response in the expected amount of time. When the response is delayed, it usually takes just a few extra seconds. You can resubmit the request immediately.</p> </dd> <dt>RESERVED</dt> <dd> <p>The domain name has been reserved for another person or organization.</p> </dd> <dt>UNAVAILABLE</dt> <dd> <p>The domain name is not available.</p> </dd> <dt>UNAVAILABLE_PREMIUM</dt> <dd> <p>The domain name is not available.</p> </dd> <dt>UNAVAILABLE_RESTRICTED</dt> <dd> <p>The domain name is forbidden.</p> </dd> </dl>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about one suggested domain name.', required: [] })
  .openapi('DomainSuggestion')

const DomainSuggestionsListSchema = z.array(DomainSuggestionSchema).openapi('DomainSuggestionsList')

const GetDomainSuggestionsResponseSchema = z
  .object({
    SuggestionsList: DomainSuggestionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of possible domain names. If you specified <code>true</code> for <code>OnlyAvailable</code> in the request, the list contains only domains that are available for registration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDomainSuggestionsResponse')

const IntegerSchema = z.int().openapi('Integer')

const GetDomainSuggestionsRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A domain name that you want to use as the basis for a list of possible domain names. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>The domain name can contain only the following characters:</p> <ul> <li> <p>Letters a through z. Domain names are not case sensitive.</p> </li> <li> <p>Numbers 0 through 9.</p> </li> <li> <p>Hyphen (-). You can\'t specify a hyphen at the beginning or end of a label. </p> </li> <li> <p>Period (.) to separate the labels in the name, such as the <code>.</code> in <code>example.com</code>.</p> </li> </ul> <p>Internationalized domain names are not supported for some top-level domains. To determine whether the TLD that you want to use supports internationalized domain names, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a>. </p>',
        }),
    ),
    SuggestionCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of suggested domain names that you want Route 53 to return. Specify a value between 1 and 50.',
        }),
    ),
    OnlyAvailable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "If <code>OnlyAvailable</code> is <code>true</code>, Route 53 returns only domain names that are available. If <code>OnlyAvailable</code> is <code>false</code>, Route 53 returns domain names without checking whether they're available to be registered. To determine whether the domain is available, you can call <code>checkDomainAvailability</code> for each suggestion.",
        }),
    ),
  })
  .openapi({
    required: ['DomainName', 'SuggestionCount', 'OnlyAvailable'],
    title: 'GetDomainSuggestionsRequest',
  })
  .openapi('GetDomainSuggestionsRequest')

const OperationStatusSchema = z
  .enum(['SUBMITTED', 'IN_PROGRESS', 'ERROR', 'SUCCESSFUL', 'FAILED'])
  .openapi('OperationStatus')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const OperationTypeSchema = z
  .enum([
    'REGISTER_DOMAIN',
    'DELETE_DOMAIN',
    'TRANSFER_IN_DOMAIN',
    'UPDATE_DOMAIN_CONTACT',
    'UPDATE_NAMESERVER',
    'CHANGE_PRIVACY_PROTECTION',
    'DOMAIN_LOCK',
    'ENABLE_AUTORENEW',
    'DISABLE_AUTORENEW',
    'ADD_DNSSEC',
    'REMOVE_DNSSEC',
    'EXPIRE_DOMAIN',
    'TRANSFER_OUT_DOMAIN',
    'CHANGE_DOMAIN_OWNER',
    'RENEW_DOMAIN',
    'PUSH_DOMAIN',
    'INTERNAL_TRANSFER_OUT_DOMAIN',
    'INTERNAL_TRANSFER_IN_DOMAIN',
  ])
  .openapi('OperationType')

const StatusFlagSchema = z
  .enum([
    'PENDING_ACCEPTANCE',
    'PENDING_CUSTOMER_ACTION',
    'PENDING_AUTHORIZATION',
    'PENDING_PAYMENT_VERIFICATION',
    'PENDING_SUPPORT_CASE',
  ])
  .openapi('StatusFlag')

const GetOperationDetailResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z.any().openapi({ description: 'The identifier for the operation.' }),
    ).exactOptional(),
    Status: OperationStatusSchema.and(
      z
        .any()
        .openapi({ description: 'The current status of the requested operation in the system.' }),
    ).exactOptional(),
    Message: ErrorMessageSchema.and(
      z
        .any()
        .openapi({ description: 'Detailed information on the status including possible errors.' }),
    ).exactOptional(),
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The name of a domain.' }),
    ).exactOptional(),
    Type: OperationTypeSchema.and(
      z.any().openapi({ description: 'The type of operation that was requested.' }),
    ).exactOptional(),
    SubmittedDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date when the request was submitted.' }),
    ).exactOptional(),
    LastUpdatedDate: TimestampSchema.and(
      z.any().openapi({ description: ' The date when the operation was last updated. ' }),
    ).exactOptional(),
    StatusFlag: StatusFlagSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Lists any outstanding operations that require customer action. Valid values are:</p> <ul> <li> <p> <code>PENDING_ACCEPTANCE</code>: The operation is waiting for acceptance from the account that is receiving the domain.</p> </li> <li> <p> <code>PENDING_CUSTOMER_ACTION</code>: The operation is waiting for customer action, for example, returning an email.</p> </li> <li> <p> <code>PENDING_AUTHORIZATION</code>: The operation is waiting for the form of authorization. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ResendOperationAuthorization.html">ResendOperationAuthorization</a>.</p> </li> <li> <p> <code>PENDING_PAYMENT_VERIFICATION</code>: The operation is waiting for the payment method to validate.</p> </li> <li> <p> <code>PENDING_SUPPORT_CASE</code>: The operation includes a support case and is waiting for its resolution.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The GetOperationDetail response includes the following elements.',
    required: [],
  })
  .openapi('GetOperationDetailResponse')

const GetOperationDetailRequestSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the operation for which you want to get the status. Route 53 returned the identifier in the response to the original request.',
        }),
    ),
  })
  .openapi({
    required: ['OperationId'],
    title: 'GetOperationDetailRequest',
    description:
      'The <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> request includes the following element.',
  })
  .openapi('GetOperationDetailRequest')

const DomainSummarySchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the domain that the summary information applies to.',
        }),
    ).exactOptional(),
    AutoRenew: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether the domain is automatically renewed upon expiration.',
        }),
    ).exactOptional(),
    TransferLock: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether a domain is locked from unauthorized transfer to another party.',
        }),
    ).exactOptional(),
    Expiry: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Expiration date of the domain in Unix time format and Coordinated Universal Time (UTC).',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about one domain.', required: [] })
  .openapi('DomainSummary')

const DomainSummaryListSchema = z.array(DomainSummarySchema).openapi('DomainSummaryList')

const PageMarkerSchema = z.string().max(4096).openapi('PageMarker')

const ListDomainsResponseSchema = z
  .object({
    Domains: DomainSummaryListSchema.and(
      z.any().openapi({ description: 'A list of domains.' }),
    ).exactOptional(),
    NextPageMarker: PageMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more domains than you specified for <code>MaxItems</code> in the request, submit another request and include the value of <code>NextPageMarker</code> in the value of <code>Marker</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The ListDomains response includes the following elements.',
    required: [],
  })
  .openapi('ListDomainsResponse')

const ListDomainsAttributeNameSchema = z
  .enum(['DomainName', 'Expiry'])
  .openapi('ListDomainsAttributeName')

const OperatorSchema = z.enum(['LE', 'GE', 'BEGINS_WITH']).openapi('Operator')

const ValueSchema = z.string().min(1).max(1024).openapi('Value')

const ValuesSchema = z.array(ValueSchema).length(1).openapi('Values')

const FilterConditionSchema = z
  .object({
    Name: ListDomainsAttributeNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Name of the field which should be used for filtering the list of domains.',
        }),
    ),
    Operator: OperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The operator values for filtering domain names. The values can be:</p> <ul> <li> <p> <code>LE</code>: Less than, or equal to</p> </li> <li> <p> <code>GE</code>: Greater than, or equal to</p> </li> <li> <p> <code>BEGINS_WITH</code>: Begins with</p> </li> </ul>',
        }),
    ),
    Values: ValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An array of strings presenting values to compare. Only 1 item in the list is currently supported.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Operator', 'Values'],
    description:
      'Information for the filtering of a list of domains returned by <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains__ListDomains.html">ListDomains</a>.',
  })
  .openapi('FilterCondition')

const FilterConditionsSchema = z.array(FilterConditionSchema).openapi('FilterConditions')

const SortOrderSchema = z.enum(['ASC', 'DESC']).openapi('SortOrder')

const SortConditionSchema = z
  .object({
    Name: ListDomainsAttributeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Field to be used for sorting the list of domains. It can be either the name or the expiration for a domain. Note that if <code>filterCondition</code> is used in the same <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains__ListDomains.html">ListDomains</a> call, the field used for sorting has to be the same as the field used for filtering.',
        }),
    ),
    SortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sort order for a list of domains. Either ascending (ASC) or descending (DES).',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'SortOrder'],
    description: 'Information for sorting a list of domains.',
  })
  .openapi('SortCondition')

const PageMaxItemsSchema = z.int().max(100).openapi('PageMaxItems')

const ListDomainsRequestSchema = z
  .object({
    FilterConditions: FilterConditionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about the filters applied during the <code>ListDomains</code> request. The filter conditions can include domain name and domain expiration.',
        }),
    ).exactOptional(),
    SortCondition: SortConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that contains information about the requested ordering of domains in the returned list.',
        }),
    ).exactOptional(),
    Marker: PageMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For an initial request for a list of domains, omit this element. If the number of domains that are associated with the current Amazon Web Services account is greater than the value that you specified for <code>MaxItems</code>, you can use <code>Marker</code> to return additional domains. Get the value of <code>NextPageMarker</code> from the previous response, and submit another request that includes the value of <code>NextPageMarker</code> in the <code>Marker</code> element.</p> <p>Constraints: The marker must match the value specified in the previous request.</p>',
        }),
    ).exactOptional(),
    MaxItems: PageMaxItemsSchema.and(
      z
        .any()
        .openapi({ description: '<p>Number of domains to be returned.</p> <p>Default: 20</p>' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListDomainsRequest',
    description: 'The ListDomains request includes the following elements.',
    required: [],
  })
  .openapi('ListDomainsRequest')

const OperationSummarySchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z.any().openapi({ description: 'Identifier returned to track the requested action.' }),
    ).exactOptional(),
    Status: OperationStatusSchema.and(
      z
        .any()
        .openapi({ description: 'The current status of the requested operation in the system.' }),
    ).exactOptional(),
    Type: OperationTypeSchema.and(
      z.any().openapi({ description: 'Type of the action requested.' }),
    ).exactOptional(),
    SubmittedDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date when the request was submitted.' }),
    ).exactOptional(),
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: ' Name of the domain. ' }),
    ).exactOptional(),
    Message: ErrorMessageSchema.and(
      z.any().openapi({ description: ' Message about the operation. ' }),
    ).exactOptional(),
    StatusFlag: StatusFlagSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Automatically checks whether there are no outstanding operations on domains that need customer attention. </p> <p> Valid values are:</p> <ul> <li> <p> <code>PENDING_ACCEPTANCE</code>: The operation is waiting for acceptance from the account that is receiving the domain.</p> </li> <li> <p> <code>PENDING_CUSTOMER_ACTION</code>: The operation is waiting for customer action, for example, returning an email.</p> </li> <li> <p> <code>PENDING_AUTHORIZATION</code>: The operation is waiting for the form of authorization. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ResendOperationAuthorization.html">ResendOperationAuthorization</a>.</p> </li> <li> <p> <code>PENDING_PAYMENT_VERIFICATION</code>: The operation is waiting for the payment method to validate.</p> </li> <li> <p> <code>PENDING_SUPPORT_CASE</code>: The operation includes a support case and is waiting for its resolution.</p> </li> </ul>',
        }),
    ).exactOptional(),
    LastUpdatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The date when the last change was made in Unix time format and Coordinated Universal Time (UTC). ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'OperationSummary includes the following elements.', required: [] })
  .openapi('OperationSummary')

const OperationSummaryListSchema = z.array(OperationSummarySchema).openapi('OperationSummaryList')

const ListOperationsResponseSchema = z
  .object({
    Operations: OperationSummaryListSchema.and(
      z.any().openapi({ description: 'Lists summaries of the operations.' }),
    ).exactOptional(),
    NextPageMarker: PageMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more operations than you specified for <code>MaxItems</code> in the request, submit another request and include the value of <code>NextPageMarker</code> in the value of <code>Marker</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The ListOperations response includes the following elements.',
    required: [],
  })
  .openapi('ListOperationsResponse')

const OperationStatusListSchema = z
  .array(OperationStatusSchema)
  .max(5)
  .openapi('OperationStatusList')

const OperationTypeListSchema = z.array(OperationTypeSchema).max(18).openapi('OperationTypeList')

const ListOperationsSortAttributeNameSchema = z
  .literal('SubmittedDate')
  .openapi('ListOperationsSortAttributeName')

const ListOperationsRequestSchema = z
  .object({
    SubmittedSince: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional parameter that lets you get information about all the operations that you submitted after a specified date and time. Specify the date and time in Unix time format and Coordinated Universal time (UTC).',
        }),
    ).exactOptional(),
    Marker: PageMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'For an initial request for a list of operations, omit this element. If the number of operations that are not yet complete is greater than the value that you specified for <code>MaxItems</code>, you can use <code>Marker</code> to return additional operations. Get the value of <code>NextPageMarker</code> from the previous response, and submit another request that includes the value of <code>NextPageMarker</code> in the <code>Marker</code> element.',
        }),
    ).exactOptional(),
    MaxItems: PageMaxItemsSchema.and(
      z
        .any()
        .openapi({ description: '<p>Number of domains to be returned.</p> <p>Default: 20</p>' }),
    ).exactOptional(),
    Status: OperationStatusListSchema.and(
      z.any().openapi({ description: ' The status of the operations. ' }),
    ).exactOptional(),
    Type: OperationTypeListSchema.and(
      z.any().openapi({ description: ' An arrays of the domains operation types. ' }),
    ).exactOptional(),
    SortBy: ListOperationsSortAttributeNameSchema.and(
      z.any().openapi({ description: ' The sort type for returned values. ' }),
    ).exactOptional(),
    SortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description: ' The sort order ofr returned values, either ascending or descending. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListOperationsRequest',
    description: 'The ListOperations request includes the following elements.',
    required: [],
  })
  .openapi('ListOperationsRequest')

const DomainPriceNameSchema = z.string().min(1).max(255).openapi('DomainPriceName')

const PriceSchema = z.float64().openapi('Price')

const CurrencySchema = z.string().length(3).openapi('Currency')

const PriceWithCurrencySchema = z
  .object({
    Price: PriceSchema.and(
      z.any().openapi({ description: 'The price of a domain, in a specific currency.' }),
    ),
    Currency: CurrencySchema.and(z.any().openapi({ description: 'The currency specifier.' })),
  })
  .openapi({ required: ['Price', 'Currency'], description: 'Currency-specific price information.' })
  .openapi('PriceWithCurrency')

const DomainPriceSchema = z
  .object({
    Name: DomainPriceNameSchema.and(
      z.any().openapi({ description: 'The name of the TLD for which the prices apply.' }),
    ).exactOptional(),
    RegistrationPrice: PriceWithCurrencySchema.and(
      z.any().openapi({ description: 'The price for domain registration with Route 53.' }),
    ).exactOptional(),
    TransferPrice: PriceWithCurrencySchema.and(
      z
        .any()
        .openapi({
          description: 'The price for transferring the domain registration to Route 53.',
        }),
    ).exactOptional(),
    RenewalPrice: PriceWithCurrencySchema.and(
      z.any().openapi({ description: 'The price for renewing domain registration with Route 53.' }),
    ).exactOptional(),
    ChangeOwnershipPrice: PriceWithCurrencySchema.and(
      z.any().openapi({ description: 'The price for changing domain ownership.' }),
    ).exactOptional(),
    RestorationPrice: PriceWithCurrencySchema.and(
      z.any().openapi({ description: 'The price for restoring the domain with Route 53.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the domain price associated with a TLD.',
    required: [],
  })
  .openapi('DomainPrice')

const DomainPriceListSchema = z.array(DomainPriceSchema).openapi('DomainPriceList')

const ListPricesResponseSchema = z
  .object({
    Prices: DomainPriceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A complex type that includes all the pricing information. If you specify a TLD, this array contains only the pricing for that TLD.',
        }),
    ).exactOptional(),
    NextPageMarker: PageMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If there are more prices than you specified for <code>MaxItems</code> in the request, submit another request and include the value of <code>NextPageMarker</code> in the value of <code>Marker</code>. </p> <p>Used only for all TLDs. If you specify a TLD, don't specify a <code>NextPageMarker</code>.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPricesResponse')

const TldNameSchema = z.string().min(2).max(255).openapi('TldName')

const ListPricesRequestSchema = z
  .object({
    Tld: TldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The TLD for which you want to receive the pricing information. For example. <code>.net</code>.</p> <p>If a <code>Tld</code> value is not provided, a list of prices for all TLDs supported by Route 53 is returned.</p>',
        }),
    ).exactOptional(),
    Marker: PageMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>For an initial request for a list of prices, omit this element. If the number of prices that are not yet complete is greater than the value that you specified for <code>MaxItems</code>, you can use <code>Marker</code> to return additional prices. Get the value of <code>NextPageMarker</code> from the previous response, and submit another request that includes the value of <code>NextPageMarker</code> in the <code>Marker</code> element. </p> <p>Used only for all TLDs. If you specify a TLD, don't specify a <code>Marker</code>.</p>",
        }),
    ).exactOptional(),
    MaxItems: PageMaxItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Number of <code>Prices</code> to be returned.</p> <p>Used only for all TLDs. If you specify a TLD, don't specify a <code>MaxItems</code>.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListPricesRequest', required: [] })
  .openapi('ListPricesRequest')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The key (name) of a tag.</p> <p>Valid values: A-Z, a-z, 0-9, space, ".:/=+\\-@"</p> <p>Constraints: Each key can be 1-128 characters long.</p>',
        }),
    ).exactOptional(),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value of a tag.</p> <p>Valid values: A-Z, a-z, 0-9, space, ".:/=+\\-@"</p> <p>Constraints: Each value can be 0-256 characters long.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Each tag includes the following elements.', required: [] })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const ListTagsForDomainResponseSchema = z
  .object({
    TagList: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of the tags that are associated with the specified domain.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The ListTagsForDomain response includes the following elements.',
    required: [],
  })
  .openapi('ListTagsForDomainResponse')

const ListTagsForDomainRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The domain for which you want to get a list of tags.' }),
    ),
  })
  .openapi({
    required: ['DomainName'],
    title: 'ListTagsForDomainRequest',
    description: 'The ListTagsForDomainRequest includes the following elements.',
  })
  .openapi('ListTagsForDomainRequest')

const LabelSchema = z.string().min(1).max(255).openapi('Label')

const PushDomainRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(z.any().openapi({ description: ' Name of the domain. ' })),
    Target: LabelSchema.and(z.any().openapi({ description: ' New IPS tag for the domain. ' })),
  })
  .openapi({ required: ['DomainName', 'Target'], title: 'PushDomainRequest' })
  .openapi('PushDomainRequest')

const RegisterDomainResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for tracking the progress of the request. To query the operation status, use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The RegisterDomain response includes the following element.',
    required: [],
  })
  .openapi('RegisterDomainResponse')

const DurationInYearsSchema = z.int().min(1).max(10).openapi('DurationInYears')

const RegisterDomainRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The domain name that you want to register. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>The domain name can contain only the following characters:</p> <ul> <li> <p>Letters a through z. Domain names are not case sensitive.</p> </li> <li> <p>Numbers 0 through 9.</p> </li> <li> <p>Hyphen (-). You can\'t specify a hyphen at the beginning or end of a label. </p> </li> <li> <p>Period (.) to separate the labels in the name, such as the <code>.</code> in <code>example.com</code>.</p> </li> </ul> <p>Internationalized domain names are not supported for some top-level domains. To determine whether the TLD that you want to use supports internationalized domain names, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a>. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html#domain-name-format-idns">Formatting Internationalized Domain Names</a>. </p>',
        }),
    ),
    IdnLangCode: LangCodeSchema.and(
      z.any().openapi({ description: 'Reserved for future use.' }),
    ).exactOptional(),
    DurationInYears: DurationInYearsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of years that you want to register the domain for. Domains are registered for a minimum of one year. The maximum period depends on the top-level domain. For the range of valid values for your domain, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>Default: 1</p>',
        }),
    ),
    AutoRenew: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the domain will be automatically renewed (<code>true</code>) or not (<code>false</code>). Auto renewal only takes effect after the account is charged.</p> <p>Default: <code>true</code> </p>',
        }),
    ).exactOptional(),
    AdminContact: ContactDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides detailed contact information. For information about the values that you specify for each element, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html">ContactDetail</a>.',
        }),
    ),
    RegistrantContact: ContactDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides detailed contact information. For information about the values that you specify for each element, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html">ContactDetail</a>.',
        }),
    ),
    TechContact: ContactDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides detailed contact information. For information about the values that you specify for each element, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html">ContactDetail</a>.',
        }),
    ),
    PrivacyProtectAdminContact: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the information that you entered for the admin contact.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> <p>Default: <code>true</code> </p>',
        }),
    ).exactOptional(),
    PrivacyProtectRegistrantContact: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the information that you entered for the registrant contact (the domain owner).</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> <p>Default: <code>true</code> </p>',
        }),
    ).exactOptional(),
    PrivacyProtectTechContact: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the information that you entered for the technical contact.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> <p>Default: <code>true</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName', 'DurationInYears', 'AdminContact', 'RegistrantContact', 'TechContact'],
    title: 'RegisterDomainRequest',
    description: 'The RegisterDomain request includes the following elements.',
  })
  .openapi('RegisterDomainRequest')

const RejectDomainTransferFromAnotherAwsAccountResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier that <code>TransferDomainToAnotherAwsAccount</code> returned to track the progress of the request. Because the transfer request was rejected, the value is no longer valid, and you can't use <code>GetOperationDetail</code> to query the operation status.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The RejectDomainTransferFromAnotherAwsAccount response includes the following element.',
    required: [],
  })
  .openapi('RejectDomainTransferFromAnotherAwsAccountResponse')

const RejectDomainTransferFromAnotherAwsAccountRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the domain that was specified when another Amazon Web Services account submitted a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a> request. ',
        }),
    ),
  })
  .openapi({
    required: ['DomainName'],
    title: 'RejectDomainTransferFromAnotherAwsAccountRequest',
    description:
      'The RejectDomainTransferFromAnotherAwsAccount request includes the following element.',
  })
  .openapi('RejectDomainTransferFromAnotherAwsAccountRequest')

const RenewDomainResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for tracking the progress of the request. To query the operation status, use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RenewDomainResponse')

const CurrentExpiryYearSchema = z.int().openapi('CurrentExpiryYear')

const RenewDomainRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The name of the domain that you want to renew.' }),
    ),
    DurationInYears: DurationInYearsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of years that you want to renew the domain for. The maximum number of years depends on the top-level domain. For the range of valid values for your domain, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>Default: 1</p>',
        }),
    ).exactOptional(),
    CurrentExpiryYear: CurrentExpiryYearSchema.and(
      z
        .any()
        .openapi({
          description:
            'The year when the registration for the domain is set to expire. This value must match the current expiration date for the domain.',
        }),
    ),
  })
  .openapi({
    required: ['DomainName', 'CurrentExpiryYear'],
    title: 'RenewDomainRequest',
    description:
      'A <code>RenewDomain</code> request includes the number of years that you want to renew for and the current expiration year.',
  })
  .openapi('RenewDomainRequest')

const ResendContactReachabilityEmailResponseSchema = z
  .object({
    domainName: DomainNameSchema.and(
      z
        .any()
        .openapi({ description: 'The domain name for which you requested a confirmation email.' }),
    ).exactOptional(),
    emailAddress: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address for the registrant contact at the time that we sent the verification email.',
        }),
    ).exactOptional(),
    isAlreadyVerified: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            " <code>True</code> if the email address for the registrant contact has already been verified, and <code>false</code> otherwise. If the email address has already been verified, we don't send another confirmation email.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResendContactReachabilityEmailResponse')

const ResendContactReachabilityEmailRequestSchema = z
  .object({
    domainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the domain for which you want Route 53 to resend a confirmation email to the registrant contact.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ResendContactReachabilityEmailRequest', required: [] })
  .openapi('ResendContactReachabilityEmailRequest')

const ResendOperationAuthorizationRequestSchema = z
  .object({
    OperationId: OperationIdSchema.and(z.any().openapi({ description: ' Operation ID. ' })),
  })
  .openapi({ required: ['OperationId'], title: 'ResendOperationAuthorizationRequest' })
  .openapi('ResendOperationAuthorizationRequest')

const RetrieveDomainAuthCodeResponseSchema = z
  .object({
    AuthCode: DomainAuthCodeSchema.and(
      z.any().openapi({ description: 'The authorization code for the domain.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The RetrieveDomainAuthCode response includes the following element.',
    required: [],
  })
  .openapi('RetrieveDomainAuthCodeResponse')

const RetrieveDomainAuthCodeRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the domain that you want to get an authorization code for.',
        }),
    ),
  })
  .openapi({
    required: ['DomainName'],
    title: 'RetrieveDomainAuthCodeRequest',
    description:
      'A request for the authorization code for the specified domain. To transfer a domain to another registrar, you provide this value to the new registrar.',
  })
  .openapi('RetrieveDomainAuthCodeRequest')

const TransferDomainResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for tracking the progress of the request. To query the operation status, use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The TransferDomain response includes the following element.',
    required: [],
  })
  .openapi('TransferDomainResponse')

const TransferDomainRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the domain that you want to transfer to Route 53. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>The domain name can contain only the following characters:</p> <ul> <li> <p>Letters a through z. Domain names are not case sensitive.</p> </li> <li> <p>Numbers 0 through 9.</p> </li> <li> <p>Hyphen (-). You can\'t specify a hyphen at the beginning or end of a label. </p> </li> <li> <p>Period (.) to separate the labels in the name, such as the <code>.</code> in <code>example.com</code>.</p> </li> </ul>',
        }),
    ),
    IdnLangCode: LangCodeSchema.and(
      z.any().openapi({ description: 'Reserved for future use.' }),
    ).exactOptional(),
    DurationInYears: DurationInYearsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of years that you want to register the domain for. Domains are registered for a minimum of one year. The maximum period depends on the top-level domain.</p> <p>Default: 1</p>',
        }),
    ),
    Nameservers: NameserverListSchema.and(
      z.any().openapi({ description: 'Contains details for the host and glue IP addresses.' }),
    ).exactOptional(),
    AuthCode: DomainAuthCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The authorization code for the domain. You get this value from the current registrar.',
        }),
    ).exactOptional(),
    AutoRenew: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the domain will be automatically renewed (true) or not (false). Auto renewal only takes effect after the account is charged.</p> <p>Default: true</p>',
        }),
    ).exactOptional(),
    AdminContact: ContactDetailSchema.and(
      z.any().openapi({ description: 'Provides detailed contact information.' }),
    ),
    RegistrantContact: ContactDetailSchema.and(
      z.any().openapi({ description: 'Provides detailed contact information.' }),
    ),
    TechContact: ContactDetailSchema.and(
      z.any().openapi({ description: 'Provides detailed contact information.' }),
    ),
    PrivacyProtectAdminContact: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the information that you entered for the admin contact.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> <p>Default: <code>true</code> </p>',
        }),
    ).exactOptional(),
    PrivacyProtectRegistrantContact: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the information that you entered for the registrant contact (domain owner).</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> <p>Default: <code>true</code> </p>',
        }),
    ).exactOptional(),
    PrivacyProtectTechContact: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the information that you entered for the technical contact.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> <p>Default: <code>true</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName', 'DurationInYears', 'AdminContact', 'RegistrantContact', 'TechContact'],
    title: 'TransferDomainRequest',
    description: 'The TransferDomain request includes the following elements.',
  })
  .openapi('TransferDomainRequest')

const TransferDomainToAnotherAwsAccountResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for tracking the progress of the request. To query the operation status, use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.',
        }),
    ).exactOptional(),
    Password: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'To finish transferring a domain to another Amazon Web Services account, the account that the domain is being transferred to must submit an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a> request. The request must include the value of the <code>Password</code> element that was returned in the <code>TransferDomainToAnotherAwsAccount</code> response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The <code>TransferDomainToAnotherAwsAccount</code> response includes the following elements.',
    required: [],
  })
  .openapi('TransferDomainToAnotherAwsAccountResponse')

const AccountIdSchema = z
  .string()
  .regex(/^(\d{12})$/)
  .length(12)
  .openapi('AccountId')

const TransferDomainToAnotherAwsAccountRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the domain that you want to transfer from the current Amazon Web Services account to another account.',
        }),
    ),
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The account ID of the Amazon Web Services account that you want to transfer the domain to, for example, <code>111122223333</code>.',
        }),
    ),
  })
  .openapi({
    required: ['DomainName', 'AccountId'],
    title: 'TransferDomainToAnotherAwsAccountRequest',
    description: 'The TransferDomainToAnotherAwsAccount request includes the following elements.',
  })
  .openapi('TransferDomainToAnotherAwsAccountRequest')

const UpdateDomainContactResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for tracking the progress of the request. To query the operation status, use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The UpdateDomainContact response includes the following element.',
    required: [],
  })
  .openapi('UpdateDomainContactResponse')

const ConsentSchema = z
  .object({
    MaxPrice: PriceSchema.and(
      z.any().openapi({ description: ' Maximum amount the customer agreed to accept. ' }),
    ),
    Currency: CurrencySchema.and(
      z.any().openapi({ description: ' Currency for the <code>MaxPrice</code>. ' }),
    ),
  })
  .openapi({
    required: ['MaxPrice', 'Currency'],
    description: " Customer's consent for the owner change request. ",
  })
  .openapi('Consent')

const UpdateDomainContactRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the domain that you want to update contact information for.',
        }),
    ),
    AdminContact: ContactDetailSchema.and(
      z.any().openapi({ description: 'Provides detailed contact information.' }),
    ).exactOptional(),
    RegistrantContact: ContactDetailSchema.and(
      z.any().openapi({ description: 'Provides detailed contact information.' }),
    ).exactOptional(),
    TechContact: ContactDetailSchema.and(
      z.any().openapi({ description: 'Provides detailed contact information.' }),
    ).exactOptional(),
    Consent: ConsentSchema.and(
      z.any().openapi({ description: " Customer's consent for the owner change request. " }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName'],
    title: 'UpdateDomainContactRequest',
    description: 'The UpdateDomainContact request includes the following elements.',
  })
  .openapi('UpdateDomainContactRequest')

const UpdateDomainContactPrivacyResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for tracking the progress of the request. To use this ID to query the operation status, use GetOperationDetail.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The UpdateDomainContactPrivacy response includes the following element.',
    required: [],
  })
  .openapi('UpdateDomainContactPrivacyResponse')

const UpdateDomainContactPrivacyRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the domain that you want to update the privacy setting for.',
        }),
    ),
    AdminPrivacy: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the information that you entered for the admin contact.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note>',
        }),
    ).exactOptional(),
    RegistrantPrivacy: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the information that you entered for the registrant contact (domain owner).</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note>',
        }),
    ).exactOptional(),
    TechPrivacy: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the information that you entered for the technical contact.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName'],
    title: 'UpdateDomainContactPrivacyRequest',
    description: 'The UpdateDomainContactPrivacy request includes the following elements.',
  })
  .openapi('UpdateDomainContactPrivacyRequest')

const UpdateDomainNameserversResponseSchema = z
  .object({
    OperationId: OperationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for tracking the progress of the request. To query the operation status, use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The UpdateDomainNameservers response includes the following element.',
    required: [],
  })
  .openapi('UpdateDomainNameserversResponse')

const FIAuthKeySchema = z.string().min(0).max(255).openapi('FIAuthKey')

const UpdateDomainNameserversRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the domain that you want to change name servers for.',
        }),
    ),
    FIAuthKey: FIAuthKeySchema.and(
      z.any().openapi({ deprecated: true, description: 'The authorization key for .fi domains' }),
    ).exactOptional(),
    Nameservers: NameserverListSchema.and(
      z.any().openapi({ description: 'A list of new name servers for the domain.' }),
    ),
  })
  .openapi({
    required: ['DomainName', 'Nameservers'],
    title: 'UpdateDomainNameserversRequest',
    description:
      '<p>Replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email. </p>',
  })
  .openapi('UpdateDomainNameserversRequest')

const UpdateTagsForDomainResponseSchema = z.object({}).openapi('UpdateTagsForDomainResponse')

const UpdateTagsForDomainRequestSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z.any().openapi({ description: 'The domain for which you want to add or update tags.' }),
    ),
    TagsToUpdate: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the tag keys and values that you want to add or update. If you specify a key that already exists, the corresponding value will be replaced.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName'],
    title: 'UpdateTagsForDomainRequest',
    description: 'The UpdateTagsForDomainRequest includes the following elements.',
  })
  .openapi('UpdateTagsForDomainRequest')

const InvoiceIdSchema = z.string().openapi('InvoiceId')

const BillingRecordSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the domain that the billing record applies to. If the domain name contains characters other than a-z, 0-9, and - (hyphen), such as an internationalized domain name, then this value is in Punycode. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html">DNS Domain Name Format</a> in the <i>Amazon Route 53 Developer Guide</i>.',
        }),
    ).exactOptional(),
    Operation: OperationTypeSchema.and(
      z.any().openapi({ description: 'The operation that you were charged for.' }),
    ).exactOptional(),
    InvoiceId: InvoiceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the invoice that is associated with the billing record.',
        }),
    ).exactOptional(),
    BillDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the operation was billed, in Unix format.' }),
    ).exactOptional(),
    Price: PriceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The price that you were charged for the operation, in US dollars.</p> <p>Example value: 12.0</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information for one billing record.', required: [] })
  .openapi('BillingRecord')

const BillingRecordsSchema = z.array(BillingRecordSchema).openapi('BillingRecords')

const ViewBillingResponseSchema = z
  .object({
    NextPageMarker: PageMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more billing records than you specified for <code>MaxItems</code> in the request, submit another request and include the value of <code>NextPageMarker</code> in the value of <code>Marker</code>.',
        }),
    ).exactOptional(),
    BillingRecords: BillingRecordsSchema.and(
      z.any().openapi({ description: 'A summary of billing records.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The ViewBilling response includes the following elements.',
    required: [],
  })
  .openapi('ViewBillingResponse')

const ViewBillingRequestSchema = z
  .object({
    Start: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The beginning date and time for the time period for which you want a list of billing records. Specify the date and time in Unix time format and Coordinated Universal time (UTC).',
        }),
    ).exactOptional(),
    End: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end date and time for the time period for which you want a list of billing records. Specify the date and time in Unix time format and Coordinated Universal time (UTC).',
        }),
    ).exactOptional(),
    Marker: PageMarkerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For an initial request for a list of billing records, omit this element. If the number of billing records that are associated with the current Amazon Web Services account during the specified period is greater than the value that you specified for <code>MaxItems</code>, you can use <code>Marker</code> to return additional billing records. Get the value of <code>NextPageMarker</code> from the previous response, and submit another request that includes the value of <code>NextPageMarker</code> in the <code>Marker</code> element. </p> <p>Constraints: The marker must match the value of <code>NextPageMarker</code> that was returned in the previous response.</p>',
        }),
    ).exactOptional(),
    MaxItems: PageMaxItemsSchema.and(
      z
        .any()
        .openapi({
          description: '<p>The number of billing records to be returned.</p> <p>Default: 20</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ViewBillingRequest',
    description: 'The ViewBilling request includes the following elements.',
    required: [],
  })
  .openapi('ViewBillingRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const postXAmzTargetRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccountRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount',
    description:
      '<p>Accepts the transfer of a domain from another Amazon Web Services account to the currentAmazon Web Services account. You initiate a transfer between Amazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>.</p> <p>If you use the CLI command at <a href="https://docs.aws.amazon.com/cli/latest/reference/route53domains/accept-domain-transfer-from-another-aws-account.html">accept-domain-transfer-from-another-aws-account</a>, use JSON format as input instead of text because otherwise CLI will throw an error from domain transfer input that includes single quotes.</p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>',
    operationId: 'AcceptDomainTransferFromAnotherAwsAccount',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: AcceptDomainTransferFromAnotherAwsAccountRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: AcceptDomainTransferFromAnotherAwsAccountResponseSchema },
        },
      },
      480: {
        description: 'InvalidInput',
        content: { 'application/json': { schema: InvalidInputSchema } },
      },
      481: {
        description: 'OperationLimitExceeded',
        content: { 'application/json': { schema: OperationLimitExceededSchema } },
      },
      482: {
        description: 'DomainLimitExceeded',
        content: { 'application/json': { schema: DomainLimitExceededSchema } },
      },
      483: {
        description: 'UnsupportedTLD',
        content: { 'application/json': { schema: UnsupportedTLDSchema } },
      },
    },
  })

export const postXAmzTargetRoute53DomainsV20140515AssociateDelegationSignerToDomainRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain',
    description:
      '<p> Creates a delegation signer (DS) record in the registry zone for this domain name.</p> <p>Note that creating DS record at the registry impacts DNSSEC validation of your DNS records. This action may render your domain name unavailable on the internet if the steps are completed in the wrong order, or with incorrect timing. For more information about DNSSEC signing, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec.html">Configuring DNSSEC signing</a> in the <i>Route 53 developer guide</i>.</p>',
    operationId: 'AssociateDelegationSignerToDomain',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('Route53Domains_v20140515.AssociateDelegationSignerToDomain')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['Route53Domains_v20140515.AssociateDelegationSignerToDomain'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AssociateDelegationSignerToDomainRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: AssociateDelegationSignerToDomainResponseSchema },
        },
      },
      480: {
        description: 'DuplicateRequest',
        content: { 'application/json': { schema: DuplicateRequestSchema } },
      },
      481: {
        description: 'InvalidInput',
        content: { 'application/json': { schema: InvalidInputSchema } },
      },
      482: {
        description: 'OperationLimitExceeded',
        content: { 'application/json': { schema: OperationLimitExceededSchema } },
      },
      483: {
        description: 'TLDRulesViolation',
        content: { 'application/json': { schema: TLDRulesViolationSchema } },
      },
      484: {
        description: 'UnsupportedTLD',
        content: { 'application/json': { schema: UnsupportedTLDSchema } },
      },
      485: {
        description: 'DnssecLimitExceeded',
        content: { 'application/json': { schema: DnssecLimitExceededSchema } },
      },
    },
  })

export const postXAmzTargetRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccountRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount',
    description:
      '<p>Cancels the transfer of a domain from the current Amazon Web Services account to another Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <important> <p>You must cancel the transfer before the other Amazon Web Services account accepts the transfer using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>',
    operationId: 'CancelDomainTransferToAnotherAwsAccount',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: CancelDomainTransferToAnotherAwsAccountRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: CancelDomainTransferToAnotherAwsAccountResponseSchema },
        },
      },
      480: {
        description: 'InvalidInput',
        content: { 'application/json': { schema: InvalidInputSchema } },
      },
      481: {
        description: 'OperationLimitExceeded',
        content: { 'application/json': { schema: OperationLimitExceededSchema } },
      },
      482: {
        description: 'UnsupportedTLD',
        content: { 'application/json': { schema: UnsupportedTLDSchema } },
      },
    },
  })

export const postXAmzTargetRoute53DomainsV20140515CheckDomainAvailabilityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability',
  description:
    'This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must submit another request to determine the availability of the domain name.',
  operationId: 'CheckDomainAvailability',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.CheckDomainAvailability')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.CheckDomainAvailability'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CheckDomainAvailabilityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CheckDomainAvailabilityResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515CheckDomainTransferabilityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability',
  description: 'Checks whether a domain name can be transferred to Amazon Route 53. ',
  operationId: 'CheckDomainTransferability',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.CheckDomainTransferability')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Route53Domains_v20140515.CheckDomainTransferability'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CheckDomainTransferabilityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CheckDomainTransferabilityResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515DeleteDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.DeleteDomain',
  description:
    '<p>This operation deletes the specified domain. This action is permanent. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-delete.html">Deleting a domain name registration</a>.</p> <p>To transfer the domain registration to another registrar, use the transfer process that’s provided by the registrar to which you want to transfer the registration. Otherwise, the following apply:</p> <ol> <li> <p>You can’t get a refund for the cost of a deleted domain registration.</p> </li> <li> <p>The registry for the top-level domain might hold the domain name for a brief time before releasing it for other users to register (varies by registry). </p> </li> <li> <p>When the registration has been deleted, we\'ll send you a confirmation to the registrant contact. The email will come from <code>noreply@domainnameverification.net</code> or <code>noreply@registrar.amazon.com</code>.</p> </li> </ol>',
  operationId: 'DeleteDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.DeleteDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.DeleteDomain'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDomainResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
    482: {
      description: 'TLDRulesViolation',
      content: { 'application/json': { schema: TLDRulesViolationSchema } },
    },
    483: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515DeleteTagsForDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain',
  description:
    '<p>This operation deletes the specified tags for a domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>',
  operationId: 'DeleteTagsForDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.DeleteTagsForDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.DeleteTagsForDomain'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteTagsForDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteTagsForDomainResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'OperationLimitExceeded',
      content: { 'application/json': { schema: OperationLimitExceededSchema } },
    },
    482: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515DisableDomainAutoRenewRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew',
  description:
    'This operation disables automatic renewal of domain registration for the specified domain.',
  operationId: 'DisableDomainAutoRenew',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.DisableDomainAutoRenew')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.DisableDomainAutoRenew'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisableDomainAutoRenewRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisableDomainAutoRenewResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515DisableDomainTransferLockRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock',
  description:
    'This operation removes the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to allow domain transfers. We recommend you refrain from performing this action unless you intend to transfer the domain to a different registrar. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.',
  operationId: 'DisableDomainTransferLock',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.DisableDomainTransferLock')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Route53Domains_v20140515.DisableDomainTransferLock'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisableDomainTransferLockRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisableDomainTransferLockResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
    482: {
      description: 'TLDRulesViolation',
      content: { 'application/json': { schema: TLDRulesViolationSchema } },
    },
    483: {
      description: 'OperationLimitExceeded',
      content: { 'application/json': { schema: OperationLimitExceededSchema } },
    },
    484: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515DisassociateDelegationSignerFromDomainRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain',
    description:
      'Deletes a delegation signer (DS) record in the registry zone for this domain name.',
    operationId: 'DisassociateDelegationSignerFromDomain',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('Route53Domains_v20140515.DisassociateDelegationSignerFromDomain')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['Route53Domains_v20140515.DisassociateDelegationSignerFromDomain'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DisassociateDelegationSignerFromDomainRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DisassociateDelegationSignerFromDomainResponseSchema },
        },
      },
      480: {
        description: 'DuplicateRequest',
        content: { 'application/json': { schema: DuplicateRequestSchema } },
      },
      481: {
        description: 'InvalidInput',
        content: { 'application/json': { schema: InvalidInputSchema } },
      },
      482: {
        description: 'OperationLimitExceeded',
        content: { 'application/json': { schema: OperationLimitExceededSchema } },
      },
      483: {
        description: 'TLDRulesViolation',
        content: { 'application/json': { schema: TLDRulesViolationSchema } },
      },
      484: {
        description: 'UnsupportedTLD',
        content: { 'application/json': { schema: UnsupportedTLDSchema } },
      },
    },
  })

export const postXAmzTargetRoute53DomainsV20140515EnableDomainAutoRenewRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew',
  description:
    '<p>This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your Amazon Web Services account.</p> <p>The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains That You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>. Route 53 requires that you renew before the end of the renewal period so we can complete processing before the deadline.</p>',
  operationId: 'EnableDomainAutoRenew',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.EnableDomainAutoRenew')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.EnableDomainAutoRenew'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: EnableDomainAutoRenewRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EnableDomainAutoRenewResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
    482: {
      description: 'TLDRulesViolation',
      content: { 'application/json': { schema: TLDRulesViolationSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515EnableDomainTransferLockRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock',
  description:
    'This operation sets the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.',
  operationId: 'EnableDomainTransferLock',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.EnableDomainTransferLock')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.EnableDomainTransferLock'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: EnableDomainTransferLockRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EnableDomainTransferLockResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
    482: {
      description: 'TLDRulesViolation',
      content: { 'application/json': { schema: TLDRulesViolationSchema } },
    },
    483: {
      description: 'OperationLimitExceeded',
      content: { 'application/json': { schema: OperationLimitExceededSchema } },
    },
    484: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515GetContactReachabilityStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus',
  description:
    '<p>For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation returns information about whether the registrant contact has responded.</p> <p>If you want us to resend the email, use the <code>ResendContactReachabilityEmail</code> operation.</p>',
  operationId: 'GetContactReachabilityStatus',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.GetContactReachabilityStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Route53Domains_v20140515.GetContactReachabilityStatus'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetContactReachabilityStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetContactReachabilityStatusResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'OperationLimitExceeded',
      content: { 'application/json': { schema: OperationLimitExceededSchema } },
    },
    482: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515GetDomainDetailRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail',
  description:
    'This operation returns detailed information about a specified domain that is associated with the current Amazon Web Services account. Contact information for the domain is also returned as part of the output.',
  operationId: 'GetDomainDetail',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.GetDomainDetail')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.GetDomainDetail'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDomainDetailRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDomainDetailResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515GetDomainSuggestionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions',
  description: 'The GetDomainSuggestions operation returns a list of suggested domain names.',
  operationId: 'GetDomainSuggestions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.GetDomainSuggestions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.GetDomainSuggestions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDomainSuggestionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDomainSuggestionsResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515GetOperationDetailRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail',
  description: 'This operation returns the current status of an operation that is not completed.',
  operationId: 'GetOperationDetail',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.GetOperationDetail')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.GetOperationDetail'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetOperationDetailRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetOperationDetailResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515ListDomainsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.ListDomains',
  description:
    'This operation returns all the domain names registered with Amazon Route 53 for the current Amazon Web Services account if no filtering conditions are used.',
  operationId: 'ListDomains',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.ListDomains')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.ListDomains'] },
          },
        }),
    }),
    query: z.object({
      MaxItems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListDomainsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDomainsResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515ListOperationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.ListOperations',
  description:
    '<p>Returns information about all of the operations that return an operation ID and that have ever been performed on domains that were registered by the current account. </p> <p>This command runs only in the us-east-1 Region.</p>',
  operationId: 'ListOperations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.ListOperations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.ListOperations'] },
          },
        }),
    }),
    query: z.object({
      MaxItems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListOperationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListOperationsResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515ListPricesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.ListPrices',
  description:
    '<p>Lists the following prices for either all the TLDs supported by Route 53, or the specified TLD:</p> <ul> <li> <p>Registration</p> </li> <li> <p>Transfer</p> </li> <li> <p>Owner change</p> </li> <li> <p>Domain renewal</p> </li> <li> <p>Domain restoration</p> </li> </ul>',
  operationId: 'ListPrices',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.ListPrices')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.ListPrices'] },
          },
        }),
    }),
    query: z.object({
      MaxItems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListPricesRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPricesResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515ListTagsForDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain',
  description:
    '<p>This operation returns all of the tags that are associated with the specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>',
  operationId: 'ListTagsForDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.ListTagsForDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.ListTagsForDomain'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForDomainResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'OperationLimitExceeded',
      content: { 'application/json': { schema: OperationLimitExceededSchema } },
    },
    482: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515PushDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.PushDomain',
  description:
    '<p> Moves a domain from Amazon Web Services to another registrar. </p> <p>Supported actions:</p> <ul> <li> <p>Changes the IPS tags of a .uk domain, and pushes it to transit. Transit means that the domain is ready to be transferred to another registrar.</p> </li> </ul>',
  operationId: 'PushDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.PushDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.PushDomain'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PushDomainRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'OperationLimitExceeded',
      content: { 'application/json': { schema: OperationLimitExceededSchema } },
    },
    482: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515RegisterDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.RegisterDomain',
  description:
    '<p>This operation registers a domain. Domains are registered either by Amazon Registrar (for .com, .net, and .org domains) or by our registrar associate, Gandi (for all other domains). For some top-level domains (TLDs), this operation requires extra parameters.</p> <p>When you register a domain, Amazon Route 53 does the following:</p> <ul> <li> <p>Creates a Route 53 hosted zone that has the same name as the domain. Route 53 assigns four name servers to your hosted zone and automatically updates your domain registration with the names of these name servers.</p> </li> <li> <p>Enables auto renew, so your domain registration will renew automatically each year. We\'ll notify you in advance of the renewal date so you can choose whether to renew the registration.</p> </li> <li> <p>Optionally enables privacy protection, so WHOIS queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you don\'t enable privacy protection, WHOIS queries return the information that you entered for the administrative, registrant, and technical contacts.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> </li> <li> <p>If registration is successful, returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant is notified by email.</p> </li> <li> <p>Charges your Amazon Web Services account an amount based on the top-level domain. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> </li> </ul>',
  operationId: 'RegisterDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.RegisterDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.RegisterDomain'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterDomainResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
    482: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
    483: {
      description: 'TLDRulesViolation',
      content: { 'application/json': { schema: TLDRulesViolationSchema } },
    },
    484: {
      description: 'DomainLimitExceeded',
      content: { 'application/json': { schema: DomainLimitExceededSchema } },
    },
    485: {
      description: 'OperationLimitExceeded',
      content: { 'application/json': { schema: OperationLimitExceededSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccountRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount',
    description:
      '<p>Rejects the transfer of a domain from another Amazon Web Services account to the current Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>',
    operationId: 'RejectDomainTransferFromAnotherAwsAccount',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: RejectDomainTransferFromAnotherAwsAccountRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: RejectDomainTransferFromAnotherAwsAccountResponseSchema },
        },
      },
      480: {
        description: 'InvalidInput',
        content: { 'application/json': { schema: InvalidInputSchema } },
      },
      481: {
        description: 'OperationLimitExceeded',
        content: { 'application/json': { schema: OperationLimitExceededSchema } },
      },
      482: {
        description: 'UnsupportedTLD',
        content: { 'application/json': { schema: UnsupportedTLDSchema } },
      },
    },
  })

export const postXAmzTargetRoute53DomainsV20140515RenewDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.RenewDomain',
  description:
    '<p>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your Amazon Web Services account.</p> <p>We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the expiration date if you haven\'t renewed far enough in advance. For more information about renewing domain registration, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing Registration for a Domain</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>',
  operationId: 'RenewDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.RenewDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.RenewDomain'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RenewDomainRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RenewDomainResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
    482: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
    483: {
      description: 'TLDRulesViolation',
      content: { 'application/json': { schema: TLDRulesViolationSchema } },
    },
    484: {
      description: 'OperationLimitExceeded',
      content: { 'application/json': { schema: OperationLimitExceededSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515ResendContactReachabilityEmailRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail',
    description:
      'For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.',
    operationId: 'ResendContactReachabilityEmail',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('Route53Domains_v20140515.ResendContactReachabilityEmail')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['Route53Domains_v20140515.ResendContactReachabilityEmail'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ResendContactReachabilityEmailRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ResendContactReachabilityEmailResponseSchema } },
      },
      480: {
        description: 'InvalidInput',
        content: { 'application/json': { schema: InvalidInputSchema } },
      },
      481: {
        description: 'OperationLimitExceeded',
        content: { 'application/json': { schema: OperationLimitExceededSchema } },
      },
      482: {
        description: 'UnsupportedTLD',
        content: { 'application/json': { schema: UnsupportedTLDSchema } },
      },
    },
  },
)

export const postXAmzTargetRoute53DomainsV20140515ResendOperationAuthorizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization',
  description: ' Resend the form of authorization email for this operation. ',
  operationId: 'ResendOperationAuthorization',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.ResendOperationAuthorization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Route53Domains_v20140515.ResendOperationAuthorization'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ResendOperationAuthorizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515RetrieveDomainAuthCodeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode',
  description:
    'This operation returns the authorization code for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.',
  operationId: 'RetrieveDomainAuthCode',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.RetrieveDomainAuthCode')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.RetrieveDomainAuthCode'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RetrieveDomainAuthCodeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RetrieveDomainAuthCodeResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515TransferDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.TransferDomain',
  description:
    '<p>Transfers a domain from another registrar to Amazon Route 53. When the transfer is complete, the domain is registered either with Amazon Registrar (for .com, .net, and .org domains) or with our registrar associate, Gandi (for all other TLDs).</p> <p>For more information about transferring domains, see the following topics:</p> <ul> <li> <p>For transfer requirements, a detailed procedure, and information about viewing the status of a domain that you\'re transferring to Route 53, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html">Transferring Registration for a Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> <li> <p>For information about how to transfer a domain from one Amazon Web Services account to another, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> </li> <li> <p>For information about how to transfer a domain to another domain registrar, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-from-route-53.html">Transferring a Domain from Amazon Route 53 to Another Registrar</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> </ul> <p>If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you transfer your DNS service to Route 53 or to another DNS service provider before you transfer your registration. Some registrars provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar will not renew your domain registration and could end your DNS service at any time.</p> <important> <p>If the registrar for your domain is also the DNS service provider for the domain and you don\'t transfer DNS service to another provider, your website, email, and the web applications associated with the domain might become unavailable.</p> </important> <p>If the transfer is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the transfer doesn\'t complete successfully, the domain registrant will be notified by email.</p>',
  operationId: 'TransferDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.TransferDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.TransferDomain'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TransferDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TransferDomainResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
    482: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
    483: {
      description: 'TLDRulesViolation',
      content: { 'application/json': { schema: TLDRulesViolationSchema } },
    },
    484: {
      description: 'DomainLimitExceeded',
      content: { 'application/json': { schema: DomainLimitExceededSchema } },
    },
    485: {
      description: 'OperationLimitExceeded',
      content: { 'application/json': { schema: OperationLimitExceededSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515TransferDomainToAnotherAwsAccountRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount',
    description:
      '<p>Transfers a domain from the current Amazon Web Services account to another Amazon Web Services account. Note the following:</p> <ul> <li> <p>The Amazon Web Services account that you\'re transferring the domain to must accept the transfer. If the other account doesn\'t accept the transfer within 3 days, we cancel the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>. </p> </li> <li> <p>You can cancel the transfer before the other account accepts it. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html">CancelDomainTransferToAnotherAwsAccount</a>. </p> </li> <li> <p>The other account can reject the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html">RejectDomainTransferFromAnotherAwsAccount</a>. </p> </li> </ul> <important> <p>When you transfer a domain from one Amazon Web Services account to another, Route 53 doesn\'t transfer the hosted zone that is associated with the domain. DNS resolution isn\'t affected if the domain and the hosted zone are owned by separate accounts, so transferring the hosted zone is optional. For information about transferring the hosted zone to another Amazon Web Services account, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-migrating.html">Migrating a Hosted Zone to a Different Amazon Web Services Account</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>',
    operationId: 'TransferDomainToAnotherAwsAccount',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('Route53Domains_v20140515.TransferDomainToAnotherAwsAccount')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['Route53Domains_v20140515.TransferDomainToAnotherAwsAccount'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: TransferDomainToAnotherAwsAccountRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: TransferDomainToAnotherAwsAccountResponseSchema },
        },
      },
      480: {
        description: 'InvalidInput',
        content: { 'application/json': { schema: InvalidInputSchema } },
      },
      481: {
        description: 'OperationLimitExceeded',
        content: { 'application/json': { schema: OperationLimitExceededSchema } },
      },
      482: {
        description: 'DuplicateRequest',
        content: { 'application/json': { schema: DuplicateRequestSchema } },
      },
      483: {
        description: 'UnsupportedTLD',
        content: { 'application/json': { schema: UnsupportedTLDSchema } },
      },
    },
  })

export const postXAmzTargetRoute53DomainsV20140515UpdateDomainContactRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact',
  description:
    '<p>This operation updates the contact information for a particular domain. You must specify information for at least one contact: registrant, administrator, or technical.</p> <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the operation. If the request is not completed successfully, the domain registrant will be notified by email.</p>',
  operationId: 'UpdateDomainContact',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.UpdateDomainContact')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.UpdateDomainContact'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDomainContactRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDomainContactResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
    482: {
      description: 'TLDRulesViolation',
      content: { 'application/json': { schema: TLDRulesViolationSchema } },
    },
    483: {
      description: 'OperationLimitExceeded',
      content: { 'application/json': { schema: OperationLimitExceededSchema } },
    },
    484: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515UpdateDomainContactPrivacyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy',
  description:
    '<p>This operation updates the specified domain contact\'s privacy setting. When privacy protection is enabled, contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org domains) or with contact information for our registrar associate, Gandi.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> <p>This operation affects only the contact information for the specified contact type (administrative, registrant, or technical). If the request succeeds, Amazon Route 53 returns an operation ID that you can use with <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to track the progress and completion of the action. If the request doesn\'t complete successfully, the domain registrant will be notified by email.</p> <important> <p>By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision. You may withdraw your consent at any time by enabling privacy protection using either <code>UpdateDomainContactPrivacy</code> or the Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database. For more information on our privacy practices, see <a href="https://aws.amazon.com/privacy/">https://aws.amazon.com/privacy/</a>.</p> </important>',
  operationId: 'UpdateDomainContactPrivacy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.UpdateDomainContactPrivacy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['Route53Domains_v20140515.UpdateDomainContactPrivacy'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDomainContactPrivacyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDomainContactPrivacyResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
    482: {
      description: 'TLDRulesViolation',
      content: { 'application/json': { schema: TLDRulesViolationSchema } },
    },
    483: {
      description: 'OperationLimitExceeded',
      content: { 'application/json': { schema: OperationLimitExceededSchema } },
    },
    484: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515UpdateDomainNameserversRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers',
  description:
    '<p>This operation replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>',
  operationId: 'UpdateDomainNameservers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.UpdateDomainNameservers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.UpdateDomainNameservers'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDomainNameserversRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDomainNameserversResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'DuplicateRequest',
      content: { 'application/json': { schema: DuplicateRequestSchema } },
    },
    482: {
      description: 'TLDRulesViolation',
      content: { 'application/json': { schema: TLDRulesViolationSchema } },
    },
    483: {
      description: 'OperationLimitExceeded',
      content: { 'application/json': { schema: OperationLimitExceededSchema } },
    },
    484: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515UpdateTagsForDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain',
  description:
    '<p>This operation adds or updates tags for a specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>',
  operationId: 'UpdateTagsForDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.UpdateTagsForDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.UpdateTagsForDomain'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateTagsForDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateTagsForDomainResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
    481: {
      description: 'OperationLimitExceeded',
      content: { 'application/json': { schema: OperationLimitExceededSchema } },
    },
    482: {
      description: 'UnsupportedTLD',
      content: { 'application/json': { schema: UnsupportedTLDSchema } },
    },
  },
})

export const postXAmzTargetRoute53DomainsV20140515ViewBillingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=Route53Domains_v20140515.ViewBilling',
  description:
    'Returns all the domain-related billing records for the current Amazon Web Services account for a specified period',
  operationId: 'ViewBilling',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('Route53Domains_v20140515.ViewBilling')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['Route53Domains_v20140515.ViewBilling'] },
          },
        }),
    }),
    query: z.object({
      MaxItems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ViewBillingRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ViewBillingResponseSchema } },
    },
    480: {
      description: 'InvalidInput',
      content: { 'application/json': { schema: InvalidInputSchema } },
    },
  },
})
