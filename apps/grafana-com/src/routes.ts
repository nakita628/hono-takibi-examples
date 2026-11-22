import { createRoute, z } from '@hono/zod-openapi'

const RealmsInnerAnyOfSchema = z
  .object({
    type: z.literal('org').openapi({ title: 'type' }),
    identifier: z.string().openapi({ title: 'identifier' }),
  })
  .openapi({ example: { identifier: 'identifier', type: 'org' }, required: ['identifier', 'type'] })
  .openapi('RealmsInnerAnyOf')

const RealmsInnerAnyOf_1Schema = z
  .object({
    type: z.literal('stack').openapi({ title: 'type' }),
    identifier: z.string().openapi({ title: 'identifier' }),
  })
  .openapi({ required: ['identifier', 'type'] })
  .openapi('RealmsInnerAnyOf_1')

const RealmsInnerSchema = z
  .union([RealmsInnerAnyOfSchema, RealmsInnerAnyOf_1Schema])
  .openapi('RealmsInner')

const ScopesInnerSchema = z
  .object({
    name: z.string().openapi({ title: 'name' }),
    description: z.string().openapi({ title: 'description' }),
    requiresRealmType: z.string().exactOptional().openapi({ title: 'requiresRealmType' }),
  })
  .openapi({
    example: { requiresRealmType: 'requiresRealmType', name: 'name', description: 'description' },
    required: ['description', 'name'],
  })
  .openapi('ScopesInner')

const SetsInnerSchema = z
  .object({
    name: z.string().openapi({ title: 'name' }),
    scopes: z.array(z.string()).exactOptional().openapi({ title: 'scopes' }),
  })
  .openapi({ example: { name: 'name', scopes: ['scopes', 'scopes'] }, required: ['name'] })
  .openapi('SetsInner')

const AccessPoliciesConfigSchema = z
  .object({
    realms: z.array(RealmsInnerSchema).openapi({ title: 'realms' }),
    scopes: z.array(ScopesInnerSchema).openapi({ title: 'scopes' }),
    sets: z.array(SetsInnerSchema).openapi({ title: 'sets' }),
  })
  .openapi({
    example: {
      realms: [
        { identifier: 'identifier', type: 'org' },
        { identifier: 'identifier', type: 'org' },
      ],
      sets: [
        { name: 'name', scopes: ['scopes', 'scopes'] },
        { name: 'name', scopes: ['scopes', 'scopes'] },
      ],
      scopes: [
        { requiresRealmType: 'requiresRealmType', name: 'name', description: 'description' },
        { requiresRealmType: 'requiresRealmType', name: 'name', description: 'description' },
      ],
    },
    required: ['realms', 'scopes', 'sets'],
  })
  .openapi('AccessPoliciesConfig')

const PaginationSchema = z
  .object({
    pageCursor: z.string().nullable().exactOptional().openapi({ title: 'pageCursor' }),
    nextPage: z.string().nullable().exactOptional().openapi({ title: 'nextPage' }),
    pageSize: z.number().openapi({ title: 'pageSize' }),
  })
  .openapi({
    example: { nextPage: 'nextPage', pageSize: 0.8008281904610115, pageCursor: 'pageCursor' },
    required: ['pageSize'],
    title: 'pagination',
  })
  .openapi('Pagination')

const MetadataSchema = z
  .object({ pagination: PaginationSchema })
  .openapi({
    example: {
      pagination: { nextPage: 'nextPage', pageSize: 0.8008281904610115, pageCursor: 'pageCursor' },
    },
    required: ['pagination'],
    title: 'metadata',
  })
  .openapi('Metadata')

const AccessPolicyListResponseSchema = z
  .object({
    items: z.array(z.looseObject({})).openapi({ title: 'items' }),
    metadata: MetadataSchema,
  })
  .openapi({
    example: {
      metadata: {
        pagination: {
          nextPage: 'nextPage',
          pageSize: 0.8008281904610115,
          pageCursor: 'pageCursor',
        },
      },
      items: ['{}', '{}'],
    },
    required: ['items', 'metadata'],
  })
  .openapi('AccessPolicyListResponse')

const AuthAccessPolicyRealmsInnerLabelPoliciesInnerSchema = z
  .object({
    selector: z
      .string()
      .exactOptional()
      .openapi({ description: 'Label selector', example: '{env != "dev"}' }),
  })
  .openapi({ example: { selector: '{env != "dev"}' }, required: [] })
  .openapi('AuthAccessPolicyRealmsInnerLabelPoliciesInner')

const AuthAccessPolicyRealmsInnerSchema = z
  .object({
    type: z
      .enum(['org', 'stack', 'system'])
      .exactOptional()
      .openapi({ description: 'Type of the realm', example: 'stack' }),
    identifier: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of a realm (org or stack).', example: '123' }),
    labelPolicies: z.array(AuthAccessPolicyRealmsInnerLabelPoliciesInnerSchema).exactOptional(),
  })
  .openapi({
    example: {
      identifier: '123',
      labelPolicies: [{ selector: '{env != "dev"}' }, { selector: '{env != "dev"}' }],
      type: 'stack',
    },
    required: [],
  })
  .openapi('AuthAccessPolicyRealmsInner')

const AuthAccessPolicyConditionsAllowedSubnetsInnerSchema = z
  .xor([z.string(), z.string()])
  .openapi('AuthAccessPolicyConditionsAllowedSubnetsInner')

const AuthAccessPolicyConditionsSchema = z
  .object({
    allowedSubnets: z
      .array(AuthAccessPolicyConditionsAllowedSubnetsInnerSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of IP addresses with subnet masks in CIDR notation (both IPv4 or IPv6 are supported) that is used to restrict access to only hosts that are part of at least one of the subnets. Providing an empty array is equivalent to providing an empty `conditions` object, and results in the removal of the `conditions` object from the Access Policy.\nNote that an IP address is not valid CIDR notation. For specifying a single IP address use a subnet mask of `/32` for IPv4 and `/128` for IPv6.\nExamples: 192.168.0.10/32 2001:db0:82a3:0:0:8a2e:370:1234/128\n',
      }),
  })
  .openapi({
    description:
      'A set of criteria that is used to restrict access of the Access Policy and Tokens. Providing an empty object ("{}") results in the complete removal of the `conditions` object.\n',
    example: {
      allowedSubnets: [
        'AuthAccessPolicy_conditions_allowedSubnets_inner',
        'AuthAccessPolicy_conditions_allowedSubnets_inner',
      ],
    },
    required: [],
  })
  .openapi('AuthAccessPolicyConditions')

const AuthAccessPolicyAttributesLokiQueryPolicySchema = z
  .object({
    queryTimeout: z
      .string()
      .exactOptional()
      .openapi({
        description: 'String which represents a duration. For example "10s", "2w", "5h".',
        example: '10s',
      }),
    maxEntriesLimitPerQuery: z
      .int()
      .exactOptional()
      .openapi({ description: 'Ordinary integer.', example: 20 }),
    maxQueryLookback: z
      .string()
      .exactOptional()
      .openapi({
        description: 'String which represents a duration. For example "10s", "2w", "5h".',
        example: '30d',
      }),
    maxQueryLength: z
      .string()
      .exactOptional()
      .openapi({
        description: 'String which represents a duration. For example "10s", "2w", "5h".',
        example: '7d',
      }),
  })
  .openapi({
    example: {
      queryTimeout: '10s',
      maxQueryLookback: '30d',
      maxQueryLength: '7d',
      maxEntriesLimitPerQuery: 20,
    },
    required: [],
  })
  .openapi('AuthAccessPolicyAttributesLokiQueryPolicy')

const AuthAccessPolicyAttributesPdcConfigurationSchema = z
  .object({
    limitedHosts: z
      .array(
        z
          .string()
          .openapi({
            description: 'Hostname and port of host PDC is limited to access.',
            example: 'mysql.example.com:3306',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'List of hosts that Grafana is able to access through a PDC. All hosts are allowed if not provided.',
      }),
  })
  .openapi({
    example: { limitedHosts: ['mysql.example.com:3306', 'mysql.example.com:3306'] },
    required: [],
  })
  .openapi('AuthAccessPolicyAttributesPdcConfiguration')

const AuthAccessPolicyAttributesSchema = z
  .object({
    lokiQueryPolicy: AuthAccessPolicyAttributesLokiQueryPolicySchema.exactOptional(),
    allowedScopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of scopes allowed to be signed by an access policy (required if the access policy contains `grafana-id-token:sign`).\n',
        example: ['metrics:read', 'logs:read', 'traces:read', 'alerts:read'],
      }),
    pdcConfiguration: AuthAccessPolicyAttributesPdcConfigurationSchema.exactOptional(),
    allowedAudiences: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of audience claims allowed to be included when signing access tokens.\n',
      }),
  })
  .openapi({
    description:
      'A set of criteria that can be to the backend service via headers through the gateway, or used to make authentication decisions.\n',
    example: {
      pdcConfiguration: { limitedHosts: ['mysql.example.com:3306', 'mysql.example.com:3306'] },
      lokiQueryPolicy: {
        queryTimeout: '10s',
        maxQueryLookback: '30d',
        maxQueryLength: '7d',
        maxEntriesLimitPerQuery: 20,
      },
      allowedAudiences: ['allowedAudiences', 'allowedAudiences'],
      allowedScopes: ['metrics:read', 'logs:read', 'traces:read', 'alerts:read'],
    },
    required: [],
  })
  .openapi('AuthAccessPolicyAttributes')

const AuthAccessPolicySchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ example: 'c45485b6-8321-4cf2-bcec-12006df755ff', readOnly: true }),
    orgId: z.string().exactOptional().openapi({ example: '1', readOnly: true }),
    name: z.string().openapi({ example: 'stack-readers' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Will be set to `name` if not provided.', example: 'Stack Readers' }),
    source: z
      .enum(['user', 'cloud'])
      .exactOptional()
      .openapi({
        description: 'Source of the Access Policy (requires system token).',
        example: 'user',
      }),
    scopes: z
      .array(
        z.enum([
          'accesspolicies:read',
          'accesspolicies:write',
          'accesspolicies:delete',
          'billing-metrics:read',
          'metrics:read',
          'metrics:write',
          'metrics:delete',
          'metrics:import',
          'logs:read',
          'logs:write',
          'logs:delete',
          'traces:read',
          'traces:write',
          'traces:delete',
          'alerts:read',
          'alerts:write',
          'rules:read',
          'rules:write',
        ]),
      )
      .openapi({ example: ['metrics:read', 'logs:read', 'traces:read', 'alerts:read'] }),
    realms: z.array(AuthAccessPolicyRealmsInnerSchema),
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    conditions: AuthAccessPolicyConditionsSchema.exactOptional(),
    attributes: AuthAccessPolicyAttributesSchema.exactOptional(),
    status: z
      .enum(['active', 'inactive'])
      .exactOptional()
      .openapi({ description: 'The status of the access policy.', example: 'active' }),
  })
  .openapi({
    example: {
      realms: [
        {
          identifier: '123',
          labelPolicies: [{ selector: '{env != "dev"}' }, { selector: '{env != "dev"}' }],
          type: 'stack',
        },
        {
          identifier: '123',
          labelPolicies: [{ selector: '{env != "dev"}' }, { selector: '{env != "dev"}' }],
          type: 'stack',
        },
      ],
      createdAt: '2000-01-23T04:56:07.000+00:00',
      displayName: 'Stack Readers',
      name: 'stack-readers',
      attributes: {
        pdcConfiguration: { limitedHosts: ['mysql.example.com:3306', 'mysql.example.com:3306'] },
        lokiQueryPolicy: {
          queryTimeout: '10s',
          maxQueryLookback: '30d',
          maxQueryLength: '7d',
          maxEntriesLimitPerQuery: 20,
        },
        allowedAudiences: ['allowedAudiences', 'allowedAudiences'],
        allowedScopes: ['metrics:read', 'logs:read', 'traces:read', 'alerts:read'],
      },
      id: 'c45485b6-8321-4cf2-bcec-12006df755ff',
      source: 'user',
      scopes: ['metrics:read', 'logs:read', 'traces:read', 'alerts:read'],
      conditions: {
        allowedSubnets: [
          'AuthAccessPolicy_conditions_allowedSubnets_inner',
          'AuthAccessPolicy_conditions_allowedSubnets_inner',
        ],
      },
      orgId: '1',
      updatedAt: '2000-01-23T04:56:07.000+00:00',
      status: 'active',
    },
    required: ['name', 'realms', 'scopes'],
  })
  .openapi('AuthAccessPolicy')

const AuthTokenSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ example: 'c45485b6-8321-4cf2-bcec-12006df755ff', readOnly: true }),
    accessPolicyId: z.string().openapi({ example: 'c45485b6-8321-4cf2-bcec-12006df755ff' }),
    name: z.string().openapi({ example: 'mytoken' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Will be set to `name` if not provided.', example: 'My Token' }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Token does not expire if not provided.' }),
    firstUsedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    lastUsedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    orgId: z.string().exactOptional().openapi({ example: '1', readOnly: true }),
  })
  .openapi({
    example: {
      accessPolicyId: 'c45485b6-8321-4cf2-bcec-12006df755ff',
      firstUsedAt: '2000-01-23T04:56:07.000+00:00',
      createdAt: '2000-01-23T04:56:07.000+00:00',
      lastUsedAt: '2000-01-23T04:56:07.000+00:00',
      displayName: 'My Token',
      name: 'mytoken',
      id: 'c45485b6-8321-4cf2-bcec-12006df755ff',
      expiresAt: '2000-01-23T04:56:07.000+00:00',
      orgId: '1',
      updatedAt: '2000-01-23T04:56:07.000+00:00',
    },
    required: ['accessPolicyId', 'name'],
  })
  .openapi('AuthToken')

const AuthTokenWithSecretSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ example: 'c45485b6-8321-4cf2-bcec-12006df755ff', readOnly: true }),
    accessPolicyId: z.string().openapi({ example: 'c45485b6-8321-4cf2-bcec-12006df755ff' }),
    name: z.string().openapi({ example: 'mytoken' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Will be set to `name` if not provided.', example: 'My Token' }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Token does not expire if not provided.' }),
    firstUsedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    lastUsedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    orgId: z.string().exactOptional().openapi({ example: '1', readOnly: true }),
  })
  .openapi({ required: ['accessPolicyId', 'name'] })
  .and(
    z
      .object({
        token: z
          .string()
          .exactOptional()
          .openapi({
            description: 'This token is auto generated and will be shown only once.',
            example:
              'glc_eyJrIjoiZjI0YzZkNGEwZDBmZmZjMmUzNTU2ODcxMmY0ZWZlNTQ1NTljMDFjOCIsIm4iOiJteXRva2VuIiwiaWQiOjF9',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    example: {
      accessPolicyId: 'c45485b6-8321-4cf2-bcec-12006df755ff',
      firstUsedAt: '2000-01-23T04:56:07.000+00:00',
      createdAt: '2000-01-23T04:56:07.000+00:00',
      lastUsedAt: '2000-01-23T04:56:07.000+00:00',
      displayName: 'My Token',
      name: 'mytoken',
      id: 'c45485b6-8321-4cf2-bcec-12006df755ff',
      expiresAt: '2000-01-23T04:56:07.000+00:00',
      orgId: '1',
      updatedAt: '2000-01-23T04:56:07.000+00:00',
      token:
        'glc_eyJrIjoiZjI0YzZkNGEwZDBmZmZjMmUzNTU2ODcxMmY0ZWZlNTQ1NTljMDFjOCIsIm4iOiJteXRva2VuIiwiaWQiOjF9',
    },
  })
  .openapi('AuthTokenWithSecret')

const CreditsInnerSchema = z
  .object({
    amount: z.number().openapi({ title: 'amount' }),
    dimensionId: z.string().openapi({ title: 'dimensionId' }),
    dimensionName: z.string().openapi({ title: 'dimensionName' }),
  })
  .openapi({
    example: {
      amount: 7.386281948385884,
      dimensionId: 'dimensionId',
      dimensionName: 'dimensionName',
    },
    required: ['amount', 'dimensionId', 'dimensionName'],
  })
  .openapi('CreditsInner')

const UsagesInnerSchema = z
  .object({
    activeSeries: z.number().exactOptional().openapi({ title: 'activeSeries' }),
    activeUsers: z.number().exactOptional().openapi({ title: 'activeUsers' }),
    anonymousUsers: z.number().exactOptional().openapi({ title: 'anonymousUsers' }),
    attributedCost: z.number().exactOptional().openapi({ title: 'attributedCost' }),
    attributedUsage: z.number().exactOptional().openapi({ title: 'attributedUsage' }),
    browserUsage: z.number().exactOptional().openapi({ title: 'browserUsage' }),
    credits: z.array(CreditsInnerSchema).exactOptional().openapi({ title: 'credits' }),
    dpm: z.number().exactOptional().openapi({ title: 'dpm' }),
    grafanaUsage: z.number().exactOptional().openapi({ title: 'grafanaUsage' }),
    id: z.number().openapi({ title: 'id' }),
    incidentUsage: z.number().exactOptional().openapi({ title: 'incidentUsage' }),
    ingestUsage: z.number().exactOptional().openapi({ title: 'ingestUsage' }),
    isProrated: z.boolean().openapi({ title: 'isProrated' }),
    onCallUsage: z.number().exactOptional().openapi({ title: 'onCallUsage' }),
    periodEnd: z.string().openapi({ title: 'periodEnd' }),
    periodStart: z.string().openapi({ title: 'periodStart' }),
    protocolUsage: z.number().exactOptional().openapi({ title: 'protocolUsage' }),
    queryUsage: z.number().exactOptional().openapi({ title: 'queryUsage' }),
    stackId: z.number().openapi({ title: 'stackId' }),
    totalUsage: z.number().openapi({ title: 'totalUsage' }),
    stackName: z.string().openapi({ title: 'stackName' }),
    stackLabels: z.looseObject({}).openapi({ title: 'stackLabels' }),
  })
  .openapi({
    example: {
      dpm: 1.2315135367772556,
      ingestUsage: 7.457744773683766,
      onCallUsage: 1.1730742509559433,
      stackId: 9.965781217890562,
      stackName: 'stackName',
      activeUsers: 7.061401241503109,
      protocolUsage: 4.965218492984954,
      anonymousUsers: 9.301444243932576,
      attributedUsage: 2.027123023002322,
      grafanaUsage: 1.0246457001441578,
      browserUsage: 4.145608029883936,
      stackLabels: '{}',
      attributedCost: 3.616076749251911,
      credits: [
        { amount: 7.386281948385884, dimensionId: 'dimensionId', dimensionName: 'dimensionName' },
        { amount: 7.386281948385884, dimensionId: 'dimensionId', dimensionName: 'dimensionName' },
      ],
      queryUsage: 5.025004791520295,
      incidentUsage: 6.84685269835264,
      totalUsage: 9.369310271410669,
      id: 1.4894159098541704,
      activeSeries: 2.3021358869347655,
      periodStart: 'periodStart',
      isProrated: true,
      periodEnd: 'periodEnd',
    },
    required: [
      'id',
      'isProrated',
      'periodEnd',
      'periodStart',
      'stackId',
      'stackLabels',
      'stackName',
      'totalUsage',
    ],
  })
  .openapi('UsagesInner')

const BilledUsageSchema = z
  .object({
    id: z.number().openapi({ title: 'id' }),
    overage: z.number().openapi({ title: 'overage' }),
    description: z.string().openapi({ title: 'description' }),
    notes: z.string().openapi({ title: 'notes' }),
    dimensionId: z
      .enum([
        'agent-generations',
        'ai-tokens',
        'app-o11y',
        'assistant',
        'db-o11y-hosts',
        'fe-o11y',
        'ge-instances',
        'ge-users',
        'hg',
        'hg-plugin-users',
        'hl',
        'hl-process',
        'hl-query',
        'hl-retention',
        'hm',
        'hm-graphite',
        'hm-query',
        'hp',
        'hp-process',
        'hp-retention',
        'ht',
        'ht-process',
        'ht-retention',
        'infra-o11y-containers',
        'infra-o11y-hosts',
        'irm',
        'k6-ip',
        'k6-vuh',
        'marketplace-plugin-users',
        'sm',
        'sm-browser',
      ])
      .openapi({ title: 'dimensionId' }),
    orgRates: z.any().openapi({ title: 'orgRates' }),
    amountDue: z.number().openapi({ title: 'amountDue' }),
    dimensionName: z.string().openapi({ title: 'dimensionName' }),
    includedUsage: z.number().openapi({ title: 'includedUsage' }),
    periodEnd: z.string().openapi({ title: 'periodEnd' }),
    periodStart: z.string().openapi({ title: 'periodStart' }),
    totalUsage: z.number().openapi({ title: 'totalUsage' }),
    unit: z.string().openapi({ title: 'unit' }),
    usages: z.array(UsagesInnerSchema).openapi({ title: 'usages' }),
  })
  .openapi({
    example: {
      notes: 'notes',
      description: 'description',
      dimensionName: 'dimensionName',
      amountDue: 1.4658129805029452,
      orgRates: '',
      unit: 'unit',
      dimensionId: 'agent-generations',
      totalUsage: 5.637376656633329,
      id: 0.8008281904610115,
      usages: [
        {
          dpm: 1.2315135367772556,
          ingestUsage: 7.457744773683766,
          onCallUsage: 1.1730742509559433,
          stackId: 9.965781217890562,
          stackName: 'stackName',
          activeUsers: 7.061401241503109,
          protocolUsage: 4.965218492984954,
          anonymousUsers: 9.301444243932576,
          attributedUsage: 2.027123023002322,
          grafanaUsage: 1.0246457001441578,
          browserUsage: 4.145608029883936,
          stackLabels: '{}',
          attributedCost: 3.616076749251911,
          credits: [
            {
              amount: 7.386281948385884,
              dimensionId: 'dimensionId',
              dimensionName: 'dimensionName',
            },
            {
              amount: 7.386281948385884,
              dimensionId: 'dimensionId',
              dimensionName: 'dimensionName',
            },
          ],
          queryUsage: 5.025004791520295,
          incidentUsage: 6.84685269835264,
          totalUsage: 9.369310271410669,
          id: 1.4894159098541704,
          activeSeries: 2.3021358869347655,
          periodStart: 'periodStart',
          isProrated: true,
          periodEnd: 'periodEnd',
        },
        {
          dpm: 1.2315135367772556,
          ingestUsage: 7.457744773683766,
          onCallUsage: 1.1730742509559433,
          stackId: 9.965781217890562,
          stackName: 'stackName',
          activeUsers: 7.061401241503109,
          protocolUsage: 4.965218492984954,
          anonymousUsers: 9.301444243932576,
          attributedUsage: 2.027123023002322,
          grafanaUsage: 1.0246457001441578,
          browserUsage: 4.145608029883936,
          stackLabels: '{}',
          attributedCost: 3.616076749251911,
          credits: [
            {
              amount: 7.386281948385884,
              dimensionId: 'dimensionId',
              dimensionName: 'dimensionName',
            },
            {
              amount: 7.386281948385884,
              dimensionId: 'dimensionId',
              dimensionName: 'dimensionName',
            },
          ],
          queryUsage: 5.025004791520295,
          incidentUsage: 6.84685269835264,
          totalUsage: 9.369310271410669,
          id: 1.4894159098541704,
          activeSeries: 2.3021358869347655,
          periodStart: 'periodStart',
          isProrated: true,
          periodEnd: 'periodEnd',
        },
      ],
      includedUsage: 5.962133916683182,
      periodStart: 'periodStart',
      overage: 6.027456183070403,
      periodEnd: 'periodEnd',
    },
    required: [
      'amountDue',
      'description',
      'dimensionId',
      'dimensionName',
      'id',
      'includedUsage',
      'notes',
      'orgRates',
      'overage',
      'periodEnd',
      'periodStart',
      'totalUsage',
      'unit',
      'usages',
    ],
  })
  .openapi('BilledUsage')

const ErrorConflictSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ example: 'Invalid arguments: wrong or missing parameters' }),
    code: z.literal('Conflict').exactOptional(),
  })
  .openapi({
    example: { code: 'Conflict', message: 'Invalid arguments: wrong or missing parameters' },
    required: [],
  })
  .openapi('ErrorConflict')

const ErrorForbiddenSchema = z
  .object({
    message: z.string().exactOptional().openapi({ example: 'Forbidden' }),
    code: z.literal('Forbidden').exactOptional(),
  })
  .openapi({ example: { code: 'Forbidden', message: 'Forbidden' }, required: [] })
  .openapi('ErrorForbidden')

const ErrorInvalidCredentialsSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ example: 'Login Required or invalid credentials' }),
    code: z.literal('InvalidCredentials').exactOptional(),
  })
  .openapi({
    example: { code: 'InvalidCredentials', message: 'Login Required or invalid credentials' },
    required: [],
  })
  .openapi('ErrorInvalidCredentials')

const ErrorNotFoundSchema = z
  .object({
    message: z.string().exactOptional().openapi({ example: 'Element not found' }),
    code: z.literal('NotFound').exactOptional(),
  })
  .openapi({ example: { code: 'NotFound', message: 'Element not found' }, required: [] })
  .openapi('ErrorNotFound')

const ErrorServiceUnavailableSchema = z
  .object({
    message: z.string().exactOptional().openapi({ example: 'Service is currently unavailable' }),
    code: z.literal('ServiceUnavailable').exactOptional(),
  })
  .openapi({
    example: { code: 'ServiceUnavailable', message: 'Service is currently unavailable' },
    required: [],
  })
  .openapi('ErrorServiceUnavailable')

const LinksInnerSchema = z
  .object({
    rel: z.string().openapi({ title: 'rel' }),
    href: z.string().openapi({ title: 'href' }),
  })
  .openapi({ example: { rel: 'rel', href: 'href' }, required: ['href', 'rel'] })
  .openapi('LinksInner')

