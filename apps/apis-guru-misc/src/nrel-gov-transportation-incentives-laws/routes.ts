import { createRoute, z } from '@hono/zod-openapi'

const CategorySchema = z
  .object({
    category_type: z
      .string()
      .openapi({ description: 'The type of category. (E.g. tech, incentive, regulation, user)' }),
    code: z.string().openapi({ description: 'The code used to identify the category' }),
    title: z.string().openapi({ description: 'The full name of the category' }),
  })
  .openapi({
    description: 'A category that the law applies to',
    required: ['code', 'title', 'category_type'],
  })
  .openapi('Category')

const InputsSchema = z
  .object({})
  .openapi({ description: 'The parameters that were passed to the API' })
  .openapi('Inputs')

const MetadataSchema = z
  .object({
    count: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'If the request returns an array of results, this is the number of results returned in the array',
      }),
    version: z.string().openapi({ description: 'This is the version of the api' }),
  })
  .openapi({ description: 'The identifying metadata.', required: ['version'] })
  .openapi('Metadata')

const FullCategorySchema = z
  .object({
    category_type: z
      .string()
      .openapi({ description: 'The type of category. (E.g. tech, incentive, regulation, user)' }),
    code: z.string().openapi({ description: 'The code used to identify the category' }),
    help_text: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short description of what the law category encompasses' }),
    sort_order: z.string().openapi({ description: 'The sort order for the categories' }),
    title: z.string().openapi({ description: 'The full name of the category' }),
  })
  .openapi({ required: ['code', 'title', 'category_type', 'sort_order'] })
  .openapi('FullCategory')

const CategoryResultsSchema = z
  .object({
    inputs: InputsSchema,
    metadata: MetadataSchema,
    result: z
      .array(FullCategorySchema)
      .openapi({ description: 'The array of law categories returned' }),
  })
  .openapi({ required: ['metadata', 'inputs', 'result'] })
  .openapi('CategoryResults')

const PocSchema = z
  .object({
    agency: z
      .string()
      .exactOptional()
      .openapi({ description: 'The agency that the contact represents' }),
    email: z.string().exactOptional().openapi({ description: 'The contacts email address' }),
    fax: z.string().exactOptional().openapi({ description: 'The contacts fax number' }),
    name: z.string().openapi({ description: 'The name of the contact' }),
    state: z
      .string()
      .openapi({
        description:
          "The state in which the contact is based ('US' for Federal laws and 'DC' for the District of Columbia)",
      }),
    telephone: z.string().exactOptional().openapi({ description: 'The contacts phone number' }),
    title: z.string().exactOptional().openapi({ description: 'The job title of the contact' }),
    web_page: z.string().exactOptional().openapi({ description: 'The contacts webpage' }),
  })
  .openapi({ required: ['name', 'state'] })
  .openapi('Poc')

const LawReferenceSchema = z
  .object({
    description: z.string().openapi({ description: 'The context of the reference' }),
    url: z.string().openapi({ description: 'The url linking to the reference.' }),
  })
  .openapi({
    description:
      'The URL associated with any bill or legislative reference included in the description.',
    required: ['description', 'url'],
  })
  .openapi('LawReference')

const LawTopicsSchema = z
  .object({
    id: z.int().openapi({ description: 'The database id of the law topic' }),
    sort_order: z.int().openapi({ description: 'The sort order of the law topic' }),
    title: z.string().openapi({ description: 'The name of the law topic' }),
  })
  .openapi({
    description:
      'For local incentive/regulation descriptions, the category that the incentive/regulation falls under, described below: Infrastructure Requirements, Vehicle Purchase and Infrastructure Development Incentives, Fuel Use Incentives, Parking Incentives, Technical Assistance, Vehicle Acquisition Requirements, Promotion Initiatives, Idle Reduction Requirements, Renewable Fuels Mandates and Standards',
    required: ['id', 'title', 'sort_order'],
  })
  .openapi('LawTopics')

const LawTypeSchema = z
  .object({
    code: z.string().openapi({ description: 'The code used to identify the law type' }),
    id: z.int().openapi({ description: 'The id of the law type' }),
    title: z.string().openapi({ description: 'The name of the law type' }),
  })
  .openapi({
    description:
      'The category that the incentive/law/regulation falls under, described below: -State Incentives, -Laws and Regulations, -Utility/Private Incentives',
    required: ['id', 'title', 'code'],
  })
  .openapi('LawType')

