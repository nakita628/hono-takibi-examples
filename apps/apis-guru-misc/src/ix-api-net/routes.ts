import { createRoute, z } from '@hono/zod-openapi'

const AllowMemberJoiningRulePartialSchema = z
  .object({
    capacity_max: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional rate limit which has precedence over\nthe capacity set in the network service config.',
      }),
    capacity_min: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Require an optional minimum capacity to join\nthe network service.',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account to which access to the\nnetwork service should be granted or denied.\n',
        example: '2381982',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    id: z.string().exactOptional(),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_service: z.string().exactOptional(),
    type: z.string().openapi({ example: 'allow' }),
  })
  .openapi({
    description: 'A rule for members joining a private vlan',
    required: ['type'],
    title: 'PartialAllowMemberJoiningRule',
  })
  .openapi('AllowMemberJoiningRulePartial')

const AllowMemberJoiningRuleSchema = AllowMemberJoiningRulePartialSchema.and(
  z
    .object({})
    .openapi({
      required: ['managing_account', 'consuming_account', 'id', 'network_service', 'type'],
      title: 'AllowMemberJoiningRule',
    }),
).openapi('AllowMemberJoiningRule')

const DenyMemberJoiningRulePartialSchema = z
  .object({
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account to which access to the\nnetwork service should be granted or denied.\n',
        example: '2381982',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    id: z.string().exactOptional(),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_service: z.string().exactOptional(),
    type: z.string().openapi({ example: 'deny' }),
  })
  .openapi({
    description: 'A rule for members joining a private vlan',
    required: ['type'],
    title: 'PartialDenyMemberJoiningRule',
  })
  .openapi('DenyMemberJoiningRulePartial')

const DenyMemberJoiningRuleSchema = DenyMemberJoiningRulePartialSchema.and(
  z
    .object({})
    .openapi({
      required: ['managing_account', 'consuming_account', 'id', 'network_service', 'type'],
      title: 'DenyMemberJoiningRule',
    }),
).openapi('DenyMemberJoiningRule')

type MemberJoiningRuleType =
  | z.infer<typeof AllowMemberJoiningRuleSchema>
  | z.infer<typeof DenyMemberJoiningRuleSchema>

type MemberJoiningRulePartialType =
  | z.infer<typeof AllowMemberJoiningRulePartialSchema>
  | z.infer<typeof DenyMemberJoiningRulePartialSchema>

const AllowMemberJoiningRuleRequestPartialSchema = z
  .object({
    capacity_max: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional rate limit which has precedence over\nthe capacity set in the network service config.',
      }),
    capacity_min: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Require an optional minimum capacity to join\nthe network service.',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account to which access to the\nnetwork service should be granted or denied.\n',
        example: '2381982',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_service: z.string().exactOptional(),
    type: z.string().openapi({ example: 'allow' }),
  })
  .openapi({
    description: 'A new vlan member joining rule',
    required: ['type'],
    title: 'PartialAllowMemberJoiningRuleRequest',
  })
  .openapi('AllowMemberJoiningRuleRequestPartial')

const AllowMemberJoiningRuleRequestSchema = AllowMemberJoiningRuleRequestPartialSchema.and(
  z
    .object({})
    .openapi({
      required: ['managing_account', 'consuming_account', 'network_service', 'type'],
      title: 'AllowMemberJoiningRuleRequest',
    }),
).openapi('AllowMemberJoiningRuleRequest')

const DenyMemberJoiningRuleRequestPartialSchema = z
  .object({
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account to which access to the\nnetwork service should be granted or denied.\n',
        example: '2381982',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_service: z.string().exactOptional(),
    type: z.string().openapi({ example: 'deny' }),
  })
  .openapi({
    description: 'A new vlan member joining rule',
    required: ['type'],
    title: 'PartialDenyMemberJoiningRuleRequest',
  })
  .openapi('DenyMemberJoiningRuleRequestPartial')

const DenyMemberJoiningRuleRequestSchema = DenyMemberJoiningRuleRequestPartialSchema.and(
  z
    .object({})
    .openapi({
      required: ['managing_account', 'consuming_account', 'network_service', 'type'],
      title: 'DenyMemberJoiningRuleRequest',
    }),
).openapi('DenyMemberJoiningRuleRequest')

type MemberJoiningRuleRequestType =
  | z.infer<typeof AllowMemberJoiningRuleRequestSchema>
  | z.infer<typeof DenyMemberJoiningRuleRequestSchema>

type MemberJoiningRuleRequestPartialType =
  | z.infer<typeof AllowMemberJoiningRuleRequestPartialSchema>
  | z.infer<typeof DenyMemberJoiningRuleRequestPartialSchema>

const AllowMemberJoiningRuleUpdatePartialSchema = z
  .object({
    capacity_max: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional rate limit which has precedence over\nthe capacity set in the network service config.',
      }),
    capacity_min: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Require an optional minimum capacity to join\nthe network service.',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account to which access to the\nnetwork service should be granted or denied.\n',
        example: '2381982',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    type: z.string().openapi({ example: 'allow' }),
  })
  .openapi({
    description: 'A vlan member joining rule update',
    required: ['type'],
    title: 'PartialAllowMemberJoiningRuleUpdate',
  })
  .openapi('AllowMemberJoiningRuleUpdatePartial')

const AllowMemberJoiningRuleUpdateSchema = AllowMemberJoiningRuleUpdatePartialSchema.and(
  z
    .object({})
    .openapi({
      required: ['managing_account', 'consuming_account', 'type'],
      title: 'AllowMemberJoiningRuleUpdate',
    }),
).openapi('AllowMemberJoiningRuleUpdate')

const DenyMemberJoiningRuleUpdatePartialSchema = z
  .object({
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account to which access to the\nnetwork service should be granted or denied.\n',
        example: '2381982',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    type: z.string().openapi({ example: 'deny' }),
  })
  .openapi({
    description: 'A vlan member joining rule update',
    required: ['type'],
    title: 'PartialDenyMemberJoiningRuleUpdate',
  })
  .openapi('DenyMemberJoiningRuleUpdatePartial')

const DenyMemberJoiningRuleUpdateSchema = DenyMemberJoiningRuleUpdatePartialSchema.and(
  z
    .object({})
    .openapi({
      required: ['managing_account', 'consuming_account', 'type'],
      title: 'DenyMemberJoiningRuleUpdate',
    }),
).openapi('DenyMemberJoiningRuleUpdate')

type MemberJoiningRuleUpdateType =
  | z.infer<typeof AllowMemberJoiningRuleUpdateSchema>
  | z.infer<typeof DenyMemberJoiningRuleUpdateSchema>

type MemberJoiningRuleUpdatePartialType =
  | z.infer<typeof AllowMemberJoiningRuleUpdatePartialSchema>
  | z.infer<typeof DenyMemberJoiningRuleUpdatePartialSchema>

const IXPSpecificFeatureFlagPartialSchema = z
  .object({
    description: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        description: 'The description of the feature flag.\n',
        example: 'RPKI reject invalid filtering is available',
      }),
    name: z
      .string()
      .max(20)
      .exactOptional()
      .openapi({ description: 'The name of the feature flag.\n', example: 'RPKI' }),
  })
  .openapi({
    description: 'IXP-Specific Feature Flag',
    title: 'PartialIXPSpecificFeatureFlag',
    required: [],
  })
  .openapi('IXPSpecificFeatureFlagPartial')

const IXPSpecificFeatureFlagSchema = IXPSpecificFeatureFlagPartialSchema.and(
  z.object({}).openapi({ required: ['name', 'description'], title: 'IXPSpecificFeatureFlag' }),
).openapi('IXPSpecificFeatureFlag')

const RouteServerNetworkFeaturePartialSchema = z
  .object({
    address_families: z
      .array(z.enum(['af_inet', 'af_inet6']))
      .exactOptional()
      .openapi({
        description:
          'When creating a route server feature config, remember\nto specify which address family or families to use:\n\nIf the route server network feature only supports `af_inet`,\nthen the `as_set_v4` in the network feature config is required.\n\nIf only `af_inet6` is supported, then the `as_set_v6` is required.\n\nIf both `af_inet` and `af_inet6` are supported, either\n`as_set_v4` or `as_set_v6` is required, but both can be provided\nin the network service config.\n',
        example: ['af_inet'],
      }),
    asn: z.int().min(0).exactOptional(),
    available_bgp_session_types: z
      .array(z.enum(['active', 'passive']))
      .exactOptional()
      .openapi({
        description: 'The route server provides the following session modes.\n',
        example: ['passive'],
      }),
    flags: z
      .array(IXPSpecificFeatureFlagSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of IXP specific feature flags. This can be used\nto see if e.g. RPKI hard filtering is available.',
      }),
    fqdn: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({ description: 'The FQDN of the route server.\n', example: 'rs1.moon-ix.net' }),
    id: z.string().exactOptional(),
    ip_v4: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IPv4 address in [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation)\nnotation.\n',
        example: '23.42.0.1',
      }),
    ip_v6: z
      .string()
      .exactOptional()
      .openapi({
        description: 'IPv6 address in hexadecimal colon separated notation.\n',
        example: '2001:23:42::1',
      }),
    looking_glass_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The url of the looking glass.\n',
        example: 'https://lg.moon-ix.net/rs1',
      }),
    name: z.string().max(80).exactOptional(),
    network_service: z.string().exactOptional(),
    nfc_required_contact_roles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The configuration will require at least one of each of the\nspecified roles assigned to contacts.\n\nThe role assignments is associated with the network feature\nconfig through the `role_assignments` list property.',
        readOnly: true,
      }),
    required: z.boolean().exactOptional(),
    session_mode: z
      .enum(['public', 'collector'])
      .exactOptional()
      .openapi({
        description:
          'When creating a route server feature config, remember\nto specify the same session_mode as the route server.\n',
        example: 'public',
      }),
    type: z.string().openapi({ example: 'route_server' }),
  })
  .openapi({
    description: 'Route Server Network Feature',
    required: ['type'],
    title: 'PartialRouteServerNetworkFeature',
  })
  .openapi('RouteServerNetworkFeaturePartial')

const RouteServerNetworkFeatureSchema = RouteServerNetworkFeaturePartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'id',
        'name',
        'required',
        'flags',
        'network_service',
        'asn',
        'fqdn',
        'address_families',
        'session_mode',
        'available_bgp_session_types',
        'ip_v4',
        'ip_v6',
        'type',
      ],
      title: 'RouteServerNetworkFeature',
    }),
).openapi('RouteServerNetworkFeature')

type NetworkFeatureType = z.infer<typeof RouteServerNetworkFeatureSchema>

const StatusPartialSchema = z
  .object({
    attrs: z.object({}).exactOptional(),
    message: z.string().exactOptional(),
    severity: z
      .int32()
      .min(0)
      .max(7)
      .exactOptional()
      .openapi({
        description:
          'We are using syslog severity levels: 0 = Emergency,\n1 = Alert, 2 = Critical, 3 = Error, 4 = Warning,\n5 = Notice, 6 = Informational, 7 = Debug.\n',
        example: 2,
      }),
    tag: z.string().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ description: 'Status Message', title: 'PartialStatus', required: [] })
  .openapi('StatusPartial')

const StatusSchema = StatusPartialSchema.and(
  z
    .object({})
    .openapi({ required: ['severity', 'tag', 'message', 'attrs', 'timestamp'], title: 'Status' }),
).openapi('Status')

const RouteServerNetworkFeatureConfigPartialSchema = z
  .object({
    as_set_v4: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'AS-SET of the customer for IPv4 prefix filtering.\nThis is used to generate filters on the router servers.\n\nOnly valid referenced prefixes within the AS-SET\nare allowed inbound to the route server. All other routes are\nfiltered.\n\nThis field is *required* if the route server network feature only\nsupports the `af_inet` address family.\nIf multiple address families are supported, it is optional if the\n`as_set_v6` is provided.\n\nImportant: The format has to be: "AS-SET@IRR". IRR is the database\nwhere the AS-SET is registred. Typically used IRR\'s are RADB, RIPE,\nNTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC\n',
        example: 'MOON-AS@RIPE',
      }),
    as_set_v6: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'AS-SET of the customer for IPv6. This is used to generate filters\non the router servers. Only valid referenced prefixes within\nthe AS-SET are allowed inbound to the route server.\nAll other routes are filtered.\n\nThis field is *required* if the route server network feature only\nsupports the `af_inet6` address family.\nIf multiple address families are supported, it is optional if the\n`as_set_v4` is provided.\n\nImportant: The format has to be: "AS-SET@IRR". IRR is the database\nwhere the AS-SET is registred. Typically used IRR\'s are RADB, RIPE,\nNTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC\n',
        example: 'MOON-AS@RIPE',
      }),
    asn: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(4294967295n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 4294967295,
        description: 'The ASN of the peer.\n',
        example: 4200000023,
      }),
    bgp_session_type: z
      .enum(['active', 'passive'])
      .exactOptional()
      .openapi({
        description:
          'The session type describes which of the both parties will open the\nconnection. If set to passive, the customer router needs to open\nthe connection. If its set to active, the route server will open\nthe connection. The standard behavior on most exchanges is passive.\n',
        example: 'passive',
      }),
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    id: z.string().max(80).exactOptional(),
    insert_ixp_asn: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Insert the ASN of the exchange into the AS path. This function is only\nused in special cases. In 99% of all cases, it should be false.\n',
      }),
    ip: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BGP session will be established from this IP address.\nOnly IPs assigned to the corresponding network service\nconfig can be used.',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    max_prefix_v4: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Announcing more than `max_prefix` IPv4 prefixes the bgp\nsession will be droped.\n',
        example: 5000,
      }),
    max_prefix_v6: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Announcing more than `max_prefix` IPv6 prefixes the bgp\nsession will be droped.\n',
        example: 5000,
      }),
    network_feature: z.string().exactOptional(),
    network_service_config: z.string().exactOptional(),
    password: z
      .string()
      .max(128)
      .default('')
      .exactOptional()
      .openapi({
        description: 'The cleartext BGP session password',
        example: 'bgp-session-test-23',
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    session_mode: z
      .enum(['public', 'collector'])
      .exactOptional()
      .openapi({ description: 'Set the session mode with the routeserver.\n', example: 'public' }),
    state: z
      .enum([
        'requested',
        'allocated',
        'testing',
        'production',
        'production_change_pending',
        'decommission_requested',
        'decommissioned',
        'archived',
        'error',
        'operator',
        'scheduled',
      ])
      .exactOptional(),
    status: z.array(StatusSchema).exactOptional(),
    type: z.string().openapi({ example: 'route_server' }),
  })
  .openapi({
    description: 'Route Server Network Feature Config',
    required: ['type'],
    title: 'PartialRouteServerNetworkFeatureConfig',
  })
  .openapi('RouteServerNetworkFeatureConfigPartial')

const RouteServerNetworkFeatureConfigSchema = RouteServerNetworkFeatureConfigPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'state',
        'managing_account',
        'consuming_account',
        'billing_account',
        'role_assignments',
        'network_feature',
        'network_service_config',
        'asn',
        'session_mode',
        'bgp_session_type',
        'ip',
        'id',
        'type',
      ],
      title: 'RouteServerNetworkFeatureConfig',
    }),
).openapi('RouteServerNetworkFeatureConfig')

type NetworkFeatureConfigType = z.infer<typeof RouteServerNetworkFeatureConfigSchema>

type NetworkFeatureConfigPartialType = z.infer<typeof RouteServerNetworkFeatureConfigPartialSchema>

const RouteServerNetworkFeatureConfigRequestPartialSchema = z
  .object({
    as_set_v4: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'AS-SET of the customer for IPv4 prefix filtering.\nThis is used to generate filters on the router servers.\n\nOnly valid referenced prefixes within the AS-SET\nare allowed inbound to the route server. All other routes are\nfiltered.\n\nThis field is *required* if the route server network feature only\nsupports the `af_inet` address family.\nIf multiple address families are supported, it is optional if the\n`as_set_v6` is provided.\n\nImportant: The format has to be: "AS-SET@IRR". IRR is the database\nwhere the AS-SET is registred. Typically used IRR\'s are RADB, RIPE,\nNTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC\n',
        example: 'MOON-AS@RIPE',
      }),
    as_set_v6: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'AS-SET of the customer for IPv6. This is used to generate filters\non the router servers. Only valid referenced prefixes within\nthe AS-SET are allowed inbound to the route server.\nAll other routes are filtered.\n\nThis field is *required* if the route server network feature only\nsupports the `af_inet6` address family.\nIf multiple address families are supported, it is optional if the\n`as_set_v4` is provided.\n\nImportant: The format has to be: "AS-SET@IRR". IRR is the database\nwhere the AS-SET is registred. Typically used IRR\'s are RADB, RIPE,\nNTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC\n',
        example: 'MOON-AS@RIPE',
      }),
    asn: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(4294967295n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 4294967295,
        description: 'The ASN of the peer.\n',
        example: 4200000023,
      }),
    bgp_session_type: z
      .enum(['active', 'passive'])
      .exactOptional()
      .openapi({
        description:
          'The session type describes which of the both parties will open the\nconnection. If set to passive, the customer router needs to open\nthe connection. If its set to active, the route server will open\nthe connection. The standard behavior on most exchanges is passive.\n',
        example: 'passive',
      }),
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    insert_ixp_asn: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Insert the ASN of the exchange into the AS path. This function is only\nused in special cases. In 99% of all cases, it should be false.\n',
      }),
    ip: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BGP session will be established from this IP address.\nOnly IPs assigned to the corresponding network service\nconfig can be used.',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    max_prefix_v4: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Announcing more than `max_prefix` IPv4 prefixes the bgp\nsession will be droped.\n',
        example: 5000,
      }),
    max_prefix_v6: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Announcing more than `max_prefix` IPv6 prefixes the bgp\nsession will be droped.\n',
        example: 5000,
      }),
    network_feature: z.string().exactOptional(),
    network_service_config: z.string().exactOptional(),
    password: z
      .string()
      .max(128)
      .default('')
      .exactOptional()
      .openapi({
        description: 'The cleartext BGP session password',
        example: 'bgp-session-test-23',
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    session_mode: z
      .enum(['public', 'collector'])
      .exactOptional()
      .openapi({ description: 'Set the session mode with the routeserver.\n', example: 'public' }),
    type: z.string().openapi({ example: 'route_server' }),
  })
  .openapi({
    description: 'Route Server Network Feature Config Request',
    required: ['type'],
    title: 'PartialRouteServerNetworkFeatureConfigRequest',
  })
  .openapi('RouteServerNetworkFeatureConfigRequestPartial')

const RouteServerNetworkFeatureConfigRequestSchema =
  RouteServerNetworkFeatureConfigRequestPartialSchema.and(
    z
      .object({})
      .openapi({
        required: [
          'managing_account',
          'consuming_account',
          'billing_account',
          'role_assignments',
          'network_feature',
          'network_service_config',
          'asn',
          'session_mode',
          'bgp_session_type',
          'ip',
          'type',
        ],
        title: 'RouteServerNetworkFeatureConfigRequest',
      }),
  ).openapi('RouteServerNetworkFeatureConfigRequest')

type NetworkFeatureConfigRequestType = z.infer<typeof RouteServerNetworkFeatureConfigRequestSchema>

type NetworkFeatureConfigRequestPartialType = z.infer<
  typeof RouteServerNetworkFeatureConfigRequestPartialSchema
>

const RouteServerNetworkFeatureConfigUpdatePartialSchema = z
  .object({
    as_set_v4: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'AS-SET of the customer for IPv4 prefix filtering.\nThis is used to generate filters on the router servers.\n\nOnly valid referenced prefixes within the AS-SET\nare allowed inbound to the route server. All other routes are\nfiltered.\n\nThis field is *required* if the route server network feature only\nsupports the `af_inet` address family.\nIf multiple address families are supported, it is optional if the\n`as_set_v6` is provided.\n\nImportant: The format has to be: "AS-SET@IRR". IRR is the database\nwhere the AS-SET is registred. Typically used IRR\'s are RADB, RIPE,\nNTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC\n',
        example: 'MOON-AS@RIPE',
      }),
    as_set_v6: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'AS-SET of the customer for IPv6. This is used to generate filters\non the router servers. Only valid referenced prefixes within\nthe AS-SET are allowed inbound to the route server.\nAll other routes are filtered.\n\nThis field is *required* if the route server network feature only\nsupports the `af_inet6` address family.\nIf multiple address families are supported, it is optional if the\n`as_set_v4` is provided.\n\nImportant: The format has to be: "AS-SET@IRR". IRR is the database\nwhere the AS-SET is registred. Typically used IRR\'s are RADB, RIPE,\nNTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC\n',
        example: 'MOON-AS@RIPE',
      }),
    asn: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(4294967295n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 4294967295,
        description: 'The ASN of the peer.\n',
        example: 4200000023,
      }),
    bgp_session_type: z
      .enum(['active', 'passive'])
      .exactOptional()
      .openapi({
        description:
          'The session type describes which of the both parties will open the\nconnection. If set to passive, the customer router needs to open\nthe connection. If its set to active, the route server will open\nthe connection. The standard behavior on most exchanges is passive.\n',
        example: 'passive',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    insert_ixp_asn: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Insert the ASN of the exchange into the AS path. This function is only\nused in special cases. In 99% of all cases, it should be false.\n',
      }),
    ip: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BGP session will be established from this IP address.\nOnly IPs assigned to the corresponding network service\nconfig can be used.',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    max_prefix_v4: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Announcing more than `max_prefix` IPv4 prefixes the bgp\nsession will be droped.\n',
        example: 5000,
      }),
    max_prefix_v6: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Announcing more than `max_prefix` IPv6 prefixes the bgp\nsession will be droped.\n',
        example: 5000,
      }),
    password: z
      .string()
      .max(128)
      .default('')
      .exactOptional()
      .openapi({
        description: 'The cleartext BGP session password',
        example: 'bgp-session-test-23',
      }),
    session_mode: z
      .enum(['public', 'collector'])
      .exactOptional()
      .openapi({ description: 'Set the session mode with the routeserver.\n', example: 'public' }),
    type: z.string().openapi({ example: 'route_server' }),
  })
  .openapi({
    description: 'Route Server Network Feature Config Update',
    required: ['type'],
    title: 'PartialRouteServerNetworkFeatureConfigUpdate',
  })
  .openapi('RouteServerNetworkFeatureConfigUpdatePartial')

const RouteServerNetworkFeatureConfigUpdateSchema =
  RouteServerNetworkFeatureConfigUpdatePartialSchema.and(
    z
      .object({})
      .openapi({
        required: [
          'managing_account',
          'consuming_account',
          'asn',
          'session_mode',
          'bgp_session_type',
          'ip',
          'type',
        ],
        title: 'RouteServerNetworkFeatureConfigUpdate',
      }),
  ).openapi('RouteServerNetworkFeatureConfigUpdate')

type NetworkFeatureConfigUpdateType = z.infer<typeof RouteServerNetworkFeatureConfigUpdateSchema>

type NetworkFeatureConfigUpdatePartialType = z.infer<
  typeof RouteServerNetworkFeatureConfigUpdatePartialSchema
>

type NetworkFeaturePartialType = z.infer<typeof RouteServerNetworkFeaturePartialSchema>

const ExchangeLanNetworkServicePartialSchema = z
  .object({
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    id: z.string().exactOptional(),
    ixfdb_ixid: z.int().nullable().exactOptional().openapi({ description: 'id of ixfdb' }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    metro_area_network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `MetroAreaNetwork` where\nthe exchange lan network service is directly provided.\n\nSame as `service_metro_area_network` on the related\n`ProductOffering`.\n',
        example: 'man:293225:LON2',
      }),
    name: z
      .string()
      .max(40)
      .exactOptional()
      .openapi({ description: 'Exchange-dependent service name, will be shown on the invoice.' }),
    network_features: z.array(z.string()).exactOptional(),
    nsc_required_contact_roles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The configuration will require at least one of each of the\nspecified roles assigned to contacts.\n\nThe `RoleAssignment` is associated through the\n`role_assignments` list property of the network service configuration.',
        readOnly: true,
      }),
    peeringdb_ixid: z.int().nullable().exactOptional().openapi({ description: 'PeeringDB ixid' }),
    product_offering: z.string().exactOptional().openapi({ description: '*deprecation notice*' }),
    state: z
      .enum([
        'requested',
        'allocated',
        'testing',
        'production',
        'production_change_pending',
        'decommission_requested',
        'decommissioned',
        'archived',
        'error',
        'operator',
        'scheduled',
      ])
      .exactOptional(),
    status: z.array(StatusSchema).exactOptional(),
    subnet_v4: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IPv4 subnet in [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation)\nCIDR notation.\n',
        example: '23.142.52.0/21',
      }),
    subnet_v6: z
      .string()
      .exactOptional()
      .openapi({
        description: 'IPv6 subnet in hexadecimal colon separated CIDR notation.\n',
        example: '2001:23:42::/48',
      }),
    type: z.string().openapi({ example: 'exchange_lan' }),
  })
  .openapi({
    description: 'Exchange Lan Network Service',
    required: ['type'],
    title: 'PartialExchangeLanNetworkService',
  })
  .openapi('ExchangeLanNetworkServicePartial')

const ExchangeLanNetworkServiceSchema = ExchangeLanNetworkServicePartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'state',
        'id',
        'managing_account',
        'consuming_account',
        'name',
        'metro_area_network',
        'network_features',
        'subnet_v4',
        'subnet_v6',
        'type',
      ],
      title: 'ExchangeLanNetworkService',
    }),
).openapi('ExchangeLanNetworkService')