const FormattedApiInstanceSchema = z
  .object({
    alertCnt: z.number().openapi({ title: 'alertCnt' }),
    alertQuota: z.number().openapi({ title: 'alertQuota' }),
    amInstanceGeneratorUrl: z.string().openapi({ title: 'amInstanceGeneratorUrl' }),
    amInstanceGeneratorUrlDatasource: z
      .string()
      .openapi({ title: 'amInstanceGeneratorUrlDatasource' }),
    amInstanceId: z.int().openapi({ title: 'amInstanceId' }),
    amInstanceName: z.string().openapi({ title: 'amInstanceName' }),
    amInstanceStatus: z
      .enum(['active', 'deleted', 'suspended', 'unknown'])
      .openapi({ title: 'amInstanceStatus' }),
    amInstanceUrl: z.string().openapi({ title: 'amInstanceUrl' }),
    amInstanceClusterId: z.int().openapi({ title: 'amInstanceClusterId' }),
    billingActiveUsers: z.number().openapi({ title: 'billingActiveUsers' }),
    billingEndDate: z.string().nullable().openapi({ title: 'billingEndDate' }),
    billingGrafanaActiveUsers: z.number().openapi({ title: 'billingGrafanaActiveUsers' }),
    billingOnCallActiveUsers: z.number().openapi({ title: 'billingOnCallActiveUsers' }),
    billingStartDate: z.string().openapi({ title: 'billingStartDate' }),
    clusterId: z.int().openapi({ title: 'clusterId' }),
    clusterName: z.string().openapi({ title: 'clusterName' }),
    clusterSlug: z.string().openapi({ title: 'clusterSlug' }),
    createdAt: z.string().openapi({ title: 'createdAt' }),
    createdBy: z.string().openapi({ title: 'createdBy' }),
    currentActiveAdminUsers: z.number().openapi({ title: 'currentActiveAdminUsers' }),
    currentActiveEditorUsers: z.number().openapi({ title: 'currentActiveEditorUsers' }),
    currentActiveUsers: z.number().openapi({ title: 'currentActiveUsers' }),
    currentActiveViewerUsers: z.number().openapi({ title: 'currentActiveViewerUsers' }),
    customAuth: z.boolean().openapi({ title: 'customAuth' }),
    customDomain: z.boolean().openapi({ title: 'customDomain' }),
    dailyAdminCnt: z.number().openapi({ title: 'dailyAdminCnt' }),
    dailyEditorCnt: z.number().openapi({ title: 'dailyEditorCnt' }),
    dailyUserCnt: z.number().openapi({ title: 'dailyUserCnt' }),
    dailyViewerCnt: z.number().openapi({ title: 'dailyViewerCnt' }),
    dashboardCnt: z.number().openapi({ title: 'dashboardCnt' }),
    dashboardQuota: z.number().openapi({ title: 'dashboardQuota' }),
    datasourceCnts: z.looseObject({}).openapi({ title: 'datasourceCnts' }),
    description: z.string().openapi({ title: 'description' }),
    gateway: z.string().openapi({ title: 'gateway' }),
    hlInstanceCurrentUsage: z.number().openapi({ title: 'hlInstanceCurrentUsage' }),
    hlInstanceBillingUsage: z.number().openapi({ title: 'hlInstanceBillingUsage' }),
    hlInstanceId: z.int().openapi({ title: 'hlInstanceId' }),
    hlInstanceName: z.string().openapi({ title: 'hlInstanceName' }),
    hlInstanceStatus: z
      .enum(['active', 'deleted', 'suspended', 'unknown'])
      .openapi({ title: 'hlInstanceStatus' }),
    hlInstanceUrl: z.string().openapi({ title: 'hlInstanceUrl' }),
    hlInstanceClusterId: z.int().openapi({ title: 'hlInstanceClusterId' }),
    hmInstanceGraphiteCurrentUsage: z.number().openapi({ title: 'hmInstanceGraphiteCurrentUsage' }),
    hmInstanceGraphiteBillingUsage: z.number().openapi({ title: 'hmInstanceGraphiteBillingUsage' }),
    hmInstanceGraphiteId: z.int().openapi({ title: 'hmInstanceGraphiteId' }),
    hmInstanceGraphiteName: z.string().openapi({ title: 'hmInstanceGraphiteName' }),
    hmInstanceGraphiteStatus: z
      .enum(['active', 'deleted', 'suspended', 'unknown'])
      .openapi({ title: 'hmInstanceGraphiteStatus' }),
    hmInstanceGraphiteType: z.string().openapi({ title: 'hmInstanceGraphiteType' }),
    hmInstanceGraphiteUrl: z.string().openapi({ title: 'hmInstanceGraphiteUrl' }),
    hmInstancePromClusterId: z.int().openapi({ title: 'hmInstancePromClusterId' }),
    hmInstancePromCurrentActiveSeries: z
      .number()
      .nullable()
      .openapi({ title: 'hmInstancePromCurrentActiveSeries' }),
    hmInstancePromCurrentUsage: z.number().openapi({ title: 'hmInstancePromCurrentUsage' }),
    hmInstancePromBillingUsage: z.number().openapi({ title: 'hmInstancePromBillingUsage' }),
    hmInstancePromId: z.int().openapi({ title: 'hmInstancePromId' }),
    hmInstancePromName: z.string().openapi({ title: 'hmInstancePromName' }),
    hmInstancePromStatus: z
      .enum(['active', 'deleted', 'suspended', 'unknown'])
      .openapi({ title: 'hmInstancePromStatus' }),
    hmInstancePromUrl: z.string().openapi({ title: 'hmInstancePromUrl' }),
    hmInstanceGraphiteClusterId: z.int().openapi({ title: 'hmInstanceGraphiteClusterId' }),
    htInstanceId: z.int().openapi({ title: 'htInstanceId' }),
    htInstanceName: z.string().openapi({ title: 'htInstanceName' }),
    htInstanceStatus: z
      .enum(['active', 'deleted', 'suspended', 'unknown'])
      .openapi({ title: 'htInstanceStatus' }),
    htInstanceUrl: z.string().openapi({ title: 'htInstanceUrl' }),
    htInstanceClusterId: z.int().openapi({ title: 'htInstanceClusterId' }),
    htInstanceCurrentUsage: z.number().openapi({ title: 'htInstanceCurrentUsage' }),
    htInstanceBillingUsage: z.number().openapi({ title: 'htInstanceBillingUsage' }),
    hpInstanceId: z.int().openapi({ title: 'hpInstanceId' }),
    hpInstanceName: z.string().openapi({ title: 'hpInstanceName' }),
    hpInstanceStatus: z
      .enum(['active', 'deleted', 'suspended', 'unknown'])
      .openapi({ title: 'hpInstanceStatus' }),
    hpInstanceUrl: z.string().openapi({ title: 'hpInstanceUrl' }),
    hpInstanceClusterId: z.int().openapi({ title: 'hpInstanceClusterId' }),
    hpInstanceCurrentUsage: z.number().openapi({ title: 'hpInstanceCurrentUsage' }),
    hpInstanceBillingUsage: z.number().openapi({ title: 'hpInstanceBillingUsage' }),
    id: z.int().openapi({ title: 'id' }),
    incident: z.number().openapi({ title: 'incident' }),
    labels: z.looseObject({}).exactOptional().openapi({ title: 'labels' }),
    machineLearning: z.number().openapi({ title: 'machineLearning' }),
    name: z.string().openapi({ title: 'name' }),
    orgId: z.int().openapi({ title: 'orgId' }),
    orgName: z.string().openapi({ title: 'orgName' }),
    orgSlug: z.string().openapi({ title: 'orgSlug' }),
    orgCreatedAt: z.string().openapi({ title: 'orgCreatedAt' }),
    plan: z
      .enum([
        'advanced',
        'basic',
        'basic-prom',
        'bundled',
        'enterprise',
        'fedramp',
        'fog',
        'free',
        'free-trial',
        'gcloud',
        'logsdemo',
        'payg',
        'starter',
        'starter-prom',
        'trial',
      ])
      .openapi({ title: 'plan' }),
    planName: z.string().openapi({ title: 'planName' }),
    regionId: z.int().openapi({ title: 'regionId' }),
    regionSlug: z.string().openapi({ title: 'regionSlug' }),
    regionPublicName: z.string().openapi({ title: 'regionPublicName' }),
    provider: z.string().openapi({ title: 'provider' }),
    providerRegion: z.string().openapi({ title: 'providerRegion' }),
    runningVersion: z.string().openapi({ title: 'runningVersion' }),
    slug: z.string().openapi({ title: 'slug' }),
    ssl: z.boolean().openapi({ title: 'ssl' }),
    status: z
      .enum([
        'active',
        'archived',
        'archiving',
        'deleted',
        'deleting',
        'migrated',
        'migrating',
        'paused',
        'pending',
        'restoring',
        'starting',
        'suspended',
        'suspending',
        'unknown',
      ])
      .openapi({ title: 'status' }),
    support: z.boolean().openapi({ title: 'support' }),
    trial: z.number().openapi({ title: 'trial' }),
    trialExpiresAt: z.string().nullable().openapi({ title: 'trialExpiresAt' }),
    updatedAt: z.string().nullable().openapi({ title: 'updatedAt' }),
    updatedBy: z.string().nullable().openapi({ title: 'updatedBy' }),
    statusUpdatedAt: z.string().nullable().exactOptional().openapi({ title: 'statusUpdatedAt' }),
    url: z.string().openapi({ title: 'url' }),
    userQuota: z.number().openapi({ title: 'userQuota' }),
    version: z.string().openapi({ title: 'version' }),
    versionIssueLink: z.string().exactOptional().openapi({ title: 'versionIssueLink' }),
    agentManagementInstanceId: z.int().openapi({ title: 'agentManagementInstanceId' }),
    agentManagementInstanceUrl: z.string().openapi({ title: 'agentManagementInstanceUrl' }),
    agentManagementInstanceName: z.string().openapi({ title: 'agentManagementInstanceName' }),
    agentManagementInstanceStatus: z
      .enum(['active', 'deleted', 'suspended', 'unknown'])
      .openapi({ title: 'agentManagementInstanceStatus' }),
    agentManagementInstanceClusterId: z
      .int()
      .openapi({ title: 'agentManagementInstanceClusterId' }),
    config: z.looseObject({}).exactOptional().openapi({ title: 'config' }),
    type: z.literal('grafana').openapi({ title: 'type' }),
    stackType: z.string().openapi({ title: 'stackType' }),
    k6OrgId: z.int().nullable().openapi({ title: 'k6OrgId' }),
    machineLearningLogsToken: z.string().openapi({ title: 'machineLearningLogsToken' }),
    usageStatsId: z.string().openapi({ title: 'usageStatsId' }),
    regionStackStateServiceUrl: z.string().openapi({ title: 'regionStackStateServiceUrl' }),
    regionSyntheticMonitoringApiUrl: z
      .string()
      .openapi({ title: 'regionSyntheticMonitoringApiUrl' }),
    regionInsightsApiUrl: z.string().openapi({ title: 'regionInsightsApiUrl' }),
    regionIntegrationsApiUrl: z.string().openapi({ title: 'regionIntegrationsApiUrl' }),
    regionHostedExportersApiUrl: z.string().openapi({ title: 'regionHostedExportersApiUrl' }),
    regionMachineLearningApiUrl: z.string().openapi({ title: 'regionMachineLearningApiUrl' }),
    regionLLMGatewayUrl: z.string().openapi({ title: 'regionLLMGatewayUrl' }),
    regionAssistantUrl: z.string().openapi({ title: 'regionAssistantUrl' }),
    regionSigilUrl: z.string().openapi({ title: 'regionSigilUrl' }),
    regionAgentO11YUrl: z.string().openapi({ title: 'regionAgentO11YUrl' }),
    links: z.array(LinksInnerSchema).openapi({ title: 'links' }),
    deleteProtection: z.boolean().openapi({ title: 'deleteProtection' }),
  })
  .openapi({
    example: {
      hmInstancePromName: 'hmInstancePromName',
      hmInstanceGraphiteType: 'hmInstanceGraphiteType',
      regionMachineLearningApiUrl: 'regionMachineLearningApiUrl',
      regionSigilUrl: 'regionSigilUrl',
      versionIssueLink: 'versionIssueLink',
      deleteProtection: true,
      customAuth: true,
      planName: 'planName',
      hmInstanceGraphiteStatus: 'active',
      type: 'grafana',
      currentActiveEditorUsers: 2.027123023002322,
      ssl: true,
      userQuota: 3.0576100241049344,
      id: 6,
      stackType: 'stackType',
      plan: 'advanced',
      hlInstanceBillingUsage: 5.025004791520295,
      agentManagementInstanceStatus: 'active',
      htInstanceClusterId: 5,
      alertCnt: 0.8008281904610115,
      datasourceCnts: '{}',
      hmInstanceGraphiteBillingUsage: 8.762042012749001,
      version: 'version',
      billingStartDate: 'billingStartDate',
      hmInstancePromClusterId: 6,
      hlInstanceStatus: 'active',
      labels: '{}',
      orgCreatedAt: 'orgCreatedAt',
      amInstanceStatus: 'active',
      clusterSlug: 'clusterSlug',
      htInstanceUrl: 'htInstanceUrl',
      regionIntegrationsApiUrl: 'regionIntegrationsApiUrl',
      hmInstancePromId: 2,
      status: 'active',
      htInstanceCurrentUsage: 6.704019297950036,
      orgId: 8,
      hmInstanceGraphiteId: 9,
      clusterName: 'clusterName',
      k6OrgId: 3,
      currentActiveUsers: 4.145608029883936,
      hpInstanceUrl: 'hpInstanceUrl',
      dailyAdminCnt: 1.2315135367772556,
      url: 'url',
      billingOnCallActiveUsers: 7.061401241503109,
      hmInstancePromUrl: 'hmInstancePromUrl',
      machineLearningLogsToken: 'machineLearningLogsToken',
      regionSyntheticMonitoringApiUrl: 'regionSyntheticMonitoringApiUrl',
      regionStackStateServiceUrl: 'regionStackStateServiceUrl',
      hmInstanceGraphiteClusterId: 6,
      hpInstanceId: 3,
      config: '{}',
      usageStatsId: 'usageStatsId',
      orgSlug: 'orgSlug',
      amInstanceGeneratorUrlDatasource: 'amInstanceGeneratorUrlDatasource',
      regionLLMGatewayUrl: 'regionLLMGatewayUrl',
      hmInstanceGraphiteCurrentUsage: 6.683562403749608,
      hlInstanceCurrentUsage: 4.965218492984954,
      dailyViewerCnt: 6.84685269835264,
      statusUpdatedAt: 'statusUpdatedAt',
      hlInstanceId: 9,
      agentManagementInstanceUrl: 'agentManagementInstanceUrl',
      agentManagementInstanceName: 'agentManagementInstanceName',
      regionAssistantUrl: 'regionAssistantUrl',
      trial: 3.0205796992916243,
      createdAt: 'createdAt',
      hmInstancePromCurrentActiveSeries: 3.5571952270680973,
      runningVersion: 'runningVersion',
      amInstanceId: 1,
      links: [
        { rel: 'rel', href: 'href' },
        { rel: 'rel', href: 'href' },
      ],
      amInstanceGeneratorUrl: 'amInstanceGeneratorUrl',
      hpInstanceStatus: 'active',
      slug: 'slug',
      updatedAt: 'updatedAt',
      htInstanceBillingUsage: 3.353193347011243,
      agentManagementInstanceId: 7,
      orgName: 'orgName',
      updatedBy: 'updatedBy',
      htInstanceName: 'htInstanceName',
      trialExpiresAt: 'trialExpiresAt',
      amInstanceUrl: 'amInstanceUrl',
      billingActiveUsers: 5.637376656633329,
      billingGrafanaActiveUsers: 2.3021358869347655,
      hmInstancePromStatus: 'active',
      regionInsightsApiUrl: 'regionInsightsApiUrl',
      regionHostedExportersApiUrl: 'regionHostedExportersApiUrl',
      customDomain: true,
      dailyUserCnt: 1.4894159098541704,
      amInstanceName: 'amInstanceName',
      dashboardQuota: 1.1730742509559433,
      regionPublicName: 'regionPublicName',
      billingEndDate: 'billingEndDate',
      name: 'name',
      hlInstanceUrl: 'hlInstanceUrl',
      hlInstanceClusterId: 9,
      support: true,
      hpInstanceBillingUsage: 7.058770351582356,
      description: 'description',
      clusterId: 9,
      dailyEditorCnt: 1.0246457001441578,
      alertQuota: 6.027456183070403,
      machineLearning: 4.652396432933246,
      currentActiveViewerUsers: 7.386281948385884,
      hlInstanceName: 'hlInstanceName',
      hmInstanceGraphiteName: 'hmInstanceGraphiteName',
      hpInstanceName: 'hpInstanceName',
      provider: 'provider',
      hmInstancePromBillingUsage: 1.284659006116532,
      currentActiveAdminUsers: 3.616076749251911,
      regionAgentO11YUrl: 'regionAgentO11YUrl',
      htInstanceId: 6,
      regionSlug: 'regionSlug',
      dashboardCnt: 7.457744773683766,
      htInstanceStatus: 'active',
      agentManagementInstanceClusterId: 5,
      hmInstanceGraphiteUrl: 'hmInstanceGraphiteUrl',
      hpInstanceCurrentUsage: 0.8851374739011653,
      providerRegion: 'providerRegion',
      createdBy: 'createdBy',
      regionId: 7,
      hpInstanceClusterId: 7,
      amInstanceClusterId: 5,
      hmInstancePromCurrentUsage: 6.965117697638846,
      incident: 0.10263654006109402,
      gateway: 'gateway',
    },
    required: [
      'agentManagementInstanceClusterId',
      'agentManagementInstanceId',
      'agentManagementInstanceName',
      'agentManagementInstanceStatus',
      'agentManagementInstanceUrl',
      'alertCnt',
      'alertQuota',
      'amInstanceClusterId',
      'amInstanceGeneratorUrl',
      'amInstanceGeneratorUrlDatasource',
      'amInstanceId',
      'amInstanceName',
      'amInstanceStatus',
      'amInstanceUrl',
      'billingActiveUsers',
      'billingEndDate',
      'billingGrafanaActiveUsers',
      'billingOnCallActiveUsers',
      'billingStartDate',
      'clusterId',
      'clusterName',
      'clusterSlug',
      'createdAt',
      'createdBy',
      'currentActiveAdminUsers',
      'currentActiveEditorUsers',
      'currentActiveUsers',
      'currentActiveViewerUsers',
      'customAuth',
      'customDomain',
      'dailyAdminCnt',
      'dailyEditorCnt',
      'dailyUserCnt',
      'dailyViewerCnt',
      'dashboardCnt',
      'dashboardQuota',
      'datasourceCnts',
      'deleteProtection',
      'description',
      'gateway',
      'hlInstanceBillingUsage',
      'hlInstanceClusterId',
      'hlInstanceCurrentUsage',
      'hlInstanceId',
      'hlInstanceName',
      'hlInstanceStatus',
      'hlInstanceUrl',
      'hmInstanceGraphiteBillingUsage',
      'hmInstanceGraphiteClusterId',
      'hmInstanceGraphiteCurrentUsage',
      'hmInstanceGraphiteId',
      'hmInstanceGraphiteName',
      'hmInstanceGraphiteStatus',
      'hmInstanceGraphiteType',
      'hmInstanceGraphiteUrl',
      'hmInstancePromBillingUsage',
      'hmInstancePromClusterId',
      'hmInstancePromCurrentActiveSeries',
      'hmInstancePromCurrentUsage',
      'hmInstancePromId',
      'hmInstancePromName',
      'hmInstancePromStatus',
      'hmInstancePromUrl',
      'hpInstanceBillingUsage',
      'hpInstanceClusterId',
      'hpInstanceCurrentUsage',
      'hpInstanceId',
      'hpInstanceName',
      'hpInstanceStatus',
      'hpInstanceUrl',
      'htInstanceBillingUsage',
      'htInstanceClusterId',
      'htInstanceCurrentUsage',
      'htInstanceId',
      'htInstanceName',
      'htInstanceStatus',
      'htInstanceUrl',
      'id',
      'incident',
      'k6OrgId',
      'links',
      'machineLearning',
      'machineLearningLogsToken',
      'name',
      'orgCreatedAt',
      'orgId',
      'orgName',
      'orgSlug',
      'plan',
      'planName',
      'provider',
      'providerRegion',
      'regionAgentO11YUrl',
      'regionAssistantUrl',
      'regionHostedExportersApiUrl',
      'regionId',
      'regionInsightsApiUrl',
      'regionIntegrationsApiUrl',
      'regionLLMGatewayUrl',
      'regionMachineLearningApiUrl',
      'regionPublicName',
      'regionSigilUrl',
      'regionSlug',
      'regionStackStateServiceUrl',
      'regionSyntheticMonitoringApiUrl',
      'runningVersion',
      'slug',
      'ssl',
      'stackType',
      'status',
      'support',
      'trial',
      'trialExpiresAt',
      'type',
      'updatedAt',
      'updatedBy',
      'url',
      'usageStatsId',
      'userQuota',
      'version',
    ],
  })
  .openapi('FormattedApiInstance')

const LinksInner_1Schema = z
  .object({
    rel: z.string().default('self').openapi({ title: 'rel' }),
    href: z.string().openapi({ title: 'href' }),
  })
  .openapi({ example: { rel: 'self', href: 'href' }, required: ['href', 'rel'] })
  .openapi('LinksInner_1')

const FormattedApiInstancePluginSchema = z
  .object({
    id: z.number().openapi({ title: 'id' }),
    instanceId: z.number().openapi({ title: 'instanceId' }),
    instanceUrl: z.string().openapi({ title: 'instanceUrl' }),
    instanceSlug: z.string().openapi({ title: 'instanceSlug' }),
    pluginId: z.number().openapi({ title: 'pluginId' }),
    pluginSlug: z.string().openapi({ title: 'pluginSlug' }),
    pluginName: z.string().openapi({ title: 'pluginName' }),
    version: z.string().openapi({ title: 'version' }),
    latestVersion: z.string().openapi({ title: 'latestVersion' }),
    createdAt: z.string().openapi({ title: 'createdAt' }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'updatedAt' }),
    links: z.array(LinksInner_1Schema).openapi({ title: 'links' }),
  })
  .openapi({
    example: {
      createdAt: 'createdAt',
      instanceId: 6.027456183070403,
      pluginSlug: 'pluginSlug',
      pluginName: 'pluginName',
      latestVersion: 'latestVersion',
      pluginId: 1.4658129805029452,
      instanceSlug: 'instanceSlug',
      links: [
        { rel: 'self', href: 'href' },
        { rel: 'self', href: 'href' },
      ],
      id: 0.8008281904610115,
      version: 'version',
      instanceUrl: 'instanceUrl',
      updatedAt: '2000-01-23T04:56:07.000+00:00',
    },
    required: [
      'createdAt',
      'id',
      'instanceId',
      'instanceSlug',
      'instanceUrl',
      'latestVersion',
      'links',
      'pluginId',
      'pluginName',
      'pluginSlug',
      'version',
    ],
  })
  .openapi('FormattedApiInstancePlugin')

const FormattedApiInstanceReadinessSchema = z
  .object({ ready: z.boolean().openapi({ title: 'ready' }) })
  .openapi({ example: { ready: true }, required: ['ready'] })
  .openapi('FormattedApiInstanceReadiness')

const FormattedApiOrgPublicAllowGCloudTrialSchema = z
  .union([z.boolean(), z.number()])
  .openapi('FormattedApiOrgPublicAllowGCloudTrial')

const CurrentSchema = z
  .object({
    product: z.any().nullable().openapi({ title: 'product' }),
    isTrial: z.boolean().openapi({ title: 'isTrial' }),
    startDate: z.any().nullable().openapi({ title: 'startDate' }),
    endDate: z.any().nullable().openapi({ title: 'endDate' }),
    payload: z.looseObject({}).openapi({ title: 'payload' }),
    plan: z.any().nullable().openapi({ title: 'plan' }),
    publicName: z.any().nullable().openapi({ title: 'publicName' }),
    enterprisePluginsAdded: z.boolean().openapi({ title: 'enterprisePluginsAdded' }),
    planBillingCycle: z.any().nullable().openapi({ title: 'planBillingCycle' }),
  })
  .openapi({
    example: {
      product: '',
      endDate: '',
      payload: '{}',
      publicName: '',
      planBillingCycle: '',
      enterprisePluginsAdded: true,
      isTrial: true,
      plan: '',
      startDate: '',
    },
    required: [
      'endDate',
      'enterprisePluginsAdded',
      'isTrial',
      'payload',
      'plan',
      'planBillingCycle',
      'product',
      'publicName',
      'startDate',
    ],
    title: 'current',
  })
  .openapi('Current')

const SubscriptionsAnyOfSchema = z
  .object({ current: CurrentSchema, next: z.any().nullable().openapi({ title: 'next' }) })
  .openapi({
    example: {
      next: '',
      current: {
        product: '',
        endDate: '',
        payload: '{}',
        publicName: '',
        planBillingCycle: '',
        enterprisePluginsAdded: true,
        isTrial: true,
        plan: '',
        startDate: '',
      },
    },
    required: ['current', 'next'],
  })
  .openapi('SubscriptionsAnyOf')

const PayloadSchema = z
  .object({
    withAddons: z.array(z.string()).exactOptional().openapi({ title: 'withAddons' }),
    licenseAllPlugins: z.boolean().exactOptional().openapi({ title: 'licenseAllPlugins' }),
    caseId: z.string().exactOptional().openapi({ title: 'caseId' }),
  })
  .catchall(z.any())
  .openapi({ title: 'payload', required: [] })
  .openapi('Payload')

const Current_1Schema = z
  .object({
    product: z
      .enum([
        'grafana-cloud-advanced',
        'grafana-cloud-fedramp',
        'grafana-cloud-free',
        'grafana-cloud-pro',
        'grafana-cloud-ss-advanced',
      ])
      .openapi({ title: 'product' }),
    isTrial: z.boolean().openapi({ title: 'isTrial' }),
    startDate: z.iso.datetime({ offset: true }).openapi({ title: 'startDate' }),
    endDate: z.iso.datetime({ offset: true }).openapi({ title: 'endDate' }),
    payload: PayloadSchema,
    plan: z.string().nullable().openapi({ title: 'plan' }),
    publicName: z.string().nullable().openapi({ title: 'publicName' }),
    enterprisePluginsAdded: z.boolean().openapi({ title: 'enterprisePluginsAdded' }),
    planBillingCycle: z.string().openapi({ title: 'planBillingCycle' }),
  })
  .openapi({
    required: [
      'endDate',
      'enterprisePluginsAdded',
      'isTrial',
      'payload',
      'plan',
      'planBillingCycle',
      'product',
      'publicName',
      'startDate',
    ],
    title: 'current',
  })
  .openapi('Current_1')

const NextSchema = z
  .object({
    product: z
      .enum([
        'grafana-cloud-advanced',
        'grafana-cloud-fedramp',
        'grafana-cloud-free',
        'grafana-cloud-pro',
        'grafana-cloud-ss-advanced',
      ])
      .openapi({ title: 'product' }),
    payload: PayloadSchema,
    plan: z.string().nullable().openapi({ title: 'plan' }),
    publicName: z.string().nullable().openapi({ title: 'publicName' }),
  })
  .openapi({ required: ['payload', 'plan', 'product', 'publicName'], title: 'next' })
  .openapi('Next')

const SubscriptionsAnyOf_1Schema = z
  .object({ current: Current_1Schema, next: NextSchema })
  .openapi({ required: ['current', 'next'] })
  .openapi('SubscriptionsAnyOf_1')

const Current_2Schema = z
  .object({
    product: z
      .enum([
        'grafana-cloud-advanced',
        'grafana-cloud-fedramp',
        'grafana-cloud-free',
        'grafana-cloud-pro',
        'grafana-cloud-ss-advanced',
      ])
      .openapi({ title: 'product' }),
    isTrial: z.boolean().openapi({ title: 'isTrial' }),
    startDate: z.iso.datetime({ offset: true }).openapi({ title: 'startDate' }),
    endDate: z.any().nullable().openapi({ title: 'endDate' }),
    payload: PayloadSchema,
    plan: z.string().nullable().openapi({ title: 'plan' }),
    publicName: z.string().nullable().openapi({ title: 'publicName' }),
    enterprisePluginsAdded: z.boolean().openapi({ title: 'enterprisePluginsAdded' }),
    planBillingCycle: z.string().openapi({ title: 'planBillingCycle' }),
  })
  .openapi({
    required: [
      'endDate',
      'enterprisePluginsAdded',
      'isTrial',
      'payload',
      'plan',
      'planBillingCycle',
      'product',
      'publicName',
      'startDate',
    ],
    title: 'current',
  })
  .openapi('Current_2')

const SubscriptionsAnyOf_2Schema = z
  .object({ current: Current_2Schema, next: z.any().nullable().openapi({ title: 'next' }) })
  .openapi({ required: ['current', 'next'] })
  .openapi('SubscriptionsAnyOf_2')

const SubscriptionsSchema = z
  .union([SubscriptionsAnyOfSchema, SubscriptionsAnyOf_1Schema, SubscriptionsAnyOf_2Schema])
  .openapi({ title: 'subscriptions' })
  .openapi('Subscriptions')

const FormattedApiOrgPublicSchema = z
  .object({
    id: z.int().openapi({ title: 'id' }),
    slug: z.string().openapi({ title: 'slug' }),
    name: z.string().openapi({ title: 'name' }),
    url: z.string().openapi({ title: 'url' }),
    createdAt: z.string().openapi({ title: 'createdAt' }),
    createdBy: z.string().nullable().openapi({ title: 'createdBy' }),
    updatedAt: z.string().nullable().openapi({ title: 'updatedAt' }),
    updatedBy: z.string().nullable().openapi({ title: 'updatedBy' }),
    avatar: z.string().nullable().openapi({ title: 'avatar' }),
    isource: z.string().nullable().openapi({ title: 'isource' }),
    osource: z.string().nullable().openapi({ title: 'osource' }),
    isStaff: z.boolean().openapi({ title: 'isStaff' }),
    checksPerMonth: z.number().openapi({ title: 'checksPerMonth' }),
    wpPlan: z.string().openapi({ title: 'wpPlan' }),
    hgInstanceLimit: z.number().openapi({ title: 'hgInstanceLimit' }),
    hmInstanceLimit: z.number().openapi({ title: 'hmInstanceLimit' }),
    hlInstanceLimit: z.number().openapi({ title: 'hlInstanceLimit' }),
    userQuota: z.number().openapi({ title: 'userQuota' }),
    supportPlan: z.string().openapi({ title: 'supportPlan' }),
    creditApproved: z.number().openapi({ title: 'creditApproved' }),
    msaSignedAt: z.string().nullable().openapi({ title: 'msaSignedAt' }),
    msaSignedBy: z.string().nullable().openapi({ title: 'msaSignedBy' }),
    enterprisePlugins: z.number().openapi({ title: 'enterprisePlugins' }),
    licenseProducts: z.array(z.string()).openapi({ title: 'licenseProducts' }),
    grafanaCloud: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(11),
        z.literal(2),
        z.literal(31),
        z.literal(4),
        z.literal(41),
        z.literal(6),
        z.literal(9),
      ])
      .openapi({ title: 'grafanaCloud' }),
    privacy: z.string().openapi({ title: 'privacy' }),
    reseller: z.string().openapi({ title: 'reseller' }),
    resellerId: z.number().nullable().openapi({ title: 'resellerId' }),
    resellerName: z.string().nullable().openapi({ title: 'resellerName' }),
    emergencySupport: z.boolean().openapi({ title: 'emergencySupport' }),
    gcloudMonthlyCost: z.number().openapi({ title: 'gcloudMonthlyCost' }),
    hgUsage: z.number().openapi({ title: 'hgUsage' }),
    hgCurrentActiveUsers: z.number().openapi({ title: 'hgCurrentActiveUsers' }),
    hgGrafanaUsage: z.number().openapi({ title: 'hgGrafanaUsage' }),
    hgOnCallUsage: z.number().openapi({ title: 'hgOnCallUsage' }),
    hmUsage: z.number().openapi({ title: 'hmUsage' }),
    hmCurrentUsage: z.number().openapi({ title: 'hmCurrentUsage' }),
    hmGraphiteUsage: z.number().openapi({ title: 'hmGraphiteUsage' }),
    hlUsage: z.number().openapi({ title: 'hlUsage' }),
    hlRetentionUsage: z.number().openapi({ title: 'hlRetentionUsage' }),
    htUsage: z.number().openapi({ title: 'htUsage' }),
    hpUsage: z.number().openapi({ title: 'hpUsage' }),
    irmUsage: z.number().openapi({ title: 'irmUsage' }),
    k6VuhUsage: z.number().openapi({ title: 'k6VuhUsage' }),
    k6IPUsage: z.number().openapi({ title: 'k6IPUsage' }),
    feO11YUsage: z.number().openapi({ title: 'feO11YUsage' }),
    appO11YUsage: z.number().openapi({ title: 'appO11YUsage' }),
    smUsage: z.number().openapi({ title: 'smUsage' }),
    infraO11YHostsUsage: z.number().openapi({ title: 'infraO11YHostsUsage' }),
    infraO11YContainersUsage: z.number().openapi({ title: 'infraO11YContainersUsage' }),
    geUsersUsage: z.number().openapi({ title: 'geUsersUsage' }),
    geInstancesUsage: z.number().openapi({ title: 'geInstancesUsage' }),
    smBrowserUsage: z.number().openapi({ title: 'smBrowserUsage' }),
    awsMarketplaceSupport: z.number().openapi({ title: 'awsMarketplaceSupport' }),
    trialStartDate: z.string().nullable().openapi({ title: 'trialStartDate' }),
    trialEndDate: z.string().nullable().openapi({ title: 'trialEndDate' }),
    trialLengthDays: z.number().nullable().openapi({ title: 'trialLengthDays' }),
    trialNoticeDate: z.string().nullable().openapi({ title: 'trialNoticeDate' }),
    cancellationDate: z.string().nullable().openapi({ title: 'cancellationDate' }),
    retainedStackId: z.int().openapi({ title: 'retainedStackId' }),
    allowGCloudTrial: FormattedApiOrgPublicAllowGCloudTrialSchema,
    pluginSignatureType: z.string().openapi({ title: 'pluginSignatureType' }),
    contractType: z.string().openapi({ title: 'contractType' }),
    contractTypeId: z
      .union([z.literal(0), z.literal(1), z.literal(2)])
      .openapi({ title: 'contractTypeId' }),
    liveChatEnabled: z.boolean().openapi({ title: 'liveChatEnabled' }),
    kapaDeflectorEnabled: z.boolean().openapi({ title: 'kapaDeflectorEnabled' }),
    disableTokenExpirationEmails: z.boolean().openapi({ title: 'disableTokenExpirationEmails' }),
    maxTokenExpirationDays: z.number().openapi({ title: 'maxTokenExpirationDays' }),
    mfaRequired: z.boolean().exactOptional().openapi({ title: 'mfaRequired' }),
    mfaAdminRecoveryOnly: z.boolean().exactOptional().openapi({ title: 'mfaAdminRecoveryOnly' }),
    links: z.array(LinksInnerSchema).openapi({ title: 'links' }),
    subscriptions: SubscriptionsSchema,
  })
  .openapi({
    example: {
      grafanaCloud: 3.616076749251911,
      infraO11YContainersUsage: 2.8841621266687802,
      subscriptions: {
        next: '',
        current: {
          product: '',
          endDate: '',
          payload: '{}',
          publicName: '',
          planBillingCycle: '',
          enterprisePluginsAdded: true,
          isTrial: true,
          plan: '',
          startDate: '',
        },
      },
      contractType: 'contractType',
      k6IPUsage: 9.018348186070783,
      trialNoticeDate: 'trialNoticeDate',
      hgCurrentActiveUsers: 1.2315135367772556,
      createdAt: 'createdAt',
      msaSignedBy: 'msaSignedBy',
      pluginSignatureType: 'pluginSignatureType',
      userQuota: 2.3021358869347655,
      kapaDeflectorEnabled: true,
      hmInstanceLimit: 5.962133916683182,
      links: [
        { rel: 'rel', href: 'href' },
        { rel: 'rel', href: 'href' },
      ],
      id: 0,
      gcloudMonthlyCost: 4.145608029883936,
      slug: 'slug',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
      isStaff: true,
      resellerName: 'resellerName',
      hgOnCallUsage: 1.4894159098541704,
      geUsersUsage: 6.778324963048013,
      trialLengthDays: 3.353193347011243,
      htUsage: 9.965781217890562,
      osource: 'osource',
      resellerId: 2.027123023002322,
      hgGrafanaUsage: 1.0246457001441578,
      disableTokenExpirationEmails: true,
      msaSignedAt: 'msaSignedAt',
      smUsage: 6.965117697638846,
      name: 'name',
      k6VuhUsage: 8.762042012749001,
      isource: 'isource',
      allowGCloudTrial: true,
      supportPlan: 'supportPlan',
      appO11YUsage: 3.5571952270680973,
      geInstancesUsage: 6.878052220127876,
      wpPlan: 'wpPlan',
      mfaAdminRecoveryOnly: true,
      privacy: 'privacy',
      checksPerMonth: 6.027456183070403,
      hlUsage: 4.965218492984954,
      hgUsage: 7.386281948385884,
      smBrowserUsage: 5.944895607614016,
      liveChatEnabled: true,
      maxTokenExpirationDays: 0.8851374739011653,
      licenseProducts: ['licenseProducts', 'licenseProducts'],
      irmUsage: 6.683562403749608,
      hlInstanceLimit: 5.637376656633329,
      emergencySupport: true,
      mfaRequired: true,
      infraO11YHostsUsage: 1.284659006116532,
      cancellationDate: 'cancellationDate',
      awsMarketplaceSupport: 6.704019297950036,
      hgInstanceLimit: 1.4658129805029452,
      hmCurrentUsage: 7.457744773683766,
      trialStartDate: 'trialStartDate',
      enterprisePlugins: 9.301444243932576,
      hlRetentionUsage: 5.025004791520295,
      reseller: 'reseller',
      avatar: 'avatar',
      retainedStackId: 3,
      url: 'url',
      contractTypeId: 7.143538047012306,
      hpUsage: 9.369310271410669,
      trialEndDate: 'trialEndDate',
      createdBy: 'createdBy',
      hmGraphiteUsage: 1.1730742509559433,
      hmUsage: 6.84685269835264,
      creditApproved: 7.061401241503109,
      feO11YUsage: 6.438423552598547,
    },
    required: [
      'allowGCloudTrial',
      'appO11YUsage',
      'avatar',
      'awsMarketplaceSupport',
      'cancellationDate',
      'checksPerMonth',
      'contractType',
      'contractTypeId',
      'createdAt',
      'createdBy',
      'creditApproved',
      'disableTokenExpirationEmails',
      'emergencySupport',
      'enterprisePlugins',
      'feO11YUsage',
      'gcloudMonthlyCost',
      'geInstancesUsage',
      'geUsersUsage',
      'grafanaCloud',
      'hgCurrentActiveUsers',
      'hgGrafanaUsage',
      'hgInstanceLimit',
      'hgOnCallUsage',
      'hgUsage',
      'hlInstanceLimit',
      'hlRetentionUsage',
      'hlUsage',
      'hmCurrentUsage',
      'hmGraphiteUsage',
      'hmInstanceLimit',
      'hmUsage',
      'hpUsage',
      'htUsage',
      'id',
      'infraO11YContainersUsage',
      'infraO11YHostsUsage',
      'irmUsage',
      'isStaff',
      'isource',
      'k6IPUsage',
      'k6VuhUsage',
      'kapaDeflectorEnabled',
      'licenseProducts',
      'links',
      'liveChatEnabled',
      'maxTokenExpirationDays',
      'msaSignedAt',
      'msaSignedBy',
      'name',
      'osource',
      'pluginSignatureType',
      'privacy',
      'reseller',
      'resellerId',
      'resellerName',
      'retainedStackId',
      'slug',
      'smBrowserUsage',
      'smUsage',
      'subscriptions',
      'supportPlan',
      'trialEndDate',
      'trialLengthDays',
      'trialNoticeDate',
      'trialStartDate',
      'updatedAt',
      'updatedBy',
      'url',
      'userQuota',
      'wpPlan',
    ],
  })
  .openapi('FormattedApiOrgPublic')