const LawSchema = z
  .object({
    agency: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The agency with primary responsibility for federal incentives/regulations.',
      }),
    amended_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date the incentive/law/regulation was updated through new legislation or rulemaking.',
      }),
    archived_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date that an incentive/law/regulation is no longer relevant to the database. This may include longstanding Executive Orders or laws requiring legislative studies that have been completed.',
      }),
    categories: z
      .array(CategorySchema)
      .openapi({ description: 'The various law categories that apply to this law' }),
    contacts: z
      .array(PocSchema)
      .exactOptional()
      .openapi({
        description: 'The contacts for the given law, returned only if the parameter poc is true',
      }),
    enacted_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date the enacting legislation (if applicable) was signed into law.',
      }),
    expired_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date the incentive/law/regulation is set to end.' }),
    id: z
      .int()
      .openapi({ description: 'A unique identifier for this specific incentive/law/regulation.' }),
    is_recent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The true or false value used to distinguish between recent federal executive actions (TRUE) and active incentives/laws/regulations (FALSE).',
      }),
    plaintext: z
      .string()
      .openapi({
        description:
          'Description of the incentive/law/regulation, including applicable legislative references, in <a href="https://guides.github.com/features/mastering-markdown/">markdown formatting</a>',
      }),
    recent_update_or_new: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An indicator if the last significant update was an update or the laws creation.',
      }),
    references: z
      .array(LawReferenceSchema)
      .openapi({
        description:
          'The URL associated with any bill or legislative reference included in the description.',
      }),
    repealed_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date legislation is enacted or a rulemaking is finalized to repeal the incentive/law/regulation.',
      }),
    seq_num: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The numerical value assigned to a description to show the order in which it is displayed online within a jurisdiction (state).',
      }),
    significant_update_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the last significant update to the law was made.' }),
    state: z
      .string()
      .openapi({
        description: 'The state in which the incentive/law/regulation was enacted and is active.',
      }),
    text: z
      .string()
      .openapi({
        description:
          'Description of the incentive/law/regulation, including applicable legislative references, html formated.',
      }),
    title: z
      .string()
      .openapi({
        description: 'The brief title assigned to the incentive/law/regulation description.',
      }),
    topics: z
      .array(LawTopicsSchema)
      .openapi({
        description:
          'For local incentive/regulation descriptions, the category that the incentive/regulation falls under, described below: Infrastructure Requirements, Vehicle Purchase and Infrastructure Development Incentives, Fuel Use Incentives, Parking Incentives, Technical Assistance, Vehicle Acquisition Requirements, Promotion Initiatives, Idle Reduction Requirements, Renewable Fuels Mandates and Standards',
      }),
    type: z
      .string()
      .openapi({
        description:
          'The category that the incentive/law/regulation falls under, described below: -State Incentives, -Laws and Regulations, -Utility/Private Incentives',
      }),
    types: z.array(LawTypeSchema).openapi({ description: 'The types that apply to this law' }),
  })
  .openapi({
    description: 'This is a Law',
    required: [
      'id',
      'state',
      'title',
      'text',
      'plaintext',
      'type',
      'categories',
      'types',
      'references',
      'topics',
    ],
  })
  .openapi('Law')

const LawResultSchema = z
  .object({ inputs: InputsSchema, metadata: MetadataSchema, result: LawSchema })
  .openapi({ required: ['metadata', 'inputs', 'result'] })
  .openapi('LawResult')

const LawsResponseSchema = z
  .object({
    inputs: InputsSchema,
    metadata: MetadataSchema,
    result: z.array(LawSchema).openapi({ description: 'The array of laws returned' }),
  })
  .openapi({ required: ['metadata', 'inputs', 'result'] })
  .openapi('LawsResponse')

const PocResultsSchema = z
  .object({
    inputs: InputsSchema,
    metadata: MetadataSchema,
    result: z
      .array(PocSchema)
      .openapi({ description: 'The array of Points of Contacts for the state requested' }),
  })
  .openapi({ required: ['metadata', 'inputs', 'result'] })
  .openapi('PocResults')