const P2PNetworkServicePartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    capacity: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The capacity of the service in Mbps. When null,\nthe maximum capacity will be used.',
      }),
    charged_until: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Your obligation to pay for the service will end on this date.\nTypically `≥ decommission_at`.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    decommission_at: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The service will be decommissioned on this date.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    id: z.string().exactOptional(),
    joining_member_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The account of the B-side member joining the virtual circuit.\n',
        example: '231829',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    nsc_required_contact_roles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The configuration will require at least one of each of the\nspecified roles assigned to contacts.\n\nThe `RoleAssignment` is associated through the\n`role_assignments` list property of the network service configuration.',
        readOnly: true,
      }),
    product_offering: z.string().exactOptional(),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    state: z
      .enum([
        'requested',
        'allocated',
        'testing',
        'production',
        'production_change_pending',
        'decommission_requested',
        'decommissioned',
        'archived',
        'error',
        'operator',
        'scheduled',
      ])
      .exactOptional(),
    status: z.array(StatusSchema).exactOptional(),
    type: z.string().openapi({ example: 'p2p_vc' }),
  })
  .openapi({
    description: 'P2P Network Service',
    required: ['type'],
    title: 'PartialP2PNetworkService',
  })
  .openapi('P2PNetworkServicePartial')

const P2PNetworkServiceSchema = P2PNetworkServicePartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'state',
        'id',
        'product_offering',
        'managing_account',
        'consuming_account',
        'billing_account',
        'joining_member_account',
        'type',
      ],
      title: 'P2PNetworkService',
    }),
).openapi('P2PNetworkService')

const P2MPNetworkServicePartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    charged_until: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Your obligation to pay for the service will end on this date.\nTypically `≥ decommission_at`.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    decommission_at: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The service will be decommissioned on this date.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    id: z.string().exactOptional(),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    member_joining_rules: z.array(z.string()).exactOptional(),
    name: z
      .string()
      .max(40)
      .exactOptional()
      .openapi({ description: 'Name of the point to multi-point virtual circuit.' }),
    network_features: z.array(z.string()).exactOptional(),
    nsc_required_contact_roles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The configuration will require at least one of each of the\nspecified roles assigned to contacts.\n\nThe `RoleAssignment` is associated through the\n`role_assignments` list property of the network service configuration.',
        readOnly: true,
      }),
    product_offering: z.string().exactOptional(),
    public: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'A public p2mp network service can be joined\nby everyone on the exchange unless denied by\na member-joining-rule.\n\nPublic network services are visible to other\nmembers of the IXP, however only `name`, `type`,\n`product_offering`, `consuming_account` and\n`managing_account` are made\navailable.\n\nOther required fields are redacted.',
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    state: z
      .enum([
        'requested',
        'allocated',
        'testing',
        'production',
        'production_change_pending',
        'decommission_requested',
        'decommissioned',
        'archived',
        'error',
        'operator',
        'scheduled',
      ])
      .exactOptional(),
    status: z.array(StatusSchema).exactOptional(),
    type: z.string().openapi({ example: 'p2mp_vc' }),
  })
  .openapi({
    description: 'P2MP Network Service',
    required: ['type'],
    title: 'PartialP2MPNetworkService',
  })
  .openapi('P2MPNetworkServicePartial')

const P2MPNetworkServiceSchema = P2MPNetworkServicePartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'state',
        'id',
        'product_offering',
        'managing_account',
        'consuming_account',
        'billing_account',
        'name',
        'network_features',
        'member_joining_rules',
        'type',
      ],
      title: 'P2MPNetworkService',
    }),
).openapi('P2MPNetworkService')

const MP2MPNetworkServicePartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    charged_until: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Your obligation to pay for the service will end on this date.\nTypically `≥ decommission_at`.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    decommission_at: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The service will be decommissioned on this date.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    id: z.string().exactOptional(),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    member_joining_rules: z.array(z.string()).exactOptional(),
    name: z
      .string()
      .max(40)
      .exactOptional()
      .openapi({ description: 'Name of the multi-point to multi-point\nvirtual circuit.' }),
    network_features: z.array(z.string()).exactOptional(),
    nsc_required_contact_roles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The configuration will require at least one of each of the\nspecified roles assigned to contacts.\n\nThe `RoleAssignment` is associated through the\n`role_assignments` list property of the network service configuration.',
        readOnly: true,
      }),
    product_offering: z.string().exactOptional(),
    public: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'A public mp2mp network service can be joined\nby everyone on the exchange unless denied by\na member-joining-rule.\n\nPublic network services are visible to other\nmembers of the IXP, however only `name`, `type`,\n`product_offering`, `consuming_account` and\n`managing_account` are made available.\n\nOther required fields are redacted.',
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    state: z
      .enum([
        'requested',
        'allocated',
        'testing',
        'production',
        'production_change_pending',
        'decommission_requested',
        'decommissioned',
        'archived',
        'error',
        'operator',
        'scheduled',
      ])
      .exactOptional(),
    status: z.array(StatusSchema).exactOptional(),
    type: z.string().openapi({ example: 'mp2mp_vc' }),
  })
  .openapi({
    description: 'MP2MP Network Service',
    required: ['type'],
    title: 'PartialMP2MPNetworkService',
  })
  .openapi('MP2MPNetworkServicePartial')

const MP2MPNetworkServiceSchema = MP2MPNetworkServicePartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'state',
        'id',
        'product_offering',
        'managing_account',
        'consuming_account',
        'billing_account',
        'name',
        'member_joining_rules',
        'network_features',
        'type',
      ],
      title: 'MP2MPNetworkService',
    }),
).openapi('MP2MPNetworkService')

const CloudNetworkServicePartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    capacity: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The capacity of the service in Mbps. When null,\nthe maximum capacity will be used.',
      }),
    charged_until: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Your obligation to pay for the service will end on this date.\nTypically `≥ decommission_at`.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    cloud_key: z.string().exactOptional(),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    decommission_at: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The service will be decommissioned on this date.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    diversity: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Same value as the corresponding `ProductOffering`.\n\nThe service can be delivered over multiple handovers from\nthe exchange to the `service_provider`.\n\nThe `diversity` denotes the number of handovers between the\nexchange and the service provider. A value of two signals a\nredundant service.\n\nOnly one network service configuration for each `handover` and\n`cloud_vlan` can be created.',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    id: z.string().exactOptional(),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    nsc_required_contact_roles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The configuration will require at least one of each of the\nspecified roles assigned to contacts.\n\nThe `RoleAssignment` is associated through the\n`role_assignments` list property of the network service configuration.',
        readOnly: true,
      }),
    product_offering: z.string().exactOptional(),
    provider_ref: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'For a cloud network service with the exchange first\nworkflow, the `provider_ref` will be a reference\nto a resource of the cloud provider. (E.g. the UUID of\na virtual circuit.)\n\nThe `provider_ref` is managed by the exchange and its\nmeaning may vary between different cloud services.\n',
        example: '331050d5-76fb-498b-b72a-248520278fbd',
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    state: z
      .enum([
        'requested',
        'allocated',
        'testing',
        'production',
        'production_change_pending',
        'decommission_requested',
        'decommissioned',
        'archived',
        'error',
        'operator',
        'scheduled',
      ])
      .exactOptional(),
    status: z.array(StatusSchema).exactOptional(),
    type: z.string().openapi({ example: 'cloud_vc' }),
  })
  .openapi({
    description: 'Cloud Network Service',
    required: ['type'],
    title: 'PartialCloudNetworkService',
  })
  .openapi('CloudNetworkServicePartial')

const CloudNetworkServiceSchema = CloudNetworkServicePartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'state',
        'id',
        'product_offering',
        'managing_account',
        'consuming_account',
        'billing_account',
        'cloud_key',
        'diversity',
        'provider_ref',
        'type',
      ],
      title: 'CloudNetworkService',
    }),
).openapi('CloudNetworkService')

type NetworkServiceType =
  | z.infer<typeof ExchangeLanNetworkServiceSchema>
  | z.infer<typeof P2PNetworkServiceSchema>
  | z.infer<typeof P2MPNetworkServiceSchema>
  | z.infer<typeof MP2MPNetworkServiceSchema>
  | z.infer<typeof CloudNetworkServiceSchema>

const VLanConfigDot1QPartialSchema = z
  .object({
    vlan: z
      .int32()
      .min(1)
      .max(4094)
      .exactOptional()
      .openapi({ description: 'A VLAN tag\n', example: 23 }),
    vlan_ethertype: z
      .enum(['0x8100', '0x88a8', '0x9100'])
      .default('0x8100')
      .exactOptional()
      .openapi({ description: 'The ethertype of the vlan in hexadecimal notation.' }),
    vlan_type: z.string().openapi({ example: 'dot1q' }),
  })
  .openapi({
    description: 'A Dot1Q vlan configuration',
    required: ['vlan_type'],
    title: 'PartialVLanConfigDot1Q',
  })
  .openapi('VLanConfigDot1QPartial')

const VLanConfigDot1QSchema = VLanConfigDot1QPartialSchema.and(
  z.object({}).openapi({ required: ['vlan', 'vlan_type'], title: 'VLanConfigDot1Q' }),
).openapi('VLanConfigDot1Q')

const VLanConfigQinQPartialSchema = z
  .object({
    inner_vlan: z
      .int32()
      .min(1)
      .max(4094)
      .exactOptional()
      .openapi({ description: 'The inner VLAN id.\n', example: 200 }),
    outer_vlan: z
      .int32()
      .min(1)
      .max(4094)
      .exactOptional()
      .openapi({ description: 'The outer VLAN id.\n', example: 200 }),
    outer_vlan_ethertype: z
      .enum(['0x8100', '0x88a8', '0x9100'])
      .default('0x8100')
      .exactOptional()
      .openapi({ description: 'The ethertype of the outer tag in hexadecimal notation.' }),
    vlan_type: z.string().openapi({ example: 'dot1q' }),
  })
  .openapi({
    description: 'A QinQ vlan configuration',
    required: ['vlan_type'],
    title: 'PartialVLanConfigQinQ',
  })
  .openapi('VLanConfigQinQPartial')

const VLanConfigQinQSchema = VLanConfigQinQPartialSchema.and(
  z
    .object({})
    .openapi({ required: ['outer_vlan', 'inner_vlan', 'vlan_type'], title: 'VLanConfigQinQ' }),
).openapi('VLanConfigQinQ')

const VLanConfigPortPartialSchema = z
  .object({ vlan_type: z.string().openapi({ example: 'port' }) })
  .openapi({
    description: 'A Port vlan configuration',
    required: ['vlan_type'],
    title: 'PartialVLanConfigPort',
  })
  .openapi('VLanConfigPortPartial')

const VLanConfigPortSchema = VLanConfigPortPartialSchema.and(
  z.object({}).openapi({ required: ['vlan_type'], title: 'VLanConfigPort' }),
).openapi('VLanConfigPort')

const VlanConfigSchema = z
  .xor([VLanConfigDot1QSchema, VLanConfigQinQSchema, VLanConfigPortSchema])
  .openapi({
    description:
      'The vlan configuration defines how the service\nis made available on the connection.',
    discriminator: {
      mapping: {
        dot1q: '#/components/schemas/VLanConfigDot1Q',
        port: '#/components/schemas/VLanConfigPort',
        qinq: '#/components/schemas/VLanConfigQinQ',
      },
      propertyName: 'vlan_type',
    },
    title: 'VlanConfig',
  })
  .openapi('VlanConfig')

const ExchangeLanNetworkServiceConfigPartialSchema = z
  .object({
    asns: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(0n).max(4294967295n),
          )
          .openapi({ type: 'integer', format: 'int64', minimum: 0, maximum: 4294967295 }),
      )
      .exactOptional(),
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    capacity: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The capacity of the service in Mbps. If set to Null,\nthe maximum capacity will be used, i.e. the virtual circuit is\nnot rate-limited.\n\nAn exchange may choose to constrain the available capacity range\nof a `ProductOffering`.\n\nThat means, the service can consume up to the total bandwidth\nof the `Connection`.\n\nTypically the service is charged based on the capacity.',
      }),
    charged_until: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Your obligation to pay for the service will end on this date.\nTypically `≥ decommission_at`.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    connection: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the connection to use for this `NetworkServiceConfig`.' }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    decommission_at: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The service will be decommissioned on this date.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    id: z.string().max(80).exactOptional(),
    ips: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of ip-address IDs.\n\nAllocation of IP Addresses might be deferred depending on\nthe IXP implementation. No assumption should be made.',
        readOnly: true,
      }),
    listed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The customer wants to be featured on the member list' }),
    macs: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of mac-address IDs.' }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_feature_configs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of ids of `NetworkFeatureConfig`s.\n',
        example: ['12356', '43829'],
        readOnly: true,
      }),
    network_service: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the configured network service.' }),
    product_offering: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The product offering must match the type `exchange_lan`\nand must refer to the related network service through\nthe `exchange_lan_network_service` property.',
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    state: z
      .enum([
        'requested',
        'allocated',
        'testing',
        'production',
        'production_change_pending',
        'decommission_requested',
        'decommissioned',
        'archived',
        'error',
        'operator',
        'scheduled',
      ])
      .exactOptional(),
    status: z.array(StatusSchema).exactOptional(),
    type: z.string().openapi({ example: 'exchange_lan' }),
    vlan_config: VlanConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'Exchange Lan Network Service Config',
    required: ['type'],
    title: 'PartialExchangeLanNetworkServiceConfig',
  })
  .openapi('ExchangeLanNetworkServiceConfigPartial')

const ExchangeLanNetworkServiceConfigSchema = ExchangeLanNetworkServiceConfigPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'state',
        'id',
        'network_service',
        'managing_account',
        'consuming_account',
        'billing_account',
        'role_assignments',
        'connection',
        'vlan_config',
        'asns',
        'listed',
        'product_offering',
        'type',
      ],
      title: 'ExchangeLanNetworkServiceConfig',
    }),
).openapi('ExchangeLanNetworkServiceConfig')

const P2PNetworkServiceConfigPartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    capacity: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The capacity of the service in Mbps. If set to Null,\nthe maximum capacity will be used, i.e. the virtual circuit is\nnot rate-limited.\n\nAn exchange may choose to constrain the available capacity range\nof a `ProductOffering`.\n\nThat means, the service can consume up to the total bandwidth\nof the `Connection`.\n\nTypically the service is charged based on the capacity.',
      }),
    charged_until: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Your obligation to pay for the service will end on this date.\nTypically `≥ decommission_at`.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    connection: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the connection to use for this `NetworkServiceConfig`.' }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    decommission_at: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The service will be decommissioned on this date.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    id: z.string().max(80).exactOptional(),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_feature_configs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of ids of `NetworkFeatureConfig`s.\n',
        example: ['12356', '43829'],
        readOnly: true,
      }),
    network_service: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the configured network service.' }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    state: z
      .enum([
        'requested',
        'allocated',
        'testing',
        'production',
        'production_change_pending',
        'decommission_requested',
        'decommissioned',
        'archived',
        'error',
        'operator',
        'scheduled',
      ])
      .exactOptional(),
    status: z.array(StatusSchema).exactOptional(),
    type: z.string().openapi({ example: 'p2p_vc' }),
    vlan_config: VlanConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'P2P Network Service Config',
    required: ['type'],
    title: 'PartialP2PNetworkServiceConfig',
  })
  .openapi('P2PNetworkServiceConfigPartial')

const P2PNetworkServiceConfigSchema = P2PNetworkServiceConfigPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'state',
        'id',
        'network_service',
        'managing_account',
        'consuming_account',
        'billing_account',
        'role_assignments',
        'connection',
        'vlan_config',
        'type',
      ],
      title: 'P2PNetworkServiceConfig',
    }),
).openapi('P2PNetworkServiceConfig')

const P2MPNetworkServiceConfigPartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    capacity: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The capacity of the service in Mbps. If set to Null,\nthe maximum capacity will be used, i.e. the virtual circuit is\nnot rate-limited.\n\nAn exchange may choose to constrain the available capacity range\nof a `ProductOffering`.\n\nThat means, the service can consume up to the total bandwidth\nof the `Connection`.\n\nTypically the service is charged based on the capacity.',
      }),
    charged_until: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Your obligation to pay for the service will end on this date.\nTypically `≥ decommission_at`.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    connection: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the connection to use for this `NetworkServiceConfig`.' }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    decommission_at: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The service will be decommissioned on this date.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    id: z.string().max(80).exactOptional(),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_feature_configs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of ids of `NetworkFeatureConfig`s.\n',
        example: ['12356', '43829'],
        readOnly: true,
      }),
    network_service: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the configured network service.' }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role: z
      .enum(['root', 'leaf'])
      .default('leaf')
      .exactOptional()
      .openapi({
        description:
          'A `leaf` can only reach roots and is\nisolated from other leafs. A `root` can\nreach any other point in the virtual circuit\nincluding other roots.',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    state: z
      .enum([
        'requested',
        'allocated',
        'testing',
        'production',
        'production_change_pending',
        'decommission_requested',
        'decommissioned',
        'archived',
        'error',
        'operator',
        'scheduled',
      ])
      .exactOptional(),
    status: z.array(StatusSchema).exactOptional(),
    type: z.string().openapi({ example: 'p2mp_vc' }),
    vlan_config: VlanConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'P2MP Network Service Config',
    required: ['type'],
    title: 'PartialP2MPNetworkServiceConfig',
  })
  .openapi('P2MPNetworkServiceConfigPartial')

const P2MPNetworkServiceConfigSchema = P2MPNetworkServiceConfigPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'state',
        'id',
        'network_service',
        'managing_account',
        'consuming_account',
        'billing_account',
        'role_assignments',
        'connection',
        'vlan_config',
        'type',
      ],
      title: 'P2MPNetworkServiceConfig',
    }),
).openapi('P2MPNetworkServiceConfig')

const MP2MPNetworkServiceConfigPartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    capacity: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The capacity of the service in Mbps. If set to Null,\nthe maximum capacity will be used, i.e. the virtual circuit is\nnot rate-limited.\n\nAn exchange may choose to constrain the available capacity range\nof a `ProductOffering`.\n\nThat means, the service can consume up to the total bandwidth\nof the `Connection`.\n\nTypically the service is charged based on the capacity.',
      }),
    charged_until: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Your obligation to pay for the service will end on this date.\nTypically `≥ decommission_at`.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    connection: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the connection to use for this `NetworkServiceConfig`.' }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    decommission_at: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The service will be decommissioned on this date.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    id: z.string().max(80).exactOptional(),
    macs: z.array(z.string()).exactOptional(),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_feature_configs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of ids of `NetworkFeatureConfig`s.\n',
        example: ['12356', '43829'],
        readOnly: true,
      }),
    network_service: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the configured network service.' }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    state: z
      .enum([
        'requested',
        'allocated',
        'testing',
        'production',
        'production_change_pending',
        'decommission_requested',
        'decommissioned',
        'archived',
        'error',
        'operator',
        'scheduled',
      ])
      .exactOptional(),
    status: z.array(StatusSchema).exactOptional(),
    type: z.string().openapi({ example: 'mp2mp_vc' }),
    vlan_config: VlanConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'MP2MP Network Service Config',
    required: ['type'],
    title: 'PartialMP2MPNetworkServiceConfig',
  })
  .openapi('MP2MPNetworkServiceConfigPartial')

const MP2MPNetworkServiceConfigSchema = MP2MPNetworkServiceConfigPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'state',
        'id',
        'network_service',
        'managing_account',
        'consuming_account',
        'billing_account',
        'role_assignments',
        'connection',
        'vlan_config',
        'type',
      ],
      title: 'MP2MPNetworkServiceConfig',
    }),
).openapi('MP2MPNetworkServiceConfig')

const CloudNetworkServiceConfigPartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    charged_until: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Your obligation to pay for the service will end on this date.\nTypically `≥ decommission_at`.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    cloud_vlan: z
      .int32()
      .min(1)
      .max(4094)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If the `provider_vlans` property of the `ProductOffering` is\n`multi`, a numeric value refers to a specific vlan on the service\nprovider side.\n\nOtherwise, if set to `null`, it refers to all unmatched\nvlan ids on the service provider side. (All vlan ids from the\nservice provider side are presented as tags within any vlans specified\nin `vlan_config`.)\n\nIf the `provider_vlans` property of the `ProductOffering` is `single`,\nthe `cloud_vlan` MUST be `null` or MUST NOT be provided.',
      }),
    connection: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the connection to use for this `NetworkServiceConfig`.' }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    decommission_at: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The service will be decommissioned on this date.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    handover: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The handover enumerates the connection and is\nrequired for checking diversity constraints.\n\nIt must be within `1 <= x <= network_service.diversity`.\n',
        example: 1,
      }),
    id: z.string().max(80).exactOptional(),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_feature_configs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of ids of `NetworkFeatureConfig`s.\n',
        example: ['12356', '43829'],
        readOnly: true,
      }),
    network_service: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the configured network service.' }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    state: z
      .enum([
        'requested',
        'allocated',
        'testing',
        'production',
        'production_change_pending',
        'decommission_requested',
        'decommissioned',
        'archived',
        'error',
        'operator',
        'scheduled',
      ])
      .exactOptional(),
    status: z.array(StatusSchema).exactOptional(),
    type: z.string().openapi({ example: 'cloud_vc' }),
    vlan_config: VlanConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'Cloud Network Service Config',
    required: ['type'],
    title: 'PartialCloudNetworkServiceConfig',
  })
  .openapi('CloudNetworkServiceConfigPartial')

const CloudNetworkServiceConfigSchema = CloudNetworkServiceConfigPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'state',
        'id',
        'network_service',
        'managing_account',
        'consuming_account',
        'billing_account',
        'role_assignments',
        'connection',
        'vlan_config',
        'handover',
        'cloud_vlan',
        'type',
      ],
      title: 'CloudNetworkServiceConfig',
    }),
).openapi('CloudNetworkServiceConfig')

type NetworkServiceConfigType =
  | z.infer<typeof ExchangeLanNetworkServiceConfigSchema>
  | z.infer<typeof P2PNetworkServiceConfigSchema>
  | z.infer<typeof P2MPNetworkServiceConfigSchema>
  | z.infer<typeof MP2MPNetworkServiceConfigSchema>
  | z.infer<typeof CloudNetworkServiceConfigSchema>

type NetworkServiceConfigPartialType =
  | z.infer<typeof ExchangeLanNetworkServiceConfigPartialSchema>
  | z.infer<typeof P2PNetworkServiceConfigPartialSchema>
  | z.infer<typeof P2MPNetworkServiceConfigPartialSchema>
  | z.infer<typeof MP2MPNetworkServiceConfigPartialSchema>
  | z.infer<typeof CloudNetworkServiceConfigPartialSchema>

const ExchangeLanNetworkServiceConfigRequestPartialSchema = z
  .object({
    asns: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(0n).max(4294967295n),
          )
          .openapi({ type: 'integer', format: 'int64', minimum: 0, maximum: 4294967295 }),
      )
      .exactOptional(),
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    capacity: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The capacity of the service in Mbps. If set to Null,\nthe maximum capacity will be used, i.e. the virtual circuit is\nnot rate-limited.\n\nAn exchange may choose to constrain the available capacity range\nof a `ProductOffering`.\n\nThat means, the service can consume up to the total bandwidth\nof the `Connection`.\n\nTypically the service is charged based on the capacity.',
      }),
    connection: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the connection to use for this `NetworkServiceConfig`.' }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    ips: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of ip-address IDs.\n\nAllocation of IP Addresses might be deferred depending on\nthe IXP implementation. No assumption should be made.',
        readOnly: true,
      }),
    listed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The customer wants to be featured on the member list' }),
    macs: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of mac-address IDs.' }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_feature_configs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of ids of `NetworkFeatureConfig`s.\n',
        example: ['12356', '43829'],
        readOnly: true,
      }),
    network_service: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the `NetworkService` to configure.' }),
    product_offering: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The product offering must match the type `exchange_lan`\nand must refer to the related network service through\nthe `exchange_lan_network_service` property.',
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    type: z.string().openapi({ example: 'exchange_lan' }),
    vlan_config: VlanConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'Exchange Lan Network Service Config Request',
    required: ['type'],
    title: 'PartialExchangeLanNetworkServiceConfigRequest',
  })
  .openapi('ExchangeLanNetworkServiceConfigRequestPartial')

const ExchangeLanNetworkServiceConfigRequestSchema =
  ExchangeLanNetworkServiceConfigRequestPartialSchema.and(
    z
      .object({})
      .openapi({
        required: [
          'managing_account',
          'consuming_account',
          'network_service',
          'billing_account',
          'role_assignments',
          'connection',
          'vlan_config',
          'asns',
          'listed',
          'product_offering',
          'type',
        ],
        title: 'ExchangeLanNetworkServiceConfigRequest',
      }),
  ).openapi('ExchangeLanNetworkServiceConfigRequest')

const P2PNetworkServiceConfigRequestPartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    capacity: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The capacity of the service in Mbps. If set to Null,\nthe maximum capacity will be used, i.e. the virtual circuit is\nnot rate-limited.\n\nAn exchange may choose to constrain the available capacity range\nof a `ProductOffering`.\n\nThat means, the service can consume up to the total bandwidth\nof the `Connection`.\n\nTypically the service is charged based on the capacity.',
      }),
    connection: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the connection to use for this `NetworkServiceConfig`.' }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_feature_configs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of ids of `NetworkFeatureConfig`s.\n',
        example: ['12356', '43829'],
        readOnly: true,
      }),
    network_service: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the `NetworkService` to configure.' }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    type: z.string().openapi({ example: 'p2p_vc' }),
    vlan_config: VlanConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'P2P Network Service Config Request',
    required: ['type'],
    title: 'PartialP2PNetworkServiceConfigRequest',
  })
  .openapi('P2PNetworkServiceConfigRequestPartial')

const P2PNetworkServiceConfigRequestSchema = P2PNetworkServiceConfigRequestPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'managing_account',
        'consuming_account',
        'network_service',
        'billing_account',
        'role_assignments',
        'connection',
        'vlan_config',
        'type',
      ],
      title: 'P2PNetworkServiceConfigRequest',
    }),
).openapi('P2PNetworkServiceConfigRequest')

const P2MPNetworkServiceConfigRequestPartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    capacity: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The capacity of the service in Mbps. If set to Null,\nthe maximum capacity will be used, i.e. the virtual circuit is\nnot rate-limited.\n\nAn exchange may choose to constrain the available capacity range\nof a `ProductOffering`.\n\nThat means, the service can consume up to the total bandwidth\nof the `Connection`.\n\nTypically the service is charged based on the capacity.',
      }),
    connection: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the connection to use for this `NetworkServiceConfig`.' }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_feature_configs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of ids of `NetworkFeatureConfig`s.\n',
        example: ['12356', '43829'],
        readOnly: true,
      }),
    network_service: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the `NetworkService` to configure.' }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role: z
      .enum(['root', 'leaf'])
      .default('leaf')
      .exactOptional()
      .openapi({
        description:
          'A `leaf` can only reach roots and is\nisolated from other leafs. A `root` can\nreach any other point in the virtual circuit\nincluding other roots.',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    type: z.string().openapi({ example: 'p2mp_vc' }),
    vlan_config: VlanConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'P2MP Network Service Config Request',
    required: ['type'],
    title: 'PartialP2MPNetworkServiceConfigRequest',
  })
  .openapi('P2MPNetworkServiceConfigRequestPartial')

const P2MPNetworkServiceConfigRequestSchema = P2MPNetworkServiceConfigRequestPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'managing_account',
        'consuming_account',
        'network_service',
        'billing_account',
        'role_assignments',
        'connection',
        'vlan_config',
        'type',
      ],
      title: 'P2MPNetworkServiceConfigRequest',
    }),
).openapi('P2MPNetworkServiceConfigRequest')

const MP2MPNetworkServiceConfigRequestPartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    capacity: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The capacity of the service in Mbps. If set to Null,\nthe maximum capacity will be used, i.e. the virtual circuit is\nnot rate-limited.\n\nAn exchange may choose to constrain the available capacity range\nof a `ProductOffering`.\n\nThat means, the service can consume up to the total bandwidth\nof the `Connection`.\n\nTypically the service is charged based on the capacity.',
      }),
    connection: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the connection to use for this `NetworkServiceConfig`.' }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    macs: z.array(z.string()).exactOptional(),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_feature_configs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of ids of `NetworkFeatureConfig`s.\n',
        example: ['12356', '43829'],
        readOnly: true,
      }),
    network_service: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the `NetworkService` to configure.' }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    type: z.string().openapi({ example: 'mp2mp_vc' }),
    vlan_config: VlanConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'MP2MP Network Service Config Request',
    required: ['type'],
    title: 'PartialMP2MPNetworkServiceConfigRequest',
  })
  .openapi('MP2MPNetworkServiceConfigRequestPartial')

const MP2MPNetworkServiceConfigRequestSchema = MP2MPNetworkServiceConfigRequestPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'managing_account',
        'consuming_account',
        'network_service',
        'billing_account',
        'role_assignments',
        'connection',
        'vlan_config',
        'type',
      ],
      title: 'MP2MPNetworkServiceConfigRequest',
    }),
).openapi('MP2MPNetworkServiceConfigRequest')

const CloudNetworkServiceConfigRequestPartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    cloud_vlan: z
      .int32()
      .min(1)
      .max(4094)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If the `provider_vlans` property of the `ProductOffering` is\n`multi`, a numeric value refers to a specific vlan on the service\nprovider side.\n\nOtherwise, if set to `null`, it refers to all unmatched\nvlan ids on the service provider side. (All vlan ids from the\nservice provider side are presented as tags within any vlans specified\nin `vlan_config`.)\n\nIf the `provider_vlans` property of the `ProductOffering` is `single`,\nthe `cloud_vlan` MUST be `null` or MUST NOT be provided.',
      }),
    connection: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the connection to use for this `NetworkServiceConfig`.' }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    handover: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The handover enumerates the connection and is\nrequired for checking diversity constraints.\n\nIt must be within `1 <= x <= network_service.diversity`.\n',
        example: 1,
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_feature_configs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of ids of `NetworkFeatureConfig`s.\n',
        example: ['12356', '43829'],
        readOnly: true,
      }),
    network_service: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the `NetworkService` to configure.' }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    type: z.string().openapi({ example: 'cloud_vc' }),
    vlan_config: VlanConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'Cloud Network Service Config Request',
    required: ['type'],
    title: 'PartialCloudNetworkServiceConfigRequest',
  })
  .openapi('CloudNetworkServiceConfigRequestPartial')

const CloudNetworkServiceConfigRequestSchema = CloudNetworkServiceConfigRequestPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'managing_account',
        'consuming_account',
        'network_service',
        'billing_account',
        'role_assignments',
        'connection',
        'vlan_config',
        'handover',
        'cloud_vlan',
        'type',
      ],
      title: 'CloudNetworkServiceConfigRequest',
    }),
).openapi('CloudNetworkServiceConfigRequest')

type NetworkServiceConfigRequestType =
  | z.infer<typeof ExchangeLanNetworkServiceConfigRequestSchema>
  | z.infer<typeof P2PNetworkServiceConfigRequestSchema>
  | z.infer<typeof P2MPNetworkServiceConfigRequestSchema>
  | z.infer<typeof MP2MPNetworkServiceConfigRequestSchema>
  | z.infer<typeof CloudNetworkServiceConfigRequestSchema>

type NetworkServiceConfigRequestPartialType =
  | z.infer<typeof ExchangeLanNetworkServiceConfigRequestPartialSchema>
  | z.infer<typeof P2PNetworkServiceConfigRequestPartialSchema>
  | z.infer<typeof P2MPNetworkServiceConfigRequestPartialSchema>
  | z.infer<typeof MP2MPNetworkServiceConfigRequestPartialSchema>
  | z.infer<typeof CloudNetworkServiceConfigRequestPartialSchema>

const ExchangeLanNetworkServiceConfigUpdatePartialSchema = z
  .object({
    asns: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(0n).max(4294967295n),
          )
          .openapi({ type: 'integer', format: 'int64', minimum: 0, maximum: 4294967295 }),
      )
      .exactOptional(),
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    capacity: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The capacity of the service in Mbps. If set to Null,\nthe maximum capacity will be used, i.e. the virtual circuit is\nnot rate-limited.\n\nAn exchange may choose to constrain the available capacity range\nof a `ProductOffering`.\n\nThat means, the service can consume up to the total bandwidth\nof the `Connection`.\n\nTypically the service is charged based on the capacity.',
      }),
    connection: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the connection to use for this `NetworkServiceConfig`.' }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    ips: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of ip-address IDs.\n\nAllocation of IP Addresses might be deferred depending on\nthe IXP implementation. No assumption should be made.',
        readOnly: true,
      }),
    listed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The customer wants to be featured on the member list' }),
    macs: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of mac-address IDs.' }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_feature_configs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of ids of `NetworkFeatureConfig`s.\n',
        example: ['12356', '43829'],
        readOnly: true,
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    type: z.string().openapi({ example: 'exchange_lan' }),
    vlan_config: VlanConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'Exchange Lan Network Service Config Update',
    required: ['type'],
    title: 'PartialExchangeLanNetworkServiceConfigUpdate',
  })
  .openapi('ExchangeLanNetworkServiceConfigUpdatePartial')

const ExchangeLanNetworkServiceConfigUpdateSchema =
  ExchangeLanNetworkServiceConfigUpdatePartialSchema.and(
    z
      .object({})
      .openapi({
        required: [
          'managing_account',
          'consuming_account',
          'vlan_config',
          'billing_account',
          'role_assignments',
          'connection',
          'asns',
          'listed',
          'type',
        ],
        title: 'ExchangeLanNetworkServiceConfigUpdate',
      }),
  ).openapi('ExchangeLanNetworkServiceConfigUpdate')

const P2PNetworkServiceConfigUpdatePartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    capacity: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The capacity of the service in Mbps. If set to Null,\nthe maximum capacity will be used, i.e. the virtual circuit is\nnot rate-limited.\n\nAn exchange may choose to constrain the available capacity range\nof a `ProductOffering`.\n\nThat means, the service can consume up to the total bandwidth\nof the `Connection`.\n\nTypically the service is charged based on the capacity.',
      }),
    connection: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the connection to use for this `NetworkServiceConfig`.' }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_feature_configs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of ids of `NetworkFeatureConfig`s.\n',
        example: ['12356', '43829'],
        readOnly: true,
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    type: z.string().openapi({ example: 'p2p_vc' }),
    vlan_config: VlanConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'P2P Network Service Config Update',
    required: ['type'],
    title: 'PartialP2PNetworkServiceConfigUpdate',
  })
  .openapi('P2PNetworkServiceConfigUpdatePartial')

const P2PNetworkServiceConfigUpdateSchema = P2PNetworkServiceConfigUpdatePartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'managing_account',
        'consuming_account',
        'vlan_config',
        'billing_account',
        'role_assignments',
        'connection',
        'type',
      ],
      title: 'P2PNetworkServiceConfigUpdate',
    }),
).openapi('P2PNetworkServiceConfigUpdate')

const CloudNetworkServiceConfigUpdatePartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    cloud_vlan: z
      .int32()
      .min(1)
      .max(4094)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If the `provider_vlans` property of the `ProductOffering` is\n`multi`, a numeric value refers to a specific vlan on the service\nprovider side.\n\nOtherwise, if set to `null`, it refers to all unmatched\nvlan ids on the service provider side. (All vlan ids from the\nservice provider side are presented as tags within any vlans specified\nin `vlan_config`.)\n\nIf the `provider_vlans` property of the `ProductOffering` is `single`,\nthe `cloud_vlan` MUST be `null` or MUST NOT be provided.',
      }),
    connection: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the connection to use for this `NetworkServiceConfig`.' }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    handover: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The handover enumerates the connection and is\nrequired for checking diversity constraints.\n\nIt must be within `1 <= x <= network_service.diversity`.\n',
        example: 1,
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_feature_configs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of ids of `NetworkFeatureConfig`s.\n',
        example: ['12356', '43829'],
        readOnly: true,
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    type: z.string().openapi({ example: 'cloud_vc' }),
    vlan_config: VlanConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'Cloud Network Service Config Update',
    required: ['type'],
    title: 'PartialCloudNetworkServiceConfigUpdate',
  })
  .openapi('CloudNetworkServiceConfigUpdatePartial')

const CloudNetworkServiceConfigUpdateSchema = CloudNetworkServiceConfigUpdatePartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'managing_account',
        'consuming_account',
        'vlan_config',
        'billing_account',
        'role_assignments',
        'connection',
        'handover',
        'cloud_vlan',
        'type',
      ],
      title: 'CloudNetworkServiceConfigUpdate',
    }),
).openapi('CloudNetworkServiceConfigUpdate')

type NetworkServiceConfigUpdateType =
  | z.infer<typeof ExchangeLanNetworkServiceConfigUpdateSchema>
  | z.infer<typeof P2PNetworkServiceConfigUpdateSchema>
  | z.infer<typeof P2MPNetworkServiceConfigRequestSchema>
  | z.infer<typeof MP2MPNetworkServiceConfigRequestSchema>
  | z.infer<typeof CloudNetworkServiceConfigUpdateSchema>

type NetworkServiceConfigUpdatePartialType =
  | z.infer<typeof ExchangeLanNetworkServiceConfigUpdatePartialSchema>
  | z.infer<typeof P2PNetworkServiceConfigUpdatePartialSchema>
  | z.infer<typeof P2MPNetworkServiceConfigRequestPartialSchema>
  | z.infer<typeof MP2MPNetworkServiceConfigRequestPartialSchema>
  | z.infer<typeof CloudNetworkServiceConfigUpdatePartialSchema>

type NetworkServicePartialType =
  | z.infer<typeof ExchangeLanNetworkServicePartialSchema>
  | z.infer<typeof P2PNetworkServicePartialSchema>
  | z.infer<typeof P2MPNetworkServicePartialSchema>
  | z.infer<typeof MP2MPNetworkServicePartialSchema>
  | z.infer<typeof CloudNetworkServicePartialSchema>

const P2PNetworkServiceRequestPartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    joining_member_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The account of the B-side member joining the virtual circuit.\n',
        example: '231829',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    product_offering: z.string().exactOptional(),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    type: z.string().openapi({ example: 'p2p_vc' }),
  })
  .openapi({
    description: 'P2P Network Service Request',
    required: ['type'],
    title: 'PartialP2PNetworkServiceRequest',
  })
  .openapi('P2PNetworkServiceRequestPartial')

const P2PNetworkServiceRequestSchema = P2PNetworkServiceRequestPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'product_offering',
        'managing_account',
        'consuming_account',
        'billing_account',
        'joining_member_account',
        'type',
      ],
      title: 'P2PNetworkServiceRequest',
    }),
).openapi('P2PNetworkServiceRequest')

const P2MPNetworkServiceRequestPartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    name: z
      .string()
      .max(40)
      .exactOptional()
      .openapi({ description: 'Name of the point to multi-point virtual circuit.' }),
    product_offering: z.string().exactOptional(),
    public: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'A public p2mp network service can be joined\nby everyone on the exchange unless denied by\na member-joining-rule.\n\nPublic network services are visible to other\nmembers of the IXP, however only `name`, `type`,\n`product_offering`, `consuming_account` and\n`managing_account` are made\navailable.\n\nOther required fields are redacted.',
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    type: z.string().openapi({ example: 'p2mp_vc' }),
  })
  .openapi({
    description: 'P2MP Network Service Request',
    required: ['type'],
    title: 'PartialP2MPNetworkServiceRequest',
  })
  .openapi('P2MPNetworkServiceRequestPartial')

const P2MPNetworkServiceRequestSchema = P2MPNetworkServiceRequestPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'product_offering',
        'managing_account',
        'consuming_account',
        'billing_account',
        'name',
        'type',
      ],
      title: 'P2MPNetworkServiceRequest',
    }),
).openapi('P2MPNetworkServiceRequest')

const MP2MPNetworkServiceRequestPartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    name: z
      .string()
      .max(40)
      .exactOptional()
      .openapi({ description: 'Name of the multi-point to multi-point\nvirtual circuit.' }),
    product_offering: z.string().exactOptional(),
    public: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'A public mp2mp network service can be joined\nby everyone on the exchange unless denied by\na member-joining-rule.\n\nPublic network services are visible to other\nmembers of the IXP, however only `name`, `type`,\n`product_offering`, `consuming_account` and\n`managing_account` are made available.\n\nOther required fields are redacted.',
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    type: z.string().openapi({ example: 'mp2mp_vc' }),
  })
  .openapi({
    description: 'MP2MP Network Service Request',
    required: ['type'],
    title: 'PartialMP2MPNetworkServiceRequest',
  })
  .openapi('MP2MPNetworkServiceRequestPartial')

const MP2MPNetworkServiceRequestSchema = MP2MPNetworkServiceRequestPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'product_offering',
        'managing_account',
        'consuming_account',
        'billing_account',
        'name',
        'type',
      ],
      title: 'MP2MPNetworkServiceRequest',
    }),
).openapi('MP2MPNetworkServiceRequest')

const CloudNetworkServiceRequestPartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    capacity: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The capacity of the service in Mbps. When null,\nthe maximum capacity will be used.',
      }),
    cloud_key: z.string().exactOptional(),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    product_offering: z.string().exactOptional(),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    type: z.string().openapi({ example: 'cloud_vc' }),
  })
  .openapi({
    description: 'Cloud Network Service Request',
    required: ['type'],
    title: 'PartialCloudNetworkServiceRequest',
  })
  .openapi('CloudNetworkServiceRequestPartial')

const CloudNetworkServiceRequestSchema = CloudNetworkServiceRequestPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'product_offering',
        'managing_account',
        'consuming_account',
        'billing_account',
        'cloud_key',
        'type',
      ],
      title: 'CloudNetworkServiceRequest',
    }),
).openapi('CloudNetworkServiceRequest')

type NetworkServiceRequestType =
  | z.infer<typeof P2PNetworkServiceRequestSchema>
  | z.infer<typeof P2MPNetworkServiceRequestSchema>
  | z.infer<typeof MP2MPNetworkServiceRequestSchema>
  | z.infer<typeof CloudNetworkServiceRequestSchema>

type NetworkServiceRequestPartialType =
  | z.infer<typeof P2PNetworkServiceRequestPartialSchema>
  | z.infer<typeof P2MPNetworkServiceRequestPartialSchema>
  | z.infer<typeof MP2MPNetworkServiceRequestPartialSchema>
  | z.infer<typeof CloudNetworkServiceRequestPartialSchema>

const ExchangeLanNetworkProductOfferingPartialSchema = z
  .object({
    bandwidth_max: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When not `null`, this value enforces a mandatory\nrate limit for all network service configs.',
      }),
    bandwidth_min: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When configuring access to the network service, at least\nthis `capacity` must be provided.',
      }),
    display_name: z.string().max(256).exactOptional(),
    downgrade_allowed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the service can be migrated to\na lower bandwidth.' }),
    exchange_lan_network_service: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the exchange lan network service.' }),
    handover_metro_area: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `MetroArea`. The network service will be\naccessed from this metro area.\n',
        example: 'met:29381993:NYC',
      }),
    handover_metro_area_network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `MetroAreaNetwork`. The service will be accessed\nthrough the handover metro area network.\n',
        example: '191239810',
      }),
    id: z.string().max(80).exactOptional(),
    name: z.string().max(160).exactOptional().openapi({ description: 'Name of the product' }),
    physical_port_speed: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If the service is dependent on the speed of\nthe physical port this field denotes the speed.',
      }),
    provider_vlans: z
      .enum(['single', 'multi'])
      .exactOptional()
      .openapi({ description: 'The `NetworkService` provides `single` or `multi`ple vlans.' }),
    resource_type: z
      .enum(['connection', 'demarc', 'network_service', 'network_service_config'])
      .exactOptional()
      .openapi({
        description: 'The resource type refers to an ix-api resource.\n',
        example: 'network_service',
      }),
    service_metro_area: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Id of the `MetroArea`. The service is delivered\nin this metro area.\n',
        example: 'met:213913485:LON',
      }),
    service_metro_area_network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `MetroAreaNetwork`.\nThe service is directly provided on the metro area network.\n',
        example: '9123843',
      }),
    service_provider: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the provider providing the service.\n',
        example: 'AWS',
      }),
    type: z.string().openapi({ example: 'exchange_lan' }),
    upgrade_allowed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the service can be migrated to\na higher bandwidth.' }),
  })
  .openapi({
    description: 'Exchange Lan Network Product Offering',
    required: ['type'],
    title: 'PartialExchangeLanNetworkProductOffering',
  })
  .openapi('ExchangeLanNetworkProductOfferingPartial')

const ExchangeLanNetworkProductOfferingSchema = ExchangeLanNetworkProductOfferingPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'id',
        'name',
        'display_name',
        'provider_vlans',
        'resource_type',
        'handover_metro_area_network',
        'handover_metro_area',
        'service_metro_area_network',
        'service_metro_area',
        'bandwidth_min',
        'bandwidth_max',
        'physical_port_speed',
        'service_provider',
        'downgrade_allowed',
        'upgrade_allowed',
        'exchange_lan_network_service',
        'type',
      ],
      title: 'ExchangeLanNetworkProductOffering',
    }),
).openapi('ExchangeLanNetworkProductOffering')

const P2PNetworkProductOfferingPartialSchema = z
  .object({
    bandwidth_max: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When not `null`, this value enforces a mandatory\nrate limit for all network service configs.',
      }),
    bandwidth_min: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When configuring access to the network service, at least\nthis `capacity` must be provided.',
      }),
    display_name: z.string().max(256).exactOptional(),
    downgrade_allowed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the service can be migrated to\na lower bandwidth.' }),
    handover_metro_area: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `MetroArea`. The network service will be\naccessed from this metro area.\n',
        example: 'met:29381993:NYC',
      }),
    handover_metro_area_network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `MetroAreaNetwork`. The service will be accessed\nthrough the handover metro area network.\n',
        example: '191239810',
      }),
    id: z.string().max(80).exactOptional(),
    name: z.string().max(160).exactOptional().openapi({ description: 'Name of the product' }),
    physical_port_speed: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If the service is dependent on the speed of\nthe physical port this field denotes the speed.',
      }),
    provider_vlans: z
      .enum(['single', 'multi'])
      .exactOptional()
      .openapi({ description: 'The `NetworkService` provides `single` or `multi`ple vlans.' }),
    resource_type: z
      .enum(['connection', 'demarc', 'network_service', 'network_service_config'])
      .exactOptional()
      .openapi({
        description: 'The resource type refers to an ix-api resource.\n',
        example: 'network_service',
      }),
    service_metro_area: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Id of the `MetroArea`. The service is delivered\nin this metro area.\n',
        example: 'met:213913485:LON',
      }),
    service_metro_area_network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `MetroAreaNetwork`.\nThe service is directly provided on the metro area network.\n',
        example: '9123843',
      }),
    service_provider: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the provider providing the service.\n',
        example: 'AWS',
      }),
    type: z.string().openapi({ example: 'p2p_vc' }),
    upgrade_allowed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the service can be migrated to\na higher bandwidth.' }),
  })
  .openapi({
    description: 'P2P Network Product Offering',
    required: ['type'],
    title: 'PartialP2PNetworkProductOffering',
  })
  .openapi('P2PNetworkProductOfferingPartial')

const P2PNetworkProductOfferingSchema = P2PNetworkProductOfferingPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'id',
        'name',
        'display_name',
        'provider_vlans',
        'resource_type',
        'handover_metro_area_network',
        'handover_metro_area',
        'service_metro_area_network',
        'service_metro_area',
        'bandwidth_min',
        'bandwidth_max',
        'physical_port_speed',
        'service_provider',
        'downgrade_allowed',
        'upgrade_allowed',
        'type',
      ],
      title: 'P2PNetworkProductOffering',
    }),
).openapi('P2PNetworkProductOffering')

const MP2MPNetworkProductOfferingPartialSchema = z
  .object({
    bandwidth_max: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When not `null`, this value enforces a mandatory\nrate limit for all network service configs.',
      }),
    bandwidth_min: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When configuring access to the network service, at least\nthis `capacity` must be provided.',
      }),
    display_name: z.string().max(256).exactOptional(),
    downgrade_allowed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the service can be migrated to\na lower bandwidth.' }),
    handover_metro_area: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `MetroArea`. The network service will be\naccessed from this metro area.\n',
        example: 'met:29381993:NYC',
      }),
    handover_metro_area_network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `MetroAreaNetwork`. The service will be accessed\nthrough the handover metro area network.\n',
        example: '191239810',
      }),
    id: z.string().max(80).exactOptional(),
    name: z.string().max(160).exactOptional().openapi({ description: 'Name of the product' }),
    physical_port_speed: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If the service is dependent on the speed of\nthe physical port this field denotes the speed.',
      }),
    provider_vlans: z
      .enum(['single', 'multi'])
      .exactOptional()
      .openapi({ description: 'The `NetworkService` provides `single` or `multi`ple vlans.' }),
    resource_type: z
      .enum(['connection', 'demarc', 'network_service', 'network_service_config'])
      .exactOptional()
      .openapi({
        description: 'The resource type refers to an ix-api resource.\n',
        example: 'network_service',
      }),
    service_metro_area: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Id of the `MetroArea`. The service is delivered\nin this metro area.\n',
        example: 'met:213913485:LON',
      }),
    service_metro_area_network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `MetroAreaNetwork`.\nThe service is directly provided on the metro area network.\n',
        example: '9123843',
      }),
    service_provider: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the provider providing the service.\n',
        example: 'AWS',
      }),
    type: z.string().openapi({ example: 'mp2mp_vc' }),
    upgrade_allowed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the service can be migrated to\na higher bandwidth.' }),
  })
  .openapi({
    description: 'MP2MP Network Product Offering',
    required: ['type'],
    title: 'PartialMP2MPNetworkProductOffering',
  })
  .openapi('MP2MPNetworkProductOfferingPartial')

const MP2MPNetworkProductOfferingSchema = MP2MPNetworkProductOfferingPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'id',
        'name',
        'display_name',
        'provider_vlans',
        'resource_type',
        'handover_metro_area_network',
        'handover_metro_area',
        'service_metro_area_network',
        'service_metro_area',
        'bandwidth_min',
        'bandwidth_max',
        'physical_port_speed',
        'service_provider',
        'downgrade_allowed',
        'upgrade_allowed',
        'type',
      ],
      title: 'MP2MPNetworkProductOffering',
    }),
).openapi('MP2MPNetworkProductOffering')

const P2MPNetworkProductOfferingPartialSchema = z
  .object({
    bandwidth_max: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When not `null`, this value enforces a mandatory\nrate limit for all network service configs.',
      }),
    bandwidth_min: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When configuring access to the network service, at least\nthis `capacity` must be provided.',
      }),
    display_name: z.string().max(256).exactOptional(),
    downgrade_allowed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the service can be migrated to\na lower bandwidth.' }),
    handover_metro_area: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `MetroArea`. The network service will be\naccessed from this metro area.\n',
        example: 'met:29381993:NYC',
      }),
    handover_metro_area_network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `MetroAreaNetwork`. The service will be accessed\nthrough the handover metro area network.\n',
        example: '191239810',
      }),
    id: z.string().max(80).exactOptional(),
    name: z.string().max(160).exactOptional().openapi({ description: 'Name of the product' }),
    physical_port_speed: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If the service is dependent on the speed of\nthe physical port this field denotes the speed.',
      }),
    provider_vlans: z
      .enum(['single', 'multi'])
      .exactOptional()
      .openapi({ description: 'The `NetworkService` provides `single` or `multi`ple vlans.' }),
    resource_type: z
      .enum(['connection', 'demarc', 'network_service', 'network_service_config'])
      .exactOptional()
      .openapi({
        description: 'The resource type refers to an ix-api resource.\n',
        example: 'network_service',
      }),
    service_metro_area: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Id of the `MetroArea`. The service is delivered\nin this metro area.\n',
        example: 'met:213913485:LON',
      }),
    service_metro_area_network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `MetroAreaNetwork`.\nThe service is directly provided on the metro area network.\n',
        example: '9123843',
      }),
    service_provider: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the provider providing the service.\n',
        example: 'AWS',
      }),
    type: z.string().openapi({ example: 'p2mp_vc' }),
    upgrade_allowed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the service can be migrated to\na higher bandwidth.' }),
  })
  .openapi({
    description: 'P2MP Network Product Offering',
    required: ['type'],
    title: 'PartialP2MPNetworkProductOffering',
  })
  .openapi('P2MPNetworkProductOfferingPartial')