const FormattedApiOrgSettingsSchema = z
  .object({
    aiDataSharingOptOut: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ title: 'aiDataSharingOptOut' }),
    disableTokenExpirationEmails: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ title: 'disableTokenExpirationEmails' }),
    maxTokenExpirationDays: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ title: 'maxTokenExpirationDays' }),
    mfaAdminRecoveryOnly: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ title: 'mfaAdminRecoveryOnly' }),
    mfaRequired: z.boolean().nullable().exactOptional().openapi({ title: 'mfaRequired' }),
    allowedInviteDomains: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({
    example: {
      aiDataSharingOptOut: true,
      mfaAdminRecoveryOnly: true,
      allowedInviteDomains: ['allowedInviteDomains', 'allowedInviteDomains'],
      maxTokenExpirationDays: 0.8008281904610115,
      disableTokenExpirationEmails: true,
      mfaRequired: true,
    },
    required: [],
  })
  .openapi('FormattedApiOrgSettings')

const FormattedApiOrgStackRegionSchema = z
  .object({
    id: z.number().openapi({ title: 'id' }),
    stackRegionId: z.number().openapi({ title: 'stackRegionId' }),
    orgId: z.number().openapi({ title: 'orgId' }),
    createdAt: z.string().openapi({ title: 'createdAt' }),
    updatedAt: z.string().nullable().openapi({ title: 'updatedAt' }),
  })
  .openapi({
    example: {
      createdAt: 'createdAt',
      id: 0.8008281904610115,
      orgId: 1.4658129805029452,
      stackRegionId: 6.027456183070403,
      updatedAt: 'updatedAt',
    },
    required: ['createdAt', 'id', 'orgId', 'stackRegionId', 'updatedAt'],
  })
  .openapi('FormattedApiOrgStackRegion')

const AuthorSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: "Author's name.", title: 'name' }),
    email: z.string().exactOptional().openapi({ description: "Author's name.", title: 'email' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: "Link to author's website.", title: 'url' }),
  })
  .openapi({
    description: 'Information about the plugin author.',
    example: { name: 'name', email: 'email', url: 'url' },
    title: 'author',
    required: [],
  })
  .openapi('Author')

const BuildSchema = z
  .object({
    time: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Time when the plugin was built, as a Unix timestamp.',
        title: 'time',
      }),
    repo: z.string().exactOptional().openapi({ title: 'repo' }),
    branch: z
      .string()
      .exactOptional()
      .openapi({ description: 'Git branch the plugin was built from.', title: 'branch' }),
    hash: z
      .string()
      .exactOptional()
      .openapi({ description: 'Git hash of the commit the plugin was built from', title: 'hash' }),
    number: z.number().exactOptional().openapi({ title: 'number' }),
    pr: z
      .number()
      .exactOptional()
      .openapi({ description: 'GitHub pull request the plugin was built from', title: 'pr' }),
    build: z
      .number()
      .exactOptional()
      .openapi({ description: 'Build job number used to build this plugin.', title: 'build' }),
  })
  .openapi({
    description: 'Build information',
    example: {
      number: 7.386281948385884,
      pr: 1.2315135367772556,
      build: 1.0246457001441578,
      repo: 'repo',
      time: 4.145608029883936,
      branch: 'branch',
      hash: 'hash',
    },
    title: 'build',
    required: [],
  })
  .openapi('Build')

const LinksInner_2Schema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Display name of the link. Special names with predefined behavior: <br/>• `documentation` - sets Documentation link on plugins detail page<br/>• `repository` - used to determine and link to repository of the plugin<br/>• `license` - sets License link on plugins detail page<br/>• `raise issue` - sets `Raise an Issue` link on plugins detail page<br/>• `sponsorship` - sets `Sponsor this developer` link on plugins detail page to direct users to how they can support your work',
        title: 'name',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL value to use for this specific link.', title: 'url' }),
    target: z
      .enum(['_blank', '_parent', '_self', '_top'])
      .exactOptional()
      .openapi({
        description: 'A string that indicates where to display the linked resource',
        title: 'target',
      }),
  })
  .openapi({ example: { name: 'name', url: 'url', target: '_blank' }, required: [] })
  .openapi('LinksInner_2')

const LogosSchema = z
  .object({
    small: z
      .string()
      .openapi({
        description:
          'Link to the "small" version of the plugin logo, which must be an SVG image. "Large" and "small" logos can be the same image.',
        title: 'small',
      }),
    large: z
      .string()
      .openapi({
        description:
          'Link to the "large" version of the plugin logo, which must be an SVG image. "Large" and "small" logos can be the same image.',
        title: 'large',
      }),
  })
  .openapi({
    description: 'SVG images that are used as plugin icons.',
    example: { small: 'small', large: 'large' },
    required: ['large', 'small'],
    title: 'logos',
  })
  .openapi('Logos')

const ScreenshotsInnerSchema = z
  .object({
    name: z.string().exactOptional().openapi({ title: 'name' }),
    path: z.string().exactOptional().openapi({ title: 'path' }),
  })
  .openapi({ example: { path: 'path', name: 'name' }, required: [] })
  .openapi('ScreenshotsInner')

const InfoSchema = z
  .object({
    author: AuthorSchema.exactOptional(),
    build: BuildSchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Description of plugin. Used on the plugins page in Grafana and for search on grafana.com.',
        title: 'description',
      }),
    keywords: z
      .array(z.string())
      .min(1)
      .openapi({
        description: 'Array of plugin keywords. Used for search on grafana.com.',
        title: 'keywords',
      }),
    links: z
      .array(LinksInner_2Schema)
      .exactOptional()
      .openapi({
        description:
          "An array of link objects to be displayed on this plugin's project page in the form `{name: 'foo', url: 'http://example.com'}`",
        title: 'links',
      }),
    logos: LogosSchema,
    screenshots: z
      .array(ScreenshotsInnerSchema)
      .exactOptional()
      .openapi({
        description:
          "An array of screenshot objects in the form `{name: 'bar', path: 'img/screenshot.png'}`",
        title: 'screenshots',
      }),
    updated: z
      .string()
      .openapi({ description: 'Date when this plugin was built.', title: 'updated' }),
    version: z
      .string()
      .openapi({
        description: '[SemVer](https://semver.org/) version of this commit, e.g. `6.7.1`.',
        title: 'version',
      }),
  })
  .openapi({
    description:
      'Metadata for the plugin. Some fields are used on the plugins page in Grafana and others on grafana.com if the plugin is published.',
    example: {
      keywords: ['keywords', 'keywords'],
      build: {
        number: 7.386281948385884,
        pr: 1.2315135367772556,
        build: 1.0246457001441578,
        repo: 'repo',
        time: 4.145608029883936,
        branch: 'branch',
        hash: 'hash',
      },
      author: { name: 'name', email: 'email', url: 'url' },
      description: 'description',
      links: [
        { name: 'name', url: 'url', target: '_blank' },
        { name: 'name', url: 'url', target: '_blank' },
      ],
      logos: { small: 'small', large: 'large' },
      updated: 'updated',
      version: 'version',
      screenshots: [
        { path: 'path', name: 'name' },
        { path: 'path', name: 'name' },
      ],
    },
    required: ['keywords', 'logos', 'updated', 'version'],
    title: 'info',
  })
  .openapi('Info')

const PluginsInnerSchema = z
  .object({
    id: z.string().openapi({ title: 'id' }),
    type: z.enum(['app', 'datasource', 'panel']).openapi({ title: 'type' }),
    name: z.string().openapi({ title: 'name' }),
  })
  .catchall(z.any())
  .openapi({ example: { name: 'name', id: 'id', type: 'app' }, required: ['id', 'name', 'type'] })
  .openapi('PluginsInner')

const ExtensionsSchema = z
  .object({
    exposedComponents: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'An array of exposed component ids that this plugin depends on.',
        title: 'exposedComponents',
      }),
  })
  .catchall(z.any())
  .openapi({
    description: 'Plugin extensions that this plugin depends on.',
    example: { exposedComponents: ['exposedComponents', 'exposedComponents'] },
    title: 'extensions',
    required: [],
  })
  .openapi('Extensions')

const DependenciesSchema = z
  .object({
    grafanaVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '(Deprecated) Required Grafana version for this plugin, e.g. `6.x.x 7.x.x` to denote plugin requires Grafana v6.x.x or v7.x.x.',
        title: 'grafanaVersion',
      }),
    grafanaDependency: z
      .string()
      .openapi({
        description:
          'Required Grafana version for this plugin. Validated using https://github.com/npm/node-semver.',
        title: 'grafanaDependency',
      }),
    plugins: z
      .array(PluginsInnerSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of required plugins on which this plugin depends. Only non-core (that is, external plugins) have to be specified in this list.',
        title: 'plugins',
      }),
    extensions: ExtensionsSchema.exactOptional(),
  })
  .openapi({
    description: 'Dependency information related to Grafana and other plugins.',
    example: {
      extensions: { exposedComponents: ['exposedComponents', 'exposedComponents'] },
      plugins: [
        { name: 'name', id: 'id', type: 'app' },
        { name: 'name', id: 'id', type: 'app' },
      ],
      grafanaVersion: 'grafanaVersion',
      grafanaDependency: 'grafanaDependency',
    },
    required: ['grafanaDependency'],
    title: 'dependencies',
  })
  .openapi('Dependencies')

const EnterpriseFeaturesSchema = z
  .object({
    healthDiagnosticsErrors: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enable/Disable health diagnostics errors. Requires Grafana >=7.5.5.',
        title: 'healthDiagnosticsErrors',
      }),
  })
  .catchall(z.any())
  .openapi({
    description: 'Grafana Enterprise specific features',
    example: { healthDiagnosticsErrors: true },
    title: 'enterpriseFeatures',
    required: [],
  })
  .openapi('EnterpriseFeatures')

const IncludesInnerSchema = z
  .object({
    uid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the included resource', title: 'uid' }),
    type: z.enum(['dashboard', 'datasource', 'page', 'panel']).openapi({ title: 'type' }),
    name: z.string().exactOptional().openapi({ title: 'name' }),
    component: z
      .string()
      .exactOptional()
      .openapi({
        description: '(Legacy) The Angular component to use for a page.',
        title: 'component',
      }),
    role: z
      .enum(['Admin', 'Editor', 'Viewer'])
      .exactOptional()
      .openapi({
        description: 'The minimum role a user must have to see this page in the navigation menu.',
        title: 'role',
      }),
    action: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The RBAC action a user must have to see this page in the navigation menu. **Warning**: unless the action targets the plugin, only the action is verified, not what it applies to.',
        title: 'action',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used for app plugins.', title: 'path' }),
    addToNav: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Add the include to the navigation menu.', title: 'addToNav' }),
    defaultNav: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Page or dashboard when user clicks the icon in the side menu.',
        title: 'defaultNav',
      }),
    icon: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Icon to use in the side menu. For information on available icon, refer to [Icons Overview](https://developers.grafana.com/ui/latest/index.html?path=/story/docs-overview-icon--icons-overview).',
        title: 'icon',
      }),
  })
  .catchall(z.any())
  .openapi({
    example: {
      uid: 'uid',
      path: 'path',
      defaultNav: true,
      component: 'component',
      role: 'Admin',
      name: 'name',
      icon: 'icon',
      action: 'action',
      type: 'dashboard',
      addToNav: true,
    },
    required: ['type'],
  })
  .openapi('IncludesInner')

const QueryOptionsSchema = z
  .object({
    maxDataPoints: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For data source plugins. If the `max data points` option should be shown in the query options section in the query editor.',
        title: 'maxDataPoints',
      }),
    minInterval: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For data source plugins. If the `min interval` option should be shown in the query options section in the query editor.',
        title: 'minInterval',
      }),
    cacheTimeout: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For data source plugins. If the `cache timeout` option should be shown in the query options section in the query editor.',
        title: 'cacheTimeout',
      }),
  })
  .openapi({
    description:
      "For data source plugins. There is a query options section in the plugin's query editor and these options can be turned on if needed.",
    example: { maxDataPoints: true, cacheTimeout: true, minInterval: true },
    title: 'queryOptions',
    required: [],
  })
  .openapi('QueryOptions')

const ParamsSchema = z
  .object({
    grant_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'OAuth grant type', title: 'grant_type' }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'OAuth client ID', title: 'client_id' }),
    client_secret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth client secret. Usually populated by decrypting the secret from the SecureJson blob.',
        title: 'client_secret',
      }),
    resource: z
      .string()
      .exactOptional()
      .openapi({ description: 'OAuth resource', title: 'resource' }),
  })
  .catchall(z.any())
  .openapi({
    description: 'Parameters for the token authentication request.',
    example: {
      grant_type: 'grant_type',
      resource: 'resource',
      client_secret: 'client_secret',
      client_id: 'client_id',
    },
    title: 'params',
    required: [],
  })
  .openapi('Params')

const TokenAuthSchema = z
  .object({
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to fetch the authentication token.', title: 'url' }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The list of scopes that your application should be granted access to.',
        title: 'scopes',
      }),
    params: ParamsSchema.exactOptional(),
  })
  .openapi({
    description: 'For data source plugins. Token authentication section used with an OAuth API.',
    example: {
      scopes: ['scopes', 'scopes'],
      params: {
        grant_type: 'grant_type',
        resource: 'resource',
        client_secret: 'client_secret',
        client_id: 'client_id',
      },
      url: 'url',
    },
    title: 'tokenAuth',
    required: [],
  })
  .openapi('TokenAuth')

const Params_1Schema = z
  .object({
    token_uri: z.string().exactOptional().openapi({ title: 'token_uri' }),
    client_email: z.string().exactOptional().openapi({ title: 'client_email' }),
    private_key: z.string().exactOptional().openapi({ title: 'private_key' }),
  })
  .openapi({
    description: 'Parameters for the JWT token authentication request.',
    example: { token_uri: 'token_uri', client_email: 'client_email', private_key: 'private_key' },
    title: 'params',
    required: [],
  })
  .openapi('Params_1')

const JwtTokenAuthSchema = z
  .object({
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to fetch the JWT token.', title: 'url' }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The list of scopes that your application should be granted access to.',
        title: 'scopes',
      }),
    params: Params_1Schema.exactOptional(),
  })
  .catchall(z.any())
  .openapi({
    description:
      'For data source plugins. Token authentication section used with an JWT OAuth API.',
    example: {
      scopes: ['scopes', 'scopes'],
      params: { token_uri: 'token_uri', client_email: 'client_email', private_key: 'private_key' },
      url: 'url',
    },
    title: 'jwtTokenAuth',
    required: [],
  })
  .openapi('JwtTokenAuth')

const UrlParamsInnerSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the URL parameter', title: 'name' }),
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value of the URL parameter', title: 'content' }),
  })
  .openapi({ example: { name: 'name', content: 'content' }, required: [] })
  .openapi('UrlParamsInner')

const RoutesInnerSchema = z
  .object({
    path: z
      .string()
      .openapi({
        description:
          'For data source plugins. The route path that is replaced by the route URL field when proxying the call. **Warning**: Don\'t use an empty string ("").',
        title: 'path',
      }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For data source plugins. Route method matches the HTTP verb like `GET` or `POST`. Multiple methods can be provided as a comma-separated list.',
        title: 'method',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'For data source plugins. Route URL is where the request is proxied to.',
        title: 'url',
      }),
    reqSignedIn: z.boolean().exactOptional().openapi({ title: 'reqSignedIn' }),
    reqRole: z.string().exactOptional().openapi({ title: 'reqRole' }),
    reqAction: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The RBAC action a user must have to use this route. **Warning**: unless the action targets the plugin (or a nested datasource plugin), only the action is verified, not what it applies to.',
        title: 'reqAction',
      }),
    headers: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'For data source plugins. Route headers adds HTTP headers to the proxied request.',
        title: 'headers',
      }),
    body: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'For data source plugins. Route headers set the body content and length to the proxied request.',
        title: 'body',
      }),
    tokenAuth: TokenAuthSchema.exactOptional(),
    jwtTokenAuth: JwtTokenAuthSchema.exactOptional(),
    urlParams: z
      .array(UrlParamsInnerSchema)
      .exactOptional()
      .openapi({ description: 'Add URL parameters to a proxy route', title: 'urlParams' }),
  })
  .openapi({
    example: {
      reqAction: 'reqAction',
      path: 'path',
      headers: ['', ''],
      method: 'method',
      tokenAuth: {
        scopes: ['scopes', 'scopes'],
        params: {
          grant_type: 'grant_type',
          resource: 'resource',
          client_secret: 'client_secret',
          client_id: 'client_id',
        },
        url: 'url',
      },
      jwtTokenAuth: {
        scopes: ['scopes', 'scopes'],
        params: {
          token_uri: 'token_uri',
          client_email: 'client_email',
          private_key: 'private_key',
        },
        url: 'url',
      },
      urlParams: [
        { name: 'name', content: 'content' },
        { name: 'name', content: 'content' },
      ],
      reqSignedIn: true,
      reqRole: 'reqRole',
      body: { key: '' },
      url: 'url',
    },
    required: ['path'],
  })
  .openapi('RoutesInner')

const PermissionsInnerSchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({ description: 'Action, for example: `teams:read`.', title: 'action' }),
    scope: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The scope that the plugin needs to access e.g: `teams:*`.',
        title: 'scope',
      }),
  })
  .openapi({ example: { scope: 'scope', action: 'action' }, required: [] })
  .openapi('PermissionsInner')

const IamSchema = z
  .object({
    permissions: z
      .array(PermissionsInnerSchema)
      .exactOptional()
      .openapi({
        description:
          'Permissions are the permissions that the plugin needs its associated service account to have to query Grafana.',
        title: 'permissions',
      }),
  })
  .catchall(z.any())
  .openapi({
    description:
      "Grafana reads the Identity and Access Management section and initializes a service account for the plugin, with a tailored set of [Grafana RBAC permissions](https://grafana.com/docs/grafana/latest/administration/roles-and-permissions/access-control/custom-role-actions-scopes/#rbac-permissions-actions-and-scopes). Grafana will share the service account's bearer token with the plugin backend using the `GF_PLUGIN_APP_CLIENT_SECRET` environment variable. Requires Grafana version 10.3.0 or later. Currently, this is behind the `externalServiceAccounts` feature toggle. To try this feature out, follow this [guide](https://grafana.com/developers/plugin-tools/how-to-guides/app-plugins/implement-rbac-in-app-plugins).",
    example: {
      permissions: [
        { scope: 'scope', action: 'action' },
        { scope: 'scope', action: 'action' },
      ],
    },
    title: 'iam',
    required: [],
  })
  .openapi('Iam')

const PermissionsInner_1Schema = z
  .object({
    action: z.string().exactOptional().openapi({ title: 'action' }),
    scope: z.string().exactOptional().openapi({ title: 'scope' }),
  })
  .openapi({ example: { scope: 'scope', action: 'action' }, required: [] })
  .openapi('PermissionsInner_1')

const RoleSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name of the role.', title: 'name' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Describes the aim of the role.', title: 'description' }),
    permissions: z
      .array(PermissionsInner_1Schema)
      .exactOptional()
      .openapi({ description: 'RBAC permission on the plugin.', title: 'permissions' }),
  })
  .openapi({
    description:
      "A role groups your plugin's related RBAC permissions (ex: `Projects Admin` would group permissions to create, read, write and delete projects). The RBAC actions defined in your role must start with your plugin `id` (ex: `grafana-test-app.projects:read`).",
    example: {
      permissions: [
        { scope: 'scope', action: 'action' },
        { scope: 'scope', action: 'action' },
      ],
      name: 'name',
      description: 'description',
    },
    title: 'role',
    required: [],
  })
  .openapi('Role')

const RolesInnerSchema = z
  .object({
    role: RoleSchema.exactOptional(),
    grants: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Default assignments of the role to Grafana basic roles (`Viewer`, `Editor`, `Admin`, `Grafana Admin`).',
        title: 'grants',
      }),
  })
  .openapi({
    example: {
      grants: ['grants', 'grants'],
      role: {
        permissions: [
          { scope: 'scope', action: 'action' },
          { scope: 'scope', action: 'action' },
        ],
        name: 'name',
        description: 'description',
      },
    },
    required: [],
  })
  .openapi('RolesInner')

const AddedComponentsInnerSchema = z
  .object({
    targets: z
      .array(z.string())
      .openapi({
        description:
          'The extension point ids your plugin registers the extension to, e.g. `["grafana/user/profile/tab"]`',
        title: 'targets',
      }),
    title: z
      .string()
      .openapi({ description: 'The title of your component extension.', title: 'title' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Additional information about your component extension.',
        title: 'description',
      }),
  })
  .catchall(z.any())
  .openapi({
    example: { description: 'description', title: 'title', targets: ['targets', 'targets'] },
    required: ['targets', 'title'],
  })
  .openapi('AddedComponentsInner')

const AddedLinksInnerSchema = z
  .object({
    targets: z
      .array(z.string())
      .openapi({
        description:
          'The extension point ids your plugin registers the extension to, e.g. `["grafana/dashboard/panel/menu"]`',
        title: 'targets',
      }),
    title: z.string().openapi({ description: 'The title of your link extension.', title: 'title' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Additional information about your link extension.',
        title: 'description',
      }),
  })
  .catchall(z.any())
  .openapi({
    example: { description: 'description', title: 'title', targets: ['targets', 'targets'] },
    required: ['targets', 'title'],
  })
  .openapi('AddedLinksInner')

const AddedFunctionsInnerSchema = z
  .object({
    targets: z
      .array(z.string())
      .openapi({
        description:
          'The extension point ids your plugin registers the extension to, e.g. `["grafana/dashboard/panel/menu"]`',
        title: 'targets',
      }),
    title: z
      .string()
      .openapi({ description: 'The title of your function extension.', title: 'title' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Additional information about your function extension.',
        title: 'description',
      }),
  })
  .catchall(z.any())
  .openapi({
    example: { description: 'description', title: 'title', targets: ['targets', 'targets'] },
    required: ['targets', 'title'],
  })
  .openapi('AddedFunctionsInner')

const ExposedComponentsInnerSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'A unique identifier for your exposed component. This is used to reference the component in other plugins. It must be in the following format: `{PLUGIN_ID}/name-of-component/v1`. It is recommended to add a version suffix to prevent future breaking changes. E.g.: `myorg-extensions-app/exposed-component/v1`.',
        title: 'id',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of your exposed component.', title: 'title' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Additional information about your exposed component.',
        title: 'description',
      }),
  })
  .catchall(z.any())
  .openapi({ example: { description: 'description', id: 'id', title: 'title' }, required: ['id'] })
  .openapi('ExposedComponentsInner')

const ExtensionPointsInnerSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'A unique identifier for your extension point. This is used to reference the extension point in other plugins. It must be in the following format: `{PLUGIN_ID}/name-of-my-extension-point/v1`. It is recommended to add a version suffix to prevent future breaking changes. E.g.: `myorg-extensions-app/extension-point/v1`.',
        title: 'id',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of your extension point.', title: 'title' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Additional information about your extension point.',
        title: 'description',
      }),
  })
  .catchall(z.any())
  .openapi({ example: { description: 'description', id: 'id', title: 'title' }, required: ['id'] })
  .openapi('ExtensionPointsInner')

const Extensions_1Schema = z
  .object({
    addedComponents: z
      .array(AddedComponentsInnerSchema)
      .exactOptional()
      .openapi({
        description:
          "This list must contain all component extensions that your plugin registers to other extension points using [`.addComponent()`](https://grafana.com/developers/plugin-tools/reference/ui-extensions-reference/ui-extensions#addcomponent). **Components that are not listed here won't work.**",
        title: 'addedComponents',
      }),
    addedLinks: z
      .array(AddedLinksInnerSchema)
      .exactOptional()
      .openapi({
        description:
          "This list must contain all link extensions that your plugin registers to other extension points using [`.addLink()`](https://grafana.com/developers/plugin-tools/reference/ui-extensions-reference/ui-extensions#addlink). **Links that are not listed here won't work.**",
        title: 'addedLinks',
      }),
    addedFunctions: z
      .array(AddedFunctionsInnerSchema)
      .exactOptional()
      .openapi({
        description:
          "This list must contain all function extensions that your plugin registers to other extension points using [`.addedFunctions()`](https://grafana.com/developers/plugin-tools/reference/ui-extensions-reference/ui-extensions#addfunction). **Functions that are not listed here won't work.**",
        title: 'addedFunctions',
      }),
    exposedComponents: z
      .array(ExposedComponentsInnerSchema)
      .exactOptional()
      .openapi({
        description:
          "This list must contain all components that your plugin exposes using [`.exposeComponent()`](https://grafana.com/developers/plugin-tools/reference/ui-extensions-reference/ui-extensions#exposecomponent). **Components that are not listed here won't work.**",
        title: 'exposedComponents',
      }),
    extensionPoints: z
      .array(ExtensionPointsInnerSchema)
      .exactOptional()
      .openapi({
        description:
          "This list must contain all extension points that your plugin defines using [`usePluginLinks()`](https://grafana.com/developers/plugin-tools/reference/ui-extensions-reference/ui-extensions#usepluginlinks) or [`usePluginComponents()`](https://grafana.com/developers/plugin-tools/reference/ui-extensions-reference/ui-extensions#useplugincomponents). **Extension points that are not listed in here won't work.**",
        title: 'extensionPoints',
      }),
  })
  .catchall(z.any())
  .openapi({
    description:
      'Plugin extensions are a way to extend either the UI of core Grafana or other plugins.',
    example: {
      addedComponents: [
        { description: 'description', title: 'title', targets: ['targets', 'targets'] },
        { description: 'description', title: 'title', targets: ['targets', 'targets'] },
      ],
      addedFunctions: [
        { description: 'description', title: 'title', targets: ['targets', 'targets'] },
        { description: 'description', title: 'title', targets: ['targets', 'targets'] },
      ],
      extensionPoints: [
        { description: 'description', id: 'id', title: 'title' },
        { description: 'description', id: 'id', title: 'title' },
      ],
      addedLinks: [
        { description: 'description', title: 'title', targets: ['targets', 'targets'] },
        { description: 'description', title: 'title', targets: ['targets', 'targets'] },
      ],
      exposedComponents: [
        { description: 'description', id: 'id', title: 'title' },
        { description: 'description', id: 'id', title: 'title' },
      ],
    },
    title: 'extensions',
    required: [],
  })
  .openapi('Extensions_1')

const JsonSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'Unique name of the plugin. If the plugin is published on grafana.com, then the plugin `id` has to follow the naming conventions.',
        title: 'id',
      }),
    type: z
      .enum(['app', 'datasource', 'panel', 'renderer'])
      .openapi({ description: 'Plugin type.', title: 'type' }),
    info: InfoSchema,
    name: z
      .string()
      .openapi({
        description: 'Human-readable name of the plugin that is shown to the user in the UI.',
        title: 'name',
      }),
    dependencies: DependenciesSchema,
    $schema: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Schema definition for the plugin.json file. Used primarily for schema validation.',
        title: '$schema',
      }),
    alerting: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For data source plugins, if the plugin supports alerting. Requires `backend` to be set to `true`.',
        title: 'alerting',
      }),
    annotations: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'For data source plugins, if the plugin supports annotation queries.',
        title: 'annotations',
      }),
    autoEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set to true for app plugins that should be enabled and pinned to the navigation bar in all orgs.',
        title: 'autoEnabled',
      }),
    backend: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the plugin has a backend component.', title: 'backend' }),
    buildMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The build mode of the plugin. This field is set automatically at build time, so it should not be provided manually.',
        title: 'buildMode',
      }),
    builtIn: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "[internal only] Indicates whether the plugin is developed and shipped as part of Grafana. Also known as a 'core plugin'.",
        title: 'builtIn',
      }),
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Plugin category used on the Add new connection page. Can be one from the list: "tsdb", "logging", "cloud", "tracing", "profiling", "sql", "enterprise", "iot", "other", empty string or custom string',
        title: 'category',
      }),
    docsPath: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Path to the directory containing plugin documentation.',
        title: 'docsPath',
      }),
    enterpriseFeatures: EnterpriseFeaturesSchema.exactOptional(),
    executable: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The first part of the file name of the backend component executable. There can be multiple executables built for different operating system and architecture. Grafana will check for executables named `<executable>_<$GOOS>_<lower case $GOARCH><.exe for Windows>`, e.g. `plugin_linux_amd64`. Combination of $GOOS and $GOARCH can be found here: https://golang.org/doc/install/source#environment.',
        title: 'executable',
      }),
    hideFromList: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "[internal only] Excludes the plugin from listings in Grafana's UI. Only allowed for `builtIn` plugins.",
        title: 'hideFromList',
      }),
    includes: z
      .array(IncludesInnerSchema)
      .exactOptional()
      .openapi({ description: 'Resources to include in plugin.', title: 'includes' }),
    logs: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For data source plugins, if the plugin supports logs. It may be used to filter logs only features.',
        title: 'logs',
      }),
    metrics: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For data source plugins, if the plugin supports metric queries. Used to enable the plugin in the panel editor.',
        title: 'metrics',
      }),
    mixed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "[internal only] For data source plugins, marks the plugin as a 'mixed' data source — one whose queries each carry their own `datasource` reference and are delegated to other data sources. When `true`, Grafana preserves the per-query `datasource` field instead of overwriting it with the plugin's own ref. Used by the built-in `-- Mixed --` data source. Setting this on a regular data source plugin will break query routing.",
        title: 'mixed',
      }),
    multiValueFilterOperators: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For data source plugins, if the plugin supports multi value operators in filters.',
        title: 'multiValueFilterOperators',
      }),
    pascalName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[internal only] The PascalCase name for the plugin. Used for creating machine-friendly identifiers, typically in code generation. If not provided, defaults to name, but title-cased and sanitized (only alphabetical characters allowed).',
        title: 'pascalName',
      }),
    preload: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Initialize plugin on startup. By default, the plugin initializes on first use, but when preload is set to true the plugin loads when the Grafana web app loads the first time. Only applicable to app plugins. When setting to `true`, implement [frontend code splitting](https://grafana.com/developers/plugin-tools/get-started/best-practices#app-plugins) to minimise performance implications.',
        title: 'preload',
      }),
    suggestions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "For panel plugins. If set to true, the plugin's suggestions supplier will be invoked and any suggestions returned will be included in the Suggestions pane in the Panel Editor.",
        title: 'suggestions',
      }),
    queryOptions: QueryOptionsSchema.exactOptional(),
    routes: z
      .array(RoutesInnerSchema)
      .exactOptional()
      .openapi({
        description:
          'For data source plugins. Proxy routes used for plugin authentication and adding headers to HTTP requests made by the plugin. For more information, refer to [Authentication for data source plugins](https://grafana.com/developers/plugin-tools/how-to-guides/data-source-plugins/add-authentication-for-data-source-plugins).',
        title: 'routes',
      }),
    skipDataQuery: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'For panel plugins. Hides the query editor.',
        title: 'skipDataQuery',
      }),
    state: z
      .enum(['alpha', 'beta', 'deprecated', 'stable'])
      .exactOptional()
      .openapi({ description: 'Describes plugins life cycle status', title: 'state' }),
    streaming: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For data source plugins, if the plugin supports streaming. Used in Explore to start live streaming.',
        title: 'streaming',
      }),
    tracing: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For data source plugins, if the plugin supports tracing. Used for example to link logs (e.g. Loki logs) with tracing plugins.',
        title: 'tracing',
      }),
    iam: IamSchema.exactOptional(),
    roles: z
      .array(RolesInnerSchema)
      .exactOptional()
      .openapi({
        description:
          'List of RBAC roles defined by the plugin and their default assignments to basic roles (`Viewer`, `Editor`, `Admin`, `Grafana Admin`). Requires Grafana version 9.4.0 or later.',
        title: 'roles',
      }),
    extensions: Extensions_1Schema.exactOptional(),
    languages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of languages supported by the plugin. Each entry should be a locale identifier in the format `language-COUNTRY` (for example `en-US`, `es-ES`, `de-DE`).',
        title: 'languages',
      }),
  })
  .openapi({
    description:
      'The `plugin.json` file is required for all plugins. When Grafana starts, it scans the plugin folders and mounts every folder that contains a `plugin.json` file unless the folder contains a subfolder named `dist`. In that case, Grafana mounts the `dist` folder instead.',
    example: {
      $schema: '$schema',
      hideFromList: true,
      builtIn: true,
      enterpriseFeatures: { healthDiagnosticsErrors: true },
      roles: [
        {
          grants: ['grants', 'grants'],
          role: {
            permissions: [
              { scope: 'scope', action: 'action' },
              { scope: 'scope', action: 'action' },
            ],
            name: 'name',
            description: 'description',
          },
        },
        {
          grants: ['grants', 'grants'],
          role: {
            permissions: [
              { scope: 'scope', action: 'action' },
              { scope: 'scope', action: 'action' },
            ],
            name: 'name',
            description: 'description',
          },
        },
      ],
      annotations: true,
      buildMode: 'buildMode',
      mixed: true,
      pascalName: 'pascalName',
      type: 'app',
      preload: true,
      alerting: true,
      routes: [
        {
          reqAction: 'reqAction',
          path: 'path',
          headers: ['', ''],
          method: 'method',
          tokenAuth: {
            scopes: ['scopes', 'scopes'],
            params: {
              grant_type: 'grant_type',
              resource: 'resource',
              client_secret: 'client_secret',
              client_id: 'client_id',
            },
            url: 'url',
          },
          jwtTokenAuth: {
            scopes: ['scopes', 'scopes'],
            params: {
              token_uri: 'token_uri',
              client_email: 'client_email',
              private_key: 'private_key',
            },
            url: 'url',
          },
          urlParams: [
            { name: 'name', content: 'content' },
            { name: 'name', content: 'content' },
          ],
          reqSignedIn: true,
          reqRole: 'reqRole',
          body: { key: '' },
          url: 'url',
        },
        {
          reqAction: 'reqAction',
          path: 'path',
          headers: ['', ''],
          method: 'method',
          tokenAuth: {
            scopes: ['scopes', 'scopes'],
            params: {
              grant_type: 'grant_type',
              resource: 'resource',
              client_secret: 'client_secret',
              client_id: 'client_id',
            },
            url: 'url',
          },
          jwtTokenAuth: {
            scopes: ['scopes', 'scopes'],
            params: {
              token_uri: 'token_uri',
              client_email: 'client_email',
              private_key: 'private_key',
            },
            url: 'url',
          },
          urlParams: [
            { name: 'name', content: 'content' },
            { name: 'name', content: 'content' },
          ],
          reqSignedIn: true,
          reqRole: 'reqRole',
          body: { key: '' },
          url: 'url',
        },
      ],
      streaming: true,
      iam: {
        permissions: [
          { scope: 'scope', action: 'action' },
          { scope: 'scope', action: 'action' },
        ],
      },
      backend: true,
      id: 'id',
      state: 'alpha',
      logs: true,
      info: {
        keywords: ['keywords', 'keywords'],
        build: {
          number: 7.386281948385884,
          pr: 1.2315135367772556,
          build: 1.0246457001441578,
          repo: 'repo',
          time: 4.145608029883936,
          branch: 'branch',
          hash: 'hash',
        },
        author: { name: 'name', email: 'email', url: 'url' },
        description: 'description',
        links: [
          { name: 'name', url: 'url', target: '_blank' },
          { name: 'name', url: 'url', target: '_blank' },
        ],
        logos: { small: 'small', large: 'large' },
        updated: 'updated',
        version: 'version',
        screenshots: [
          { path: 'path', name: 'name' },
          { path: 'path', name: 'name' },
        ],
      },
      tracing: true,
      languages: ['languages', 'languages'],
      queryOptions: { maxDataPoints: true, cacheTimeout: true, minInterval: true },
      includes: [
        {
          uid: 'uid',
          path: 'path',
          defaultNav: true,
          component: 'component',
          role: 'Admin',
          name: 'name',
          icon: 'icon',
          action: 'action',
          type: 'dashboard',
          addToNav: true,
        },
        {
          uid: 'uid',
          path: 'path',
          defaultNav: true,
          component: 'component',
          role: 'Admin',
          name: 'name',
          icon: 'icon',
          action: 'action',
          type: 'dashboard',
          addToNav: true,
        },
      ],
      executable: 'executable',
      dependencies: {
        extensions: { exposedComponents: ['exposedComponents', 'exposedComponents'] },
        plugins: [
          { name: 'name', id: 'id', type: 'app' },
          { name: 'name', id: 'id', type: 'app' },
        ],
        grafanaVersion: 'grafanaVersion',
        grafanaDependency: 'grafanaDependency',
      },
      skipDataQuery: true,
      extensions: {
        addedComponents: [
          { description: 'description', title: 'title', targets: ['targets', 'targets'] },
          { description: 'description', title: 'title', targets: ['targets', 'targets'] },
        ],
        addedFunctions: [
          { description: 'description', title: 'title', targets: ['targets', 'targets'] },
          { description: 'description', title: 'title', targets: ['targets', 'targets'] },
        ],
        extensionPoints: [
          { description: 'description', id: 'id', title: 'title' },
          { description: 'description', id: 'id', title: 'title' },
        ],
        addedLinks: [
          { description: 'description', title: 'title', targets: ['targets', 'targets'] },
          { description: 'description', title: 'title', targets: ['targets', 'targets'] },
        ],
        exposedComponents: [
          { description: 'description', id: 'id', title: 'title' },
          { description: 'description', id: 'id', title: 'title' },
        ],
      },
      docsPath: 'docsPath',
      autoEnabled: true,
      multiValueFilterOperators: true,
      name: 'name',
      suggestions: true,
      metrics: true,
      category: 'category',
    },
    required: ['dependencies', 'id', 'info', 'name', 'type'],
    title: 'json',
  })
  .openapi('Json')

const ManagedSchema = z
  .object({
    enabled: z.boolean().openapi({ title: 'enabled' }),
    strategy: z.string().exactOptional().openapi({ title: 'strategy' }),
  })
  .openapi({
    example: { strategy: 'strategy', enabled: true },
    required: ['enabled'],
    title: 'managed',
  })
  .openapi('Managed')

const FormattedApiPluginSchema = z
  .object({
    status: z.string().openapi({ title: 'status' }),
    id: z.number().openapi({ title: 'id' }),
    typeId: z.number().openapi({ title: 'typeId' }),
    typeName: z.string().openapi({ title: 'typeName' }),
    typeCode: z.string().openapi({ title: 'typeCode' }),
    slug: z.string().openapi({ title: 'slug' }),
    name: z.string().openapi({ title: 'name' }),
    description: z.string().openapi({ title: 'description' }),
    version: z.string().openapi({ title: 'version' }),
    versionStatus: z.string().openapi({ title: 'versionStatus' }),
    versionSignatureType: z.string().openapi({ title: 'versionSignatureType' }),
    versionDistributionType: z.string().openapi({ title: 'versionDistributionType' }),
    versionSignedByOrg: z.string().openapi({ title: 'versionSignedByOrg' }),
    versionSignedByOrgName: z.string().openapi({ title: 'versionSignedByOrgName' }),
    userId: z.number().openapi({ title: 'userId' }),
    orgId: z.number().openapi({ title: 'orgId' }),
    orgName: z.string().openapi({ title: 'orgName' }),
    orgSlug: z.string().openapi({ title: 'orgSlug' }),
    orgUrl: z.string().openapi({ title: 'orgUrl' }),
    url: z.string().openapi({ title: 'url' }),
    createdAt: z.string().openapi({ title: 'createdAt' }),
    updatedAt: z.string().openapi({ title: 'updatedAt' }),
    releaseCountLastYear: z.number().exactOptional().openapi({ title: 'releaseCountLastYear' }),
    activeInstances: z.number().nullable().exactOptional().openapi({ title: 'activeInstances' }),
    downloads: z.number().openapi({ title: 'downloads' }),
    verified: z.boolean().openapi({ title: 'verified' }),
    featured: z.number().openapi({ title: 'featured' }),
    internal: z.boolean().openapi({ title: 'internal' }),
    downloadSlug: z.string().openapi({ title: 'downloadSlug' }),
    popularity: z.number().openapi({ title: 'popularity' }),
    datasourceQueryCount: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ title: 'datasourceQueryCount' }),
    signatureType: z.string().openapi({ title: 'signatureType' }),
    packages: z.looseObject({}).openapi({ title: 'packages' }),
    links: z.array(LinksInnerSchema).openapi({ title: 'links' }),
    angularDetected: z.boolean().openapi({ title: 'angularDetected' }),
    licenseUrl: z.string().exactOptional().openapi({ title: 'licenseUrl' }),
    documentationUrl: z.string().exactOptional().openapi({ title: 'documentationUrl' }),
    json: JsonSchema.exactOptional(),
    category: z.string().exactOptional().openapi({ title: 'category' }),
    managed: ManagedSchema.exactOptional(),
    hasDocumentation: z.boolean().exactOptional().openapi({ title: 'hasDocumentation' }),
    prices: z.looseObject({}).exactOptional().openapi({ title: 'prices' }),
  })
  .openapi({
    example: {
      orgSlug: 'orgSlug',
      licenseUrl: 'licenseUrl',
      documentationUrl: 'documentationUrl',
      featured: 9.301444243932576,
      internal: true,
      hasDocumentation: true,
      datasourceQueryCount: 2.027123023002322,
      typeName: 'typeName',
      description: 'description',
      versionSignedByOrgName: 'versionSignedByOrgName',
      downloadSlug: 'downloadSlug',
      orgUrl: 'orgUrl',
      versionStatus: 'versionStatus',
      orgId: 5.962133916683182,
      versionSignedByOrg: 'versionSignedByOrg',
      createdAt: 'createdAt',
      downloads: 7.061401241503109,
      managed: { strategy: 'strategy', enabled: true },
      popularity: 3.616076749251911,
      json: {
        $schema: '$schema',
        hideFromList: true,
        builtIn: true,
        enterpriseFeatures: { healthDiagnosticsErrors: true },
        roles: [
          {
            grants: ['grants', 'grants'],
            role: {
              permissions: [
                { scope: 'scope', action: 'action' },
                { scope: 'scope', action: 'action' },
              ],
              name: 'name',
              description: 'description',
            },
          },
          {
            grants: ['grants', 'grants'],
            role: {
              permissions: [
                { scope: 'scope', action: 'action' },
                { scope: 'scope', action: 'action' },
              ],
              name: 'name',
              description: 'description',
            },
          },
        ],
        annotations: true,
        buildMode: 'buildMode',
        mixed: true,
        pascalName: 'pascalName',
        type: 'app',
        preload: true,
        alerting: true,
        routes: [
          {
            reqAction: 'reqAction',
            path: 'path',
            headers: ['', ''],
            method: 'method',
            tokenAuth: {
              scopes: ['scopes', 'scopes'],
              params: {
                grant_type: 'grant_type',
                resource: 'resource',
                client_secret: 'client_secret',
                client_id: 'client_id',
              },
              url: 'url',
            },
            jwtTokenAuth: {
              scopes: ['scopes', 'scopes'],
              params: {
                token_uri: 'token_uri',
                client_email: 'client_email',
                private_key: 'private_key',
              },
              url: 'url',
            },
            urlParams: [
              { name: 'name', content: 'content' },
              { name: 'name', content: 'content' },
            ],
            reqSignedIn: true,
            reqRole: 'reqRole',
            body: { key: '' },
            url: 'url',
          },
          {
            reqAction: 'reqAction',
            path: 'path',
            headers: ['', ''],
            method: 'method',
            tokenAuth: {
              scopes: ['scopes', 'scopes'],
              params: {
                grant_type: 'grant_type',
                resource: 'resource',
                client_secret: 'client_secret',
                client_id: 'client_id',
              },
              url: 'url',
            },
            jwtTokenAuth: {
              scopes: ['scopes', 'scopes'],
              params: {
                token_uri: 'token_uri',
                client_email: 'client_email',
                private_key: 'private_key',
              },
              url: 'url',
            },
            urlParams: [
              { name: 'name', content: 'content' },
              { name: 'name', content: 'content' },
            ],
            reqSignedIn: true,
            reqRole: 'reqRole',
            body: { key: '' },
            url: 'url',
          },
        ],
        streaming: true,
        iam: {
          permissions: [
            { scope: 'scope', action: 'action' },
            { scope: 'scope', action: 'action' },
          ],
        },
        backend: true,
        id: 'id',
        state: 'alpha',
        logs: true,
        info: {
          keywords: ['keywords', 'keywords'],
          build: {
            number: 7.386281948385884,
            pr: 1.2315135367772556,
            build: 1.0246457001441578,
            repo: 'repo',
            time: 4.145608029883936,
            branch: 'branch',
            hash: 'hash',
          },
          author: { name: 'name', email: 'email', url: 'url' },
          description: 'description',
          links: [
            { name: 'name', url: 'url', target: '_blank' },
            { name: 'name', url: 'url', target: '_blank' },
          ],
          logos: { small: 'small', large: 'large' },
          updated: 'updated',
          version: 'version',
          screenshots: [
            { path: 'path', name: 'name' },
            { path: 'path', name: 'name' },
          ],
        },
        tracing: true,
        languages: ['languages', 'languages'],
        queryOptions: { maxDataPoints: true, cacheTimeout: true, minInterval: true },
        includes: [
          {
            uid: 'uid',
            path: 'path',
            defaultNav: true,
            component: 'component',
            role: 'Admin',
            name: 'name',
            icon: 'icon',
            action: 'action',
            type: 'dashboard',
            addToNav: true,
          },
          {
            uid: 'uid',
            path: 'path',
            defaultNav: true,
            component: 'component',
            role: 'Admin',
            name: 'name',
            icon: 'icon',
            action: 'action',
            type: 'dashboard',
            addToNav: true,
          },
        ],
        executable: 'executable',
        dependencies: {
          extensions: { exposedComponents: ['exposedComponents', 'exposedComponents'] },
          plugins: [
            { name: 'name', id: 'id', type: 'app' },
            { name: 'name', id: 'id', type: 'app' },
          ],
          grafanaVersion: 'grafanaVersion',
          grafanaDependency: 'grafanaDependency',
        },
        skipDataQuery: true,
        extensions: {
          addedComponents: [
            { description: 'description', title: 'title', targets: ['targets', 'targets'] },
            { description: 'description', title: 'title', targets: ['targets', 'targets'] },
          ],
          addedFunctions: [
            { description: 'description', title: 'title', targets: ['targets', 'targets'] },
            { description: 'description', title: 'title', targets: ['targets', 'targets'] },
          ],
          extensionPoints: [
            { description: 'description', id: 'id', title: 'title' },
            { description: 'description', id: 'id', title: 'title' },
          ],
          addedLinks: [
            { description: 'description', title: 'title', targets: ['targets', 'targets'] },
            { description: 'description', title: 'title', targets: ['targets', 'targets'] },
          ],
          exposedComponents: [
            { description: 'description', id: 'id', title: 'title' },
            { description: 'description', id: 'id', title: 'title' },
          ],
        },
        docsPath: 'docsPath',
        autoEnabled: true,
        multiValueFilterOperators: true,
        name: 'name',
        suggestions: true,
        metrics: true,
        category: 'category',
      },
      links: [
        { rel: 'rel', href: 'href' },
        { rel: 'rel', href: 'href' },
      ],
      id: 0.8008281904610115,
      prices: '{}',
      slug: 'slug',
      updatedAt: 'updatedAt',
      orgName: 'orgName',
      releaseCountLastYear: 5.637376656633329,
      versionDistributionType: 'versionDistributionType',
      verified: true,
      signatureType: 'signatureType',
      packages: '{}',
      version: 'version',
      userId: 1.4658129805029452,
      versionSignatureType: 'versionSignatureType',
      url: 'url',
      activeInstances: 2.3021358869347655,
      typeCode: 'typeCode',
      angularDetected: true,
      name: 'name',
      typeId: 6.027456183070403,
      category: 'category',
      status: 'status',
    },
    required: [
      'angularDetected',
      'createdAt',
      'description',
      'downloadSlug',
      'downloads',
      'featured',
      'id',
      'internal',
      'links',
      'name',
      'orgId',
      'orgName',
      'orgSlug',
      'orgUrl',
      'packages',
      'popularity',
      'signatureType',
      'slug',
      'status',
      'typeCode',
      'typeId',
      'typeName',
      'updatedAt',
      'url',
      'userId',
      'verified',
      'version',
      'versionDistributionType',
      'versionSignatureType',
      'versionSignedByOrg',
      'versionSignedByOrgName',
      'versionStatus',
    ],
  })
  .openapi('FormattedApiPlugin')

const FormattedApiStackRegionAnyOfSchema = z
  .object({
    id: z.number().openapi({ title: 'id' }),
    status: z.string().openapi({ title: 'status' }),
    visibility: z.string().openapi({ title: 'visibility' }),
    slug: z.string().openapi({ title: 'slug' }),
    name: z.string().openapi({ title: 'name' }),
    publicName: z.string().openapi({ title: 'publicName' }),
    description: z.string().openapi({ title: 'description' }),
    provider: z.enum(['aws', 'azure', 'fedramp-palantir', 'gcp']).openapi({ title: 'provider' }),
    createdAt: z.string().openapi({ title: 'createdAt' }),
    updatedAt: z.string().nullable().openapi({ title: 'updatedAt' }),
    sortOrder: z.number().openapi({ title: 'sortOrder' }),
  })
  .openapi({
    example: {
      createdAt: 'createdAt',
      visibility: 'visibility',
      publicName: 'publicName',
      provider: 'aws',
      sortOrder: 6.027456183070403,
      name: 'name',
      description: 'description',
      id: 0.8008281904610115,
      slug: 'slug',
      status: 'status',
      updatedAt: 'updatedAt',
    },
    required: [
      'createdAt',
      'description',
      'id',
      'name',
      'provider',
      'publicName',
      'slug',
      'sortOrder',
      'status',
      'updatedAt',
      'visibility',
    ],
  })
  .openapi('FormattedApiStackRegionAnyOf')

const PdcPrivateConnectivityInfoAnyOfSchema = z
  .object({
    privateDNS: z.string().openapi({ title: 'privateDNS' }),
    serviceName: z.string().openapi({ title: 'serviceName' }),
    regions: z.array(z.string()).exactOptional().openapi({ title: 'regions' }),
    endpointName: z.string().exactOptional().openapi({ title: 'endpointName' }),
    serviceId: z.string().exactOptional().openapi({ title: 'serviceId' }),
    availabilityZones: z.array(z.string()).exactOptional().openapi({ title: 'availabilityZones' }),
    availabilityZoneIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ title: 'availabilityZoneIds' }),
  })
  .nullable()
  .openapi({ required: ['privateDNS', 'serviceName'] })
  .openapi('PdcPrivateConnectivityInfoAnyOf')

const PdcPrivateConnectivityInfoAnyOf_1Schema = z
  .object({
    serviceAttachment: z.string().openapi({ title: 'serviceAttachment' }),
    domainNames: z.array(z.string()).openapi({ title: 'domainNames' }),
    endpointName: z.string().openapi({ title: 'endpointName' }),
  })
  .nullable()
  .openapi({ required: ['domainNames', 'endpointName', 'serviceAttachment'] })
  .openapi('PdcPrivateConnectivityInfoAnyOf_1')

const PdcPrivateConnectivityInfoAnyOf_2Schema = z
  .object({
    alias: z.string().openapi({ title: 'alias' }),
    endpointName: z.string().exactOptional().openapi({ title: 'endpointName' }),
  })
  .nullable()
  .openapi({ required: ['alias'] })
  .openapi('PdcPrivateConnectivityInfoAnyOf_2')

const ApiAnyOfSchema = z
  .object({
    privateDNS: z.string().openapi({ title: 'privateDNS' }),
    serviceName: z.string().openapi({ title: 'serviceName' }),
    regions: z.array(z.string()).exactOptional().openapi({ title: 'regions' }),
    endpointName: z.string().exactOptional().openapi({ title: 'endpointName' }),
    serviceId: z.string().exactOptional().openapi({ title: 'serviceId' }),
    availabilityZones: z.array(z.string()).exactOptional().openapi({ title: 'availabilityZones' }),
    availabilityZoneIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ title: 'availabilityZoneIds' }),
  })
  .openapi({ required: ['privateDNS', 'serviceName'] })
  .openapi('ApiAnyOf')

const ApiAnyOf_1Schema = z
  .object({
    serviceAttachment: z.string().openapi({ title: 'serviceAttachment' }),
    domainNames: z.array(z.string()).openapi({ title: 'domainNames' }),
    endpointName: z.string().openapi({ title: 'endpointName' }),
  })
  .openapi({ required: ['domainNames', 'endpointName', 'serviceAttachment'] })
  .openapi('ApiAnyOf_1')

const ApiAnyOf_2Schema = z
  .object({
    alias: z.string().openapi({ title: 'alias' }),
    endpointName: z.string().exactOptional().openapi({ title: 'endpointName' }),
  })
  .openapi({ required: ['alias'] })
  .openapi('ApiAnyOf_2')

const ApiSchema = z
  .union([ApiAnyOfSchema, ApiAnyOf_1Schema, ApiAnyOf_2Schema])
  .openapi({ title: 'api' })
  .openapi('Api')

const GatewaySchema = z
  .union([ApiAnyOfSchema, ApiAnyOf_1Schema, ApiAnyOf_2Schema])
  .openapi({ title: 'gateway' })
  .openapi('Gateway')

const PdcPrivateConnectivityInfoAnyOf_3Schema = z
  .object({ api: ApiSchema, gateway: GatewaySchema })
  .nullable()
  .openapi({ required: ['api', 'gateway'] })
  .openapi('PdcPrivateConnectivityInfoAnyOf_3')

const MimirSchema = z
  .union([ApiAnyOfSchema, ApiAnyOf_1Schema, ApiAnyOf_2Schema])
  .openapi({ title: 'mimir' })
  .openapi('Mimir')

const GraphiteSchema = z
  .union([ApiAnyOfSchema, ApiAnyOf_1Schema, ApiAnyOf_2Schema])
  .openapi({ title: 'graphite' })
  .openapi('Graphite')

const OtlpSchema = z
  .union([
    PdcPrivateConnectivityInfoAnyOfSchema,
    PdcPrivateConnectivityInfoAnyOf_1Schema,
    PdcPrivateConnectivityInfoAnyOf_2Schema,
  ])
  .openapi({ title: 'otlp' })
  .openapi('Otlp')

const PdcPrivateConnectivityInfoAnyOf_4Schema = z
  .object({
    mimir: MimirSchema,
    graphite: GraphiteSchema.exactOptional(),
    otlp: OtlpSchema.exactOptional(),
  })
  .nullable()
  .openapi({ required: ['mimir'] })
  .openapi('PdcPrivateConnectivityInfoAnyOf_4')

const PdcPrivateConnectivityInfoSchema = z
  .union([
    PdcPrivateConnectivityInfoAnyOfSchema,
    PdcPrivateConnectivityInfoAnyOf_1Schema,
    PdcPrivateConnectivityInfoAnyOf_2Schema,
    PdcPrivateConnectivityInfoAnyOf_3Schema,
    PdcPrivateConnectivityInfoAnyOf_4Schema,
  ])
  .openapi({ title: 'pdcPrivateConnectivityInfo' })
  .openapi('PdcPrivateConnectivityInfo')

const OtlpPrivateConnectivityInfoSchema = z
  .union([
    PdcPrivateConnectivityInfoAnyOfSchema,
    PdcPrivateConnectivityInfoAnyOf_1Schema,
    PdcPrivateConnectivityInfoAnyOf_2Schema,
    PdcPrivateConnectivityInfoAnyOf_3Schema,
    PdcPrivateConnectivityInfoAnyOf_4Schema,
  ])
  .openapi({ title: 'otlpPrivateConnectivityInfo' })
  .openapi('OtlpPrivateConnectivityInfo')