export const getV1OutputFormatRoute = createRoute({
  method: 'get',
  path: '/v1.{output_format}',
  summary: 'Return a full list of laws and incentives that match your query.',
  operationId: 'transportation_incentives_laws_all',
  request: {
    params: z.object({
      output_format: z
        .enum(['json', 'xml', 'csv'])
        .default('json')
        .openapi({
          param: {
            description: 'Response format',
            in: 'path',
            name: 'output_format',
            required: true,
            schema: { default: 'json', enum: ['json', 'xml', 'csv'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      api_key: z
        .string()
        .default('DEMO_KEY')
        .openapi({
          param: {
            description: 'API Key',
            in: 'query',
            name: 'api_key',
            required: true,
            schema: { default: 'DEMO_KEY', type: 'string' },
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
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the number of laws returned',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      jurisdiction: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Return laws for the given Jurisdiction. Jurisdiction must be given as a two character state code (eg, 'CO' for Colorado). A single jurisdiction, or a comma-separate list of multiple jurisdiction, may be given.  Use the code 'US' for federal laws and the code 'DC' for Washington D.C.",
            in: 'query',
            name: 'jurisdiction',
            required: false,
            schema: { type: 'string' },
          },
        }),
      technology: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Search by the technology type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'BIOD' for Biodiesel, 'ETH' for Ethanol / Flexible Fuel Vehicles, 'NG' for Natural Gas / Natural Gas Vehicles, 'LPG' for Liquefied Petroleum Gas (Propane) / Propane Vehicles, 'HY' for Hydrogen / Fuel Cell Electric Vehicles, 'ELEC' for All-Electric Vehicles (EVs), 'PHEV' for Plug-In Hybrid Electric Vehicles (PHEVs), 'HEV' for Hybrid Electric Vehicles (HEVs), 'NEVS' for Neighborhood Electric Vehicles (NEVs), 'RD' for Renewable Diesel, 'AFTMKTCONV' for Aftermarket Conversions, 'EFFEC' for Fuel Economy / Efficiency, 'IR' for Idle Reduction, 'AUTONOMOUS' for Connected and Autonomous Vehicles, and 'OTHER' for Other.",
            in: 'query',
            name: 'technology',
            required: false,
            schema: { type: 'string' },
          },
        }),
      incentive_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Search by the incentive type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'GNT' for Grants, 'TAX' for Tax Incentives, 'LOANS' for Loans and Leases, 'RBATE' for Rebates, 'EXEM' for Exemptions, 'TOU' for Time-of-Use Rate, and 'OTHER' for Other.",
            in: 'query',
            name: 'incentive_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      regulation_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Search by the regulation type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'REQ' for Acquisition / Fuel Use, 'DREST' for Driving / Idling, 'REGIS' for Registration / Licensing, 'EVFEE' for EV Registration Fee, 'FUEL' for Fuel Taxes, 'STD' for Fuel Production / Quality, 'RFS' for Renewable Fuel Standard / Mandate, 'AIRQEMISSIONS' for Air Quality / Emissions, 'CCEINIT' for Climate Change / Energy Initiatives, 'UTILITY' for Utility Definition, 'BUILD' for Building Codes, 'RTC' for Right-to-Charge, and 'OTHER' for Other.",
            in: 'query',
            name: 'regulation_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      user_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Search by the user type. A single type, or a comma-separate list of multiple types, may be given. Values and what they stand for are as follows: 'FLEET' for Commercial, 'GOV' for Government Entity, 'TRIBAL' for Tribal Government, 'IND' for Personal Vehicle Owner or Driver, 'STATION' for Alternative Fuel Infrastructure Operator, 'AFP' for Alternative Fuel Producer, 'PURCH' for Alternative Fuel Purchaser, 'MAN' for Alternative Fuel Vehicle (AFV) Manufacturer or Retrofitter, 'MUD' for Multi-Unit Dwelling, 'TRANS' for Transit, and 'OTHER' for Other.",
            in: 'query',
            name: 'user_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      poc: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Include points of contacts in the return value.',
            in: 'query',
            name: 'poc',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      recent: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Return only recently added or updated laws and incentives',
            in: 'query',
            name: 'recent',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      expired: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              "The 'true' value returns only expired, repealed, or archived laws and incentives. The default 'false' value returns only current laws and incentives.",
            in: 'query',
            name: 'expired',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      law_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Search by the law type. A single type, or a comma-separate list of multiple types, may be given. Values are as follows: 'STATEINC' for State Incentives, 'UPINC ' for Utility/Private Incentives, 'LAWREG' for Laws and Regulations, 'INC' for Incentives, 'PROG' for Programs, 'LUP' for Last Updated, 'OVIEW' for Overview, and 'HILITE' for Highlights.",
            in: 'query',
            name: 'law_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      keyword: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search laws by keyword in title or text.',
            in: 'query',
            name: 'keyword',
            required: false,
            schema: { type: 'string' },
          },
        }),
      local: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only local examples of laws and incentives.',
            in: 'query',
            name: 'local',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful request', content: { '*/*': { schema: LawsResponseSchema } } },
  },
})

export const getV1CategoryListOutputFormatRoute = createRoute({
  method: 'get',
  path: '/v1/category-list.{output_format}',
  summary: 'Return the law categories for a given category type.',
  operationId: 'transportation_incentives_laws_categories',
  request: {
    params: z.object({
      output_format: z
        .enum(['json', 'xml'])
        .default('json')
        .openapi({
          param: {
            description: 'Response format',
            in: 'path',
            name: 'output_format',
            required: true,
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      api_key: z
        .string()
        .default('DEMO_KEY')
        .openapi({
          param: {
            description: 'API Key',
            in: 'query',
            name: 'api_key',
            required: true,
            schema: { default: 'DEMO_KEY', type: 'string' },
          },
        }),
      type: z
        .enum(['tech', 'user', 'regulation', 'incentive'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Search by the category type.',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['tech', 'user', 'regulation', 'incentive'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful request',
      content: { '*/*': { schema: CategoryResultsSchema } },
    },
  },
})