const P2MPNetworkProductOfferingSchema = P2MPNetworkProductOfferingPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'id',
        'name',
        'display_name',
        'provider_vlans',
        'resource_type',
        'handover_metro_area_network',
        'handover_metro_area',
        'service_metro_area_network',
        'service_metro_area',
        'bandwidth_min',
        'bandwidth_max',
        'physical_port_speed',
        'service_provider',
        'downgrade_allowed',
        'upgrade_allowed',
        'type',
      ],
      title: 'P2MPNetworkProductOffering',
    }),
).openapi('P2MPNetworkProductOffering')

const CloudNetworkProductOfferingPartialSchema = z
  .object({
    bandwidth_max: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When not `null`, this value enforces a mandatory\nrate limit for all network service configs.',
      }),
    bandwidth_min: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When configuring access to the network service, at least\nthis `capacity` must be provided.',
      }),
    delivery_method: z
      .enum(['dedicated', 'shared'])
      .exactOptional()
      .openapi({
        description: 'The exchange delivers the service over a `shared` or `dedicated` NNI.',
      }),
    display_name: z.string().max(256).exactOptional(),
    diversity: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The service can be delivered over multiple handovers from\nthe exchange to the `service_provider`.\nThe `diversity` denotes the number of handovers between the\nexchange and the service provider. A value of two signals a\nredundant service.\n\nOnly one network service configuration for each `handover` and\n`cloud_vlan` can be created.',
      }),
    downgrade_allowed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the service can be migrated to\na lower bandwidth.' }),
    handover_metro_area: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `MetroArea`. The network service will be\naccessed from this metro area.\n',
        example: 'met:29381993:NYC',
      }),
    handover_metro_area_network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `MetroAreaNetwork`. The service will be accessed\nthrough the handover metro area network.\n',
        example: '191239810',
      }),
    id: z.string().max(80).exactOptional(),
    name: z.string().max(160).exactOptional().openapi({ description: 'Name of the product' }),
    physical_port_speed: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If the service is dependent on the speed of\nthe physical port this field denotes the speed.',
      }),
    provider_vlans: z
      .enum(['single', 'multi'])
      .exactOptional()
      .openapi({ description: 'The `NetworkService` provides `single` or `multi`ple vlans.' }),
    resource_type: z
      .enum(['connection', 'demarc', 'network_service', 'network_service_config'])
      .exactOptional()
      .openapi({
        description: 'The resource type refers to an ix-api resource.\n',
        example: 'network_service',
      }),
    service_metro_area: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Id of the `MetroArea`. The service is delivered\nin this metro area.\n',
        example: 'met:213913485:LON',
      }),
    service_metro_area_network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `MetroAreaNetwork`.\nThe service is directly provided on the metro area network.\n',
        example: '9123843',
      }),
    service_provider: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the provider providing the service.\n',
        example: 'AWS',
      }),
    service_provider_pop: z
      .string()
      .max(16)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The datacenter description of the partner NNI to the\nservice provider.\n',
        example: 'INX6',
      }),
    service_provider_region: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The service provider offers the network service for a\nspecific region.\n',
        example: 'eu-central-1',
      }),
    service_provider_workflow: z
      .enum(['exchange_first', 'provider_first'])
      .exactOptional()
      .openapi({
        description:
          'When the workflow is `provider_first` the subscriber creates\na circuit with the cloud provider and provides a `cloud_key` for filtering\nthe product-offerings.\n\nIf the workflow is `exchange_first` the IX will create\nthe cloud circuit on the provider side.\n',
        example: 'exchange_first',
      }),
    type: z.string().openapi({ example: 'cloud_vc' }),
    upgrade_allowed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the service can be migrated to\na higher bandwidth.' }),
  })
  .openapi({
    description: 'Cloud Network Product Offering',
    required: ['type'],
    title: 'PartialCloudNetworkProductOffering',
  })
  .openapi('CloudNetworkProductOfferingPartial')

const CloudNetworkProductOfferingSchema = CloudNetworkProductOfferingPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'id',
        'name',
        'display_name',
        'provider_vlans',
        'resource_type',
        'handover_metro_area_network',
        'handover_metro_area',
        'service_metro_area_network',
        'service_metro_area',
        'bandwidth_min',
        'bandwidth_max',
        'physical_port_speed',
        'service_provider',
        'downgrade_allowed',
        'upgrade_allowed',
        'service_provider_region',
        'service_provider_pop',
        'service_provider_workflow',
        'delivery_method',
        'diversity',
        'type',
      ],
      title: 'CloudNetworkProductOffering',
    }),
).openapi('CloudNetworkProductOffering')

type ProductOfferingType =
  | z.infer<typeof ExchangeLanNetworkProductOfferingSchema>
  | z.infer<typeof P2PNetworkProductOfferingSchema>
  | z.infer<typeof MP2MPNetworkProductOfferingSchema>
  | z.infer<typeof P2MPNetworkProductOfferingSchema>
  | z.infer<typeof CloudNetworkProductOfferingSchema>

type ProductOfferingPartialType =
  | z.infer<typeof ExchangeLanNetworkProductOfferingPartialSchema>
  | z.infer<typeof P2PNetworkProductOfferingPartialSchema>
  | z.infer<typeof MP2MPNetworkProductOfferingPartialSchema>
  | z.infer<typeof P2MPNetworkProductOfferingPartialSchema>
  | z.infer<typeof CloudNetworkProductOfferingPartialSchema>

const AddressPartialSchema = z
  .object({
    country: z
      .string()
      .max(2)
      .exactOptional()
      .openapi({ description: 'ISO 3166-1 alpha-2 country code, for example DE', example: 'US' }),
    locality: z
      .string()
      .max(40)
      .exactOptional()
      .openapi({
        description: 'The locality/city. For example, Mountain View.',
        example: 'Mountain View',
      }),
    post_office_box_number: z
      .string()
      .max(80)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The post office box number for PO box addresses.',
        example: '2335232',
      }),
    postal_code: z
      .string()
      .max(24)
      .exactOptional()
      .openapi({ description: 'A postal code. For example, 9404', example: '9409' }),
    region: z
      .string()
      .max(80)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The region. For example, CA', example: 'CA' }),
    street_address: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        description: 'The street address. For example, 1600 Amphitheatre Pkwy.',
        example: '1600 Amphitheatre Pkwy.',
      }),
  })
  .openapi({ description: '', title: 'PartialAddress', required: [] })
  .openapi('AddressPartial')

const AddressSchema = AddressPartialSchema.and(
  z
    .object({})
    .openapi({
      required: ['country', 'locality', 'postal_code', 'street_address'],
      title: 'Address',
    }),
).openapi('Address')

const BillingInformationPartialSchema = z
  .object({
    address: AddressSchema.exactOptional(),
    name: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        description: 'Name of the organisation receiving invoices.\n',
        example: 'Moonoc Network Services LLS.',
      }),
    vat_number: z
      .string()
      .min(2)
      .max(20)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Value-added tax number, required for\neuropean reverse charge system.\n',
        example: 'UK2300000042',
      }),
  })
  .openapi({
    description:
      'Optional information required for issuing invoices.\nOnly accounts with `billing_information` present can be used\nas a `billing_account`.',
    title: 'PartialBillingInformation',
    required: [],
  })
  .openapi('BillingInformationPartial')

const BillingInformationSchema = BillingInformationPartialSchema.and(
  z.object({}).openapi({ required: ['name', 'address'], title: 'BillingInformation' }),
).openapi('BillingInformation')

const AccountPartialSchema = z
  .object({
    address: AddressSchema.exactOptional(),
    billing_information: BillingInformationSchema.exactOptional(),
    discoverable: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'The account will be included for all members of the\nix in the list of accounts.\n\nOnly `id`, `name` and `present_in_metro_area_networks`\nare provided to other members.',
      }),
    external_ref: z
      .string()
      .max(80)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    id: z.string().max(80).exactOptional(),
    legal_name: z
      .string()
      .max(80)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Legal name of the organisation.\nOnly required when it's different from the account name.\n",
        example: 'Moon Network Services LLS.',
      }),
    managing_account: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The `id` of a managing account. Can be used for creating\na customer hierachy.\n',
        example: 'IX:Account:231',
      }),
    metro_area_network_presence: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Informal list of `MetroAreaNetwork` ids, indicating the\npresence to other accounts.\nThe list is maintained by the account and can be empty.\n',
        example: ['14021', '12939'],
      }),
    name: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        description: 'Name of the account, how it gets represented\nin e.g. a "customers list".\n',
        example: 'Moonpeer Inc.',
      }),
    state: z
      .enum([
        'requested',
        'allocated',
        'testing',
        'production',
        'production_change_pending',
        'decommission_requested',
        'decommissioned',
        'archived',
        'error',
        'operator',
        'scheduled',
      ])
      .exactOptional(),
    status: z.array(StatusSchema).exactOptional(),
  })
  .openapi({ description: 'Account', title: 'PartialAccount', required: [] })
  .openapi('AccountPartial')

const AccountSchema = AccountPartialSchema.and(
  z
    .object({})
    .openapi({
      required: ['state', 'name', 'metro_area_network_presence', 'id'],
      title: 'Account',
    }),
).openapi('Account')

const AccountRequestPartialSchema = z
  .object({
    address: AddressSchema.exactOptional(),
    billing_information: BillingInformationSchema.exactOptional(),
    discoverable: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'The account will be included for all members of the\nix in the list of accounts.\n\nOnly `id`, `name` and `present_in_metro_area_networks`\nare provided to other members.',
      }),
    external_ref: z
      .string()
      .max(80)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    legal_name: z
      .string()
      .max(80)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Legal name of the organisation.\nOnly required when it's different from the account name.\n",
        example: 'Moon Network Services LLS.',
      }),
    managing_account: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The `id` of a managing account. Can be used for creating\na customer hierachy.\n',
        example: 'IX:Account:231',
      }),
    metro_area_network_presence: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({
        description:
          'Informal list of `MetroAreaNetwork` ids, indicating the\npresence to other accounts.\nThe list is maintained by the account and can be empty.\n',
        example: ['14021', '12939'],
      }),
    name: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        description: 'Name of the account, how it gets represented\nin e.g. a "customers list".\n',
        example: 'Moonpeer Inc.',
      }),
  })
  .openapi({ description: 'Account Request', title: 'PartialAccountRequest', required: [] })
  .openapi('AccountRequestPartial')

const AccountRequestSchema = AccountRequestPartialSchema.and(
  z.object({}).openapi({ required: ['name', 'address'], title: 'AccountRequest' }),
).openapi('AccountRequest')

const AccountUpdatePartialSchema = z
  .object({
    address: AddressSchema.exactOptional(),
    billing_information: BillingInformationSchema.exactOptional(),
    discoverable: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'The account will be included for all members of the\nix in the list of accounts.\n\nOnly `id`, `name` and `present_in_metro_area_networks`\nare provided to other members.',
      }),
    external_ref: z
      .string()
      .max(80)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    legal_name: z
      .string()
      .max(80)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Legal name of the organisation.\nOnly required when it's different from the account name.\n",
        example: 'Moon Network Services LLS.',
      }),
    managing_account: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The `id` of a managing account. Can be used for creating\na customer hierachy.\n',
        example: 'IX:Account:231',
      }),
    metro_area_network_presence: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Informal list of `MetroAreaNetwork` ids, indicating the\npresence to other accounts.\nThe list is maintained by the account and can be empty.\n',
        example: ['14021', '12939'],
      }),
    name: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        description: 'Name of the account, how it gets represented\nin e.g. a "customers list".\n',
        example: 'Moonpeer Inc.',
      }),
  })
  .openapi({ description: 'Account Update Request', title: 'PartialAccountUpdate', required: [] })
  .openapi('AccountUpdatePartial')

const AccountUpdateSchema = AccountUpdatePartialSchema.and(
  z
    .object({})
    .openapi({
      required: ['name', 'metro_area_network_presence', 'address'],
      title: 'AccountUpdate',
    }),
).openapi('AccountUpdate')

const AuthTokenPartialSchema = z
  .object({ access_token: z.string().exactOptional(), refresh_token: z.string().exactOptional() })
  .openapi({ description: 'AuthToken', title: 'PartialAuthToken', required: [] })
  .openapi('AuthTokenPartial')

const AuthTokenSchema = AuthTokenPartialSchema.and(
  z.object({}).openapi({ required: ['access_token', 'refresh_token'], title: 'AuthToken' }),
).openapi('AuthToken')

const AuthTokenRequestPartialSchema = z
  .object({
    api_key: z.string().length(16).exactOptional(),
    api_secret: z.string().length(86).exactOptional(),
  })
  .openapi({ description: 'AuthTokenRequest', title: 'PartialAuthTokenRequest', required: [] })
  .openapi('AuthTokenRequestPartial')

const AuthTokenRequestSchema = AuthTokenRequestPartialSchema.and(
  z.object({}).openapi({ required: ['api_key', 'api_secret'], title: 'AuthTokenRequest' }),
).openapi('AuthTokenRequest')

const CancelablePartialSchema = z
  .object({
    charged_until: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Your obligation to pay for the service will end on this date.\nTypically `≥ decommission_at`.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
    decommission_at: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The service will be decommissioned on this date.\n\nThis field is only used when\nthe state is `DECOMMISSION_REQUESTED` or\n`DECOMMISSIONED`.',
      }),
  })
  .openapi({
    description: 'Service or config can be canceled',
    title: 'PartialCancelable',
    required: [],
  })
  .openapi('CancelablePartial')

const CancelableSchema = CancelablePartialSchema.and(
  z.object({}).openapi({ title: 'Cancelable' }),
).openapi('Cancelable')

const CancellationPolicyPartialSchema = z
  .object({
    charged_until: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Your obligation to pay for the service will end on this date.\nTypically `≥ decommission_at`.',
      }),
    decommission_at: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'This field denotes the first possible cancellation\ndate of the service.',
      }),
  })
  .openapi({ description: 'Cancellation Policy', title: 'PartialCancellationPolicy', required: [] })
  .openapi('CancellationPolicyPartial')

const CancellationPolicySchema = CancellationPolicyPartialSchema.and(
  z
    .object({})
    .openapi({ required: ['decommission_at', 'charged_until'], title: 'CancellationPolicy' }),
).openapi('CancellationPolicy')

const CancellationRequestPartialSchema = z
  .object({
    decommission_at: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'An optional date for scheduling the cancellation\nand service decommissioning.',
      }),
  })
  .openapi({
    description: 'Service Cancellation Request',
    title: 'PartialCancellationRequest',
    required: [],
  })
  .openapi('CancellationRequestPartial')

const CancellationRequestSchema = CancellationRequestPartialSchema.and(
  z.object({}).openapi({ title: 'CancellationRequest' }),
).openapi('CancellationRequest')

const ConnectionPartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    id: z.string().max(80).exactOptional(),
    lacp_timeout: z
      .enum(['slow', 'fast'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'This sets the LACP Timeout mode. Both ends of the connections need\nto be configured the same.\n',
        example: 'slow',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    mode: z
      .enum(['lag_lacp', 'lag_static', 'flex_ethernet', 'standalone'])
      .exactOptional()
      .openapi({
        description:
          'Sets the mode of the connection. The mode can be:\n\n- `lag_lacp`: connection is build as a LAG with LACP enabled\n- `lag_static`: connection is build as LAG with static configuration\n- `flex_ethernet`: connect is build as a FlexEthernet channel\n- `standalone`: only one port is allowed in this connection without\nany bundling.\n',
        example: 'lag_lacp',
      }),
    name: z.string().max(80).exactOptional(),
    outer_vlan_ethertypes: z
      .array(z.enum(['0x8100', '0x88a8', '0x9100']).default('0x8100'))
      .exactOptional()
      .openapi({
        description: 'The ethertype of the outer tag in hexadecimal notation.\n',
        example: ['0x8100'],
      }),
    ports: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'References to the port belonging to this connection. Typically\nall ports within one connection are distributed over the same\ndevice.\n',
        example: ['ID23', '42', '5'],
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    speed: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Shows the total bandwidth of the connection in Mbit/s.\n',
        example: 20000,
      }),
    state: z
      .enum([
        'requested',
        'allocated',
        'testing',
        'production',
        'production_change_pending',
        'decommission_requested',
        'decommissioned',
        'archived',
        'error',
        'operator',
        'scheduled',
      ])
      .exactOptional(),
    status: z.array(StatusSchema).exactOptional(),
    vlan_types: z
      .array(z.enum(['port', 'dot1q', 'qinq']))
      .exactOptional()
      .openapi({
        description: 'A list of vlan config types you can configure using\nthis connection.',
      }),
  })
  .openapi({ description: 'Connection', title: 'PartialConnection', required: [] })
  .openapi('ConnectionPartial')

const ConnectionSchema = ConnectionPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'state',
        'managing_account',
        'consuming_account',
        'billing_account',
        'role_assignments',
        'mode',
        'id',
        'name',
        'vlan_types',
        'outer_vlan_ethertypes',
      ],
      title: 'Connection',
    }),
).openapi('Connection')

const ConnectionRequestPartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    lacp_timeout: z
      .enum(['slow', 'fast'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'This sets the LACP Timeout mode. Both ends of the connections need\nto be configured the same.\n',
        example: 'slow',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    mode: z
      .enum(['lag_lacp', 'lag_static', 'flex_ethernet', 'standalone'])
      .exactOptional()
      .openapi({
        description:
          'Sets the mode of the connection. The mode can be:\n\n- `lag_lacp`: connection is build as a LAG with LACP enabled\n- `lag_static`: connection is build as LAG with static configuration\n- `flex_ethernet`: connect is build as a FlexEthernet channel\n- `standalone`: only one port is allowed in this connection without\nany bundling.\n',
        example: 'lag_lacp',
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    speed: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Shows the total bandwidth of the connection in Mbit/s.\n',
        example: 20000,
      }),
  })
  .openapi({ description: 'Connection Request', title: 'PartialConnectionRequest', required: [] })
  .openapi('ConnectionRequestPartial')

const ConnectionRequestSchema = ConnectionRequestPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'managing_account',
        'consuming_account',
        'billing_account',
        'role_assignments',
        'mode',
      ],
      title: 'ConnectionRequest',
    }),
).openapi('ConnectionRequest')

const ConnectionUpdatePartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    lacp_timeout: z
      .enum(['slow', 'fast'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'This sets the LACP Timeout mode. Both ends of the connections need\nto be configured the same.\n',
        example: 'slow',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    mode: z
      .enum(['lag_lacp', 'lag_static', 'flex_ethernet', 'standalone'])
      .exactOptional()
      .openapi({
        description:
          'Sets the mode of the connection. The mode can be:\n\n- `lag_lacp`: connection is build as a LAG with LACP enabled\n- `lag_static`: connection is build as LAG with static configuration\n- `flex_ethernet`: connect is build as a FlexEthernet channel\n- `standalone`: only one port is allowed in this connection without\nany bundling.\n',
        example: 'lag_lacp',
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    speed: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Shows the total bandwidth of the connection in Mbit/s.\n',
        example: 20000,
      }),
  })
  .openapi({ description: 'Connection Update', title: 'PartialConnectionUpdate', required: [] })
  .openapi('ConnectionUpdatePartial')

const ConnectionUpdateSchema = ConnectionUpdatePartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'managing_account',
        'consuming_account',
        'billing_account',
        'role_assignments',
        'mode',
      ],
      title: 'ConnectionUpdate',
    }),
).openapi('ConnectionUpdate')

const ConsumablePartialSchema = z
  .object({
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
  })
  .openapi({ description: 'Consumable', title: 'PartialConsumable', required: [] })
  .openapi('ConsumablePartial')

const ConsumableSchema = ConsumablePartialSchema.and(
  z.object({}).openapi({ required: ['consuming_account'], title: 'Consumable' }),
).openapi('Consumable')

const ContactPartialSchema = z
  .object({
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    email: z
      .string()
      .max(80)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The email of the legal company entity.\n',
        example: 'info@moon-peer.net',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    id: z.string().exactOptional(),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    name: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A name of a person or an organisation', example: 'Some A. Name' }),
    telephone: z
      .string()
      .max(40)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The telephone number in E.164 Phone Number Formatting',
        example: '+442071838750',
      }),
  })
  .openapi({ description: 'Contact', title: 'PartialContact', required: [] })
  .openapi('ContactPartial')

const ContactSchema = ContactPartialSchema.and(
  z
    .object({})
    .openapi({ required: ['managing_account', 'consuming_account', 'id'], title: 'Contact' }),
).openapi('Contact')

const ContactRequestPartialSchema = z
  .object({
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    email: z
      .string()
      .max(80)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The email of the legal company entity.\n',
        example: 'info@moon-peer.net',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    name: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A name of a person or an organisation', example: 'Some A. Name' }),
    telephone: z
      .string()
      .max(40)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The telephone number in E.164 Phone Number Formatting',
        example: '+442071838750',
      }),
  })
  .openapi({
    description: 'A contact creation request',
    title: 'PartialContactRequest',
    required: [],
  })
  .openapi('ContactRequestPartial')

const ContactRequestSchema = ContactRequestPartialSchema.and(
  z
    .object({})
    .openapi({ required: ['managing_account', 'consuming_account'], title: 'ContactRequest' }),
).openapi('ContactRequest')

const ContactUpdatePartialSchema = z
  .object({
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    email: z
      .string()
      .max(80)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The email of the legal company entity.\n',
        example: 'info@moon-peer.net',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    name: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A name of a person or an organisation', example: 'Some A. Name' }),
    telephone: z
      .string()
      .max(40)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The telephone number in E.164 Phone Number Formatting',
        example: '+442071838750',
      }),
  })
  .openapi({ description: 'A contact update', title: 'PartialContactUpdate', required: [] })
  .openapi('ContactUpdatePartial')

const ContactUpdateSchema = ContactUpdatePartialSchema.and(
  z
    .object({})
    .openapi({ required: ['managing_account', 'consuming_account'], title: 'ContactUpdate' }),
).openapi('ContactUpdate')

const ContactablePartialSchema = z
  .object({
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
  })
  .openapi({ description: 'Contactable', title: 'PartialContactable', required: [] })
  .openapi('ContactablePartial')

const ContactableSchema = ContactablePartialSchema.and(
  z.object({}).openapi({ required: ['role_assignments'], title: 'Contactable' }),
).openapi('Contactable')

const DeviceCapabilityPartialSchema = z
  .object({
    availability: z
      .int32()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description: 'Count of available ports on device\n',
        example: 23,
        readOnly: true,
      }),
    max_lag: z
      .int32()
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        description: 'Maximum count of ports which can be bundled to a max_lag',
        example: 8,
        readOnly: true,
      }),
    media_type: z
      .string()
      .max(20)
      .exactOptional()
      .openapi({
        description: 'The media type of the port (e.g. 1000BASE-LX, 10GBASE-LR, ...)\n',
        example: '1000BASE-LX',
        readOnly: true,
      }),
    speed: z
      .int()
      .exactOptional()
      .openapi({ description: 'Speed of port in Mbit/s\n', example: 1000, readOnly: true }),
  })
  .openapi({ description: 'Device Capability', title: 'PartialDeviceCapability', required: [] })
  .openapi('DeviceCapabilityPartial')

const DeviceCapabilitySchema = DeviceCapabilityPartialSchema.and(
  z.object({}).openapi({ title: 'DeviceCapability' }),
).openapi('DeviceCapability')

const DevicePartialSchema = z
  .object({
    capabilities: z.array(DeviceCapabilitySchema).exactOptional(),
    facility: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identifier of the facility where the device\nis physically based.',
        readOnly: true,
      }),
    id: z.string().max(80).exactOptional(),
    name: z
      .string()
      .max(180)
      .exactOptional()
      .openapi({ description: 'Name of the device\n', example: 'edge2.moon.space-ix.net' }),
    pop: z
      .string()
      .exactOptional()
      .openapi({ description: 'The `PointOfPresence` the device is in.' }),
  })
  .openapi({ description: 'Device', title: 'PartialDevice', required: [] })
  .openapi('DevicePartial')

const DeviceSchema = DevicePartialSchema.and(
  z.object({}).openapi({ required: ['name', 'pop', 'id'], title: 'Device' }),
).openapi('Device')

const DeviceConnectionPartialSchema = z
  .object({
    capacity_max: z.int32().min(0).max(2147483647).exactOptional(),
    connected_device: z.string().exactOptional(),
    device: z.string().exactOptional(),
    id: z.string().max(80).exactOptional(),
  })
  .openapi({ description: 'Device Connection', title: 'PartialDeviceConnection', required: [] })
  .openapi('DeviceConnectionPartial')

const DeviceConnectionSchema = DeviceConnectionPartialSchema.and(
  z
    .object({})
    .openapi({
      required: ['capacity_max', 'device', 'connected_device', 'id'],
      title: 'DeviceConnection',
    }),
).openapi('DeviceConnection')

const EventPartialSchema = z
  .object({
    account: z.string().exactOptional().openapi({ readOnly: true }),
    payload: z.object({}).exactOptional(),
    serial: z.int().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }).exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ description: 'Event', title: 'PartialEvent', required: [] })
  .openapi('EventPartial')

const EventSchema = EventPartialSchema.and(
  z.object({}).openapi({ required: ['serial', 'type', 'payload', 'timestamp'], title: 'Event' }),
).openapi('Event')

const ExternalReferencePartialSchema = z
  .object({
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
  })
  .openapi({ description: 'External Reference', title: 'PartialExternalReference', required: [] })
  .openapi('ExternalReferencePartial')