const FormattedApiStackRegionAnyOf_1Schema = z
  .object({
    stackStateServiceUrl: z.string().openapi({ title: 'stackStateServiceUrl' }),
    syntheticMonitoringApiUrl: z.string().openapi({ title: 'syntheticMonitoringApiUrl' }),
    insightsApiUrl: z.string().openapi({ title: 'insightsApiUrl' }),
    integrationsApiUrl: z.string().openapi({ title: 'integrationsApiUrl' }),
    hostedExportersApiUrl: z.string().openapi({ title: 'hostedExportersApiUrl' }),
    machineLearningApiUrl: z.string().openapi({ title: 'machineLearningApiUrl' }),
    llmGatewayUrl: z.string().openapi({ title: 'llmGatewayUrl' }),
    assistantUrl: z.string().openapi({ title: 'assistantUrl' }),
    sigilUrl: z.string().openapi({ title: 'sigilUrl' }),
    agentO11YUrl: z.string().openapi({ title: 'agentO11YUrl' }),
    workflowEngineUrl: z.string().openapi({ title: 'workflowEngineUrl' }),
    mobileGatewayUrl: z.string().openapi({ title: 'mobileGatewayUrl' }),
    slackServiceUrl: z.string().openapi({ title: 'slackServiceUrl' }),
    sensitiveDataUrl: z.string().openapi({ title: 'sensitiveDataUrl' }),
    incidentApiUrl: z.string().openapi({ title: 'incidentApiUrl' }),
    oncallApiUrl: z.string().openapi({ title: 'oncallApiUrl' }),
    faroEndpointUrl: z.string().openapi({ title: 'faroEndpointUrl' }),
    pdcClusterSlug: z.string().openapi({ title: 'pdcClusterSlug' }),
    pdcHostname: z.string().openapi({ title: 'pdcHostname' }),
    pdcPrivateConnectivityInfo: PdcPrivateConnectivityInfoSchema,
    otlpHttpUrl: z.string().nullable().openapi({ title: 'otlpHttpUrl' }),
    otlpPrivateConnectivityInfo: OtlpPrivateConnectivityInfoSchema,
    authApiUrl: z.string().openapi({ title: 'authApiUrl' }),
    authApiTokenSet: z.boolean().openapi({ title: 'authApiTokenSet' }),
    hgClusterId: z.number().openapi({ title: 'hgClusterId' }),
    hgClusterSlug: z.string().openapi({ title: 'hgClusterSlug' }),
    hgClusterName: z.string().openapi({ title: 'hgClusterName' }),
    hgClusterUrl: z.string().openapi({ title: 'hgClusterUrl' }),
    hmPromClusterId: z.number().openapi({ title: 'hmPromClusterId' }),
    hmPromClusterSlug: z.string().openapi({ title: 'hmPromClusterSlug' }),
    hmPromClusterName: z.string().openapi({ title: 'hmPromClusterName' }),
    hmPromClusterUrl: z.string().openapi({ title: 'hmPromClusterUrl' }),
    hmGraphiteClusterId: z.number().openapi({ title: 'hmGraphiteClusterId' }),
    hmGraphiteClusterSlug: z.string().openapi({ title: 'hmGraphiteClusterSlug' }),
    hmGraphiteClusterName: z.string().openapi({ title: 'hmGraphiteClusterName' }),
    hmGraphiteClusterUrl: z.string().openapi({ title: 'hmGraphiteClusterUrl' }),
    hlClusterId: z.number().openapi({ title: 'hlClusterId' }),
    hlClusterSlug: z.string().openapi({ title: 'hlClusterSlug' }),
    hlClusterName: z.string().openapi({ title: 'hlClusterName' }),
    hlClusterUrl: z.string().openapi({ title: 'hlClusterUrl' }),
    amClusterId: z.number().openapi({ title: 'amClusterId' }),
    amClusterSlug: z.string().openapi({ title: 'amClusterSlug' }),
    amClusterName: z.string().openapi({ title: 'amClusterName' }),
    amClusterUrl: z.string().openapi({ title: 'amClusterUrl' }),
    htClusterId: z.number().openapi({ title: 'htClusterId' }),
    htClusterSlug: z.string().openapi({ title: 'htClusterSlug' }),
    htClusterName: z.string().openapi({ title: 'htClusterName' }),
    htClusterUrl: z.string().openapi({ title: 'htClusterUrl' }),
    hpClusterId: z.number().openapi({ title: 'hpClusterId' }),
    hpClusterSlug: z.string().openapi({ title: 'hpClusterSlug' }),
    hpClusterName: z.string().openapi({ title: 'hpClusterName' }),
    hpClusterUrl: z.string().openapi({ title: 'hpClusterUrl' }),
    agmClusterId: z.number().openapi({ title: 'agmClusterId' }),
    agmClusterSlug: z.string().openapi({ title: 'agmClusterSlug' }),
    agmClusterName: z.string().openapi({ title: 'agmClusterName' }),
    agmClusterUrl: z.string().openapi({ title: 'agmClusterUrl' }),
    assertsGraphClusterId: z.number().openapi({ title: 'assertsGraphClusterId' }),
    assertsGraphClusterSlug: z.string().openapi({ title: 'assertsGraphClusterSlug' }),
    assertsGraphClusterName: z.string().openapi({ title: 'assertsGraphClusterName' }),
    assertsGraphClusterApiUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'assertsGraphClusterApiUrl' }),
    providerRegion: z.string().openapi({ title: 'providerRegion' }),
    isStub: z.boolean().openapi({ title: 'isStub' }),
    geoLocation: z.array(z.number()).exactOptional().openapi({ title: 'geoLocation' }),
    countryCode: z.string().exactOptional().openapi({ title: 'countryCode' }),
    complete: z.boolean().openapi({ title: 'complete' }),
    readyForStacks: z.boolean().openapi({ title: 'readyForStacks' }),
    labels: z.looseObject({}).exactOptional().openapi({ title: 'labels' }),
    id: z.number().openapi({ title: 'id' }),
    status: z.string().openapi({ title: 'status' }),
    visibility: z.string().openapi({ title: 'visibility' }),
    slug: z.string().openapi({ title: 'slug' }),
    name: z.string().openapi({ title: 'name' }),
    publicName: z.string().openapi({ title: 'publicName' }),
    description: z.string().openapi({ title: 'description' }),
    provider: z.enum(['aws', 'azure', 'fedramp-palantir', 'gcp']).openapi({ title: 'provider' }),
    createdAt: z.string().openapi({ title: 'createdAt' }),
    updatedAt: z.string().nullable().openapi({ title: 'updatedAt' }),
    sortOrder: z.number().openapi({ title: 'sortOrder' }),
  })
  .openapi({
    required: [
      'agentO11YUrl',
      'agmClusterId',
      'agmClusterName',
      'agmClusterSlug',
      'agmClusterUrl',
      'amClusterId',
      'amClusterName',
      'amClusterSlug',
      'amClusterUrl',
      'assertsGraphClusterId',
      'assertsGraphClusterName',
      'assertsGraphClusterSlug',
      'assistantUrl',
      'authApiTokenSet',
      'authApiUrl',
      'complete',
      'createdAt',
      'description',
      'faroEndpointUrl',
      'hgClusterId',
      'hgClusterName',
      'hgClusterSlug',
      'hgClusterUrl',
      'hlClusterId',
      'hlClusterName',
      'hlClusterSlug',
      'hlClusterUrl',
      'hmGraphiteClusterId',
      'hmGraphiteClusterName',
      'hmGraphiteClusterSlug',
      'hmGraphiteClusterUrl',
      'hmPromClusterId',
      'hmPromClusterName',
      'hmPromClusterSlug',
      'hmPromClusterUrl',
      'hostedExportersApiUrl',
      'hpClusterId',
      'hpClusterName',
      'hpClusterSlug',
      'hpClusterUrl',
      'htClusterId',
      'htClusterName',
      'htClusterSlug',
      'htClusterUrl',
      'id',
      'incidentApiUrl',
      'insightsApiUrl',
      'integrationsApiUrl',
      'isStub',
      'llmGatewayUrl',
      'machineLearningApiUrl',
      'mobileGatewayUrl',
      'name',
      'oncallApiUrl',
      'otlpHttpUrl',
      'otlpPrivateConnectivityInfo',
      'pdcClusterSlug',
      'pdcHostname',
      'pdcPrivateConnectivityInfo',
      'provider',
      'providerRegion',
      'publicName',
      'readyForStacks',
      'sensitiveDataUrl',
      'sigilUrl',
      'slackServiceUrl',
      'slug',
      'sortOrder',
      'stackStateServiceUrl',
      'status',
      'syntheticMonitoringApiUrl',
      'updatedAt',
      'visibility',
      'workflowEngineUrl',
    ],
  })
  .openapi('FormattedApiStackRegionAnyOf_1')

const FormattedApiStackRegionSchema = z
  .union([FormattedApiStackRegionAnyOfSchema, FormattedApiStackRegionAnyOf_1Schema])
  .openapi('FormattedApiStackRegion')

const FormattedOrgMembershipMarketplaceSubscriptionSchema = z
  .object({
    provider: z.enum(['aws', 'azure', 'gcp']).openapi({ title: 'provider' }),
    isLegacy: z.boolean().openapi({ title: 'isLegacy' }),
  })
  .nullable()
  .openapi({ example: { isLegacy: true, provider: 'aws' }, required: ['isLegacy', 'provider'] })
  .openapi('FormattedOrgMembershipMarketplaceSubscription')

const FormattedOrgMembershipGrafanaStaffAccessSchema = z
  .object({
    accessExpiresAt: z.iso.datetime({ offset: true }).openapi({ title: 'accessExpiresAt' }),
    ticketId: z.number().nullable().exactOptional().openapi({ title: 'ticketId' }),
    publicReason: z.string().nullable().exactOptional().openapi({ title: 'publicReason' }),
  })
  .nullable()
  .openapi({
    example: {
      publicReason: 'publicReason',
      accessExpiresAt: '2000-01-23T04:56:07.000+00:00',
      ticketId: 9.369310271410669,
    },
    required: ['accessExpiresAt'],
  })
  .openapi('FormattedOrgMembershipGrafanaStaffAccess')

const FormattedOrgMembershipSchema = z
  .object({
    id: z.int().openapi({ title: 'id' }),
    orgId: z.int().openapi({ title: 'orgId' }),
    userId: z.int().openapi({ title: 'userId' }),
    status: z.number().openapi({ title: 'status' }),
    createdAt: z.string().openapi({ title: 'createdAt' }),
    updatedAt: z.string().nullable().openapi({ title: 'updatedAt' }),
    defaultOrg: z.number().openapi({ title: 'defaultOrg' }),
    role: z.enum(['Admin', 'Editor', 'None', 'SSO Access', 'Viewer']).openapi({ title: 'role' }),
    privacy: z.number().openapi({ title: 'privacy' }),
    billing: z.number().openapi({ title: 'billing' }),
    security: z.number().openapi({ title: 'security' }),
    createdBy: z.string().openapi({ title: 'createdBy' }),
    updatedBy: z.string().openapi({ title: 'updatedBy' }),
    orgName: z.string().openapi({ title: 'orgName' }),
    orgSlug: z.string().openapi({ title: 'orgSlug' }),
    orgUrl: z.string().openapi({ title: 'orgUrl' }),
    grafanaCloud: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(11),
        z.literal(2),
        z.literal(31),
        z.literal(4),
        z.literal(41),
        z.literal(6),
        z.literal(9),
      ])
      .openapi({ title: 'grafanaCloud' }),
    resellerId: z.number().nullable().openapi({ title: 'resellerId' }),
    contractTypeId: z
      .union([z.literal(0), z.literal(1), z.literal(2)])
      .openapi({ title: 'contractTypeId' }),
    allowGCloudTrial: FormattedApiOrgPublicAllowGCloudTrialSchema,
    hlUsage: z.number().openapi({ title: 'hlUsage' }),
    hmCurrentGraphiteUsage: z.number().openapi({ title: 'hmCurrentGraphiteUsage' }),
    hmCurrentPrometheusUsage: z.number().openapi({ title: 'hmCurrentPrometheusUsage' }),
    hgDatasourceCnts: z.string().openapi({ title: 'hgDatasourceCnts' }),
    userFirstName: z.string().openapi({ title: 'userFirstName' }),
    userLastName: z.string().openapi({ title: 'userLastName' }),
    userUsername: z.string().openapi({ title: 'userUsername' }),
    userStatus: z
      .enum(['active', 'deleted', 'pending', 'unknown'])
      .exactOptional()
      .openapi({ title: 'userStatus' }),
    userEmail: z.string().openapi({ title: 'userEmail' }),
    userName: z.string().openapi({ title: 'userName' }),
    subscriptions: SubscriptionsSchema,
    marketplaceSubscription: FormattedOrgMembershipMarketplaceSubscriptionSchema,
    mfaEnabled: z.boolean().exactOptional().openapi({ title: 'mfaEnabled' }),
    extraPermissions: z
      .array(
        z.enum([
          'accesspolicies:write',
          'orgs:read',
          'support-ticket-comments:write',
          'support-tickets:read',
          'support-tickets:write',
        ]),
      )
      .exactOptional()
      .openapi({ title: 'extraPermissions' }),
    grafanaStaffAccess: FormattedOrgMembershipGrafanaStaffAccessSchema.exactOptional(),
  })
  .openapi({
    example: {
      grafanaCloud: 3.616076749251911,
      orgSlug: 'orgSlug',
      subscriptions: {
        next: '',
        current: {
          product: '',
          endDate: '',
          payload: '{}',
          publicName: '',
          planBillingCycle: '',
          enterprisePluginsAdded: true,
          isTrial: true,
          plan: '',
          startDate: '',
        },
      },
      role: 'Admin',
      userStatus: 'active',
      hmCurrentPrometheusUsage: 1.0246457001441578,
      privacy: 2.3021358869347655,
      grafanaStaffAccess: {
        publicReason: 'publicReason',
        accessExpiresAt: '2000-01-23T04:56:07.000+00:00',
        ticketId: 9.369310271410669,
      },
      hlUsage: 7.386281948385884,
      orgUrl: 'orgUrl',
      orgId: 6,
      billing: 7.061401241503109,
      defaultOrg: 5.637376656633329,
      createdAt: 'createdAt',
      security: 9.301444243932576,
      hgDatasourceCnts: 'hgDatasourceCnts',
      userLastName: 'userLastName',
      userEmail: 'userEmail',
      mfaEnabled: true,
      id: 0,
      extraPermissions: ['accesspolicies:write', 'accesspolicies:write'],
      updatedAt: 'updatedAt',
      userUsername: 'userUsername',
      updatedBy: 'updatedBy',
      orgName: 'orgName',
      userFirstName: 'userFirstName',
      userName: 'userName',
      userId: 1,
      contractTypeId: 4.145608029883936,
      resellerId: 2.027123023002322,
      hmCurrentGraphiteUsage: 1.2315135367772556,
      createdBy: 'createdBy',
      allowGCloudTrial: true,
      marketplaceSubscription: { isLegacy: true, provider: 'aws' },
      status: 5.962133916683182,
    },
    required: [
      'allowGCloudTrial',
      'billing',
      'contractTypeId',
      'createdAt',
      'createdBy',
      'defaultOrg',
      'grafanaCloud',
      'hgDatasourceCnts',
      'hlUsage',
      'hmCurrentGraphiteUsage',
      'hmCurrentPrometheusUsage',
      'id',
      'marketplaceSubscription',
      'orgId',
      'orgName',
      'orgSlug',
      'orgUrl',
      'privacy',
      'resellerId',
      'role',
      'security',
      'status',
      'subscriptions',
      'updatedAt',
      'updatedBy',
      'userEmail',
      'userFirstName',
      'userId',
      'userLastName',
      'userName',
      'userUsername',
    ],
  })
  .openapi('FormattedOrgMembership')

const GrafanaNewApiKeyResultSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    key: z
      .string()
      .exactOptional()
      .openapi({ example: 'glsa_yscW25imSKJIuav8zF37RZmnbiDvB05G_fcaaf58a' }),
    name: z.string().exactOptional().openapi({ example: 'grafana' }),
  })
  .openapi({
    example: { name: 'grafana', id: 1, key: 'glsa_yscW25imSKJIuav8zF37RZmnbiDvB05G_fcaaf58a' },
    required: [],
  })
  .openapi('GrafanaNewApiKeyResult')

const GrafanaServiceAccountDTOSchema = z
  .object({
    accessControl: z
      .record(z.string(), z.boolean())
      .exactOptional()
      .openapi({
        example: {
          'serviceaccounts:delete': true,
          'serviceaccounts:read': true,
          'serviceaccounts:write': true,
        },
      }),
    avatarUrl: z
      .string()
      .exactOptional()
      .openapi({ example: '/avatar/85ec38023d90823d3e5b43ef35646af9' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    isDisabled: z.boolean().exactOptional().openapi({ example: false }),
    isExternal: z.boolean().exactOptional().openapi({ example: false }),
    login: z.string().exactOptional().openapi({ example: 'sa-grafana' }),
    name: z.string().exactOptional().openapi({ example: 'grafana' }),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    role: z.string().exactOptional().openapi({ example: 'Viewer' }),
    tokens: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
  })
  .openapi({
    description: 'swagger: model',
    example: {
      accessControl: {
        'serviceaccounts:delete': true,
        'serviceaccounts:read': true,
        'serviceaccounts:write': true,
      },
      role: 'Viewer',
      isExternal: false,
      avatarUrl: '/avatar/85ec38023d90823d3e5b43ef35646af9',
      name: 'grafana',
      tokens: 0,
      id: 0,
      isDisabled: false,
      login: 'sa-grafana',
      orgId: 1,
    },
    required: [],
  })
  .openapi('GrafanaServiceAccountDTO')

const GrafanaTokenDTOSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-03-23T10:31:02Z' }),
    expiration: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-03-23T10:31:02Z' }),
    hasExpired: z.boolean().exactOptional().openapi({ example: false }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    isRevoked: z.boolean().exactOptional().openapi({ example: false }),
    lastUsedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2022-03-23T10:31:02Z' }),
    name: z.string().exactOptional().openapi({ example: 'grafana' }),
    secondsUntilExpiration: z.float64().exactOptional().openapi({ example: 0 }),
  })
  .openapi({
    example: {
      isRevoked: false,
      hasExpired: false,
      lastUsedAt: '2022-03-23T10:31:02Z',
      created: '2022-03-23T10:31:02Z',
      name: 'grafana',
      secondsUntilExpiration: 0,
      expiration: '2022-03-23T10:31:02Z',
      id: 1,
    },
    required: [],
  })
  .openapi('GrafanaTokenDTO')

const MarketplaceLicenseRenewalResponseSchema = z
  .object({ token: z.string().openapi({ title: 'token' }) })
  .openapi({ example: { token: 'token' }, required: ['token'] })
  .openapi('MarketplaceLicenseRenewalResponse')

const ItemsInnerSchema = z
  .object({
    month: z.number().openapi({ title: 'month' }),
    year: z.number().openapi({ title: 'year' }),
  })
  .openapi({
    example: { month: 0.8008281904610115, year: 6.027456183070403 },
    required: ['month', 'year'],
  })
  .openapi('ItemsInner')

const OrgBilledUsageHistorySchema = z
  .object({
    $schema: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL to the JSON Schema for this object.', title: '$schema' }),
    items: z.array(ItemsInnerSchema).openapi({ title: 'items' }),
  })
  .openapi({
    example: {
      $schema: '$schema',
      items: [
        { month: 0.8008281904610115, year: 6.027456183070403 },
        { month: 0.8008281904610115, year: 6.027456183070403 },
      ],
    },
    required: ['items'],
  })
  .openapi('OrgBilledUsageHistory')

const ItemsInner_1Schema = z
  .object({
    id: z.int().openapi({ title: 'id' }),
    orgId: z.int().openapi({ title: 'orgId' }),
    userId: z.int().openapi({ title: 'userId' }),
    status: z.number().openapi({ title: 'status' }),
    createdAt: z.string().openapi({ title: 'createdAt' }),
    updatedAt: z.string().nullable().openapi({ title: 'updatedAt' }),
    defaultOrg: z.number().openapi({ title: 'defaultOrg' }),
    role: z.enum(['Admin', 'Editor', 'None', 'SSO Access', 'Viewer']).openapi({ title: 'role' }),
    privacy: z.number().openapi({ title: 'privacy' }),
    billing: z.number().openapi({ title: 'billing' }),
    security: z.number().openapi({ title: 'security' }),
    createdBy: z.string().openapi({ title: 'createdBy' }),
    updatedBy: z.string().openapi({ title: 'updatedBy' }),
    orgName: z.string().openapi({ title: 'orgName' }),
    orgSlug: z.string().openapi({ title: 'orgSlug' }),
    orgUrl: z.string().openapi({ title: 'orgUrl' }),
    grafanaCloud: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(11),
        z.literal(2),
        z.literal(31),
        z.literal(4),
        z.literal(41),
        z.literal(6),
        z.literal(9),
      ])
      .openapi({ title: 'grafanaCloud' }),
    resellerId: z.number().nullable().openapi({ title: 'resellerId' }),
    contractTypeId: z
      .union([z.literal(0), z.literal(1), z.literal(2)])
      .openapi({ title: 'contractTypeId' }),
    allowGCloudTrial: z.boolean().openapi({ title: 'allowGCloudTrial' }),
    hlUsage: z.number().openapi({ title: 'hlUsage' }),
    hmCurrentGraphiteUsage: z.number().openapi({ title: 'hmCurrentGraphiteUsage' }),
    hmCurrentPrometheusUsage: z.number().openapi({ title: 'hmCurrentPrometheusUsage' }),
    hgDatasourceCnts: z.string().openapi({ title: 'hgDatasourceCnts' }),
    userFirstName: z.string().openapi({ title: 'userFirstName' }),
    userLastName: z.string().openapi({ title: 'userLastName' }),
    userUsername: z.string().openapi({ title: 'userUsername' }),
    userStatus: z
      .enum(['active', 'deleted', 'pending', 'unknown'])
      .exactOptional()
      .openapi({ title: 'userStatus' }),
    userEmail: z.string().openapi({ title: 'userEmail' }),
    userName: z.string().openapi({ title: 'userName' }),
    subscriptions: SubscriptionsSchema,
    marketplaceSubscription: FormattedOrgMembershipMarketplaceSubscriptionSchema,
    mfaEnabled: z.boolean().exactOptional().openapi({ title: 'mfaEnabled' }),
    extraPermissions: z
      .array(
        z.enum([
          'accesspolicies:write',
          'orgs:read',
          'support-ticket-comments:write',
          'support-tickets:read',
          'support-tickets:write',
        ]),
      )
      .exactOptional()
      .openapi({ title: 'extraPermissions' }),
    grafanaStaffAccess: FormattedOrgMembershipGrafanaStaffAccessSchema.exactOptional(),
  })
  .openapi({
    example: {
      grafanaCloud: 6.84685269835264,
      orgSlug: 'orgSlug',
      subscriptions: {
        next: '',
        current: {
          product: '',
          endDate: '',
          payload: '{}',
          publicName: '',
          planBillingCycle: '',
          enterprisePluginsAdded: true,
          isTrial: true,
          plan: '',
          startDate: '',
        },
      },
      role: 'Admin',
      userStatus: 'active',
      hmCurrentPrometheusUsage: 9.965781217890562,
      privacy: 1.2315135367772556,
      grafanaStaffAccess: {
        publicReason: 'publicReason',
        accessExpiresAt: '2000-01-23T04:56:07.000+00:00',
        ticketId: 9.369310271410669,
      },
      hlUsage: 4.965218492984954,
      orgUrl: 'orgUrl',
      orgId: 3,
      billing: 1.0246457001441578,
      defaultOrg: 7.386281948385884,
      createdAt: 'createdAt',
      security: 1.4894159098541704,
      hgDatasourceCnts: 'hgDatasourceCnts',
      userLastName: 'userLastName',
      userEmail: 'userEmail',
      mfaEnabled: true,
      id: 9,
      extraPermissions: ['accesspolicies:write', 'accesspolicies:write'],
      updatedAt: 'updatedAt',
      userUsername: 'userUsername',
      updatedBy: 'updatedBy',
      orgName: 'orgName',
      userFirstName: 'userFirstName',
      userName: 'userName',
      userId: 2,
      contractTypeId: 1.1730742509559433,
      resellerId: 7.457744773683766,
      hmCurrentGraphiteUsage: 5.025004791520295,
      createdBy: 'createdBy',
      allowGCloudTrial: true,
      marketplaceSubscription: { isLegacy: true, provider: 'aws' },
      status: 4.145608029883936,
    },
    required: [
      'allowGCloudTrial',
      'billing',
      'contractTypeId',
      'createdAt',
      'createdBy',
      'defaultOrg',
      'grafanaCloud',
      'hgDatasourceCnts',
      'hlUsage',
      'hmCurrentGraphiteUsage',
      'hmCurrentPrometheusUsage',
      'id',
      'marketplaceSubscription',
      'orgId',
      'orgName',
      'orgSlug',
      'orgUrl',
      'privacy',
      'resellerId',
      'role',
      'security',
      'status',
      'subscriptions',
      'updatedAt',
      'updatedBy',
      'userEmail',
      'userFirstName',
      'userId',
      'userLastName',
      'userName',
      'userUsername',
    ],
  })
  .openapi('ItemsInner_1')

const OrgMemberListResponseSchema = z
  .object({
    total: z.number().exactOptional().openapi({ title: 'total' }),
    pages: z.number().exactOptional().openapi({ title: 'pages' }),
    page: z.number().exactOptional().openapi({ title: 'page' }),
    perPage: z.number().exactOptional().openapi({ title: 'perPage' }),
    totalCount: z.number().exactOptional().openapi({ title: 'totalCount' }),
    orderBy: z.string().exactOptional().openapi({ title: 'orderBy' }),
    direction: z.string().exactOptional().openapi({ title: 'direction' }),
    cursor: z.number().exactOptional().openapi({ title: 'cursor' }),
    nextCursor: z.number().exactOptional().openapi({ title: 'nextCursor' }),
    items: z.array(ItemsInner_1Schema).openapi({ title: 'items' }),
    links: z.array(LinksInnerSchema).openapi({ title: 'links' }),
  })
  .openapi({
    example: {
      cursor: 2.3021358869347655,
      nextCursor: 7.061401241503109,
      total: 0.8008281904610115,
      pages: 6.027456183070403,
      perPage: 5.962133916683182,
      orderBy: 'orderBy',
      links: [
        { rel: 'rel', href: 'href' },
        { rel: 'rel', href: 'href' },
      ],
      page: 1.4658129805029452,
      totalCount: 5.637376656633329,
      items: [
        {
          grafanaCloud: 6.84685269835264,
          orgSlug: 'orgSlug',
          subscriptions: {
            next: '',
            current: {
              product: '',
              endDate: '',
              payload: '{}',
              publicName: '',
              planBillingCycle: '',
              enterprisePluginsAdded: true,
              isTrial: true,
              plan: '',
              startDate: '',
            },
          },
          role: 'Admin',
          userStatus: 'active',
          hmCurrentPrometheusUsage: 9.965781217890562,
          privacy: 1.2315135367772556,
          grafanaStaffAccess: {
            publicReason: 'publicReason',
            accessExpiresAt: '2000-01-23T04:56:07.000+00:00',
            ticketId: 9.369310271410669,
          },
          hlUsage: 4.965218492984954,
          orgUrl: 'orgUrl',
          orgId: 3,
          billing: 1.0246457001441578,
          defaultOrg: 7.386281948385884,
          createdAt: 'createdAt',
          security: 1.4894159098541704,
          hgDatasourceCnts: 'hgDatasourceCnts',
          userLastName: 'userLastName',
          userEmail: 'userEmail',
          mfaEnabled: true,
          id: 9,
          extraPermissions: ['accesspolicies:write', 'accesspolicies:write'],
          updatedAt: 'updatedAt',
          userUsername: 'userUsername',
          updatedBy: 'updatedBy',
          orgName: 'orgName',
          userFirstName: 'userFirstName',
          userName: 'userName',
          userId: 2,
          contractTypeId: 1.1730742509559433,
          resellerId: 7.457744773683766,
          hmCurrentGraphiteUsage: 5.025004791520295,
          createdBy: 'createdBy',
          allowGCloudTrial: true,
          marketplaceSubscription: { isLegacy: true, provider: 'aws' },
          status: 4.145608029883936,
        },
        {
          grafanaCloud: 6.84685269835264,
          orgSlug: 'orgSlug',
          subscriptions: {
            next: '',
            current: {
              product: '',
              endDate: '',
              payload: '{}',
              publicName: '',
              planBillingCycle: '',
              enterprisePluginsAdded: true,
              isTrial: true,
              plan: '',
              startDate: '',
            },
          },
          role: 'Admin',
          userStatus: 'active',
          hmCurrentPrometheusUsage: 9.965781217890562,
          privacy: 1.2315135367772556,
          grafanaStaffAccess: {
            publicReason: 'publicReason',
            accessExpiresAt: '2000-01-23T04:56:07.000+00:00',
            ticketId: 9.369310271410669,
          },
          hlUsage: 4.965218492984954,
          orgUrl: 'orgUrl',
          orgId: 3,
          billing: 1.0246457001441578,
          defaultOrg: 7.386281948385884,
          createdAt: 'createdAt',
          security: 1.4894159098541704,
          hgDatasourceCnts: 'hgDatasourceCnts',
          userLastName: 'userLastName',
          userEmail: 'userEmail',
          mfaEnabled: true,
          id: 9,
          extraPermissions: ['accesspolicies:write', 'accesspolicies:write'],
          updatedAt: 'updatedAt',
          userUsername: 'userUsername',
          updatedBy: 'updatedBy',
          orgName: 'orgName',
          userFirstName: 'userFirstName',
          userName: 'userName',
          userId: 2,
          contractTypeId: 1.1730742509559433,
          resellerId: 7.457744773683766,
          hmCurrentGraphiteUsage: 5.025004791520295,
          createdBy: 'createdBy',
          allowGCloudTrial: true,
          marketplaceSubscription: { isLegacy: true, provider: 'aws' },
          status: 4.145608029883936,
        },
      ],
      direction: 'direction',
    },
    required: ['items', 'links'],
  })
  .openapi('OrgMemberListResponse')

const ServiceAccountsInnerSchema = z
  .object({ id: z.int().openapi({ title: 'id' }), name: z.string().openapi({ title: 'name' }) })
  .openapi({ example: { name: 'name', id: 6 }, required: ['id', 'name'] })
  .openapi('ServiceAccountsInner')

const ServiceAccountSearchResponseSchema = z
  .object({
    totalCount: z.number().openapi({ title: 'totalCount' }),
    serviceAccounts: z.array(ServiceAccountsInnerSchema).openapi({ title: 'serviceAccounts' }),
    page: z.number().openapi({ title: 'page' }),
    perPage: z.number().openapi({ title: 'perPage' }),
  })
  .openapi({
    example: {
      serviceAccounts: [
        { name: 'name', id: 6 },
        { name: 'name', id: 6 },
      ],
      perPage: 5.962133916683182,
      page: 1.4658129805029452,
      totalCount: 0.8008281904610115,
    },
    required: ['page', 'perPage', 'serviceAccounts', 'totalCount'],
  })
  .openapi('ServiceAccountSearchResponse')

const StackRegionV1Schema = z
  .strictObject({
    description: z.string().nullable(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'id of the region' }),
    name: z.string(),
    provider: z.string(),
    publicName: z.string().nullable(),
    slug: z.string().openapi({ description: 'slug of the region' }),
    visibility: z.enum(['public', 'private', 'customer-restricted']),
  })
  .openapi({
    required: ['description', 'id', 'name', 'provider', 'publicName', 'slug', 'visibility'],
  })
  .openapi('StackRegionV1')

