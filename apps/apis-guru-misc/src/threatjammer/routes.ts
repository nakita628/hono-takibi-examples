import { createRoute, z } from '@hono/zod-openapi'

const AclGroupOriginOutputSchema = z
  .object({
    created_at: z.int().openapi({ title: 'Created At' }),
    origin: z.string().openapi({ title: 'Origin' }),
    self: z.string().openapi({ title: 'Self' }),
    status: z.enum(['INACTIVE', 'ACTIVE', 'EXPIRED']).openapi({ title: 'Status' }),
    updated_at: z.int().openapi({ title: 'Updated At' }),
  })
  .openapi({
    required: ['self', 'origin', 'status', 'created_at', 'updated_at'],
    title: 'AclGroupOriginOutput',
  })
  .openapi('AclGroupOriginOutput')

const AclGroupOriginCollectionOutputSchema = z
  .object({
    lists: z.array(AclGroupOriginOutputSchema).openapi({ title: 'Lists' }),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({ required: ['self', 'lists'], title: 'AclGroupOriginCollectionOutput' })
  .openapi('AclGroupOriginCollectionOutput')

const AclListCollectionOutputSchema = z
  .object({
    asns: z.array(z.string()).default([]).exactOptional().openapi({ title: 'Asns' }),
    cidrs: z.array(z.string()).default([]).exactOptional().openapi({ title: 'Cidrs' }),
    continents: z.array(z.string()).default([]).exactOptional().openapi({ title: 'Continents' }),
    countries: z.array(z.string()).default([]).exactOptional().openapi({ title: 'Countries' }),
    datacenters: z.array(z.string()).default([]).exactOptional().openapi({ title: 'Datacenters' }),
    reported: z.array(z.string()).exactOptional().openapi({ title: 'Reported' }),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({ required: ['self'], title: 'AclListCollectionOutput' })
  .openapi('AclListCollectionOutput')

const V1ModelsTokenSourceOutputSchema = z
  .object({
    address: z.string().openapi({ title: 'Address' }),
    body: z.string().openapi({ title: 'Body' }),
    method: z.string().openapi({ title: 'Method' }),
    status_code: z.int().openapi({ title: 'Status Code' }),
    ua_string: z.string().openapi({ title: 'Ua String' }),
    uri: z.string().openapi({ title: 'Uri' }),
  })
  .openapi({
    required: ['address', 'ua_string', 'status_code', 'uri', 'body', 'method'],
    title: 'SourceOutput',
  })
  .openapi('V1ModelsTokenSourceOutput')

const ActivityOutputSchema = z
  .object({
    created_at: z.int().openapi({ title: 'Created At' }),
    data: z.object({}).openapi({ title: 'Data' }),
    description: z.string().openapi({ title: 'Description' }),
    event: z.string().openapi({ title: 'Event' }),
    self: z.string().openapi({ title: 'Self' }),
    source: V1ModelsTokenSourceOutputSchema,
  })
  .openapi({
    required: ['self', 'event', 'description', 'data', 'created_at', 'source'],
    title: 'ActivityOutput',
  })
  .openapi('ActivityOutput')

const ActivityCollectionOutputSchema = z
  .object({
    activities: z.array(ActivityOutputSchema).openapi({ title: 'Activities' }),
    page: z.int().openapi({ title: 'Page' }),
    page_size: z.int().openapi({ title: 'Page Size' }),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({
    required: ['self', 'page', 'page_size', 'activities'],
    title: 'ActivityCollectionOutput',
  })
  .openapi('ActivityCollectionOutput')

const AutonomousSystemOutputSchema = z
  .object({
    country_code: z
      .enum([
        'AF',
        'AP',
        'AX',
        'AL',
        'DZ',
        'AS',
        'AD',
        'AO',
        'AI',
        'AQ',
        'AG',
        'AR',
        'AM',
        'AW',
        'AU',
        'AT',
        'AZ',
        'BS',
        'BH',
        'BD',
        'BB',
        'BY',
        'BE',
        'BZ',
        'BJ',
        'BM',
        'BT',
        'BO',
        'BQ',
        'BA',
        'BW',
        'BV',
        'BR',
        'IO',
        'BN',
        'BG',
        'BF',
        'BI',
        'CV',
        'KH',
        'CM',
        'CA',
        'KY',
        'CF',
        'TD',
        'CL',
        'CN',
        'CX',
        'CC',
        'CO',
        'KM',
        'CG',
        'CD',
        'CK',
        'CR',
        'CI',
        'HR',
        'CU',
        'CW',
        'CY',
        'CZ',
        'DK',
        'DJ',
        'DM',
        'DO',
        'EC',
        'EG',
        'SV',
        'GQ',
        'ER',
        'EE',
        'ET',
        'FK',
        'FO',
        'FJ',
        'FI',
        'FR',
        'GF',
        'PF',
        'TF',
        'GA',
        'GM',
        'GE',
        'DE',
        'GH',
        'GI',
        'GR',
        'GL',
        'GD',
        'GP',
        'GU',
        'GT',
        'GG',
        'GN',
        'GW',
        'GY',
        'HT',
        'HM',
        'VA',
        'HN',
        'HK',
        'HU',
        'IS',
        'IN',
        'ID',
        'IR',
        'IQ',
        'IE',
        'IM',
        'IL',
        'IT',
        'JM',
        'JP',
        'JE',
        'JO',
        'KZ',
        'KE',
        'KI',
        'KP',
        'KR',
        'KW',
        'KG',
        'LA',
        'LV',
        'LB',
        'LS',
        'LR',
        'LY',
        'LI',
        'LT',
        'LU',
        'MO',
        'MK',
        'MG',
        'MW',
        'MY',
        'MV',
        'ML',
        'MT',
        'MH',
        'MQ',
        'MR',
        'MU',
        'YT',
        'MX',
        'FM',
        'MD',
        'MC',
        'MN',
        'ME',
        'MS',
        'MA',
        'MZ',
        'MM',
        'NA',
        'NR',
        'NP',
        'NL',
        'NC',
        'NZ',
        'NI',
        'NE',
        'NG',
        'NU',
        'NF',
        'MP',
        'NO',
        'OM',
        'PK',
        'PW',
        'PS',
        'PA',
        'PG',
        'PY',
        'PE',
        'PH',
        'PN',
        'PL',
        'PT',
        'PR',
        'QA',
        'RE',
        'RO',
        'RU',
        'RW',
        'BL',
        'SH',
        'KN',
        'LC',
        'MF',
        'PM',
        'VC',
        'WS',
        'SM',
        'ST',
        'SA',
        'SN',
        'RS',
        'SC',
        'SL',
        'SG',
        'SX',
        'SK',
        'SI',
        'SB',
        'SO',
        'ZA',
        'GS',
        'SS',
        'ES',
        'LK',
        'SD',
        'SR',
        'SJ',
        'SZ',
        'SE',
        'CH',
        'SY',
        'TW',
        'TJ',
        'TZ',
        'TH',
        'TL',
        'TG',
        'TK',
        'TO',
        'TT',
        'TN',
        'TR',
        'TM',
        'TC',
        'TV',
        'UG',
        'UA',
        'AE',
        'GB',
        'US',
        'UM',
        'UY',
        'UZ',
        'VU',
        'VE',
        'VN',
        'VG',
        'VI',
        'WF',
        'EH',
        'YE',
        'ZM',
        'ZW',
        'ZZ',
        'EU',
        'RESERVED BY RFC6793',
      ])
      .openapi({ title: 'Country Code' }),
    description: z.string().exactOptional().openapi({ title: 'Description' }),
    name: z.string().openapi({ title: 'Name' }),
    prefixes: z.string().openapi({ title: 'Prefixes' }),
    registry: z.string().openapi({ title: 'Registry' }),
    registry_date: z
      .string()
      .regex(/^(\d{4})(\d{2})(\d{2})$/)
      .exactOptional()
      .openapi({ title: 'Registry Date' }),
    risk: z.enum(['UNKNOWN', 'LOW', 'MEDIUM', 'HIGH']).exactOptional().openapi({ title: 'Risk' }),
    score: z.int().exactOptional().openapi({ title: 'Score' }),
    self: z.string().exactOptional().openapi({ title: 'Self' }),
    status: z.string().openapi({ title: 'Status' }),
  })
  .openapi({
    required: ['name', 'country_code', 'registry', 'status', 'prefixes'],
    title: 'AutonomousSystemOutput',
  })
  .openapi('AutonomousSystemOutput')

const AutonomousSystemPrefixOutputSchema = z
  .object({
    asn: z.string().exactOptional().openapi({ title: 'Asn' }),
    description: z.string().openapi({ title: 'Description' }),
    mantainer: z.string().openapi({ title: 'Mantainer' }),
    object_type: z.string().openapi({ title: 'Object Type' }),
    registry_date: z
      .string()
      .regex(/^(\d{4})(\d{2})(\d{2})$/)
      .exactOptional()
      .openapi({ title: 'Registry Date' }),
    registry_status: z.string().exactOptional().openapi({ title: 'Registry Status' }),
    risk: z.enum(['UNKNOWN', 'LOW', 'MEDIUM', 'HIGH']).exactOptional().openapi({ title: 'Risk' }),
    score: z.int().exactOptional().openapi({ title: 'Score' }),
    self: z.string().exactOptional().openapi({ title: 'Self' }),
  })
  .openapi({
    description: 'AutonomousSystemPrefixResponse class to return the information to the user',
    required: ['object_type', 'mantainer', 'description'],
    title: 'AutonomousSystemPrefixOutput',
  })
  .openapi('AutonomousSystemPrefixOutput')

const AutonomousSystemPrefixesOutputSchema = z
  .object({
    asn: z.string().exactOptional().openapi({ title: 'Asn' }),
    prefixes_v4: z.array(AutonomousSystemPrefixOutputSchema).openapi({ title: 'Prefixes V4' }),
    prefixes_v6: z.array(AutonomousSystemPrefixOutputSchema).openapi({ title: 'Prefixes V6' }),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({
    required: ['self', 'prefixes_v4', 'prefixes_v6'],
    title: 'AutonomousSystemPrefixesOutput',
  })
  .openapi('AutonomousSystemPrefixesOutput')

const AutonomousSystemRegistryOutputSchema = z
  .object({
    code: z.string().openapi({ title: 'Code' }),
    name: z.string().openapi({ title: 'Name' }),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({
    description: 'The Registry information',
    required: ['code', 'name', 'self'],
    title: 'AutonomousSystemRegistryOutput',
  })
  .openapi('AutonomousSystemRegistryOutput')

const AutonomousSystemStatusOutputSchema = z
  .object({
    code: z.string().openapi({ title: 'Code' }),
    name: z.string().openapi({ title: 'Name' }),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({
    description: 'The Status information',
    required: ['code', 'name', 'self'],
    title: 'AutonomousSystemStatusOutput',
  })
  .openapi('AutonomousSystemStatusOutput')

const BodyAssessIpSetCsvV1AssessIpCsvPostSchema = z
  .object({
    csv_file: z
      .file()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'The CSV file with the IP addresses',
        title: 'CSV File upload',
      }),
  })
  .openapi({ required: ['csv_file'], title: 'Body_assess_ip_set_csv_v1_assess_ip_csv_post' })
  .openapi('BodyAssessIpSetCsvV1AssessIpCsvPost')

const BodyAssessIpSetCsvV1GeoCsvPostSchema = z
  .object({
    csv_file: z
      .file()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'The CSV file with the IP addresses',
        title: 'CSV File upload',
      }),
  })
  .openapi({ required: ['csv_file'], title: 'Body_assess_ip_set_csv_v1_geo_csv_post' })
  .openapi('BodyAssessIpSetCsvV1GeoCsvPost')

const BodyChangeStatusOfTheAllowlistV1AllowlistPublicAllowlistIdPutSchema = z
  .object({
    status: z
      .enum(['ACTIVE', 'INACTIVE'])
      .openapi({
        description: 'The status of the list. ACTIVE or INACTIVE',
        title: 'Status of the list',
      }),
  })
  .openapi({
    required: ['status'],
    title: 'Body_change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__put',
  })
  .openapi('BodyChangeStatusOfTheAllowlistV1AllowlistPublicAllowlistIdPut')

const BodyChangeStatusOfTheDenylistV1DenylistPublicDenylistIdPutSchema = z
  .object({
    status: z
      .enum(['ACTIVE', 'INACTIVE'])
      .openapi({
        description: 'The status of the list. ACTIVE or INACTIVE',
        title: 'Status of the list',
      }),
  })
  .openapi({
    required: ['status'],
    title: 'Body_change_status_of_the_denylist_v1_denylist_public__denylist_id__put',
  })
  .openapi('BodyChangeStatusOfTheDenylistV1DenylistPublicDenylistIdPut')

const BodyChangeStatusOfTheOriginAllowlistV1AllowlistPrivateAllowlistIdOriginPutSchema = z
  .object({
    origin: z
      .url()
      .min(1)
      .max(2083)
      .openapi({
        description: 'The protocol and domain of the origin to change the status',
        title: 'Protocol and domain',
      }),
    status: z
      .enum(['ACTIVE', 'INACTIVE', 'DELETED'])
      .openapi({
        description: 'The status of the list. ACTIVE, INACTIVE, DELETED',
        title: 'Status of the list',
      }),
  })
  .openapi({
    required: ['origin', 'status'],
    title:
      'Body_change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_put',
  })
  .openapi('BodyChangeStatusOfTheOriginAllowlistV1AllowlistPrivateAllowlistIdOriginPut')

const BodyChangeStatusOfTheOriginAllowlistV1AllowlistPublicAllowlistIdOriginPutSchema = z
  .object({
    origin: z
      .url()
      .min(1)
      .max(2083)
      .openapi({
        description: 'The protocol and domain of the origin to change the status',
        title: 'Protocol and domain',
      }),
    status: z
      .enum(['ACTIVE', 'INACTIVE', 'DELETED'])
      .openapi({
        description: 'The status of the list. ACTIVE, INACTIVE, DELETED',
        title: 'Status of the list',
      }),
  })
  .openapi({
    required: ['origin', 'status'],
    title:
      'Body_change_status_of_the_origin_allowlist_v1_allowlist_public__allowlist_id__origin_put',
  })
  .openapi('BodyChangeStatusOfTheOriginAllowlistV1AllowlistPublicAllowlistIdOriginPut')

const BodyChangeStatusOfTheOriginDenylistV1DenylistPrivateDenylistIdOriginPutSchema = z
  .object({
    origin: z
      .url()
      .min(1)
      .max(2083)
      .openapi({
        description: 'The protocol and domain of the origin to change the status',
        title: 'Protocol and domain',
      }),
    status: z
      .enum(['ACTIVE', 'INACTIVE', 'DELETED'])
      .openapi({
        description: 'The status of the list. ACTIVE, INACTIVE, DELETED',
        title: 'Status of the list',
      }),
  })
  .openapi({
    required: ['origin', 'status'],
    title: 'Body_change_status_of_the_origin_denylist_v1_denylist_private__denylist_id__origin_put',
  })
  .openapi('BodyChangeStatusOfTheOriginDenylistV1DenylistPrivateDenylistIdOriginPut')

const BodyChangeStatusOfTheOriginDenylistV1DenylistPublicDenylistIdOriginPutSchema = z
  .object({
    origin: z
      .url()
      .min(1)
      .max(2083)
      .openapi({
        description: 'The protocol and domain of the origin to change the status',
        title: 'Protocol and domain',
      }),
    status: z
      .enum(['ACTIVE', 'INACTIVE', 'DELETED'])
      .openapi({
        description: 'The status of the list. ACTIVE, INACTIVE, DELETED',
        title: 'Status of the list',
      }),
  })
  .openapi({
    required: ['origin', 'status'],
    title: 'Body_change_status_of_the_origin_denylist_v1_denylist_public__denylist_id__origin_put',
  })
  .openapi('BodyChangeStatusOfTheOriginDenylistV1DenylistPublicDenylistIdOriginPut')

const PrivateAclGroupListInputSchema = z
  .object({
    description: z.string().openapi({ title: 'Description' }),
    name: z.string().openapi({ title: 'Name' }),
    resource_type: z
      .enum(['UNKNOWN', 'CIDR', 'COUNTRY', 'CONTINENT', 'AS', 'DATACENTER', 'USERAGENT'])
      .openapi({ title: 'Resource Type' }),
    tags: z.array(z.string().regex(/^[A-Z0-9]+(?:-[A-Z0-9]+)*$/)).openapi({ title: 'Tags' }),
    ttl: z.int().exactOptional().openapi({ title: 'Ttl' }),
  })
  .openapi({
    required: ['name', 'description', 'resource_type', 'tags'],
    title: 'PrivateAclGroupListInput',
  })
  .openapi('PrivateAclGroupListInput')

const BodyCreatePrivateAllowlistOfTheUserV1AllowlistPrivatePostSchema = z
  .object({
    payload: PrivateAclGroupListInputSchema.openapi({
      description: 'The information needed to create a new allowlist',
      title: 'Name of the list',
    }),
  })
  .openapi({
    required: ['payload'],
    title: 'Body_create_private_allowlist_of_the_user_v1_allowlist_private_post',
  })
  .openapi('BodyCreatePrivateAllowlistOfTheUserV1AllowlistPrivatePost')

const BodyCreatePrivateDenylistOfTheUserV1DenylistPrivatePostSchema = z
  .object({
    payload: PrivateAclGroupListInputSchema.openapi({
      description: 'The information needed to create a new denylist',
      title: 'Name of the list',
    }),
  })
  .openapi({
    required: ['payload'],
    title: 'Body_create_private_denylist_of_the_user_v1_denylist_private_post',
  })
  .openapi('BodyCreatePrivateDenylistOfTheUserV1DenylistPrivatePost')

const BodyDeleteTokenV1OriginTokenDeleteSchema = z
  .object({ origin_token_id: z.string().openapi({ title: 'Origin Token Id' }) })
  .openapi({ required: ['origin_token_id'], title: 'Body_delete_token_v1_origin_token_delete' })
  .openapi('BodyDeleteTokenV1OriginTokenDelete')

const BodyDisableOriginTokenV1OriginTokenDisablePutSchema = z
  .object({ origin_token_id: z.string().openapi({ title: 'Origin Token Id' }) })
  .openapi({
    required: ['origin_token_id'],
    title: 'Body_disable_origin_token_v1_origin_token_disable_put',
  })
  .openapi('BodyDisableOriginTokenV1OriginTokenDisablePut')

const BodyEnableOriginTokenV1OriginTokenEnablePutSchema = z
  .object({ origin_token_id: z.string().openapi({ title: 'Origin Token Id' }) })
  .openapi({
    required: ['origin_token_id'],
    title: 'Body_enable_origin_token_v1_origin_token_enable_put',
  })
  .openapi('BodyEnableOriginTokenV1OriginTokenEnablePut')

const BodyParseUserAgentsCsvV1UaCsvPostSchema = z
  .object({
    csv_file: z
      .file()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'The CSV file with the User Agents to parse',
        title: 'CSV File upload',
      }),
  })
  .openapi({ required: ['csv_file'], title: 'Body_parse_user_agents_csv_v1_ua_csv_post' })
  .openapi('BodyParseUserAgentsCsvV1UaCsvPost')

const BodyQueryAsnPrefixInformationV1AsnPrefixPostSchema = z
  .object({ prefix: z.string().openapi({ title: 'Prefix' }) })
  .openapi({ required: ['prefix'], title: 'Body_query_asn_prefix_information_v1_asn_prefix_post' })
  .openapi('BodyQueryAsnPrefixInformationV1AsnPrefixPost')

const BodyQueryDatacenterPrefixInformationV1DatacenterPrefixPostSchema = z
  .object({ prefix: z.string().openapi({ title: 'Prefix' }) })
  .openapi({
    required: ['prefix'],
    title: 'Body_query_datacenter_prefix_information_v1_datacenter_prefix_post',
  })
  .openapi('BodyQueryDatacenterPrefixInformationV1DatacenterPrefixPost')

const BodyQueryOriginStatusV1OriginStatusPostSchema = z
  .object({
    address: z
      .union([z.ipv4(), z.ipv6()])
      .exactOptional()
      .openapi({ description: 'The IP address to query the status', title: 'IP address' }),
    cookie_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The cookie id to query the status', title: 'Cookie ID' }),
  })
  .openapi({ title: 'Body_query_origin_status_v1_origin_status_post', required: [] })
  .openapi('BodyQueryOriginStatusV1OriginStatusPost')

const BodyQueryOriginTokenInfoV1OriginTokenPostSchema = z
  .object({ origin_token_id: z.string().openapi({ title: 'Origin Token Id' }) })
  .openapi({
    required: ['origin_token_id'],
    title: 'Body_query_origin_token_info_v1_origin_token_post',
  })
  .openapi('BodyQueryOriginTokenInfoV1OriginTokenPost')

const BodyUpdateConfigurationOriginV1OriginPutSchema = z
  .object({
    config: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'The configuration information to store in the origin.',
        title: 'Configuration',
      }),
    origin: z
      .string()
      .openapi({ description: 'The origin site to modify the configruation', title: 'Origin' }),
  })
  .openapi({ required: ['origin'], title: 'Body_update_configuration_origin_v1_origin_put' })
  .openapi('BodyUpdateConfigurationOriginV1OriginPut')

const BodyUpdatePrivateAllowlistOfTheUserV1AllowlistPrivateAllowlistIdPutSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The human readable full description of the list',
        title: 'Description of the list',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the list', title: 'Name of the list' }),
    tags: z
      .array(z.string().regex(/^[A-Z0-9]+(?:-[A-Z0-9]+)*$/))
      .exactOptional()
      .openapi({
        description: 'The list of tags to associate with the list',
        title: 'Taxonomies of the list',
      }),
    ttl: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Optional. The Time To Live (TTL) of a resource in the list in seconds.',
        title: 'Expiry time',
      }),
  })
  .openapi({
    title: 'Body_update_private_allowlist_of_the_user_v1_allowlist_private__allowlist_id__put',
    required: [],
  })
  .openapi('BodyUpdatePrivateAllowlistOfTheUserV1AllowlistPrivateAllowlistIdPut')

const BodyUpdatePrivateContentOfTheAllowlistOfTheUserV1AllowlistPrivateAllowlistIdContentPutSchema =
  z
    .object({
      append: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description: 'The name of the resources to append to the allowlist',
          title: 'List of resources to append',
        }),
      remove: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description: 'The name of the resources to remove from the allowlist',
          title: 'List of resources to remove',
        }),
    })
    .openapi({
      title:
        'Body_update_private_content_of_the_allowlist_of_the_user_v1_allowlist_private__allowlist_id__content_put',
      required: [],
    })
    .openapi(
      'BodyUpdatePrivateContentOfTheAllowlistOfTheUserV1AllowlistPrivateAllowlistIdContentPut',
    )

const BodyUpdatePrivateContentOfTheDenylistOfTheUserV1DenylistPrivateDenylistIdContentPutSchema = z
  .object({
    append: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The name of the resources to append to the denylist',
        title: 'List of resources to append',
      }),
    remove: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The name of the resources to remove from the denylist',
        title: 'List of resources to remove',
      }),
  })
  .openapi({
    title:
      'Body_update_private_content_of_the_denylist_of_the_user_v1_denylist_private__denylist_id__content_put',
    required: [],
  })
  .openapi('BodyUpdatePrivateContentOfTheDenylistOfTheUserV1DenylistPrivateDenylistIdContentPut')

const BodyUpdatePrivateDenylistOfTheUserV1DenylistPrivateDenylistIdPutSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The human readable full description of the list',
        title: 'Description of the list',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the list', title: 'Name of the list' }),
    tags: z
      .array(z.string().regex(/^[A-Z0-9]+(?:-[A-Z0-9]+)*$/))
      .exactOptional()
      .openapi({
        description: 'The list of tags to associate with the list',
        title: 'Taxonomies of the list',
      }),
    ttl: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Optional. The Time To Live (TTL) of a resource in the list in seconds.',
        title: 'Expiry time',
      }),
  })
  .openapi({
    title: 'Body_update_private_denylist_of_the_user_v1_denylist_private__denylist_id__put',
    required: [],
  })
  .openapi('BodyUpdatePrivateDenylistOfTheUserV1DenylistPrivateDenylistIdPut')

const DatacenterOutputSchema = z
  .object({
    asn: z.string().openapi({ title: 'Asn' }),
    description: z.string().exactOptional().openapi({ title: 'Description' }),
    name: z.string().openapi({ title: 'Name' }),
    prefixes: z.string().openapi({ title: 'Prefixes' }),
    risk: z.enum(['UNKNOWN', 'LOW', 'MEDIUM', 'HIGH']).exactOptional().openapi({ title: 'Risk' }),
    score: z.int().exactOptional().openapi({ title: 'Score' }),
    self: z.string().openapi({ title: 'Self' }),
    source: z.string().openapi({ title: 'Source' }),
    status: z
      .enum(['disabled', 'enabled'])
      .default('enabled')
      .exactOptional()
      .openapi({ title: 'Status' }),
  })
  .openapi({ required: ['self', 'name', 'source', 'asn', 'prefixes'], title: 'DatacenterOutput' })
  .openapi('DatacenterOutput')

const DatacenterPrefixOutputSchema = z
  .object({
    datacenter: z.string().openapi({ title: 'Datacenter' }),
    ip_abuse_total: z.int().default(0).exactOptional().openapi({ title: 'Ip Abuse Total' }),
    max_score: z.int().default(0).exactOptional().openapi({ title: 'Max Score' }),
    min_score: z.int().default(0).exactOptional().openapi({ title: 'Min Score' }),
    risk: z.enum(['UNKNOWN', 'LOW', 'MEDIUM', 'HIGH']).exactOptional().openapi({ title: 'Risk' }),
    score: z.int().exactOptional().openapi({ title: 'Score' }),
    self: z.string().exactOptional().openapi({ title: 'Self' }),
  })
  .openapi({ required: ['datacenter'], title: 'DatacenterPrefixOutput' })
  .openapi('DatacenterPrefixOutput')