export const getV1PocsOutputFormatRoute = createRoute({
  method: 'get',
  path: '/v1/pocs.{output_format}',
  summary: 'Get the points of contact for a given jurisdiction.',
  operationId: 'transportation_incentives_laws_pocs',
  request: {
    params: z.object({
      output_format: z
        .enum(['json', 'xml'])
        .default('json')
        .openapi({
          param: {
            description: 'Response format',
            in: 'path',
            name: 'output_format',
            required: true,
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      api_key: z
        .string()
        .default('DEMO_KEY')
        .openapi({
          param: {
            description: 'API Key',
            in: 'query',
            name: 'api_key',
            required: true,
            schema: { default: 'DEMO_KEY', type: 'string' },
          },
        }),
      jurisdiction: z
        .string()
        .openapi({
          param: {
            description:
              "Return the points of contact for the given Jurisdiction. Jurisdiction must be given as a two character state code (eg, 'CO' for Colorado). A single jurisdiction, or a comma-separate list of multiple jurisdiction, may be given.  Use the code 'US' for federal laws and the code 'DC' for Washington D.C.",
            in: 'query',
            name: 'jurisdiction',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful request', content: { '*/*': { schema: PocResultsSchema } } },
  },
})

export const getV1IdOutputFormatRoute = createRoute({
  method: 'get',
  path: '/v1/{id}.{output_format}',
  summary: "Fetch the details of a specific law given the law's ID.",
  operationId: 'transportation_incentives_laws_id',
  request: {
    params: z.object({
      output_format: z
        .enum(['json', 'xml'])
        .default('json')
        .openapi({
          param: {
            description: 'Response format',
            in: 'path',
            name: 'output_format',
            required: true,
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
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
        .openapi({
          param: {
            description: 'The id of the law that you are searching',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      api_key: z
        .string()
        .default('DEMO_KEY')
        .openapi({
          param: {
            description: 'API Key',
            in: 'query',
            name: 'api_key',
            required: true,
            schema: { default: 'DEMO_KEY', type: 'string' },
          },
        }),
      poc: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Include points of contacts in the return value.',
            in: 'query',
            name: 'poc',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      expired: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              "The 'true' value returns a record no matter its status (current, expired, archived, or repealed). The default 'false' value returns only current laws and incentives.",
            in: 'query',
            name: 'expired',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful request', content: { '*/*': { schema: LawResultSchema } } },
  },
})