const APIListResponseStackRegionV1Schema = z
  .strictObject({ items: z.array(StackRegionV1Schema).nullable() })
  .openapi({ required: ['items'] })
  .openapi('APIListResponseStackRegionV1')

const BasicPrivateConnectivityInfoSchema = z
  .strictObject({
    alias: z.string().exactOptional(),
    availabilityZoneIds: z.array(z.string()).nullable().exactOptional(),
    availabilityZones: z.array(z.string()).nullable().exactOptional(),
    domainNames: z.array(z.string()).nullable().exactOptional(),
    endpointName: z.string().exactOptional(),
    privateDNS: z.string().exactOptional(),
    regions: z.array(z.string()).nullable().exactOptional(),
    serviceAttachment: z.string().exactOptional(),
    serviceName: z.string().exactOptional(),
  })
  .openapi({
    example: {
      availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
      regions: ['regions', 'regions'],
      serviceAttachment: 'serviceAttachment',
      alias: 'alias',
      endpointName: 'endpointName',
      availabilityZones: ['availabilityZones', 'availabilityZones'],
      domainNames: ['domainNames', 'domainNames'],
      privateDNS: 'privateDNS',
      serviceName: 'serviceName',
    },
    required: [],
  })
  .openapi('BasicPrivateConnectivityInfo')

const ErrorPayloadSchema = z
  .strictObject({
    code: z.string(),
    message: z.string(),
    requestId: z.string(),
    statusCode: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    example: { code: 'code', requestId: 'requestId', message: 'message', statusCode: 6 },
    required: ['code', 'message', 'requestId', 'statusCode'],
  })
  .openapi('ErrorPayload')

const StackConnectionAppPlatformV1Schema = z
  .strictObject({ caData: z.string().exactOptional(), url: z.string() })
  .openapi({ example: { url: 'url', caData: 'caData' }, required: ['url'] })
  .openapi('StackConnectionAppPlatformV1')

const StackConnectionPdcV1Schema = z
  .strictObject({
    api: BasicPrivateConnectivityInfoSchema,
    gateway: BasicPrivateConnectivityInfoSchema,
  })
  .openapi({
    example: {
      api: {
        availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
        regions: ['regions', 'regions'],
        serviceAttachment: 'serviceAttachment',
        alias: 'alias',
        endpointName: 'endpointName',
        availabilityZones: ['availabilityZones', 'availabilityZones'],
        domainNames: ['domainNames', 'domainNames'],
        privateDNS: 'privateDNS',
        serviceName: 'serviceName',
      },
      gateway: {
        availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
        regions: ['regions', 'regions'],
        serviceAttachment: 'serviceAttachment',
        alias: 'alias',
        endpointName: 'endpointName',
        availabilityZones: ['availabilityZones', 'availabilityZones'],
        domainNames: ['domainNames', 'domainNames'],
        privateDNS: 'privateDNS',
        serviceName: 'serviceName',
      },
    },
    required: ['api', 'gateway'],
  })
  .openapi('StackConnectionPdcV1')

const InstanceConnectionTenantSchema = z
  .strictObject({
    allowlistUrl: z.string().exactOptional().openapi({ description: 'Allowlist API endpoint' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'tenant id' }),
    info: BasicPrivateConnectivityInfoSchema.exactOptional(),
    ipAllowListCNAME: z.string().nullable().openapi({ description: 'IP allow list CNAME' }),
    type: z.string().openapi({ description: 'tenant type' }),
  })
  .openapi({
    example: {
      ipAllowListCNAME: 'ipAllowListCNAME',
      id: 0,
      type: 'type',
      allowlistUrl: 'allowlistUrl',
      info: {
        availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
        regions: ['regions', 'regions'],
        serviceAttachment: 'serviceAttachment',
        alias: 'alias',
        endpointName: 'endpointName',
        availabilityZones: ['availabilityZones', 'availabilityZones'],
        domainNames: ['domainNames', 'domainNames'],
        privateDNS: 'privateDNS',
        serviceName: 'serviceName',
      },
    },
    required: ['id', 'ipAllowListCNAME', 'type'],
  })
  .openapi('InstanceConnectionTenant')

const FormattedApiInstancePrivateConnectivityInfoSchema = z
  .strictObject({
    otlp: BasicPrivateConnectivityInfoSchema.exactOptional(),
    pdc: StackConnectionPdcV1Schema.exactOptional(),
    tenants: z.array(InstanceConnectionTenantSchema).nullable(),
  })
  .openapi({
    example: {
      tenants: [
        {
          ipAllowListCNAME: 'ipAllowListCNAME',
          id: 0,
          type: 'type',
          allowlistUrl: 'allowlistUrl',
          info: {
            availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
            regions: ['regions', 'regions'],
            serviceAttachment: 'serviceAttachment',
            alias: 'alias',
            endpointName: 'endpointName',
            availabilityZones: ['availabilityZones', 'availabilityZones'],
            domainNames: ['domainNames', 'domainNames'],
            privateDNS: 'privateDNS',
            serviceName: 'serviceName',
          },
        },
        {
          ipAllowListCNAME: 'ipAllowListCNAME',
          id: 0,
          type: 'type',
          allowlistUrl: 'allowlistUrl',
          info: {
            availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
            regions: ['regions', 'regions'],
            serviceAttachment: 'serviceAttachment',
            alias: 'alias',
            endpointName: 'endpointName',
            availabilityZones: ['availabilityZones', 'availabilityZones'],
            domainNames: ['domainNames', 'domainNames'],
            privateDNS: 'privateDNS',
            serviceName: 'serviceName',
          },
        },
      ],
      otlp: {
        availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
        regions: ['regions', 'regions'],
        serviceAttachment: 'serviceAttachment',
        alias: 'alias',
        endpointName: 'endpointName',
        availabilityZones: ['availabilityZones', 'availabilityZones'],
        domainNames: ['domainNames', 'domainNames'],
        privateDNS: 'privateDNS',
        serviceName: 'serviceName',
      },
      pdc: {
        api: {
          availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
          regions: ['regions', 'regions'],
          serviceAttachment: 'serviceAttachment',
          alias: 'alias',
          endpointName: 'endpointName',
          availabilityZones: ['availabilityZones', 'availabilityZones'],
          domainNames: ['domainNames', 'domainNames'],
          privateDNS: 'privateDNS',
          serviceName: 'serviceName',
        },
        gateway: {
          availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
          regions: ['regions', 'regions'],
          serviceAttachment: 'serviceAttachment',
          alias: 'alias',
          endpointName: 'endpointName',
          availabilityZones: ['availabilityZones', 'availabilityZones'],
          domainNames: ['domainNames', 'domainNames'],
          privateDNS: 'privateDNS',
          serviceName: 'serviceName',
        },
      },
    },
    required: ['tenants'],
  })
  .openapi('FormattedApiInstancePrivateConnectivityInfo')

const FormattedApiInstanceConnectionsSchema = z
  .strictObject({
    appPlatform: StackConnectionAppPlatformV1Schema.exactOptional(),
    influxUrl: z.string().exactOptional(),
    oncallApiUrl: z.string().exactOptional(),
    otlpHttpUrl: z.string().nullable(),
    otlpMultiAZ: z.boolean(),
    privateConnectivityInfo: FormattedApiInstancePrivateConnectivityInfoSchema,
    syntheticMonitoringApiUrl: z.string().exactOptional(),
  })
  .openapi({
    example: {
      otlpHttpUrl: 'otlpHttpUrl',
      influxUrl: 'influxUrl',
      oncallApiUrl: 'oncallApiUrl',
      appPlatform: { url: 'url', caData: 'caData' },
      syntheticMonitoringApiUrl: 'syntheticMonitoringApiUrl',
      otlpMultiAZ: true,
      privateConnectivityInfo: {
        tenants: [
          {
            ipAllowListCNAME: 'ipAllowListCNAME',
            id: 0,
            type: 'type',
            allowlistUrl: 'allowlistUrl',
            info: {
              availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
              regions: ['regions', 'regions'],
              serviceAttachment: 'serviceAttachment',
              alias: 'alias',
              endpointName: 'endpointName',
              availabilityZones: ['availabilityZones', 'availabilityZones'],
              domainNames: ['domainNames', 'domainNames'],
              privateDNS: 'privateDNS',
              serviceName: 'serviceName',
            },
          },
          {
            ipAllowListCNAME: 'ipAllowListCNAME',
            id: 0,
            type: 'type',
            allowlistUrl: 'allowlistUrl',
            info: {
              availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
              regions: ['regions', 'regions'],
              serviceAttachment: 'serviceAttachment',
              alias: 'alias',
              endpointName: 'endpointName',
              availabilityZones: ['availabilityZones', 'availabilityZones'],
              domainNames: ['domainNames', 'domainNames'],
              privateDNS: 'privateDNS',
              serviceName: 'serviceName',
            },
          },
        ],
        otlp: {
          availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
          regions: ['regions', 'regions'],
          serviceAttachment: 'serviceAttachment',
          alias: 'alias',
          endpointName: 'endpointName',
          availabilityZones: ['availabilityZones', 'availabilityZones'],
          domainNames: ['domainNames', 'domainNames'],
          privateDNS: 'privateDNS',
          serviceName: 'serviceName',
        },
        pdc: {
          api: {
            availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
            regions: ['regions', 'regions'],
            serviceAttachment: 'serviceAttachment',
            alias: 'alias',
            endpointName: 'endpointName',
            availabilityZones: ['availabilityZones', 'availabilityZones'],
            domainNames: ['domainNames', 'domainNames'],
            privateDNS: 'privateDNS',
            serviceName: 'serviceName',
          },
          gateway: {
            availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
            regions: ['regions', 'regions'],
            serviceAttachment: 'serviceAttachment',
            alias: 'alias',
            endpointName: 'endpointName',
            availabilityZones: ['availabilityZones', 'availabilityZones'],
            domainNames: ['domainNames', 'domainNames'],
            privateDNS: 'privateDNS',
            serviceName: 'serviceName',
          },
        },
      },
    },
    required: ['otlpHttpUrl', 'otlpMultiAZ', 'privateConnectivityInfo'],
  })
  .openapi('FormattedApiInstanceConnections')

const InstanceUserSchema = z
  .strictObject({
    createdAt: z.string().openapi({ description: 'when the user was created' }),
    email: z.string().openapi({ description: 'email of the user' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'id of the user' }),
    isServiceAccount: z.boolean().openapi({ description: 'whether the user is a service account' }),
    lastSeenAt: z
      .string()
      .nullable()
      .openapi({ description: 'when the user was last seen, null if never' }),
    login: z.string().openapi({ description: 'login/username of the user' }),
    name: z.string().openapi({ description: 'full name of the user' }),
    role: z.string().openapi({ description: 'role of the user on the instance' }),
    updatedAt: z.string().openapi({ description: 'when the user was last updated' }),
  })
  .openapi({
    example: {
      lastSeenAt: 'lastSeenAt',
      createdAt: 'createdAt',
      role: 'role',
      name: 'name',
      id: 0,
      login: 'login',
      email: 'email',
      isServiceAccount: true,
      updatedAt: 'updatedAt',
    },
    required: [
      'createdAt',
      'email',
      'id',
      'isServiceAccount',
      'lastSeenAt',
      'login',
      'name',
      'role',
      'updatedAt',
    ],
  })
  .openapi('InstanceUser')

const InstanceUsersResponseSchema = z
  .strictObject({
    items: z.array(InstanceUserSchema).nullable().openapi({ description: "the instance's users" }),
  })
  .openapi({
    example: {
      items: [
        {
          lastSeenAt: 'lastSeenAt',
          createdAt: 'createdAt',
          role: 'role',
          name: 'name',
          id: 0,
          login: 'login',
          email: 'email',
          isServiceAccount: true,
          updatedAt: 'updatedAt',
        },
        {
          lastSeenAt: 'lastSeenAt',
          createdAt: 'createdAt',
          role: 'role',
          name: 'name',
          id: 0,
          login: 'login',
          email: 'email',
          isServiceAccount: true,
          updatedAt: 'updatedAt',
        },
      ],
    },
    required: ['items'],
  })
  .openapi('InstanceUsersResponse')

const StackV1Schema = z
  .strictObject({
    deleteProtection: z
      .boolean()
      .openapi({ description: 'protection active or not for the stack' }),
    description: z.string().nullable().openapi({ description: 'description of the stack' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'id of the stack' }),
    labels: z.record(z.string(), z.string()).openapi({ description: 'labels to add to the stack' }),
    name: z.string().openapi({ description: 'of the stack' }),
    orgId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'id of the org' }),
    orgSlug: z.string().openapi({ description: 'org owning the stack' }),
    region: z.string().openapi({ description: 'region of the stack' }),
    slug: z.string().openapi({ description: 'slug of the stack' }),
    url: z.string().openapi({ description: 'url for the stack' }),
  })
  .openapi({
    example: {
      orgSlug: 'orgSlug',
      deleteProtection: true,
      name: 'name',
      description: 'description',
      id: 0,
      region: 'region',
      orgId: 6,
      slug: 'slug',
      url: 'url',
      labels: { key: 'labels' },
    },
    required: [
      'deleteProtection',
      'description',
      'id',
      'labels',
      'name',
      'orgId',
      'orgSlug',
      'region',
      'slug',
      'url',
    ],
  })
  .openapi('StackV1')

const PaginatedResponseStackV1Schema = z
  .strictObject({
    items: z
      .array(StackV1Schema)
      .nullable()
      .openapi({ description: 'items requested for the current page' }),
    page: z
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
        description: 'index of the current page (starting on 1)',
      }),
    pageSize: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'applied page size' }),
    pages: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'number of pages' }),
    total: z
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
        description: 'total of amount of items matching the request',
      }),
  })
  .openapi({
    example: {
      total: 2,
      pages: 5,
      pageSize: 5,
      page: 1,
      items: [
        {
          orgSlug: 'orgSlug',
          deleteProtection: true,
          name: 'name',
          description: 'description',
          id: 0,
          region: 'region',
          orgId: 6,
          slug: 'slug',
          url: 'url',
          labels: { key: 'labels' },
        },
        {
          orgSlug: 'orgSlug',
          deleteProtection: true,
          name: 'name',
          description: 'description',
          id: 0,
          region: 'region',
          orgId: 6,
          slug: 'slug',
          url: 'url',
          labels: { key: 'labels' },
        },
      ],
    },
    required: ['items', 'page', 'pageSize', 'pages', 'total'],
  })
  .openapi('PaginatedResponseStackV1')

const StackCheckReadinessV1Schema = z
  .strictObject({
    ready: z
      .boolean()
      .openapi({ description: 'true if the stack can be used already, false otherwise' }),
  })
  .openapi({ example: { ready: true }, required: ['ready'] })
  .openapi('StackCheckReadinessV1')

const StackCheckRequestV1Schema = z
  .strictObject({
    org: z.string().exactOptional().openapi({ description: 'org owning the stack' }),
    url: z.string().openapi({ description: 'url for the stack' }),
  })
  .openapi({ example: { org: 'org', url: 'url' }, required: ['url'] })
  .openapi('StackCheckRequestV1')

const StackCheckV1Schema = z
  .strictObject({
    slug: z.string().openapi({ description: 'slug of the stack' }),
    url: z.string().openapi({ description: 'url for the stack' }),
  })
  .openapi({ example: { slug: 'slug', url: 'url' }, required: ['slug', 'url'] })
  .openapi('StackCheckV1')

const StackConnectionOtlpV1Schema = z
  .strictObject({
    multiAZ: z.boolean().openapi({ description: 'whether OTLP is multi-AZ' }),
    privateConnectivityInfo: BasicPrivateConnectivityInfoSchema.exactOptional(),
    url: z.string().exactOptional().openapi({ description: 'OTLP HTTP endpoint URL' }),
  })
  .openapi({
    example: {
      multiAZ: true,
      privateConnectivityInfo: {
        availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
        regions: ['regions', 'regions'],
        serviceAttachment: 'serviceAttachment',
        alias: 'alias',
        endpointName: 'endpointName',
        availabilityZones: ['availabilityZones', 'availabilityZones'],
        domainNames: ['domainNames', 'domainNames'],
        privateDNS: 'privateDNS',
        serviceName: 'serviceName',
      },
      url: 'url',
    },
    required: ['multiAZ'],
  })
  .openapi('StackConnectionOtlpV1')

const StackConnectionServicesV1Schema = z
  .strictObject({
    influxUrl: z.string().exactOptional(),
    oncallApiUrl: z.string().exactOptional(),
    syntheticMonitoringApiUrl: z.string().exactOptional(),
  })
  .openapi({
    example: {
      influxUrl: 'influxUrl',
      oncallApiUrl: 'oncallApiUrl',
      syntheticMonitoringApiUrl: 'syntheticMonitoringApiUrl',
    },
    required: [],
  })
  .openapi('StackConnectionServicesV1')

const StackConnectionTenantV1Schema = z
  .strictObject({
    allowlistUrl: z.string().exactOptional().openapi({ description: 'Allowlist API endpoint' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'tenant id' }),
    privateConnectivityInfo: BasicPrivateConnectivityInfoSchema.exactOptional(),
    type: z.string().openapi({ description: 'tenant type' }),
    url: z.string().exactOptional().openapi({ description: 'URL for the tenant' }),
  })
  .openapi({
    example: {
      id: 0,
      privateConnectivityInfo: {
        availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
        regions: ['regions', 'regions'],
        serviceAttachment: 'serviceAttachment',
        alias: 'alias',
        endpointName: 'endpointName',
        availabilityZones: ['availabilityZones', 'availabilityZones'],
        domainNames: ['domainNames', 'domainNames'],
        privateDNS: 'privateDNS',
        serviceName: 'serviceName',
      },
      type: 'type',
      url: 'url',
      allowlistUrl: 'allowlistUrl',
    },
    required: ['id', 'type'],
  })
  .openapi('StackConnectionTenantV1')

const StackConnectionsV1Schema = z
  .strictObject({
    appPlatform: StackConnectionAppPlatformV1Schema.exactOptional(),
    otlp: StackConnectionOtlpV1Schema.exactOptional(),
    pdc: StackConnectionPdcV1Schema.exactOptional(),
    services: StackConnectionServicesV1Schema.exactOptional(),
    tenants: z.array(StackConnectionTenantV1Schema).nullable(),
  })
  .openapi({
    example: {
      tenants: [
        {
          id: 0,
          privateConnectivityInfo: {
            availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
            regions: ['regions', 'regions'],
            serviceAttachment: 'serviceAttachment',
            alias: 'alias',
            endpointName: 'endpointName',
            availabilityZones: ['availabilityZones', 'availabilityZones'],
            domainNames: ['domainNames', 'domainNames'],
            privateDNS: 'privateDNS',
            serviceName: 'serviceName',
          },
          type: 'type',
          url: 'url',
          allowlistUrl: 'allowlistUrl',
        },
        {
          id: 0,
          privateConnectivityInfo: {
            availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
            regions: ['regions', 'regions'],
            serviceAttachment: 'serviceAttachment',
            alias: 'alias',
            endpointName: 'endpointName',
            availabilityZones: ['availabilityZones', 'availabilityZones'],
            domainNames: ['domainNames', 'domainNames'],
            privateDNS: 'privateDNS',
            serviceName: 'serviceName',
          },
          type: 'type',
          url: 'url',
          allowlistUrl: 'allowlistUrl',
        },
      ],
      appPlatform: { url: 'url', caData: 'caData' },
      services: {
        influxUrl: 'influxUrl',
        oncallApiUrl: 'oncallApiUrl',
        syntheticMonitoringApiUrl: 'syntheticMonitoringApiUrl',
      },
      otlp: {
        multiAZ: true,
        privateConnectivityInfo: {
          availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
          regions: ['regions', 'regions'],
          serviceAttachment: 'serviceAttachment',
          alias: 'alias',
          endpointName: 'endpointName',
          availabilityZones: ['availabilityZones', 'availabilityZones'],
          domainNames: ['domainNames', 'domainNames'],
          privateDNS: 'privateDNS',
          serviceName: 'serviceName',
        },
        url: 'url',
      },
      pdc: {
        api: {
          availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
          regions: ['regions', 'regions'],
          serviceAttachment: 'serviceAttachment',
          alias: 'alias',
          endpointName: 'endpointName',
          availabilityZones: ['availabilityZones', 'availabilityZones'],
          domainNames: ['domainNames', 'domainNames'],
          privateDNS: 'privateDNS',
          serviceName: 'serviceName',
        },
        gateway: {
          availabilityZoneIds: ['availabilityZoneIds', 'availabilityZoneIds'],
          regions: ['regions', 'regions'],
          serviceAttachment: 'serviceAttachment',
          alias: 'alias',
          endpointName: 'endpointName',
          availabilityZones: ['availabilityZones', 'availabilityZones'],
          domainNames: ['domainNames', 'domainNames'],
          privateDNS: 'privateDNS',
          serviceName: 'serviceName',
        },
      },
    },
    required: ['tenants'],
  })
  .openapi('StackConnectionsV1')

const StackCreateRequestV1Schema = z
  .strictObject({
    deleteProtection: z
      .boolean()
      .nullable()
      .default(true)
      .exactOptional()
      .openapi({ description: 'protection active or not for the stack' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'description of the stack' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'labels to add to the stack' }),
    name: z.string().openapi({ description: 'of the stack' }),
    org: z.string().openapi({ description: 'org owning the stack' }),
    plugins: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'plugins to install to the stack' }),
    region: z.string().openapi({ description: 'region of the stack' }),
    slug: z.string().openapi({ description: 'slug of the stack' }),
    stackType: z
      .string()
      .default('cloud')
      .exactOptional()
      .openapi({ description: 'type of the stack' }),
    url: z.string().nullable().exactOptional().openapi({ description: 'url for the stack' }),
  })
  .openapi({
    example: {
      org: 'org',
      plugins: ['plugins', 'plugins'],
      deleteProtection: true,
      name: 'name',
      description: 'description',
      region: 'region',
      stackType: 'cloud',
      slug: 'slug',
      url: 'url',
      labels: { key: 'labels' },
    },
    required: ['name', 'org', 'region', 'slug'],
  })
  .openapi('StackCreateRequestV1')

const StackUpdateRequestV1Schema = z
  .strictObject({
    deleteProtection: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'protection active or not for the stack' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'description of the stack' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'labels to add to the stack' }),
    name: z.string().nullable().exactOptional().openapi({ description: 'of the stack' }),
    slug: z.string().nullable().exactOptional().openapi({ description: 'slug of the stack' }),
    url: z.string().nullable().exactOptional().openapi({ description: 'url for the stack' }),
  })
  .openapi({
    example: {
      deleteProtection: true,
      name: 'name',
      description: 'description',
      slug: 'slug',
      url: 'url',
      labels: { key: 'labels' },
    },
    required: [],
  })
  .openapi('StackUpdateRequestV1')

const FormattedApiApiKeyIdSchema = z.union([z.string(), z.number()]).openapi('FormattedApiApiKeyId')