const ExternalReferenceSchema = ExternalReferencePartialSchema.and(
  z.object({}).openapi({ title: 'ExternalReference' }),
).openapi('ExternalReference')

const FacilityPartialSchema = z
  .object({
    address_country: z
      .string()
      .max(2)
      .exactOptional()
      .openapi({ description: 'ISO 3166-1 alpha-2 country code, for example DE\n', example: 'US' }),
    address_locality: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        description: 'The locality/city. For example, Mountain View.',
        example: 'Mountain View',
      }),
    address_region: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({ description: 'The region. For example, CA', example: 'CA' }),
    id: z.string().max(80).exactOptional(),
    metro_area: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Id of the `MetroArea` the DC is located in.\n',
        example: 'met:93214980:BER',
      }),
    name: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        description: 'Name of the Datacenter as called by the operator\n',
        example: 'Crater DC Moon 1',
      }),
    organisation_name: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({ description: 'Name of Datacenter operator\n', example: 'Moon Datacenters' }),
    peeringdb_facility_id: z
      .int32()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '[PeeringDB](https://www.peeringdb.com) facitlity ID,\ncan be extracted from the url https://www.peeringdb.com/fac/$id\n',
        example: 103,
      }),
    pops: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of pops in the `Facility`.' }),
    postal_code: z
      .string()
      .max(18)
      .exactOptional()
      .openapi({ description: 'A postal code. For example, 9404', example: '9409' }),
    street_address: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        description: 'The street address. For example, 1600 Amphitheatre Pkwy.',
        example: '1600 Amphitheatre Pkwy.',
      }),
  })
  .openapi({ description: 'Facility', title: 'PartialFacility', required: [] })
  .openapi('FacilityPartial')

const FacilitySchema = FacilityPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'name',
        'metro_area',
        'address_country',
        'address_locality',
        'address_region',
        'postal_code',
        'street_address',
        'organisation_name',
        'pops',
        'id',
      ],
      title: 'Facility',
    }),
).openapi('Facility')

const HealthResponsePartialSchema = z
  .object({
    checks: z
      .record(z.string(), z.record(z.string(), z.string()))
      .exactOptional()
      .openapi({
        description:
          'The "checks" object MAY have a number of unique keys,\none for each logical downstream dependency or sub-component.\n\nSince each sub-component may be backed by several nodes\nwith varying health statuses, these keys point to arrays\nof objects. In case of a single-node sub-component\n(or if presence of nodes is not relevant), a single-element\narray SHOULD be used as the value, for consistency.\n\nPlease see\nhttps://tools.ietf.org/id/draft-inadarei-api-health-check-04.html#the-checks-object\nfor details.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human-friendly description of the service.' }),
    links: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Is an object containing link relations and URIs [RFC3986]\nfor external links that MAY contain more information about\nthe health of the endpoint.',
      }),
    notes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Array of notes relevant to current state of health.' }),
    output: z
      .string()
      .exactOptional()
      .openapi({ description: 'Raw error output, in case of "fail" or "warn" states.' }),
    releaseId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Release version of the api implementation.\n', example: '1.23.0' }),
    serviceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier of the service, in the application scope.' }),
    status: z
      .enum(['pass', 'fail', 'warn'])
      .exactOptional()
      .openapi({
        description: 'status indicates whether the service status is\nacceptable or not.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Public version of the service.\n', example: '1' }),
  })
  .openapi({ description: 'Health Status Response', title: 'PartialHealthResponse', required: [] })
  .openapi('HealthResponsePartial')

const HealthResponseSchema = HealthResponsePartialSchema.and(
  z.object({}).openapi({ required: ['status'], title: 'HealthResponse' }),
).openapi('HealthResponse')

const ImplementationResponsePartialSchema = z
  .object({
    schema_version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Version of the implemented IX-API schema.\n', example: '2.0.0' }),
    service_version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Version of the API service.\n', example: '1.23.0' }),
    supported_network_feature_config_types: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Array of supported network feature config types.\n',
        example: ['route_server'],
      }),
    supported_network_feature_types: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Array of supported network feature types.\n',
        example: ['route_server'],
      }),
    supported_network_service_config_types: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Array of supported network service config types.\n',
        example: ['exchange_lan', 'p2p_vc', 'cloud_vc'],
      }),
    supported_network_service_types: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Array of network service types, supported by the IX.\n',
        example: ['exchange_lan', 'p2p_vc', 'cloud_vc'],
      }),
    supported_operations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Array of implemented operations of the ix-api schema.\n',
        example: ['connections_list', 'connections_read', 'network_service_configs_create'],
      }),
  })
  .openapi({
    description: 'API Implementation',
    title: 'PartialImplementationResponse',
    required: [],
  })
  .openapi('ImplementationResponsePartial')

const ImplementationResponseSchema = ImplementationResponsePartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'schema_version',
        'supported_network_service_types',
        'supported_network_service_config_types',
        'supported_network_feature_types',
        'supported_network_feature_config_types',
        'supported_operations',
      ],
      title: 'ImplementationResponse',
    }),
).openapi('ImplementationResponse')

const InvoiceablePartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
  })
  .openapi({ description: 'Invoiceable', title: 'PartialInvoiceable', required: [] })
  .openapi('InvoiceablePartial')

const InvoiceableSchema = InvoiceablePartialSchema.and(
  z.object({}).openapi({ required: ['billing_account'], title: 'Invoiceable' }),
).openapi('Invoiceable')

const IpAddressPartialSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IPv4 or IPv6 Address in the following format:\n- IPv4: [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation)\n- IPv6: hexadecimal colon separated notation\n',
        example: '23.142.52.0',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    fqdn: z.string().max(100).nullable().exactOptional(),
    id: z.string().max(80).exactOptional(),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    prefix_length: z
      .int32()
      .min(0)
      .max(128)
      .exactOptional()
      .openapi({ description: 'The CIDR ip prefix length\n', example: 23 }),
    valid_not_after: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    valid_not_before: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    version: z
      .int()
      .exactOptional()
      .openapi({ description: 'The version of the internet protocol.\n', example: 4 }),
  })
  .openapi({ description: 'IP-Address', title: 'PartialIpAddress', required: [] })
  .openapi('IpAddressPartial')

const IpAddressSchema = IpAddressPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'managing_account',
        'consuming_account',
        'version',
        'address',
        'prefix_length',
        'id',
      ],
      title: 'IpAddress',
    }),
).openapi('IpAddress')

const IpAddressRequestPartialSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IPv4 or IPv6 Address in the following format:\n- IPv4: [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation)\n- IPv6: hexadecimal colon separated notation\n',
        example: '23.142.52.0',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    fqdn: z.string().max(100).nullable().exactOptional(),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    prefix_length: z
      .int32()
      .min(0)
      .max(128)
      .exactOptional()
      .openapi({ description: 'The CIDR ip prefix length\n', example: 23 }),
    valid_not_after: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    valid_not_before: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    version: z
      .int()
      .exactOptional()
      .openapi({ description: 'The version of the internet protocol.\n', example: 4 }),
  })
  .openapi({
    description: 'IP-Address / Prefix allocation Request',
    title: 'PartialIpAddressRequest',
    required: [],
  })
  .openapi('IpAddressRequestPartial')

const IpAddressRequestSchema = IpAddressRequestPartialSchema.and(
  z
    .object({})
    .openapi({
      required: ['managing_account', 'consuming_account', 'version', 'address', 'prefix_length'],
      title: 'IpAddressRequest',
    }),
).openapi('IpAddressRequest')

const IpAddressUpdatePartialSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IPv4 or IPv6 Address in the following format:\n- IPv4: [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation)\n- IPv6: hexadecimal colon separated notation\n',
        example: '23.142.52.0',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    fqdn: z.string().max(100).nullable().exactOptional(),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    prefix_length: z
      .int32()
      .min(0)
      .max(128)
      .exactOptional()
      .openapi({ description: 'The CIDR ip prefix length\n', example: 23 }),
    valid_not_after: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    valid_not_before: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    version: z
      .int()
      .exactOptional()
      .openapi({ description: 'The version of the internet protocol.\n', example: 4 }),
  })
  .openapi({ description: 'IP-Address Update', title: 'PartialIpAddressUpdate', required: [] })
  .openapi('IpAddressUpdatePartial')

const IpAddressUpdateSchema = IpAddressUpdatePartialSchema.and(
  z
    .object({})
    .openapi({
      required: ['managing_account', 'consuming_account', 'version', 'address', 'prefix_length'],
      title: 'IpAddressUpdate',
    }),
).openapi('IpAddressUpdate')

const MP2MPNetworkServiceConfigUpdatePartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    capacity: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The capacity of the service in Mbps. If set to Null,\nthe maximum capacity will be used, i.e. the virtual circuit is\nnot rate-limited.\n\nAn exchange may choose to constrain the available capacity range\nof a `ProductOffering`.\n\nThat means, the service can consume up to the total bandwidth\nof the `Connection`.\n\nTypically the service is charged based on the capacity.',
      }),
    connection: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the connection to use for this `NetworkServiceConfig`.' }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    macs: z.array(z.string()).exactOptional(),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_feature_configs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of ids of `NetworkFeatureConfig`s.\n',
        example: ['12356', '43829'],
        readOnly: true,
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    type: z.string().openapi({ example: 'mp2mp_vc' }),
    vlan_config: VlanConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'MP2MP Network Service Config Update',
    required: ['type'],
    title: 'PartialMP2MPNetworkServiceConfigUpdate',
  })
  .openapi('MP2MPNetworkServiceConfigUpdatePartial')

const MP2MPNetworkServiceConfigUpdateSchema = MP2MPNetworkServiceConfigUpdatePartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'managing_account',
        'consuming_account',
        'vlan_config',
        'billing_account',
        'role_assignments',
        'connection',
        'type',
      ],
      title: 'MP2MPNetworkServiceConfigUpdate',
    }),
).openapi('MP2MPNetworkServiceConfigUpdate')

const MacAddressPartialSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unicast MAC address, formatted hexadecimal values with colons.\n',
        example: '42:23:bc:8e:b8:b0',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    id: z.string().max(80).exactOptional(),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    valid_not_after: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    valid_not_before: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ description: 'MAC-Address', title: 'PartialMacAddress', required: [] })
  .openapi('MacAddressPartial')

const MacAddressSchema = MacAddressPartialSchema.and(
  z
    .object({})
    .openapi({
      required: ['managing_account', 'consuming_account', 'address', 'id'],
      title: 'MacAddress',
    }),
).openapi('MacAddress')

const MacAddressRequestPartialSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unicast MAC address, formatted hexadecimal values with colons.\n',
        example: '42:23:bc:8e:b8:b0',
      }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    valid_not_after: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    valid_not_before: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ description: 'MAC-Address Request', title: 'PartialMacAddressRequest', required: [] })
  .openapi('MacAddressRequestPartial')

const MacAddressRequestSchema = MacAddressRequestPartialSchema.and(
  z
    .object({})
    .openapi({
      required: ['managing_account', 'consuming_account', 'address'],
      title: 'MacAddressRequest',
    }),
).openapi('MacAddressRequest')

const ManageablePartialSchema = z
  .object({
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
  })
  .openapi({ description: 'Managed', title: 'PartialManageable', required: [] })
  .openapi('ManageablePartial')

const ManageableSchema = ManageablePartialSchema.and(
  z.object({}).openapi({ required: ['managing_account'], title: 'Manageable' }),
).openapi('Manageable')

const MemberJoiningRuleSchema: z.ZodType<MemberJoiningRuleType> = z
  .lazy(() =>
    z
      .xor([AllowMemberJoiningRuleSchema, DenyMemberJoiningRuleSchema])
      .openapi({
        description: 'Polymorphic Member Joining Rule',
        discriminator: {
          mapping: {
            allow: '#/components/schemas/AllowMemberJoiningRule',
            deny: '#/components/schemas/DenyMemberJoiningRule',
          },
          propertyName: 'type',
        },
        title: 'MemberJoiningRule',
      }),
  )
  .openapi('MemberJoiningRule')

const MemberJoiningRulePartialSchema: z.ZodType<MemberJoiningRulePartialType> = z
  .lazy(() =>
    z
      .xor([AllowMemberJoiningRulePartialSchema, DenyMemberJoiningRulePartialSchema])
      .openapi({
        description: 'Polymorphic Member Joining Rule',
        discriminator: {
          mapping: {
            allow: '#/components/schemas/AllowMemberJoiningRulePartial',
            deny: '#/components/schemas/DenyMemberJoiningRulePartial',
          },
          propertyName: 'type',
        },
        title: 'MemberJoiningRule (partial)',
      }),
  )
  .openapi('MemberJoiningRulePartial')

const MemberJoiningRuleRequestSchema: z.ZodType<MemberJoiningRuleRequestType> = z
  .lazy(() =>
    z
      .xor([AllowMemberJoiningRuleRequestSchema, DenyMemberJoiningRuleRequestSchema])
      .openapi({
        description: 'Polymorphic Member Joining Rule Request',
        discriminator: {
          mapping: {
            allow: '#/components/schemas/AllowMemberJoiningRuleRequest',
            deny: '#/components/schemas/DenyMemberJoiningRuleRequest',
          },
          propertyName: 'type',
        },
        title: 'MemberJoiningRuleRequest',
      }),
  )
  .openapi('MemberJoiningRuleRequest')

const MemberJoiningRuleRequestPartialSchema: z.ZodType<MemberJoiningRuleRequestPartialType> = z
  .lazy(() =>
    z
      .xor([AllowMemberJoiningRuleRequestPartialSchema, DenyMemberJoiningRuleRequestPartialSchema])
      .openapi({
        description: 'Polymorphic Member Joining Rule Request',
        discriminator: {
          mapping: {
            allow: '#/components/schemas/AllowMemberJoiningRuleRequestPartial',
            deny: '#/components/schemas/DenyMemberJoiningRuleRequestPartial',
          },
          propertyName: 'type',
        },
        title: 'MemberJoiningRuleRequest (partial)',
      }),
  )
  .openapi('MemberJoiningRuleRequestPartial')

const MemberJoiningRuleUpdateSchema: z.ZodType<MemberJoiningRuleUpdateType> = z
  .lazy(() =>
    z
      .xor([AllowMemberJoiningRuleUpdateSchema, DenyMemberJoiningRuleUpdateSchema])
      .openapi({
        description: 'Polymorphic Member Joining Rule Update',
        discriminator: {
          mapping: {
            allow: '#/components/schemas/AllowMemberJoiningRuleUpdate',
            deny: '#/components/schemas/DenyMemberJoiningRuleUpdate',
          },
          propertyName: 'type',
        },
        title: 'MemberJoiningRuleUpdate',
      }),
  )
  .openapi('MemberJoiningRuleUpdate')

const MemberJoiningRuleUpdatePartialSchema: z.ZodType<MemberJoiningRuleUpdatePartialType> = z
  .lazy(() =>
    z
      .xor([AllowMemberJoiningRuleUpdatePartialSchema, DenyMemberJoiningRuleUpdatePartialSchema])
      .openapi({
        description: 'Polymorphic Member Joining Rule Update',
        discriminator: {
          mapping: {
            allow: '#/components/schemas/AllowMemberJoiningRuleUpdatePartial',
            deny: '#/components/schemas/DenyMemberJoiningRuleUpdatePartial',
          },
          propertyName: 'type',
        },
        title: 'MemberJoiningRuleUpdate (partial)',
      }),
  )
  .openapi('MemberJoiningRuleUpdatePartial')

const MetroAreaPartialSchema = z
  .object({
    display_name: z
      .string()
      .max(64)
      .exactOptional()
      .openapi({
        description: 'The name of the metro area. Likely the same as the IATA code.\n',
        example: 'FRA',
      }),
    facilities: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of facilities the metro area network.' }),
    iata_code: z
      .string()
      .max(3)
      .exactOptional()
      .openapi({
        description: 'The three letter IATA airport code for identiying the\nmetro area.\n',
        example: 'FRA',
      }),
    id: z.string().max(80).exactOptional(),
    metro_area_networks: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of networks in the metro area.' }),
    un_locode: z
      .string()
      .max(6)
      .exactOptional()
      .openapi({
        description: 'The UN/LOCODE for identifying the metro area.\n',
        example: 'DE FRA',
      }),
  })
  .openapi({ description: 'MetroArea', title: 'PartialMetroArea', required: [] })
  .openapi('MetroAreaPartial')

const MetroAreaSchema = MetroAreaPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'id',
        'un_locode',
        'iata_code',
        'display_name',
        'facilities',
        'metro_area_networks',
      ],
      title: 'MetroArea',
    }),
).openapi('MetroArea')

const MetroAreaNetworkPartialSchema = z
  .object({
    id: z.string().max(80).exactOptional(),
    metro_area: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the metro area.\n', example: 'met:199399:FRA' }),
    name: z
      .string()
      .max(32)
      .exactOptional()
      .openapi({ description: 'The name of the metro area network.\n', example: 'MY-IX-FRA1' }),
    pops: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of pops in the metro area network.' }),
    service_provider: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({
        description: 'The service provider is operating the network.\nUsually the exchange.\n',
        example: 'MY-IX',
      }),
  })
  .openapi({ description: 'MetroAreaNetwork', title: 'PartialMetroAreaNetwork', required: [] })
  .openapi('MetroAreaNetworkPartial')

const MetroAreaNetworkSchema = MetroAreaNetworkPartialSchema.and(
  z
    .object({})
    .openapi({
      required: ['name', 'metro_area', 'service_provider', 'pops', 'id'],
      title: 'MetroAreaNetwork',
    }),
).openapi('MetroAreaNetwork')

const NetworkFeatureSchema: z.ZodType<NetworkFeatureType> = z
  .lazy(() =>
    z
      .xor([RouteServerNetworkFeatureSchema])
      .openapi({
        description: 'Polymorphic Network Feature',
        discriminator: {
          mapping: { route_server: '#/components/schemas/RouteServerNetworkFeature' },
          propertyName: 'type',
        },
        title: 'NetworkFeature',
      }),
  )
  .openapi('NetworkFeature')

const NetworkFeatureConfigSchema: z.ZodType<NetworkFeatureConfigType> = z
  .lazy(() =>
    z
      .xor([RouteServerNetworkFeatureConfigSchema])
      .openapi({
        description: 'Polymorphic Network Feature Config',
        discriminator: {
          mapping: { route_server: '#/components/schemas/RouteServerNetworkFeatureConfig' },
          propertyName: 'type',
        },
        title: 'NetworkFeatureConfig',
      }),
  )
  .openapi('NetworkFeatureConfig')

const NetworkFeatureConfigPartialSchema: z.ZodType<NetworkFeatureConfigPartialType> = z
  .lazy(() =>
    z
      .xor([RouteServerNetworkFeatureConfigPartialSchema])
      .openapi({
        description: 'Polymorphic Network Feature Config',
        discriminator: {
          mapping: { route_server: '#/components/schemas/RouteServerNetworkFeatureConfigPartial' },
          propertyName: 'type',
        },
        title: 'NetworkFeatureConfig (partial)',
      }),
  )
  .openapi('NetworkFeatureConfigPartial')

const NetworkFeatureConfigRequestSchema: z.ZodType<NetworkFeatureConfigRequestType> = z
  .lazy(() =>
    z
      .xor([RouteServerNetworkFeatureConfigRequestSchema])
      .openapi({
        description: 'Polymorphic Network Feature Config Request',
        discriminator: {
          mapping: { route_server: '#/components/schemas/RouteServerNetworkFeatureConfigRequest' },
          propertyName: 'type',
        },
        title: 'NetworkFeatureConfigRequest',
      }),
  )
  .openapi('NetworkFeatureConfigRequest')

const NetworkFeatureConfigRequestPartialSchema: z.ZodType<NetworkFeatureConfigRequestPartialType> =
  z
    .lazy(() =>
      z
        .xor([RouteServerNetworkFeatureConfigRequestPartialSchema])
        .openapi({
          description: 'Polymorphic Network Feature Config Request',
          discriminator: {
            mapping: {
              route_server: '#/components/schemas/RouteServerNetworkFeatureConfigRequestPartial',
            },
            propertyName: 'type',
          },
          title: 'NetworkFeatureConfigRequest (partial)',
        }),
    )
    .openapi('NetworkFeatureConfigRequestPartial')

const NetworkFeatureConfigUpdateSchema: z.ZodType<NetworkFeatureConfigUpdateType> = z
  .lazy(() =>
    z
      .xor([RouteServerNetworkFeatureConfigUpdateSchema])
      .openapi({
        description: 'Polymorphic Network Feauture Config Update',
        discriminator: {
          mapping: { route_server: '#/components/schemas/RouteServerNetworkFeatureConfigUpdate' },
          propertyName: 'type',
        },
        title: 'NetworkFeatureConfigUpdate',
      }),
  )
  .openapi('NetworkFeatureConfigUpdate')

const NetworkFeatureConfigUpdatePartialSchema: z.ZodType<NetworkFeatureConfigUpdatePartialType> = z
  .lazy(() =>
    z
      .xor([RouteServerNetworkFeatureConfigUpdatePartialSchema])
      .openapi({
        description: 'Polymorphic Network Feauture Config Update',
        discriminator: {
          mapping: {
            route_server: '#/components/schemas/RouteServerNetworkFeatureConfigUpdatePartial',
          },
          propertyName: 'type',
        },
        title: 'NetworkFeatureConfigUpdate (partial)',
      }),
  )
  .openapi('NetworkFeatureConfigUpdatePartial')

const NetworkFeaturePartialSchema: z.ZodType<NetworkFeaturePartialType> = z
  .lazy(() =>
    z
      .xor([RouteServerNetworkFeaturePartialSchema])
      .openapi({
        description: 'Polymorphic Network Feature',
        discriminator: {
          mapping: { route_server: '#/components/schemas/RouteServerNetworkFeaturePartial' },
          propertyName: 'type',
        },
        title: 'NetworkFeature (partial)',
      }),
  )
  .openapi('NetworkFeaturePartial')

const NetworkServiceSchema: z.ZodType<NetworkServiceType> = z
  .lazy(() =>
    z
      .xor([
        ExchangeLanNetworkServiceSchema,
        P2PNetworkServiceSchema,
        P2MPNetworkServiceSchema,
        MP2MPNetworkServiceSchema,
        CloudNetworkServiceSchema,
      ])
      .openapi({
        description: 'Polymorphic Network Services',
        discriminator: {
          mapping: {
            cloud_vc: '#/components/schemas/CloudNetworkService',
            exchange_lan: '#/components/schemas/ExchangeLanNetworkService',
            mp2mp_vc: '#/components/schemas/MP2MPNetworkService',
            p2mp_vc: '#/components/schemas/P2MPNetworkService',
            p2p_vc: '#/components/schemas/P2PNetworkService',
          },
          propertyName: 'type',
        },
        title: 'NetworkService',
      }),
  )
  .openapi('NetworkService')

const NetworkServiceChangeRequestPartialSchema = z
  .object({
    capacity: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The desired capacity of the service in Mbps.\n\nMust be within the range of `bandwidth_min` and\n`bandwidth_max` of the `ProductOffering`.\n\nWhen `null` the maximum capacity wil be used.',
      }),
    product_offering: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Migrate to a diffrent product offering. Please note, that\nthe offering only may differ in bandwidth.',
      }),
  })
  .openapi({
    description: 'NetworkServiceChangeRequest',
    title: 'PartialNetworkServiceChangeRequest',
    required: [],
  })
  .openapi('NetworkServiceChangeRequestPartial')

const NetworkServiceChangeRequestSchema = NetworkServiceChangeRequestPartialSchema.and(
  z.object({}).openapi({ required: ['product_offering'], title: 'NetworkServiceChangeRequest' }),
).openapi('NetworkServiceChangeRequest')

const NetworkServiceConfigSchema: z.ZodType<NetworkServiceConfigType> = z
  .lazy(() =>
    z
      .xor([
        ExchangeLanNetworkServiceConfigSchema,
        P2PNetworkServiceConfigSchema,
        P2MPNetworkServiceConfigSchema,
        MP2MPNetworkServiceConfigSchema,
        CloudNetworkServiceConfigSchema,
      ])
      .openapi({
        description: 'Polymorphic Network Service Config',
        discriminator: {
          mapping: {
            cloud_vc: '#/components/schemas/CloudNetworkServiceConfig',
            exchange_lan: '#/components/schemas/ExchangeLanNetworkServiceConfig',
            mp2mp_vc: '#/components/schemas/MP2MPNetworkServiceConfig',
            p2mp_vc: '#/components/schemas/P2MPNetworkServiceConfig',
            p2p_vc: '#/components/schemas/P2PNetworkServiceConfig',
          },
          propertyName: 'type',
        },
        title: 'NetworkServiceConfig',
      }),
  )
  .openapi('NetworkServiceConfig')

const NetworkServiceConfigPartialSchema: z.ZodType<NetworkServiceConfigPartialType> = z
  .lazy(() =>
    z
      .xor([
        ExchangeLanNetworkServiceConfigPartialSchema,
        P2PNetworkServiceConfigPartialSchema,
        P2MPNetworkServiceConfigPartialSchema,
        MP2MPNetworkServiceConfigPartialSchema,
        CloudNetworkServiceConfigPartialSchema,
      ])
      .openapi({
        description: 'Polymorphic Network Service Config',
        discriminator: {
          mapping: {
            cloud_vc: '#/components/schemas/CloudNetworkServiceConfigPartial',
            exchange_lan: '#/components/schemas/ExchangeLanNetworkServiceConfigPartial',
            mp2mp_vc: '#/components/schemas/MP2MPNetworkServiceConfigPartial',
            p2mp_vc: '#/components/schemas/P2MPNetworkServiceConfigPartial',
            p2p_vc: '#/components/schemas/P2PNetworkServiceConfigPartial',
          },
          propertyName: 'type',
        },
        title: 'NetworkServiceConfig (partial)',
      }),
  )
  .openapi('NetworkServiceConfigPartial')

