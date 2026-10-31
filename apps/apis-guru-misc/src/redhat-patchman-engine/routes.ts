import { createRoute, z } from '@hono/zod-openapi'

const ControllersAdvisoryItemAttributesSchema = z
  .object({
    advisory_type: z.int().exactOptional(),
    applicable_systems: z.int().exactOptional(),
    cve_count: z.int().exactOptional(),
    description: z.string().exactOptional(),
    public_date: z.string().exactOptional(),
    severity: z.int().exactOptional(),
    synopsis: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersAdvisoryItemAttributes')

const ControllersAdvisoryItemSchema = z
  .object({
    attributes: ControllersAdvisoryItemAttributesSchema.exactOptional(),
    id: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersAdvisoryItem')

const ControllersLinksSchema = z
  .object({
    first: z.string().exactOptional(),
    last: z.string().exactOptional(),
    next: z.string().exactOptional(),
    previous: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersLinks')

const ControllersFilterDataSchema = z
  .object({ op: z.string().exactOptional(), values: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('ControllersFilterData')

const ControllersListMetaSchema = z
  .object({
    filter: z.record(z.string(), ControllersFilterDataSchema).exactOptional(),
    limit: z.int().exactOptional(),
    offset: z.int().exactOptional(),
    search: z.string().exactOptional(),
    sort: z.array(z.string()).exactOptional(),
    subtotals: z.record(z.string(), z.int()).exactOptional(),
    total_items: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersListMeta')

const ControllersAdvisoriesResponseSchema = z
  .object({
    data: z.array(ControllersAdvisoryItemSchema).exactOptional(),
    links: ControllersLinksSchema.exactOptional(),
    meta: ControllersListMetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersAdvisoriesResponse')

const ControllersAdvisoriesSystemsResponseSchema = z
  .object({ data: z.record(z.string(), z.array(z.string())).exactOptional() })
  .openapi({ required: [] })
  .openapi('ControllersAdvisoriesSystemsResponse')

const ControllersAdvisoryDetailAttributesSchema = z
  .object({
    cves: z.array(z.string()).exactOptional(),
    description: z.string().exactOptional(),
    fixes: z.string().exactOptional(),
    modified_date: z.string().exactOptional(),
    packages: z.record(z.string(), z.string()).exactOptional(),
    public_date: z.string().exactOptional(),
    references: z.array(z.string()).exactOptional(),
    severity: z.int().exactOptional(),
    solution: z.string().exactOptional(),
    synopsis: z.string().exactOptional(),
    topic: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersAdvisoryDetailAttributes')

const ControllersAdvisoryDetailItemSchema = z
  .object({
    attributes: ControllersAdvisoryDetailAttributesSchema.exactOptional(),
    id: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersAdvisoryDetailItem')

const ControllersAdvisoryDetailResponseSchema = z
  .object({ data: ControllersAdvisoryDetailItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ControllersAdvisoryDetailResponse')

const ControllersAdvisoryInlineItemSchema = z
  .object({
    advisory_type: z.int().exactOptional(),
    applicable_systems: z.int().exactOptional(),
    cve_count: z.int().exactOptional(),
    description: z.string().exactOptional(),
    id: z.string().exactOptional(),
    public_date: z.string().exactOptional(),
    severity: z.int().exactOptional(),
    synopsis: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersAdvisoryInlineItem')

const ControllersSystemItemAttributesSchema = z
  .object({
    created: z.string().exactOptional(),
    culled_timestamp: z.string().exactOptional(),
    display_name: z.string().exactOptional(),
    insights_id: z.string().exactOptional(),
    last_evaluation: z.string().exactOptional(),
    last_upload: z.string().exactOptional(),
    os_major: z.string().exactOptional(),
    os_minor: z.string().exactOptional(),
    os_name: z.string().exactOptional(),
    other_count: z.int().exactOptional(),
    packages_installed: z.int().exactOptional(),
    packages_updatable: z.int().exactOptional(),
    rhba_count: z.int().exactOptional(),
    rhea_count: z.int().exactOptional(),
    rhsa_count: z.int().exactOptional(),
    rhsm: z.string().exactOptional(),
    stale: z.boolean().exactOptional(),
    stale_timestamp: z.string().exactOptional(),
    stale_warning_timestamp: z.string().exactOptional(),
    third_party: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersSystemItemAttributes')

const ControllersSystemItemSchema = z
  .object({
    attributes: ControllersSystemItemAttributesSchema.exactOptional(),
    id: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersSystemItem')

const ControllersAdvisorySystemsResponseSchema = z
  .object({
    data: z.array(ControllersSystemItemSchema).exactOptional(),
    links: ControllersLinksSchema.exactOptional(),
    meta: ControllersListMetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersAdvisorySystemsResponse')

const ControllersPackageDetailAttributesSchema = z
  .object({
    advisory_id: z.string().exactOptional(),
    description: z.string().exactOptional(),
    name: z.string().exactOptional(),
    summary: z.string().exactOptional(),
    version: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersPackageDetailAttributes')

const ControllersPackageDetailItemSchema = z
  .object({
    attributes: ControllersPackageDetailAttributesSchema.exactOptional(),
    id: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersPackageDetailItem')

const ControllersPackageDetailResponseSchema = z
  .object({ data: ControllersPackageDetailItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ControllersPackageDetailResponse')

const ControllersPackageItemSchema = z
  .object({
    name: z.string().exactOptional(),
    summary: z.string().exactOptional(),
    systems_installed: z.int().exactOptional(),
    systems_updatable: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersPackageItem')

const ControllersPackageSystemItemSchema = z
  .object({
    available_evra: z.string().exactOptional(),
    display_name: z.string().exactOptional(),
    id: z.string().exactOptional(),
    installed_evra: z.string().exactOptional(),
    updatable: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersPackageSystemItem')

const ControllersPackageSystemsResponseSchema = z
  .object({
    data: z.array(ControllersPackageSystemItemSchema).exactOptional(),
    links: ControllersLinksSchema.exactOptional(),
    meta: ControllersListMetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersPackageSystemsResponse')

const ControllersPackageVersionItemSchema = z
  .object({ evra: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ControllersPackageVersionItem')

const ControllersPackageVersionsResponseSchema = z
  .object({
    data: z.array(ControllersPackageVersionItemSchema).exactOptional(),
    links: ControllersLinksSchema.exactOptional(),
    meta: ControllersListMetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersPackageVersionsResponse')

const ControllersPackagesResponseSchema = z
  .object({
    data: z.array(ControllersPackageItemSchema).exactOptional(),
    links: ControllersLinksSchema.exactOptional(),
    meta: ControllersListMetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersPackagesResponse')

const ControllersSystemAdvisoriesDBLookupSchema = z
  .object({
    advisory_type: z.int().exactOptional(),
    cve_count: z.int().exactOptional(),
    description: z.string().exactOptional(),
    id: z.string().exactOptional(),
    public_date: z.string().exactOptional(),
    severity: z.int().exactOptional(),
    synopsis: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersSystemAdvisoriesDBLookup')

const ControllersSystemAdvisoryItemAttributesSchema = z
  .object({
    advisory_type: z.int().exactOptional(),
    cve_count: z.int().exactOptional(),
    description: z.string().exactOptional(),
    public_date: z.string().exactOptional(),
    severity: z.int().exactOptional(),
    synopsis: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersSystemAdvisoryItemAttributes')

const ControllersSystemAdvisoryItemSchema = z
  .object({
    attributes: ControllersSystemAdvisoryItemAttributesSchema.exactOptional(),
    id: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersSystemAdvisoryItem')

const ControllersSystemAdvisoriesResponseSchema = z
  .object({
    data: z
      .array(ControllersSystemAdvisoryItemSchema)
      .exactOptional()
      .openapi({ description: 'advisories items' }),
    links: ControllersLinksSchema.exactOptional(),
    meta: ControllersListMetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersSystemAdvisoriesResponse')

const ControllersSystemDetailResponseSchema = z
  .object({ data: ControllersSystemItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ControllersSystemDetailResponse')

const ControllersSystemInlineItemSchema = z
  .object({
    created: z.string().exactOptional(),
    culled_timestamp: z.string().exactOptional(),
    display_name: z.string().exactOptional(),
    id: z.string().exactOptional(),
    insights_id: z.string().exactOptional(),
    last_evaluation: z.string().exactOptional(),
    last_upload: z.string().exactOptional(),
    os_major: z.string().exactOptional(),
    os_minor: z.string().exactOptional(),
    os_name: z.string().exactOptional(),
    other_count: z.int().exactOptional(),
    packages_installed: z.int().exactOptional(),
    packages_updatable: z.int().exactOptional(),
    rhba_count: z.int().exactOptional(),
    rhea_count: z.int().exactOptional(),
    rhsa_count: z.int().exactOptional(),
    rhsm: z.string().exactOptional(),
    stale: z.boolean().exactOptional(),
    stale_timestamp: z.string().exactOptional(),
    stale_warning_timestamp: z.string().exactOptional(),
    third_party: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersSystemInlineItem')

const ModelsPackageUpdateSchema = z
  .object({ advisory: z.string().exactOptional(), evra: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ModelsPackageUpdate')

const ControllersSystemPackageDataSchema = z
  .object({
    description: z.string().exactOptional(),
    evra: z.string().exactOptional(),
    name: z.string().exactOptional(),
    summary: z.string().exactOptional(),
    updatable: z.boolean().exactOptional(),
    updates: z.array(ModelsPackageUpdateSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersSystemPackageData')

const ControllersSystemPackageInlineSchema = z
  .object({
    description: z.string().exactOptional(),
    evra: z.string().exactOptional(),
    latest_evra: z.string().exactOptional(),
    name: z.string().exactOptional(),
    summary: z.string().exactOptional(),
    updatable: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersSystemPackageInline')

const ControllersSystemPackageResponseSchema = z
  .object({
    data: z.array(ControllersSystemPackageDataSchema).exactOptional(),
    links: ControllersLinksSchema.exactOptional(),
    meta: ControllersListMetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersSystemPackageResponse')

const ControllersSystemsAdvisoriesRequestSchema = z
  .object({
    advisories: z.array(z.string()).exactOptional(),
    systems: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersSystemsAdvisoriesRequest')

const ControllersSystemsAdvisoriesResponseSchema = z
  .object({ data: z.record(z.string(), z.array(z.string())).exactOptional() })
  .openapi({ required: [] })
  .openapi('ControllersSystemsAdvisoriesResponse')

const ControllersSystemsResponseSchema = z
  .object({
    data: z.array(ControllersSystemItemSchema).exactOptional(),
    links: ControllersLinksSchema.exactOptional(),
    meta: ControllersListMetaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ControllersSystemsResponse')

const RhIdentitySecurityScheme = { in: 'header', name: 'x-rh-identity', type: 'apiKey' }

export const getApiPatchV1AdvisoriesRoute = createRoute({
  method: 'get',
  path: '/api/patch/v1/advisories',
  summary: 'Show me all applicable advisories for all my systems',
  description: 'Show me all applicable advisories for all my systems',
  operationId: 'listAdvisories',
  request: {
    query: z.object({
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
            description: 'Limit for paging, set -1 to return all',
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
        .exactOptional()
        .openapi({
          param: {
            description: 'Offset for paging',
            in: 'query',
            name: 'offset',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .enum(['id', 'name', 'advisory_type', 'synopsis', 'public_date', 'applicable_systems'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort field',
            in: 'query',
            name: 'sort',
            schema: {
              enum: [
                'id',
                'name',
                'advisory_type',
                'synopsis',
                'public_date',
                'applicable_systems',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Find matching text',
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[id]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter ',
            in: 'query',
            name: 'filter[id]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[description]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[description]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[public_date]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[public_date]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[synopsis]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[synopsis]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[advisory_type]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[advisory_type]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[severity]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[severity]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[applicable_systems]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[applicable_systems]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Tag filter',
            explode: true,
            in: 'query',
            name: 'tags',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      'filter[system_profile][sap_system]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter only SAP systems',
            in: 'query',
            name: 'filter[system_profile][sap_system]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[system_profile][sap_sids][in]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter systems by their SAP SIDs',
            explode: true,
            in: 'query',
            name: 'filter[system_profile][sap_sids][in]',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ControllersAdvisoriesResponseSchema } },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const getApiPatchV1AdvisoriesAdvisoryIdRoute = createRoute({
  method: 'get',
  path: '/api/patch/v1/advisories/{advisory_id}',
  summary: 'Show me details an advisory by given advisory name',
  description: 'Show me details an advisory by given advisory name',
  operationId: 'detailAdvisory',
  request: {
    params: z.object({
      advisory_id: z
        .string()
        .openapi({
          param: {
            description: 'Advisory ID',
            in: 'path',
            name: 'advisory_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ControllersAdvisoryDetailResponseSchema } },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const getApiPatchV1AdvisoriesAdvisoryIdSystemsRoute = createRoute({
  method: 'get',
  path: '/api/patch/v1/advisories/{advisory_id}/systems',
  summary: 'Show me systems on which the given advisory is applicable',
  description: 'Show me systems on which the given advisory is applicable',
  operationId: 'listAdvisorySystems',
  request: {
    params: z.object({
      advisory_id: z
        .string()
        .openapi({
          param: {
            description: 'Advisory ID',
            in: 'path',
            name: 'advisory_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
            description: 'Limit for paging, set -1 to return all',
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
        .exactOptional()
        .openapi({
          param: {
            description: 'Offset for paging',
            in: 'query',
            name: 'offset',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .enum([
          'id',
          'display_name',
          'last_evaluation',
          'last_upload',
          'rhsa_count',
          'rhba_count',
          'rhea_count',
          'other_count',
          'stale',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort field',
            in: 'query',
            name: 'sort',
            schema: {
              enum: [
                'id',
                'display_name',
                'last_evaluation',
                'last_upload',
                'rhsa_count',
                'rhba_count',
                'rhea_count',
                'other_count',
                'stale',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Find matching text',
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[id]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[id]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[insights_id]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[insights_id]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[display_name]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[display_name]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[last_evaluation]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[last_evaluation]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[last_upload]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[last_upload]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[rhsa_count]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[rhsa_count]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[rhba_count]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[rhba_count]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[rhea_count]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[rhea_count]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[other_count]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[other_count]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[stale]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[stale]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[stale_timestamp]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[stale_timestamp]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[stale_warning_timestamp]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[stale_warning_timestamp]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[culled_timestamp]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[culled_timestamp]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[created]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[created]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Tag filter',
            explode: true,
            in: 'query',
            name: 'tags',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      'filter[system_profile][sap_system]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter only SAP systems',
            in: 'query',
            name: 'filter[system_profile][sap_system]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[system_profile][sap_sids][in]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter systems by their SAP SIDs',
            explode: true,
            in: 'query',
            name: 'filter[system_profile][sap_sids][in]',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ControllersAdvisorySystemsResponseSchema } },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const getApiPatchV1ExportAdvisoriesRoute = createRoute({
  method: 'get',
  path: '/api/patch/v1/export/advisories',
  summary: 'Export applicable advisories for all my systems',
  description: 'Export applicable advisories for all my systems',
  operationId: 'exportAdvisories',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Find matching text',
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[id]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[id]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[description]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[description]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[public_date]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[public_date]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[synopsis]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[synopsis]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[advisory_type]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[advisory_type]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[severity]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[severity]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[applicable_systems]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[applicable_systems]',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(ControllersAdvisoryInlineItemSchema) },
        'text/csv': { schema: z.array(ControllersAdvisoryInlineItemSchema) },
      },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const getApiPatchV1ExportAdvisoriesAdvisoryIdSystemsRoute = createRoute({
  method: 'get',
  path: '/api/patch/v1/export/advisories/{advisory_id}/systems',
  summary: 'Export systems for my account',
  description: 'Export systems for my account',
  operationId: 'exportAdvisorySystems',
  request: {
    params: z.object({
      advisory_id: z
        .string()
        .openapi({
          param: {
            description: 'Advisory ID',
            in: 'path',
            name: 'advisory_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Find matching text',
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[id]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[id]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[display_name]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[display_name]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[last_evaluation]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[last_evaluation]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[last_upload]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[last_upload]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[rhsa_count]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[rhsa_count]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[rhba_count]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[rhba_count]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[rhea_count]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[rhea_count]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[other_count]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[other_count]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[stale]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[stale]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[packages_installed]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[packages_installed]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[packages_updatable]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[packages_updatable]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[system_profile][sap_system]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter only SAP systems',
            in: 'query',
            name: 'filter[system_profile][sap_system]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[system_profile][sap_sids][in]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter systems by their SAP SIDs',
            explode: true,
            in: 'query',
            name: 'filter[system_profile][sap_sids][in]',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Tag filter',
            explode: true,
            in: 'query',
            name: 'tags',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(ControllersSystemInlineItemSchema) },
        'text/csv': { schema: z.array(ControllersSystemInlineItemSchema) },
      },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const getApiPatchV1ExportPackagesRoute = createRoute({
  method: 'get',
  path: '/api/patch/v1/export/packages',
  summary: 'Show me all installed packages across my systems',
  description: 'Show me all installed packages across my systems',
  operationId: 'exportPackages',
  request: {
    query: z.object({
      sort: z
        .enum(['id', 'name', 'systems_installed', 'systems_updatable'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort field',
            in: 'query',
            name: 'sort',
            schema: {
              enum: ['id', 'name', 'systems_installed', 'systems_updatable'],
              type: 'string',
            },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Find matching text',
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[name]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[name]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[systems_installed]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[systems_installed]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[systems_updatable]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[systems_updatable]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[summary]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[summary]',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(ControllersPackageItemSchema) },
        'text/csv': { schema: z.array(ControllersPackageItemSchema) },
      },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const getApiPatchV1ExportPackagesPackageNameSystemsRoute = createRoute({
  method: 'get',
  path: '/api/patch/v1/export/packages/{package_name}/systems',
  summary: 'Show me all my systems which have a package installed',
  description: 'Show me all my systems which have a package installed',
  operationId: 'exportPackageSystems',
  request: {
    params: z.object({
      package_name: z
        .string()
        .openapi({
          param: {
            description: 'Package name',
            in: 'path',
            name: 'package_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'filter[system_profile][sap_system]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter only SAP systems',
            in: 'query',
            name: 'filter[system_profile][sap_system]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[system_profile][sap_sids][in]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter systems by their SAP SIDs',
            explode: true,
            in: 'query',
            name: 'filter[system_profile][sap_sids][in]',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Tag filter',
            explode: true,
            in: 'query',
            name: 'tags',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ControllersPackageSystemItemSchema) } },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const getApiPatchV1ExportSystemsRoute = createRoute({
  method: 'get',
  path: '/api/patch/v1/export/systems',
  summary: 'Export systems for my account',
  description: 'Export systems for my account',
  operationId: 'exportSystems',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Find matching text',
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[id]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[id]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[display_name]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[display_name]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[last_evaluation]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[last_evaluation]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[last_upload]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[last_upload]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[rhsa_count]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[rhsa_count]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[rhba_count]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[rhba_count]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[rhea_count]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[rhea_count]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[other_count]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[other_count]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[stale]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[stale]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[packages_installed]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[packages_installed]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[packages_updatable]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[packages_updatable]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[system_profile][sap_system]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter only SAP systems',
            in: 'query',
            name: 'filter[system_profile][sap_system]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[system_profile][sap_sids][in]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter systems by their SAP SIDs',
            explode: true,
            in: 'query',
            name: 'filter[system_profile][sap_sids][in]',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Tag filter',
            explode: true,
            in: 'query',
            name: 'tags',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(ControllersSystemInlineItemSchema) },
        'text/csv': { schema: z.array(ControllersSystemInlineItemSchema) },
      },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const getApiPatchV1ExportSystemsInventoryIdAdvisoriesRoute = createRoute({
  method: 'get',
  path: '/api/patch/v1/export/systems/{inventory_id}/advisories',
  summary: 'Export applicable advisories for all my systems',
  description: 'Export applicable advisories for all my systems',
  operationId: 'exportSystemAdvisories',
  request: {
    params: z.object({
      inventory_id: z
        .string()
        .openapi({
          param: {
            description: 'Inventory ID',
            in: 'path',
            name: 'inventory_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Find matching text',
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[id]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[id]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[description]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[description]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[public_date]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[public_date]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[synopsis]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[synopsis]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[advisory_type]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[advisory_type]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[severity]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[severity]',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(ControllersSystemAdvisoriesDBLookupSchema) },
        'text/csv': { schema: z.array(ControllersSystemAdvisoriesDBLookupSchema) },
      },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const getApiPatchV1ExportSystemsInventoryIdPackagesRoute = createRoute({
  method: 'get',
  path: '/api/patch/v1/export/systems/{inventory_id}/packages',
  summary: 'Show me details about a system packages by given inventory id',
  description: 'Show me details about a system packages by given inventory id',
  operationId: 'exportSystemPackages',
  request: {
    params: z.object({
      inventory_id: z
        .string()
        .openapi({
          param: {
            description: 'Inventory ID',
            in: 'path',
            name: 'inventory_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Find matching text',
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[name]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[name]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[description]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[description]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[evra]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[evra]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[summary]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[summary]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[updatable]': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[updatable]',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ControllersSystemPackageInlineSchema) } },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const getApiPatchV1PackagesIndexRoute = createRoute({
  method: 'get',
  path: '/api/patch/v1/packages/',
  summary: 'Show me all installed packages across my systems',
  description: 'Show me all installed packages across my systems',
  operationId: 'listPackages',
  request: {
    query: z.object({
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
            description: 'Limit for paging, set -1 to return all',
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
        .exactOptional()
        .openapi({
          param: {
            description: 'Offset for paging',
            in: 'query',
            name: 'offset',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .enum(['id', 'name', 'systems_installed', 'systems_updatable'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort field',
            in: 'query',
            name: 'sort',
            schema: {
              enum: ['id', 'name', 'systems_installed', 'systems_updatable'],
              type: 'string',
            },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Find matching text',
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[name]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[name]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[systems_installed]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[systems_installed]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[systems_updatable]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[systems_updatable]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[summary]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[summary]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Tag filter',
            explode: true,
            in: 'query',
            name: 'tags',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      'filter[system_profile][sap_system]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter only SAP systems',
            in: 'query',
            name: 'filter[system_profile][sap_system]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[system_profile][sap_sids][in]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter systems by their SAP SIDs',
            explode: true,
            in: 'query',
            name: 'filter[system_profile][sap_sids][in]',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ControllersPackagesResponseSchema } },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const getApiPatchV1PackagesPackageNameRoute = createRoute({
  method: 'get',
  path: '/api/patch/v1/packages/{package_name}',
  summary: 'Show me metadata of selected package',
  description: 'Show me metadata of selected package',
  operationId: 'LatestPackage',
  request: {
    params: z.object({
      package_name: z
        .string()
        .openapi({
          param: {
            description: 'package_name - latest, nevra - exact version',
            in: 'path',
            name: 'package_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ControllersPackageDetailResponseSchema } },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const getApiPatchV1PackagesPackageNameSystemsRoute = createRoute({
  method: 'get',
  path: '/api/patch/v1/packages/{package_name}/systems',
  summary: 'Show me all my systems which have a package installed',
  description: 'Show me all my systems which have a package installed',
  operationId: 'packageSystems',
  request: {
    query: z.object({
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
            description: 'Limit for paging, set -1 to return all',
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
        .exactOptional()
        .openapi({
          param: {
            description: 'Offset for paging',
            in: 'query',
            name: 'offset',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Tag filter',
            explode: true,
            in: 'query',
            name: 'tags',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      'filter[system_profile][sap_system]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter only SAP systems',
            in: 'query',
            name: 'filter[system_profile][sap_system]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[system_profile][sap_sids][in]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter systems by their SAP SIDs',
            explode: true,
            in: 'query',
            name: 'filter[system_profile][sap_sids][in]',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      package_name: z
        .string()
        .openapi({
          param: {
            description: 'Package name',
            in: 'path',
            name: 'package_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ControllersPackageSystemsResponseSchema } },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const getApiPatchV1PackagesPackageNameVersionsRoute = createRoute({
  method: 'get',
  path: '/api/patch/v1/packages/{package_name}/versions',
  summary: 'Show me all package versions installed on some system',
  description: 'Show me all package versions installed on some system',
  operationId: 'packageVersions',
  request: {
    query: z.object({
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
            description: 'Limit for paging, set -1 to return all',
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
        .exactOptional()
        .openapi({
          param: {
            description: 'Offset for paging',
            in: 'query',
            name: 'offset',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      package_name: z
        .string()
        .openapi({
          param: {
            description: 'Package name',
            in: 'path',
            name: 'package_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ControllersPackageVersionsResponseSchema } },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const getApiPatchV1SystemsRoute = createRoute({
  method: 'get',
  path: '/api/patch/v1/systems',
  summary: 'Show me all my systems',
  description: 'Show me all my systems',
  operationId: 'listSystems',
  request: {
    query: z.object({
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
            description: 'Limit for paging, set -1 to return all',
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
        .exactOptional()
        .openapi({
          param: {
            description: 'Offset for paging',
            in: 'query',
            name: 'offset',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .enum([
          'id',
          'display_name',
          'last_evaluation',
          'last_upload',
          'rhsa_count',
          'rhba_count',
          'rhea_count',
          'other_count',
          'stale',
          'packages_installed',
          'packages_updatable',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort field',
            in: 'query',
            name: 'sort',
            schema: {
              enum: [
                'id',
                'display_name',
                'last_evaluation',
                'last_upload',
                'rhsa_count',
                'rhba_count',
                'rhea_count',
                'other_count',
                'stale',
                'packages_installed',
                'packages_updatable',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Find matching text',
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[insights_id]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[insights_id]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[id]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[id]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[display_name]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[display_name]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[last_evaluation]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[last_evaluation]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[last_upload]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[last_upload]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[rhsa_count]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[rhsa_count]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[rhba_count]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[rhba_count]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[rhea_count]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[rhea_count]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[other_count]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[other_count]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[stale]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[stale]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[packages_installed]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[packages_installed]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[packages_updatable]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[packages_updatable]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[stale_timestamp]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[stale_timestamp]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[stale_warning_timestamp]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[stale_warning_timestamp]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[culled_timestamp]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[culled_timestamp]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[created]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[created]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Tag filter',
            explode: true,
            in: 'query',
            name: 'tags',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      'filter[system_profile][sap_system]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter only SAP systems',
            in: 'query',
            name: 'filter[system_profile][sap_system]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[system_profile][sap_sids][in]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter systems by their SAP SIDs',
            explode: true,
            in: 'query',
            name: 'filter[system_profile][sap_sids][in]',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ControllersSystemsResponseSchema } },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const getApiPatchV1SystemsInventoryIdRoute = createRoute({
  method: 'get',
  path: '/api/patch/v1/systems/{inventory_id}',
  summary: 'Show me details about a system by given inventory id',
  description: 'Show me details about a system by given inventory id',
  operationId: 'detailSystem',
  request: {
    params: z.object({
      inventory_id: z
        .string()
        .openapi({
          param: {
            description: 'Inventory ID',
            in: 'path',
            name: 'inventory_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ControllersSystemDetailResponseSchema } },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const deleteApiPatchV1SystemsInventoryIdRoute = createRoute({
  method: 'delete',
  path: '/api/patch/v1/systems/{inventory_id}',
  summary: 'Delete system by inventory id',
  description: 'Delete system by inventory id',
  operationId: 'deletesystem',
  request: {
    params: z.object({
      inventory_id: z
        .string()
        .openapi({
          param: {
            description: 'Inventory ID',
            in: 'path',
            name: 'inventory_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Ok', content: {} } },
  security: [{ RhIdentity: [] }],
})

export const getApiPatchV1SystemsInventoryIdAdvisoriesRoute = createRoute({
  method: 'get',
  path: '/api/patch/v1/systems/{inventory_id}/advisories',
  summary: 'Show me advisories for a system by given inventory id',
  description: 'Show me advisories for a system by given inventory id',
  operationId: 'listSystemAdvisories',
  request: {
    params: z.object({
      inventory_id: z
        .string()
        .openapi({
          param: {
            description: 'Inventory ID',
            in: 'path',
            name: 'inventory_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
            description: 'Limit for paging, set -1 to return all',
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
        .exactOptional()
        .openapi({
          param: {
            description: 'Offset for paging',
            in: 'query',
            name: 'offset',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .enum(['id', 'name', 'type', 'synopsis', 'public_date'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort field',
            in: 'query',
            name: 'sort',
            schema: { enum: ['id', 'name', 'type', 'synopsis', 'public_date'], type: 'string' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Find matching text',
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[id]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[id]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[description]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[description]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[public_date]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[public_date]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[synopsis]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[synopsis]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[advisory_type]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[advisory_type]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[severity]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[severity]',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ControllersSystemAdvisoriesResponseSchema } },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const getApiPatchV1SystemsInventoryIdPackagesRoute = createRoute({
  method: 'get',
  path: '/api/patch/v1/systems/{inventory_id}/packages',
  summary: 'Show me details about a system packages by given inventory id',
  description: 'Show me details about a system packages by given inventory id',
  operationId: 'systemPackages',
  request: {
    params: z.object({
      inventory_id: z
        .string()
        .openapi({
          param: {
            description: 'Inventory ID',
            in: 'path',
            name: 'inventory_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
            description: 'Limit for paging, set -1 to return all',
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
        .exactOptional()
        .openapi({
          param: {
            description: 'Offset for paging',
            in: 'query',
            name: 'offset',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Find matching text',
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[name]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[name]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[description]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[description]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[evra]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[evra]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[summary]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[summary]',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'filter[updatable]': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter',
            in: 'query',
            name: 'filter[updatable]',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ControllersSystemPackageResponseSchema } },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const postApiPatchV1ViewsAdvisoriesSystemsRoute = createRoute({
  method: 'post',
  path: '/api/patch/v1/views/advisories/systems',
  summary: 'View advisory-system pairs for selected systems and advisories',
  description: 'View advisory-system pairs for selected systems and advisories',
  operationId: 'viewAdvisoriesSystems',
  request: {
    body: {
      description: 'Request body',
      content: { 'application/json': { schema: ControllersSystemsAdvisoriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ControllersAdvisoriesSystemsResponseSchema } },
    },
  },
  security: [{ RhIdentity: [] }],
})

export const postApiPatchV1ViewsSystemsAdvisoriesRoute = createRoute({
  method: 'post',
  path: '/api/patch/v1/views/systems/advisories',
  summary: 'View system-advisory pairs for selected systems and advisories',
  description: 'View system-advisory pairs for selected systems and advisories',
  operationId: 'viewSystemsAdvisories',
  request: {
    body: {
      description: 'Request body',
      content: { 'application/json': { schema: ControllersSystemsAdvisoriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ControllersSystemsAdvisoriesResponseSchema } },
    },
  },
  security: [{ RhIdentity: [] }],
})