const FormattedApiApiKeySchema = z
  .object({ id: FormattedApiApiKeyIdSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('FormattedApiApiKey')

const FormattedApiApiKeyListResponseItemsInnerSchema = z
  .object({ id: FormattedApiApiKeyIdSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('FormattedApiApiKeyListResponseItemsInner')

const FormattedApiApiKeyListResponseSchema = z
  .object({ items: z.array(FormattedApiApiKeyListResponseItemsInnerSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('FormattedApiApiKeyListResponse')

const GetInstances_200ResponseSchema = z
  .object({
    items: z.array(FormattedApiInstanceSchema).openapi({ title: 'items' }),
    orderBy: z.string().openapi({ title: 'orderBy' }),
    direction: z.enum(['asc', 'desc']).openapi({ title: 'direction' }),
    total: z.number().openapi({ title: 'total' }),
    pages: z.number().openapi({ title: 'pages' }),
    pageSize: z.number().openapi({ title: 'pageSize' }),
    page: z.number().openapi({ title: 'page' }),
  })
  .openapi({
    example: {
      total: 4.078845849666752,
      pages: 0.2025324113236393,
      orderBy: 'orderBy',
      pageSize: 6.628464275087742,
      page: 4.258773108174356,
      items: [
        {
          hmInstancePromName: 'hmInstancePromName',
          hmInstanceGraphiteType: 'hmInstanceGraphiteType',
          regionMachineLearningApiUrl: 'regionMachineLearningApiUrl',
          regionSigilUrl: 'regionSigilUrl',
          versionIssueLink: 'versionIssueLink',
          deleteProtection: true,
          customAuth: true,
          planName: 'planName',
          hmInstanceGraphiteStatus: 'active',
          type: 'grafana',
          currentActiveEditorUsers: 2.027123023002322,
          ssl: true,
          userQuota: 3.0576100241049344,
          id: 6,
          stackType: 'stackType',
          plan: 'advanced',
          hlInstanceBillingUsage: 5.025004791520295,
          agentManagementInstanceStatus: 'active',
          htInstanceClusterId: 5,
          alertCnt: 0.8008281904610115,
          datasourceCnts: '{}',
          hmInstanceGraphiteBillingUsage: 8.762042012749001,
          version: 'version',
          billingStartDate: 'billingStartDate',
          hmInstancePromClusterId: 6,
          hlInstanceStatus: 'active',
          labels: '{}',
          orgCreatedAt: 'orgCreatedAt',
          amInstanceStatus: 'active',
          clusterSlug: 'clusterSlug',
          htInstanceUrl: 'htInstanceUrl',
          regionIntegrationsApiUrl: 'regionIntegrationsApiUrl',
          hmInstancePromId: 2,
          status: 'active',
          htInstanceCurrentUsage: 6.704019297950036,
          orgId: 8,
          hmInstanceGraphiteId: 9,
          clusterName: 'clusterName',
          k6OrgId: 3,
          currentActiveUsers: 4.145608029883936,
          hpInstanceUrl: 'hpInstanceUrl',
          dailyAdminCnt: 1.2315135367772556,
          url: 'url',
          billingOnCallActiveUsers: 7.061401241503109,
          hmInstancePromUrl: 'hmInstancePromUrl',
          machineLearningLogsToken: 'machineLearningLogsToken',
          regionSyntheticMonitoringApiUrl: 'regionSyntheticMonitoringApiUrl',
          regionStackStateServiceUrl: 'regionStackStateServiceUrl',
          hmInstanceGraphiteClusterId: 6,
          hpInstanceId: 3,
          config: '{}',
          usageStatsId: 'usageStatsId',
          orgSlug: 'orgSlug',
          amInstanceGeneratorUrlDatasource: 'amInstanceGeneratorUrlDatasource',
          regionLLMGatewayUrl: 'regionLLMGatewayUrl',
          hmInstanceGraphiteCurrentUsage: 6.683562403749608,
          hlInstanceCurrentUsage: 4.965218492984954,
          dailyViewerCnt: 6.84685269835264,
          statusUpdatedAt: 'statusUpdatedAt',
          hlInstanceId: 9,
          agentManagementInstanceUrl: 'agentManagementInstanceUrl',
          agentManagementInstanceName: 'agentManagementInstanceName',
          regionAssistantUrl: 'regionAssistantUrl',
          trial: 3.0205796992916243,
          createdAt: 'createdAt',
          hmInstancePromCurrentActiveSeries: 3.5571952270680973,
          runningVersion: 'runningVersion',
          amInstanceId: 1,
          links: [
            { rel: 'rel', href: 'href' },
            { rel: 'rel', href: 'href' },
          ],
          amInstanceGeneratorUrl: 'amInstanceGeneratorUrl',
          hpInstanceStatus: 'active',
          slug: 'slug',
          updatedAt: 'updatedAt',
          htInstanceBillingUsage: 3.353193347011243,
          agentManagementInstanceId: 7,
          orgName: 'orgName',
          updatedBy: 'updatedBy',
          htInstanceName: 'htInstanceName',
          trialExpiresAt: 'trialExpiresAt',
          amInstanceUrl: 'amInstanceUrl',
          billingActiveUsers: 5.637376656633329,
          billingGrafanaActiveUsers: 2.3021358869347655,
          hmInstancePromStatus: 'active',
          regionInsightsApiUrl: 'regionInsightsApiUrl',
          regionHostedExportersApiUrl: 'regionHostedExportersApiUrl',
          customDomain: true,
          dailyUserCnt: 1.4894159098541704,
          amInstanceName: 'amInstanceName',
          dashboardQuota: 1.1730742509559433,
          regionPublicName: 'regionPublicName',
          billingEndDate: 'billingEndDate',
          name: 'name',
          hlInstanceUrl: 'hlInstanceUrl',
          hlInstanceClusterId: 9,
          support: true,
          hpInstanceBillingUsage: 7.058770351582356,
          description: 'description',
          clusterId: 9,
          dailyEditorCnt: 1.0246457001441578,
          alertQuota: 6.027456183070403,
          machineLearning: 4.652396432933246,
          currentActiveViewerUsers: 7.386281948385884,
          hlInstanceName: 'hlInstanceName',
          hmInstanceGraphiteName: 'hmInstanceGraphiteName',
          hpInstanceName: 'hpInstanceName',
          provider: 'provider',
          hmInstancePromBillingUsage: 1.284659006116532,
          currentActiveAdminUsers: 3.616076749251911,
          regionAgentO11YUrl: 'regionAgentO11YUrl',
          htInstanceId: 6,
          regionSlug: 'regionSlug',
          dashboardCnt: 7.457744773683766,
          htInstanceStatus: 'active',
          agentManagementInstanceClusterId: 5,
          hmInstanceGraphiteUrl: 'hmInstanceGraphiteUrl',
          hpInstanceCurrentUsage: 0.8851374739011653,
          providerRegion: 'providerRegion',
          createdBy: 'createdBy',
          regionId: 7,
          hpInstanceClusterId: 7,
          amInstanceClusterId: 5,
          hmInstancePromCurrentUsage: 6.965117697638846,
          incident: 0.10263654006109402,
          gateway: 'gateway',
        },
        {
          hmInstancePromName: 'hmInstancePromName',
          hmInstanceGraphiteType: 'hmInstanceGraphiteType',
          regionMachineLearningApiUrl: 'regionMachineLearningApiUrl',
          regionSigilUrl: 'regionSigilUrl',
          versionIssueLink: 'versionIssueLink',
          deleteProtection: true,
          customAuth: true,
          planName: 'planName',
          hmInstanceGraphiteStatus: 'active',
          type: 'grafana',
          currentActiveEditorUsers: 2.027123023002322,
          ssl: true,
          userQuota: 3.0576100241049344,
          id: 6,
          stackType: 'stackType',
          plan: 'advanced',
          hlInstanceBillingUsage: 5.025004791520295,
          agentManagementInstanceStatus: 'active',
          htInstanceClusterId: 5,
          alertCnt: 0.8008281904610115,
          datasourceCnts: '{}',
          hmInstanceGraphiteBillingUsage: 8.762042012749001,
          version: 'version',
          billingStartDate: 'billingStartDate',
          hmInstancePromClusterId: 6,
          hlInstanceStatus: 'active',
          labels: '{}',
          orgCreatedAt: 'orgCreatedAt',
          amInstanceStatus: 'active',
          clusterSlug: 'clusterSlug',
          htInstanceUrl: 'htInstanceUrl',
          regionIntegrationsApiUrl: 'regionIntegrationsApiUrl',
          hmInstancePromId: 2,
          status: 'active',
          htInstanceCurrentUsage: 6.704019297950036,
          orgId: 8,
          hmInstanceGraphiteId: 9,
          clusterName: 'clusterName',
          k6OrgId: 3,
          currentActiveUsers: 4.145608029883936,
          hpInstanceUrl: 'hpInstanceUrl',
          dailyAdminCnt: 1.2315135367772556,
          url: 'url',
          billingOnCallActiveUsers: 7.061401241503109,
          hmInstancePromUrl: 'hmInstancePromUrl',
          machineLearningLogsToken: 'machineLearningLogsToken',
          regionSyntheticMonitoringApiUrl: 'regionSyntheticMonitoringApiUrl',
          regionStackStateServiceUrl: 'regionStackStateServiceUrl',
          hmInstanceGraphiteClusterId: 6,
          hpInstanceId: 3,
          config: '{}',
          usageStatsId: 'usageStatsId',
          orgSlug: 'orgSlug',
          amInstanceGeneratorUrlDatasource: 'amInstanceGeneratorUrlDatasource',
          regionLLMGatewayUrl: 'regionLLMGatewayUrl',
          hmInstanceGraphiteCurrentUsage: 6.683562403749608,
          hlInstanceCurrentUsage: 4.965218492984954,
          dailyViewerCnt: 6.84685269835264,
          statusUpdatedAt: 'statusUpdatedAt',
          hlInstanceId: 9,
          agentManagementInstanceUrl: 'agentManagementInstanceUrl',
          agentManagementInstanceName: 'agentManagementInstanceName',
          regionAssistantUrl: 'regionAssistantUrl',
          trial: 3.0205796992916243,
          createdAt: 'createdAt',
          hmInstancePromCurrentActiveSeries: 3.5571952270680973,
          runningVersion: 'runningVersion',
          amInstanceId: 1,
          links: [
            { rel: 'rel', href: 'href' },
            { rel: 'rel', href: 'href' },
          ],
          amInstanceGeneratorUrl: 'amInstanceGeneratorUrl',
          hpInstanceStatus: 'active',
          slug: 'slug',
          updatedAt: 'updatedAt',
          htInstanceBillingUsage: 3.353193347011243,
          agentManagementInstanceId: 7,
          orgName: 'orgName',
          updatedBy: 'updatedBy',
          htInstanceName: 'htInstanceName',
          trialExpiresAt: 'trialExpiresAt',
          amInstanceUrl: 'amInstanceUrl',
          billingActiveUsers: 5.637376656633329,
          billingGrafanaActiveUsers: 2.3021358869347655,
          hmInstancePromStatus: 'active',
          regionInsightsApiUrl: 'regionInsightsApiUrl',
          regionHostedExportersApiUrl: 'regionHostedExportersApiUrl',
          customDomain: true,
          dailyUserCnt: 1.4894159098541704,
          amInstanceName: 'amInstanceName',
          dashboardQuota: 1.1730742509559433,
          regionPublicName: 'regionPublicName',
          billingEndDate: 'billingEndDate',
          name: 'name',
          hlInstanceUrl: 'hlInstanceUrl',
          hlInstanceClusterId: 9,
          support: true,
          hpInstanceBillingUsage: 7.058770351582356,
          description: 'description',
          clusterId: 9,
          dailyEditorCnt: 1.0246457001441578,
          alertQuota: 6.027456183070403,
          machineLearning: 4.652396432933246,
          currentActiveViewerUsers: 7.386281948385884,
          hlInstanceName: 'hlInstanceName',
          hmInstanceGraphiteName: 'hmInstanceGraphiteName',
          hpInstanceName: 'hpInstanceName',
          provider: 'provider',
          hmInstancePromBillingUsage: 1.284659006116532,
          currentActiveAdminUsers: 3.616076749251911,
          regionAgentO11YUrl: 'regionAgentO11YUrl',
          htInstanceId: 6,
          regionSlug: 'regionSlug',
          dashboardCnt: 7.457744773683766,
          htInstanceStatus: 'active',
          agentManagementInstanceClusterId: 5,
          hmInstanceGraphiteUrl: 'hmInstanceGraphiteUrl',
          hpInstanceCurrentUsage: 0.8851374739011653,
          providerRegion: 'providerRegion',
          createdBy: 'createdBy',
          regionId: 7,
          hpInstanceClusterId: 7,
          amInstanceClusterId: 5,
          hmInstancePromCurrentUsage: 6.965117697638846,
          incident: 0.10263654006109402,
          gateway: 'gateway',
        },
      ],
      direction: 'asc',
    },
    required: ['direction', 'items', 'orderBy', 'page', 'pageSize', 'pages', 'total'],
  })
  .openapi('GetInstances_200Response')

const PostInstancesRequestSchema = z
  .object({
    adminUserInstance: z.boolean().exactOptional(),
    alerts: z.boolean().exactOptional(),
    cluster: z.string().exactOptional(),
    deleteProtection: z.boolean().default(false).exactOptional(),
    description: z.string().exactOptional(),
    graphite: z.boolean().exactOptional(),
    hlInstanceId: z.int().exactOptional(),
    hosted: z.boolean().exactOptional(),
    issueLink: z.string().exactOptional(),
    k6OrgId: z.int().exactOptional(),
    labels: z.record(z.string(), z.string()).exactOptional(),
    logs: z.boolean().exactOptional(),
    name: z.string(),
    org: z.string().exactOptional(),
    plan: z
      .enum([
        'free',
        'free-trial',
        'gcloud',
        'enterprise',
        'advanced',
        'payg',
        'fedramp',
        'trial',
        'logsdemo',
        'starter',
        'starter-prom',
        'basic',
        'basic-prom',
        'bundled',
        'fog',
      ])
      .exactOptional(),
    plugins: z.array(z.string()).exactOptional(),
    prometheus: z.boolean().exactOptional(),
    publicInstance: z.boolean().exactOptional(),
    reasonType: z
      .enum([
        'bug',
        'securityVulnerability',
        'customerUpgradeShy',
        'customerBreaksUseCase',
        'customerRequest',
        'other',
      ])
      .exactOptional(),
    region: z.string().exactOptional(),
    slug: z.string().exactOptional(),
    stackType: z.string().default('cloud').exactOptional(),
    url: z.string().exactOptional(),
    usernameOrEmail: z.string().exactOptional(),
    version: z.string().exactOptional(),
    waitForReadiness: z.boolean().default(true).exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('PostInstancesRequest')

const PostInstanceRequestSchema = z
  .object({
    alerts: z.boolean().exactOptional(),
    deleteProtection: z.boolean().exactOptional(),
    description: z.string().exactOptional(),
    graphite: z.boolean().exactOptional(),
    hlInstanceId: z.int().exactOptional(),
    issueLink: z.string().exactOptional(),
    k6OrgId: z.int().nullable().exactOptional(),
    labels: z.record(z.string(), z.string()).exactOptional(),
    logs: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    plan: z
      .enum([
        'free',
        'free-trial',
        'gcloud',
        'enterprise',
        'advanced',
        'payg',
        'fedramp',
        'trial',
        'logsdemo',
        'starter',
        'starter-prom',
        'basic',
        'basic-prom',
        'bundled',
        'fog',
      ])
      .exactOptional(),
    prometheus: z.boolean().exactOptional(),
    reasonType: z
      .enum([
        'bug',
        'securityVulnerability',
        'customerUpgradeShy',
        'customerBreaksUseCase',
        'customerRequest',
        'other',
      ])
      .exactOptional(),
    slug: z.string().exactOptional(),
    url: z.string().exactOptional(),
    version: z.string().exactOptional(),
    waitForReadiness: z.boolean().default(true).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PostInstanceRequest')

const PostInstanceServiceAccountsRequestSchema = z
  .object({ isDisabled: z.boolean().exactOptional(), name: z.string(), role: z.string() })
  .openapi({ required: ['name', 'role'] })
  .openapi('PostInstanceServiceAccountsRequest')

const PostInstanceServiceAccountTokensRequestSchema = z
  .object({ name: z.string(), secondsToLive: z.int().exactOptional() })
  .openapi({ required: ['name'] })
  .openapi('PostInstanceServiceAccountTokensRequest')

const GetInstancePlugins_200ResponseSchema = z
  .object({
    items: z.array(FormattedApiInstancePluginSchema).openapi({ title: 'items' }),
    orderBy: z.string().openapi({ title: 'orderBy' }),
    direction: z.enum(['asc', 'desc']).openapi({ title: 'direction' }),
    total: z.number().openapi({ title: 'total' }),
    pages: z.number().openapi({ title: 'pages' }),
    pageSize: z.number().openapi({ title: 'pageSize' }),
    page: z.number().openapi({ title: 'page' }),
  })
  .openapi({
    example: {
      total: 5.962133916683182,
      pages: 5.637376656633329,
      orderBy: 'orderBy',
      pageSize: 2.3021358869347655,
      page: 7.061401241503109,
      items: [
        {
          createdAt: 'createdAt',
          instanceId: 6.027456183070403,
          pluginSlug: 'pluginSlug',
          pluginName: 'pluginName',
          latestVersion: 'latestVersion',
          pluginId: 1.4658129805029452,
          instanceSlug: 'instanceSlug',
          links: [
            { rel: 'self', href: 'href' },
            { rel: 'self', href: 'href' },
          ],
          id: 0.8008281904610115,
          version: 'version',
          instanceUrl: 'instanceUrl',
          updatedAt: '2000-01-23T04:56:07.000+00:00',
        },
        {
          createdAt: 'createdAt',
          instanceId: 6.027456183070403,
          pluginSlug: 'pluginSlug',
          pluginName: 'pluginName',
          latestVersion: 'latestVersion',
          pluginId: 1.4658129805029452,
          instanceSlug: 'instanceSlug',
          links: [
            { rel: 'self', href: 'href' },
            { rel: 'self', href: 'href' },
          ],
          id: 0.8008281904610115,
          version: 'version',
          instanceUrl: 'instanceUrl',
          updatedAt: '2000-01-23T04:56:07.000+00:00',
        },
      ],
      direction: 'asc',
    },
    required: ['direction', 'items', 'orderBy', 'page', 'pageSize', 'pages', 'total'],
  })
  .openapi('GetInstancePlugins_200Response')

const PostInstancePluginsRequestSchema = z
  .object({
    noRestart: z.boolean().exactOptional(),
    plugin: z.string(),
    version: z.string().exactOptional(),
  })
  .openapi({ required: ['plugin'] })
  .openapi('PostInstancePluginsRequest')

const PostInstancePluginRequestSchema = z
  .object({ noRestart: z.boolean().exactOptional(), version: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('PostInstancePluginRequest')

const GetOrgStackRegions_200ResponseSchema = z
  .object({
    items: z.array(FormattedApiOrgStackRegionSchema).openapi({ title: 'items' }),
    orderBy: z.string().openapi({ title: 'orderBy' }),
    direction: z.enum(['asc', 'desc']).openapi({ title: 'direction' }),
    total: z.number().openapi({ title: 'total' }),
    pages: z.number().openapi({ title: 'pages' }),
    pageSize: z.number().openapi({ title: 'pageSize' }),
    page: z.number().openapi({ title: 'page' }),
  })
  .openapi({
    example: {
      total: 5.962133916683182,
      pages: 5.637376656633329,
      orderBy: 'orderBy',
      pageSize: 2.3021358869347655,
      page: 7.061401241503109,
      items: [
        {
          createdAt: 'createdAt',
          id: 0.8008281904610115,
          orgId: 1.4658129805029452,
          stackRegionId: 6.027456183070403,
          updatedAt: 'updatedAt',
        },
        {
          createdAt: 'createdAt',
          id: 0.8008281904610115,
          orgId: 1.4658129805029452,
          stackRegionId: 6.027456183070403,
          updatedAt: 'updatedAt',
        },
      ],
      direction: 'asc',
    },
    required: ['direction', 'items', 'orderBy', 'page', 'pageSize', 'pages', 'total'],
  })
  .openapi('GetOrgStackRegions_200Response')

const GetOrgBilledUsage_200ResponseSchema = z
  .object({
    items: z.array(BilledUsageSchema).openapi({ title: 'items' }),
    orderBy: z.string().openapi({ title: 'orderBy' }),
    direction: z.enum(['asc', 'desc']).openapi({ title: 'direction' }),
    total: z.number().openapi({ title: 'total' }),
    pages: z.number().openapi({ title: 'pages' }),
    pageSize: z.number().openapi({ title: 'pageSize' }),
    page: z.number().openapi({ title: 'page' }),
  })
  .openapi({
    example: {
      total: 6.683562403749608,
      pages: 8.762042012749001,
      orderBy: 'orderBy',
      pageSize: 9.018348186070783,
      page: 6.438423552598547,
      items: [
        {
          notes: 'notes',
          description: 'description',
          dimensionName: 'dimensionName',
          amountDue: 1.4658129805029452,
          orgRates: '',
          unit: 'unit',
          dimensionId: 'agent-generations',
          totalUsage: 5.637376656633329,
          id: 0.8008281904610115,
          usages: [
            {
              dpm: 1.2315135367772556,
              ingestUsage: 7.457744773683766,
              onCallUsage: 1.1730742509559433,
              stackId: 9.965781217890562,
              stackName: 'stackName',
              activeUsers: 7.061401241503109,
              protocolUsage: 4.965218492984954,
              anonymousUsers: 9.301444243932576,
              attributedUsage: 2.027123023002322,
              grafanaUsage: 1.0246457001441578,
              browserUsage: 4.145608029883936,
              stackLabels: '{}',
              attributedCost: 3.616076749251911,
              credits: [
                {
                  amount: 7.386281948385884,
                  dimensionId: 'dimensionId',
                  dimensionName: 'dimensionName',
                },
                {
                  amount: 7.386281948385884,
                  dimensionId: 'dimensionId',
                  dimensionName: 'dimensionName',
                },
              ],
              queryUsage: 5.025004791520295,
              incidentUsage: 6.84685269835264,
              totalUsage: 9.369310271410669,
              id: 1.4894159098541704,
              activeSeries: 2.3021358869347655,
              periodStart: 'periodStart',
              isProrated: true,
              periodEnd: 'periodEnd',
            },
            {
              dpm: 1.2315135367772556,
              ingestUsage: 7.457744773683766,
              onCallUsage: 1.1730742509559433,
              stackId: 9.965781217890562,
              stackName: 'stackName',
              activeUsers: 7.061401241503109,
              protocolUsage: 4.965218492984954,
              anonymousUsers: 9.301444243932576,
              attributedUsage: 2.027123023002322,
              grafanaUsage: 1.0246457001441578,
              browserUsage: 4.145608029883936,
              stackLabels: '{}',
              attributedCost: 3.616076749251911,
              credits: [
                {
                  amount: 7.386281948385884,
                  dimensionId: 'dimensionId',
                  dimensionName: 'dimensionName',
                },
                {
                  amount: 7.386281948385884,
                  dimensionId: 'dimensionId',
                  dimensionName: 'dimensionName',
                },
              ],
              queryUsage: 5.025004791520295,
              incidentUsage: 6.84685269835264,
              totalUsage: 9.369310271410669,
              id: 1.4894159098541704,
              activeSeries: 2.3021358869347655,
              periodStart: 'periodStart',
              isProrated: true,
              periodEnd: 'periodEnd',
            },
          ],
          includedUsage: 5.962133916683182,
          periodStart: 'periodStart',
          overage: 6.027456183070403,
          periodEnd: 'periodEnd',
        },
        {
          notes: 'notes',
          description: 'description',
          dimensionName: 'dimensionName',
          amountDue: 1.4658129805029452,
          orgRates: '',
          unit: 'unit',
          dimensionId: 'agent-generations',
          totalUsage: 5.637376656633329,
          id: 0.8008281904610115,
          usages: [
            {
              dpm: 1.2315135367772556,
              ingestUsage: 7.457744773683766,
              onCallUsage: 1.1730742509559433,
              stackId: 9.965781217890562,
              stackName: 'stackName',
              activeUsers: 7.061401241503109,
              protocolUsage: 4.965218492984954,
              anonymousUsers: 9.301444243932576,
              attributedUsage: 2.027123023002322,
              grafanaUsage: 1.0246457001441578,
              browserUsage: 4.145608029883936,
              stackLabels: '{}',
              attributedCost: 3.616076749251911,
              credits: [
                {
                  amount: 7.386281948385884,
                  dimensionId: 'dimensionId',
                  dimensionName: 'dimensionName',
                },
                {
                  amount: 7.386281948385884,
                  dimensionId: 'dimensionId',
                  dimensionName: 'dimensionName',
                },
              ],
              queryUsage: 5.025004791520295,
              incidentUsage: 6.84685269835264,
              totalUsage: 9.369310271410669,
              id: 1.4894159098541704,
              activeSeries: 2.3021358869347655,
              periodStart: 'periodStart',
              isProrated: true,
              periodEnd: 'periodEnd',
            },
            {
              dpm: 1.2315135367772556,
              ingestUsage: 7.457744773683766,
              onCallUsage: 1.1730742509559433,
              stackId: 9.965781217890562,
              stackName: 'stackName',
              activeUsers: 7.061401241503109,
              protocolUsage: 4.965218492984954,
              anonymousUsers: 9.301444243932576,
              attributedUsage: 2.027123023002322,
              grafanaUsage: 1.0246457001441578,
              browserUsage: 4.145608029883936,
              stackLabels: '{}',
              attributedCost: 3.616076749251911,
              credits: [
                {
                  amount: 7.386281948385884,
                  dimensionId: 'dimensionId',
                  dimensionName: 'dimensionName',
                },
                {
                  amount: 7.386281948385884,
                  dimensionId: 'dimensionId',
                  dimensionName: 'dimensionName',
                },
              ],
              queryUsage: 5.025004791520295,
              incidentUsage: 6.84685269835264,
              totalUsage: 9.369310271410669,
              id: 1.4894159098541704,
              activeSeries: 2.3021358869347655,
              periodStart: 'periodStart',
              isProrated: true,
              periodEnd: 'periodEnd',
            },
          ],
          includedUsage: 5.962133916683182,
          periodStart: 'periodStart',
          overage: 6.027456183070403,
          periodEnd: 'periodEnd',
        },
      ],
      direction: 'asc',
    },
    required: ['direction', 'items', 'orderBy', 'page', 'pageSize', 'pages', 'total'],
  })
  .openapi('GetOrgBilledUsage_200Response')

const PostOrgMembersRequestSchema = z
  .object({
    billing: z.int().exactOptional(),
    privacy: z.string().exactOptional(),
    role: z.string().exactOptional(),
    security: z.int().exactOptional(),
    username: z.string(),
  })
  .openapi({ required: ['username'] })
  .openapi('PostOrgMembersRequest')

const PostOrgMemberRequestSchema = z
  .object({
    billing: z.int().exactOptional(),
    defaultOrg: z.string().exactOptional(),
    privacy: z.string().exactOptional(),
    role: z.string().exactOptional(),
    security: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PostOrgMemberRequest')

const UpdateOrgSettingsRequestSchema = z
  .object({
    aiDataSharingOptOut: z.boolean().nullable().exactOptional(),
    allowedInviteDomains: z.string().nullable().exactOptional(),
    disableTokenExpirationEmails: z.boolean().nullable().exactOptional(),
    maxTokenExpirationDays: z.int().nullable().exactOptional(),
    mfaAdminRecoveryOnly: z.boolean().nullable().exactOptional(),
    mfaRequired: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateOrgSettingsRequest')

const RenewMarketplaceLicenseRequestSchema = z
  .object({ token: z.string().max(16384) })
  .openapi({ required: ['token'] })
  .openapi('RenewMarketplaceLicenseRequest')

const GetStackRegions_200ResponseSchema = z
  .object({
    items: z.array(FormattedApiStackRegionSchema).openapi({ title: 'items' }),
    orderBy: z.string().openapi({ title: 'orderBy' }),
    direction: z.enum(['asc', 'desc']).openapi({ title: 'direction' }),
    total: z.number().openapi({ title: 'total' }),
    pages: z.number().openapi({ title: 'pages' }),
    pageSize: z.number().openapi({ title: 'pageSize' }),
    page: z.number().openapi({ title: 'page' }),
  })
  .openapi({
    example: {
      total: 1.4658129805029452,
      pages: 5.962133916683182,
      orderBy: 'orderBy',
      pageSize: 5.637376656633329,
      page: 2.3021358869347655,
      items: [
        {
          createdAt: 'createdAt',
          visibility: 'visibility',
          publicName: 'publicName',
          provider: 'aws',
          sortOrder: 6.027456183070403,
          name: 'name',
          description: 'description',
          id: 0.8008281904610115,
          slug: 'slug',
          status: 'status',
          updatedAt: 'updatedAt',
        },
        {
          createdAt: 'createdAt',
          visibility: 'visibility',
          publicName: 'publicName',
          provider: 'aws',
          sortOrder: 6.027456183070403,
          name: 'name',
          description: 'description',
          id: 0.8008281904610115,
          slug: 'slug',
          status: 'status',
          updatedAt: 'updatedAt',
        },
      ],
      direction: 'asc',
    },
    required: ['direction', 'items', 'orderBy', 'page', 'pageSize', 'pages', 'total'],
  })
  .openapi('GetStackRegions_200Response')

const GetAccessPolicies_200ResponseSchema = z
  .object({ items: z.array(AuthAccessPolicySchema).exactOptional() })
  .openapi({
    example: {
      items: [
        {
          realms: [
            {
              identifier: '123',
              labelPolicies: [{ selector: '{env != "dev"}' }, { selector: '{env != "dev"}' }],
              type: 'stack',
            },
            {
              identifier: '123',
              labelPolicies: [{ selector: '{env != "dev"}' }, { selector: '{env != "dev"}' }],
              type: 'stack',
            },
          ],
          createdAt: '2000-01-23T04:56:07.000+00:00',
          displayName: 'Stack Readers',
          name: 'stack-readers',
          attributes: {
            pdcConfiguration: {
              limitedHosts: ['mysql.example.com:3306', 'mysql.example.com:3306'],
            },
            lokiQueryPolicy: {
              queryTimeout: '10s',
              maxQueryLookback: '30d',
              maxQueryLength: '7d',
              maxEntriesLimitPerQuery: 20,
            },
            allowedAudiences: ['allowedAudiences', 'allowedAudiences'],
            allowedScopes: ['metrics:read', 'logs:read', 'traces:read', 'alerts:read'],
          },
          id: 'c45485b6-8321-4cf2-bcec-12006df755ff',
          source: 'user',
          scopes: ['metrics:read', 'logs:read', 'traces:read', 'alerts:read'],
          conditions: {
            allowedSubnets: [
              'AuthAccessPolicy_conditions_allowedSubnets_inner',
              'AuthAccessPolicy_conditions_allowedSubnets_inner',
            ],
          },
          orgId: '1',
          updatedAt: '2000-01-23T04:56:07.000+00:00',
          status: 'active',
        },
        {
          realms: [
            {
              identifier: '123',
              labelPolicies: [{ selector: '{env != "dev"}' }, { selector: '{env != "dev"}' }],
              type: 'stack',
            },
            {
              identifier: '123',
              labelPolicies: [{ selector: '{env != "dev"}' }, { selector: '{env != "dev"}' }],
              type: 'stack',
            },
          ],
          createdAt: '2000-01-23T04:56:07.000+00:00',
          displayName: 'Stack Readers',
          name: 'stack-readers',
          attributes: {
            pdcConfiguration: {
              limitedHosts: ['mysql.example.com:3306', 'mysql.example.com:3306'],
            },
            lokiQueryPolicy: {
              queryTimeout: '10s',
              maxQueryLookback: '30d',
              maxQueryLength: '7d',
              maxEntriesLimitPerQuery: 20,
            },
            allowedAudiences: ['allowedAudiences', 'allowedAudiences'],
            allowedScopes: ['metrics:read', 'logs:read', 'traces:read', 'alerts:read'],
          },
          id: 'c45485b6-8321-4cf2-bcec-12006df755ff',
          source: 'user',
          scopes: ['metrics:read', 'logs:read', 'traces:read', 'alerts:read'],
          conditions: {
            allowedSubnets: [
              'AuthAccessPolicy_conditions_allowedSubnets_inner',
              'AuthAccessPolicy_conditions_allowedSubnets_inner',
            ],
          },
          orgId: '1',
          updatedAt: '2000-01-23T04:56:07.000+00:00',
          status: 'active',
        },
      ],
    },
    required: [],
  })
  .openapi('GetAccessPolicies_200Response')

const PostAccessPoliciesRequestAttributesLokiQueryPolicySchema = z
  .object({
    maxEntriesLimitPerQuery: z.int().nullable().exactOptional(),
    maxQueryBytesRead: z.string().nullable().exactOptional(),
    maxQueryInterval: z.string().nullable().exactOptional(),
    maxQueryLength: z.string().nullable().exactOptional(),
    maxQueryLookback: z.string().nullable().exactOptional(),
    maxQueryTime: z.string().nullable().exactOptional(),
    minimumLabelsNumber: z.int().nullable().exactOptional(),
    requiredLabels: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PostAccessPoliciesRequestAttributesLokiQueryPolicy')

const PostAccessPoliciesRequestAttributesPdcConfigurationSchema = z
  .object({ limitedHosts: z.array(z.string()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('PostAccessPoliciesRequestAttributesPdcConfiguration')

const PostAccessPoliciesRequestAttributesSchema = z
  .object({
    lokiQueryPolicy: PostAccessPoliciesRequestAttributesLokiQueryPolicySchema.exactOptional(),
    pdcConfiguration: PostAccessPoliciesRequestAttributesPdcConfigurationSchema.exactOptional(),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('PostAccessPoliciesRequestAttributes')

const PostAccessPoliciesRequestConditionsSchema = z
  .object({ allowedSubnets: z.array(z.string()).nullable().exactOptional() })
  .nullable()
  .openapi({ required: [] })
  .openapi('PostAccessPoliciesRequestConditions')

const PostAccessPoliciesRequestRealmsInnerLabelPoliciesInnerSchema = z
  .object({ selector: z.string() })
  .openapi({ required: ['selector'] })
  .openapi('PostAccessPoliciesRequestRealmsInnerLabelPoliciesInner')

const PostAccessPoliciesRequestRealmsInnerSchema = z
  .object({
    identifier: z.string(),
    labelPolicies: z
      .array(PostAccessPoliciesRequestRealmsInnerLabelPoliciesInnerSchema)
      .exactOptional(),
    type: z.enum(['stack', 'org']),
  })
  .openapi({ required: ['identifier', 'type'] })
  .openapi('PostAccessPoliciesRequestRealmsInner')

const PostAccessPoliciesRequestSchema = z
  .object({
    attributes: PostAccessPoliciesRequestAttributesSchema.exactOptional(),
    conditions: PostAccessPoliciesRequestConditionsSchema.exactOptional(),
    displayName: z.string().exactOptional(),
    name: z.string(),
    realms: z.array(PostAccessPoliciesRequestRealmsInnerSchema),
    scopes: z.array(z.string()),
  })
  .openapi({ required: ['name', 'realms', 'scopes'] })
  .openapi('PostAccessPoliciesRequest')

const PostAccessPolicyRequestSchema = z
  .object({
    attributes: PostAccessPoliciesRequestAttributesSchema.exactOptional(),
    conditions: PostAccessPoliciesRequestConditionsSchema.exactOptional(),
    displayName: z.string().exactOptional(),
    realms: z.array(PostAccessPoliciesRequestRealmsInnerSchema).exactOptional(),
    scopes: z.array(z.string()).exactOptional(),
    status: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PostAccessPolicyRequest')

const PostTokensRequestSchema = z
  .object({
    accessPolicyId: z.string(),
    displayName: z.string().exactOptional(),
    expiresAt: z.iso.datetime({ offset: true }).exactOptional(),
    name: z.string(),
  })
  .openapi({ required: ['accessPolicyId', 'name'] })
  .openapi('PostTokensRequest')

const PostTokenRequestSchema = z
  .object({
    displayName: z.string().exactOptional(),
    expiresAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PostTokenRequest')

const BearerAuthSecurityScheme = { scheme: 'bearer', type: 'http' }

export const getInstancesRoute = createRoute({
  method: 'get',
  path: '/instances',
  tags: ['instances'],
  summary: 'Get a list of instances',
  operationId: 'getInstances',
  request: {
    query: z.object({
      cluster: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'cluster',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      clusterIdIn: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'clusterIdIn',
            required: false,
            schema: { items: { type: 'integer' }, type: 'array' },
            style: 'form',
          },
        }),
      cursor: z
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
            explode: true,
            in: 'query',
            name: 'cursor',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      direction: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'direction',
            required: false,
            schema: { enum: ['asc', 'desc'], type: 'string' },
            style: 'form',
          },
        }),
      hosted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'hosted',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'id',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      idIn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'idIn',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      idMin: z
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
            explode: true,
            in: 'query',
            name: 'idMin',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      includeLabels: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'includeLabels',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      includePromCurrentActiveSeries: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'includePromCurrentActiveSeries',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      labels: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'labels',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      nameIn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'nameIn',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      orderBy: z
        .enum([
          'id',
          'name',
          'version',
          'createdAt',
          'runningVersion',
          'billingActiveUsers',
          'billingGrafanaActiveUsers',
          'billingOnCallActiveUsers',
          'currentActiveUsers',
          'currentActiveAdminUsers',
          'currentActiveEditorUsers',
          'currentActiveViewerUsers',
        ])
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'orderBy',
            required: false,
            schema: {
              enum: [
                'id',
                'name',
                'version',
                'createdAt',
                'runningVersion',
                'billingActiveUsers',
                'billingGrafanaActiveUsers',
                'billingOnCallActiveUsers',
                'currentActiveUsers',
                'currentActiveAdminUsers',
                'currentActiveEditorUsers',
                'currentActiveViewerUsers',
              ],
              type: 'string',
            },
            style: 'form',
          },
        }),
      orgId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'orgId',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      orgIdIn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'orgIdIn',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      orgSlug: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'orgSlug',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      orgSlugIn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'orgSlugIn',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
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
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      pageSize: z
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
            explode: true,
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      plan: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'plan',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      planIn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'planIn',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      planNot: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'planNot',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      region: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'region',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      regionIn: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'regionIn',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'slug',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      slugIn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'slugIn',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'status',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      updatedOrCreatedAtMin: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'updatedOrCreatedAtMin',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'url',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'version',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      versionIn: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'versionIn',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      versionNot: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'versionNot',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      versionNotIn: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'versionNotIn',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetInstances_200ResponseSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const postInstancesRoute = createRoute({
  method: 'post',
  path: '/instances',
  tags: ['instances'],
  summary: 'Create a new instance',
  operationId: 'postInstances',
  request: {
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostInstancesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FormattedApiInstanceSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const getInstancesInstanceIdRoute = createRoute({
  method: 'get',
  path: '/instances/{instanceId}',
  tags: ['instances'],
  summary: 'Gets an instance',
  operationId: 'getInstance',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      config: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'config',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FormattedApiInstanceSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const postInstancesInstanceIdRoute = createRoute({
  method: 'post',
  path: '/instances/{instanceId}',
  tags: ['instances'],
  summary: 'Updates an instance',
  operationId: 'postInstance',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostInstanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FormattedApiInstanceSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const deleteInstancesInstanceIdRoute = createRoute({
  method: 'delete',
  path: '/instances/{instanceId}',
  tags: ['instances'],
  summary: 'Deletes an instance',
  operationId: 'deleteInstance',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FormattedApiInstanceSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const postInstancesInstanceIdApiServiceaccountsRoute = createRoute({
  method: 'post',
  path: '/instances/{instanceId}/api/serviceaccounts',
  tags: ['instances'],
  summary: 'Creates a service account on a Grafana instance',
  operationId: 'postInstanceServiceAccounts',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostInstanceServiceAccountsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GrafanaServiceAccountDTOSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const getInstancesInstanceIdApiServiceaccountsSearchRoute = createRoute({
  method: 'get',
  path: '/instances/{instanceId}/api/serviceaccounts/search',
  tags: ['instances'],
  summary: 'Search service accounts on a Grafana instance with paging',
  operationId: 'getInstanceServiceAccountsSearch',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
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
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      perpage: z
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
            explode: true,
            in: 'query',
            name: 'perpage',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ServiceAccountSearchResponseSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const getInstancesInstanceIdApiServiceaccountsServiceAccountIdRoute = createRoute({
  method: 'get',
  path: '/instances/{instanceId}/api/serviceaccounts/{serviceAccountId}',
  tags: ['instances'],
  summary: 'Gets a service account on a Grafana instance',
  operationId: 'getInstanceServiceAccount',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      serviceAccountId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'serviceAccountId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GrafanaServiceAccountDTOSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const deleteInstancesInstanceIdApiServiceaccountsServiceAccountIdRoute = createRoute({
  method: 'delete',
  path: '/instances/{instanceId}/api/serviceaccounts/{serviceAccountId}',
  tags: ['instances'],
  summary: 'Delete a service account on a Grafana instance',
  operationId: 'deleteInstanceServiceAccount',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      serviceAccountId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'serviceAccountId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const getInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensRoute = createRoute({
  method: 'get',
  path: '/instances/{instanceId}/api/serviceaccounts/{serviceAccountId}/tokens',
  tags: ['instances'],
  summary: "Get a service account's tokens on a Grafana instance",
  operationId: 'getInstanceServiceAccountTokens',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      serviceAccountId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'serviceAccountId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(GrafanaTokenDTOSchema) } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const postInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensRoute = createRoute({
  method: 'post',
  path: '/instances/{instanceId}/api/serviceaccounts/{serviceAccountId}/tokens',
  tags: ['instances'],
  summary: 'Creates a service account token on a Grafana instance',
  operationId: 'postInstanceServiceAccountTokens',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      serviceAccountId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'serviceAccountId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostInstanceServiceAccountTokensRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GrafanaNewApiKeyResultSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const deleteInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensTokenIdRoute =
  createRoute({
    method: 'delete',
    path: '/instances/{instanceId}/api/serviceaccounts/{serviceAccountId}/tokens/{tokenId}',
    tags: ['instances'],
    summary: 'Delete a service account token on a Grafana instance',
    operationId: 'deleteInstanceServiceAccountToken',
    request: {
      params: z.object({
        instanceId: z
          .string()
          .openapi({
            param: {
              explode: false,
              in: 'path',
              name: 'instanceId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        serviceAccountId: z
          .string()
          .openapi({
            param: {
              explode: false,
              in: 'path',
              name: 'serviceAccountId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        tokenId: z
          .string()
          .openapi({
            param: {
              explode: false,
              in: 'path',
              name: 'tokenId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
      }),
      headers: z.object({
        'x-request-id': z
          .string()
          .openapi({
            param: {
              explode: false,
              in: 'header',
              name: 'x-request-id',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
      }),
    },
    responses: {
      200: { description: 'OK' },
      401: {
        description: 'Login Required or invalid credentials',
        content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
      },
      403: {
        description: 'Forbidden',
        content: { 'application/json': { schema: ErrorForbiddenSchema } },
      },
      404: {
        description: 'Element not found',
        content: { 'application/json': { schema: ErrorNotFoundSchema } },
      },
      409: {
        description: 'Invalid arguments: wrong or missing parameters',
        content: { 'application/json': { schema: ErrorConflictSchema } },
      },
      503: {
        description: 'Service is currently unavailable',
        content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
      },
    },
  })

export const getInstancesInstanceIdPluginsRoute = createRoute({
  method: 'get',
  path: '/instances/{instanceId}/plugins',
  tags: ['instances'],
  operationId: 'getInstancePlugins',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      direction: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'direction',
            required: false,
            schema: { enum: ['asc', 'desc'], type: 'string' },
            style: 'form',
          },
        }),
      orderBy: z
        .enum(['instanceId', 'pluginId', 'pluginSlug', 'pluginName'])
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'orderBy',
            required: false,
            schema: {
              enum: ['instanceId', 'pluginId', 'pluginSlug', 'pluginName'],
              type: 'string',
            },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetInstancePlugins_200ResponseSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const postInstancesInstanceIdPluginsRoute = createRoute({
  method: 'post',
  path: '/instances/{instanceId}/plugins',
  tags: ['instances'],
  operationId: 'postInstancePlugins',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostInstancePluginsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FormattedApiInstancePluginSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const getInstancesInstanceIdPluginsPluginSlugOrIdRoute = createRoute({
  method: 'get',
  path: '/instances/{instanceId}/plugins/{pluginSlugOrId}',
  tags: ['instances'],
  operationId: 'getInstancePlugin',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      pluginSlugOrId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'pluginSlugOrId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FormattedApiInstancePluginSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const postInstancesInstanceIdPluginsPluginSlugOrIdRoute = createRoute({
  method: 'post',
  path: '/instances/{instanceId}/plugins/{pluginSlugOrId}',
  tags: ['instances'],
  operationId: 'postInstancePlugin',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      pluginSlugOrId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'pluginSlugOrId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostInstancePluginRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FormattedApiInstancePluginSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const deleteInstancesInstanceIdPluginsPluginSlugOrIdRoute = createRoute({
  method: 'delete',
  path: '/instances/{instanceId}/plugins/{pluginSlugOrId}',
  tags: ['instances'],
  operationId: 'deleteInstancePlugin',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      pluginSlugOrId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'pluginSlugOrId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      noRestart: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'noRestart',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FormattedApiInstancePluginSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const getInstancesInstanceIdReadinessRoute = createRoute({
  method: 'get',
  path: '/instances/{instanceId}/readiness',
  tags: ['instances'],
  summary: "Gets an instance's readiness status",
  operationId: 'getInstanceReadiness',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FormattedApiInstanceReadinessSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const getOrgStackRegionsRoute = createRoute({
  method: 'get',
  path: '/org-stack-regions',
  tags: ['org-stack-regions'],
  operationId: 'getOrgStackRegions',
  request: {
    query: z.object({
      orgId: z
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
            explode: true,
            in: 'query',
            name: 'orgId',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      regionSlugOrId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'regionSlugOrId',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetOrgStackRegions_200ResponseSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const getOrgsOrgSlugOrIdBilledUsageRoute = createRoute({
  method: 'get',
  path: '/orgs/{orgSlugOrId}/billed-usage',
  tags: ['orgs'],
  summary: "Retrieve an org's billed usage for a specific month",
  operationId: 'getOrgBilledUsage',
  request: {
    params: z.object({
      orgSlugOrId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'orgSlugOrId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
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
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'month',
            required: true,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
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
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'year',
            required: true,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      format: z
        .literal('csv')
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'format',
            required: false,
            schema: { enum: ['csv'], type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetOrgBilledUsage_200ResponseSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const getOrgsOrgSlugOrIdBilledUsageHistoryRoute = createRoute({
  method: 'get',
  path: '/orgs/{orgSlugOrId}/billed-usage-history',
  tags: ['orgs'],
  summary: "Retrieve an org's billed usage items for the last 12 months",
  operationId: 'getOrgBilledUsageHistory',
  request: {
    params: z.object({
      orgSlugOrId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'orgSlugOrId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OrgBilledUsageHistorySchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const getOrgsOrgSlugInstancesRoute = createRoute({
  method: 'get',
  path: '/orgs/{orgSlug}/instances',
  tags: ['orgs'],
  summary: 'Get the list of instances belonging to the org',
  operationId: 'getOrgInstances',
  request: {
    params: z.object({
      orgSlug: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'orgSlug',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      cluster: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'cluster',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      direction: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'direction',
            required: false,
            schema: { enum: ['asc', 'desc'], type: 'string' },
            style: 'form',
          },
        }),
      id: z
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
            explode: true,
            in: 'query',
            name: 'id',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      idIn: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'idIn',
            required: false,
            schema: { items: { type: 'integer' }, type: 'array' },
            style: 'form',
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      nameIn: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'nameIn',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      orderBy: z
        .enum([
          'id',
          'name',
          'version',
          'createdAt',
          'runningVersion',
          'billingActiveUsers',
          'billingGrafanaActiveUsers',
          'billingOnCallActiveUsers',
          'currentActiveUsers',
          'currentActiveAdminUsers',
          'currentActiveEditorUsers',
          'currentActiveViewerUsers',
        ])
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'orderBy',
            required: false,
            schema: {
              enum: [
                'id',
                'name',
                'version',
                'createdAt',
                'runningVersion',
                'billingActiveUsers',
                'billingGrafanaActiveUsers',
                'billingOnCallActiveUsers',
                'currentActiveUsers',
                'currentActiveAdminUsers',
                'currentActiveEditorUsers',
                'currentActiveViewerUsers',
              ],
              type: 'string',
            },
            style: 'form',
          },
        }),
      plan: z
        .enum([
          'free',
          'free-trial',
          'gcloud',
          'enterprise',
          'advanced',
          'payg',
          'fedramp',
          'trial',
          'logsdemo',
          'starter',
          'starter-prom',
          'basic',
          'basic-prom',
          'bundled',
          'fog',
        ])
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'plan',
            required: false,
            schema: {
              enum: [
                'free',
                'free-trial',
                'gcloud',
                'enterprise',
                'advanced',
                'payg',
                'fedramp',
                'trial',
                'logsdemo',
                'starter',
                'starter-prom',
                'basic',
                'basic-prom',
                'bundled',
                'fog',
              ],
              type: 'string',
            },
            style: 'form',
          },
        }),
      planIn: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'free',
              'free-trial',
              'gcloud',
              'enterprise',
              'advanced',
              'payg',
              'fedramp',
              'trial',
              'logsdemo',
              'starter',
              'starter-prom',
              'basic',
              'basic-prom',
              'bundled',
              'fog',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'planIn',
            required: false,
            schema: {
              items: {
                enum: [
                  'free',
                  'free-trial',
                  'gcloud',
                  'enterprise',
                  'advanced',
                  'payg',
                  'fedramp',
                  'trial',
                  'logsdemo',
                  'starter',
                  'starter-prom',
                  'basic',
                  'basic-prom',
                  'bundled',
                  'fog',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
          },
        }),
      planNot: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'planNot',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'slug',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      slugIn: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'slugIn',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'url',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      urlIn: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'urlIn',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetInstances_200ResponseSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const getOrgsSlugOrIdRoute = createRoute({
  method: 'get',
  path: '/orgs/{slugOrId}',
  tags: ['orgs'],
  operationId: 'getOrg',
  request: {
    params: z.object({
      slugOrId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'slugOrId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FormattedApiOrgPublicSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const getOrgsSlugOrIdCheckVisibilityRoute = createRoute({
  method: 'get',
  path: '/orgs/{slugOrId}/check-visibility',
  tags: ['orgs'],
  description: 'Check visibility of the org',
  operationId: 'checkOrgVisibility',
  request: {
    params: z.object({
      slugOrId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'slugOrId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const getOrgsSlugOrIdMembersRoute = createRoute({
  method: 'get',
  path: '/orgs/{slugOrId}/members',
  tags: ['orgs'],
  operationId: 'getOrgMembers',
  request: {
    params: z.object({
      slugOrId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'slugOrId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      billing: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'billing',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      direction: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'direction',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'orderBy',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      privacy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'privacy',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      privacyIn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'privacyIn',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OrgMemberListResponseSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const postOrgsSlugOrIdMembersRoute = createRoute({
  method: 'post',
  path: '/orgs/{slugOrId}/members',
  tags: ['orgs'],
  operationId: 'postOrgMembers',
  request: {
    params: z.object({
      slugOrId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'slugOrId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostOrgMembersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FormattedOrgMembershipSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const getOrgsSlugOrIdMembersUsernameOrIdRoute = createRoute({
  method: 'get',
  path: '/orgs/{slugOrId}/members/{usernameOrId}',
  tags: ['orgs'],
  operationId: 'getOrgMember',
  request: {
    params: z.object({
      slugOrId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'slugOrId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      usernameOrId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'usernameOrId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FormattedOrgMembershipSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const postOrgsSlugOrIdMembersUsernameOrIdRoute = createRoute({
  method: 'post',
  path: '/orgs/{slugOrId}/members/{usernameOrId}',
  tags: ['orgs'],
  operationId: 'postOrgMember',
  request: {
    params: z.object({
      slugOrId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'slugOrId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      usernameOrId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'usernameOrId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostOrgMemberRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FormattedOrgMembershipSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const deleteOrgsSlugOrIdMembersUsernameOrIdRoute = createRoute({
  method: 'delete',
  path: '/orgs/{slugOrId}/members/{usernameOrId}',
  tags: ['orgs'],
  operationId: 'deleteOrgMember',
  request: {
    params: z.object({
      slugOrId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'slugOrId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      usernameOrId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'usernameOrId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const getOrgsSlugOrIdSettingsRoute = createRoute({
  method: 'get',
  path: '/orgs/{slugOrId}/settings',
  tags: ['orgs'],
  summary: 'Get org settings',
  operationId: 'getOrgSettings',
  request: {
    params: z.object({
      slugOrId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'slugOrId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FormattedApiOrgSettingsSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const postOrgsSlugOrIdSettingsRoute = createRoute({
  method: 'post',
  path: '/orgs/{slugOrId}/settings',
  tags: ['orgs'],
  summary: 'Update org settings',
  operationId: 'updateOrgSettings',
  request: {
    params: z.object({
      slugOrId: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'slugOrId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateOrgSettingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FormattedApiOrgSettingsSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const postPluginsMarketplaceLicensesRenewRoute = createRoute({
  method: 'post',
  path: '/plugins-marketplace/licenses/renew',
  tags: ['plugins-marketplace'],
  summary: 'Renew a marketplace license token.',
  operationId: 'renewMarketplaceLicense',
  request: {
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RenewMarketplaceLicenseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MarketplaceLicenseRenewalResponseSchema } },
    },
    404: { description: 'Marketplace license token not found.' },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
  security: [],
})

export const getPluginsSlugRoute = createRoute({
  method: 'get',
  path: '/plugins/{slug}',
  tags: ['plugins'],
  summary: 'Fetches a plugin by slug or id',
  operationId: 'getPlugin',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'slug',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'version',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FormattedApiPluginSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const getStackRegionsRoute = createRoute({
  method: 'get',
  path: '/stack-regions',
  tags: ['stack-regions'],
  operationId: 'getStackRegions',
  request: {
    query: z.object({
      countryCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'countryCode',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      direction: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'direction',
            required: false,
            schema: { enum: ['asc', 'desc'], type: 'string' },
            style: 'form',
          },
        }),
      id: z
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
            explode: true,
            in: 'query',
            name: 'id',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      idIn: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'idIn',
            required: false,
            schema: { items: { type: 'integer' }, type: 'array' },
            style: 'form',
          },
        }),
      labels: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'labels',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      orderBy: z
        .enum(['id', 'createdAt', 'updatedAt', 'sortOrder'])
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'orderBy',
            required: false,
            schema: { enum: ['id', 'createdAt', 'updatedAt', 'sortOrder'], type: 'string' },
            style: 'form',
          },
        }),
      orgId: z
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
            explode: true,
            in: 'query',
            name: 'orgId',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      provider: z
        .enum(['aws', 'gcp', 'azure', 'fedramp-palantir'])
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'provider',
            required: false,
            schema: { enum: ['aws', 'gcp', 'azure', 'fedramp-palantir'], type: 'string' },
            style: 'form',
          },
        }),
      providerRegion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'providerRegion',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'slug',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      slugIn: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'slugIn',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetStackRegions_200ResponseSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const getStackRegionsClosestRoute = createRoute({
  method: 'get',
  path: '/stack-regions/closest',
  tags: ['stack-regions'],
  operationId: 'getClosestStackRegion',
  request: {
    query: z.object({
      orgId: z
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
            explode: true,
            in: 'query',
            name: 'orgId',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      provider: z
        .enum(['aws', 'gcp', 'azure', 'fedramp-palantir'])
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'provider',
            required: false,
            schema: { enum: ['aws', 'gcp', 'azure', 'fedramp-palantir'], type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FormattedApiStackRegionSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const getV1AccesspoliciesRoute = createRoute({
  method: 'get',
  path: '/v1/accesspolicies',
  tags: ['accesspolicies'],
  summary: 'Get a list of access policies',
  operationId: 'getAccessPolicies',
  request: {
    query: z.object({
      region: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'region',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      orgId: z
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
            explode: true,
            in: 'query',
            name: 'orgId',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      pageCursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'pageCursor',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      pageSize: z
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
            explode: true,
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      realmIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'realmIdentifier',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      realmType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'realmType',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'status',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetAccessPolicies_200ResponseSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const postV1AccesspoliciesRoute = createRoute({
  method: 'post',
  path: '/v1/accesspolicies',
  tags: ['accesspolicies'],
  summary: 'Create a new access policy',
  operationId: 'postAccessPolicies',
  request: {
    query: z.object({
      region: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'region',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      orgId: z
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
            explode: true,
            in: 'query',
            name: 'orgId',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostAccessPoliciesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AuthAccessPolicySchema } } },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const getV1AccesspoliciesConfigRoute = createRoute({
  method: 'get',
  path: '/v1/accesspolicies/config',
  tags: ['accesspolicies'],
  summary: 'Get details about the Cloud Access Policy API',
  operationId: 'getConfig',
  request: {
    query: z.object({
      region: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'region',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      includeOrgMetadata: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'includeOrgMetadata',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      orgId: z
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
            explode: true,
            in: 'query',
            name: 'orgId',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AccessPoliciesConfigSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const getV1AccesspoliciesIdRoute = createRoute({
  method: 'get',
  path: '/v1/accesspolicies/{id}',
  tags: ['accesspolicies'],
  summary: 'Get an access policy',
  operationId: 'getAccessPolicy',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      region: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'region',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      orgId: z
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
            explode: true,
            in: 'query',
            name: 'orgId',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AuthAccessPolicySchema } } },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const postV1AccesspoliciesIdRoute = createRoute({
  method: 'post',
  path: '/v1/accesspolicies/{id}',
  tags: ['accesspolicies'],
  summary: 'Update an access policy',
  operationId: 'postAccessPolicy',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      region: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'region',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      orgId: z
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
            explode: true,
            in: 'query',
            name: 'orgId',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostAccessPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AuthAccessPolicySchema } } },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const deleteV1AccesspoliciesIdRoute = createRoute({
  method: 'delete',
  path: '/v1/accesspolicies/{id}',
  tags: ['accesspolicies'],
  summary: 'Delete an access policy',
  operationId: 'deleteAccessPolicy',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      region: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'region',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      orgId: z
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
            explode: true,
            in: 'query',
            name: 'orgId',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const getV1TokensRoute = createRoute({
  method: 'get',
  path: '/v1/tokens',
  tags: ['tokens'],
  summary: 'Get a list of tokens',
  operationId: 'getTokens',
  request: {
    query: z.object({
      region: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'region',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      accessPolicyId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'accessPolicyId',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      accessPolicyIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'accessPolicyIds',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      accessPolicyName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'accessPolicyName',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      accessPolicyRealmIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'accessPolicyRealmIdentifier',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      accessPolicyRealmType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'accessPolicyRealmType',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      accessPolicyStatus: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'accessPolicyStatus',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      expiresAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'expiresAfter',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      expiresBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'expiresBefore',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      includeExpired: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'includeExpired',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      orgId: z
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
            explode: true,
            in: 'query',
            name: 'orgId',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      pageCursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'pageCursor',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      pageSize: z
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
            explode: true,
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AccessPolicyListResponseSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const postV1TokensRoute = createRoute({
  method: 'post',
  path: '/v1/tokens',
  tags: ['tokens'],
  summary: 'Create a new token',
  operationId: 'postTokens',
  request: {
    query: z.object({
      region: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'region',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      orgId: z
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
            explode: true,
            in: 'query',
            name: 'orgId',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PostTokensRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AuthTokenWithSecretSchema } },
    },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const getV1TokensIdRoute = createRoute({
  method: 'get',
  path: '/v1/tokens/{id}',
  tags: ['tokens'],
  summary: 'Get info for a specific token',
  operationId: 'getToken',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      region: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'region',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      orgId: z
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
            explode: true,
            in: 'query',
            name: 'orgId',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AuthTokenSchema } } },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
  },
})

export const postV1TokensIdRoute = createRoute({
  method: 'post',
  path: '/v1/tokens/{id}',
  tags: ['tokens'],
  summary: 'Update a token',
  operationId: 'postToken',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      region: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'region',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      orgId: z
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
            explode: true,
            in: 'query',
            name: 'orgId',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PostTokenRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AuthTokenSchema } } },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const deleteV1TokensIdRoute = createRoute({
  method: 'delete',
  path: '/v1/tokens/{id}',
  tags: ['tokens'],
  summary: 'Delete a token',
  operationId: 'deleteToken',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      region: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'region',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      orgId: z
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
            explode: true,
            in: 'query',
            name: 'orgId',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
    }),
    headers: z.object({
      'x-request-id': z
        .string()
        .openapi({
          param: {
            explode: false,
            in: 'header',
            name: 'x-request-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.looseObject({}) } } },
    401: {
      description: 'Login Required or invalid credentials',
      content: { 'application/json': { schema: ErrorInvalidCredentialsSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorForbiddenSchema } },
    },
    404: {
      description: 'Element not found',
      content: { 'application/json': { schema: ErrorNotFoundSchema } },
    },
    409: {
      description: 'Invalid arguments: wrong or missing parameters',
      content: { 'application/json': { schema: ErrorConflictSchema } },
    },
    503: {
      description: 'Service is currently unavailable',
      content: { 'application/json': { schema: ErrorServiceUnavailableSchema } },
    },
  },
})

export const getInstancesInstanceIdConnectionsRoute = createRoute({
  method: 'get',
  path: '/instances/{instanceId}/connections',
  tags: ['stacks'],
  summary: "Gets an instance's connectivity information (InfluxDB, OTEL, AWS private link, etc.)",
  operationId: 'getConnections',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            description: 'id or slug of the instance',
            explode: false,
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { description: 'id or slug of the instance', type: 'string' },
            style: 'simple',
          },
          description: 'id or slug of the instance',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FormattedApiInstanceConnectionsSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ErrorPayloadSchema } },
    },
  },
  deprecated: true,
})

export const getV1StacksRoute = createRoute({
  method: 'get',
  path: '/v1/stacks',
  tags: ['stacks'],
  operationId: 'listStacksV1',
  request: {
    query: z.object({
      org: z
        .string()
        .openapi({
          param: {
            description: 'slug of the org to restrict the search to',
            explode: false,
            in: 'query',
            name: 'org',
            required: true,
            schema: { description: 'slug of the org to restrict the search to', type: 'string' },
            style: 'form',
          },
          description: 'slug of the org to restrict the search to',
        }),
      page: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(1n)
        .openapi({
          param: {
            description: 'page to retrieve',
            explode: false,
            in: 'query',
            name: 'page',
            required: true,
            schema: {
              default: 1,
              description: 'page to retrieve',
              format: 'int64',
              type: 'integer',
            },
            style: 'form',
          },
          description: 'page to retrieve',
        }),
      pageSize: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(10n)
        .openapi({
          param: {
            description: 'page size to retrieve',
            explode: false,
            in: 'query',
            name: 'pageSize',
            required: true,
            schema: {
              default: 10,
              description: 'page size to retrieve',
              format: 'int64',
              type: 'integer',
            },
            style: 'form',
          },
          description: 'page size to retrieve',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PaginatedResponseStackV1Schema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ErrorPayloadSchema } },
    },
  },
})

export const postV1StacksRoute = createRoute({
  method: 'post',
  path: '/v1/stacks',
  tags: ['stacks'],
  operationId: 'createStackV1',
  request: {
    body: {
      content: { 'application/json': { schema: StackCreateRequestV1Schema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: StackV1Schema } } },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ErrorPayloadSchema } },
    },
  },
})

export const postV1StacksCheckUrlRoute = createRoute({
  method: 'post',
  path: '/v1/stacks/checkUrl',
  tags: ['stacks'],
  operationId: 'checkStackSlugV1',
  request: {
    body: {
      content: { 'application/json': { schema: StackCheckRequestV1Schema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: StackCheckV1Schema } } },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ErrorPayloadSchema } },
    },
  },
})

export const getV1StacksIdOrSlugRoute = createRoute({
  method: 'get',
  path: '/v1/stacks/{idOrSlug}',
  tags: ['stacks'],
  operationId: 'getStackV1',
  request: {
    params: z.object({
      idOrSlug: z
        .string()
        .openapi({
          param: {
            description: 'id of the stack to get',
            explode: false,
            in: 'path',
            name: 'idOrSlug',
            required: true,
            schema: { description: 'id of the stack to get', type: 'string' },
            style: 'simple',
          },
          description: 'id of the stack to get',
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: StackV1Schema } } },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ErrorPayloadSchema } },
    },
  },
})

export const postV1StacksIdOrSlugRoute = createRoute({
  method: 'post',
  path: '/v1/stacks/{idOrSlug}',
  tags: ['stacks'],
  operationId: 'updateStackV1',
  request: {
    params: z.object({
      idOrSlug: z
        .string()
        .openapi({
          param: {
            description: 'id of the stack to update',
            explode: false,
            in: 'path',
            name: 'idOrSlug',
            required: true,
            schema: { description: 'id of the stack to update', type: 'string' },
            style: 'simple',
          },
          description: 'id of the stack to update',
        }),
    }),
    body: {
      content: { 'application/json': { schema: StackUpdateRequestV1Schema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: StackV1Schema } } },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ErrorPayloadSchema } },
    },
  },
})

export const deleteV1StacksIdOrSlugRoute = createRoute({
  method: 'delete',
  path: '/v1/stacks/{idOrSlug}',
  tags: ['stacks'],
  operationId: 'deleteStackV1',
  request: {
    params: z.object({
      idOrSlug: z
        .string()
        .openapi({
          param: {
            description: 'id of the stack to delete',
            explode: false,
            in: 'path',
            name: 'idOrSlug',
            required: true,
            schema: { description: 'id of the stack to delete', type: 'string' },
            style: 'simple',
          },
          description: 'id of the stack to delete',
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: StackV1Schema } } },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ErrorPayloadSchema } },
    },
  },
})

export const getV1StacksIdOrSlugConnectionsRoute = createRoute({
  method: 'get',
  path: '/v1/stacks/{idOrSlug}/connections',
  tags: ['stacks'],
  operationId: 'getStackConnectionsV1',
  request: {
    params: z.object({
      idOrSlug: z
        .string()
        .openapi({
          param: {
            description: 'id or slug of the stack',
            explode: false,
            in: 'path',
            name: 'idOrSlug',
            required: true,
            schema: { description: 'id or slug of the stack', type: 'string' },
            style: 'simple',
          },
          description: 'id or slug of the stack',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: StackConnectionsV1Schema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ErrorPayloadSchema } },
    },
  },
})

export const getV1StacksIdOrSlugReadinessRoute = createRoute({
  method: 'get',
  path: '/v1/stacks/{idOrSlug}/readiness',
  tags: ['stacks'],
  operationId: 'checkStackReadinessV1',
  request: {
    params: z.object({
      idOrSlug: z
        .string()
        .openapi({
          param: {
            description: 'id of the stack to check readiness',
            explode: false,
            in: 'path',
            name: 'idOrSlug',
            required: true,
            schema: { description: 'id of the stack to check readiness', type: 'string' },
            style: 'simple',
          },
          description: 'id of the stack to check readiness',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: StackCheckReadinessV1Schema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ErrorPayloadSchema } },
    },
  },
})

export const getInstancesInstanceIdUsersRoute = createRoute({
  method: 'get',
  path: '/instances/{instanceId}/users',
  tags: ['instances'],
  summary: 'Gets instance active users',
  operationId: 'getInstanceUsers',
  request: {
    params: z.object({
      instanceId: z
        .string()
        .openapi({
          param: {
            description: 'id or slug of the instance',
            explode: false,
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { description: 'id or slug of the instance', type: 'string' },
            style: 'simple',
          },
          description: 'id or slug of the instance',
        }),
    }),
    query: z.object({
      active: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'only return users seen in the last month, ignored when activeSince is set',
            explode: false,
            in: 'query',
            name: 'active',
            required: false,
            schema: {
              description:
                'only return users seen in the last month, ignored when activeSince is set',
              type: 'string',
            },
            style: 'form',
          },
          description: 'only return users seen in the last month, ignored when activeSince is set',
        }),
      activeSince: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'only return users seen since this timestamp',
            explode: false,
            in: 'query',
            name: 'activeSince',
            required: false,
            schema: { description: 'only return users seen since this timestamp', type: 'string' },
            style: 'form',
          },
          description: 'only return users seen since this timestamp',
        }),
      includeInternal: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'include Grafana Labs internal users',
            explode: false,
            in: 'query',
            name: 'includeInternal',
            required: false,
            schema: { description: 'include Grafana Labs internal users', type: 'string' },
            style: 'form',
          },
          description: 'include Grafana Labs internal users',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: InstanceUsersResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ErrorPayloadSchema } },
    },
  },
})