const NetworkServiceConfigRequestSchema: z.ZodType<NetworkServiceConfigRequestType> = z
  .lazy(() =>
    z
      .xor([
        ExchangeLanNetworkServiceConfigRequestSchema,
        P2PNetworkServiceConfigRequestSchema,
        P2MPNetworkServiceConfigRequestSchema,
        MP2MPNetworkServiceConfigRequestSchema,
        CloudNetworkServiceConfigRequestSchema,
      ])
      .openapi({
        description: 'Polymorhic Network Service Config Request',
        discriminator: {
          mapping: {
            cloud_vc: '#/components/schemas/CloudNetworkServiceConfigRequest',
            exchange_lan: '#/components/schemas/ExchangeLanNetworkServiceConfigRequest',
            mp2mp_vc: '#/components/schemas/MP2MPNetworkServiceConfigRequest',
            p2mp_vc: '#/components/schemas/P2MPNetworkServiceConfigRequest',
            p2p_vc: '#/components/schemas/P2PNetworkServiceConfigRequest',
          },
          propertyName: 'type',
        },
        title: 'NetworkServiceConfigRequest',
      }),
  )
  .openapi('NetworkServiceConfigRequest')

const NetworkServiceConfigRequestPartialSchema: z.ZodType<NetworkServiceConfigRequestPartialType> =
  z
    .lazy(() =>
      z
        .xor([
          ExchangeLanNetworkServiceConfigRequestPartialSchema,
          P2PNetworkServiceConfigRequestPartialSchema,
          P2MPNetworkServiceConfigRequestPartialSchema,
          MP2MPNetworkServiceConfigRequestPartialSchema,
          CloudNetworkServiceConfigRequestPartialSchema,
        ])
        .openapi({
          description: 'Polymorhic Network Service Config Request',
          discriminator: {
            mapping: {
              cloud_vc: '#/components/schemas/CloudNetworkServiceConfigRequestPartial',
              exchange_lan: '#/components/schemas/ExchangeLanNetworkServiceConfigRequestPartial',
              mp2mp_vc: '#/components/schemas/MP2MPNetworkServiceConfigRequestPartial',
              p2mp_vc: '#/components/schemas/P2MPNetworkServiceConfigRequestPartial',
              p2p_vc: '#/components/schemas/P2PNetworkServiceConfigRequestPartial',
            },
            propertyName: 'type',
          },
          title: 'NetworkServiceConfigRequest (partial)',
        }),
    )
    .openapi('NetworkServiceConfigRequestPartial')

const NetworkServiceConfigUpdateSchema: z.ZodType<NetworkServiceConfigUpdateType> = z
  .lazy(() =>
    z
      .xor([
        ExchangeLanNetworkServiceConfigUpdateSchema,
        P2PNetworkServiceConfigUpdateSchema,
        P2MPNetworkServiceConfigRequestSchema,
        MP2MPNetworkServiceConfigRequestSchema,
        CloudNetworkServiceConfigUpdateSchema,
      ])
      .openapi({
        description: 'Polymorphic Network Service Config',
        discriminator: {
          mapping: {
            cloud_vc: '#/components/schemas/CloudNetworkServiceConfigUpdate',
            exchange_lan: '#/components/schemas/ExchangeLanNetworkServiceConfigUpdate',
            mp2mp_vc: '#/components/schemas/MP2MPNetworkServiceConfigRequest',
            p2mp_vc: '#/components/schemas/P2MPNetworkServiceConfigRequest',
            p2p_vc: '#/components/schemas/P2PNetworkServiceConfigUpdate',
          },
          propertyName: 'type',
        },
        title: 'NetworkServiceConfigUpdate',
      }),
  )
  .openapi('NetworkServiceConfigUpdate')

const NetworkServiceConfigUpdatePartialSchema: z.ZodType<NetworkServiceConfigUpdatePartialType> = z
  .lazy(() =>
    z
      .xor([
        ExchangeLanNetworkServiceConfigUpdatePartialSchema,
        P2PNetworkServiceConfigUpdatePartialSchema,
        P2MPNetworkServiceConfigRequestPartialSchema,
        MP2MPNetworkServiceConfigRequestPartialSchema,
        CloudNetworkServiceConfigUpdatePartialSchema,
      ])
      .openapi({
        description: 'Polymorphic Network Service Config',
        discriminator: {
          mapping: {
            cloud_vc: '#/components/schemas/CloudNetworkServiceConfigUpdatePartial',
            exchange_lan: '#/components/schemas/ExchangeLanNetworkServiceConfigUpdatePartial',
            mp2mp_vc: '#/components/schemas/MP2MPNetworkServiceConfigRequestPartial',
            p2mp_vc: '#/components/schemas/P2MPNetworkServiceConfigRequestPartial',
            p2p_vc: '#/components/schemas/P2PNetworkServiceConfigUpdatePartial',
          },
          propertyName: 'type',
        },
        title: 'NetworkServiceConfigUpdate (partial)',
      }),
  )
  .openapi('NetworkServiceConfigUpdatePartial')

const NetworkServiceDeleteResponseSchema = z
  .xor([
    P2PNetworkServiceSchema,
    P2MPNetworkServiceSchema,
    MP2MPNetworkServiceSchema,
    CloudNetworkServiceSchema,
  ])
  .openapi({
    description: 'Polymorphic Network Service Request',
    discriminator: {
      mapping: {
        cloud_vc: '#/components/schemas/CloudNetworkService',
        mp2mp_vc: '#/components/schemas/MP2MPNetworkService',
        p2mp_vc: '#/components/schemas/P2MPNetworkService',
        p2p_vc: '#/components/schemas/P2PNetworkService',
      },
      propertyName: 'type',
    },
    title: 'NetworkServiceDeleteResponse',
  })
  .openapi('NetworkServiceDeleteResponse')

const NetworkServiceDeleteResponsePartialSchema = z
  .xor([
    P2PNetworkServicePartialSchema,
    P2MPNetworkServicePartialSchema,
    MP2MPNetworkServicePartialSchema,
    CloudNetworkServicePartialSchema,
  ])
  .openapi({
    description: 'Polymorphic Network Service Request',
    discriminator: {
      mapping: {
        cloud_vc: '#/components/schemas/CloudNetworkServicePartial',
        mp2mp_vc: '#/components/schemas/MP2MPNetworkServicePartial',
        p2mp_vc: '#/components/schemas/P2MPNetworkServicePartial',
        p2p_vc: '#/components/schemas/P2PNetworkServicePartial',
      },
      propertyName: 'type',
    },
    title: 'NetworkServiceDeleteResponse (partial)',
  })
  .openapi('NetworkServiceDeleteResponsePartial')

const NetworkServicePartialSchema: z.ZodType<NetworkServicePartialType> = z
  .lazy(() =>
    z
      .xor([
        ExchangeLanNetworkServicePartialSchema,
        P2PNetworkServicePartialSchema,
        P2MPNetworkServicePartialSchema,
        MP2MPNetworkServicePartialSchema,
        CloudNetworkServicePartialSchema,
      ])
      .openapi({
        description: 'Polymorphic Network Services',
        discriminator: {
          mapping: {
            cloud_vc: '#/components/schemas/CloudNetworkServicePartial',
            exchange_lan: '#/components/schemas/ExchangeLanNetworkServicePartial',
            mp2mp_vc: '#/components/schemas/MP2MPNetworkServicePartial',
            p2mp_vc: '#/components/schemas/P2MPNetworkServicePartial',
            p2p_vc: '#/components/schemas/P2PNetworkServicePartial',
          },
          propertyName: 'type',
        },
        title: 'NetworkService (partial)',
      }),
  )
  .openapi('NetworkServicePartial')

const NetworkServiceRequestSchema: z.ZodType<NetworkServiceRequestType> = z
  .lazy(() =>
    z
      .xor([
        P2PNetworkServiceRequestSchema,
        P2MPNetworkServiceRequestSchema,
        MP2MPNetworkServiceRequestSchema,
        CloudNetworkServiceRequestSchema,
      ])
      .openapi({
        description: 'Polymorphic Network Service Request',
        discriminator: {
          mapping: {
            cloud_vc: '#/components/schemas/CloudNetworkServiceRequest',
            mp2mp_vc: '#/components/schemas/MP2MPNetworkServiceRequest',
            p2mp_vc: '#/components/schemas/P2MPNetworkServiceRequest',
            p2p_vc: '#/components/schemas/P2PNetworkServiceRequest',
          },
          propertyName: 'type',
        },
        title: 'NetworkServiceRequest',
      }),
  )
  .openapi('NetworkServiceRequest')

const NetworkServiceRequestPartialSchema: z.ZodType<NetworkServiceRequestPartialType> = z
  .lazy(() =>
    z
      .xor([
        P2PNetworkServiceRequestPartialSchema,
        P2MPNetworkServiceRequestPartialSchema,
        MP2MPNetworkServiceRequestPartialSchema,
        CloudNetworkServiceRequestPartialSchema,
      ])
      .openapi({
        description: 'Polymorphic Network Service Request',
        discriminator: {
          mapping: {
            cloud_vc: '#/components/schemas/CloudNetworkServiceRequestPartial',
            mp2mp_vc: '#/components/schemas/MP2MPNetworkServiceRequestPartial',
            p2mp_vc: '#/components/schemas/P2MPNetworkServiceRequestPartial',
            p2p_vc: '#/components/schemas/P2PNetworkServiceRequestPartial',
          },
          propertyName: 'type',
        },
        title: 'NetworkServiceRequest (partial)',
      }),
  )
  .openapi('NetworkServiceRequestPartial')

const OwnablePartialSchema = z
  .object({
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
  })
  .openapi({ description: 'Ownable', title: 'PartialOwnable', required: [] })
  .openapi('OwnablePartial')

const OwnableSchema = OwnablePartialSchema.and(
  z.object({}).openapi({ required: ['managing_account', 'consuming_account'], title: 'Ownable' }),
).openapi('Ownable')

const P2MPNetworkServiceConfigUpdatePartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    capacity: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The capacity of the service in Mbps. If set to Null,\nthe maximum capacity will be used, i.e. the virtual circuit is\nnot rate-limited.\n\nAn exchange may choose to constrain the available capacity range\nof a `ProductOffering`.\n\nThat means, the service can consume up to the total bandwidth\nof the `Connection`.\n\nTypically the service is charged based on the capacity.',
      }),
    connection: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the connection to use for this `NetworkServiceConfig`.' }),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    network_feature_configs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of ids of `NetworkFeatureConfig`s.\n',
        example: ['12356', '43829'],
        readOnly: true,
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role: z
      .enum(['root', 'leaf'])
      .default('leaf')
      .exactOptional()
      .openapi({
        description:
          'A `leaf` can only reach roots and is\nisolated from other leafs. A `root` can\nreach any other point in the virtual circuit\nincluding other roots.',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    type: z.string().openapi({ example: 'p2mp_vc' }),
    vlan_config: VlanConfigSchema.exactOptional(),
  })
  .openapi({
    description: 'P2MP Network Service Config Update',
    required: ['type'],
    title: 'PartialP2MPNetworkServiceConfigUpdate',
  })
  .openapi('P2MPNetworkServiceConfigUpdatePartial')

const P2MPNetworkServiceConfigUpdateSchema = P2MPNetworkServiceConfigUpdatePartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'managing_account',
        'consuming_account',
        'vlan_config',
        'billing_account',
        'role_assignments',
        'connection',
        'type',
      ],
      title: 'P2MPNetworkServiceConfigUpdate',
    }),
).openapi('P2MPNetworkServiceConfigUpdate')

const PointOfPresencePartialSchema = z
  .object({
    devices: z.array(z.string()).exactOptional(),
    facility: z.string().exactOptional(),
    id: z.string().max(80).exactOptional(),
    metro_area_network: z.string().exactOptional(),
    name: z.string().max(40).exactOptional(),
  })
  .openapi({ description: 'Point Of Presence', title: 'PartialPointOfPresence', required: [] })
  .openapi('PointOfPresencePartial')

const PointOfPresenceSchema = PointOfPresencePartialSchema.and(
  z
    .object({})
    .openapi({
      required: ['name', 'facility', 'metro_area_network', 'devices', 'id'],
      title: 'PointOfPresence',
    }),
).openapi('PointOfPresence')

const PortPartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    connection: z.string().nullable().exactOptional(),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    device: z
      .string()
      .exactOptional()
      .openapi({ description: 'The device the port.\n', example: 'device:29139871' }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    id: z.string().max(80).exactOptional(),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    media_type: z
      .string()
      .max(20)
      .exactOptional()
      .openapi({
        description:
          "The media type of the port.\nQuery the device's capabilities for available types.\n",
        example: '10GBASE-LR',
      }),
    name: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({ description: 'Name of the port (set by the exchange)', readOnly: true }),
    pop: z
      .string()
      .exactOptional()
      .openapi({ description: 'Same as the `pop` of the `device`.\n', example: 'pop:2913' }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    speed: z.int().min(0).nullable().exactOptional().openapi({ readOnly: true }),
    state: z
      .enum([
        'requested',
        'allocated',
        'testing',
        'production',
        'production_change_pending',
        'decommission_requested',
        'decommissioned',
        'archived',
        'error',
        'operator',
        'scheduled',
      ])
      .exactOptional(),
    status: z.array(StatusSchema).exactOptional(),
  })
  .openapi({ description: 'Port', title: 'PartialPort', required: [] })
  .openapi('PortPartial')

const PortSchema = PortPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'state',
        'managing_account',
        'consuming_account',
        'billing_account',
        'role_assignments',
        'id',
        'media_type',
        'device',
        'pop',
      ],
      title: 'Port',
    }),
).openapi('Port')

const PortRequestPartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    connection: z.string().nullable().exactOptional(),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    media_type: z
      .string()
      .max(20)
      .exactOptional()
      .openapi({
        description:
          "The media type of the interface.\nSee the device's capabilities to see what types\nare available.\n",
        example: '10GBASE-LR',
      }),
    pop: z
      .string()
      .exactOptional()
      .openapi({ description: 'Same as the `pop` of the `device`.\n', example: 'pop:2913' }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    speed: z.int().min(0).nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ description: 'Port Request', title: 'PartialPortRequest', required: [] })
  .openapi('PortRequestPartial')

const PortRequestSchema = PortRequestPartialSchema.and(
  z
    .object({})
    .openapi({
      required: [
        'managing_account',
        'consuming_account',
        'billing_account',
        'role_assignments',
        'pop',
        'media_type',
      ],
      title: 'PortRequest',
    }),
).openapi('PortRequest')

const PortUpdatePartialSchema = z
  .object({
    billing_account: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An account requires billing_information to be used as a `billing_account`.',
      }),
    connection: z.string().nullable().exactOptional(),
    consuming_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account consuming a service.\n\nUsed to be `owning_customer`.\n',
        example: '2381982',
      }),
    contract_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference to a contract. If no specific contract is used, a default\nMAY be chosen by the implementer.\n',
        example: 'contract:31824',
      }),
    external_ref: z
      .string()
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference field, free to use for the API user.',
        example: 'IX:Service:23042',
      }),
    managing_account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the account responsible for managing the service via\nthe API. A manager can read and update the state of entities.\n',
        example: '238189294',
      }),
    purchase_order: z
      .string()
      .max(80)
      .default('')
      .exactOptional()
      .openapi({
        description: 'Purchase Order ID which will be displayed on the invoice.\n',
        example: 'Project: DC Moon',
      }),
    role_assignments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of `RoleAssignment`s. See the documentation\non the specific `required_contact_roles`,\n`nfc_required_contact_roles` or `nsc_required_contact_roles`\non what `RoleAssignment`s to provide.\n',
        example: ['c-impl:123', 'c-noc:331'],
      }),
    speed: z.int().min(0).nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ description: 'Port Update', title: 'PartialPortUpdate', required: [] })
  .openapi('PortUpdatePartial')

const PortUpdateSchema = PortUpdatePartialSchema.and(
  z
    .object({})
    .openapi({
      required: ['managing_account', 'consuming_account', 'billing_account', 'role_assignments'],
      title: 'PortUpdate',
    }),
).openapi('PortUpdate')

const ProblemResponsePartialSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable explanation specific to this\noccurrence of the problem.',
      }),
    instance: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URI reference that identifies the specific\noccurrence of the problem.  It may or may not yield\nfurther information if dereferenced.',
      }),
    status: z
      .int()
      .min(100)
      .exactOptional()
      .openapi({
        description:
          'The HTTP status code ([RFC7231], Section 6)\ngenerated by the origin server for this occurrence\nof the problem.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short, human-readable summary of the problem type.\n\nIt SHOULD NOT change from occurrence to\noccurrence of the problem, except for purposes\nof localization (e.g., using proactive content\nnegotiation; see [RFC7231], Section 3.4).\n',
        example: 'Some fields have validation errors.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URI reference (see RFC3986) that identifies the\nproblem type.\n\nThis specification encourages that, when\ndereferenced, it provide human-readable documentation\nfor the problem type (e.g., using HTML\n[W3C.REC-html5-20141028]).\n\nWhen this member is not present, its value is assumed\nto be "about:blank".\n',
        example: 'about:blank',
      }),
  })
  .openapi({
    description: 'Encodes a problem into an appropriate response body.',
    title: 'PartialProblemResponse',
    required: [],
  })
  .openapi('ProblemResponsePartial')

const ProblemResponseSchema = ProblemResponsePartialSchema.and(
  z.object({}).openapi({ required: ['type'], title: 'ProblemResponse' }),
).openapi('ProblemResponse')

const ProductOfferingSchema: z.ZodType<ProductOfferingType> = z
  .lazy(() =>
    z
      .xor([
        ExchangeLanNetworkProductOfferingSchema,
        P2PNetworkProductOfferingSchema,
        MP2MPNetworkProductOfferingSchema,
        P2MPNetworkProductOfferingSchema,
        CloudNetworkProductOfferingSchema,
      ])
      .openapi({
        description: 'Polymorphic Product Offering',
        discriminator: {
          mapping: {
            cloud_vc: '#/components/schemas/CloudNetworkProductOffering',
            exchange_lan: '#/components/schemas/ExchangeLanNetworkProductOffering',
            mp2mp_vc: '#/components/schemas/MP2MPNetworkProductOffering',
            p2mp_vc: '#/components/schemas/P2MPNetworkProductOffering',
            p2p_vc: '#/components/schemas/P2PNetworkProductOffering',
          },
          propertyName: 'type',
        },
        title: 'ProductOffering',
      }),
  )
  .openapi('ProductOffering')

const ProductOfferingPartialSchema: z.ZodType<ProductOfferingPartialType> = z
  .lazy(() =>
    z
      .xor([
        ExchangeLanNetworkProductOfferingPartialSchema,
        P2PNetworkProductOfferingPartialSchema,
        MP2MPNetworkProductOfferingPartialSchema,
        P2MPNetworkProductOfferingPartialSchema,
        CloudNetworkProductOfferingPartialSchema,
      ])
      .openapi({
        description: 'Polymorphic Product Offering',
        discriminator: {
          mapping: {
            cloud_vc: '#/components/schemas/CloudNetworkProductOfferingPartial',
            exchange_lan: '#/components/schemas/ExchangeLanNetworkProductOfferingPartial',
            mp2mp_vc: '#/components/schemas/MP2MPNetworkProductOfferingPartial',
            p2mp_vc: '#/components/schemas/P2MPNetworkProductOfferingPartial',
            p2p_vc: '#/components/schemas/P2PNetworkProductOfferingPartial',
          },
          propertyName: 'type',
        },
        title: 'ProductOffering (partial)',
      }),
  )
  .openapi('ProductOfferingPartial')

const RateLimitedNetworkServiceConfigPartialSchema = z
  .object({
    capacity: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The capacity of the service in Mbps. If set to Null,\nthe maximum capacity will be used, i.e. the virtual circuit is\nnot rate-limited.\n\nAn exchange may choose to constrain the available capacity range\nof a `ProductOffering`.\n\nThat means, the service can consume up to the total bandwidth\nof the `Connection`.\n\nTypically the service is charged based on the capacity.',
      }),
  })
  .openapi({
    description: 'Rate limited network services include a capacity\nproperty.',
    title: 'PartialRateLimitedNetworkServiceConfig',
    required: [],
  })
  .openapi('RateLimitedNetworkServiceConfigPartial')

const RateLimitedNetworkServiceConfigSchema = RateLimitedNetworkServiceConfigPartialSchema.and(
  z.object({}).openapi({ title: 'RateLimitedNetworkServiceConfig' }),
).openapi('RateLimitedNetworkServiceConfig')

const RefreshTokenRequestPartialSchema = z
  .object({ refresh_token: z.string().exactOptional() })
  .openapi({
    description: 'RefreshTokenRequest',
    title: 'PartialRefreshTokenRequest',
    required: [],
  })
  .openapi('RefreshTokenRequestPartial')

const RefreshTokenRequestSchema = RefreshTokenRequestPartialSchema.and(
  z.object({}).openapi({ required: ['refresh_token'], title: 'RefreshTokenRequest' }),
).openapi('RefreshTokenRequest')

const RolePartialSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({ description: 'The name of the role.\n', example: 'noc' }),
    required_fields: z
      .array(z.string().max(80))
      .exactOptional()
      .openapi({ description: 'A list of required field names.\n', example: ['name', 'email'] }),
  })
  .openapi({ description: 'A role for a contact', title: 'PartialRole', required: [] })
  .openapi('RolePartial')

const RoleSchema = RolePartialSchema.and(
  z.object({}).openapi({ required: ['name', 'required_fields', 'id'], title: 'Role' }),
).openapi('Role')

const RoleAssignmentPartialSchema = z
  .object({
    contact: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `id` of a contact the role is assigned to.\n',
        example: 'contact:42b',
      }),
    id: z.string().exactOptional(),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `id` of a role the contact is assigned to.\n',
        example: 'role:23',
      }),
  })
  .openapi({
    description: 'A role assignment for a contact',
    title: 'PartialRoleAssignment',
    required: [],
  })
  .openapi('RoleAssignmentPartial')

const RoleAssignmentSchema = RoleAssignmentPartialSchema.and(
  z.object({}).openapi({ required: ['role', 'contact', 'id'], title: 'RoleAssignment' }),
).openapi('RoleAssignment')

const RoleAssignmentRequestPartialSchema = z
  .object({
    contact: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `id` of a contact the role is assigned to.\n',
        example: 'contact:42b',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `id` of a role the contact is assigned to.\n',
        example: 'role:23',
      }),
  })
  .openapi({
    description: 'A role assignment request',
    title: 'PartialRoleAssignmentRequest',
    required: [],
  })
  .openapi('RoleAssignmentRequestPartial')

const RoleAssignmentRequestSchema = RoleAssignmentRequestPartialSchema.and(
  z.object({}).openapi({ required: ['role', 'contact'], title: 'RoleAssignmentRequest' }),
).openapi('RoleAssignmentRequest')

const RoleAssignmentUpdatePartialSchema = z
  .object({
    contact: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `id` of a contact the role is assigned to.\n',
        example: 'contact:42b',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `id` of a role the contact is assigned to.\n',
        example: 'role:23',
      }),
  })
  .openapi({
    description: 'A role assignemnt update',
    title: 'PartialRoleAssignmentUpdate',
    required: [],
  })
  .openapi('RoleAssignmentUpdatePartial')

const RoleAssignmentUpdateSchema = RoleAssignmentUpdatePartialSchema.and(
  z.object({}).openapi({ required: ['role', 'contact'], title: 'RoleAssignmentUpdate' }),
).openapi('RoleAssignmentUpdate')

const RoleRequestPartialSchema = z
  .object({
    name: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({ description: 'The name of the role.\n', example: 'noc' }),
    required_fields: z
      .array(z.string().max(80))
      .exactOptional()
      .openapi({ description: 'A list of required field names.\n', example: ['name', 'email'] }),
  })
  .openapi({ description: 'A new role', title: 'PartialRoleRequest', required: [] })
  .openapi('RoleRequestPartial')

const RoleRequestSchema = RoleRequestPartialSchema.and(
  z.object({}).openapi({ required: ['name', 'required_fields'], title: 'RoleRequest' }),
).openapi('RoleRequest')

const RoleUpdatePartialSchema = z
  .object({
    name: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({ description: 'The name of the role.\n', example: 'noc' }),
    required_fields: z
      .array(z.string().max(80))
      .exactOptional()
      .openapi({ description: 'A list of required field names.\n', example: ['name', 'email'] }),
  })
  .openapi({ description: 'A role update', title: 'PartialRoleUpdate', required: [] })
  .openapi('RoleUpdatePartial')

const RoleUpdateSchema = RoleUpdatePartialSchema.and(
  z.object({}).openapi({ required: ['name', 'required_fields'], title: 'RoleUpdate' }),
).openapi('RoleUpdate')

const StatefulPartialSchema = z
  .object({
    state: z
      .enum([
        'requested',
        'allocated',
        'testing',
        'production',
        'production_change_pending',
        'decommission_requested',
        'decommissioned',
        'archived',
        'error',
        'operator',
        'scheduled',
      ])
      .exactOptional(),
    status: z.array(StatusSchema).exactOptional(),
  })
  .openapi({ description: 'A stateful object', title: 'PartialStateful', required: [] })
  .openapi('StatefulPartial')

const StatefulSchema = StatefulPartialSchema.and(
  z.object({}).openapi({ required: ['state'], title: 'Stateful' }),
).openapi('Stateful')

const VlanConfigPartialSchema = z
  .xor([VLanConfigDot1QPartialSchema, VLanConfigQinQPartialSchema, VLanConfigPortPartialSchema])
  .openapi({
    description:
      'The vlan configuration defines how the service\nis made available on the connection.',
    discriminator: {
      mapping: {
        dot1q: '#/components/schemas/VLanConfigDot1QPartial',
        port: '#/components/schemas/VLanConfigPortPartial',
        qinq: '#/components/schemas/VLanConfigQinQPartial',
      },
      propertyName: 'vlan_type',
    },
    title: 'VlanConfig (partial)',
  })
  .openapi('VlanConfigPartial')

const BearerSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