const DatacenterPrefixesOutputSchema = z
  .object({
    prefixes_v4: z.array(DatacenterPrefixOutputSchema).openapi({ title: 'Prefixes V4' }),
    prefixes_v6: z.array(DatacenterPrefixOutputSchema).openapi({ title: 'Prefixes V6' }),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({ required: ['self', 'prefixes_v4', 'prefixes_v6'], title: 'DatacenterPrefixesOutput' })
  .openapi('DatacenterPrefixesOutput')

const DatasetTypeOutputSchema = z
  .object({
    description: z.string().openapi({ title: 'Description' }),
    items: z.int().openapi({ title: 'Items' }),
    name: z.string().openapi({ title: 'Name' }),
    self: z.string().openapi({ title: 'Self' }),
    status: z.enum(['ENABLED', 'DISABLED']).openapi({ title: 'Status' }),
    type: z.enum(['ip', 'domain']).openapi({ title: 'Type' }),
  })
  .openapi({
    description: 'The Status information',
    required: ['self', 'type', 'name', 'description', 'status', 'items'],
    title: 'DatasetTypeOutput',
  })
  .openapi('DatasetTypeOutput')

const DatasetTypeCollectionOutputSchema = z
  .object({
    self: z.string().openapi({ title: 'Self' }),
    types: z.array(DatasetTypeOutputSchema).openapi({ title: 'Types' }),
  })
  .openapi({ required: ['self', 'types'], title: 'DatasetTypeCollectionOutput' })
  .openapi('DatasetTypeCollectionOutput')

const DeviceOutputSchema = z
  .object({
    code: z.string().openapi({ title: 'Code' }),
    description: z.string().openapi({ title: 'Description' }),
  })
  .openapi({ required: ['code', 'description'], title: 'DeviceOutput' })
  .openapi('DeviceOutput')

const FamilyOutputSchema = z
  .object({
    code: z.string().openapi({ title: 'Code' }),
    description: z.string().openapi({ title: 'Description' }),
  })
  .openapi({ required: ['code', 'description'], title: 'FamilyOutput' })
  .openapi('FamilyOutput')

const GeoIPOutputSchema = z
  .object({
    accuracy_radius: z.number().openapi({ title: 'Accuracy Radius' }),
    asn_country_iso_code: z.string().openapi({ title: 'Asn Country Iso Code' }),
    city_geoname_code: z.int().openapi({ title: 'City Geoname Code' }),
    city_name: z.string().openapi({ title: 'City Name' }),
    continent_code: z.string().openapi({ title: 'Continent Code' }),
    country_iso_code: z.string().openapi({ title: 'Country Iso Code' }),
    hostnames: z.array(z.string()).openapi({ title: 'Hostnames' }),
    latitude: z.number().openapi({ title: 'Latitude' }),
    longitude: z.number().openapi({ title: 'Longitude' }),
    postal_code: z.string().openapi({ title: 'Postal Code' }),
    region_geoname_code: z.int().openapi({ title: 'Region Geoname Code' }),
    region_name: z.string().openapi({ title: 'Region Name' }),
    self: z.string().exactOptional().openapi({ title: 'Self' }),
    time_zone: z.string().openapi({ title: 'Time Zone' }),
  })
  .openapi({
    required: [
      'hostnames',
      'latitude',
      'longitude',
      'time_zone',
      'accuracy_radius',
      'postal_code',
      'city_name',
      'city_geoname_code',
      'region_name',
      'region_geoname_code',
      'country_iso_code',
      'asn_country_iso_code',
      'continent_code',
    ],
    title: 'GeoIPOutput',
  })
  .openapi('GeoIPOutput')

const GeoIPCollectionOutputSchema = z
  .object({
    results: z.array(GeoIPOutputSchema).openapi({ title: 'Results' }),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({ required: ['self', 'results'], title: 'GeoIPCollectionOutput' })
  .openapi('GeoIPCollectionOutput')

const ValidationErrorSchema = z
  .object({
    loc: z.array(z.union([z.string(), z.int()])).openapi({ title: 'Location' }),
    msg: z.string().openapi({ title: 'Message' }),
    type: z.string().openapi({ title: 'Error Type' }),
  })
  .openapi({ required: ['loc', 'msg', 'type'], title: 'ValidationError' })
  .openapi('ValidationError')

const HTTPValidationErrorSchema = z
  .object({ detail: z.array(ValidationErrorSchema).exactOptional().openapi({ title: 'Detail' }) })
  .openapi({ title: 'HTTPValidationError', required: [] })
  .openapi('HTTPValidationError')

const IPAssessmentOutputSchema = z
  .object({
    allowlisted: z.string().openapi({ title: 'Allowlisted' }),
    asn: z.string().openapi({ title: 'Asn' }),
    asn_prefix: z.string().openapi({ title: 'Asn Prefix' }),
    datacenter: z.string().openapi({ title: 'Datacenter' }),
    datacenter_prefix: z.string().openapi({ title: 'Datacenter Prefix' }),
    datasets: z.array(z.string()).openapi({ title: 'Datasets' }),
    denylisted: z.string().openapi({ title: 'Denylisted' }),
    first_appearance: z.array(z.string()).openapi({ title: 'First Appearance' }),
    last_appearance: z.array(z.string()).openapi({ title: 'Last Appearance' }),
    reason: z.string().openapi({ title: 'Reason' }),
    risk: z.enum(['UNKNOWN', 'LOW', 'MEDIUM', 'HIGH']).openapi({ title: 'Risk' }),
    score: z.int().exactOptional().openapi({ title: 'Score' }),
    self: z.string().exactOptional().openapi({ title: 'Self' }),
    sources: z.array(z.string()).openapi({ title: 'Sources' }),
  })
  .openapi({
    required: [
      'risk',
      'datasets',
      'sources',
      'first_appearance',
      'last_appearance',
      'asn',
      'asn_prefix',
      'reason',
      'denylisted',
      'allowlisted',
      'datacenter',
      'datacenter_prefix',
    ],
    title: 'IPAssessmentOutput',
  })
  .openapi('IPAssessmentOutput')

const IPAssessmentCollectionOutputSchema = z
  .object({
    results: z.array(IPAssessmentOutputSchema).openapi({ title: 'Results' }),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({ required: ['self', 'results'], title: 'IPAssessmentCollectionOutput' })
  .openapi('IPAssessmentCollectionOutput')

const IPListOutputSchema = z
  .object({
    dataset: z.string().openapi({ title: 'Dataset' }),
    expiry: z.int().openapi({ title: 'Expiry' }),
    last_report: z.int().openapi({ title: 'Last Report' }),
    protocol: z.enum(['ALL', 'IPV4', 'IPV6']).openapi({ title: 'Protocol' }),
    self: z.string().openapi({ title: 'Self' }),
    tags: z
      .array(z.string().regex(/^[A-Z0-9]+(?:-[A-Z0-9]+)*$/))
      .exactOptional()
      .openapi({ title: 'Tags' }),
    total_reports: z.int().openapi({ title: 'Total Reports' }),
  })
  .openapi({
    required: ['self', 'last_report', 'total_reports', 'dataset', 'expiry', 'protocol'],
    title: 'IPListOutput',
  })
  .openapi('IPListOutput')

const IPListCollectionOutputSchema = z
  .object({
    addresses: z.array(IPListOutputSchema).openapi({ title: 'Addresses' }),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({ required: ['self', 'addresses'], title: 'IPListCollectionOutput' })
  .openapi('IPListCollectionOutput')

const IPLogOutputSchema = z
  .object({
    action: z.enum(['ADD', 'DELETE']).openapi({ title: 'Action' }),
    cidr: z.string().exactOptional().openapi({ title: 'Cidr' }),
    dataset: z.string().openapi({ title: 'Dataset' }),
    lapse: z
      .enum(['1H', '6H', '12H', '1D', '7D', '30D', '90D', '180D', '365D'])
      .openapi({ title: 'Lapse' }),
    risk: z.enum(['UNKNOWN', 'LOW', 'MEDIUM', 'HIGH']).openapi({ title: 'Risk' }),
    score: z.int().exactOptional().openapi({ title: 'Score' }),
    self: z.string().exactOptional().openapi({ title: 'Self' }),
    source: z.string().openapi({ title: 'Source' }),
    timestamp: z.int().openapi({ title: 'Timestamp' }),
  })
  .openapi({
    required: ['risk', 'dataset', 'source', 'lapse', 'action', 'timestamp', 'debug'],
    title: 'IPLogOutput',
  })
  .openapi('IPLogOutput')

const IPLogCollectionOutputSchema = z
  .object({
    logs: z.array(IPLogOutputSchema).openapi({ title: 'Logs' }),
    self: z.string().exactOptional().openapi({ title: 'Self' }),
  })
  .openapi({ required: ['logs', 'debug'], title: 'IPLogCollectionOutput' })
  .openapi('IPLogCollectionOutput')

const OSOutputSchema = z
  .object({
    code: z.string().openapi({ title: 'Code' }),
    description: z.string().openapi({ title: 'Description' }),
    family: z.string().openapi({ title: 'Family' }),
    vendor: z.string().openapi({ title: 'Vendor' }),
  })
  .openapi({ required: ['code', 'description', 'family', 'vendor'], title: 'OSOutput' })
  .openapi('OSOutput')

const OriginAddressStatusOutputSchema = z
  .object({
    address: z.string().openapi({ title: 'Address' }),
    created_at: z.int().exactOptional().openapi({ title: 'Created At' }),
    expiry: z.int().exactOptional().openapi({ title: 'Expiry' }),
    log_id: z.string().exactOptional().openapi({ title: 'Log Id' }),
    status: z.string().openapi({ title: 'Status' }),
    updated_at: z.int().exactOptional().openapi({ title: 'Updated At' }),
  })
  .openapi({ required: ['status', 'address'], title: 'OriginAddressStatusOutput' })
  .openapi('OriginAddressStatusOutput')

const OriginAddressStatusCollectionOutputSchema = z
  .object({
    addresses: z.array(OriginAddressStatusOutputSchema).openapi({ title: 'Addresses' }),
    page: z.int().openapi({ title: 'Page' }),
    page_size: z.int().openapi({ title: 'Page Size' }),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({
    required: ['self', 'page', 'page_size', 'addresses'],
    title: 'OriginAddressStatusCollectionOutput',
  })
  .openapi('OriginAddressStatusCollectionOutput')

const OriginClientAnalysisOutputSchema = z
  .object({
    client_browser: z.int().openapi({ title: 'Client Browser' }),
    client_crawler: z.int().openapi({ title: 'Client Crawler' }),
    client_email: z.int().openapi({ title: 'Client Email' }),
    client_library: z.int().openapi({ title: 'Client Library' }),
    client_mobile_browser: z.int().openapi({ title: 'Client Mobile Browser' }),
    client_multimedia_player: z.int().openapi({ title: 'Client Multimedia Player' }),
    client_offline_browser: z.int().openapi({ title: 'Client Offline Browser' }),
    client_total: z.int().openapi({ title: 'Client Total' }),
    client_ua_anonymizer: z.int().openapi({ title: 'Client Ua Anonymizer' }),
    client_unrecognized: z.int().openapi({ title: 'Client Unrecognized' }),
    client_validator: z.int().openapi({ title: 'Client Validator' }),
    client_wap_browser: z.int().openapi({ title: 'Client Wap Browser' }),
    crawler_feed_fetcher: z.int().openapi({ title: 'Crawler Feed Fetcher' }),
    crawler_link_checker: z.int().openapi({ title: 'Crawler Link Checker' }),
    crawler_marketing: z.int().openapi({ title: 'Crawler Marketing' }),
    crawler_screenshot_creator: z.int().openapi({ title: 'Crawler Screenshot Creator' }),
    crawler_search_engine_bot: z.int().openapi({ title: 'Crawler Search Engine Bot' }),
    crawler_site_monitor: z.int().openapi({ title: 'Crawler Site Monitor' }),
    crawler_speed_tester: z.int().openapi({ title: 'Crawler Speed Tester' }),
    crawler_tool: z.int().openapi({ title: 'Crawler Tool' }),
    crawler_total: z.int().openapi({ title: 'Crawler Total' }),
    crawler_uncategorised: z.int().openapi({ title: 'Crawler Uncategorised' }),
    crawler_unrecognized: z.int().openapi({ title: 'Crawler Unrecognized' }),
    crawler_virus_scanner: z.int().openapi({ title: 'Crawler Virus Scanner' }),
    crawler_vulnerability_scanner: z.int().openapi({ title: 'Crawler Vulnerability Scanner' }),
    crawler_web_scraper: z.int().openapi({ title: 'Crawler Web Scraper' }),
    timestamp: z.int().openapi({ title: 'Timestamp' }),
    total: z.int().openapi({ title: 'Total' }),
  })
  .openapi({
    required: [
      'timestamp',
      'total',
      'client_total',
      'crawler_total',
      'client_browser',
      'client_crawler',
      'client_email',
      'client_library',
      'client_mobile_browser',
      'client_multimedia_player',
      'client_offline_browser',
      'client_unrecognized',
      'client_ua_anonymizer',
      'client_validator',
      'client_wap_browser',
      'crawler_feed_fetcher',
      'crawler_link_checker',
      'crawler_marketing',
      'crawler_screenshot_creator',
      'crawler_search_engine_bot',
      'crawler_site_monitor',
      'crawler_speed_tester',
      'crawler_tool',
      'crawler_uncategorised',
      'crawler_unrecognized',
      'crawler_virus_scanner',
      'crawler_vulnerability_scanner',
      'crawler_web_scraper',
    ],
    title: 'OriginClientAnalysisOutput',
  })
  .openapi('OriginClientAnalysisOutput')

const OriginClientAnalysisCollectionOutputSchema = z
  .object({
    data: z.array(OriginClientAnalysisOutputSchema).openapi({ title: 'Data' }),
    from_timestamp: z.int().openapi({ title: 'From Timestamp' }),
    interval: z.string().openapi({ title: 'Interval' }),
    self: z.string().openapi({ title: 'Self' }),
    to_timestamp: z.int().openapi({ title: 'To Timestamp' }),
  })
  .openapi({
    required: ['self', 'interval', 'from_timestamp', 'to_timestamp', 'data'],
    title: 'OriginClientAnalysisCollectionOutput',
  })
  .openapi('OriginClientAnalysisCollectionOutput')

const OriginOutputSchema = z
  .object({
    actions: z.string().openapi({ title: 'Actions' }),
    addresses: z.string().openapi({ title: 'Addresses' }),
    config: z.object({}).openapi({ title: 'Config' }),
    cookies: z.string().openapi({ title: 'Cookies' }),
    created_at: z.int().openapi({ title: 'Created At' }),
    logs: z.string().openapi({ title: 'Logs' }),
    origin: z.string().openapi({ title: 'Origin' }),
    scripts: z.string().openapi({ title: 'Scripts' }),
    self: z.string().openapi({ title: 'Self' }),
    status: z.enum(['ENABLED', 'DISABLED']).openapi({ title: 'Status' }),
    token: z.string().openapi({ title: 'Token' }),
    updated_at: z.int().openapi({ title: 'Updated At' }),
  })
  .openapi({
    required: [
      'self',
      'origin',
      'status',
      'token',
      'config',
      'logs',
      'addresses',
      'cookies',
      'actions',
      'scripts',
      'created_at',
      'updated_at',
    ],
    title: 'OriginOutput',
  })
  .openapi('OriginOutput')

const OriginCollectionOutputSchema = z
  .object({
    origins: z.array(OriginOutputSchema).openapi({ title: 'Origins' }),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({ required: ['self', 'origins'], title: 'OriginCollectionOutput' })
  .openapi('OriginCollectionOutput')

const OriginCookieIdStatusOutputSchema = z
  .object({
    cookie_id: z.string().openapi({ title: 'Cookie Id' }),
    created_at: z.int().exactOptional().openapi({ title: 'Created At' }),
    expiry: z.int().exactOptional().openapi({ title: 'Expiry' }),
    log_id: z.string().exactOptional().openapi({ title: 'Log Id' }),
    status: z.string().openapi({ title: 'Status' }),
    updated_at: z.int().exactOptional().openapi({ title: 'Updated At' }),
  })
  .openapi({ required: ['status', 'cookie_id'], title: 'OriginCookieIdStatusOutput' })
  .openapi('OriginCookieIdStatusOutput')

const OriginCookieIdStatusCollectionOutputSchema = z
  .object({
    cookie_ids: z.array(OriginCookieIdStatusOutputSchema).openapi({ title: 'Cookie Ids' }),
    page: z.int().openapi({ title: 'Page' }),
    page_size: z.int().openapi({ title: 'Page Size' }),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({
    required: ['self', 'page', 'page_size', 'cookie_ids'],
    title: 'OriginCookieIdStatusCollectionOutput',
  })
  .openapi('OriginCookieIdStatusCollectionOutput')

const OriginScriptsOutputSchema = z
  .object({
    detection: z.string().openapi({ title: 'Detection' }),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({ required: ['self', 'detection'], title: 'OriginScriptsOutput' })
  .openapi('OriginScriptsOutput')

const OriginStatusDetailsOutputSchema = z
  .object({
    cardinality: z.int().openapi({ title: 'Cardinality' }),
    description: z.string().openapi({ title: 'Description' }),
    self: z.string().openapi({ title: 'Self' }),
    status: z.string().openapi({ title: 'Status' }),
  })
  .openapi({
    required: ['self', 'status', 'description', 'cardinality'],
    title: 'OriginStatusDetailsOutput',
  })
  .openapi('OriginStatusDetailsOutput')

const OriginStatusDetailsCollectionOutputSchema = z
  .object({
    list: z.array(OriginStatusDetailsOutputSchema).openapi({ title: 'List' }),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({ required: ['self', 'list'], title: 'OriginStatusDetailsCollectionOutput' })
  .openapi('OriginStatusDetailsCollectionOutput')

const OriginStatusOutputSchema = z
  .object({
    address: OriginAddressStatusOutputSchema.exactOptional(),
    cookie_id: OriginCookieIdStatusOutputSchema.exactOptional(),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({ required: ['self'], title: 'OriginStatusOutput' })
  .openapi('OriginStatusOutput')

const OriginTokenOutputSchema = z
  .object({
    created_at: z.int().openapi({ title: 'Created At' }),
    origin: z.string().openapi({ title: 'Origin' }),
    region_id: z.string().openapi({ title: 'Region Id' }),
    self: z.string().openapi({ title: 'Self' }),
    status: z.enum(['ENABLED', 'DISABLED']).openapi({ title: 'Status' }),
    updated_at: z.int().openapi({ title: 'Updated At' }),
  })
  .openapi({
    required: ['self', 'region_id', 'origin', 'status', 'created_at', 'updated_at'],
    title: 'OriginTokenOutput',
  })
  .openapi('OriginTokenOutput')

const OriginTokenCollectionOutputSchema = z
  .object({
    self: z.string().openapi({ title: 'Self' }),
    tokens: z.array(OriginTokenOutputSchema).openapi({ title: 'Tokens' }),
  })
  .openapi({ required: ['self', 'tokens'], title: 'OriginTokenCollectionOutput' })
  .openapi('OriginTokenCollectionOutput')

const OriginTokenInputSchema = z
  .object({ origin: z.string().openapi({ title: 'Origin' }) })
  .openapi({ required: ['origin'], title: 'OriginTokenInput' })
  .openapi('OriginTokenInput')

const OriginTrafficAnalysisOutputSchema = z
  .object({
    asn_risky: z.int().openapi({ title: 'Asn Risky' }),
    bots: z.int().openapi({ title: 'Bots' }),
    datacenters: z.int().openapi({ title: 'Datacenters' }),
    denylists: z.int().openapi({ title: 'Denylists' }),
    network_country_mismatches: z.int().openapi({ title: 'Network Country Mismatches' }),
    score_high: z.int().openapi({ title: 'Score High' }),
    timestamp: z.int().openapi({ title: 'Timestamp' }),
    total: z.int().openapi({ title: 'Total' }),
    webdrivers: z.int().openapi({ title: 'Webdrivers' }),
  })
  .openapi({
    required: [
      'timestamp',
      'total',
      'score_high',
      'bots',
      'denylists',
      'datacenters',
      'webdrivers',
      'asn_risky',
      'network_country_mismatches',
    ],
    title: 'OriginTrafficAnalysisOutput',
  })
  .openapi('OriginTrafficAnalysisOutput')

const OriginTrafficAnalysisCollectionOutputSchema = z
  .object({
    data: z.array(OriginTrafficAnalysisOutputSchema).openapi({ title: 'Data' }),
    from_timestamp: z.int().openapi({ title: 'From Timestamp' }),
    interval: z.string().openapi({ title: 'Interval' }),
    self: z.string().openapi({ title: 'Self' }),
    to_timestamp: z.int().openapi({ title: 'To Timestamp' }),
  })
  .openapi({
    required: ['self', 'interval', 'from_timestamp', 'to_timestamp', 'data'],
    title: 'OriginTrafficAnalysisCollectionOutput',
  })
  .openapi('OriginTrafficAnalysisCollectionOutput')

const PrivateAclGroupListOutputSchema = z
  .object({
    content: z.string().openapi({ title: 'Content' }),
    created_at: z.int().openapi({ title: 'Created At' }),
    description: z.string().openapi({ title: 'Description' }),
    list_type: z.enum(['UNKNOWN', 'ALLOW', 'DENY']).openapi({ title: 'List Type' }),
    name: z.string().openapi({ title: 'Name' }),
    origins: AclGroupOriginCollectionOutputSchema.exactOptional(),
    resource_type: z
      .enum(['UNKNOWN', 'CIDR', 'COUNTRY', 'CONTINENT', 'AS', 'DATACENTER', 'USERAGENT'])
      .openapi({ title: 'Resource Type' }),
    self: z.string().openapi({ title: 'Self' }),
    tags: z.array(z.string().regex(/^[A-Z0-9]+(?:-[A-Z0-9]+)*$/)).openapi({ title: 'Tags' }),
    ttl: z.int().exactOptional().openapi({ title: 'Ttl' }),
    updated_at: z.int().openapi({ title: 'Updated At' }),
  })
  .openapi({
    required: [
      'self',
      'name',
      'description',
      'resource_type',
      'list_type',
      'tags',
      'created_at',
      'updated_at',
      'content',
    ],
    title: 'PrivateAclGroupListOutput',
  })
  .openapi('PrivateAclGroupListOutput')

const PrivateAclGroupListCollectionOutputSchema = z
  .object({
    lists: z.array(PrivateAclGroupListOutputSchema).openapi({ title: 'Lists' }),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({ required: ['self', 'lists'], title: 'PrivateAclGroupListCollectionOutput' })
  .openapi('PrivateAclGroupListCollectionOutput')

const PrivateAclListCollectionOutputSchema = z
  .object({
    asns: z.array(z.int()).exactOptional().openapi({ title: 'Asns' }),
    cidrs: z
      .array(z.union([z.string(), z.string()]))
      .exactOptional()
      .openapi({ title: 'Cidrs' }),
    continents: z
      .array(z.enum(['AF', 'AN', 'AS', 'EU', 'NA', 'OC', 'SA']))
      .exactOptional()
      .openapi({ title: 'Continents' }),
    countries: z
      .array(
        z.enum([
          'AW',
          'AF',
          'AO',
          'AI',
          'AX',
          'AL',
          'AD',
          'AE',
          'AR',
          'AM',
          'AS',
          'AQ',
          'TF',
          'AG',
          'AU',
          'AT',
          'AZ',
          'BI',
          'BE',
          'BJ',
          'BQ',
          'BF',
          'BD',
          'BG',
          'BH',
          'BS',
          'BA',
          'BL',
          'BY',
          'BZ',
          'BM',
          'BO',
          'BR',
          'BB',
          'BN',
          'BT',
          'BV',
          'BW',
          'CF',
          'CA',
          'CC',
          'CH',
          'CL',
          'CN',
          'CI',
          'CM',
          'CD',
          'CG',
          'CK',
          'CO',
          'KM',
          'CV',
          'CR',
          'CU',
          'CW',
          'CX',
          'KY',
          'CY',
          'CZ',
          'DE',
          'DJ',
          'DM',
          'DK',
          'DO',
          'DZ',
          'EC',
          'EG',
          'ER',
          'EH',
          'ES',
          'EE',
          'ET',
          'FI',
          'FJ',
          'FK',
          'FR',
          'FO',
          'FM',
          'GA',
          'GB',
          'GE',
          'GG',
          'GH',
          'GI',
          'GN',
          'GP',
          'GM',
          'GW',
          'GQ',
          'GR',
          'GD',
          'GL',
          'GT',
          'GF',
          'GU',
          'GY',
          'HK',
          'HM',
          'HN',
          'HR',
          'HT',
          'HU',
          'ID',
          'IM',
          'IN',
          'IO',
          'IE',
          'IR',
          'IQ',
          'IS',
          'IL',
          'IT',
          'JM',
          'JE',
          'JO',
          'JP',
          'KZ',
          'KE',
          'KG',
          'KH',
          'KI',
          'KN',
          'KR',
          'KW',
          'LA',
          'LB',
          'LR',
          'LY',
          'LC',
          'LI',
          'LK',
          'LS',
          'LT',
          'LU',
          'LV',
          'MO',
          'MF',
          'MA',
          'MC',
          'MD',
          'MG',
          'MV',
          'MX',
          'MH',
          'MK',
          'ML',
          'MT',
          'MM',
          'ME',
          'MN',
          'MP',
          'MZ',
          'MR',
          'MS',
          'MQ',
          'MU',
          'MW',
          'MY',
          'YT',
          'NA',
          'NC',
          'NE',
          'NF',
          'NG',
          'NI',
          'NU',
          'NL',
          'NO',
          'NP',
          'NR',
          'NZ',
          'OM',
          'PK',
          'PA',
          'PN',
          'PE',
          'PH',
          'PW',
          'PG',
          'PL',
          'PR',
          'KP',
          'PT',
          'PY',
          'PS',
          'PF',
          'QA',
          'RE',
          'RO',
          'RU',
          'RW',
          'SA',
          'SD',
          'SN',
          'SG',
          'GS',
          'SH',
          'SJ',
          'SB',
          'SL',
          'SV',
          'SM',
          'SO',
          'PM',
          'RS',
          'SS',
          'ST',
          'SR',
          'SK',
          'SI',
          'SE',
          'SZ',
          'SX',
          'SC',
          'SY',
          'TC',
          'TD',
          'TG',
          'TH',
          'TJ',
          'TK',
          'TM',
          'TL',
          'TO',
          'TT',
          'TN',
          'TR',
          'TV',
          'TW',
          'TZ',
          'UG',
          'UA',
          'UM',
          'UY',
          'US',
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
          'ZA',
          'ZM',
          'ZW',
        ]),
      )
      .exactOptional()
      .openapi({ title: 'Countries' }),
    datacenters: z.array(z.string()).exactOptional().openapi({ title: 'Datacenters' }),
    self: z.string().openapi({ title: 'Self' }),
    user_agents: z.array(z.string()).exactOptional().openapi({ title: 'User Agents' }),
  })
  .openapi({ required: ['self'], title: 'PrivateAclListCollectionOutput' })
  .openapi('PrivateAclListCollectionOutput')

const PublicAclGroupListOutputSchema = z
  .object({
    created_at: z.int().openapi({ title: 'Created At' }),
    description: z.string().openapi({ title: 'Description' }),
    list_type: z.enum(['UNKNOWN', 'ALLOW', 'DENY']).openapi({ title: 'List Type' }),
    name: z.string().openapi({ title: 'Name' }),
    origins: AclGroupOriginCollectionOutputSchema.exactOptional(),
    resource_type: z
      .enum(['UNKNOWN', 'CIDR', 'COUNTRY', 'CONTINENT', 'AS', 'DATACENTER', 'USERAGENT'])
      .openapi({ title: 'Resource Type' }),
    self: z.string().openapi({ title: 'Self' }),
    status: z.enum(['INACTIVE', 'ACTIVE', 'EXPIRED']).exactOptional().openapi({ title: 'Status' }),
    tags: z.array(z.string().regex(/^[A-Z0-9]+(?:-[A-Z0-9]+)*$/)).openapi({ title: 'Tags' }),
    ttl: z.int().exactOptional().openapi({ title: 'Ttl' }),
    updated_at: z.int().openapi({ title: 'Updated At' }),
  })
  .openapi({
    required: [
      'self',
      'name',
      'description',
      'resource_type',
      'list_type',
      'tags',
      'created_at',
      'updated_at',
    ],
    title: 'PublicAclGroupListOutput',
  })
  .openapi('PublicAclGroupListOutput')

const PublicAclGroupListCollectionOutputSchema = z
  .object({
    lists: z.array(PublicAclGroupListOutputSchema).openapi({ title: 'Lists' }),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({ required: ['self', 'lists'], title: 'PublicAclGroupListCollectionOutput' })
  .openapi('PublicAclGroupListCollectionOutput')

const V1ModelsSourceSourceOutputSchema = z
  .object({
    dataset: z.string().openapi({ title: 'Dataset' }),
    description: z.string().openapi({ title: 'Description' }),
    maximum_risk: z.enum(['UNKNOWN', 'LOW', 'MEDIUM', 'HIGH']).openapi({ title: 'Maximum Risk' }),
    maximum_score: z.int().openapi({ title: 'Maximum Score' }),
    minimum_risk: z.enum(['UNKNOWN', 'LOW', 'MEDIUM', 'HIGH']).openapi({ title: 'Minimum Risk' }),
    minimum_score: z.int().openapi({ title: 'Minimum Score' }),
    name: z.string().openapi({ title: 'Name' }),
    refresh: z
      .enum(['1H', '6H', '12H', '1D', '7D', '30D', '90D', '180D', '365D'])
      .openapi({ title: 'Refresh' }),
    self: z.string().openapi({ title: 'Self' }),
    source: z.string().openapi({ title: 'Source' }),
    time_ranges: z.array(z.string()).openapi({ title: 'Time Ranges' }),
    updated_at: z.int().openapi({ title: 'Updated At' }),
    url: z.string().openapi({ title: 'Url' }),
  })
  .openapi({
    required: [
      'self',
      'dataset',
      'name',
      'description',
      'source',
      'url',
      'refresh',
      'minimum_score',
      'maximum_score',
      'minimum_risk',
      'maximum_risk',
      'time_ranges',
      'updated_at',
    ],
    title: 'SourceOutput',
  })
  .openapi('V1ModelsSourceSourceOutput')

const SourceCollectionOutputSchema = z
  .object({
    self: z.string().openapi({ title: 'Self' }),
    sources: z.array(V1ModelsSourceSourceOutputSchema).openapi({ title: 'Sources' }),
  })
  .openapi({ required: ['self', 'sources'], title: 'SourceCollectionOutput' })
  .openapi('SourceCollectionOutput')

const SourceTimeRangeOutputSchema = z
  .object({
    items: z.int().openapi({ title: 'Items' }),
    lapse: z
      .enum(['1H', '6H', '12H', '1D', '7D', '30D', '90D', '180D', '365D'])
      .openapi({ title: 'Lapse' }),
    risk: z.enum(['UNKNOWN', 'LOW', 'MEDIUM', 'HIGH']).openapi({ title: 'Risk' }),
    score: z.int().openapi({ title: 'Score' }),
    self: z.string().openapi({ title: 'Self' }),
    source: z.string().openapi({ title: 'Source' }),
    updated_at: z.int().openapi({ title: 'Updated At' }),
  })
  .openapi({
    required: ['self', 'source', 'lapse', 'items', 'score', 'risk', 'updated_at'],
    title: 'SourceTimeRangeOutput',
  })
  .openapi('SourceTimeRangeOutput')

const TokenOutputSchema = z
  .object({
    created_at: z.int().openapi({ title: 'Created At' }),
    last_minute_bucket_init_value: z.int().openapi({ title: 'Last Minute Bucket Init Value' }),
    last_minute_bucket_refill_ratio: z.int().openapi({ title: 'Last Minute Bucket Refill Ratio' }),
    last_minute_bucket_refresh: z.int().openapi({ title: 'Last Minute Bucket Refresh' }),
    last_minute_bucket_value: z.int().openapi({ title: 'Last Minute Bucket Value' }),
    last_month_bucket_init_value: z.int().openapi({ title: 'Last Month Bucket Init Value' }),
    last_month_bucket_refresh: z.int().openapi({ title: 'Last Month Bucket Refresh' }),
    last_month_bucket_value: z.int().openapi({ title: 'Last Month Bucket Value' }),
    region_id: z.string().openapi({ title: 'Region Id' }),
    self: z.string().openapi({ title: 'Self' }),
    status: z.enum(['ENABLED', 'DISABLED']).openapi({ title: 'Status' }),
    updated_at: z.int().openapi({ title: 'Updated At' }),
  })
  .openapi({
    required: [
      'self',
      'region_id',
      'last_month_bucket_init_value',
      'last_month_bucket_value',
      'last_month_bucket_refresh',
      'last_minute_bucket_init_value',
      'last_minute_bucket_refill_ratio',
      'last_minute_bucket_value',
      'last_minute_bucket_refresh',
      'status',
      'created_at',
      'updated_at',
    ],
    title: 'TokenOutput',
  })
  .openapi('TokenOutput')

const TypeOutputSchema = z
  .object({
    code: z.string().openapi({ title: 'Code' }),
    description: z.string().openapi({ title: 'Description' }),
    type: z.enum(['INTERACTIVE', 'CRAWLER', 'UNKNOWN']).openapi({ title: 'Type' }),
  })
  .openapi({ required: ['code', 'description', 'type'], title: 'TypeOutput' })
  .openapi('TypeOutput')

const UAOutputSchema = z
  .object({
    agent: z.string().openapi({ title: 'Agent' }),
    classification: z.enum(['CRAWLER', 'CLIENT', 'UNKNOWN']).openapi({ title: 'Classification' }),
    device: z.string().openapi({ title: 'Device' }),
    engine: z.string().openapi({ title: 'Engine' }),
    family: z.string().openapi({ title: 'Family' }),
    frequent: z.enum(['COMMON', 'RARE', 'VERY_RARE', 'UNKNOWN']).openapi({ title: 'Frequent' }),
    latest: z.string().openapi({ title: 'Latest' }),
    os: z.string().openapi({ title: 'Os' }),
    self: z.string().exactOptional().openapi({ title: 'Self' }),
    string: z.string().openapi({ title: 'String' }),
    type: z.string().openapi({ title: 'Type' }),
    vendor: z.string().openapi({ title: 'Vendor' }),
    version: z.string().openapi({ title: 'Version' }),
  })
  .openapi({
    required: [
      'string',
      'classification',
      'type',
      'agent',
      'engine',
      'version',
      'latest',
      'family',
      'vendor',
      'os',
      'device',
      'frequent',
    ],
    title: 'UAOutput',
  })
  .openapi('UAOutput')

const UACollectionOutputSchema = z
  .object({
    results: z.array(UAOutputSchema).openapi({ title: 'Results' }),
    self: z.string().openapi({ title: 'Self' }),
  })
  .openapi({ required: ['self', 'results'], title: 'UACollectionOutput' })
  .openapi('UACollectionOutput')

const VendorOutputSchema = z
  .object({
    code: z.string().openapi({ title: 'Code' }),
    description: z.string().openapi({ title: 'Description' }),
  })
  .openapi({ required: ['code', 'description'], title: 'VendorOutput' })
  .openapi('VendorOutput')

const HTTPBearerSecurityScheme = { scheme: 'bearer', type: 'http' }

export const postV1AllowlistPrivateRoute = createRoute({
  method: 'post',
  path: '/v1/allowlist/private',
  tags: ['Allowlist data query and management'],
  summary: 'Creates a new private allowlist binded to the user.',
  description:
    '### What\nCreates a new allowlist with the information given and binded to the current user. The parameters are:\n - name\n - description\n - tags\n - expiry\n - Time to Live (TTL)\n - Resource Type (`CIDR`, `AS`, `COUNTRY`, `CONTINENT`, `DATACENTER_ID` and `USER AGENT`)\n\nThis is an asynchronous operation. It can take several seconds until the operation completes, but the request will immediately return a 202 Accepted response. The operation will also return the UUID of the list.\n\n### Parameters\nIn the query string the ID of the private allow list to delete.\n\nIn the body the following parameters:\n- ``name``: A human readable name of the list.\n- ``description``: A long detailed information about what the list contains and how it is used.\n- ``tags``: A list of tags that describe the list.\n- ``ttl``: (Optional) The Time To Live of the list, in seconds. If it does not exist, it will never expire.\n- ``resource_type``: The type of resource that the list contains. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT``,    ``DATACENTER_ID`` or ``USER AGENT``.\n\n### Result\nIt should always return a 202 Accepted response with the UUID of the new list in the body.\n\n### Errors\n\n- If the information is not valid, it will return a `422` (Unprocessable Entity) error.\n- If the ttl is negative, it will return a `400` (Bad Request) error.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'create_private_allowlist_of_the_user_v1_allowlist_private_post',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BodyCreatePrivateAllowlistOfTheUserV1AllowlistPrivatePostSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .uuid()
            .openapi({
              title: 'Response Create Private Allowlist Of The User V1 Allowlist Private Post',
            }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AllowlistPrivateAllRoute = createRoute({
  method: 'get',
  path: '/v1/allowlist/private/all',
  tags: ['Allowlist data query and management'],
  summary: 'Get the set of private allowlists of the user.',
  description:
    '### What\nObtain the set of private allow lists of the user available in the service.\n\n### Parameters\nNo parameters\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to the status of all the lists.\n- ``lists``: a list of JSON objects with the available lists:\n    - ``self``: the URI to individual information of the list.\n    - ``name``: A human readable name of the list.\n    - ``description``: A long detailed information about what the list contains and how it is used.\n    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.\n    - ``created_at``: Unix timestamp in seconds when the list was created.\n    - ``updated_at``: Unix timestamp in seconds when the list was updated.\n    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n    - ``origins``: list of websites that are using the list as a allowlist.\n        - ``self``: the URI to all the list of origins.\n        - ``lists``: list of lists that the origin is using.\n            - ``self``: the URI to the individual information of the list.\n            - ``origin``: the protocol and domain of the website that is using the list.\n            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED`` it means that the list is not available anymore if not renewed.\n            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n            - ``created_at``: Unix timestamp in seconds when the list was created.\n            - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\n### Errors\n\nIt will return the API Global errors described in the API description.',
  operationId: 'get_all_private_allowlists_v1_allowlist_private_all_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PrivateAclGroupListCollectionOutputSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AllowlistPrivateAllResourceTypeRoute = createRoute({
  method: 'get',
  path: '/v1/allowlist/private/all/{resource_type}',
  tags: ['Allowlist data query and management'],
  summary: 'Get the set of private allowlists of the user by resource type.',
  description:
    '### What\nObtain the set of private allow lists of the user available in the service filtering by resource type. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``\n\n### Parameters\nThe ``resource type`` to filter. The values can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to the status of all the lists.\n- ``lists``: a list of JSON objects with the available lists:\n    - ``self``: the URI to individual information of the list.\n    - ``name``: A human readable name of the list.\n    - ``description``: A long detailed information about what the list contains and how it is used.\n    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.\n    - ``created_at``: Unix timestamp in seconds when the list was created.\n    - ``updated_at``: Unix timestamp in seconds when the list was updated.\n    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n    - ``origins``: list of websites that are using the list as a allowlist.\n        - ``self``: the URI to all the list of origins.\n        - ``lists``: list of lists that the origin is using.\n            - ``self``: the URI to the individual information of the list.\n            - ``origin``: the protocol and domain of the website that is using the list.\n            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED`` it means that the list is not available anymore if not renewed.\n            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n            - ``created_at``: Unix timestamp in seconds when the list was created.\n            - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\n### Errors\n\n- If the resource type is not valid, it will return a ``400`` error.\n\nIt will also return the API Global errors described in the API description.',
  operationId:
    'get_all_private_allowlists_by_resource_type_v1_allowlist_private_all__resource_type__get',
  request: {
    params: z.object({
      resource_type: z
        .enum(['cidr', 'country', 'continent', 'as', 'datacenter', 'useragent'])
        .openapi({
          param: {
            in: 'path',
            name: 'resource_type',
            required: true,
            schema: {
              enum: ['cidr', 'country', 'continent', 'as', 'datacenter', 'useragent'],
              title: 'Resource Type',
              type: 'string',
            },
          },
          title: 'Resource Type',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PrivateAclGroupListCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AllowlistPrivateIpAddressRoute = createRoute({
  method: 'get',
  path: '/v1/allowlist/private/ip/{address}',
  tags: ['Allowlist data query and management'],
  summary: 'Get the different private allowlists where the IP address was found.',
  description:
    '### What\nObtain the list of all the different private allowlists where the IP address entered by the user. The allowlisted forbidden datasets are the ones submitted manually by the user from files or indidual items.\n\n### Parameters\nThe endpoint accepts the `address` parameter as query string.\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to individual status.\n- ``cidrs``: the URI of the lists of CIDRs where the IP was found.\n- ``country``: the URIs where the lists of countries where the IP address was found\n- ``continent``: the URI where the continent where the IP address was found.\n- ``asn``: the URIs where the list of continents of the ASN where the IP address was found.\n- ``datacenter``: the URIs of the lists of datacenters where the IP address was found. If not found, the result is an empty string.\n- ``reported``: the URI of the information of the IP address reported by the user. For allowlist should be empty.\n\n### Errors\n- a `422 Unprocessable Entity` error if the IP address was malformed.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'query_resource_denylists_v1_allowlist_private_ip__address__get',
  request: {
    params: z.object({
      address: z.union([z.ipv4(), z.ipv6()]).openapi({
        param: {
          in: 'path',
          name: 'address',
          required: true,
          schema: {
            anyOf: [
              { format: 'ipv4', type: 'string' },
              { format: 'ipv6', type: 'string' },
            ],
            title: 'Address',
          },
        },
        title: 'Address',
      }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AclListCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AllowlistPrivateAllowlistIdRoute = createRoute({
  method: 'get',
  path: '/v1/allowlist/private/{allowlist_id}',
  tags: ['Allowlist data query and management'],
  summary: 'Get the details of a specific private allowlist of the user.',
  description:
    '### What\nObtain the details of the private allow list of the user available in the service.\n\n### Parameters\nPass the private allowlist ID as query parameter.\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI to individual information of the list.\n- ``name``: A human readable name of the list.\n- ``description``: A long detailed information about what the list contains and how it is used.\n- ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n- ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.\n- ``created_at``: Unix timestamp in seconds when the list was created.\n- ``updated_at``: Unix timestamp in seconds when the list was updated.\n- ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n- ``origins``: list of websites that are using the list as a allowlist.\n    - ``self``: the URI to all the list of origins.\n    - ``lists``: list of lists that the origin is using.\n        - ``self``: the URI to the individual information of the list.\n        - ``origin``: the protocol and domain of the website that is using the list.\n        - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED`` it means that the list is not available anymore if not renewed.\n        - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n        - ``created_at``: Unix timestamp in seconds when the list was created.\n        - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\n### Errors\n\n- If the allow list is not a valid UUID, it will return a 422 error.\n- If the private allowlist ID does not exist, it will return a ``404`` error.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'get_single_allowlist_v1_allowlist_private__allowlist_id__get',
  request: {
    params: z.object({
      allowlist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'allowlist_id',
            required: true,
            schema: { format: 'uuid', title: 'Allowlist Id', type: 'string' },
          },
          title: 'Allowlist Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PrivateAclGroupListOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const putV1AllowlistPrivateAllowlistIdRoute = createRoute({
  method: 'put',
  path: '/v1/allowlist/private/{allowlist_id}',
  tags: ['Allowlist data query and management'],
  summary: 'Update the information of an existing private allowlist of the user.',
  description:
    '### What\nUpdates the information that describes the allowlist of the user in the system. The parameters that can be modified are:\n - name\n - description\n - tags\n - expiry\n\nThis is an asynchronous operation. It can take several seconds until the operation completes, but the request will immediately return a 202 Accepted response.\n\n### Parameters\nIn the query string the ID of the private allow list to delete.\n\nIn the body the following parameters:\n- ``name``: (Optional) A human readable name of the list.\n- ``description``: (Optional) A long detailed information about what the list contains and how it is used.\n- ``tags``: (Optional) A list of tags that describe the list.\n- ``expiry``: (Optional) Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n\n### Result\nIt should always return a 202 Accepted response with an empty body.\n\n### Errors\n\n- If the list does not exist, it will return a `404` (Not found) error.\n- If the list is a default list, it will return a `403` (Forbidden) error.\n- If the allow list is not a valid UUID, it will return a `422` (Unprocessable Entity) error.\n- If the expiry is not a valid timestamp, it will return a `422` (Unprocessable Entity) error.\n- If the expiry is in the past, it will return a `400` (Bad Request) error.\n- If the name is not a string, it will return a `422` (Unprocessable Entity) error.\n- If the description is not a string, it will return a `422` (Unprocessable Entity) error.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'update_private_allowlist_of_the_user_v1_allowlist_private__allowlist_id__put',
  request: {
    params: z.object({
      allowlist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'allowlist_id',
            required: true,
            schema: { format: 'uuid', title: 'Allowlist Id', type: 'string' },
          },
          title: 'Allowlist Id',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BodyUpdatePrivateAllowlistOfTheUserV1AllowlistPrivateAllowlistIdPutSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const deleteV1AllowlistPrivateAllowlistIdRoute = createRoute({
  method: 'delete',
  path: '/v1/allowlist/private/{allowlist_id}',
  tags: ['Allowlist data query and management'],
  summary: 'Delete all the bindings between a user and a private allowlist.',
  description:
    '### What\nDelete all the bindings between a user and a private allowlist. This will remove the content of the allowlist, the allowlist from the user and also all the origins that are using the allowlist.\n\nThis is an asynchronous operation. It can take several seconds until the operation completes, but the request willimmediately return a 202 Accepted response.\n\n### Parameters\nIn the query string the ID of the private allow list to delete.\n\n### Result\nIt should always return a 202 Accepted response with an empty body.\n\n### Errors\n\n- If the list does not exist, it will return a 404 error.\n- If the allow list is not a valid UUID, it will return a 422 error.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'delete_the_allowlist_v1_allowlist_private__allowlist_id__delete',
  request: {
    params: z.object({
      allowlist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'allowlist_id',
            required: true,
            schema: { format: 'uuid', title: 'Allowlist Id', type: 'string' },
          },
          title: 'Allowlist Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AllowlistPrivateAllowlistIdContentRoute = createRoute({
  method: 'get',
  path: '/v1/allowlist/private/{allowlist_id}/content',
  tags: ['Allowlist data query and management'],
  summary: 'Get the content of a private allowlist of the user.',
  description:
    '### What\nReturns the content of the private allowlist of the user. The content can be CIDRs, ASNs, countries, continents or    datacenter IDs.\n\n### Parameters\nPass the private allowlist ID as query parameter.\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI to the content of the list.\n- ``cidrs``: (Optional) list of CIDRs in the list.\n- ``asns``: (Optional) list of ASNs in the list.\n- ``countries``: (Optional) list of countries in the list.\n- ``continents``: (Optional) list of continents in the list.\n- ``datacenters``: (Optional) list of datacenters in the list.\n\n### Errors\n\n- If the allow list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.\n- If the private allowlist ID does not exist, it will return a ``404`` (Not found) error.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'get_allowlist_content_v1_allowlist_private__allowlist_id__content_get',
  request: {
    params: z.object({
      allowlist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'allowlist_id',
            required: true,
            schema: { format: 'uuid', title: 'Allowlist Id', type: 'string' },
          },
          title: 'Allowlist Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PrivateAclListCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const putV1AllowlistPrivateAllowlistIdContentRoute = createRoute({
  method: 'put',
  path: '/v1/allowlist/private/{allowlist_id}/content',
  tags: ['Allowlist data query and management'],
  summary: 'Add or remove content of a private allowlist of the user.',
  description:
    "### What\nAdd or remove content of a private allowlist of the user. The content can be CIDRs, ASNs, countries, continents or datacenter IDs.\n\nThe number of elements allowed in all the lists are limited depending on the plan of the user:\n- Free: 100 elements\n- Basic: 1000 elements\n- Premium: 10000 elements\n\n### Parameters\nPass the private allowlist ID as query parameter.\n\nIn the body the following parameters:\n- ``append``: (Optional) Add CIDRs, ASNs, countries, continents or datacenter IDs to add to the list. It's not possible to mix different resource types in the same list.\n- ``remove``: (Optional) Extract CIDRs, ASNs, countries, continents or datacenter IDs to add to the list. It's not possible to mix different resource types in the same list.\n\n\n### Result\nIf successful, it will return a ``202`` (Accepted) response with an empty body. The operation is asynchronous,and can take several seconds to complete.\n\n### Errors\n\n- If the allow list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.\n- If the private allowlist ID does not exist, it will return a ``404`` (Not found) error.\n- If the ``append`` or ``remove`` parameters are not processable, it will return a ``422`` (Unprocessable Entity) error.\n- If the number of elements in the lists is over the limit, it will return a ``413`` (Payload Too Large) error.\n\nIt will also return the API Global errors described in the API description.",
  operationId:
    'update_private_content_of_the_allowlist_of_the_user_v1_allowlist_private__allowlist_id__content_put',
  request: {
    params: z.object({
      allowlist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'allowlist_id',
            required: true,
            schema: { format: 'uuid', title: 'Allowlist Id', type: 'string' },
          },
          title: 'Allowlist Id',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema:
            BodyUpdatePrivateContentOfTheAllowlistOfTheUserV1AllowlistPrivateAllowlistIdContentPutSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const deleteV1AllowlistPrivateAllowlistIdContentRoute = createRoute({
  method: 'delete',
  path: '/v1/allowlist/private/{allowlist_id}/content',
  tags: ['Allowlist data query and management'],
  summary: 'Delete all the content of a private allowlist of the user.',
  description:
    '### What\nDelete all the content of a private allowlist of the user. This will remove all the elements, and there is no way to recover them.\n\n### Parameters\nPass the private allowlist ID as query parameter.\n\n### Result\nIf successful, it will return a ``202`` (Accepted) response with an empty body. The operation is asynchronous,and can take several seconds to complete.\n\n### Errors\n\n- If the allow list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.\n- If the private allowlist ID does not exist, it will return a ``404`` (Not found) error.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'delete_the_allowlist_content_v1_allowlist_private__allowlist_id__content_delete',
  request: {
    params: z.object({
      allowlist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'allowlist_id',
            required: true,
            schema: { format: 'uuid', title: 'Allowlist Id', type: 'string' },
          },
          title: 'Allowlist Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const putV1AllowlistPrivateAllowlistIdOriginRoute = createRoute({
  method: 'put',
  path: '/v1/allowlist/private/{allowlist_id}/origin',
  tags: ['Allowlist data query and management'],
  summary: 'Toogle the status of the origin in an allow list.',
  description:
    '### What\nChange the status of the origin of an allow list to ``ACTIVE``, ``INACTIVE`` or ``DELETED``.\n\nAn ``ACTIVE`` origin will apply the allow list to the protocol and domain of the origin. An origin can be created and activated simply toogling the ``ACTIVE`` status. As an optional parameter it can be provided an ``ttl`` or Time To Live parameter of the origin in the list in seconds. After the TTL expires, the origin will be removed from the list.  If the TTL is not provided, the origin will never expire.\n\nAn ``INACTIVE`` origin will not apply the allow list to the protocol and domain of the origin.\n\nA ``DELETED`` origin will be removed from the list. It will not be used by the service anymore. The user can activate it again with the ``ACTIVE`` status.\n\nThis is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.\n\n*This operation is not available in the Freemium plan.*\n\n### Parameters\nIn the query string the ID of the allow list to change the status.\nIn the body the JSON object with the following fields:\n- ``origin``: The protocol and domain of the origin. It can be ``http://example.com`` or ``https://example.com``.\n- ``status``: The status of the list. It can be ``ACTIVE``, ``INACTIVE`` or ``DELETED``.\n\n### Result\nIt should always return a 202 Accepted response with an empty body.\n\n### Errors\n\nIf the list does not exist, it will return a 404 error.\nIf the status is not ``ACTIVE`` or ``INACTIVE``, it will return a 422 error.\nIf the TTL is negative in the past, it will return a 422 error.\nIf the allow list is not a valid UUID, it will return a 422 error.\nIf the origin is not a valid URL, it will return a 400 error.\nIf the allowlist is not active, it will returna 409 error.\nIf the origin is not found in the set owned by the user, it will return a 404 error.\n\nIt will return the API Global errors described in the API description.',
  operationId:
    'change_status_of_the_origin_allowlist_v1_allowlist_private__allowlist_id__origin_put',
  request: {
    params: z.object({
      allowlist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'allowlist_id',
            required: true,
            schema: { format: 'uuid', title: 'Allowlist Id', type: 'string' },
          },
          title: 'Allowlist Id',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BodyChangeStatusOfTheOriginAllowlistV1AllowlistPrivateAllowlistIdOriginPutSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AllowlistPublicAllRoute = createRoute({
  method: 'get',
  path: '/v1/allowlist/public/all',
  tags: ['Allowlist data query and management'],
  summary: 'Get the set of public allowlists.',
  description:
    '### What\nObtain the set of public allow lists available in the service and also which ones are already selected by the user and wich ones are not.\n\n### Parameters\nNo parameters\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to the status of all the lists.\n- ``lists``: a list of JSON objects with the available lists:\n    - ``self``: the URI to individual information of the list.\n    - ``name``: A human readable name of the list.\n    - ``description``: A long detailed information about what the list contains and how it is used.\n    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.\n    - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.\n    - ``created_at``: Unix timestamp in seconds when the list was created.\n    - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\nIf the list is already selected by the user, the JSON object will also contain the following fields:\n- ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n- ``origins``: list of websites that are using the list as an allowlist.\n    - ``self``: the URI to all the list of origins.\n    - ``lists``: list of lists that the origin is using.\n        - ``self``: the URI to the individual information of the list.\n        - ``origin``: the protocol and domain of the website that is using the list.\n        - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``        it means that the list is not available anymore if not renewed.\n        - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n        - ``created_at``: Unix timestamp in seconds when the list was created.\n        - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\n### Errors\n\nIt will return the API Global errors described in the API description.',
  operationId: 'get_all_public_allowlists_v1_allowlist_public_all_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PublicAclGroupListCollectionOutputSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AllowlistPublicAllResourceTypeRoute = createRoute({
  method: 'get',
  path: '/v1/allowlist/public/all/{resource_type}',
  tags: ['Allowlist data query and management'],
  summary: 'Get the set of public allowlists by resource type.',
  description:
    '### What\nObtain the set of public allow lists available in the service and also which ones are already selected by the user and wich ones are not filtering by the resource type.\n\n### Parameters\nThe ``resource type`` to filter. The values can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to the status of all the lists.\n- ``lists``: a list of JSON objects with the available lists:\n    - ``self``: the URI to individual information of the list.\n    - ``name``: A human readable name of the list.\n    - ``description``: A long detailed information about what the list contains and how it is used.\n    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.\n    - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.\n    - ``created_at``: Unix timestamp in seconds when the list was created.\n    - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\nIf the list is already selected by the user, the JSON object will also contain the following fields:\n- ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n- ``origins``: list of websites that are using the list as an allowlist.\n    - ``self``: the URI to all the list of origins.\n    - ``lists``: list of lists that the origin is using.\n        - ``self``: the URI to the individual information of the list.\n        - ``origin``: the protocol and domain of the website that is using the list.\n        - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``        it means that the list is not available anymore if not renewed.\n        - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n        - ``created_at``: Unix timestamp in seconds when the list was created.\n        - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\n### Errors\n\nIt will return the API Global errors described in the API description.',
  operationId:
    'get_all_public_allowlists_by_resource_type_v1_allowlist_public_all__resource_type__get',
  request: {
    params: z.object({
      resource_type: z
        .enum(['cidr', 'country', 'continent', 'as', 'datacenter', 'useragent'])
        .openapi({
          param: {
            in: 'path',
            name: 'resource_type',
            required: true,
            schema: {
              enum: ['cidr', 'country', 'continent', 'as', 'datacenter', 'useragent'],
              title: 'Resource Type',
              type: 'string',
            },
          },
          title: 'Resource Type',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PublicAclGroupListCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AllowlistPublicIpAddressRoute = createRoute({
  method: 'get',
  path: '/v1/allowlist/public/ip/{address}',
  tags: ['Allowlist data query and management'],
  summary: 'Get the different public allowlists where the IP address was found.',
  description:
    '### What\nObtain the list of all the different public allowlists where the IP address entered by the user is. The public allowlists are the ones activated by the user, but managed by Threatjammer administrators.\n\n### Parameters\nThe endpoint accepts the `address` parameter as query string.\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to individual status.\n- ``cidrs``: the URI of the lists of CIDRs where the IP was found.\n- ``country``: the URIs where the lists of countries where the IP address was found\n- ``continent``: the URI where the continent where the IP address was found.\n- ``asn``: the URIs where the list of continents of the ASN where the IP address was found.\n- ``datacenter``: the URIs of the lists of datacenters where the IP address was found. If not found, the result is an empty string.\n\n### Errors\n- a `422 Unprocessable Entity` error if the IP address was malformed.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'query_resource_allowlists_v1_allowlist_public_ip__address__get',
  request: {
    params: z.object({
      address: z.union([z.ipv4(), z.ipv6()]).openapi({
        param: {
          in: 'path',
          name: 'address',
          required: true,
          schema: {
            anyOf: [
              { format: 'ipv4', type: 'string' },
              { format: 'ipv6', type: 'string' },
            ],
            title: 'Address',
          },
        },
        title: 'Address',
      }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AclListCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AllowlistPublicOwnedRoute = createRoute({
  method: 'get',
  path: '/v1/allowlist/public/owned',
  tags: ['Allowlist data query and management'],
  summary: 'Get the set of owned allowlists.',
  description:
    '### What\nObtain the set of public allow lists available in the service selected by the user.\n\n### Parameters\nNo parameters\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to the status of all the lists.\n- ``lists``: a list of JSON objects with the available lists:\n    - ``self``: the URI to individual information of the list.\n    - ``name``: A human readable name of the list.\n    - ``description``: A long detailed information about what the list contains and how it is used.\n    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.\n    - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.\n    - ``created_at``: Unix timestamp in seconds when the list was created.\n    - ``updated_at``: Unix timestamp in seconds when the list was updated.\n    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n    - ``origins``: list of websites that are using the list as an allowlist.\n        - ``self``: the URI to all the list of origins.\n        - ``lists``: list of lists that the origin is using.\n            - ``self``: the URI to the individual information of the list.\n            - ``origin``: the protocol and domain of the website that is using the list.\n            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``            it means that the list is not available anymore if not renewed.\n            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n            - ``created_at``: Unix timestamp in seconds when the list was created.\n            - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\n### Errors\n\nIt will return the API Global errors described in the API description.',
  operationId: 'get_public_allowlists_owned_by_the_user_v1_allowlist_public_owned_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PublicAclGroupListCollectionOutputSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AllowlistPublicOwnedResourceTypeRoute = createRoute({
  method: 'get',
  path: '/v1/allowlist/public/owned/{resource_type}',
  tags: ['Allowlist data query and management'],
  summary: 'Get the set of public allowlists of a user by resource type.',
  description:
    '### What\nObtain the set of public allow lists selected by the user and wich ones are not filtering by the resource type.\n\n### Parameters\nThe ``resource type`` to filter. The values can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to the status of all the lists.\n- ``lists``: a list of JSON objects with the available lists:\n    - ``self``: the URI to individual information of the list.\n    - ``name``: A human readable name of the list.\n    - ``description``: A long detailed information about what the list contains and how it is used.\n    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.\n    - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.\n    - ``created_at``: Unix timestamp in seconds when the list was created.\n    - ``updated_at``: Unix timestamp in seconds when the list was updated.\n    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n    - ``origins``: list of websites that are using the list as an allowlist.\n        - ``self``: the URI to all the list of origins.\n        - ``lists``: list of lists that the origin is using.\n            - ``self``: the URI to the individual information of the list.\n            - ``origin``: the protocol and domain of the website that is using the list.\n            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``            it means that the list is not available anymore if not renewed.\n            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n            - ``created_at``: Unix timestamp in seconds when the list was created.\n            - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\n### Errors\n\nIt will return the API Global errors described in the API description.',
  operationId:
    'get_all_owned_allowlists_by_resource_type_v1_allowlist_public_owned__resource_type__get',
  request: {
    params: z.object({
      resource_type: z
        .enum(['cidr', 'country', 'continent', 'as', 'datacenter', 'useragent'])
        .openapi({
          param: {
            in: 'path',
            name: 'resource_type',
            required: true,
            schema: {
              enum: ['cidr', 'country', 'continent', 'as', 'datacenter', 'useragent'],
              title: 'Resource Type',
              type: 'string',
            },
          },
          title: 'Resource Type',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PublicAclGroupListCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AllowlistPublicAllowlistIdRoute = createRoute({
  method: 'get',
  path: '/v1/allowlist/public/{allowlist_id}',
  tags: ['Allowlist data query and management'],
  summary: 'Get the details of the allowlist.',
  description:
    '### What\nObtain the details of an allow list available in the service.\n\n### Parameters\nNo parameters\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to individual information of the list.\n- ``name``: A human readable name of the list.\n- ``description``: A long detailed information about what the list contains and how it is used.\n- ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n- ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.\n- ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``it means that the list is not available anymore if not renewed.\n- ``created_at``: Unix timestamp in seconds when the list was created.\n- ``updated_at``: Unix timestamp in seconds when the list was updated.\n\nIf the list is already selected by the user, the JSON object will also contain the following fields:\n    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n    - ``origins``: list of websites that are using the list as an allowlist.\n        - ``self``: the URI to all the list of origins.\n        - ``lists``: list of lists that the origin is using.\n            - ``self``: the URI to the individual information of the list.\n            - ``origin``: the protocol and domain of the website that is using the list.\n            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``            it means that the list is not available anymore if not renewed.\n            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n            - ``created_at``: Unix timestamp in seconds when the list was created.\n            - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\n### Errors\n\nIf the list does not exist, it will return a 404 error.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'get_single_allowlist_v1_allowlist_public__allowlist_id__get',
  request: {
    params: z.object({
      allowlist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'allowlist_id',
            required: true,
            schema: { format: 'uuid', title: 'Allowlist Id', type: 'string' },
          },
          title: 'Allowlist Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PublicAclGroupListOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const putV1AllowlistPublicAllowlistIdRoute = createRoute({
  method: 'put',
  path: '/v1/allowlist/public/{allowlist_id}',
  tags: ['Allowlist data query and management'],
  summary: 'Toogle the status of an allow list.',
  description:
    '### What\nChange the status of an allow list to ``ACTIVE`` or ``INACTIVE``. An ``INACTIVE`` list will not be used by the service. An ``ACTIVE`` list will be used by the service. As an optional parameter it can be provided an ``expiry`` date in seconds since epoch. If not provided, the list will never expire.\n\n This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.\n\n### Parameters\nIn the query string the ID of the allow list to change the status.\nIn the body the JSON object with the following fields:\n- ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE``.\n- ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n\n### Result\nIt should always return a 202 Accepted response with an empty body.\n\n### Errors\n\nIf the list does not exist, it will return a 404 error.\nIf the status is not ``ACTIVE`` or ``INACTIVE``, it will return a 422 error.\nIf the expiry is not a valid timestamp, it will return a 422 error.\nIf the allow list is not a valid UUID, it will return a 422 error.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'change_status_of_the_allowlist_v1_allowlist_public__allowlist_id__put',
  request: {
    params: z.object({
      allowlist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'allowlist_id',
            required: true,
            schema: { format: 'uuid', title: 'Allowlist Id', type: 'string' },
          },
          title: 'Allowlist Id',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BodyChangeStatusOfTheAllowlistV1AllowlistPublicAllowlistIdPutSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const deleteV1AllowlistPublicAllowlistIdRoute = createRoute({
  method: 'delete',
  path: '/v1/allowlist/public/{allowlist_id}',
  tags: ['Allowlist data query and management'],
  summary: 'Delete all the bindings between a user and an allowlist.',
  description:
    '### What\nDelete all the bindings between a user and an allowlist. This will remove the allowlist from the user and also all the origins that are using the allowlist.\n\n This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.\n\n### Parameters\nIn the query string the ID of the allow list to change the status.\n\n### Result\nIt should always return a 202 Accepted response with an empty body.\n\n### Errors\n\nIf the list does not exist, it will return a 404 error.\nIf the allow list is not a valid UUID, it will return a 422 error.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'delete_the_allowlist_v1_allowlist_public__allowlist_id__delete',
  request: {
    params: z.object({
      allowlist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'allowlist_id',
            required: true,
            schema: { format: 'uuid', title: 'Allowlist Id', type: 'string' },
          },
          title: 'Allowlist Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const putV1AllowlistPublicAllowlistIdOriginRoute = createRoute({
  method: 'put',
  path: '/v1/allowlist/public/{allowlist_id}/origin',
  tags: ['Allowlist data query and management'],
  summary: 'Toogle the status of the origin in an allow list.',
  description:
    '### What\nChange the status of the origin of an allow list to ``ACTIVE``, ``INACTIVE`` or ``DELETED``.\n\nAn ``ACTIVE`` origin will apply the allow list to the protocol and domain of the origin. An origin can be created and activated simply toogling the ``ACTIVE`` status. As an optional parameter it can be provided an ``ttl`` or Time To Live parameter of the origin in the list in seconds. After the TTL expires, the origin will be removed from the list.  If the TTL is not provided, the origin will never expire.\n\nAn ``INACTIVE`` origin will not apply the allow list to the protocol and domain of the origin.\n\nA ``DELETED`` origin will be removed from the list. It will not be used by the service anymore. The user can activate it again with the ``ACTIVE`` status.\n\nThis is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.\n\n*This operation is not available in the Freemium plan.*\n\n### Parameters\nIn the query string the ID of the allow list to change the status.\nIn the body the JSON object with the following fields:\n- ``origin``: The protocol and domain of the origin. It can be ``http://example.com`` or ``https://example.com``.\n- ``status``: The status of the list. It can be ``ACTIVE``, ``INACTIVE`` or ``DELETED``.\n\n### Result\nIt should always return a 202 Accepted response with an empty body.\n\n### Errors\n\nIf the list does not exist, it will return a 404 error.\nIf the status is not ``ACTIVE`` or ``INACTIVE``, it will return a 422 error.\nIf the TTL is negative in the past, it will return a 422 error.\nIf the allow list is not a valid UUID, it will return a 422 error.\nIf the origin is not a valid URL, it will return a 400 error.\nIf the allowlist is not active, it will returna 409 error.\nIf the origin is not found in the set owned by the user, it will return a 404 error.\n\nIt will return the API Global errors described in the API description.',
  operationId:
    'change_status_of_the_origin_allowlist_v1_allowlist_public__allowlist_id__origin_put',
  request: {
    params: z.object({
      allowlist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'allowlist_id',
            required: true,
            schema: { format: 'uuid', title: 'Allowlist Id', type: 'string' },
          },
          title: 'Allowlist Id',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BodyChangeStatusOfTheOriginAllowlistV1AllowlistPublicAllowlistIdOriginPutSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AsnIpIpAddressRoute = createRoute({
  method: 'get',
  path: '/v1/asn/ip/{ip_address}',
  tags: ['Autonomous Systems information'],
  summary: 'Get the IPv4 or IPv6 prefix of the IP address given.',
  description:
    "### What\nObtain the IPv4 or IPv6 prefix and the Autonomous System information of the IP address passed as a parameter.\n\n### Parameters\nThe endpoint accepts only the following parameter in the path:\n- ``ip_address``: (Mandatory) The IPv4 or IPv6 address to be queried.\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI to individual IPv4 prefix.\n- ``asn``: the URI to query the full details of the ASN.\n- ``object_type``: the type of the prefix. The allowed values are: IPv4 or IPv6.\n- ``maintainer``: the information about the maintainer of this prefix in the registry.\n- ``description``: the description of the prefix as registered in the registry.\n- ``registry_date``: the date of registration of the prefix in the registry. The format is YYYY-MM-DD.\n- ``registry_status``: the URI of the status of the prefix as stored in the registry.\n- ``score``: The risk score of the prefix. It ranges from 0 to 99.\n- ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.\n\n### Errors\nThe endpoint will return the following errors:\n- a `404 Not Found` error if the prefix information was not found.\n- a `422 Unprocessable Entity` error if the IP address is malformed.\n\nIt will also return the API Global errors described in the API description.",
  operationId: 'query_IP_address_network_information_v1_asn_ip__ip_address__get',
  request: {
    params: z.object({
      ip_address: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'ip_address',
            required: true,
            schema: { format: 'ipvanyaddress', title: 'Ip Address', type: 'string' },
          },
          title: 'Ip Address',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AutonomousSystemPrefixOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postV1AsnPrefixRoute = createRoute({
  method: 'post',
  path: '/v1/asn/prefix',
  tags: ['Autonomous Systems information'],
  summary: 'Get the IPv4 or IPv6 prefix of the CIDR given.',
  description:
    "### What\nObtain the IPv4 or IPv6 prefix and the Autonomous System information of the CIDR passed in the body as a POST method. This endpoint works around the problem of passing '/' addresses in the URI.\n\n### Parameters\nThe endpoint accepts only the following parameter in the body as a JSON object:\n- ``prefix``: (Mandatory) The CIDR v4 or v6 to be queried.\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI to individual IPv4 prefix.\n- ``asn``: the URI to query the full details of the ASN.\n- ``object_type``: the type of the prefix. The allowed values are: IPv4 or IPv6.\n- ``maintainer``: the information about the maintainer of this prefix in the registry.\n- ``description``: the description of the prefix as registered in the registry.\n- ``registry_date``: the date of registration of the prefix in the registry. The format is YYYY-MM-DD.\n- ``registry_status``: the URI of the status of the prefix as stored in the registry.\n- ``score``: The risk score of the prefix. It ranges from 0 to 99.\n- ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.\n\n### Errors\nThe endpoint will return the following errors:\n- a `404 Not Found` error if the prefix information was not found.\n- a `422 Unprocessable Entity` error if the CIDR is malformed.\n\nIt will also return the API Global errors described in the API description.",
  operationId: 'query_asn_prefix_information_v1_asn_prefix_post',
  request: {
    body: {
      content: {
        'application/json': { schema: BodyQueryAsnPrefixInformationV1AsnPrefixPostSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AutonomousSystemPrefixOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AsnRegistryAllRoute = createRoute({
  method: 'get',
  path: '/v1/asn/registry/all',
  tags: ['Autonomous Systems information'],
  summary: 'Get the list of the Regional Internet Registries (RIRs) entities worldwide.',
  description:
    '### What\nObtain the list of Regional Internet Registries (RIRs) entities worldwide.\n\n### Parameters\nNo parameters are required.\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to individual RIR.\n- ``name``: the RIR name.\n- ``code``: the internal code of the RIR in the system. Possible values are: iana, arin, ripencc, afrinic, apnic, lacnic.\n\n### Errors\nIt will return the API Global errors described in the API description.',
  operationId: 'query_registry_names_v1_asn_registry_all_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(AutonomousSystemRegistryOutputSchema)
            .openapi({ title: 'Response Query Registry Names V1 Asn Registry All Get' }),
        },
      },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AsnRegistryCodeRoute = createRoute({
  method: 'get',
  path: '/v1/asn/registry/{code}',
  tags: ['Autonomous Systems information'],
  summary: 'Get the information of a Regional Internet Registries (RIRs) given.',
  description:
    '### What\nObtain the information about the Regional Internet Registries (RIRs) given as a parameter.\n\n### Parameters\nThe endpoint accepts only the following parameter in the path:\n- ``code``: (Mandatory) The code that identifies uniquely the RIR. Possible values are: iana, arin, ripencc, afrinic, apnic, lacnic.\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI to individual RIR.\n- ``name``: the RIR name.\n- ``code``: the internal code of the RIR in the system.\n\n### Errors\n- a `422 Unprocessable Entity` error if the code is not one of the available.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'query_registry_by_the_name_v1_asn_registry__code__get',
  request: {
    params: z.object({
      code: z
        .enum(['iana', 'arin', 'ripencc', 'afrinic', 'apnic', 'lacnic'])
        .openapi({
          param: {
            in: 'path',
            name: 'code',
            required: true,
            schema: {
              enum: ['iana', 'arin', 'ripencc', 'afrinic', 'apnic', 'lacnic'],
              title: 'Code',
              type: 'string',
            },
          },
          title: 'Code',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AutonomousSystemRegistryOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AsnStatusAllRoute = createRoute({
  method: 'get',
  path: '/v1/asn/status/all',
  tags: ['Autonomous Systems information'],
  summary: 'Get the list of status of an object in a registry.',
  description:
    '### What\nObtain the list of status of an object can be in a registry.\n\n### Parameters\nNo parameters are required.\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to individual status.\n- ``name``: the code name.\n- ``code``: the internal code of the status in the system. Possible values are: assigned, reserved, allocated, available.\n\n### Errors\nIt will return the API Global errors described in the API description.',
  operationId: 'query_status_names_v1_asn_status_all_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(AutonomousSystemStatusOutputSchema)
            .openapi({ title: 'Response Query Status Names V1 Asn Status All Get' }),
        },
      },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AsnStatusCodeRoute = createRoute({
  method: 'get',
  path: '/v1/asn/status/{code}',
  tags: ['Autonomous Systems information'],
  summary: 'Get the information of a status given.',
  description:
    '### What\nObtain the information about the status of an object in the registry as a parameter.\n\n### Parameters\nThe endpoint accepts only the following parameter in the path:\n- ``code``: (Mandatory) The code that identifies uniquely the status in the registry. Possible values are: assigned, reserved, allocated, available.\n\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI to individual status.\n- ``name``: the human readable name of the status.\n- ``code``: the internal code of the status in the system.\n\n### Errors\n- a `422 Unprocessable Entity` error if the code is not one of the available.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'query_status_by_the_name_v1_asn_status__code__get',
  request: {
    params: z.object({
      code: z
        .enum(['assigned', 'reserved', 'available', 'allocated'])
        .openapi({
          param: {
            in: 'path',
            name: 'code',
            required: true,
            schema: {
              enum: ['assigned', 'reserved', 'available', 'allocated'],
              title: 'Code',
              type: 'string',
            },
          },
          title: 'Code',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AutonomousSystemStatusOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AsnNumberRoute = createRoute({
  method: 'get',
  path: '/v1/asn/{number}',
  tags: ['Autonomous Systems information'],
  summary: 'Get the Autonomous System details of the AS number given.',
  description:
    "### What\nObtain the full details of the Autonomous System Number (ASN) passed as a parameter.\n\n### Parameters\nThe endpoint accepts only the following parameter in the path:\n- ``number``: (Mandatory) The ASN number to be queried.\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI of the API call\n- ``name``: the name of the Autonomous System as registered in the registries databases.\n- ``description``: the description of the Autonomous System as registered in the registries databases.\n- ``country_code``: the ISO 3166-1 alpha-2 country code of the Autonomous System.\n- ``registry_date``: the date of registration of the Autonomous System in the registry. The format is YYYY-MM-DD.\n- ``registry``: the URI of the registry where the Autonomous System is registered.\n- ``status``: the status of the Autonomous System as stored in the registry.\n- ``prefixes``: the URI to the list of prefixes that belong to the Autonomous System.\n- ``score``: The risk score of the Autonomous System. It ranges from 0 to 99.\n- ``risk``: The risk of the Autonomous System. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.\n\n\n### Errors\nThe endpoint will return the following errors:\n- a `404 Not Found` error if the AS was not found.\n- a `422 Unprocessable Entity` error if the AS number is malformed.\n\nIt will also return the API Global errors described in the API description.",
  operationId: 'query_asn_v1_asn__number__get',
  request: {
    params: z.object({
      number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'number',
            required: true,
            schema: { title: 'Number', type: 'integer' },
          },
          title: 'Number',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AutonomousSystemOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AsnNumberPrefixesRoute = createRoute({
  method: 'get',
  path: '/v1/asn/{number}/prefixes',
  tags: ['Autonomous Systems information'],
  summary: 'Get the list of IPv4 and IPv6 prefixes of the AS number given.',
  description:
    "### What\nObtain the full list of IPv4 and IPv6 prefixes of the Autonomous System Number (ASN) passed as a parameter.\n\n### Parameters\nThe endpoint accepts only the following parameter in the path:\n- ``number``: (Mandatory) The ASN number to be queried.\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI of the API call\n- ``asn``: the URI to query the full details of the ASN.\n- ``prefixes_v4``: the list of IPv4 prefixes that belong to the ASN. Each element of the list is a JSON object with the following structure:\n    - ``self``: the URI to individual IPv4 prefix.\n    - ``asn``: the URI to query the full details of the ASN.\n    - ``object_type``: the type of the prefix. The allowed values are: IPv4.\n    - ``maintainer``: the information about the maintainer of this prefix in the registry.\n    - ``description``: the description of the prefix as registered in the registry.\n    - ``registry_date``: the date of registration of the prefix in the registry. The format is YYYY-MM-DD.\n    - ``registry_status``: the URI of the status of the prefix as stored in the registry.\n    - ``score``: The risk score of the prefix. It ranges from 0 to 99.\n    - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.\n- ``prefixes_v6``: the list of IPv6 prefixes that belong to the ASN. Each element of the list is a JSON object with the following structure:\n    - ``self``: the URI to individual IPv6 prefix.\n    - ``asn``: the URI to query the full details of the ASN.\n    - ``object_type``: the type of the prefix. The allowed values are: IPv6.\n    - ``maintainer``: the information about the maintainer of this prefix in the registry.\n    - ``description``: the description of the prefix as registered in the registry.\n    - ``registry_date``: the date of registration of the prefix in the registry. The format is YYYY-MM-DD.\n    - ``registry_status``: the URI of the status of the prefix as stored in the registry.\n    - ``score``: The risk score of the prefix. It ranges from 0 to 99.\n    - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.\n\n### Errors\nThe endpoint will return the following errors:\n- a `404 Not Found` error if the AS was not found.\n- a `422 Unprocessable Entity` error if the AS number is malformed.\n\nIt will also return the API Global errors described in the API description.",
  operationId: 'query_asn_prefixes_list_v1_asn__number__prefixes_get',
  request: {
    params: z.object({
      number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'number',
            required: true,
            schema: { title: 'Number', type: 'integer' },
          },
          title: 'Number',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AutonomousSystemPrefixesOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postV1AssessIpRoute = createRoute({
  method: 'post',
  path: '/v1/assess/ip',
  tags: ['Data assessment'],
  summary: 'Get the risk score of all IP address passed in the body and other data signals.',
  description:
    "### What\nObtain a numerical score and a risk assessment of all the IP addresses passed as argument.\n\n### Parameters\nA list of public IPv4 or IPv6 addresses is required in the body of the request.\n\n### Result\nThe result contains a list of the result for each IP address, with two main sets of data:\n- The score is a number **between 0 and 99** describing the probability of the IP address being a malicious one, being **0** means that the IP address is not malicious and is not a threat. Being **99** means that the service behind the IP address is probably malicious an certainly a threat.\n\n- The list of information gathered from the IP address to obtain the score.\n\nThe result is a JSON object with the following structure:\n- ``self``: the URI of the API call\n- ``score``: The score of the IP address. It ranges from 0 to 99.\n- ``risk``: The risk of the IP address. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.\n- ``reason``: It's a human readable representation of the reason of the risk.\n- ``datasets``: The IP address was found in the these lists of datasets used to obtain the risk score. Datasets are described as a list of URIs.\n- ``sources``: The IP address was found in the these source lists at an specific time with a specific risk score. Sources are described as a list of URIs.\n- ``log``: The activity of the IP address in the different datasets used to obtain the risk score. The log is a URI reference.\n- ``asn``: The information about the Autonomous System (AS) of the IP address. The AS is described as an URI.\n- ``asn_prefix``: The information about the Autonomous System (AS) network prefix of the IP address. The prefix is described as an URI.\n- ``datacenter``: If the IP address is part of a datacenter pool, the information about the datacenter is described as an URI.\n- ``datacenter_prefix``: The information about the Datacenter network prefix of the IP address. The `asn_prefix` and `datacenter_prefix` can be the same, but it is not mandatory. The prefix is described as an URI.\n- ``denylisted``: If the IP address was denylisted by the user, the information about the denylisted IP address is described as an URI.\n- ``first_appearence``: URI to the first appearance of the IP address in the different datasets used to obtain the risk score.\n- ``last_appearence``: URI to the last appearance of the IP address in the different datasets used to obtain the risk score.\n\n### Errors\nThe endpoint will return the following errors:\n- a `422 Unprocessable Entity` error if the IP address is malformed.\n\nThe private IP addresses will be ignored, if any.\n\nIt will also return the API Global errors described in the API description.",
  operationId: 'assess_ip_set_v1_assess_ip_post',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .array(z.string())
            .min(1)
            .max(500)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            })
            .openapi({ title: 'Addresses' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The server will return a valid answer in the following cases:',
      content: { 'application/json': { schema: IPAssessmentCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postV1AssessIpCsvRoute = createRoute({
  method: 'post',
  path: '/v1/assess/ip/csv',
  tags: ['Data assessment'],
  summary: 'Get the risk score of all IP address uploaded and other data signals.',
  description:
    "### What\nObtain a numerical score and a risk assessment of all the IP addresses uploaded with a text file.\n\n### Parameters\n- A text file with a list of public IPv4 or IPv6 addresses.\n- A header `Content-Type: multipart/form-data` is required.\n- (optional) in the query string the parameeter `strict_parse`: If set to `true`, no malformed IP addresses allowed, returning an error. If set to `false`, malformed IP addresses will be ignored.\n\nExample:\n```\ncurl -X 'POST' \\\n  'https://dublin.api.threatjammer.com/v1/asses/ip/csv[?strict_parse=true|false]' \\\n  -H 'accept: application/json' \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -H 'Content-Type: multipart/form-data' \\\n  -F 'csv_file=@YOUR_TEXT_FILE;type=text/csv'\n```\n\n### Result\nThe result contains a list of the result for each IP address, with two main sets of data:\n- The score is a number **between 0 and 99** describing the probability of the IP address being a malicious one, being **0** means that the IP address is not malicious and is not a threat. Being **99** means that the service behind the IP address is probably malicious an certainly a threat.\n\n- The list of information gathered from the IP address to obtain the score.\n\nThe result is a JSON object with the following structure:\n- ``self``: the URI of the API call\n- ``score``: The score of the IP address. It ranges from 0 to 99.\n- ``risk``: The risk of the IP address. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.\n- ``reason``: It's a human readable representation of the reason of the risk.\n- ``datasets``: The IP address was found in the these lists of datasets used to obtain the risk score. Datasets are described as a list of URIs.\n- ``sources``: The IP address was found in the these source lists at an specific time with a specific risk score. Sources are described as a list of URIs.\n- ``log``: The activity of the IP address in the different datasets used to obtain the risk score. The log is a URI reference.\n- ``asn``: The information about the Autonomous System (AS) of the IP address. The AS is described as an URI.\n- ``asn_prefix``: The information about the Autonomous System (AS) network prefix of the IP address. The prefix is described as an URI.\n- ``datacenter``: If the IP address is part of a datacenter pool, the information about the datacenter is described as an URI.\n- ``datacenter_prefix``: The information about the Datacenter network prefix of the IP address. The `asn_prefix` and `datacenter_prefix` can be the same, but it is not mandatory. The prefix is described as an URI.\n- ``denylisted``: If the IP address was denylisted by the user, the information about the denylisted IP address is described as an URI.\n- ``first_appearence``: URI to the first appearance of the IP address in the different datasets used to obtain the risk score.\n- ``last_appearence``: URI to the last appearance of the IP address in the different datasets used to obtain the risk score.\n\n### Errors\nThe endpoint will return the following errors:\n- a `422 Unprocessable Entity` error if the IP address is malformed.\n\nThe private IP addresses will be ignored, if any.\n\nWhen the `strict_parse` parameter is set to `true`, the endpoint will return the following errors:\n- a `400 Bad Request`.\n\nIt will also return the API Global errors described in the API description.",
  operationId: 'assess_ip_set_csv_v1_assess_ip_csv_post',
  request: {
    query: z.object({
      strict_parse: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'When `true`, if any IP address entry in the file is malformed, the assessment is canceled. If `false`, the malformed IP addresses are ignored. Default is `false`.',
            in: 'query',
            name: 'strict_parse',
            required: false,
            schema: {
              default: false,
              description:
                'When `true`, if any IP address entry in the file is malformed, the assessment is canceled. If `false`, the malformed IP addresses are ignored. Default is `false`.',
              title: 'Strict Parse',
              type: 'boolean',
            },
          },
          description:
            'When `true`, if any IP address entry in the file is malformed, the assessment is canceled. If `false`, the malformed IP addresses are ignored. Default is `false`.',
          title: 'Strict Parse',
        }),
    }),
    body: {
      content: { 'multipart/form-data': { schema: BodyAssessIpSetCsvV1AssessIpCsvPostSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The server will return a valid answer in the following cases:',
      content: { 'application/json': { schema: IPAssessmentCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1AssessIpIpAddressRoute = createRoute({
  method: 'get',
  path: '/v1/assess/ip/{ip_address}',
  tags: ['Data assessment'],
  summary: 'Get a risk score of the IP address and different data signals.',
  description:
    "### What\nObtain a numerical score and a risk assessment of the IP address passed as argument.\n\n### Parameters\nThe only argument accepted in the query string is a public IPv4 or IPv6 addresses.\n\n### Result\nThe result contains two main sets of data:\n- The score is a number **between 0 and 99** describing the probability of the IP address being a malicious one, being **0** means that the IP address is not malicious and is not a threat. Being **99** means that the service behind the IP address is probably malicious an certainly a threat.\n\n- The list of information gathered from the IP address to obtain the score.\n\nThe result is a JSON object with the following structure:\n- ``self``: the URI of the API call\n- ``score``: The score of the IP address. It ranges from 0 to 99.\n- ``risk``: The risk of the IP address. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.\n- ``reason``: It's a human readable representation of the reason of the risk.\n- ``datasets``: The IP address was found in the these lists of datasets used to obtain the risk score. Datasets are described as a list of URIs.\n- ``sources``: The IP address was found in the these source lists at an specific time with a specific risk score. Sources are described as a list of URIs.\n- ``log``: The activity of the IP address in the different datasets used to obtain the risk score. The log is a URI reference.\n- ``asn``: The information about the Autonomous System (AS) of the IP address. The AS is described as an URI.\n- ``asn_prefix``: The information about the Autonomous System (AS) network prefix of the IP address. The prefix is described as an URI.\n- ``datacenter``: If the IP address is part of a datacenter pool, the information about the datacenter is described as an URI.\n- ``datacenter_prefix``: The information about the Datacenter network prefix of the IP address. The `asn_prefix` and `datacenter_prefix` can be the same, but it is not mandatory. The prefix is described as an URI.\n- ``denylisted``: If the IP address was denylisted by the user, the information about the denylisted IP address is described as an URI.\n- ``first_appearence``: URI to the first appearance of the IP address in the different datasets used to obtain the risk score.\n- ``last_appearence``: URI to the last appearance of the IP address in the different datasets used to obtain the risk score.\n\n### Errors\nThe endpoint will return the following errors:\n- a `400 Bad Request` error if the IP address is not public.\n- a `422 Unprocessable Entity` error if the IP address is malformed.\n\nIt will also return the API Global errors described in the API description.",
  operationId: 'assess_ip_v1_assess_ip__ip_address__get',
  request: {
    params: z.object({
      ip_address: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'ip_address',
            required: true,
            schema: { format: 'ipvanyaddress', title: 'Ip Address', type: 'string' },
          },
          title: 'Ip Address',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The server will return a valid answer in the following cases:',
      content: { 'application/json': { schema: IPAssessmentOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1DatacenterIpIpAddressRoute = createRoute({
  method: 'get',
  path: '/v1/datacenter/ip/{ip_address}',
  tags: ['Datacenter information'],
  summary: 'Get the IPv4 or IPv6 prefix of the IP address given.',
  description:
    "### What\nObtain the IPv4 or IPv6 prefix and the Datacenter information of the IP address passed as a parameter.\n\n### Parameters\nThe endpoint accepts only the following parameter in the path:\n- ``ip_address``: (Mandatory) The IPv4 or IPv6 address to be queried.\n\n### Result\n- The result is a JSON object with the following structure:\n    - ``self``: the URI to individual IPv4 prefix.\n    - ``datacenter_id``: the URI to query the full details of the Datacenter.\n    - ``score``: The risk score of the prefix. It ranges from 0 to 99.\n    - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.\n    - ``min_score``: The minimum risk score of the prefix. It ranges from 0 to 99.\n    - ``max_score``: The maximum risk score of the prefix. It ranges from 0 to 99.\n    - ``ip_abuse_total``: The total number of IPs that have been reported as abuse in the range.\n\n\n### Errors\nThe endpoint will return the following errors:\n- a `404 Not Found` error if the prefix information was not found.\n- a `422 Unprocessable Entity` error if the IP address is malformed.\n\nIt will also return the API Global errors described in the API description.",
  operationId: 'query_IP_address_network_information_v1_datacenter_ip__ip_address__get',
  request: {
    params: z.object({
      ip_address: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'ip_address',
            required: true,
            schema: { format: 'ipvanyaddress', title: 'Ip Address', type: 'string' },
          },
          title: 'Ip Address',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatacenterPrefixOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postV1DatacenterPrefixRoute = createRoute({
  method: 'post',
  path: '/v1/datacenter/prefix',
  tags: ['Datacenter information'],
  summary: 'Get the IPv4 or IPv6 prefix of the CIDR given.',
  description:
    "### What\nObtain the IPv4 or IPv6 prefix and the Datacenter information of the CIDR passed in the body as a POST method. This endpoint works around the problem of passing '/' addresses in the URI.\n\n### Parameters\nThe endpoint accepts only the following parameter in the body as a JSON object:\n- ``prefix``: (Mandatory) The CIDR v4 or v6 to be queried.\n\n### Result\n- The result is a JSON object with the following structure:\n    - ``self``: the URI to individual IPv4 prefix.\n    - ``datacenter_id``: the URI to query the full details of the Datacenter.\n    - ``score``: The risk score of the prefix. It ranges from 0 to 99.\n    - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.\n    - ``min_score``: The minimum risk score of the prefix. It ranges from 0 to 99.\n    - ``max_score``: The maximum risk score of the prefix. It ranges from 0 to 99.\n    - ``ip_abuse_total``: The total number of IPs that have been reported as abuse in the range.\n\n\n### Errors\nThe endpoint will return the following errors:\n- a `404 Not Found` error if the prefix information was not found.\n- a `422 Unprocessable Entity` error if the CIDR is malformed.\n\nIt will also return the API Global errors described in the API description.",
  operationId: 'query_datacenter_prefix_information_v1_datacenter_prefix_post',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BodyQueryDatacenterPrefixInformationV1DatacenterPrefixPostSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatacenterPrefixOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1DatacenterDatacenterIdRoute = createRoute({
  method: 'get',
  path: '/v1/datacenter/{datacenter_id}',
  tags: ['Datacenter information'],
  summary: 'Get the Datacenter details of datacente given.',
  description:
    "### What\nObtain the details of the Datacenter ID passed as a parameter.\n\n### Parameters\nThe endpoint accepts only the following parameter in the path:\n- ``datacenter_id``: (Mandatory) The internal Datacenter ID to be queried.\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI of the API call\n- ``name``: the generic name of the Datacenter. The database takes the name from different sources, so it may be different from the real name.\n- ``description``: a full name of the Datacenter. It contains more details about the Datacenter.\n- ``source``: website of the company that owns the Datacenter.\n- ``asn``: the URI to the ASN of the Datacenter.\n- ``status``: the status of the Datacenter. It can be: `enabled` or `disabled`.\n- ``prefixes``: the URI to the list of prefixes that belong to the Datacenter.\n- ``score``: The risk score of the Datacenter. It ranges from 0 to 99.\n- ``risk``: The risk of the Datacenter. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.\n\n\n### Errors\nThe endpoint will return the following errors:\n- a `404 Not Found` error if the Datacenter was not found.\n- a `422 Unprocessable Entity` error if the Datacenter is malformed.\n\nIt will also return the API Global errors described in the API description.",
  operationId: 'query_datacenter_v1_datacenter__datacenter_id__get',
  request: {
    params: z.object({
      datacenter_id: z
        .string()
        .regex(/^[A-Z0-9_]+/)
        .openapi({
          param: {
            in: 'path',
            name: 'datacenter_id',
            required: true,
            schema: { pattern: '^[A-Z0-9_]+', title: 'Datacenter Id', type: 'string' },
          },
          title: 'Datacenter Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatacenterOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1DatacenterDatacenterIdPrefixesRoute = createRoute({
  method: 'get',
  path: '/v1/datacenter/{datacenter_id}/prefixes',
  tags: ['Datacenter information'],
  summary: 'Get the list of IPv4 and IPv6 prefixes of the Datacenter given.',
  description:
    "### What\nObtain the full list of IPv4 and IPv6 prefixes of the Datacenter passed as a parameter.\n\n### Parameters\nThe endpoint accepts only the following parameter in the path:\n- ``datacenter_id``: (Mandatory) The internal Datacenter ID to be queried.\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI of the API call\n- ``datacenter_id``: the URI to query the full details of the Datacenter.\n- ``prefixes_v4``: the list of IPv4 prefixes that belong to the Datacenter. Each element of the list is a JSON object with the following structure:\n\n    - ``self``: the URI to individual IPv4 prefix.\n    - ``datacenter_id``: the URI to query the full details of the Datacenter.\n    - ``score``: The risk score of the prefix. It ranges from 0 to 99.\n    - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.\n    - ``min_score``: The minimum risk score of the prefix. It ranges from 0 to 99.\n    - ``max_score``: The maximum risk score of the prefix. It ranges from 0 to 99.\n    - ``ip_abuse_total``: The total number of IPs that have been reported as abuse in the range.\n\n- ``prefixes_v6``: the list of IPv6 prefixes that belong to the Datacenter. Each element of the list is a JSON object with the following structure:\n\n    - ``self``: the URI to individual IPv4 prefix.\n    - ``datacenter_id``: the URI to query the full details of the Datacenter.\n    - ``score``: The risk score of the prefix. It ranges from 0 to 99.\n    - ``risk``: The risk of the prefix. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.\n    - ``min_score``: The minimum risk score of the prefix. It ranges from 0 to 99.\n    - ``max_score``: The maximum risk score of the prefix. It ranges from 0 to 99.\n    - ``ip_abuse_total``: The total number of IPs that have been reported as abuse in the range.\n\n\n### Errors\nThe endpoint will return the following errors:\n- a `404 Not Found` error if the Datacenter was not found.\n- a `422 Unprocessable Entity` error if the Datacenter number is malformed.\n\nIt will also return the API Global errors described in the API description.",
  operationId: 'query_datacenter_prefixes_list_v1_datacenter__datacenter_id__prefixes_get',
  request: {
    params: z.object({
      datacenter_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'datacenter_id',
            required: true,
            schema: { title: 'Datacenter Id', type: 'string' },
          },
          title: 'Datacenter Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatacenterPrefixesOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1DatasetIpRoute = createRoute({
  method: 'get',
  path: '/v1/dataset/ip',
  tags: ['Platform datasets'],
  summary: 'Get the list of all the datasets available in the platform.',
  description:
    "### What\nObtain the list of all the datasets available in the platform. A dataset is a collection of different data sources that are related to a specific topic. The name of the dataset describes the specific topic.\n\n### Parameters\nNo parameters are required.\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to individual status.\n- ``types``: a list of JSON objects with the following fields:\n    - ``self``: the URI to individual dataset information.\n    - ``type``: what type of dataset is this. The only allowed value is ``ip``.\n    - ``name``: the name of the dataset in human readable form.\n    - ``description``: a human readable long description of the dataset.\n    - ``status``: the status of the dataset. The only allowed value is ``ENABLED``.\n    - ``items``: the number of 'live' items in the dataset when the request is performed.\n\n### Errors\nIt will return the API Global errors described in the API description.",
  operationId: 'query_datataset_information_of_all_the_resource_types_v1_dataset_ip_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatasetTypeCollectionOutputSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1DatasetIpNameRoute = createRoute({
  method: 'get',
  path: '/v1/dataset/ip/{name}',
  tags: ['Platform datasets'],
  summary: 'Get the detailed information of the dataset queried.',
  description:
    "### What\nGet the detailed information of the dataset queried by the name. A dataset is a collection of different data sources that are related to a specific topic. The name of the dataset describes the specific topic.\n\n### Parameters\nThe endpoint accepts only the following parameter in the path:\n- ``name``: (Mandatory) The code name that identifies uniquely the dataset in the platform. It must be composed of uppercase letters, numbers and underscores.\n\n### Result\nThe result is a JSON object with the following fields:\n- ``self``: the URI to individual dataset information.\n- ``type``: what type of dataset is this. The only allowed value is ``ip``.\n- ``name``: the name of the dataset in human readable form.\n- ``description``: a human readable long description of the dataset.\n- ``status``: the status of the dataset. The only allowed value is ``ENABLED``.\n- ``items``: the number of 'live' items in the dataset when the request is performed.\n\n### Errors\n- a `404 Not Found` error if the dataset code name was not found.\n- a `422 Unprocessable Entity` error if dataset code name does not follow the naming convention.\n\nIt will also return the API Global errors described in the API description.",
  operationId: 'query_datataset_information_of_the_resource_type_v1_dataset_ip__name__get',
  request: {
    params: z.object({
      name: z
        .string()
        .regex(/^([A-Z0-9\_]+)$/)
        .openapi({
          param: {
            in: 'path',
            name: 'name',
            required: true,
            schema: { pattern: '^([A-Z0-9\\_]+)$', title: 'Name', type: 'string' },
          },
          title: 'Name',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DatasetTypeOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postV1DenylistPrivateRoute = createRoute({
  method: 'post',
  path: '/v1/denylist/private',
  tags: ['Denylist data query and management'],
  summary: 'Creates a new private denylist binded to the user.',
  description:
    '### What\nCreates a new denylist with the information given and binded to the current user. The parameters are:\n - name\n - description\n - tags\n - expiry\n - Time to Live (TTL)\n - Resource Type (`CIDR`, `AS`, `COUNTRY`, `CONTINENT`, `DATACENTER_ID` and `USER AGENT`)\n\nThis is an asynchronous operation. It can take several seconds until the operation completes, but the request will immediately return a 202 Accepted response. The operation will also return the UUID of the list.\n\n### Parameters\nIn the query string the ID of the private deny list to delete.\n\nIn the body the following parameters:\n- ``name``: A human readable name of the list.\n- ``description``: A long detailed information about what the list contains and how it is used.\n- ``tags``: A list of tags that describe the list.\n- ``ttl``: (Optional) The Time To Live of the list, in seconds. If it does not exist, it will never expire.\n- ``resource_type``: The type of resource that the list contains. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT``,    ``DATACENTER_ID`` or ``USER AGENT``.\n\n### Result\nIt should always return a 202 Accepted response with the UUID of the new list in the body.\n\n### Errors\n\n- If the information is not valid, it will return a `422` (Unprocessable Entity) error.\n- If the ttl is negative, it will return a `400` (Bad Request) error.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'create_private_denylist_of_the_user_v1_denylist_private_post',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BodyCreatePrivateDenylistOfTheUserV1DenylistPrivatePostSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .uuid()
            .openapi({
              title: 'Response Create Private Denylist Of The User V1 Denylist Private Post',
            }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1DenylistPrivateAllRoute = createRoute({
  method: 'get',
  path: '/v1/denylist/private/all',
  tags: ['Denylist data query and management'],
  summary: 'Get the set of private denylists of the user.',
  description:
    '### What\nObtain the set of private deny lists of the user available in the service. These lists are different datasets:\n- Lists that are part of the automatically reported data from the Report IP, focused on honeypots and automaticreporting from external sources. The name is `External sources reported CIDRs`.\n- Lists that are part of the automatically denylisted by the Threat Jammer service. The name is `Default denylist`.\n- Lists that are created by the user.\n\n### Parameters\nNo parameters\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to the status of all the lists.\n- ``lists``: a list of JSON objects with the available lists:\n    - ``self``: the URI to individual information of the list.\n    - ``name``: A human readable name of the list.\n    - ``description``: A long detailed information about what the list contains and how it is used.\n    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.\n    - ``created_at``: Unix timestamp in seconds when the list was created.\n    - ``updated_at``: Unix timestamp in seconds when the list was updated.\n    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n    - ``origins``: list of websites that are using the list as a denylist.\n        - ``self``: the URI to all the list of origins.\n        - ``lists``: list of lists that the origin is using.\n            - ``self``: the URI to the individual information of the list.\n            - ``origin``: the protocol and domain of the website that is using the list.\n            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED`` it means that the list is not available anymore if not renewed.\n            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n            - ``created_at``: Unix timestamp in seconds when the list was created.\n            - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\n### Errors\n\nIt will return the API Global errors described in the API description.',
  operationId: 'get_all_private_denylists_v1_denylist_private_all_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PrivateAclGroupListCollectionOutputSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1DenylistPrivateAllResourceTypeRoute = createRoute({
  method: 'get',
  path: '/v1/denylist/private/all/{resource_type}',
  tags: ['Denylist data query and management'],
  summary: 'Get the set of private denylists of the user by resource type.',
  description:
    '### What\nObtain the set of private deny lists of the user available in the service filtering by resource type. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``\n\n These lists are different datasets:\n- Lists that are part of the automatically reported data from the Report IP, focused on honeypots and automaticreporting from external sources. The name is `External sources reported CIDRs`. The resource type is ``CIDR``.\n- Lists that are part of the automatically denylisted by the Threat Jammer service. The name is `Default denylist`. The resource type is ``CIDR``.\n- Lists that are created by the user.\n\n### Parameters\nThe ``resource type`` to filter. The values can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to the status of all the lists.\n- ``lists``: a list of JSON objects with the available lists:\n    - ``self``: the URI to individual information of the list.\n    - ``name``: A human readable name of the list.\n    - ``description``: A long detailed information about what the list contains and how it is used.\n    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.\n    - ``created_at``: Unix timestamp in seconds when the list was created.\n    - ``updated_at``: Unix timestamp in seconds when the list was updated.\n    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n    - ``origins``: list of websites that are using the list as a denylist.\n        - ``self``: the URI to all the list of origins.\n        - ``lists``: list of lists that the origin is using.\n            - ``self``: the URI to the individual information of the list.\n            - ``origin``: the protocol and domain of the website that is using the list.\n            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED`` it means that the list is not available anymore if not renewed.\n            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n            - ``created_at``: Unix timestamp in seconds when the list was created.\n            - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\n### Errors\n\n- If the resource type is not valid, it will return a ``422`` (Unprocessable Entity) error.\n\nIt will also return the API Global errors described in the API description.',
  operationId:
    'get_all_private_denylists_by_resource_type_v1_denylist_private_all__resource_type__get',
  request: {
    params: z.object({
      resource_type: z
        .enum(['cidr', 'country', 'continent', 'as', 'datacenter', 'useragent'])
        .openapi({
          param: {
            in: 'path',
            name: 'resource_type',
            required: true,
            schema: {
              enum: ['cidr', 'country', 'continent', 'as', 'datacenter', 'useragent'],
              title: 'Resource Type',
              type: 'string',
            },
          },
          title: 'Resource Type',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PrivateAclGroupListCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1DenylistPrivateIpAddressRoute = createRoute({
  method: 'get',
  path: '/v1/denylist/private/ip/{address}',
  tags: ['Denylist data query and management'],
  summary: 'Get the different denylists where the IP address was found.',
  description:
    '### What\nObtain the list of all the different denylists where the IP address entered by the user. The denylisted forbidden datasets are the ones submitted manually by the user from files or indidual items.\n\n### Parameters\nThe endpoint accepts the `address` parameter as query string.\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to individual status.\n- ``cidrs``: the URI of the lists of CIDRs where the IP was found.\n- ``country``: the URIs where the lists of countries where the IP address was found\n- ``continent``: the URI where the continent where the IP address was found.\n- ``asn``: the URIs where the list of continents of the ASN where the IP address was found.\n- ``datacenter``: the URIs of the lists of datacenters where the IP address was found. If not found, the result is an empty string.\n- ``reported``: the URI of the information of the IP address reported by the user.\n\n### Errors\n- a `422 Unprocessable Entity` error if the IP address was malformed.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'query_resource_denylists_v1_denylist_private_ip__address__get',
  request: {
    params: z.object({
      address: z.union([z.ipv4(), z.ipv6()]).openapi({
        param: {
          in: 'path',
          name: 'address',
          required: true,
          schema: {
            anyOf: [
              { format: 'ipv4', type: 'string' },
              { format: 'ipv6', type: 'string' },
            ],
            title: 'Address',
          },
        },
        title: 'Address',
      }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AclListCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1DenylistPrivateDenylistIdRoute = createRoute({
  method: 'get',
  path: '/v1/denylist/private/{denylist_id}',
  tags: ['Denylist data query and management'],
  summary: 'Get the details of a specific private denylist of the user.',
  description:
    '### What\nObtain the details of the private deny list of the user available in the service.\n\n### Parameters\nPass the private denylist ID as query parameter.\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI to individual information of the list.\n- ``name``: A human readable name of the list.\n- ``description``: A long detailed information about what the list contains and how it is used.\n- ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n- ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.\n- ``created_at``: Unix timestamp in seconds when the list was created.\n- ``updated_at``: Unix timestamp in seconds when the list was updated.\n- ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n- ``origins``: list of websites that are using the list as a denylist.\n    - ``self``: the URI to all the list of origins.\n    - ``lists``: list of lists that the origin is using.\n        - ``self``: the URI to the individual information of the list.\n        - ``origin``: the protocol and domain of the website that is using the list.\n        - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED`` it means that the list is not available anymore if not renewed.\n        - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n        - ``created_at``: Unix timestamp in seconds when the list was created.\n        - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\n### Errors\n\n- If the deny list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.\n- If the private denylist ID does not exist, it will return a ``404`` (Not found) error.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'get_single_denylist_v1_denylist_private__denylist_id__get',
  request: {
    params: z.object({
      denylist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'denylist_id',
            required: true,
            schema: { format: 'uuid', title: 'Denylist Id', type: 'string' },
          },
          title: 'Denylist Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PrivateAclGroupListOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const putV1DenylistPrivateDenylistIdRoute = createRoute({
  method: 'put',
  path: '/v1/denylist/private/{denylist_id}',
  tags: ['Denylist data query and management'],
  summary: 'Update the information of an existing private denylist of the user.',
  description:
    '### What\nUpdates the information that describes the denylist of the user in the system. The parameters that can be modified are:\n - name\n - description\n - tags\n - expiry\n\nThis is an asynchronous operation. It can take several seconds until the operation completes, but the request will immediately return a 202 Accepted response.\n\nThe default lists ``External sources reported CIDRs`` and ``Default denylist`` cannot be updated.\n\n### Parameters\nIn the query string the ID of the private deny list to delete.\n\nIn the body the following parameters:\n- ``name``: (Optional) A human readable name of the list.\n- ``description``: (Optional) A long detailed information about what the list contains and how it is used.\n- ``tags``: (Optional) A list of tags that describe the list.\n- ``expiry``: (Optional) Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n\n### Result\nIt should always return a 202 Accepted response with an empty body.\n\n### Errors\n\n- If the list does not exist, it will return a `404` (Not found) error.\n- If the list is a default list, it will return a `403` (Forbidden) error.\n- If the deny list is not a valid UUID, it will return a `422` (Unprocessable Entity) error.\n- If the expiry is not a valid timestamp, it will return a `422` (Unprocessable Entity) error.\n- If the expiry is in the past, it will return a `400` (Bad Request) error.\n- If the name is not a string, it will return a `422` (Unprocessable Entity) error.\n- If the description is not a string, it will return a `422` (Unprocessable Entity) error.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'update_private_denylist_of_the_user_v1_denylist_private__denylist_id__put',
  request: {
    params: z.object({
      denylist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'denylist_id',
            required: true,
            schema: { format: 'uuid', title: 'Denylist Id', type: 'string' },
          },
          title: 'Denylist Id',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BodyUpdatePrivateDenylistOfTheUserV1DenylistPrivateDenylistIdPutSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const deleteV1DenylistPrivateDenylistIdRoute = createRoute({
  method: 'delete',
  path: '/v1/denylist/private/{denylist_id}',
  tags: ['Denylist data query and management'],
  summary: 'Delete all the bindings between a user and a private denylist.',
  description:
    '### What\nDelete all the bindings between a user and a private denylist. This will remove the content of the denylist, the denylist from the user and also all the origins that are using the denylist.\n\nThis is an asynchronous operation. It can take several seconds until the operation completes, but the request willimmediately return a 202 Accepted response.\n\nThe default lists ``External sources reported CIDRs`` and ``Default denylist`` cannot be deleted, but can be emptied. Please refer to the documentation to delete the content.\n\n### Parameters\nIn the query string the ID of the private deny list to delete.\n\n### Result\nIt should always return a 202 Accepted response with an empty body.\n\n### Errors\n\n- If the list does not exist, it will return a `404` (Not found) error.\n- If the list is a default list, it will return a `403` (Forbidden) error.\n- If the deny list is not a valid UUID, it will return a `422` (Unprocessable Entity) error.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'delete_the_denylist_v1_denylist_private__denylist_id__delete',
  request: {
    params: z.object({
      denylist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'denylist_id',
            required: true,
            schema: { format: 'uuid', title: 'Denylist Id', type: 'string' },
          },
          title: 'Denylist Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1DenylistPrivateDenylistIdContentRoute = createRoute({
  method: 'get',
  path: '/v1/denylist/private/{denylist_id}/content',
  tags: ['Denylist data query and management'],
  summary: 'Get the content of a private denylist of the user.',
  description:
    '### What\nReturns the content of the private denylist of the user. The content can be CIDRs, ASNs, countries, continents or    datacenter IDs.\n\n### Parameters\nPass the private denylist ID as query parameter.\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI to the content of the list.\n- ``cidrs``: (Optional) list of CIDRs in the list.\n- ``asns``: (Optional) list of ASNs in the list.\n- ``countries``: (Optional) list of countries in the list.\n- ``continents``: (Optional) list of continents in the list.\n- ``datacenters``: (Optional) list of datacenters in the list.\n\n### Errors\n\n- If the deny list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.\n- If the private denylist ID does not exist, it will return a ``404`` (Not found) error.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'get_denylist_content_v1_denylist_private__denylist_id__content_get',
  request: {
    params: z.object({
      denylist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'denylist_id',
            required: true,
            schema: { format: 'uuid', title: 'Denylist Id', type: 'string' },
          },
          title: 'Denylist Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PrivateAclListCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const putV1DenylistPrivateDenylistIdContentRoute = createRoute({
  method: 'put',
  path: '/v1/denylist/private/{denylist_id}/content',
  tags: ['Denylist data query and management'],
  summary: 'Add or remove content of a private denylist of the user.',
  description:
    "### What\nAdd or remove content of a private denylist of the user. The content can be CIDRs, ASNs, countries, continents or datacenter IDs.\n\n The number of elements allowed in all the lists are limited depending on the plan of the user:\n- Free: 100 elements\n- Basic: 1000 elements\n- Premium: 10000 elements\n\n### Parameters\nPass the private denylist ID as query parameter.\n\nIn the body the following parameters:\n- ``append``: (Optional) Add CIDRs, ASNs, countries, continents or datacenter IDs to add to the list. It's not possible to mix different resource types in the same list.\n- ``remove``: (Optional) Extract CIDRs, ASNs, countries, continents or datacenter IDs to add to the list. It's not possible to mix different resource types in the same list.\n\n\n### Result\nIf successful, it will return a ``202`` (Accepted) response with an empty body. The operation is asynchronous,and can take several seconds to complete.\n\n### Errors\n\n- If the deny list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.\n- If the private denylist ID does not exist, it will return a ``404`` (Not found) error.\n- If the ``append`` or ``remove`` parameters are not processable, it will return a ``422`` (Unprocessable Entity) error.\n- If the number of elements in the lists is over the limit, it will return a ``413`` (Payload Too Large) error.\n\nIt will also return the API Global errors described in the API description.",
  operationId:
    'update_private_content_of_the_denylist_of_the_user_v1_denylist_private__denylist_id__content_put',
  request: {
    params: z.object({
      denylist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'denylist_id',
            required: true,
            schema: { format: 'uuid', title: 'Denylist Id', type: 'string' },
          },
          title: 'Denylist Id',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema:
            BodyUpdatePrivateContentOfTheDenylistOfTheUserV1DenylistPrivateDenylistIdContentPutSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const deleteV1DenylistPrivateDenylistIdContentRoute = createRoute({
  method: 'delete',
  path: '/v1/denylist/private/{denylist_id}/content',
  tags: ['Denylist data query and management'],
  summary: 'Delete all the content of a private denylist of the user.',
  description:
    '### What\nDelete all the content of a private denylist of the user. This will remove all the elements, and there is no way to recover them.\n\n### Parameters\nPass the private denylist ID as query parameter.\n\n### Result\nIf successful, it will return a ``202`` (Accepted) response with an empty body. The operation is asynchronous,and can take several seconds to complete.\n\n### Errors\n\n- If the deny list is not a valid UUID, it will return a ``422`` (Unprocessable Entity) error.\n- If the private denylist ID does not exist, it will return a ``404`` (Not found) error.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'delete_the_denylist_content_v1_denylist_private__denylist_id__content_delete',
  request: {
    params: z.object({
      denylist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'denylist_id',
            required: true,
            schema: { format: 'uuid', title: 'Denylist Id', type: 'string' },
          },
          title: 'Denylist Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const putV1DenylistPrivateDenylistIdOriginRoute = createRoute({
  method: 'put',
  path: '/v1/denylist/private/{denylist_id}/origin',
  tags: ['Denylist data query and management'],
  summary: 'Toogle the status of the origin in a deny list.',
  description:
    '### What\nChange the status of the origin of a deny list to ``ACTIVE``, ``INACTIVE`` or ``DELETED``.\n\nAn ``ACTIVE`` origin will apply the deny list to the protocol and domain of the origin. An origin can be created and activated simply toogling the ``ACTIVE`` status. As an optional parameter it can be provided an ``ttl`` or Time To Live parameter of the origin in the list in seconds. After the TTL expires, the origin will be removed from the list.  If the TTL is not provided, the origin will never expire.\n\nAn ``INACTIVE`` origin will not apply the deny list to the protocol and domain of the origin.\n\nA ``DELETED`` origin will be removed from the list. It will not be used by the service anymore. The user can activate it again with the ``ACTIVE`` status.\n\nThis is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.\n\n*This operation is not available in the Freemium plan.*\n\n### Parameters\nIn the query string the ID of the deny list to change the status.\nIn the body the JSON object with the following fields:\n- ``origin``: The protocol and domain of the origin. It can be ``http://example.com`` or ``https://example.com``.\n- ``status``: The status of the list. It can be ``ACTIVE``, ``INACTIVE`` or ``DELETED``.\n\n### Result\nIt should always return a 202 Accepted response with an empty body.\n\n### Errors\n\nIf the list does not exist, it will return a 404 error.\nIf the status is not ``ACTIVE`` or ``INACTIVE``, it will return a 422 error.\nIf the TTL is negative in the past, it will return a 422 error.\nIf the deny list is not a valid UUID, it will return a 422 error.\nIf the origin is not a valid URL, it will return a 400 error.\nIf the denylist is not active, it will returna 409 error.\nIf the origin is not found in the set owned by the user, it will return a 404 error.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'change_status_of_the_origin_denylist_v1_denylist_private__denylist_id__origin_put',
  request: {
    params: z.object({
      denylist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'denylist_id',
            required: true,
            schema: { format: 'uuid', title: 'Denylist Id', type: 'string' },
          },
          title: 'Denylist Id',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BodyChangeStatusOfTheOriginDenylistV1DenylistPrivateDenylistIdOriginPutSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1DenylistPublicAllRoute = createRoute({
  method: 'get',
  path: '/v1/denylist/public/all',
  tags: ['Denylist data query and management'],
  summary: 'Get the set of public denylists.',
  description:
    '### What\nObtain the set of public deny lists available in the service and also which ones are already selected by the user and wich ones are not.\n\n### Parameters\nNo parameters\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to the status of all the lists.\n- ``lists``: a list of JSON objects with the available lists:\n    - ``self``: the URI to individual information of the list.\n    - ``name``: A human readable name of the list.\n    - ``description``: A long detailed information about what the list contains and how it is used.\n    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.\n    - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.\n    - ``created_at``: Unix timestamp in seconds when the list was created.\n    - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\nIf the list is already selected by the user, the JSON object will also contain the following fields:\n- ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n- ``origins``: list of websites that are using the list as an denylist.\n    - ``self``: the URI to all the list of origins.\n    - ``lists``: list of lists that the origin is using.\n        - ``self``: the URI to the individual information of the list.\n        - ``origin``: the protocol and domain of the website that is using the list.\n        - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``        it means that the list is not available anymore if not renewed.\n        - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n        - ``created_at``: Unix timestamp in seconds when the list was created.\n        - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\n### Errors\n\nIt will return the API Global errors described in the API description.',
  operationId: 'get_all_public_denylists_v1_denylist_public_all_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PublicAclGroupListCollectionOutputSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1DenylistPublicAllResourceTypeRoute = createRoute({
  method: 'get',
  path: '/v1/denylist/public/all/{resource_type}',
  tags: ['Denylist data query and management'],
  summary: 'Get the set of public denylists by resource type.',
  description:
    '### What\nObtain the set of public deny lists available in the service and also which ones are already selected by the user and wich ones are not filtering by the resource type.\n\n### Parameters\nThe ``resource type`` to filter. The values can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to the status of all the lists.\n- ``lists``: a list of JSON objects with the available lists:\n    - ``self``: the URI to individual information of the list.\n    - ``name``: A human readable name of the list.\n    - ``description``: A long detailed information about what the list contains and how it is used.\n    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.\n    - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.\n    - ``created_at``: Unix timestamp in seconds when the list was created.\n    - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\nIf the list is already selected by the user, the JSON object will also contain the following fields:\n- ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n- ``origins``: list of websites that are using the list as an denylist.\n    - ``self``: the URI to all the list of origins.\n    - ``lists``: list of lists that the origin is using.\n        - ``self``: the URI to the individual information of the list.\n        - ``origin``: the protocol and domain of the website that is using the list.\n        - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``        it means that the list is not available anymore if not renewed.\n        - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n        - ``created_at``: Unix timestamp in seconds when the list was created.\n        - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\n### Errors\n\nIt will return the API Global errors described in the API description.',
  operationId:
    'get_all_public_denylists_by_resource_type_v1_denylist_public_all__resource_type__get',
  request: {
    params: z.object({
      resource_type: z
        .enum(['cidr', 'country', 'continent', 'as', 'datacenter', 'useragent'])
        .openapi({
          param: {
            in: 'path',
            name: 'resource_type',
            required: true,
            schema: {
              enum: ['cidr', 'country', 'continent', 'as', 'datacenter', 'useragent'],
              title: 'Resource Type',
              type: 'string',
            },
          },
          title: 'Resource Type',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PublicAclGroupListCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1DenylistPublicIpAddressRoute = createRoute({
  method: 'get',
  path: '/v1/denylist/public/ip/{address}',
  tags: ['Denylist data query and management'],
  summary: 'Get the different public denylists where the IP address was found.',
  description:
    '### What\nObtain the list of all the different public denylists where the IP address entered by the user is. The public denylists are the ones activated by the user, but managed by Threatjammer administrators.\n\n### Parameters\nThe endpoint accepts the `address` parameter as query string.\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to individual status.\n- ``cidrs``: the URI of the lists of CIDRs where the IP was found.\n- ``country``: the URIs where the lists of countries where the IP address was found\n- ``continent``: the URI where the continent where the IP address was found.\n- ``asn``: the URIs where the list of continents of the ASN where the IP address was found.\n- ``datacenter``: the URIs of the lists of datacenters where the IP address was found. If not found, the result is an empty string.\n\n### Errors\n- a `422 Unprocessable Entity` error if the IP address was malformed.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'query_resource_denylists_v1_denylist_public_ip__address__get',
  request: {
    params: z.object({
      address: z.union([z.ipv4(), z.ipv6()]).openapi({
        param: {
          in: 'path',
          name: 'address',
          required: true,
          schema: {
            anyOf: [
              { format: 'ipv4', type: 'string' },
              { format: 'ipv6', type: 'string' },
            ],
            title: 'Address',
          },
        },
        title: 'Address',
      }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AclListCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1DenylistPublicOwnedRoute = createRoute({
  method: 'get',
  path: '/v1/denylist/public/owned',
  tags: ['Denylist data query and management'],
  summary: 'Get the set of owned denylists.',
  description:
    '### What\nObtain the set of public deny lists available in the service selected by the user.\n\n### Parameters\nNo parameters\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to the status of all the lists.\n- ``lists``: a list of JSON objects with the available lists:\n    - ``self``: the URI to individual information of the list.\n    - ``name``: A human readable name of the list.\n    - ``description``: A long detailed information about what the list contains and how it is used.\n    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.\n    - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.\n    - ``created_at``: Unix timestamp in seconds when the list was created.\n    - ``updated_at``: Unix timestamp in seconds when the list was updated.\n    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n    - ``origins``: list of websites that are using the list as an denylist.\n        - ``self``: the URI to all the list of origins.\n        - ``lists``: list of lists that the origin is using.\n            - ``self``: the URI to the individual information of the list.\n            - ``origin``: the protocol and domain of the website that is using the list.\n            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``            it means that the list is not available anymore if not renewed.\n            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n            - ``created_at``: Unix timestamp in seconds when the list was created.\n            - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\n### Errors\n\nIt will return the API Global errors described in the API description.',
  operationId: 'get_public_denylists_owned_by_the_user_v1_denylist_public_owned_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PublicAclGroupListCollectionOutputSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1DenylistPublicOwnedResourceTypeRoute = createRoute({
  method: 'get',
  path: '/v1/denylist/public/owned/{resource_type}',
  tags: ['Denylist data query and management'],
  summary: 'Get the set of public denylists of a user by resource type.',
  description:
    '### What\nObtain the set of public deny lists selected by the user and wich ones are not filtering by the resource type.\n\n### Parameters\nThe ``resource type`` to filter. The values can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to the status of all the lists.\n- ``lists``: a list of JSON objects with the available lists:\n    - ``self``: the URI to individual information of the list.\n    - ``name``: A human readable name of the list.\n    - ``description``: A long detailed information about what the list contains and how it is used.\n    - ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n    - ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.\n    - ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``    it means that the list is not available anymore if not renewed.\n    - ``created_at``: Unix timestamp in seconds when the list was created.\n    - ``updated_at``: Unix timestamp in seconds when the list was updated.\n    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n    - ``origins``: list of websites that are using the list as an denylist.\n        - ``self``: the URI to all the list of origins.\n        - ``lists``: list of lists that the origin is using.\n            - ``self``: the URI to the individual information of the list.\n            - ``origin``: the protocol and domain of the website that is using the list.\n            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``            it means that the list is not available anymore if not renewed.\n            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n            - ``created_at``: Unix timestamp in seconds when the list was created.\n            - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\n### Errors\n\nIt will return the API Global errors described in the API description.',
  operationId:
    'get_all_owned_denylists_by_resource_type_v1_denylist_public_owned__resource_type__get',
  request: {
    params: z.object({
      resource_type: z
        .enum(['cidr', 'country', 'continent', 'as', 'datacenter', 'useragent'])
        .openapi({
          param: {
            in: 'path',
            name: 'resource_type',
            required: true,
            schema: {
              enum: ['cidr', 'country', 'continent', 'as', 'datacenter', 'useragent'],
              title: 'Resource Type',
              type: 'string',
            },
          },
          title: 'Resource Type',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PublicAclGroupListCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1DenylistPublicDenylistIdRoute = createRoute({
  method: 'get',
  path: '/v1/denylist/public/{denylist_id}',
  tags: ['Denylist data query and management'],
  summary: 'Get the details of the denylist.',
  description:
    '### What\nObtain the details of an deny list available in the service.\n\n### Parameters\nNo parameters\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to individual information of the list.\n- ``name``: A human readable name of the list.\n- ``description``: A long detailed information about what the list contains and how it is used.\n- ``resource_type``: The type of the list. It can be ``CIDR``, ``AS``, ``COUNTRY``, ``CONTINENT`` or ``DATACENTER_ID``.\n- ``list_type``: The type of the list. It can be ``ALLOW`` or ``DENY``.\n- ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``it means that the list is not available anymore if not renewed.\n- ``created_at``: Unix timestamp in seconds when the list was created.\n- ``updated_at``: Unix timestamp in seconds when the list was updated.\n\nIf the list is already selected by the user, the JSON object will also contain the following fields:\n    - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n    - ``origins``: list of websites that are using the list as an denylist.\n        - ``self``: the URI to all the list of origins.\n        - ``lists``: list of lists that the origin is using.\n            - ``self``: the URI to the individual information of the list.\n            - ``origin``: the protocol and domain of the website that is using the list.\n            - ``status``: the status of the list. It can be ``ACTIVE`` or ``INACTIVE`` or ``EXPIRED``. If the list is ``EXPIRED``            it means that the list is not available anymore if not renewed.\n            - ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n            - ``created_at``: Unix timestamp in seconds when the list was created.\n            - ``updated_at``: Unix timestamp in seconds when the list was updated.\n\n### Errors\n\nIf the list does not exist, it will return a 404 error.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'get_single_denylist_v1_denylist_public__denylist_id__get',
  request: {
    params: z.object({
      denylist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'denylist_id',
            required: true,
            schema: { format: 'uuid', title: 'Denylist Id', type: 'string' },
          },
          title: 'Denylist Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PublicAclGroupListOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const putV1DenylistPublicDenylistIdRoute = createRoute({
  method: 'put',
  path: '/v1/denylist/public/{denylist_id}',
  tags: ['Denylist data query and management'],
  summary: 'Toogle the status of an deny list.',
  description:
    '### What\nChange the status of an deny list to ``ACTIVE`` or ``INACTIVE``. An ``INACTIVE`` list will not be used by the service. An ``ACTIVE`` list will be used by the service. As an optional parameter it can be provided an ``expiry`` date in seconds since epoch. If not provided, the list will never expire.\n\n This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.\n\n### Parameters\nIn the query string the ID of the deny list to change the status.\nIn the body the JSON object with the following fields:\n- ``status``: The status of the list. It can be ``ACTIVE`` or ``INACTIVE``.\n- ``expiry``: Unix timestamp in seconds when the list will expire. If it does not exist, it will never expire.\n\n### Result\nIt should always return a 202 Accepted response with an empty body.\n\n### Errors\n\nIf the list does not exist, it will return a 404 error.\nIf the status is not ``ACTIVE`` or ``INACTIVE``, it will return a 422 error.\nIf the expiry is not a valid timestamp, it will return a 422 error.\nIf the deny list is not a valid UUID, it will return a 422 error.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'change_status_of_the_denylist_v1_denylist_public__denylist_id__put',
  request: {
    params: z.object({
      denylist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'denylist_id',
            required: true,
            schema: { format: 'uuid', title: 'Denylist Id', type: 'string' },
          },
          title: 'Denylist Id',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BodyChangeStatusOfTheDenylistV1DenylistPublicDenylistIdPutSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const deleteV1DenylistPublicDenylistIdRoute = createRoute({
  method: 'delete',
  path: '/v1/denylist/public/{denylist_id}',
  tags: ['Denylist data query and management'],
  summary: 'Delete all the bindings between a user and an denylist.',
  description:
    '### What\nDelete all the bindings between a user and an denylist. This will remove the denylist from the user and also all the origins that are using the denylist.\n\n This is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.\n\n### Parameters\nIn the query string the ID of the deny list to change the status.\n\n### Result\nIt should always return a 202 Accepted response with an empty body.\n\n### Errors\n\nIf the list does not exist, it will return a 404 error.\nIf the deny list is not a valid UUID, it will return a 422 error.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'delete_the_denylist_v1_denylist_public__denylist_id__delete',
  request: {
    params: z.object({
      denylist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'denylist_id',
            required: true,
            schema: { format: 'uuid', title: 'Denylist Id', type: 'string' },
          },
          title: 'Denylist Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const putV1DenylistPublicDenylistIdOriginRoute = createRoute({
  method: 'put',
  path: '/v1/denylist/public/{denylist_id}/origin',
  tags: ['Denylist data query and management'],
  summary: 'Toogle the status of the origin in a deny list.',
  description:
    '### What\nChange the status of the origin of a deny list to ``ACTIVE``, ``INACTIVE`` or ``DELETED``.\n\nAn ``ACTIVE`` origin will apply the deny list to the protocol and domain of the origin. An origin can be created and activated simply toogling the ``ACTIVE`` status. As an optional parameter it can be provided an ``ttl`` or Time To Live parameter of the origin in the list in seconds. After the TTL expires, the origin will be removed from the list.  If the TTL is not provided, the origin will never expire.\n\nAn ``INACTIVE`` origin will not apply the deny list to the protocol and domain of the origin.\n\nA ``DELETED`` origin will be removed from the list. It will not be used by the service anymore. The user can activate it again with the ``ACTIVE`` status.\n\nThis is an asynchronous operation. It can take several seconds until the operation completes, but the request will  immediately return a 202 Accepted response.\n\n*This operation is not available in the Freemium plan.*\n\n### Parameters\nIn the query string the ID of the deny list to change the status.\nIn the body the JSON object with the following fields:\n- ``origin``: The protocol and domain of the origin. It can be ``http://example.com`` or ``https://example.com``.\n- ``status``: The status of the list. It can be ``ACTIVE``, ``INACTIVE`` or ``DELETED``.\n\n### Result\nIt should always return a 202 Accepted response with an empty body.\n\n### Errors\n\nIf the list does not exist, it will return a 404 error.\nIf the status is not ``ACTIVE`` or ``INACTIVE``, it will return a 422 error.\nIf the TTL is negative in the past, it will return a 422 error.\nIf the deny list is not a valid UUID, it will return a 422 error.\nIf the origin is not a valid URL, it will return a 400 error.\nIf the denylist is not active, it will returna 409 error.\nIf the origin is not found in the set owned by the user, it will return a 404 error.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'change_status_of_the_origin_denylist_v1_denylist_public__denylist_id__origin_put',
  request: {
    params: z.object({
      denylist_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'denylist_id',
            required: true,
            schema: { format: 'uuid', title: 'Denylist Id', type: 'string' },
          },
          title: 'Denylist Id',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BodyChangeStatusOfTheOriginDenylistV1DenylistPublicDenylistIdOriginPutSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1DenylistReportedIpRoute = createRoute({
  method: 'get',
  path: '/v1/denylist/reported/ip',
  tags: ['Denylist data query and management'],
  summary: 'Get the list of automatically reported IP addresses by the user.',
  description:
    '### What\nObtain the list of all the IPv4 or IPv6 addresses that have been automatically reported by the user. A user can report automatically an IP address with the asynchronous API. The reported IP addresses differ from the ones managed with the endpoint ``/v1/denylist/private/ip/%s``. As a rule of thumb,\n the reported IP addresses are the ones submitted by devices like honeypots, firewalls, log engines, etc. The denylisted IP addresses are the ones submitted manually by the user from files or indidual items.\n\n### Parameters\nThe endpoint accepts the following parameters in the query string:\n- ``dataset``: (Optional) Name of the dataset to filter the query. If not given, then all datasets are queried. If given, then only the changes logged in the given dataset are returned. The list of datasets is obtained from the ``/v1/dataset/ip`` endpoint.\n- ``reported_before``: (Optional) The UNIX timestamp in milliseconds of the earliest reported date to be included in the query. If not given, then the earliest date is current time.\n- ``reported_after``: (Optional) The UNIX timestamp in milliseconds of the oldest reported date to be included in the query. If not given, then the oldest date is the first event logged.\n- ``expires_before``: (Optional) The UNIX timestamp in milliseconds of the earliest expiry date to be included in the query. If not given, then the earliest date is current time.\n- ``expires_after``: (Optional) The UNIX timestamp in milliseconds of the oldest expiry date to be included in the query. If not given, then the oldest date is the first event logged.\n- ``greater_than``: (Optional) Restricts the result displaying only the IP addresses reported more times than the given value. It must be an integer greater than 0.\n- ``less_than``: (Optional) Restricts the result displaying only the IP addresses reported less times than the given value. It must be an integer greater than 0.\n- ``ip_protocol_version``: (Optional) Restricts the result displaying only the IP addresses with the given IP protocol version. Values are: ALL, IPV4, IPV6. If not given, then all IP addresses are returned.\n- ``output_format``: (Optional) The format of the output. Values are: JSON, CSV, AWS-WAF. If not given, then the default format is JSON. AWS-WAF is the format used by AWS WAF to import ipsets in the service. You can find more information about AWS WAF import [here](https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateIPSet.html).\n\n### Result\nThe result is a JSON object with a list of the following JSON objects:\n- ``self``: the URI to individual status.\n- ``addresses``: a list of JSON objects with the following fields:\n    - ``self``: the URI to individual reported IP information.\n    - ``last_report``: Unix timestamp in milliseconds when the IP address was last reported.\n    - ``expiry``: Unix timestamp in milliseconds when the IP address will expire and be removed.\n    - ``total_reports``: Total number of reports for the IP address.\n    - ``protocol``: IP protocol version of the IP address. Same value as the ``ip_protocol_version`` parameter if given.\n    - ``dataset``: Name of the dataset where the IP address was reported. Must be a value from the ``/v1/dataset/ip`` endpoint.\n    - ``tags``: A list of strings with the tags associated to the IP address at the origin device. It helps to classify the origin of the report.\n\n### Errors\n- a `400 Bad Request` error if any timestamp is in the future.\n- a `400 Bad Request` error if the dataset is not a string that can have numbers, upper and lower case letters, and underscores.\n- a `404 Not Found` error if the dataset was not found.\n- a `422 Unprocessable Entity` error if some of the parameters are malformed.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'query_all_the_ip_addresses_reported_by_the_user_v1_denylist_reported_ip_get',
  request: {
    query: z.object({
      dataset: z
        .string()
        .regex(/^([A-Z0-9\_]+)$/)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The dataset list type to filter for. Must be uppercase, numbers and underscore',
            in: 'query',
            name: 'dataset',
            required: false,
            schema: {
              description:
                'The dataset list type to filter for. Must be uppercase, numbers and underscore',
              pattern: '^([A-Z0-9\\_]+)$',
              title: 'Dataset',
              type: 'string',
            },
          },
          description:
            'The dataset list type to filter for. Must be uppercase, numbers and underscore',
          title: 'Dataset',
        }),
      reported_before: z
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
            description:
              'Restricts the result displaying only the IP addresses reported before `reported_before`. It must be a UNIX timestamp in seconds.',
            in: 'query',
            name: 'reported_before',
            required: false,
            schema: {
              description:
                'Restricts the result displaying only the IP addresses reported before `reported_before`. It must be a UNIX timestamp in seconds.',
              title: 'Reported Before',
              type: 'integer',
            },
          },
          description:
            'Restricts the result displaying only the IP addresses reported before `reported_before`. It must be a UNIX timestamp in seconds.',
          title: 'Reported Before',
        }),
      reported_after: z
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
            description:
              'Restricts the result displaying only the IP addresses reported after `reported_after`. It must be a UNIX timestamp in seconds.',
            in: 'query',
            name: 'reported_after',
            required: false,
            schema: {
              description:
                'Restricts the result displaying only the IP addresses reported after `reported_after`. It must be a UNIX timestamp in seconds.',
              title: 'Reported After',
              type: 'integer',
            },
          },
          description:
            'Restricts the result displaying only the IP addresses reported after `reported_after`. It must be a UNIX timestamp in seconds.',
          title: 'Reported After',
        }),
      expires_before: z
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
            description:
              'Restricts the result displaying only the IP addresses that will expire before `expires_before`. It must be a UNIX timestamp in seconds greater than the current UNIX timestamp.',
            in: 'query',
            name: 'expires_before',
            required: false,
            schema: {
              description:
                'Restricts the result displaying only the IP addresses that will expire before `expires_before`. It must be a UNIX timestamp in seconds greater than the current UNIX timestamp.',
              title: 'Expires Before',
              type: 'integer',
            },
          },
          description:
            'Restricts the result displaying only the IP addresses that will expire before `expires_before`. It must be a UNIX timestamp in seconds greater than the current UNIX timestamp.',
          title: 'Expires Before',
        }),
      expires_after: z
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
            description:
              'Restricts the result displaying only the IP addresses that will expire after `expires_after`. It must be a UNIX timestamp in seconds greater than the current UNIX timestamp.',
            in: 'query',
            name: 'expires_after',
            required: false,
            schema: {
              description:
                'Restricts the result displaying only the IP addresses that will expire after `expires_after`. It must be a UNIX timestamp in seconds greater than the current UNIX timestamp.',
              title: 'Expires After',
              type: 'integer',
            },
          },
          description:
            'Restricts the result displaying only the IP addresses that will expire after `expires_after`. It must be a UNIX timestamp in seconds greater than the current UNIX timestamp.',
          title: 'Expires After',
        }),
      greater_than: z
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
            description:
              'Restricts the result displaying only the IP addresses reported more times than `greater_than`. It must be an integer greater than 0.',
            in: 'query',
            name: 'greater_than',
            required: false,
            schema: {
              description:
                'Restricts the result displaying only the IP addresses reported more times than `greater_than`. It must be an integer greater than 0.',
              title: 'Greater Than',
              type: 'integer',
            },
          },
          description:
            'Restricts the result displaying only the IP addresses reported more times than `greater_than`. It must be an integer greater than 0.',
          title: 'Greater Than',
        }),
      less_than: z
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
            description:
              'Restricts the result displaying only the IP addresses reported less times than `less_than`. It must be an integer greater than 1.',
            in: 'query',
            name: 'less_than',
            required: false,
            schema: {
              description:
                'Restricts the result displaying only the IP addresses reported less times than `less_than`. It must be an integer greater than 1.',
              title: 'Less Than',
              type: 'integer',
            },
          },
          description:
            'Restricts the result displaying only the IP addresses reported less times than `less_than`. It must be an integer greater than 1.',
          title: 'Less Than',
        }),
      ip_protocol_version: z
        .enum(['ALL', 'IPV4', 'IPV6'])
        .default('ALL')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restrict the result displaying the IP protocol version requested (IPV4 or IPV6) or both (ALL). Some output formats MUST filter by IP protocol version first.',
            in: 'query',
            name: 'ip_protocol_version',
            required: false,
            schema: {
              default: 'ALL',
              description:
                'Restrict the result displaying the IP protocol version requested (IPV4 or IPV6) or both (ALL). Some output formats MUST filter by IP protocol version first.',
              enum: ['ALL', 'IPV4', 'IPV6'],
              title: 'Ip Protocol Version',
              type: 'string',
            },
          },
          description:
            'Restrict the result displaying the IP protocol version requested (IPV4 or IPV6) or both (ALL). Some output formats MUST filter by IP protocol version first.',
          title: 'Ip Protocol Version',
        }),
      output_format: z
        .enum(['JSON', 'CSV', 'AWS-WAF'])
        .default('JSON')
        .exactOptional()
        .openapi({
          param: {
            description: 'The output format of the datasets.',
            in: 'query',
            name: 'output_format',
            required: false,
            schema: {
              default: 'JSON',
              description: 'The output format of the datasets.',
              enum: ['JSON', 'CSV', 'AWS-WAF'],
              title: 'Output Format',
              type: 'string',
            },
          },
          description: 'The output format of the datasets.',
          title: 'Output Format',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: IPListCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const deleteV1DenylistReportedIpAllRoute = createRoute({
  method: 'delete',
  path: '/v1/denylist/reported/ip/all',
  tags: ['Denylist data query and management'],
  summary: 'Delete all the automatically reported IP addresses by the user.',
  description:
    '### What\nDelete all the IP addresses that have been automatically reported by the user. This option cannot be reverted.\n\n### Parameters\nNo parameters are required.\n\n### Result\nA successful result is an empty response with the the HTTP status code ``204 No Content``.\n\n### Errors\nIt will return the API Global errors described in the API description.',
  operationId: 'delete_all_ip_addresses_reported_by_the_user_v1_denylist_reported_ip_all_delete',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1DenylistReportedIpIpAddressRoute = createRoute({
  method: 'get',
  path: '/v1/denylist/reported/ip/{ip_address}',
  tags: ['Denylist data query and management'],
  summary: 'Get the details of an automatically reported IP addresses by the user.',
  description:
    '### What\nObtain the details of an IPv4 or IPv6 addresses that have been automatically reported by the user. A user can report automatically an IP address with the asynchronous API. The reported IP address differs from the ones managed with the endpoint ``/v1/denylist/private/ip/%s``. As a rule of thumb,\n the reported IP addresses are the ones submitted by devices like honeypots, firewalls, log engines, etc. The denylisted IP addresses are the ones submitted manually by the user from files or indidual items.\n\n### Parameters\nThe endpoint accepts the following parameters in the path:\n- ``ip_address``: (Mandatory) The public IPv4 or IPv6 addresses to be queried.\n\n### Result\nThe result is a JSON object with the following fields:\n- ``self``: the URI to individual reported IP information.\n- ``last_report``: Unix timestamp in milliseconds when the IP address was last reported.\n- ``expiry``: Unix timestamp in milliseconds when the IP address will expire and be removed.\n- ``total_reports``: Total number of reports for the IP address.\n- ``protocol``: IP protocol version of the IP address. Values can be IPV4 or IPV6.\n- ``dataset``: Name of the dataset where the IP address was reported. Must be a value from the ``/v1/dataset/ip`` endpoint.\n- ``tags``: A list of strings with the tags associated to the IP address at the origin device. It helps to classify the origin of the report.\n\n### Errors\n- a `422 Unprocessable Entity` error if the IP address is malformed.\n\nIt will also return the API Global errors described in the API description.',
  operationId:
    'query_an_ip_addresses_reported_by_the_user_v1_denylist_reported_ip__ip_address__get',
  request: {
    params: z.object({
      ip_address: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'ip_address',
            required: true,
            schema: { format: 'ipvanyaddress', title: 'Ip Address', type: 'string' },
          },
          title: 'Ip Address',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: IPListOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const deleteV1DenylistReportedIpIpAddressRoute = createRoute({
  method: 'delete',
  path: '/v1/denylist/reported/ip/{ip_address}',
  tags: ['Denylist data query and management'],
  summary: 'Delete the automatically reported IP address by the user.',
  description:
    '### What\nDelete an IP address that was automatically reported by the user. This option cannot be reverted.\n\n### Parameters\nThe endpoint accepts the following parameters in the path:\n- ``ip_address``: (Mandatory) The public IPv4 or IPv6 addresses to be deleted.\n\n### Result\nA successful result is an empty response with the the HTTP status code ``204 No Content``.\n\n### Errors\n- a `422 Unprocessable Entity` error if the IP address is malformed.\n\nIt will also return the API Global errors described in the API description.',
  operationId:
    'delete_an_ip_address_reported_by_the_user_v1_denylist_reported_ip__ip_address__delete',
  request: {
    params: z.object({
      ip_address: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'ip_address',
            required: true,
            schema: { format: 'ipvanyaddress', title: 'Ip Address', type: 'string' },
          },
          title: 'Ip Address',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postV1GeoRoute = createRoute({
  method: 'post',
  path: '/v1/geo',
  tags: ['Geolocation'],
  summary: 'Get the geolocation data of the IP addresses set.',
  description:
    '### What\nGet the geo location data of all the IP addresses passed as argument. This information includes:\n- Latitude and longitude\n- Time zone\n- Accuracy radius\n- Postal code\n- City name\n- Region\n- Country\n- Country of the service provider\n- Continent\n- Reverse PTR hostnames\n\n### Parameters\nA list of public IPv4 or IPv6 addresses is required in the body of the request.\n\n### Result\nThe result contains a list of the result for each IP address, with the following data set:\n\nThe result is a JSON object with the following structure:\n- ``self``: the URI of the API call\n- ``accuracy_radius``:  The radius in kilometers around the specified location where the IP address is likely to be.\n- ``asn_country_iso_code``: The ISO code of the country of the Autonomous System (AS) owner of the IP address.\n- ``city_geoname_code``:``: City geoname code. The geoname code by [GeoNames](https://en.wikipedia.org/wiki/GeoNames) is a unique identifier assigned to each geographical point on the globe.\n- ``city_name``:``: City name, in english. The developer can use the geoname code to localize the name of the city.\n- ``continent_code``: The continent code. It can be any of the following: AF, AN, AS, EU, NA, OC, SA.\n- ``country_iso_code``: The country ISO 3166-1 alpha-2 code.\n- ``hostnames``: The list of hostnames associated with the IP address obtained from the reverse DNS lookup.\n- ``latitude``: The latitude of the geolocation.\n- ``longitude``: The longitude of the geolocation.\n- ``postal_code``:``: The postal code of the city.\n- ``region_geoname_code``:``: The geoname code of the region.\n- ``region_name``:``: The region name, in english. The developer can use the geoname code to localize the name of the region.\n- ``time_zone``: The name of the time zone.\n\n\n### Errors\nThe endpoint will return the following errors:\n- a `422 Unprocessable Entity` error if the IP address is malformed.\n\nThe private IP addresses will be ignored, if any.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'geolocate_ip_set_v1_geo_post',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .array(z.string())
            .min(1)
            .max(500)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            })
            .openapi({ title: 'Addresses' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The server will return a valid answer in the following cases:',
      content: { 'application/json': { schema: GeoIPCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postV1GeoCsvRoute = createRoute({
  method: 'post',
  path: '/v1/geo/csv',
  tags: ['Geolocation'],
  summary: 'Get the geolocation data of all the IP addresses uploaded.',
  description:
    "### What\nGet the geo location data of all the IP addresses uploaded in a text file. This information includes:\n- Latitude and longitude\n- Time zone\n- Accuracy radius\n- Postal code\n- City name\n- Region\n- Country\n- Country of the service provider\n- Continent\n- Reverse PTR hostnames\n\n### Parameters\n- A text file with a list of public IPv4 or IPv6 addresses.\n- A header `Content-Type: multipart/form-data` is required.\n- (optional) in the query string the parameeter `strict_parse`: If set to `true`, no malformed IP addresses allowed, returning an error. If set to `false`, malformed IP addresses will be ignored.\n\nExample:\n```\ncurl -X 'POST' \\\n  'https://dublin.api.threatjammer.com/v1/geo/csv[?strict_parse=true|false]' \\\n  -H 'accept: application/json' \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -H 'Content-Type: multipart/form-data' \\\n  -F 'csv_file=@YOUR_TEXT_FILE;type=text/csv'\n```\n\n### Result\nThe result contains a list of the result for each IP address, with the following data set:\n\nThe result is a JSON object with the following structure:\n- ``self``: the URI of the API call\n- ``accuracy_radius``:  The radius in kilometers around the specified location where the IP address is likely to be.\n- ``asn_country_iso_code``: The ISO code of the country of the Autonomous System (AS) owner of the IP address.\n- ``city_geoname_code``:``: City geoname code. The geoname code by [GeoNames](https://en.wikipedia.org/wiki/GeoNames) is a unique identifier assigned to each geographical point on the globe.\n- ``city_name``:``: City name, in english. The developer can use the geoname code to localize the name of the city.\n- ``continent_code``: The continent code. It can be any of the following: AF, AN, AS, EU, NA, OC, SA.\n- ``country_iso_code``: The country ISO 3166-1 alpha-2 code.\n- ``hostnames``: The list of hostnames associated with the IP address obtained from the reverse DNS lookup.\n- ``latitude``: The latitude of the geolocation.\n- ``longitude``: The longitude of the geolocation.\n- ``postal_code``:``: The postal code of the city.\n- ``region_geoname_code``:``: The geoname code of the region.\n- ``region_name``:``: The region name, in english. The developer can use the geoname code to localize the name of the region.\n- ``time_zone``: The name of the time zone.\n\n\n### Errors\nThe endpoint will return the following errors:\n- a `422 Unprocessable Entity` error if the IP address is malformed.\n\nThe private IP addresses will be ignored, if any.\n\nWhen the `strict_parse` parameter is set to `true`, the endpoint will return the following errors:\n- a `400 Bad Request`.\n\nIt will also return the API Global errors described in the API description.",
  operationId: 'assess_ip_set_csv_v1_geo_csv_post',
  request: {
    query: z.object({
      strict_parse: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'When `true`, if any IP address entry in the file is malformed, the assessment is canceled. If `false`, the malformed IP addresses are ignored. Default is `false`.',
            in: 'query',
            name: 'strict_parse',
            required: false,
            schema: {
              default: false,
              description:
                'When `true`, if any IP address entry in the file is malformed, the assessment is canceled. If `false`, the malformed IP addresses are ignored. Default is `false`.',
              title: 'Strict Parse',
              type: 'boolean',
            },
          },
          description:
            'When `true`, if any IP address entry in the file is malformed, the assessment is canceled. If `false`, the malformed IP addresses are ignored. Default is `false`.',
          title: 'Strict Parse',
        }),
    }),
    body: {
      content: { 'multipart/form-data': { schema: BodyAssessIpSetCsvV1GeoCsvPostSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The server will return a valid answer in the following cases:',
      content: { 'application/json': { schema: GeoIPCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1GeoIpAddressRoute = createRoute({
  method: 'get',
  path: '/v1/geo/{ip_address}',
  tags: ['Geolocation'],
  summary: 'Get the geo location data of the IP address.',
  description:
    '### What\nGet the geo location data of the IP address passed as argument. This information includes:\n- Latitude and longitude\n- Time zone\n- Accuracy radius\n- Postal code\n- City name\n- Region\n- Country\n- Country of the service provider\n- Continent\n- Reverse PTR hostnames\n\n\n### Parameters\nThe only argument accepted in the query string is a public IPv4 or IPv6 addresses.\n\n### Result\nThe result contains the following set of data:\n\nThe result is a JSON object with the following structure:\n- ``self``: the URI of the API call\n- ``accuracy_radius``:  The radius in kilometers around the specified location where the IP address is likely to be.\n- ``asn_country_iso_code``: The ISO code of the country of the Autonomous System (AS) owner of the IP address.\n- ``city_geoname_code``:``: City geoname code. The geoname code by [GeoNames](https://en.wikipedia.org/wiki/GeoNames) is a unique identifier assigned to each geographical point on the globe.\n- ``city_name``:``: City name, in english. The developer can use the geoname code to localize the name of the city.\n- ``continent_code``: The continent code. It can be any of the following: AF, AN, AS, EU, NA, OC, SA.\n- ``country_iso_code``: The country ISO 3166-1 alpha-2 code.\n- ``hostnames``: The list of hostnames associated with the IP address obtained from the reverse DNS lookup.\n- ``latitude``: The latitude of the geolocation.\n- ``longitude``: The longitude of the geolocation.\n- ``postal_code``:``: The postal code of the city.\n- ``region_geoname_code``:``: The geoname code of the region.\n- ``region_name``:``: The region name, in english. The developer can use the geoname code to localize the name of the region.\n- ``time_zone``: The name of the time zone.\n\n\n### Errors\nThe endpoint will return the following errors:\n- a `400 Bad Request` error if the IP address is not public.\n- a `422 Unprocessable Entity` error if the IP address is malformed.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'geolocate_ip_v1_geo__ip_address__get',
  request: {
    params: z.object({
      ip_address: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'ip_address',
            required: true,
            schema: { format: 'ipvanyaddress', title: 'Ip Address', type: 'string' },
          },
          title: 'Ip Address',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The server will return a valid answer in the following cases:',
      content: { 'application/json': { schema: GeoIPOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1LogIpIdLogchangeIdRoute = createRoute({
  method: 'get',
  path: '/v1/log/ip/id/{logchange_id}',
  tags: ['Data logging'],
  summary: 'Get a log event.',
  description:
    "### What\nObtain the full detail of a specific log change.\n\n### Parameters\nThe endpoint accepts only the following parameters in the path:\n- ``logchange_id``: (Mandatory) A unique integer of the change event log.\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI of the API call\n- ``cidr``: The CIDR affected by the change.\n- ``score``: The score of the IP address when the event happened. It ranges from 0 to 99.\n- ``risk``: The risk of the IP address when the event happened. The allowed values are: LOW, MEDIUM, HIGH. It's a human readable representation of the score.\n- ``dataset``: The URI of the dataset where the change was logged.\n- ``source``: The URI of the data source where the change was found.\n- ``lapse``: The time elapsed between the event found and the moment the source was queried. The possible values are: 1H, 6H, 12H, 1D, 7D, 30D, 90D, 180D, 365D.\n- ``action``: The action that was performed on the IP address. The allowed values are: ADD, DELETE.\n- ``timestamp``: The UNIX timestamp in milliseconds when the change was logged.\n\n\n### Errors\nThe endpoint will return the following errors:\n- a `404 Not Found` error if there is no event in the log with the ``logchange_ID`` given.\n- a `422 Unprocessable Entity` error if the ``logchange_ID`` is malformed.\n\nIt will also return the API Global errors described in the API description.",
  operationId: 'log_change_id_v1_log_ip_id__logchange_id__get',
  request: {
    params: z.object({
      logchange_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'logchange_id',
            required: true,
            schema: { title: 'Logchange Id', type: 'integer' },
          },
          title: 'Logchange Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: IPLogOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1LogIpIpAddressRoute = createRoute({
  method: 'get',
  path: '/v1/log/ip/{ip_address}',
  tags: ['Data logging'],
  summary: 'Get the changes logged in the different datasets of an IP address.',
  description:
    '### What\nObtain a list of changes logged in the different datasets of the IP address given.\n\n### Parameters\nThe endpoint accepts the following parameters in the path:\n- ``ip_address``: (Mandatory) The public IPv4 or IPv6 addresses to be queried.\n\nThe endpoint accepts the following parameters in the query string:\n- ``dataset``: (Optional) Name of the dataset to filter the query. If not given, then all datasets are queried. If given, then only the changes logged in the given dataset are returned. The list of datasets is obtained from the ``/v1/dataset/ip`` endpoint.\n- ``logged_after``: (Optional) The UNIX timestamp in milliseconds of the earliest date to be included in the query. If not given, then the earliest date is the date of the first change logged in the dataset.\n\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI of the API call\n- ``logs``: The list of log changes. Each element of the list is a JSON object of a specific log change with the structure described in the endpoint ``/v1/log/ip/id/logchange_id``.\n### Errors\nThe endpoint will return the following errors:\n- a `400 Bad Request` error if the IP address is not public.\n- a `400 Bad Request` error if the timestamp is in the future.\n- a `400 Bad Request` error if the dataset is not a string that can have numbers, upper and lower case letters, and underscores.\n- a `404 Not Found` error if the dataset was not found.\n- a `422 Unprocessable Entity` error if the IP address is malformed.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'logchanges_ip_v1_log_ip__ip_address__get',
  request: {
    params: z.object({
      ip_address: z
        .string()
        .openapi({
          param: {
            description: 'The IPv4 or IPv6 address to asses the risk',
            in: 'path',
            name: 'ip_address',
            required: true,
            schema: {
              description: 'The IPv4 or IPv6 address to asses the risk',
              format: 'ipvanyaddress',
              title: 'IP Address',
              type: 'string',
            },
          },
          description: 'The IPv4 or IPv6 address to asses the risk',
          title: 'IP Address',
        }),
    }),
    query: z.object({
      dataset: z
        .string()
        .regex(/^([A-Z0-9\_]+)$/)
        .exactOptional()
        .openapi({
          param: {
            description: 'The name of the dataset to restrict the query',
            in: 'query',
            name: 'dataset',
            required: false,
            schema: {
              description: 'The name of the dataset to restrict the query',
              pattern: '^([A-Z0-9\\_]+)$',
              title: 'Dataset',
              type: 'string',
            },
          },
          description: 'The name of the dataset to restrict the query',
          title: 'Dataset',
        }),
      logged_after: z
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
            description:
              'A UNIX timestamp in milliseconds to restrict the results of the query to entries logged after this value.',
            in: 'query',
            name: 'logged_after',
            required: false,
            schema: {
              description:
                'A UNIX timestamp in milliseconds to restrict the results of the query to entries logged after this value.',
              title: 'Entry logged after timestamp',
              type: 'integer',
            },
          },
          description:
            'A UNIX timestamp in milliseconds to restrict the results of the query to entries logged after this value.',
          title: 'Entry logged after timestamp',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: IPLogCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1OriginRoute = createRoute({
  method: 'get',
  path: '/v1/origin',
  tags: ['Origin management in this region'],
  summary: 'Get the information of an origin of the user in the region.',
  description:
    '### What\nObtain the attributes of the origin of the user passed as argument in the selected region. The purpose of this function is to display the information of configuration of the origin and also access to the live data of the origin.\n\nThe origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.\n Hence, the protocol and domain of the origin must be the one where the javascript is loaded.\n\n### Parameters\nIn the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.\n2. Domain: The domain of the origin.\n\nThen, the origin must be urlencoded. Example:\n```\nhttps://example.com\n```\n\n```\nhttps%3A%2F%2Fexample.com\n```\n\nThe querystring must be like this:\n```\n?query=https%3A%2F%2Fexample.com\n```\n\n### Result\nThe result is a JSON object with the following fields:\n- ``self``: the URI to the request to obtain the full details of an origin.\n- ``origin``: the protocol and the domain where the origin token is valid.\n- ``status``: the status of the origin token. The only allowed values are ``ENABLED`` and ``DISABLED``.\n- ``token``: the URI to the request to obtain the token of the origin.\n- ``data``: a JSON object containing all the parameters of the origin as key-value pairs.\n- ``logs``: the URI to the request to obtain the log activity in the origin.\n- ``addresses``: the URI to the request to obtain the list of IP addresses active in the origin.\n- ``cookies``: the URI to the request to obtain the list of cookies active in the origin.\n- ``created_at``: the date and time when the origin token was created in UNIX timestamp in milliseconds.\n- ``updated_at``: the date and time when the origin token was last updated in UNIX timestamp in milliseconds.\n\n### Errors\n- a `404 Not Found` error if the origin token is not found.\n- a `400 Bad Request` error if the origin does not have the correct format.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'query_origin_information_v1_origin_get',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The origin site to query',
            in: 'query',
            name: 'query',
            required: true,
            schema: { description: 'The origin site to query', title: 'Origin', type: 'string' },
          },
          description: 'The origin site to query',
          title: 'Origin',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OriginOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const putV1OriginRoute = createRoute({
  method: 'put',
  path: '/v1/origin',
  tags: ['Origin management in this region'],
  summary: 'Update the configuration of an origin of the user in the region.',
  description:
    "### What\nModify the configuration metadata of the origin of the user in the selected region.\n\nThe origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.\n Hence, the protocol and domain of the origin must be the one where the javascript is loaded.\n\n### Parameters\nIn the body of the request, add the `origin` of the user and the `config` parameter with the following format for the `origin`:1. Protocol: Can be ``http`` or ``https``.\n2. Domain: The domain of the origin.\n\nThe `config` parameter is a JSON object containing the configuration of the origin. It only accepts the existing parameters obtained from the `GET` request of the origin. If the parameter is not present in the `config` object, it will fail to store it. It's not necessary to send all the parameters, only the ones that need to be updated.\n\n### Result\nThe result is the JSON object with all the new values of the origin configuration.\n\n### Errors\n- a `404 Not Found` error if the origin token is not found.\n- a `400 Bad Request` error if the origin does not have the correct format.\n- a `400 Bad Request` error if the `config` parameter is not a JSON object or unknown parameters are sent.\n\nIt will return the API Global errors described in the API description.",
  operationId: 'update_configuration_origin_v1_origin_put',
  request: {
    body: {
      content: { 'application/json': { schema: BodyUpdateConfigurationOriginV1OriginPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .object({})
            .openapi({ title: 'Response Update Configuration Origin V1 Origin Put' }),
        },
      },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1OriginAddressesRoute = createRoute({
  method: 'get',
  path: '/v1/origin/addresses',
  tags: ['Origin management in this region'],
  summary: 'Get the address status of the origin of the user in the region.',
  description:
    '### What\n\nObtain the status that trigger the change in the status of the origin of a specific IP address. The status will also describe the current state of the status and the information that triggered the change.\n\nThe origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.\n Hence, the protocol and domain of the origin must be the one where the javascript is loaded.\n\n### Parameters\nIn the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.\n2. Domain: The domain of the origin.\n\nThen, the origin must be urlencoded. Example:\n```\nhttps://example.com\n```\n\n```\nhttps%3A%2F%2Fexample.com\n```\n\nThe querystring must be like this:\n```\n?query=https%3A%2F%2Fexample.com\n```\n\n### Result\nThe result is a JSON object with the following fields:\n- ``self``: the URI to the request to obtain the full details of the status of an origin.\n- ``addresses``: a list of JSON objects with the following fields:\n    - ``address``: the IP address of the origin.\n    - ``status``: the status of IP address for the given origin.\n    - ``log_id``: the ID of the log that triggered the change in the status of the origin.\n    - ``expiry``: the date and time when the origin status will expire in UNIX timestamp in milliseconds.\n    - ``created_at``: the date and time when the origin status was created in UNIX timestamp in milliseconds.\n    - ``updated_at``: the date and time when the origin status was last updated in UNIX timestamp in milliseconds.\n\n### Errors\n- a `404 Not Found` error if the origin is not found.\n- a `400 Bad Request` error if the origin does not have the correct format.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'query_origin_address_status_information_v1_origin_addresses_get',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The origin site to query',
            in: 'query',
            name: 'query',
            required: true,
            schema: { description: 'The origin site to query', title: 'Origin', type: 'string' },
          },
          description: 'The origin site to query',
          title: 'Origin',
        }),
      page: z
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
            description: 'The page to be returned',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'The page to be returned',
              title: 'Page number',
              type: 'integer',
              'x-min': 1,
            },
          },
          description: 'The page to be returned',
          title: 'Page number',
          'x-min': 1,
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items per page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: {
              default: 20,
              description: 'The number of items per page',
              title: 'Page size',
              type: 'integer',
              'x-max': 100,
              'x-min': 5,
            },
          },
          description: 'The number of items per page',
          title: 'Page size',
          'x-max': 100,
          'x-min': 5,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OriginAddressStatusCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1OriginAllRoute = createRoute({
  method: 'get',
  path: '/v1/origin/all',
  tags: ['Origin management in this region'],
  summary: 'Get the information of the origins of the user in the region.',
  description:
    '### What\nObtain the attributes of all the origins of the user in the selected region. The purpose of this function is to display the information of configuration of the origins and also access to the live data of the origins.\n\nThe origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.\n Hence, the protocol and domain of the origin must be the one where the javascript is loaded.\n\n### Parameters\nNo parameters are required.\n\n### Result\nThe result is a list of JSON objects with the following fields:\n- ``self``: the URI to the request to obtain all the origins of the user.\n- ``origins``: A list of JSON objects with the following fields:\n    - ``self``: the URI to the request to obtain the full details of an origin.\n    - ``origin``: the protocol and the domain where the origin token is valid.\n    - ``status``: the status of the origin token. The only allowed values are ``ENABLED`` and ``DISABLED``.\n    - ``token``: the URI to the request to obtain the token of the origin.\n    - ``data``: a JSON object containing all the parameters of the origin as key-value pairs.\n    - ``logs``: the URI to the request to obtain the log activity in the origin.\n    - ``addresses``: the URI to the request to obtain the list of IP addresses active in the origin.\n    - ``cookies``: the URI to the request to obtain the list of cookies active in the origin.\n    - ``created_at``: the date and time when the origin token was created in UNIX timestamp in milliseconds.\n    - ``updated_at``: the date and time when the origin token was last updated in UNIX timestamp in milliseconds.\n\n### Errors\nIt will return the API Global errors described in the API description.',
  operationId: 'query_all_origin_information_v1_origin_all_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OriginCollectionOutputSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1OriginClientAnalysisRoute = createRoute({
  method: 'get',
  path: '/v1/origin/client/analysis',
  tags: ['Origin management in this region'],
  summary: 'Get the type of clients of the trafffic of the origin.',
  description:
    '### What\nObtain the type of clients of trhe traffic in the specified time range and interval. Thequery will return the number of requests and the different type of CLIENTs and CRAWLERs.\n\nThe origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.\n Hence, the protocol and domain of the origin must be the one where the javascript is loaded.\n\n### Parameters\nIn the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.\n2. Domain: The domain of the origin.\n\nThen, the origin must be urlencoded. Example:\n```\nhttps://example.com\n```\n\n```\nhttps%3A%2F%2Fexample.com\n```\n\nThe querystring must be like this:\n```\n?query=https%3A%2F%2Fexample.com\n```\n\nTo restrict the query to a specific time range, add the following parameters to the querystring:\n- ``from_timestamp``: the start date and time of the analysis in UNIX timestamp in milliseconds.\n- ``to_timestamp``: (Optional) the end date and time of the analysis in UNIX timestamp in milliseconds.\n- ``interval``: (Optional) the interval of the analysis in minutes. The default value is 60 minutes (HOURLY). Possible values are: ``HOURLY``.\n\n### Result\nThe result is a JSON object with the following fields:\n- ``self``: the URI to the request to obtain the traffic client analysis for the origin.\n- ``from_timestamp``: the start date and time of the analysis in UNIX timestamp in milliseconds.\n- ``to_timestamp``: the end date and time of the analysis in UNIX timestamp in milliseconds.\n- ``interval``: the interval of the analysis. Possible values are: ``HOURLY``.\n- ``data``: a JSON list with the following elements each one with the following fields:\n    - ``timestamp``: the date and time of the analysis in UNIX timestamp in milliseconds.\n    - ``total``: the total number of requests.\n    - ``client_*``: the number of requests from a specific client. The possible clients are: ``browser``, ``crawler``, ``email``, ``library``, ``mobile_browser``, ``multimedia_player``, ``offline_browser``, ``unrecognized``, ``ua_anonymizer``, ``validator``, ``wap_browser``.\n    - ``crawler_*``: the number of requests from a specific crawler. The possible crawlers are:``feed_fetcher``, ``link_checker``, ``marketing``, ``screenshot_creator``, ``search_engine_bot``,``site_monitor``, ``speed_tester``, ``tool``, ``uncategorized``, ``unrecognized``, ``virus_scanner``,``vulnerability_scanner``, ``web_scraper``.\n\n### Errors\n- a `404 Not Found` error if the origin token is not found.\n- a `400 Bad Request` error if the origin does not have the correct format.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'query_origin_traffic_client_v1_origin_client_analysis_get',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The origin site to query',
            in: 'query',
            name: 'query',
            required: true,
            schema: { description: 'The origin site to query', title: 'Origin', type: 'string' },
          },
          description: 'The origin site to query',
          title: 'Origin',
        }),
      interval: z
        .literal('HOURLY')
        .openapi({
          param: {
            description: 'The data inteval to aggregate the result dataset',
            in: 'query',
            name: 'interval',
            required: true,
            schema: {
              description: 'The data inteval to aggregate the result dataset',
              enum: ['HOURLY'],
              title: 'Interval',
              type: 'string',
            },
          },
          description: 'The data inteval to aggregate the result dataset',
          title: 'Interval',
        }),
      from_timestamp: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'A UNIX timestamp in milliseconds to restrict the results of the query to entries logged after or equal to this value.',
            in: 'query',
            name: 'from_timestamp',
            required: true,
            schema: {
              description:
                'A UNIX timestamp in milliseconds to restrict the results of the query to entries logged after or equal to this value.',
              title: 'From Timestamp',
              type: 'integer',
            },
          },
          description:
            'A UNIX timestamp in milliseconds to restrict the results of the query to entries logged after or equal to this value.',
          title: 'From Timestamp',
        }),
      to_timestamp: z
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
            description:
              'A UNIX timestamp in milliseconds to restrict the results of the query to entries logged before this value.',
            in: 'query',
            name: 'to_timestamp',
            required: false,
            schema: {
              description:
                'A UNIX timestamp in milliseconds to restrict the results of the query to entries logged before this value.',
              title: 'To Timestamp',
              type: 'integer',
            },
          },
          description:
            'A UNIX timestamp in milliseconds to restrict the results of the query to entries logged before this value.',
          title: 'To Timestamp',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OriginClientAnalysisCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1OriginCookiesRoute = createRoute({
  method: 'get',
  path: '/v1/origin/cookies',
  tags: ['Origin management in this region'],
  summary: 'Get the tracking cookie ID status of the origin of the user in the region.',
  description:
    '### What\n\nObtain the status that trigger the change in the status of the origin of the cookie ID used to track the users. The status will also describe the current state of the status and the information that triggered the change.\n\nThe origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.\n Hence, the protocol and domain of the origin must be the one where the javascript is loaded.\n\n### Parameters\nIn the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.\n2. Domain: The domain of the origin.\n\nThen, the origin must be urlencoded. Example:\n```\nhttps://example.com\n```\n\n```\nhttps%3A%2F%2Fexample.com\n```\n\nThe querystring must be like this:\n```\n?query=https%3A%2F%2Fexample.com\n```\n\n### Result\nThe result is a JSON object with the following fields:\n- ``self``: the URI to the request to obtain the full details of the status of an origin.\n- ``addresses``: a list of JSON objects with the following fields:\n    - ``cookie_id``: the ID of the tracking cookie for the origin.\n    - ``status``: the status of tracking cookie ID for the given origin.\n    - ``log_id``: the ID of the log that triggered the change in the status of the origin.\n    - ``expiry``: the date and time when the origin status will expire in UNIX timestamp in milliseconds.\n    - ``created_at``: the date and time when the origin status was created in UNIX timestamp in milliseconds.\n    - ``updated_at``: the date and time when the origin status was last updated in UNIX timestamp in milliseconds.\n\n### Errors\n- a `404 Not Found` error if the origin is not found.\n- a `400 Bad Request` error if the origin does not have the correct format.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'query_origin_cookie_id_status_information_v1_origin_cookies_get',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The origin site to query',
            in: 'query',
            name: 'query',
            required: true,
            schema: { description: 'The origin site to query', title: 'Origin', type: 'string' },
          },
          description: 'The origin site to query',
          title: 'Origin',
        }),
      page: z
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
            description: 'The page to be returned',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'The page to be returned',
              title: 'Page number',
              type: 'integer',
              'x-min': 1,
            },
          },
          description: 'The page to be returned',
          title: 'Page number',
          'x-min': 1,
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items per page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: {
              default: 20,
              description: 'The number of items per page',
              title: 'Page size',
              type: 'integer',
              'x-max': 100,
              'x-min': 5,
            },
          },
          description: 'The number of items per page',
          title: 'Page size',
          'x-max': 100,
          'x-min': 5,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OriginCookieIdStatusCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1OriginScriptsRoute = createRoute({
  method: 'get',
  path: '/v1/origin/scripts',
  tags: ['Origin management in this region'],
  summary: 'Get the code snippets of an origin of the user in the region.',
  description:
    '### What\nObtain the code snippets of the origin of the user passed as argument in the selected region. The purpose of this function is to help the user to integrate the javascript library in their website with a preconfigured script that contains the origin token.\n\n### Parameters\nIn the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.\n2. Domain: The domain of the origin.\n\nThen, the origin must be urlencoded. Example:\n```\nhttps://example.com\n```\n\n```\nhttps%3A%2F%2Fexample.com\n```\n\nThe querystring must be like this:\n```\n?query=https%3A%2F%2Fexample.com\n```\n\n### Result\nThe result is a JSON object with the following fields:\n- ``self``: the URI to the request to obtain the full details of an origin.\n- ``detection``: code snippet to integrate into the website described in the origin to detect malicious activity.\n\n### Errors\n- a `404 Not Found` error if the origin token is not found.\n- a `400 Bad Request` error if the origin does not have the correct format.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'query_origin_scripts_v1_origin_scripts_get',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The origin site to query',
            in: 'query',
            name: 'query',
            required: true,
            schema: { description: 'The origin site to query', title: 'Origin', type: 'string' },
          },
          description: 'The origin site to query',
          title: 'Origin',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OriginScriptsOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postV1OriginStatusRoute = createRoute({
  method: 'post',
  path: '/v1/origin/status',
  tags: ['Origin management in this region'],
  summary: 'Get the current cookie ID and IP address status of the origin of user in the region.',
  description:
    '### What\n\nObtain the current status of the origin for a given IP address and/or cookie ID. The values can be correlated, but they are not required to be. The status will also describe the following information:\n- `PASS`: The traffic should not be intercepted, but should be analyzed and a positive detection should trigger a change in the status.\n- `BLOCK`: The traffic must be intercepted and redirected to a blocking page. Only a timeout of the IP address or Cookie ID, a solved challenge or a manual status change can change the status.\n- `CHALLENGE`: The traffic must be intercepted and redirected to a page where the user must solve a challenge. If the challenge is succesfully solved the status will change to `PASS`. If the user fails to change the challenge a specific amount of times, the status can change to `BLOCK`.\n- `BYPASS`: The traffic should not be tapped even if it is suspected to be malicious, as long as the timeout has not expired. When the timeout is reached, it should revert to a previous state instead of going to `PASS`.\n- `IGNORE`: Whatever happens to the traffic of the user, it should not be tapped. Once the time expires, it should return to the state PASS.\n\nThe origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.\n Hence, the protocol and domain of the origin must be the one where the javascript is loaded.\n\n### Parameters\nIn the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.\n2. Domain: The domain of the origin.\n\nThen, the origin must be urlencoded. Example:\n```\nhttps://example.com\n```\n\n```\nhttps%3A%2F%2Fexample.com\n```\n\nThe querystring must be like this:\n```\n?query=https%3A%2F%2Fexample.com\n```\n\nThe body should have at least one of the following fields:\n- `address`: The IP address of the user to query.\n- `cookie_id`: The ID of the tracking cookie of the user to query.\n\n### Result\nThe result is a JSON object with the following fields:\n- ``self``: the URI to the request to obtain the full details of the `cookie_id` and `address` status of an origin.\n- ``cookie_id``: a JSON object with the following fields:\n    - ``cookie_id``: the ID of the tracking cookie for the origin.\n    - ``status``: the URI to the status detail of the cookie ID.\n    - ``log_id``: (Optional) the ID of the log that triggered the change in the status of the origin.\n    - ``expiry``: (Optional) the date and time when the origin status will expire in UNIX timestamp in milliseconds.\n    - ``created_at``: (Optional) the date and time when the origin status was created in UNIX timestamp in milliseconds.\n    - ``updated_at``: (Optional) the date and time when the origin status was last updated in UNIX timestamp in milliseconds.\n- ``address``: a JSON object with the following fields:\n    - ``address``: the address for the origin.\n    - ``status``: the URI to the status detail of the cookie ID.\n    - ``log_id``: (Optional) the ID of the log that triggered the change in the status of the origin.\n    - ``expiry``: (Optional) the date and time when the origin status will expire in UNIX timestamp in milliseconds.\n    - ``created_at``: (Optional) the date and time when the origin status was created in UNIX timestamp in milliseconds.\n    - ``updated_at``: (Optional) the date and time when the origin status was last updated in UNIX timestamp in milliseconds.\n\n### Errors\n- a `404 Not Found` error if the origin is not found.\n- a `400 Bad Request` error if the origin does not have the correct format.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'query_origin_status_v1_origin_status_post',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The origin site to query',
            in: 'query',
            name: 'query',
            required: true,
            schema: { description: 'The origin site to query', title: 'Origin', type: 'string' },
          },
          description: 'The origin site to query',
          title: 'Origin',
        }),
    }),
    body: {
      content: { 'application/json': { schema: BodyQueryOriginStatusV1OriginStatusPostSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OriginStatusOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1OriginStatusDetailStatusIdRoute = createRoute({
  method: 'get',
  path: '/v1/origin/status/detail/{status_id}',
  tags: ['Origin management in this region'],
  summary: 'Get detail of a status available in the platform.',
  description:
    '### What\nObtain the description of a status available in the platform.\n\n### Parameters\nA `status_id` parameter in the path of the request:\n- `PASS`\n- `BLOCK`\n- `CHALLENGE`\n- `BYPASS`\n- `IGNORE`\n\n### Result\nThe result is a JSON object with the following fields:\n- ``self``: the URI to the status detail.\n- ``description``: a human readable description of the status.\n- ``cardinality``: The number describing the cardinality of the status.\n\n### Errors\n- a `400 Bad Request` error if the origin status is not any of the available ones.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'query_origin_status_detail_v1_origin_status_detail__status_id__get',
  request: {
    params: z.object({
      status_id: z
        .enum(['pass', 'block', 'challenge', 'bypass', 'ignore'])
        .openapi({
          param: {
            description: 'The status id to query the details',
            in: 'path',
            name: 'status_id',
            required: true,
            schema: {
              description: 'The status id to query the details',
              enum: ['pass', 'block', 'challenge', 'bypass', 'ignore'],
              title: 'Status ID',
              type: 'string',
            },
          },
          description: 'The status id to query the details',
          title: 'Status ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OriginStatusDetailsOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1OriginStatusDetailsRoute = createRoute({
  method: 'get',
  path: '/v1/origin/status/details',
  tags: ['Origin management in this region'],
  summary: 'Get the list of different status available in the platform.',
  description:
    '### What\nObtain the full list and description of the different status available in the platform.\n\n### Parameters\nNo parameters needed.\n\n### Result\nThe result is a JSON list with the following fields:\n- ``self``: the URI to the request to obtain the list.\n- ``list``: a JSON list with the following elements each one with the following fields:\n    - ``self``: the URI to the status detail.\n    - ``description``: a human readable description of the status.\n    - ``cardinality``: The number describing the cardinality of the status.\n\n### Errors\nIt will return the API Global errors described in the API description.',
  operationId: 'query_origin_status_details_v1_origin_status_details_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OriginStatusDetailsCollectionOutputSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1OriginTrafficAnalysisRoute = createRoute({
  method: 'get',
  path: '/v1/origin/traffic/analysis',
  tags: ['Origin management in this region'],
  summary: 'Get the traffic analysis of the origin.',
  description:
    '### What\nObtain the traffic analysis of the origin in the specified time range and interval. Theanalysis will return the number of requests and the anomalies detected like:\n\n- number of requests\n- overall score\n- malicious synthetic traffic (bad bot traffic)\n- IP in a denylist\n- IP in a datacenter\n- user uses a headless webdriver\n- Autonomous System (ASN) of the IP is risky\n- The location of the IP address and the ASN is different\n\nThe origin is a combination of protocol and domain (Ex: https://example.com) and the origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.\n Hence, the protocol and domain of the origin must be the one where the javascript is loaded.\n\n### Parameters\nIn the querystring of the request, add the origin of the user to the `query` parameter with the following format:1. Protocol: Can be ``http`` or ``https``.\n2. Domain: The domain of the origin.\n\nThen, the origin must be urlencoded. Example:\n```\nhttps://example.com\n```\n\n```\nhttps%3A%2F%2Fexample.com\n```\n\nThe querystring must be like this:\n```\n?query=https%3A%2F%2Fexample.com\n```\n\nTo restrict the analysis to a specific time range, add the following parameters to the querystring:\n- ``from_timestamp``: the start date and time of the analysis in UNIX timestamp in milliseconds.\n- ``to_timestamp``: (Optional) the end date and time of the analysis in UNIX timestamp in milliseconds.\n- ``interval``: (Optional) the interval of the analysis in minutes. The default value is 60 minutes (HOURLY). Possible values are: ``HOURLY``.\n\n### Result\nThe result is a JSON object with the following fields:\n- ``self``: the URI to the request to obtain the traffic analysis for the origin.\n- ``from_timestamp``: the start date and time of the analysis in UNIX timestamp in milliseconds.\n- ``to_timestamp``: the end date and time of the analysis in UNIX timestamp in milliseconds.\n- ``interval``: the interval of the analysis. Possible values are: ``HOURLY``.\n- ``data``: a JSON list with the following elements each one with the following fields:\n    - ``timestamp``: the date and time of the analysis in UNIX timestamp in milliseconds.\n    - ``total``: the total number of requests.\n    - ``score_high``: the number of requests with a high score (bad traffic).\n    - ``bots``: the number of requests from bad bots.\n    - ``denylists``: the number of requests from IPs in a denylist.\n    - ``datacenters``: the number of requests from IPs in a datacenter.\n    - ``webdrivers``: the number of requests from IPs using a headless webdriver.\n    - ``asn_risky``: the number of requests from IPs with a risky ASN.\n    - ``network_country_mismatches``: the number of requests from IPs with a different location than the ASN.\n\n### Errors\n- a `404 Not Found` error if the origin token is not found.\n- a `400 Bad Request` error if the origin does not have the correct format.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'query_origin_traffic_analysis_v1_origin_traffic_analysis_get',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The origin site to query',
            in: 'query',
            name: 'query',
            required: true,
            schema: { description: 'The origin site to query', title: 'Origin', type: 'string' },
          },
          description: 'The origin site to query',
          title: 'Origin',
        }),
      interval: z
        .literal('HOURLY')
        .openapi({
          param: {
            description: 'The data inteval to aggregate the result dataset',
            in: 'query',
            name: 'interval',
            required: true,
            schema: {
              description: 'The data inteval to aggregate the result dataset',
              enum: ['HOURLY'],
              title: 'Interval',
              type: 'string',
            },
          },
          description: 'The data inteval to aggregate the result dataset',
          title: 'Interval',
        }),
      from_timestamp: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description:
              'A UNIX timestamp in milliseconds to restrict the results of the query to entries logged after or equal to this value.',
            in: 'query',
            name: 'from_timestamp',
            required: true,
            schema: {
              description:
                'A UNIX timestamp in milliseconds to restrict the results of the query to entries logged after or equal to this value.',
              title: 'From Timestamp',
              type: 'integer',
            },
          },
          description:
            'A UNIX timestamp in milliseconds to restrict the results of the query to entries logged after or equal to this value.',
          title: 'From Timestamp',
        }),
      to_timestamp: z
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
            description:
              'A UNIX timestamp in milliseconds to restrict the results of the query to entries logged before this value.',
            in: 'query',
            name: 'to_timestamp',
            required: false,
            schema: {
              description:
                'A UNIX timestamp in milliseconds to restrict the results of the query to entries logged before this value.',
              title: 'To Timestamp',
              type: 'integer',
            },
          },
          description:
            'A UNIX timestamp in milliseconds to restrict the results of the query to entries logged before this value.',
          title: 'To Timestamp',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OriginTrafficAnalysisCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postV1OriginTokenRoute = createRoute({
  method: 'post',
  path: '/v1/origin_token',
  tags: ['Origin Token management in this region'],
  summary: 'Get the information of an origin token of the user in the region.',
  description:
    '### What\nObtain the attributes of the given origin token of the user in the selected region. The purpose of this function is to show what protocol and domain is linked to the token.\n\nThe origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.\n Hence, the protocol and domain of the origin must be the one where the javascript is loaded.\n\n### Parameters\nThe Origin Token is required in the body of the request in the parameter `origin_token_id`.\n\n### Result\nThe result is a JSON object with the following fields:\n- ``self``: the URI to individual origin token information.\n- ``region_id``: the name of the region where the origin token is valid.\n- ``origin``: the protocol and the domain where the origin token is valid.\n- ``status``: the status of the origin token. The only allowed values are ``ENABLED`` and ``DISABLED``.\n- ``created_at``: the date and time when the origin token was created in UNIX timestamp in milliseconds.\n- ``updated_at``: the date and time when the origin token was last updated in UNIX timestamp in milliseconds.\n\n### Errors\nIt will return the API Global errors described in the API description.',
  operationId: 'query_origin_token_info_v1_origin_token_post',
  request: {
    body: {
      content: { 'application/json': { schema: BodyQueryOriginTokenInfoV1OriginTokenPostSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OriginTokenOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const deleteV1OriginTokenRoute = createRoute({
  method: 'delete',
  path: '/v1/origin_token',
  tags: ['Origin Token management in this region'],
  summary: 'Delete an origin token of the user in the region.',
  description:
    '### What\nDeletes the origin token passed as argument of the user in the selected region. Once the token is deleted, it will no longer be valid and the protocol and domain of the origin will no longer be under protection.\n\nTo delete an origin token, the user must be the owner and the token must be ``DISABLED`` first.\n\n### Parameters\nThe Origin Token is required in the body of the request in the parameter `origin_token_id`.\n\n### Result\nIf successful, the result will be an empty response with a status code of `204 No Content`.\n\n### Errors\nIt will return the API Global errors described in the API description.\n\nIt will also return the following errors:\n- a `404 Not Found` error if the origin token is not found.\n- a `409 Conflict` error if the origin token is not disabled.',
  operationId: 'delete_token_v1_origin_token_delete',
  request: {
    body: {
      content: { 'application/json': { schema: BodyDeleteTokenV1OriginTokenDeleteSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1OriginTokenAllRoute = createRoute({
  method: 'get',
  path: '/v1/origin_token/all',
  tags: ['Origin Token management in this region'],
  summary: 'Get the information of the origin tokens of the user in the region.',
  description:
    '### What\nObtain the attributes of all the origin tokens of the user in the selected region. The purpose of this function is to show what protocol and domain is linked to all the tokens.\n\nThe origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.\n Hence, the protocol and domain of the origin must be the one where the javascript is loaded.\n\n### Parameters\nNo parameters are required.\n\n### Result\nThe result is a list of JSON objects with the following fields:\n- ``self``: the URI to individual origin token information.\n- ``region_id``: the name of the region where the origin token is valid.\n- ``origin``: the protocol and the domain where the origin token is valid.\n- ``status``: the status of the origin token. The only allowed values are ``ENABLED`` and ``DISABLED``.\n- ``created_at``: the date and time when the origin token was created in UNIX timestamp in milliseconds.\n- ``updated_at``: the date and time when the origin token was last updated in UNIX timestamp in milliseconds.\n\n### Errors\nIt will return the API Global errors described in the API description.',
  operationId: 'query_all_origin_tokens_in_the_region_v1_origin_token_all_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OriginTokenCollectionOutputSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const putV1OriginTokenDisableRoute = createRoute({
  method: 'put',
  path: '/v1/origin_token/disable',
  tags: ['Origin Token management in this region'],
  summary: 'Disable a enabled origin token of the user in the region.',
  description:
    '### What\nDisable an enabled origin token passed as argument of the user in the selected region. When a token is enabled, it will participate in the protection of the origin protocol and domain. If the token is disabled, it will not participate in the protection of the origin protocol and domain.\n\nTo disable an origin token, the user must be the owner. If the token is already disabled, the function will not perform any action. If the token is enabled, it will be disabled.\n\n### Parameters\nThe Origin Token is required in the body of the request in the parameter `origin_token_id`.\n\n### Result\nIf successful, the result will be an empty response with a status code of `204 No Content`.\n\n### Errors\nIt will return the API Global errors described in the API description.\n\nIt will also return the following errors:\n- a `404 Not Found` error if the origin token is not found.',
  operationId: 'disable_origin_token_v1_origin_token_disable_put',
  request: {
    body: {
      content: {
        'application/json': { schema: BodyDisableOriginTokenV1OriginTokenDisablePutSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const putV1OriginTokenEnableRoute = createRoute({
  method: 'put',
  path: '/v1/origin_token/enable',
  tags: ['Origin Token management in this region'],
  summary: 'Enable a disabled origin token of the user in the region.',
  description:
    '### What\nEnable a disabled origin token passed as argument of the user in the selected region. When a token is enabled, it will participate in the protection of the origin protocol and domain. If the token is disabled, it will not participate in the protection of the origin protocol and domain.\n\nTo enable an origin token, the user must be the owner. If the token is already enabled, the function will not perform any action. If the token is disabled, it will be enabled.\n\n### Parameters\nThe Origin Token is required in the body of the request in the parameter `origin_token_id`.\n\n### Result\nIf successful, the result will be an empty response with a status code of `204 No Content`.\n\n### Errors\nIt will return the API Global errors described in the API description.\n\nIt will also return the following errors:\n- a `404 Not Found` error if the origin token is not found.',
  operationId: 'enable_origin_token_v1_origin_token_enable_put',
  request: {
    body: {
      content: {
        'application/json': { schema: BodyEnableOriginTokenV1OriginTokenEnablePutSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postV1OriginTokenNewRoute = createRoute({
  method: 'post',
  path: '/v1/origin_token/new',
  tags: ['Origin Token management in this region'],
  summary: 'Create an origin token of the user in the region.',
  description:
    '### What\nCreates a new origin token for the user passing as argument the origin. The origin parameter is the protocol and the domain where the origin token is valid.\n\nThe origin token is a special key used in conjunction with javascript library used for abuse detection. This key is owned by the user and is used to identify the origin of the request.\n Hence, the protocol and domain of the origin must be the one where the javascript is loaded.\n\n### Parameters\nThe origin with the protocol and domain is required in the body of the request in the parameter ``origin``. The allowed protocols are ``https://``, and ``http://``.\n\n### Result\nThe result is a JSON object with the new origin token and the following fields:\n- ``self``: the URI to individual origin token information.\n- ``region_id``: the name of the region where the origin token is valid.\n- ``origin``: the protocol and the domain where the origin token is valid.\n- ``status``: the status of the origin token. The only allowed values are ``ENABLED`` and ``DISABLED``.\n- ``created_at``: the date and time when the origin token was created in UNIX timestamp in milliseconds.\n- ``updated_at``: the date and time when the origin token was last updated in UNIX timestamp in milliseconds.\n\n### Errors\nIt will return the API Global errors described in the API description.\n\nIt will also return the following errors:\n- a `400 Bad Request` error if the origin does not have the correct format.\n- a `409 Conflict` error if the origin token already exists.',
  operationId: 'create_a_new_origin_token_v1_origin_token_new_post',
  request: {
    body: { content: { 'application/json': { schema: OriginTokenInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OriginTokenOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1SourceIpRoute = createRoute({
  method: 'get',
  path: '/v1/source/ip',
  tags: ['Data sources'],
  summary: 'Get the full information of all the source lists for the subscription level given.',
  description:
    '### What\nObtain the full meta information of all the source lists available for the subscription level of the user. A source list is a collection of resources combined together with other sources to create a dataset.\n\n A source list has some unique properties. The most relevant ones are the score and risk. The score is a number **between 0 and 99** describing the probability of the IP address being a malicious one, being **0** means that the IP address is not malicious and is not a threat. Being **99** means that the service behind the IP address is probably malicious an certainly a threat.\n\n Each source list groups several collections of resource by the lapse of time or time range that they are related to according to their age. Each group by time range has a score and a risk.\n\n### Parameters\nThe endpoint does not accept any parameter. The subscription level is obtained from the token provided in the header.\n\n### Result\nThe result is a JSON object with a self reference and a list of JSON objects with the following fields:\n- ``self``: the URI to individual source list information.\n- ``dataset``: the URI to the dataset that aggregates the resources of this list.\n- ``name``: the unique name of the source list. Must be uppercase letters, numbers and underscores.\n- ``description``: a human readable long description of the source list.\n- ``source``: Origin of the list.\n- ``url``: The URL where the source list was found.\n- ``refresh``: The refresh period of the source list.\n- ``minimum_score``: The minimum score found in the different source list time ranges. Is in the range 0-99.\n- ``maximum_score``: The maximum score found in the different source list time ranges. Is in the range 0-99.\n- ``minimum_risk``: The minimum human readable risk score found in the different source list time ranges. Can be UNKNOWN, LOW, MEDIUM or HIGH.\n- ``maximum_risk``: The maximum human readable risk score found in the different source list time ranges. Can be UNKNOWN, LOW, MEDIUM or HIGH.\n- ``time_range``: the list of URIs pointing to the different source list time ranges information.\n- ``updated_at``: The UNIX timestamp in milliseconds of last update of the source list.\n\n### Errors\nIt will return the API Global errors described in the API description.',
  operationId: 'get_all_sources_v1_source_ip_get',
  responses: {
    200: {
      description: 'The server will return a valid answer in the following cases:',
      content: { 'application/json': { schema: SourceCollectionOutputSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1SourceIpSourceRoute = createRoute({
  method: 'get',
  path: '/v1/source/ip/{source}',
  tags: ['Data sources'],
  summary: 'Get the full information of the source list given as argument.',
  description:
    '### What\nObtain the full meta information of the source list given as argument. A source list is a collection of resources combined together with other sources to create a dataset. A source list has some unique properties. The most relevant ones are the score and risk. The score is a number **between 0 and 99** describing the probability of the IP address being a malicious one, being **0** means that the IP address is not malicious and is not a threat. Being **99** means that the service behind the IP address is probably malicious an certainly a threat.\n\n Each source list groups several collections of resource by the lapse of time or time range that they are related to according to their age. Each group by time range has a score and a risk.\n\n### Parameters\nThe endpoint accepts only the following parameter in the path:\n- ``source``: (Mandatory) The code name that identifies uniquely the source list in the platform. It must be composed of uppercase letters, numbers and underscores.\n\n### Result\nThe result is a JSON object with the following fields:\n- ``self``: the URI to individual source list information.\n- ``dataset``: the URI to the dataset that aggregates the resources of this list.\n- ``name``: the unique name of the source list. Must be uppercase letters, numbers and underscores.\n- ``description``: a human readable long description of the source list.\n- ``source``: Origin of the list.\n- ``url``: The URL where the source list was found.\n- ``refresh``: The refresh period of the source list.\n- ``minimum_score``: The minimum score found in the different source list time ranges. Is in the range 0-99.\n- ``maximum_score``: The maximum score found in the different source list time ranges. Is in the range 0-99.\n- ``minimum_risk``: The minimum human readable risk score found in the different source list time ranges. Can be UNKNOWN, LOW, MEDIUM or HIGH.\n- ``maximum_risk``: The maximum human readable risk score found in the different source list time ranges. Can be UNKNOWN, LOW, MEDIUM or HIGH.\n- ``time_range``: the list of URIs pointing to the different source list time ranges information.\n- ``updated_at``: The UNIX timestamp in milliseconds of last update of the source list.\n\n### Errors\n- a `404 Not Found` error if the source list code name was not found.\n- a `422 Unprocessable Entity` error if source list code name does not follow the naming convention.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'get_source_info_v1_source_ip__source__get',
  request: {
    params: z.object({
      source: z
        .string()
        .regex(/^([A-Z0-9\_]+)$/)
        .openapi({
          param: {
            in: 'path',
            name: 'source',
            required: true,
            schema: { pattern: '^([A-Z0-9\\_]+)$', title: 'Source', type: 'string' },
          },
          title: 'Source',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The server will return a valid answer in the following cases:',
      content: { 'application/json': { schema: V1ModelsSourceSourceOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1SourceIpSourceRangeTimeRangeRoute = createRoute({
  method: 'get',
  path: '/v1/source/ip/{source}/range/{time_range}',
  tags: ['Data sources'],
  summary: 'Get the information of the source list given for a specific time range.',
  description:
    '### What\nObtain the meta information of the source list and the time range given as arguments. A source list is a collection of resources combined together with other sources to create a dataset. A source list has some unique properties. The most relevant ones are the score and risk. The score is a number **between 0 and 99** describing the probability of the IP address being a malicious one, being **0** means that the IP address is not malicious and is not a threat. Being **99** means that the service behind the IP address is probably malicious an certainly a threat.\n\n The time ranges or lapse of time of each source are how the resources are stored according to their age. Each group by time range has a score and a risk.\n\n### Parameters\nThe endpoint accepts the following two parameters in the path:\n- ``source``: (Mandatory) The code name that identifies uniquely the source list in the platform. It must be composed of uppercase letters, numbers and underscores.\n- ``time_range``: (Mandatory) The code name that identifies uniquely the time ranges. Must be: 1H, 6H, 12H, 1D, 7D, 30D, 90D, 180D y 365D.\n\n### Result\nThe result is a JSON object with the following fields:\n- ``self``: the URI to individual source list and time range information.\n- ``source``: the URI to individual source list information.\n- ``items``: Number of elements in the source list in the time range given.\n- ``lapse``: The lapse of time or time range of the specific source list. Can be 1H, 6H, 12H, 1D, 7D, 30D, 90D, 180D or 365D.\n- ``score``: The score found in the source list time range. Is in the range 0-99.\n- ``risk``: The human readable risk score found in the source list time range. Can be UNKNOWN, LOW, MEDIUM or HIGH.\n- ``updated_at``: The UNIX timestamp in milliseconds of last update of the source list.\n\n### Errors\n- a `404 Not Found` error if the source list code name was not found.\n- a `404 Not Found` error if the time range was not found.\n- a `422 Unprocessable Entity` error if source list code name or time ranges does not follow the naming convention.\n\nIt will return the API Global errors described in the API description.',
  operationId: 'get_source_and_timerange_info_v1_source_ip__source__range__time_range__get',
  request: {
    params: z.object({
      source: z
        .string()
        .regex(/^([A-Z0-9\_]+)$/)
        .openapi({
          param: {
            in: 'path',
            name: 'source',
            required: true,
            schema: { pattern: '^([A-Z0-9\\_]+)$', title: 'Source', type: 'string' },
          },
          title: 'Source',
        }),
      time_range: z
        .enum(['1H', '6H', '12H', '1D', '7D', '30D', '90D', '180D', '365D'])
        .openapi({
          param: {
            in: 'path',
            name: 'time_range',
            required: true,
            schema: {
              enum: ['1H', '6H', '12H', '1D', '7D', '30D', '90D', '180D', '365D'],
              title: 'Time Range',
              type: 'string',
            },
          },
          title: 'Time Range',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The server will return a valid answer in the following cases:',
      content: { 'application/json': { schema: SourceTimeRangeOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1TokenRoute = createRoute({
  method: 'get',
  path: '/v1/token',
  tags: ['Authentication Token management in this region'],
  summary: "Get the information of the user's token in the region.",
  description:
    "### What\nObtain the list of all the token attributes of the current user in the selected region. The purpose of this function is to show the current values of the user's quota.\n\n### Parameters\nNo parameters are required. The token is obtained automatically from the `Bearer` in the header.\n\n### Result\nThe result is a JSON object with the following fields:\n- ``self``: the URI to individual token information.\n- ``region_id``: the name of the region where the token is valid.\n- ``last_month_bucket_init_value``: the initial value of the monthly bucket.\n- ``last_month_bucket_value``: the current value of consumed quota in the monthly bucket.\n- ``last_month_bucket_refresh``: Unix timestamp in milliseconds of the next monthly bucket reset.\n- ``last_minute_bucket_init_value``: the initial value of the per minute bucket.\n- ``last_minute_bucket_value``: the current value of consumed quota in the per minute bucket.\n- ``last_minute_bucket_refresh``: Unix timestamp in milliseconds of the next per minute bucket reset.\n- ``last_minute_bucket_refill_ratio``: the number of tokens to add every second to the per minute bucket.\n- ``status``: the status of the token. The only allowed value is ``ENABLED``.\n- ``created_at``: the date and time when the token was created in UNIX timestamp in milliseconds.\n- ``updated_at``: the date and time when the token was last updated in UNIX timestamp in milliseconds.\n\n### Errors\nIt will return the API Global errors described in the API description.",
  operationId: 'query_token_info_v1_token_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TokenOutputSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1TokenActivityRoute = createRoute({
  method: 'get',
  path: '/v1/token/activity',
  tags: ['Authentication Token management in this region'],
  summary: 'Get the activity information of the token in the region.',
  description:
    '### What\nObtain the list of all the activity events of the current user in the selected region. The purpose of this function is to show what actions performed a user with the specific token.\n\n### Parameters\nThe following pagination parameters are required as query string parameters:\n- ``page``: (Optional) the page number to retrieve. The first page is 1. Default is 1.\n- ``page_size``: (Optional) the number of items per page. Default is 20.\n\nThe token is obtained automatically from the `Bearer` in the header.\n\n### Result\nThe result is a JSON object with the following fields:\n- ``self``: the URI to all activities of the token.\n- ``activities``: a list of activities performed by the user with the token.\n    - ``self``: the URI to individual activity information.\n    - ``event``: ID of the reference of the event type.\n    - ``description``: Human readable description of the event.\n    - ``data``: the payload of the event. It can be empty.\n    - ``source``: A JSON object with the following fields:\n        - ``address``: the IP address of the client.\n        - ``ua_string``: the user agent string of the client.\n        - ``status_code``: the HTTP status code of the response.\n        - ``uri``: the URI of the request.\n        - ``body``: the body of the request.\n        - ``method``: the HTTP method of the request.\n    - ``created_at``: the date and time when the token was created in UNIX timestamp in milliseconds.\n\n### Errors\nIt will return the API Global errors described in the API description.',
  operationId: 'query_token_activity_v1_token_activity_get',
  request: {
    query: z.object({
      page: z
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
            description: 'The page to be returned',
            in: 'query',
            name: 'page',
            required: false,
            schema: {
              default: 1,
              description: 'The page to be returned',
              title: 'Page number',
              type: 'integer',
              'x-min': 1,
            },
          },
          description: 'The page to be returned',
          title: 'Page number',
          'x-min': 1,
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items per page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: {
              default: 20,
              description: 'The number of items per page',
              title: 'Page size',
              type: 'integer',
              'x-max': 100,
              'x-min': 5,
            },
          },
          description: 'The number of items per page',
          title: 'Page size',
          'x-max': 100,
          'x-min': 5,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ActivityCollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postV1UaRoute = createRoute({
  method: 'post',
  path: '/v1/ua',
  tags: ['User Agent'],
  summary: 'Get the information found in a set of User Agents.',
  description:
    '### What\nGet the information found in the list of User Agents passed as argument. This information includes:\n- Type\n- Render Engine\n- Version\n- Vendor\n- Operating System\n- Device\n- How common is the agent worldwide\n\n### Parameters\nA list of User Agents are required in the body of the request.\n\n### Result\nThe result contains a list of the result for each User Agent, with the following data set:\n\nThe result is a JSON object with the following structure:\n- ``self``: the URI of the API call\n- ``string``:  The full user agent string passed as argument.\n- ``classification``: The classification of the user agent. It can be one of the following: ``CRAWLER``, ``CLIENT``, ``UNKNOWN``.\n- ``type``: An URI to the type of user agent used to identify the client (browser, bot, crawler, etc.).\n- ``agent``: Name of the agent and the version, if any.\n- ``engine``: Agent render engine.\n- ``version``: Version of the agent.\n- ``latest``: Latests known version of the agent.\n- ``family``: URI to the family of the agent.\n- ``vendor``: URI to the vendor or company that produces the agent.\n- ``os``: URI to the operating system used by the agent.\n- ``device``: URI to the device used by the agent.\n- ``frequent``: If the agent is frequently used worlwide or not. The values are ``COMMON``, ``RARE``, and ``UNKNOWN``.\n\n\n### Errors\nThe endpoint will return the API Global errors described in the API description.',
  operationId: 'parse_user_agents_v1_ua_post',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .array(z.string())
            .min(1)
            .max(100)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            })
            .openapi({ title: 'User Agents' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The server will return a valid answer in the following cases:',
      content: { 'application/json': { schema: UACollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postV1UaCsvRoute = createRoute({
  method: 'post',
  path: '/v1/ua/csv',
  tags: ['User Agent'],
  summary: 'Get the information found in the set of User Agents uploaded.',
  description:
    "### What\nGet the information found in the list of User Agents uploaded as a CSV file. This information includes:\n- Type\n- Render Engine\n- Version\n- Vendor\n- Operating System\n- Device\n- How common is the agent worldwide\n\n### Parameters\n- A text file with a list of User Agents.\n- A header `Content-Type: multipart/form-data` is required.\n\nExample:\n```\ncurl -X 'POST' \\\n  'https://dublin.api.threatjammer.com/v1/ua/csv' \\\n  -H 'accept: application/json' \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -H 'Content-Type: multipart/form-data' \\\n  -F 'csv_file=@YOUR_TEXT_FILE;type=text/csv'\n```\n\n### Result\nThe result contains a list of the result for each User Agent, with the following data set:\n\nThe result is a JSON object with the following structure:\n- ``self``: the URI of the API call\n- ``string``:  The full user agent string passed as argument.\n- ``classification``: The classification of the user agent. It can be one of the following: ``CRAWLER``, ``CLIENT``, ``UNKNOWN``.\n- ``type``: An URI to the type of user agent used to identify the client (browser, bot, crawler, etc.).\n- ``agent``: Name of the agent and the version, if any.\n- ``engine``: Agent render engine.\n- ``version``: Version of the agent.\n- ``latest``: Latests known version of the agent.\n- ``family``: URI to the family of the agent.\n- ``vendor``: URI to the vendor or company that produces the agent.\n- ``os``: URI to the operating system used by the agent.\n- ``device``: URI to the device used by the agent.\n- ``frequent``: If the agent is frequently used worlwide or not. The values are ``COMMON``, ``RARE``, and ``UNKNOWN``.\n\n\n### Errors\nThe endpoint will return the API Global errors described in the API description.",
  operationId: 'parse_user_agents_csv_v1_ua_csv_post',
  request: {
    body: {
      content: { 'multipart/form-data': { schema: BodyParseUserAgentsCsvV1UaCsvPostSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The server will return a valid answer in the following cases:',
      content: { 'application/json': { schema: UACollectionOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1UaDeviceCodeRoute = createRoute({
  method: 'get',
  path: '/v1/ua/device/{code}',
  tags: ['User Agent'],
  summary: 'Get the information of the device of a user agent.',
  description:
    '### What\nObtain the details of a device of a User Agent.\n\n### Parameters\nThe endpoint accepts only the following parameter in the path:\n- ``code``: (Mandatory) The code that identifies uniquely the device origin of a User Agent. The value must be an alphanumeric upper case string.\n\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI to the device.\n- ``description``: the human readable description of the device.\n- ``code``: the internal code of the device in the system.\n\n### Errors\n- a `422 Unprocessable Entity` error if the code is not one of the available.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'query_device_by_code_v1_ua_device__code__get',
  request: {
    params: z.object({
      code: z
        .string()
        .regex(/^[A-Z0-9_]+/)
        .openapi({
          param: {
            in: 'path',
            name: 'code',
            required: true,
            schema: { pattern: '^[A-Z0-9_]+', title: 'Code', type: 'string' },
          },
          title: 'Code',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DeviceOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1UaFamilyCodeRoute = createRoute({
  method: 'get',
  path: '/v1/ua/family/{code}',
  tags: ['User Agent'],
  summary: 'Get the information of the family of a user agent.',
  description:
    '### What\nObtain the details of a family of a User Agent.\n\n### Parameters\nThe endpoint accepts only the following parameter in the path:\n- ``code``: (Mandatory) The code that identifies uniquely the family of a User Agent. The value must be an alphanumeric upper case string.\n\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI to the family.\n- ``description``: the human readable description of the famly.\n- ``code``: the internal code of the family in the system.\n\n### Errors\n- a `422 Unprocessable Entity` error if the code is not one of the available.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'query_family_by_code_v1_ua_family__code__get',
  request: {
    params: z.object({
      code: z
        .string()
        .regex(/^[A-Z0-9_]+/)
        .openapi({
          param: {
            in: 'path',
            name: 'code',
            required: true,
            schema: { pattern: '^[A-Z0-9_]+', title: 'Code', type: 'string' },
          },
          title: 'Code',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: FamilyOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1UaOsCodeRoute = createRoute({
  method: 'get',
  path: '/v1/ua/os/{code}',
  tags: ['User Agent'],
  summary: 'Get the information of the Operating System of a user agent.',
  description:
    '### What\nObtain the details of the Operating System of a User Agent.\n\n### Parameters\nThe endpoint accepts only the following parameter in the path:\n- ``code``: (Mandatory) The code that identifies uniquely the Operating System at the origin of a User Agent. The value must be an alphanumeric upper case string.\n\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI to the OS.\n- ``description``: the human readable description of the OS.\n- ``code``: the internal code of the OS in the system.\n- ``family``: the family of the OS.\n- ``vendor``: the vendor or manufacturer of the OS.\n\n### Errors\n- a `422 Unprocessable Entity` error if the code is not one of the available.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'query_os_by_code_v1_ua_os__code__get',
  request: {
    params: z.object({
      code: z
        .string()
        .regex(/^[A-Z0-9_]+/)
        .openapi({
          param: {
            in: 'path',
            name: 'code',
            required: true,
            schema: { pattern: '^[A-Z0-9_]+', title: 'Code', type: 'string' },
          },
          title: 'Code',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: OSOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1UaTypeCodeRoute = createRoute({
  method: 'get',
  path: '/v1/ua/type/{code}',
  tags: ['User Agent'],
  summary: 'Get the information of the type of a user agent.',
  description:
    '### What\nObtain the details of a type of a User Agent.\n\n### Parameters\nThe endpoint accepts only the following parameter in the path:\n- ``code``: (Mandatory) The code that identifies uniquely the type of a User Agent. The value must be an alphanumeric upper case string.\n\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI to the type.\n- ``description``: the human readable description of the type.\n- ``code``: the internal code of the type in the system.\n- ``type``: the type of the User Agent. Can be ``INTERACTIVE``, ``CRAWLER`` or ``UNKNOWN`` if the type is not known.\n\n### Errors\n- a `422 Unprocessable Entity` error if the code is not one of the available.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'query_type_by_code_v1_ua_type__code__get',
  request: {
    params: z.object({
      code: z
        .string()
        .regex(/^[A-Z0-9_]+/)
        .openapi({
          param: {
            in: 'path',
            name: 'code',
            required: true,
            schema: { pattern: '^[A-Z0-9_]+', title: 'Code', type: 'string' },
          },
          title: 'Code',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TypeOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1UaVendorCodeRoute = createRoute({
  method: 'get',
  path: '/v1/ua/vendor/{code}',
  tags: ['User Agent'],
  summary: 'Get the information of the vendor of a user agent.',
  description:
    '### What\nObtain the details of a vendor of a User Agent.\n\n### Parameters\nThe endpoint accepts only the following parameter in the path:\n- ``code``: (Mandatory) The code that identifies uniquely the vendor or manufacurer of a User Agent. The value must be an alphanumeric upper case string.\n\n\n### Result\nThe result is a JSON object with the following structure:\n- ``self``: the URI to the vendor.\n- ``description``: the human readable description of the vendor.\n- ``code``: the internal code of the vendor in the system.\n\n### Errors\n- a `422 Unprocessable Entity` error if the code is not one of the available.\n\nIt will also return the API Global errors described in the API description.',
  operationId: 'query_vendor_by_code_v1_ua_vendor__code__get',
  request: {
    params: z.object({
      code: z
        .string()
        .regex(/^[A-Z0-9_]+/)
        .openapi({
          param: {
            in: 'path',
            name: 'code',
            required: true,
            schema: { pattern: '^[A-Z0-9_]+', title: 'Code', type: 'string' },
          },
          title: 'Code',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: VendorOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const getV1UaUserAgentUrlencodedRoute = createRoute({
  method: 'get',
  path: '/v1/ua/{user_agent_urlencoded}',
  tags: ['User Agent'],
  summary: 'Get the information found in an User Agent.',
  description:
    '### What\nGet the information found in the User Agent passed as argument. This information includes:\n- Type\n- Render Engine\n- Version\n- Vendor\n- Operating System\n- Device\n- How common is the agent worldwide\n\n\n### Parameters\nThe only argument accepted in the query string is an URL encoded User Agent string.\n\n### Result\nThe result contains the following set of data:\n\nThe result is a JSON object with the following structure:\n- ``self``: the URI of the API call\n- ``string``:  The full user agent string passed as argument.\n- ``classification``: The classification of the user agent. It can be one of the following: ``CRAWLER``, ``CLIENT``, ``UNKNOWN``.\n- ``type``: An URI to the type of user agent used to identify the client (browser, bot, crawler, etc.).\n- ``agent``: Name of the agent and the version, if any.\n- ``engine``: Agent render engine.\n- ``version``: Version of the agent.\n- ``latest``: Latests known version of the agent.\n- ``family``: URI to the family of the agent.\n- ``vendor``: URI to the vendor or company that produces the agent.\n- ``os``: URI to the operating system used by the agent.\n- ``device``: URI to the device used by the agent.\n- ``frequent``: If the agent is frequently used worlwide or not. The values are ``COMMON``, ``RARE``, and ``UNKNOWN``.\n\n\n### Errors\nThe endpoint will return the API Global errors described in the API description.',
  operationId: 'parse_user_agent_v1_ua__user_agent_urlencoded__get',
  request: {
    params: z.object({
      user_agent_urlencoded: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'user_agent_urlencoded',
            required: true,
            schema: { title: 'User Agent Urlencoded', type: 'string' },
          },
          title: 'User Agent Urlencoded',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The server will return a valid answer in the following cases:',
      content: { 'application/json': { schema: UAOutputSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})