export const getAccountsRoute = createRoute({
  method: 'get',
  path: '/accounts',
  tags: ['accounts'],
  description:
    'Retrieve a list of `Account`s.\n\nThis includes all accounts the currently authorized account\nis managing and the current account itself.',
  operationId: 'accounts_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by state',
            in: 'query',
            name: 'state',
            required: false,
            schema: { type: 'string' },
          },
        }),
      state__is_not: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by state__is_not',
            in: 'query',
            name: 'state__is_not',
            required: false,
            schema: { type: 'string' },
          },
        }),
      managing_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by managing_account',
            in: 'query',
            name: 'managing_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      billable: z
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
            description: 'Filter by billable',
            in: 'query',
            name: 'billable',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      external_ref: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by external_ref',
            in: 'query',
            name: 'external_ref',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: Account',
      content: { 'application/json': { schema: z.array(AccountSchema) } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const postAccountsRoute = createRoute({
  method: 'post',
  path: '/accounts',
  tags: ['accounts'],
  description: 'Create a new account.',
  operationId: 'accounts_create',
  request: {
    body: {
      description: 'Account Request',
      content: { 'application/json': { schema: AccountRequestSchema } },
    },
  },
  responses: {
    201: { description: 'Account', content: { 'application/json': { schema: AccountSchema } } },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getAccountsIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{id}',
  tags: ['accounts'],
  description: 'Get a single account.',
  operationId: 'accounts_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: { description: 'Account', content: { 'application/json': { schema: AccountSchema } } },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const putAccountsIdRoute = createRoute({
  method: 'put',
  path: '/accounts/{id}',
  tags: ['accounts'],
  description: 'Update the entire account.',
  operationId: 'accounts_update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    body: {
      description: 'Account Update Request',
      content: { 'application/json': { schema: AccountUpdateSchema } },
    },
  },
  responses: {
    202: { description: 'Account', content: { 'application/json': { schema: AccountSchema } } },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const deleteAccountsIdRoute = createRoute({
  method: 'delete',
  path: '/accounts/{id}',
  tags: ['accounts'],
  description:
    'Accounts can be deleted, when all services and configs\nare decommissioned or the account is not longer referenced\ne.g. as a `managing_account` or `billing_account`.\n\nDeleting an account will cascade to `contacts` and\n`role-assignments`.\n\nThe request will immediately fail, if the above preconditions\nare not met.',
  operationId: 'accounts_destroy',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: { description: 'Account', content: { 'application/json': { schema: AccountSchema } } },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const patchAccountsIdRoute = createRoute({
  method: 'patch',
  path: '/accounts/{id}',
  tags: ['accounts'],
  description: 'Update parts of an account.',
  operationId: 'accounts_partial_update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    body: {
      description: 'Account Update Request',
      content: { 'application/merge-patch+json': { schema: AccountUpdatePartialSchema } },
    },
  },
  responses: {
    202: { description: 'Account', content: { 'application/json': { schema: AccountSchema } } },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const postAuthRefreshRoute = createRoute({
  method: 'post',
  path: '/auth/refresh',
  tags: ['auth'],
  description:
    'Reauthenticate the API user, issue a new `access_token`\nand `refresh_token` pair by providing the `refresh_token`\nin the request body.',
  operationId: 'auth_token_refresh',
  request: {
    body: {
      description: 'RefreshTokenRequest',
      content: { 'application/json': { schema: RefreshTokenRequestSchema } },
    },
  },
  responses: {
    201: { description: 'AuthToken', content: { 'application/json': { schema: AuthTokenSchema } } },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                    'https://errors.ix-api.net/v2/not-authenticated.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
  security: [],
})

export const postAuthTokenRoute = createRoute({
  method: 'post',
  path: '/auth/token',
  tags: ['auth'],
  description: 'Authenticate an API user identified by `api_key` and\n`api_secret`.',
  operationId: 'auth_token_create',
  request: {
    body: {
      description: 'AuthTokenRequest',
      content: { 'application/json': { schema: AuthTokenRequestSchema } },
    },
  },
  responses: {
    201: { description: 'AuthToken', content: { 'application/json': { schema: AuthTokenSchema } } },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                    'https://errors.ix-api.net/v2/not-authenticated.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
  security: [],
})

export const getConnectionsRoute = createRoute({
  method: 'get',
  path: '/connections',
  tags: ['connections'],
  description: 'List all `connection`s.',
  operationId: 'connections_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by state',
            in: 'query',
            name: 'state',
            required: false,
            schema: { type: 'string' },
          },
        }),
      state__is_not: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by state__is_not',
            in: 'query',
            name: 'state__is_not',
            required: false,
            schema: { type: 'string' },
          },
        }),
      mode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by mode',
            in: 'query',
            name: 'mode',
            required: false,
            schema: { type: 'string' },
          },
        }),
      mode__is_not: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by mode__is_not',
            in: 'query',
            name: 'mode__is_not',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      metro_area_network: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by metro_area_network',
            in: 'query',
            name: 'metro_area_network',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pop: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by pop',
            in: 'query',
            name: 'pop',
            required: false,
            schema: { type: 'string' },
          },
        }),
      facility: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by facility',
            in: 'query',
            name: 'facility',
            required: false,
            schema: { type: 'string' },
          },
        }),
      external_ref: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by external_ref',
            in: 'query',
            name: 'external_ref',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: Connection',
      content: { 'application/json': { schema: z.array(ConnectionSchema) } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getConnectionsIdRoute = createRoute({
  method: 'get',
  path: '/connections/{id}',
  tags: ['connections'],
  description: 'Read a `connection`.',
  operationId: 'connections_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Connection',
      content: { 'application/json': { schema: ConnectionSchema } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getContactsRoute = createRoute({
  method: 'get',
  path: '/contacts',
  tags: ['contacts'],
  description: 'List available contacts managed by the authorized account.',
  operationId: 'contacts_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      managing_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by managing_account',
            in: 'query',
            name: 'managing_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      consuming_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by consuming_account',
            in: 'query',
            name: 'consuming_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      external_ref: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by external_ref',
            in: 'query',
            name: 'external_ref',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: Contact',
      content: { 'application/json': { schema: z.array(ContactSchema) } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const postContactsRoute = createRoute({
  method: 'post',
  path: '/contacts',
  tags: ['contacts'],
  description: 'Create a new contact.',
  operationId: 'contacts_create',
  request: {
    body: {
      description: 'A contact creation request',
      content: { 'application/json': { schema: ContactRequestSchema } },
    },
  },
  responses: {
    201: { description: 'Contact', content: { 'application/json': { schema: ContactSchema } } },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getContactsIdRoute = createRoute({
  method: 'get',
  path: '/contacts/{id}',
  tags: ['contacts'],
  description: "Get a contact by it's id",
  operationId: 'contacts_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: { description: 'Contact', content: { 'application/json': { schema: ContactSchema } } },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const putContactsIdRoute = createRoute({
  method: 'put',
  path: '/contacts/{id}',
  tags: ['contacts'],
  description: 'Update a contact',
  operationId: 'contacts_update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    body: {
      description: 'A contact creation request',
      content: { 'application/json': { schema: ContactRequestSchema } },
    },
  },
  responses: {
    200: { description: 'Contact', content: { 'application/json': { schema: ContactSchema } } },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const deleteContactsIdRoute = createRoute({
  method: 'delete',
  path: '/contacts/{id}',
  tags: ['contacts'],
  description:
    'Remove a contact.\n\nPlease note, that a contact can only be removed if\nit is not longer in use in a network service or config\nthrough a role assignment.',
  operationId: 'contacts_destroy',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: { description: 'Contact', content: { 'application/json': { schema: ContactSchema } } },
    400: {
      description: 'UnableToFulfill',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Unable to fulfill your request.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/unable-to-fulfill.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const patchContactsIdRoute = createRoute({
  method: 'patch',
  path: '/contacts/{id}',
  tags: ['contacts'],
  description: 'Update parts of a contact',
  operationId: 'contacts_partial_update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    body: {
      description: 'A contact creation request',
      content: { 'application/merge-patch+json': { schema: ContactRequestPartialSchema } },
    },
  },
  responses: {
    200: { description: 'Contact', content: { 'application/json': { schema: ContactSchema } } },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getDevicesRoute = createRoute({
  method: 'get',
  path: '/devices',
  tags: ['devices'],
  description: 'List available devices',
  operationId: 'devices_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      capability_media_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by capability_media_type',
            in: 'query',
            name: 'capability_media_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      capability_speed: z
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
            description: 'Filter by capability_speed',
            in: 'query',
            name: 'capability_speed',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      capability_speed__lt: z
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
            description: 'Filter by capability_speed__lt',
            in: 'query',
            name: 'capability_speed__lt',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      capability_speed__lte: z
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
            description: 'Filter by capability_speed__lte',
            in: 'query',
            name: 'capability_speed__lte',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      capability_speed__gt: z
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
            description: 'Filter by capability_speed__gt',
            in: 'query',
            name: 'capability_speed__gt',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      capability_speed__gte: z
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
            description: 'Filter by capability_speed__gte',
            in: 'query',
            name: 'capability_speed__gte',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      facility: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by facility',
            in: 'query',
            name: 'facility',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pop: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by pop',
            in: 'query',
            name: 'pop',
            required: false,
            schema: { type: 'string' },
          },
        }),
      metro_area_network: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by metro_area_network',
            in: 'query',
            name: 'metro_area_network',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: Device',
      content: { 'application/json': { schema: z.array(DeviceSchema) } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getDevicesIdRoute = createRoute({
  method: 'get',
  path: '/devices/{id}',
  tags: ['devices'],
  description: 'Get a specific device identified by id',
  operationId: 'devices_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: { description: 'Device', content: { 'application/json': { schema: DeviceSchema } } },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getFacilitiesRoute = createRoute({
  method: 'get',
  path: '/facilities',
  tags: ['facilities'],
  description: 'Get a (filtered) list of `facilities`.',
  operationId: 'facilities_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      capability_media_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by capability_media_type',
            in: 'query',
            name: 'capability_media_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      capability_speed: z
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
            description: 'Filter by capability_speed',
            in: 'query',
            name: 'capability_speed',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      capability_speed__lt: z
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
            description: 'Filter by capability_speed__lt',
            in: 'query',
            name: 'capability_speed__lt',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      capability_speed__lte: z
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
            description: 'Filter by capability_speed__lte',
            in: 'query',
            name: 'capability_speed__lte',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      capability_speed__gt: z
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
            description: 'Filter by capability_speed__gt',
            in: 'query',
            name: 'capability_speed__gt',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      capability_speed__gte: z
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
            description: 'Filter by capability_speed__gte',
            in: 'query',
            name: 'capability_speed__gte',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      organisation_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by organisation_name',
            in: 'query',
            name: 'organisation_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      metro_area: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by metro_area',
            in: 'query',
            name: 'metro_area',
            required: false,
            schema: { type: 'string' },
          },
        }),
      metro_area_network: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by metro_area_network',
            in: 'query',
            name: 'metro_area_network',
            required: false,
            schema: { type: 'string' },
          },
        }),
      address_country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by address_country',
            in: 'query',
            name: 'address_country',
            required: false,
            schema: { type: 'string' },
          },
        }),
      address_locality: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by address_locality',
            in: 'query',
            name: 'address_locality',
            required: false,
            schema: { type: 'string' },
          },
        }),
      postal_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by postal_code',
            in: 'query',
            name: 'postal_code',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: Facility',
      content: { 'application/json': { schema: z.array(FacilitySchema) } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getFacilitiesIdRoute = createRoute({
  method: 'get',
  path: '/facilities/{id}',
  tags: ['facilities'],
  description: 'Retrieve a facility by id',
  operationId: 'facilities_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: Facility',
      content: { 'application/json': { schema: z.array(FacilitySchema) } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['health'],
  description: 'Get the IX-API service health status.',
  operationId: 'api_health_read',
  responses: {
    200: {
      description: 'Health Status Response',
      content: { 'application/json': { schema: HealthResponseSchema } },
    },
  },
})

export const getImplementationRoute = createRoute({
  method: 'get',
  path: '/implementation',
  tags: ['implementation'],
  description: 'Get the API implementation details.',
  operationId: 'api_implementation_read',
  responses: {
    200: {
      description: 'API Implementation',
      content: { 'application/json': { schema: ImplementationResponseSchema } },
    },
  },
})

export const getIpsRoute = createRoute({
  method: 'get',
  path: '/ips',
  tags: ['ips'],
  description: 'List all ip addresses (and prefixes).',
  operationId: 'ips_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      managing_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by managing_account',
            in: 'query',
            name: 'managing_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      consuming_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by consuming_account',
            in: 'query',
            name: 'consuming_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      external_ref: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by external_ref',
            in: 'query',
            name: 'external_ref',
            required: false,
            schema: { type: 'string' },
          },
        }),
      network_service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by network_service',
            in: 'query',
            name: 'network_service',
            required: false,
            schema: { type: 'string' },
          },
        }),
      network_service_config: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by network_service_config',
            in: 'query',
            name: 'network_service_config',
            required: false,
            schema: { type: 'string' },
          },
        }),
      network_feature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by network_feature',
            in: 'query',
            name: 'network_feature',
            required: false,
            schema: { type: 'string' },
          },
        }),
      network_feature_config: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by network_feature_config',
            in: 'query',
            name: 'network_feature_config',
            required: false,
            schema: { type: 'string' },
          },
        }),
      version: z
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
            description: 'Filter by version',
            in: 'query',
            name: 'version',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      fqdn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by fqdn',
            in: 'query',
            name: 'fqdn',
            required: false,
            schema: { type: 'string' },
          },
        }),
      prefix_length: z
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
            description: 'Filter by prefix_length',
            in: 'query',
            name: 'prefix_length',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      valid_not_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by valid_not_before',
            in: 'query',
            name: 'valid_not_before',
            required: false,
            schema: { type: 'string' },
          },
        }),
      valid_not_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by valid_not_after',
            in: 'query',
            name: 'valid_not_after',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: IP-Address',
      content: { 'application/json': { schema: z.array(IpAddressSchema) } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const postIpsRoute = createRoute({
  method: 'post',
  path: '/ips',
  tags: ['ips'],
  description: 'Add an ip host address or network prefix.',
  operationId: 'ips_create',
  request: {
    body: {
      description: 'IP-Address / Prefix allocation Request',
      content: { 'application/json': { schema: IpAddressRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'IP-Address',
      content: { 'application/json': { schema: IpAddressSchema } },
    },
  },
})

export const getIpsIdRoute = createRoute({
  method: 'get',
  path: '/ips/{id}',
  tags: ['ips'],
  description: "Get a single ip addresses by it's id.",
  operationId: 'ips_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'IP-Address',
      content: { 'application/json': { schema: IpAddressSchema } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const putIpsIdRoute = createRoute({
  method: 'put',
  path: '/ips/{id}',
  tags: ['ips'],
  description:
    'Update an ip address object.\n\nYou can only update\nIP addresses within your current scope. Not all\naddresses you can read you can update.\n\nIf the ip address was allocated for you, you might\nnot be able to change anything but the `fqdn`.',
  operationId: 'ips_update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    body: {
      description: 'IP-Address Update',
      content: { 'application/json': { schema: IpAddressUpdateSchema } },
    },
  },
  responses: {
    200: {
      description: 'IP-Address',
      content: { 'application/json': { schema: IpAddressSchema } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const patchIpsIdRoute = createRoute({
  method: 'patch',
  path: '/ips/{id}',
  tags: ['ips'],
  description:
    "Update parts of an ip address.\n\n\nAs with the `PUT` opertaion, IP addresses, where you\ndon't have update rights, will yield a `resource access denied`\nerror when attempting an update.\n\nIf the ip address was allocated for you, you might\nnot be able to change anything but the `fqdn`.",
  operationId: 'ips_partial_update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    body: {
      description: 'IP-Address Update',
      content: { 'application/merge-patch+json': { schema: IpAddressUpdatePartialSchema } },
    },
  },
  responses: {
    200: {
      description: 'IP-Address',
      content: { 'application/json': { schema: IpAddressSchema } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getMacsRoute = createRoute({
  method: 'get',
  path: '/macs',
  tags: ['macs'],
  description: 'List all mac addresses managed by the authorized customer.',
  operationId: 'macs_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      managing_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by managing_account',
            in: 'query',
            name: 'managing_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      consuming_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by consuming_account',
            in: 'query',
            name: 'consuming_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      external_ref: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by external_ref',
            in: 'query',
            name: 'external_ref',
            required: false,
            schema: { type: 'string' },
          },
        }),
      network_service_config: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by network_service_config',
            in: 'query',
            name: 'network_service_config',
            required: false,
            schema: { type: 'string' },
          },
        }),
      address: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by address',
            in: 'query',
            name: 'address',
            required: false,
            schema: { type: 'string' },
          },
        }),
      assigned_at: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by assigned_at',
            in: 'query',
            name: 'assigned_at',
            required: false,
            schema: { type: 'string' },
          },
        }),
      valid_not_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by valid_not_before',
            in: 'query',
            name: 'valid_not_before',
            required: false,
            schema: { type: 'string' },
          },
        }),
      valid_not_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by valid_not_after',
            in: 'query',
            name: 'valid_not_after',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: MAC-Address',
      content: { 'application/json': { schema: z.array(MacAddressSchema) } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const postMacsRoute = createRoute({
  method: 'post',
  path: '/macs',
  tags: ['macs'],
  description: 'Register a mac address.',
  operationId: 'macs_create',
  request: {
    body: {
      description: 'MAC-Address Request',
      content: { 'application/json': { schema: MacAddressRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'MAC-Address',
      content: { 'application/json': { schema: MacAddressSchema } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getMacsIdRoute = createRoute({
  method: 'get',
  path: '/macs/{id}',
  tags: ['macs'],
  description: "Get a single mac address by it's id.",
  operationId: 'macs_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'MAC-Address',
      content: { 'application/json': { schema: MacAddressSchema } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const deleteMacsIdRoute = createRoute({
  method: 'delete',
  path: '/macs/{id}',
  tags: ['macs'],
  description: 'Remove a mac address.',
  operationId: 'macs_destroy',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'MAC-Address',
      content: { 'application/json': { schema: MacAddressSchema } },
    },
    400: {
      description: 'UnableToFulfill',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Unable to fulfill your request.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/unable-to-fulfill.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getMemberJoiningRulesRoute = createRoute({
  method: 'get',
  path: '/member-joining-rules',
  tags: ['member-joining-rules'],
  description: 'Get a list of joining rules',
  operationId: 'member_joining_rules_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      network_service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by network_service',
            in: 'query',
            name: 'network_service',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: Polymorphic Member Joining Rule',
      content: { 'application/json': { schema: z.array(MemberJoiningRuleSchema) } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const postMemberJoiningRulesRoute = createRoute({
  method: 'post',
  path: '/member-joining-rules',
  tags: ['member-joining-rules'],
  description: 'Create a member joining rule',
  operationId: 'member_joining_rules_create',
  request: {
    body: {
      description: 'Polymorphic Member Joining Rule Request',
      content: { 'application/json': { schema: MemberJoiningRuleRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'Polymorphic Member Joining Rule',
      content: { 'application/json': { schema: MemberJoiningRuleSchema } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getMemberJoiningRulesIdRoute = createRoute({
  method: 'get',
  path: '/member-joining-rules/{id}',
  tags: ['member-joining-rules'],
  description: 'Get a single rule',
  operationId: 'member_joining_rules_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Polymorphic Member Joining Rule',
      content: { 'application/json': { schema: MemberJoiningRuleSchema } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const putMemberJoiningRulesIdRoute = createRoute({
  method: 'put',
  path: '/member-joining-rules/{id}',
  tags: ['member-joining-rules'],
  description: 'Update a joining rule',
  operationId: 'member_joining_rules_update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    body: {
      description: 'Polymorphic Member Joining Rule Update',
      content: { 'application/json': { schema: MemberJoiningRuleUpdateSchema } },
    },
  },
  responses: {
    200: {
      description: 'Polymorphic Member Joining Rule',
      content: { 'application/json': { schema: MemberJoiningRuleSchema } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const deleteMemberJoiningRulesIdRoute = createRoute({
  method: 'delete',
  path: '/member-joining-rules/{id}',
  tags: ['member-joining-rules'],
  description: 'Delete a joining rule',
  operationId: 'member_joining_rules_destroy',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Polymorphic Member Joining Rule',
      content: { 'application/json': { schema: MemberJoiningRuleSchema } },
    },
    400: {
      description: 'UnableToFulfill',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Unable to fulfill your request.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/unable-to-fulfill.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const patchMemberJoiningRulesIdRoute = createRoute({
  method: 'patch',
  path: '/member-joining-rules/{id}',
  tags: ['member-joining-rules'],
  description: 'Partially update a joining rule',
  operationId: 'member_joining_rules_partial_update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    body: {
      description: 'Polymorphic Member Joining Rule Update',
      content: { 'application/merge-patch+json': { schema: MemberJoiningRuleUpdatePartialSchema } },
    },
  },
  responses: {
    200: {
      description: 'Polymorphic Member Joining Rule',
      content: { 'application/json': { schema: MemberJoiningRuleSchema } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getMetroAreaNetworksRoute = createRoute({
  method: 'get',
  path: '/metro-area-networks',
  tags: ['metro-area-networks'],
  description: 'List all MetroAreaNetworks',
  operationId: 'metro_area_networks_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      metro_area: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by metro_area',
            in: 'query',
            name: 'metro_area',
            required: false,
            schema: { type: 'string' },
          },
        }),
      service_provider: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by service_provider',
            in: 'query',
            name: 'service_provider',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: MetroAreaNetwork',
      content: { 'application/json': { schema: z.array(MetroAreaNetworkSchema) } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getMetroAreaNetworksIdRoute = createRoute({
  method: 'get',
  path: '/metro-area-networks/{id}',
  tags: ['metro-area-networks'],
  description: 'Retrieve a MetroAreaNetwork',
  operationId: 'metro_area_networks_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'MetroAreaNetwork',
      content: { 'application/json': { schema: MetroAreaNetworkSchema } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getMetroAreasRoute = createRoute({
  method: 'get',
  path: '/metro-areas',
  tags: ['metro-areas'],
  description: 'List all MetroAreas',
  operationId: 'metro_areas_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: MetroArea',
      content: { 'application/json': { schema: z.array(MetroAreaSchema) } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getMetroAreasIdRoute = createRoute({
  method: 'get',
  path: '/metro-areas/{id}',
  tags: ['metro-areas'],
  description: 'Get a single MetroArea',
  operationId: 'metro_areas_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: MetroArea',
      content: { 'application/json': { schema: z.array(MetroAreaSchema) } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getNetworkFeatureConfigsRoute = createRoute({
  method: 'get',
  path: '/network-feature-configs',
  tags: ['network-feature-configs'],
  description: 'Get all network feature configs.',
  operationId: 'network_feature_configs_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by state',
            in: 'query',
            name: 'state',
            required: false,
            schema: { type: 'string' },
          },
        }),
      state__is_not: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by state__is_not',
            in: 'query',
            name: 'state__is_not',
            required: false,
            schema: { type: 'string' },
          },
        }),
      managing_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by managing_account',
            in: 'query',
            name: 'managing_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      consuming_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by consuming_account',
            in: 'query',
            name: 'consuming_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      external_ref: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by external_ref',
            in: 'query',
            name: 'external_ref',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .literal('route_server')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by type',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['route_server'], type: 'string' },
          },
        }),
      service_config: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by service_config',
            in: 'query',
            name: 'service_config',
            required: false,
            schema: { type: 'string' },
          },
        }),
      network_feature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by network_feature',
            in: 'query',
            name: 'network_feature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: Polymorphic Network Feature Config',
      content: { 'application/json': { schema: z.array(NetworkFeatureConfigSchema) } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const postNetworkFeatureConfigsRoute = createRoute({
  method: 'post',
  path: '/network-feature-configs',
  tags: ['network-feature-configs'],
  description:
    'Create a configuration for a `NetworkFeature`\ndefined in the `NetworkFeature`s collection.',
  operationId: 'network_feature_configs_create',
  request: {
    body: {
      description: 'Polymorphic Network Feature Config Request',
      content: { 'application/json': { schema: NetworkFeatureConfigRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'Polymorphic Network Feature Config',
      content: { 'application/json': { schema: NetworkFeatureConfigSchema } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getNetworkFeatureConfigsIdRoute = createRoute({
  method: 'get',
  path: '/network-feature-configs/{id}',
  tags: ['network-feature-configs'],
  description: 'Get a single network feature config.',
  operationId: 'network_feature_configs_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Polymorphic Network Feature Config',
      content: { 'application/json': { schema: NetworkFeatureConfigSchema } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const putNetworkFeatureConfigsIdRoute = createRoute({
  method: 'put',
  path: '/network-feature-configs/{id}',
  tags: ['network-feature-configs'],
  description: 'Update a network feature configuration',
  operationId: 'network_feature_configs_update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    body: {
      description: 'Polymorphic Network Feauture Config Update',
      content: { 'application/json': { schema: NetworkFeatureConfigUpdateSchema } },
    },
  },
  responses: {
    202: {
      description: 'Polymorphic Network Feature Config',
      content: { 'application/json': { schema: NetworkFeatureConfigSchema } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const deleteNetworkFeatureConfigsIdRoute = createRoute({
  method: 'delete',
  path: '/network-feature-configs/{id}',
  tags: ['network-feature-configs'],
  description:
    'Remove a network feature config.\n\nThe network feature config will be marked as\n`decommission_requested`.\nDecommissioning a network feature config will not\ncascade to related services or service configs.',
  operationId: 'network_feature_configs_destroy',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    202: {
      description: 'Polymorphic Network Feature Config',
      content: { 'application/json': { schema: NetworkFeatureConfigSchema } },
    },
    400: {
      description: 'UnableToFulfill',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Unable to fulfill your request.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/unable-to-fulfill.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const patchNetworkFeatureConfigsIdRoute = createRoute({
  method: 'patch',
  path: '/network-feature-configs/{id}',
  tags: ['network-feature-configs'],
  description: 'Update parts of a network feature configuration',
  operationId: 'network_feature_configs_partial_update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    body: {
      description: 'Polymorphic Network Feauture Config Update',
      content: {
        'application/merge-patch+json': { schema: NetworkFeatureConfigUpdatePartialSchema },
      },
    },
  },
  responses: {
    202: {
      description: 'Polymorphic Network Feature Config',
      content: { 'application/json': { schema: NetworkFeatureConfigSchema } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getNetworkFeaturesRoute = createRoute({
  method: 'get',
  path: '/network-features',
  tags: ['network-features'],
  description: 'List available network features.',
  operationId: 'network_features_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      type: z
        .literal('route_server')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by type',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['route_server'], type: 'string' },
          },
        }),
      required: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by required',
            in: 'query',
            name: 'required',
            required: false,
            schema: { type: 'string' },
          },
        }),
      network_service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by network_service',
            in: 'query',
            name: 'network_service',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: Polymorphic Network Feature',
      content: { 'application/json': { schema: z.array(NetworkFeatureSchema) } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getNetworkFeaturesIdRoute = createRoute({
  method: 'get',
  path: '/network-features/{id}',
  tags: ['network-features'],
  description: "Get a single network feature by it's id.",
  operationId: 'network_features_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Polymorphic Network Feature',
      content: { 'application/json': { schema: NetworkFeatureSchema } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getNetworkServiceConfigsRoute = createRoute({
  method: 'get',
  path: '/network-service-configs',
  tags: ['network-service-configs'],
  description: 'Get all `network-service-config`s.',
  operationId: 'network_service_configs_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by state',
            in: 'query',
            name: 'state',
            required: false,
            schema: { type: 'string' },
          },
        }),
      state__is_not: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by state__is_not',
            in: 'query',
            name: 'state__is_not',
            required: false,
            schema: { type: 'string' },
          },
        }),
      managing_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by managing_account',
            in: 'query',
            name: 'managing_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      consuming_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by consuming_account',
            in: 'query',
            name: 'consuming_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      external_ref: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by external_ref',
            in: 'query',
            name: 'external_ref',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['exchange_lan', 'p2p_vc', 'p2mp_vc', 'mp2mp_vc', 'cloud_vc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by type',
            in: 'query',
            name: 'type',
            required: false,
            schema: {
              enum: ['exchange_lan', 'p2p_vc', 'p2mp_vc', 'mp2mp_vc', 'cloud_vc'],
              type: 'string',
            },
          },
        }),
      inner_vlan: z
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
            description: 'Filter by inner_vlan',
            in: 'query',
            name: 'inner_vlan',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      outer_vlan: z
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
            description: 'Filter by outer_vlan',
            in: 'query',
            name: 'outer_vlan',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      capacity: z
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
            description: 'Filter by capacity',
            in: 'query',
            name: 'capacity',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      network_service: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by network_service',
            in: 'query',
            name: 'network_service',
            required: false,
            schema: { type: 'string' },
          },
        }),
      connection: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by connection',
            in: 'query',
            name: 'connection',
            required: false,
            schema: { type: 'string' },
          },
        }),
      product_offering: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by product_offering',
            in: 'query',
            name: 'product_offering',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: Polymorphic Network Service Config',
      content: { 'application/json': { schema: z.array(NetworkServiceConfigSchema) } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const postNetworkServiceConfigsRoute = createRoute({
  method: 'post',
  path: '/network-service-configs',
  tags: ['network-service-configs'],
  description: 'Create a `network-service-config`.',
  operationId: 'network_service_configs_create',
  request: {
    body: {
      description: 'Polymorhic Network Service Config Request',
      content: { 'application/json': { schema: NetworkServiceConfigRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'Polymorphic Network Service Config',
      content: { 'application/json': { schema: NetworkServiceConfigSchema } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getNetworkServiceConfigsIdRoute = createRoute({
  method: 'get',
  path: '/network-service-configs/{id}',
  tags: ['network-service-configs'],
  description: 'Get a `network-service-config`',
  operationId: 'network_service_configs_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Polymorphic Network Service Config',
      content: { 'application/json': { schema: NetworkServiceConfigSchema } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const putNetworkServiceConfigsIdRoute = createRoute({
  method: 'put',
  path: '/network-service-configs/{id}',
  tags: ['network-service-configs'],
  description: 'Update an exisiting `network-service-config`',
  operationId: 'network_service_configs_update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    body: {
      description: 'Polymorphic Network Service Config',
      content: { 'application/json': { schema: NetworkServiceConfigUpdateSchema } },
    },
  },
  responses: {
    202: {
      description: 'Polymorphic Network Service Config',
      content: { 'application/json': { schema: NetworkServiceConfigSchema } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const deleteNetworkServiceConfigsIdRoute = createRoute({
  method: 'delete',
  path: '/network-service-configs/{id}',
  tags: ['network-service-configs'],
  description:
    'Request decommissioning the network service configuration.\n\nThe network service config will assume the state\n`decommission_requested`.\nThis will cascade to related resources like\n`network-feature-configs`.',
  operationId: 'network_service_configs_destroy',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    body: {
      description: 'Service Cancellation Request',
      content: { 'application/json': { schema: CancellationRequestSchema } },
    },
  },
  responses: {
    202: {
      description: 'Polymorphic Network Service Config',
      content: { 'application/json': { schema: NetworkServiceConfigSchema } },
    },
    400: {
      description: 'CancellationPolicyError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Requested cancellation date outside of notice period.' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/cancellation-policy-error.html',
                    'https://errors.ix-api.net/v2/unable-to-fulfill.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(
            z
              .object({
                charged_until: z.iso
                  .date()
                  .exactOptional()
                  .openapi({
                    description:
                      'The date until the service is payed for.\nTypically `≥ decommission_at`.',
                  }),
                decommission_at: z.iso
                  .date()
                  .exactOptional()
                  .openapi({
                    description:
                      'This field denotes the first possible cancellation\ndate of the service.\n\nSee the service `cancellation-policy` for details.',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const patchNetworkServiceConfigsIdRoute = createRoute({
  method: 'patch',
  path: '/network-service-configs/{id}',
  tags: ['network-service-configs'],
  description: 'Update parts of an exisiting `network-service-config`.',
  operationId: 'network_service_configs_partial_update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    body: {
      description: 'Polymorphic Network Service Config',
      content: {
        'application/merge-patch+json': { schema: NetworkServiceConfigUpdatePartialSchema },
      },
    },
  },
  responses: {
    202: {
      description: 'Polymorphic Network Service Config',
      content: { 'application/json': { schema: NetworkServiceConfigSchema } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getNetworkServiceConfigsIdCancellationPolicyRoute = createRoute({
  method: 'get',
  path: '/network-service-configs/{id}/cancellation-policy',
  tags: ['network-service-configs'],
  description:
    'The cancellation-policy can be queried to answer\nthe questions:\n\nIf I cancel my subscription, *when will it be technically\ndecommissioned*?\nIf I cancel my subscription, *until what date will I be charged*?\n\nWhen the query parameter `decommision_at` is not provided\nit will provide the first possible cancellation date\nand charge period if cancelled at above date.\n\nThe granularity of the date field is a day, the start and end\nof which are to be interpreted by the IXP (some may use UTC,\nsome may use their local time zone).',
  operationId: 'network_service_config_cancellation_policy_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    query: z.object({
      decommission_at: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'By providing a date in the format `YYYY-MM-DD` you can\nquery the policy what would happen if you request a\ndecommissioning on this date.',
            in: 'query',
            name: 'decommission_at',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Cancellation Policy',
      content: { 'application/json': { schema: CancellationPolicySchema } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getNetworkServicesRoute = createRoute({
  method: 'get',
  path: '/network-services',
  tags: ['network-services'],
  description: 'List available `NetworkService`s.',
  operationId: 'network_services_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by state',
            in: 'query',
            name: 'state',
            required: false,
            schema: { type: 'string' },
          },
        }),
      state__is_not: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by state__is_not',
            in: 'query',
            name: 'state__is_not',
            required: false,
            schema: { type: 'string' },
          },
        }),
      managing_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by managing_account',
            in: 'query',
            name: 'managing_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      consuming_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by consuming_account',
            in: 'query',
            name: 'consuming_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      external_ref: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by external_ref',
            in: 'query',
            name: 'external_ref',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['exchange_lan', 'p2p_vc', 'p2mp_vc', 'mp2mp_vc', 'cloud_vc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by type',
            in: 'query',
            name: 'type',
            required: false,
            schema: {
              enum: ['exchange_lan', 'p2p_vc', 'p2mp_vc', 'mp2mp_vc', 'cloud_vc'],
              type: 'string',
            },
          },
        }),
      pop: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by pop',
            in: 'query',
            name: 'pop',
            required: false,
            schema: { type: 'string' },
          },
        }),
      product_offering: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by product_offering',
            in: 'query',
            name: 'product_offering',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: Polymorphic Network Services',
      content: { 'application/json': { schema: z.array(NetworkServiceSchema) } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const postNetworkServicesRoute = createRoute({
  method: 'post',
  path: '/network-services',
  tags: ['network-services'],
  description: 'Create a new network service',
  operationId: 'network_services_create',
  request: {
    body: {
      description: 'Polymorphic Network Service Request',
      content: { 'application/json': { schema: NetworkServiceRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'Polymorphic Network Services',
      content: { 'application/json': { schema: NetworkServiceSchema } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getNetworkServicesIdRoute = createRoute({
  method: 'get',
  path: '/network-services/{id}',
  tags: ['network-services'],
  description: 'Get a specific `network-service` by id.',
  operationId: 'network_services_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Polymorphic Network Services',
      content: { 'application/json': { schema: NetworkServiceSchema } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const putNetworkServicesIdRoute = createRoute({
  method: 'put',
  path: '/network-services/{id}',
  tags: ['network-services'],
  description: 'Update a network service',
  operationId: 'network_services_update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    body: {
      description: 'Polymorphic Network Service Request',
      content: { 'application/json': { schema: NetworkServiceRequestSchema } },
    },
  },
  responses: {
    202: {
      description: 'Polymorphic Network Services',
      content: { 'application/json': { schema: NetworkServiceSchema } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const deleteNetworkServicesIdRoute = createRoute({
  method: 'delete',
  path: '/network-services/{id}',
  tags: ['network-services'],
  description:
    'Request decomissioning of the network service.\n\nThe network service will enter the state of\n`decommission_requested`. The request will\ncascade to related network service and feature\nconfigs.\n\nAn *optional request body* can be provided to request\na specific service termination date.\n\nIf no date is given in the request body, it is assumed to\nbe the earliest possible date.\n\nPossible values for `decommission_at` can be queried\nthrough the `network_service_cancellation_policy_read`\noperation.\n\nThe response will contain the dates on which the\nchanges will be effected.',
  operationId: 'network_services_destroy',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    body: {
      description: 'Service Cancellation Request',
      content: { 'application/json': { schema: CancellationRequestSchema } },
    },
  },
  responses: {
    202: {
      description: 'Polymorphic Network Services',
      content: { 'application/json': { schema: NetworkServiceSchema } },
    },
    400: {
      description: 'CancellationPolicyError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Requested cancellation date outside of notice period.' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/cancellation-policy-error.html',
                    'https://errors.ix-api.net/v2/unable-to-fulfill.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(
            z
              .object({
                charged_until: z.iso
                  .date()
                  .exactOptional()
                  .openapi({
                    description:
                      'The date until the service is payed for.\nTypically `≥ decommission_at`.',
                  }),
                decommission_at: z.iso
                  .date()
                  .exactOptional()
                  .openapi({
                    description:
                      'This field denotes the first possible cancellation\ndate of the service.\n\nSee the service `cancellation-policy` for details.',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const patchNetworkServicesIdRoute = createRoute({
  method: 'patch',
  path: '/network-services/{id}',
  tags: ['network-services'],
  description: 'Partially update a network service',
  operationId: 'network_services_partial_update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    body: {
      description: 'Polymorphic Network Service Request',
      content: { 'application/merge-patch+json': { schema: NetworkServiceRequestPartialSchema } },
    },
  },
  responses: {
    202: {
      description: 'Polymorphic Network Services',
      content: { 'application/json': { schema: NetworkServiceSchema } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getNetworkServicesIdCancellationPolicyRoute = createRoute({
  method: 'get',
  path: '/network-services/{id}/cancellation-policy',
  tags: ['network-services'],
  description:
    'The cancellation-policy can be queried to answer\nthe questions:\n\nIf I cancel my service, *when will it be technically\ndecommissioned*?\nIf I cancel my service, *until what date will I be charged*?\n\nWhen the query parameter `decommision_at` is not provided\nit will provide the first possible cancellation date\nand charge period if cancelled at above date.\n\nThe granularity of the date field is a day, the start and end\nof which are to be interpreted by the IXP (some may use UTC,\nsome may use their local time zone).',
  operationId: 'network_service_cancellation_policy_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    query: z.object({
      decommission_at: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'By providing a date in the format `YYYY-MM-DD` you can\nquery the policy what would happen if you request a\ndecommissioning on this date.',
            in: 'query',
            name: 'decommission_at',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Cancellation Policy',
      content: { 'application/json': { schema: CancellationPolicySchema } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getNetworkServicesIdChangeRequestRoute = createRoute({
  method: 'get',
  path: '/network-services/{id}/change-request',
  tags: ['network-services'],
  description: 'Get the change request.',
  operationId: 'network_service_change_request_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    202: {
      description: 'NetworkServiceChangeRequest',
      content: { 'application/json': { schema: NetworkServiceChangeRequestSchema } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const postNetworkServicesIdChangeRequestRoute = createRoute({
  method: 'post',
  path: '/network-services/{id}/change-request',
  tags: ['network-services'],
  description:
    "Request a change to the network service.\n\nA participant in a network service of type\n`p2p_vc` can issue a change request, expressing a\ndesired change in the capacity.\nThe change is accepted when all sides have configured\nthe network service configs with the new bandwidth.\nThese changes can sometimes require a change of the\nproduct offering.\nThe product offering may only differ in regards to\nbandwidth.\n\nThe network service will change it's state from `production`\ninto `production_change_pending`.\n\nOnly one change request may be issued at a time.",
  operationId: 'network-service-change-request_create',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    body: {
      description: 'NetworkServiceChangeRequest',
      content: { 'application/json': { schema: NetworkServiceChangeRequestSchema } },
    },
  },
  responses: {
    202: {
      description: 'NetworkServiceChangeRequest',
      content: { 'application/json': { schema: NetworkServiceChangeRequestSchema } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const deleteNetworkServicesIdChangeRequestRoute = createRoute({
  method: 'delete',
  path: '/network-services/{id}/change-request',
  tags: ['network-services'],
  description: 'Retract or reject a change to the network service.',
  operationId: 'network_service_change_request_destroy',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    202: {
      description: 'NetworkServiceChangeRequest',
      content: { 'application/json': { schema: NetworkServiceChangeRequestSchema } },
    },
    400: {
      description: 'UnableToFulfill',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Unable to fulfill your request.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/unable-to-fulfill.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getPopsRoute = createRoute({
  method: 'get',
  path: '/pops',
  tags: ['pops'],
  description: 'List all PoPs',
  operationId: 'pops_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      facility: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by facility',
            in: 'query',
            name: 'facility',
            required: false,
            schema: { type: 'string' },
          },
        }),
      metro_area_network: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by metro_area_network',
            in: 'query',
            name: 'metro_area_network',
            required: false,
            schema: { type: 'string' },
          },
        }),
      capability_media_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by capability_media_type',
            in: 'query',
            name: 'capability_media_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      capability_speed: z
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
            description: 'Filter by capability_speed',
            in: 'query',
            name: 'capability_speed',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      capability_speed__lt: z
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
            description: 'Filter by capability_speed__lt',
            in: 'query',
            name: 'capability_speed__lt',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      capability_speed__lte: z
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
            description: 'Filter by capability_speed__lte',
            in: 'query',
            name: 'capability_speed__lte',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      capability_speed__gt: z
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
            description: 'Filter by capability_speed__gt',
            in: 'query',
            name: 'capability_speed__gt',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      capability_speed__gte: z
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
            description: 'Filter by capability_speed__gte',
            in: 'query',
            name: 'capability_speed__gte',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: Point Of Presence',
      content: { 'application/json': { schema: z.array(PointOfPresenceSchema) } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getPopsIdRoute = createRoute({
  method: 'get',
  path: '/pops/{id}',
  tags: ['pops'],
  description: 'Get a single point of presence',
  operationId: 'pops_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Point Of Presence',
      content: { 'application/json': { schema: PointOfPresenceSchema } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getPortsRoute = createRoute({
  method: 'get',
  path: '/ports',
  tags: ['ports'],
  description: 'List all ports.',
  operationId: 'ports_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by state',
            in: 'query',
            name: 'state',
            required: false,
            schema: { type: 'string' },
          },
        }),
      state__is_not: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by state__is_not',
            in: 'query',
            name: 'state__is_not',
            required: false,
            schema: { type: 'string' },
          },
        }),
      media_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by media_type',
            in: 'query',
            name: 'media_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pop: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by pop',
            in: 'query',
            name: 'pop',
            required: false,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      external_ref: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by external_ref',
            in: 'query',
            name: 'external_ref',
            required: false,
            schema: { type: 'string' },
          },
        }),
      device: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by device',
            in: 'query',
            name: 'device',
            required: false,
            schema: { type: 'string' },
          },
        }),
      speed: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by speed',
            in: 'query',
            name: 'speed',
            required: false,
            schema: { type: 'string' },
          },
        }),
      connection: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by connection',
            in: 'query',
            name: 'connection',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: Port',
      content: { 'application/json': { schema: z.array(PortSchema) } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getPortsIdRoute = createRoute({
  method: 'get',
  path: '/ports/{id}',
  tags: ['ports'],
  description: 'Retrieve a port.',
  operationId: 'ports_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: { description: 'Port', content: { 'application/json': { schema: PortSchema } } },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getProductOfferingsRoute = createRoute({
  method: 'get',
  path: '/product-offerings',
  tags: ['product-offerings'],
  description: 'List all (filtered) products-offerings available on the platform',
  operationId: 'product_offerings_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      type: z
        .enum(['exchange_lan', 'p2p_vc', 'mp2mp_vc', 'p2mp_vc', 'cloud_vc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by type',
            in: 'query',
            name: 'type',
            required: false,
            schema: {
              enum: ['exchange_lan', 'p2p_vc', 'mp2mp_vc', 'p2mp_vc', 'cloud_vc'],
              type: 'string',
            },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      handover_metro_area: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by handover_metro_area',
            in: 'query',
            name: 'handover_metro_area',
            required: false,
            schema: { type: 'string' },
          },
        }),
      handover_metro_area_network: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by handover_metro_area_network',
            in: 'query',
            name: 'handover_metro_area_network',
            required: false,
            schema: { type: 'string' },
          },
        }),
      service_metro_area: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by service_metro_area',
            in: 'query',
            name: 'service_metro_area',
            required: false,
            schema: { type: 'string' },
          },
        }),
      service_metro_area_network: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by service_metro_area_network',
            in: 'query',
            name: 'service_metro_area_network',
            required: false,
            schema: { type: 'string' },
          },
        }),
      service_provider: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by service_provider',
            in: 'query',
            name: 'service_provider',
            required: false,
            schema: { type: 'string' },
          },
        }),
      downgrade_allowed: z
        .enum(['true', 'true'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by downgrade_allowed',
            in: 'query',
            name: 'downgrade_allowed',
            required: false,
            schema: { enum: ['true', 'true'], type: 'string' },
          },
        }),
      upgrade_allowed: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by upgrade_allowed',
            in: 'query',
            name: 'upgrade_allowed',
            required: false,
            schema: { enum: ['true', 'false'], type: 'string' },
          },
        }),
      bandwidth: z
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
              'Find product offerings where bandwidth is\nwithin the range of `bandwidth_min` and `bandwidth_max`.',
            in: 'query',
            name: 'bandwidth',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      physical_port_speed: z
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
            description: 'Filter by physical_port_speed',
            in: 'query',
            name: 'physical_port_speed',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      service_provider_region: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by service_provider_region',
            in: 'query',
            name: 'service_provider_region',
            required: false,
            schema: { type: 'string' },
          },
        }),
      service_provider_pop: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by service_provider_pop',
            in: 'query',
            name: 'service_provider_pop',
            required: false,
            schema: { type: 'string' },
          },
        }),
      delivery_method: z
        .enum(['dedicated', 'shared'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by delivery_method',
            in: 'query',
            name: 'delivery_method',
            required: false,
            schema: { enum: ['dedicated', 'shared'], type: 'string' },
          },
        }),
      cloud_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'For product offerings of type `cloud_vc`, if the\n`service_provider_workflow` is `provider_first` the\n`cloud_key` will be used for filtering the relevant\nofferings.',
            in: 'query',
            name: 'cloud_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returned objects only have properties which are\npresent in the list of fields.\nThe required `type` property is *implicitly* included.\nThe results are *deduplicated*.\n',
            example: 'handover_metro_area,service_provider',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: Polymorphic Product Offering',
      content: { 'application/json': { schema: z.array(ProductOfferingPartialSchema) } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getProductOfferingsIdRoute = createRoute({
  method: 'get',
  path: '/product-offerings/{id}',
  tags: ['product-offerings'],
  description: 'Get a single products-offering by id.',
  operationId: 'product_offerings_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Polymorphic Product Offering',
      content: { 'application/json': { schema: ProductOfferingSchema } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getRoleAssignmentsRoute = createRoute({
  method: 'get',
  path: '/role-assignments',
  tags: ['role-assignments'],
  description: 'List all role assignments for a contact.',
  operationId: 'role_assignments_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      contact: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by contact',
            in: 'query',
            name: 'contact',
            required: false,
            schema: { type: 'string' },
          },
        }),
      role: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by role',
            in: 'query',
            name: 'role',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: A role assignment for a contact',
      content: { 'application/json': { schema: z.array(RoleAssignmentSchema) } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/validation-error.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const postRoleAssignmentsRoute = createRoute({
  method: 'post',
  path: '/role-assignments',
  tags: ['role-assignments'],
  description:
    'Assign a `Role` to a `Contact`.\n\nThe contact needs to have all fields filled, which the\nrole requires. If this is not the case a `400`\n`UnableToFulfill` will be returned.',
  operationId: 'role_assignments_create',
  request: {
    body: {
      description: 'A role assignment request',
      content: { 'application/json': { schema: RoleAssignmentRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'A role assignment for a contact',
      content: { 'application/json': { schema: RoleAssignmentSchema } },
    },
    400: {
      description: 'ValidationError',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Some fields did not validate.' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/validation-error.html',
                    'https://errors.ix-api.net/v2/unable-to-fulfill.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getRoleAssignmentsAssignmentIdRoute = createRoute({
  method: 'get',
  path: '/role-assignments/{assignment_id}',
  tags: ['role-assignments'],
  description: 'Get a role assignment for a contact.',
  operationId: 'role_assignments_read',
  request: {
    params: z.object({
      assignment_id: z
        .string()
        .openapi({
          param: {
            description: 'Get by assignment_id',
            in: 'path',
            name: 'assignment_id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A role assignment for a contact',
      content: { 'application/json': { schema: RoleAssignmentSchema } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const deleteRoleAssignmentsAssignmentIdRoute = createRoute({
  method: 'delete',
  path: '/role-assignments/{assignment_id}',
  tags: ['role-assignments'],
  description:
    'Remove a role assignment from a contact.\n\nIf the contact is still in use with a given role required,\nthis will yield an `UnableToFulfill` error.',
  operationId: 'role_assignments_destroy',
  request: {
    params: z.object({
      assignment_id: z
        .string()
        .openapi({
          param: {
            description: 'Get by assignment_id',
            in: 'path',
            name: 'assignment_id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A role assignment for a contact',
      content: { 'application/json': { schema: RoleAssignmentSchema } },
    },
    400: {
      description: 'UnableToFulfill',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 400 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Unable to fulfill your request.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/unable-to-fulfill.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    403: {
      description: 'PermissionDenied',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 403 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'You do not have permission to perform this action.' }),
                type: z
                  .literal('https://errors.ix-api.net/v2/permission-denied.html')
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
    404: {
      description: 'NotFound',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 404 }),
                title: z.any().exactOptional().openapi({ example: 'Not found.' }),
                type: z.literal('https://errors.ix-api.net/v2/not-found.html').exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getRolesRoute = createRoute({
  method: 'get',
  path: '/roles',
  tags: ['roles'],
  description: 'List all roles available.',
  operationId: 'roles_list',
  request: {
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      contact: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by contact',
            in: 'query',
            name: 'contact',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of: A role for a contact',
      content: { 'application/json': { schema: z.array(RoleSchema) } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})

export const getRolesIdRoute = createRoute({
  method: 'get',
  path: '/roles/{id}',
  tags: ['roles'],
  description: 'Get a single `Role`.',
  operationId: 'roles_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Get by id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: '', title: '', type: 'string' },
          },
          description: '',
          title: '',
        }),
    }),
    query: z.object({
      id: z
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
            description: 'Filter by id',
            explode: false,
            in: 'query',
            name: 'id',
            required: false,
            schema: { example: 'id1,id2,id3', items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
          example: 'id1,id2,id3',
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by name',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A role for a contact',
      content: { 'application/json': { schema: RoleSchema } },
    },
    401: {
      description: 'Authentication',
      content: {
        'application/json': {
          schema: ProblemResponseSchema.and(
            z
              .object({
                status: z.any().exactOptional().openapi({ example: 401 }),
                title: z
                  .any()
                  .exactOptional()
                  .openapi({ example: 'Authentication Credentials Invalid' }),
                type: z
                  .enum([
                    'https://errors.ix-api.net/v2/authentication-error.html',
                    'https://errors.ix-api.net/v2/signature-expired.html',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ).and(z.any()),
        },
      },
    },
  },
})
