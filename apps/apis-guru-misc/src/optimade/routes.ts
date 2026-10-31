import { createRoute, z } from '@hono/zod-openapi'

const AggregateSchema = z
  .enum(['ok', 'test', 'staging', 'no'])
  .openapi({ description: 'Enumeration of aggregate values', title: 'Aggregate' })
  .openapi('Aggregate')

const AssemblySchema = z
  .object({
    group_probabilities: z
      .array(z.number())
      .openapi({
        description:
          'Statistical probability of each group. It MUST have the same length as `sites_in_groups`.\nIt SHOULD sum to one.\nSee below for examples of how to specify the probability of the occurrence of a vacancy.\nThe possible reasons for the values not to sum to one are the same as already specified above for the `concentration` of each `species`.',
        title: 'Group Probabilities',
      }),
    sites_in_groups: z
      .array(z.array(z.int()))
      .openapi({
        description:
          'Index of the sites (0-based) that belong to each group for each assembly.\n\n- **Examples**:\n    - `[[1], [2]]`: two groups, one with the second site, one with the third.\n    - `[[1,2], [3]]`: one group with the second and third site, one with the fourth.',
        title: 'Sites In Groups',
      }),
  })
  .openapi({
    description:
      'A description of groups of sites that are statistically correlated.\n\n- **Examples** (for each entry of the assemblies list):\n    - `{"sites_in_groups": [[0], [1]], "group_probabilities: [0.3, 0.7]}`: the first site and the second site never occur at the same time in the unit cell.\n      Statistically, 30 % of the times the first site is present, while 70 % of the times the second site is present.\n    - `{"sites_in_groups": [[1,2], [3]], "group_probabilities: [0.3, 0.7]}`: the second and third site are either present together or not present; they form the first group of atoms for this assembly.\n      The second group is formed by the fourth site. Sites of the first group (the second and the third) are never present at the same time as the fourth site.\n      30 % of times sites 1 and 2 are present (and site 3 is absent); 70 % of times site 3 is present (and sites 1 and 2 are absent).',
    required: ['sites_in_groups', 'group_probabilities'],
    title: 'Assembly',
  })
  .openapi('Assembly')

const AttributesSchema = z
  .object({})
  .openapi({
    description:
      'Members of the attributes object ("attributes") represent information about the resource object in which it\'s defined.\nThe keys for Attributes MUST NOT be:\n    relationships\n    links\n    id\n    type',
    title: 'Attributes',
  })
  .openapi('Attributes')

const AvailableApiVersionSchema = z
  .object({
    url: z
      .url()
      .regex(/.+\/v[0-1](\.[0-9]+)*\/?$/)
      .min(1)
      .max(65536)
      .openapi({
        description:
          'A string specifying a versioned base URL that MUST adhere to the rules in section Base URL',
        title: 'Url',
      }),
    version: z
      .string()
      .regex(
        /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
      )
      .openapi({
        description:
          "A string containing the full version number of the API served at that versioned base URL.\nThe version number string MUST NOT be prefixed by, e.g., 'v'.\nExamples: `1.0.0`, `1.0.0-rc.2`.",
        title: 'Version',
      }),
  })
  .openapi({
    description: 'A JSON object containing information about an available API version',
    required: ['url', 'version'],
    title: 'AvailableApiVersion',
  })
  .openapi('AvailableApiVersion')

const BaseInfoAttributesSchema = z
  .object({
    api_version: z
      .string()
      .regex(
        /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
      )
      .openapi({
        description:
          'Presently used full version of the OPTIMADE API.\nThe version number string MUST NOT be prefixed by, e.g., "v".\nExamples: `1.0.0`, `1.0.0-rc.2`.',
        title: 'Api Version',
      }),
    available_api_versions: z
      .array(AvailableApiVersionSchema)
      .openapi({
        description: 'A list of dictionaries of available API versions at other base URLs',
        title: 'Available Api Versions',
      }),
    available_endpoints: z
      .array(z.string())
      .openapi({
        description:
          'List of available endpoints (i.e., the string to be appended to the versioned base URL).',
        title: 'Available Endpoints',
      }),
    entry_types_by_format: z
      .record(z.string(), z.array(z.string()))
      .openapi({
        description: 'Available entry endpoints as a function of output formats.',
        title: 'Entry Types By Format',
      }),
    formats: z
      .array(z.string())
      .default(['json'])
      .exactOptional()
      .openapi({ description: 'List of available output formats.', title: 'Formats' }),
    is_index: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If true, this is an index meta-database base URL (see section Index Meta-Database). If this member is not provided, the client MUST assume this is not an index meta-database base URL (i.e., the default is for `is_index` to be `false`).',
        title: 'Is Index',
      }),
  })
  .openapi({
    description: 'Attributes for Base URL Info endpoint',
    required: [
      'api_version',
      'available_api_versions',
      'available_endpoints',
      'entry_types_by_format',
    ],
    title: 'BaseInfoAttributes',
  })
  .openapi('BaseInfoAttributes')

const MetaSchema = z
  .object({})
  .openapi({
    description:
      'Non-standard meta-information that can not be represented as an attribute or relationship.',
    title: 'Meta',
  })
  .openapi('Meta')

const LinkSchema = z
  .object({
    href: z
      .url()
      .min(1)
      .max(65536)
      .openapi({ description: 'a string containing the link’s URL.', title: 'Href' }),
    meta: MetaSchema.exactOptional().openapi({
      description: 'a meta object containing non-standard meta-information about the link.',
      title: 'Meta',
    }),
  })
  .openapi({
    description:
      "A link **MUST** be represented as either: a string containing the link's URL or a link object.",
    required: ['href'],
    title: 'Link',
  })
  .openapi('Link')

const ResourceLinksSchema = z
  .object({
    self: z
      .union([z.url().min(1).max(65536), LinkSchema])
      .exactOptional()
      .openapi({
        description: 'A link that identifies the resource represented by the resource object.',
        title: 'Self',
      }),
  })
  .openapi({ description: 'A Resource Links object', title: 'ResourceLinks', required: [] })
  .openapi('ResourceLinks')

const RelationshipsSchema = z
  .object({})
  .openapi({
    description:
      'Members of the relationships object ("relationships") represent references from the resource object in which it\'s defined to other resource objects.\nKeys MUST NOT be:\n    type\n    id',
    title: 'Relationships',
  })
  .openapi('Relationships')

const BaseInfoResourceSchema = z
  .object({
    attributes: BaseInfoAttributesSchema,
    id: z.string().regex(/^\/$/).openapi({ title: 'Id' }),
    links: ResourceLinksSchema.exactOptional().openapi({
      description: 'a links object containing links related to the resource.',
      title: 'Links',
    }),
    meta: MetaSchema.exactOptional().openapi({
      description:
        'a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship.',
      title: 'Meta',
    }),
    relationships: RelationshipsSchema.exactOptional().openapi({
      description:
        '[Relationships object](https://jsonapi.org/format/1.0/#document-resource-object-relationships)\ndescribing relationships between the resource and other JSON API resources.',
      title: 'Relationships',
    }),
    type: z
      .string()
      .regex(/^info$/)
      .openapi({ title: 'Type' }),
  })
  .openapi({
    description: 'Resource objects appear in a JSON API document to represent resources.',
    required: ['id', 'type', 'attributes'],
    title: 'BaseInfoResource',
  })
  .openapi('BaseInfoResource')

const BaseRelationshipMetaSchema = z
  .object({
    description: z
      .string()
      .openapi({
        description: 'OPTIONAL human-readable description of the relationship',
        title: 'Description',
      }),
  })
  .openapi({
    description: 'Specific meta field for base relationship resource',
    required: ['description'],
    title: 'BaseRelationshipMeta',
  })
  .openapi('BaseRelationshipMeta')

const BaseRelationshipResourceSchema = z
  .object({
    id: z.string().openapi({ description: 'Resource ID', title: 'Id' }),
    meta: BaseRelationshipMetaSchema.exactOptional().openapi({
      description: "Relationship meta field. MUST contain 'description' if supplied.",
      title: 'Meta',
    }),
    type: z.string().openapi({ description: 'Resource type', title: 'Type' }),
  })
  .openapi({
    description: 'Minimum requirements to represent a relationship resource',
    required: ['id', 'type'],
    title: 'BaseRelationshipResource',
  })
  .openapi('BaseRelationshipResource')

const DataTypeSchema = z
  .enum(['string', 'integer', 'float', 'boolean', 'timestamp', 'list', 'dictionary', 'unknown'])
  .openapi({
    description:
      'Optimade Data Types\n\nSee the section "Data types" in the OPTIMADE API specification for more information.',
    title: 'DataType',
  })
  .openapi('DataType')

const EntryInfoPropertySchema = z
  .object({
    description: z
      .string()
      .openapi({
        description: 'A human-readable description of the entry property',
        title: 'Description',
      }),
    sortable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Defines whether the entry property can be used for sorting with the "sort" parameter.\nIf the entry listing endpoint supports sorting, this key MUST be present for sortable properties with value `true`.',
        title: 'Sortable',
      }),
    type: DataTypeSchema.exactOptional().openapi({
      description:
        "The type of the property's value.\nThis MUST be any of the types defined in the Data types section.\nFor the purpose of compatibility with future versions of this specification, a client MUST accept values that are not `string` values specifying any of the OPTIMADE Data types, but MUST then also disregard the `type` field.\nNote, if the value is a nested type, only the outermost type should be reported.\nE.g., for the entry resource `structures`, the `species` property is defined as a list of dictionaries, hence its `type` value would be `list`.",
      title: 'Type',
    }),
    unit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The physical unit of the entry property.\nThis MUST be a valid representation of units according to version 2.1 of [The Unified Code for Units of Measure](https://unitsofmeasure.org/ucum.html).\nIt is RECOMMENDED that non-standard (non-SI) units are described in the description for the property.',
        title: 'Unit',
      }),
  })
  .openapi({ required: ['description'], title: 'EntryInfoProperty' })
  .openapi('EntryInfoProperty')

const EntryInfoResourceSchema = z
  .object({
    description: z
      .string()
      .openapi({ description: 'Description of the entry.', title: 'Description' }),
    formats: z
      .array(z.string())
      .openapi({
        description: 'List of output formats available for this type of entry.',
        title: 'Formats',
      }),
    output_fields_by_format: z
      .record(z.string(), z.array(z.string()))
      .openapi({
        description:
          'Dictionary of available output fields for this entry type, where the keys are the values of the `formats` list and the values are the keys of the `properties` dictionary.',
        title: 'Output Fields By Format',
      }),
    properties: z
      .record(z.string(), EntryInfoPropertySchema)
      .openapi({
        description:
          'A dictionary describing queryable properties for this entry type, where each key is a property name.',
        title: 'Properties',
      }),
  })
  .openapi({
    required: ['formats', 'description', 'properties', 'output_fields_by_format'],
    title: 'EntryInfoResource',
  })
  .openapi('EntryInfoResource')

const ErrorLinksSchema = z
  .object({
    about: z
      .union([z.url().min(1).max(65536), LinkSchema])
      .exactOptional()
      .openapi({
        description:
          'A link that leads to further details about this particular occurrence of the problem.',
        title: 'About',
      }),
  })
  .openapi({
    description: 'A Links object specific to Error objects',
    title: 'ErrorLinks',
    required: [],
  })
  .openapi('ErrorLinks')

const ErrorSourceSchema = z
  .object({
    parameter: z
      .string()
      .exactOptional()
      .openapi({
        description: 'a string indicating which URI query parameter caused the error.',
        title: 'Parameter',
      }),
    pointer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'a JSON Pointer [RFC6901] to the associated entity in the request document [e.g. "/data" for a primary data object, or "/data/attributes/title" for a specific attribute].',
        title: 'Pointer',
      }),
  })
  .openapi({
    description: 'an object containing references to the source of the error',
    title: 'ErrorSource',
    required: [],
  })
  .openapi('ErrorSource')

const ErrorSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'an application-specific error code, expressed as a string value.',
        title: 'Code',
      }),
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable explanation specific to this occurrence of the problem.',
        title: 'Detail',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique identifier for this particular occurrence of the problem.',
        title: 'Id',
      }),
    links: ErrorLinksSchema.exactOptional().openapi({
      description: 'A links object storing about',
      title: 'Links',
    }),
    meta: MetaSchema.exactOptional().openapi({
      description: 'a meta object containing non-standard meta-information about the error.',
      title: 'Meta',
    }),
    source: ErrorSourceSchema.exactOptional().openapi({
      description: 'An object containing references to the source of the error',
      title: 'Source',
    }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'the HTTP status code applicable to this problem, expressed as a string value.',
        title: 'Status',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short, human-readable summary of the problem. It **SHOULD NOT** change from occurrence to occurrence of the problem, except for purposes of localization.',
        title: 'Title',
      }),
  })
  .openapi({ description: 'An error response', title: 'Error', required: [] })
  .openapi('Error')

const ResourceSchema = z
  .object({
    attributes: AttributesSchema.exactOptional().openapi({
      description: 'an attributes object representing some of the resource’s data.',
      title: 'Attributes',
    }),
    id: z.string().openapi({ description: 'Resource ID', title: 'Id' }),
    links: ResourceLinksSchema.exactOptional().openapi({
      description: 'a links object containing links related to the resource.',
      title: 'Links',
    }),
    meta: MetaSchema.exactOptional().openapi({
      description:
        'a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship.',
      title: 'Meta',
    }),
    relationships: RelationshipsSchema.exactOptional().openapi({
      description:
        '[Relationships object](https://jsonapi.org/format/1.0/#document-resource-object-relationships)\ndescribing relationships between the resource and other JSON API resources.',
      title: 'Relationships',
    }),
    type: z.string().openapi({ description: 'Resource type', title: 'Type' }),
  })
  .openapi({
    description: 'Resource objects appear in a JSON API document to represent resources.',
    required: ['id', 'type'],
    title: 'Resource',
  })
  .openapi('Resource')

const JsonApiSchema = z
  .object({
    meta: MetaSchema.exactOptional().openapi({
      description: 'Non-standard meta information',
      title: 'Meta',
    }),
    version: z
      .string()
      .default('1.0')
      .exactOptional()
      .openapi({ description: 'Version of the json API used', title: 'Version' }),
  })
  .openapi({
    description: "An object describing the server's implementation",
    title: 'JsonApi',
    required: [],
  })
  .openapi('JsonApi')

const ToplevelLinksSchema = z
  .object({
    first: z
      .union([z.url().min(1).max(65536), LinkSchema])
      .exactOptional()
      .openapi({ description: 'The first page of data', title: 'First' }),
    last: z
      .union([z.url().min(1).max(65536), LinkSchema])
      .exactOptional()
      .openapi({ description: 'The last page of data', title: 'Last' }),
    next: z
      .union([z.url().min(1).max(65536), LinkSchema])
      .exactOptional()
      .openapi({ description: 'The next page of data', title: 'Next' }),
    prev: z
      .union([z.url().min(1).max(65536), LinkSchema])
      .exactOptional()
      .openapi({ description: 'The previous page of data', title: 'Prev' }),
    related: z
      .union([z.url().min(1).max(65536), LinkSchema])
      .exactOptional()
      .openapi({ description: 'A related resource link', title: 'Related' }),
    self: z
      .union([z.url().min(1).max(65536), LinkSchema])
      .exactOptional()
      .openapi({ description: 'A link to itself', title: 'Self' }),
  })
  .openapi({
    description: 'A set of Links objects, possibly including pagination',
    title: 'ToplevelLinks',
    required: [],
  })
  .openapi('ToplevelLinks')

const ImplementationMaintainerSchema = z
  .object({
    email: z.email().openapi({ description: "the maintainer's email address", title: 'Email' }),
  })
  .openapi({
    description: 'Details about the maintainer of the implementation',
    required: ['email'],
    title: 'ImplementationMaintainer',
  })
  .openapi('ImplementationMaintainer')

const ImplementationSchema = z
  .object({
    homepage: z
      .union([z.url().min(1).max(65536), LinkSchema])
      .exactOptional()
      .openapi({
        description:
          'A [JSON API links object](http://jsonapi.org/format/1.0/#document-links) pointing to the homepage of the implementation.',
        title: 'Homepage',
      }),
    issue_tracker: z
      .union([z.url().min(1).max(65536), LinkSchema])
      .exactOptional()
      .openapi({
        description:
          "A [JSON API links object](http://jsonapi.org/format/1.0/#document-links) pointing to the implementation's issue tracker.",
        title: 'Issue Tracker',
      }),
    maintainer: ImplementationMaintainerSchema.exactOptional().openapi({
      description: 'A dictionary providing details about the maintainer of the implementation.',
      title: 'Maintainer',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'name of the implementation', title: 'Name' }),
    source_url: z
      .union([z.url().min(1).max(65536), LinkSchema])
      .exactOptional()
      .openapi({
        description:
          'A [JSON API links object](http://jsonapi.org/format/1.0/#document-links) pointing to the implementation source, either downloadable archive or version control system.',
        title: 'Source Url',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'version string of the current implementation', title: 'Version' }),
  })
  .openapi({
    description: 'Information on the server implementation',
    title: 'Implementation',
    required: [],
  })
  .openapi('Implementation')

const ProviderSchema = z
  .object({
    description: z
      .string()
      .openapi({
        description: 'a longer description of the database provider',
        title: 'Description',
      }),
    homepage: z
      .union([z.url().min(1).max(65536), LinkSchema])
      .exactOptional()
      .openapi({
        description:
          'a [JSON API links object](http://jsonapi.org/format/1.0#document-links) pointing to homepage of the database provider, either directly as a string, or as a link object.',
        title: 'Homepage',
      }),
    name: z
      .string()
      .openapi({ description: 'a short name for the database provider', title: 'Name' }),
    prefix: z
      .string()
      .regex(/^[a-z]([a-z]|[0-9]|_)*$/)
      .openapi({
        description:
          'database-provider-specific prefix as found in section Database-Provider-Specific Namespace Prefixes.',
        title: 'Prefix',
      }),
  })
  .openapi({
    description: 'Information on the database provider of the implementation.',
    required: ['name', 'description', 'prefix'],
    title: 'Provider',
  })
  .openapi('Provider')

const ResponseMetaQuerySchema = z
  .object({
    representation: z
      .string()
      .openapi({
        description:
          'A string with the part of the URL following the versioned or unversioned base URL that serves the API.\nQuery parameters that have not been used in processing the request MAY be omitted.\nIn particular, if no query parameters have been involved in processing the request, the query part of the URL MAY be excluded.\nExample: `/structures?filter=nelements=2`',
        title: 'Representation',
      }),
  })
  .openapi({
    description: 'Information on the query that was requested.',
    required: ['representation'],
    title: 'ResponseMetaQuery',
  })
  .openapi('ResponseMetaQuery')

const WarningsSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'an application-specific error code, expressed as a string value.',
        title: 'Code',
      }),
    detail: z
      .string()
      .openapi({
        description: 'A human-readable explanation specific to this occurrence of the problem.',
        title: 'Detail',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique identifier for this particular occurrence of the problem.',
        title: 'Id',
      }),
    links: ErrorLinksSchema.exactOptional().openapi({
      description: 'A links object storing about',
      title: 'Links',
    }),
    meta: MetaSchema.exactOptional().openapi({
      description: 'a meta object containing non-standard meta-information about the error.',
      title: 'Meta',
    }),
    source: ErrorSourceSchema.exactOptional().openapi({
      description: 'An object containing references to the source of the error',
      title: 'Source',
    }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short, human-readable summary of the problem. It **SHOULD NOT** change from occurrence to occurrence of the problem, except for purposes of localization.',
        title: 'Title',
      }),
    type: z
      .string()
      .regex(/^warning$/)
      .openapi({ description: 'Warnings must be of type "warning"', title: 'Type' }),
  })
  .openapi({
    description:
      'OPTIMADE-specific warning class based on OPTIMADE-specific JSON API Error.\n\nFrom the specification:\n\nA warning resource object is defined similarly to a JSON API error object, but MUST also include the field type, which MUST have the value "warning".\nThe field detail MUST be present and SHOULD contain a non-critical message, e.g., reporting unrecognized search attributes or deprecated features.\n\nNote: Must be named "Warnings", since "Warning" is a built-in Python class.',
    required: ['detail', 'type'],
    title: 'Warnings',
  })
  .openapi('Warnings')

const ResponseMetaSchema = z
  .object({
    api_version: z
      .string()
      .regex(
        /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
      )
      .openapi({
        description:
          'Presently used full version of the OPTIMADE API.\nThe version number string MUST NOT be prefixed by, e.g., "v".\nExamples: `1.0.0`, `1.0.0-rc.2`.',
        title: 'Api Version',
      }),
    data_available: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'An integer containing the total number of data resource objects available in the database for the endpoint.',
        title: 'Data Available',
      }),
    data_returned: z
      .int()
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'An integer containing the total number of data resource objects returned for the current `filter` query, independent of pagination.',
        title: 'Data Returned',
      }),
    implementation: ImplementationSchema.exactOptional().openapi({
      description: 'a dictionary describing the server implementation',
      title: 'Implementation',
    }),
    last_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string containing the last ID returned', title: 'Last Id' }),
    more_data_available: z
      .boolean()
      .openapi({
        description:
          '`false` if the response contains all data for the request (e.g., a request issued to a single entry endpoint, or a `filter` query at the last page of a paginated response) and `true` if the response is incomplete in the sense that multiple objects match the request, and not all of them have been included in the response (e.g., a query with multiple pages that is not at the last page).',
        title: 'More Data Available',
      }),
    provider: ProviderSchema.exactOptional().openapi({
      description: 'information on the database provider of the implementation.',
      title: 'Provider',
    }),
    query: ResponseMetaQuerySchema.openapi({
      description: 'Information on the Query that was requested',
      title: 'Query',
    }),
    response_message: z
      .string()
      .exactOptional()
      .openapi({ description: 'response string from the server', title: 'Response Message' }),
    schema: z
      .union([z.url().min(1).max(65536), LinkSchema])
      .exactOptional()
      .openapi({
        description:
          'A [JSON API links object](http://jsonapi.org/format/1.0/#document-links) that points to a schema for the response.\nIf it is a string, or a dictionary containing no `meta` field, the provided URL MUST point at an [OpenAPI](https://swagger.io/specification/) schema.\nIt is possible that future versions of this specification allows for alternative schema types.\nHence, if the `meta` field of the JSON API links object is provided and contains a field `schema_type` that is not equal to the string `OpenAPI` the client MUST not handle failures to parse the schema or to validate the response against the schema as errors.',
        title: 'Schema',
      }),
    time_stamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'A timestamp containing the date and time at which the query was executed.',
        title: 'Time Stamp',
      }),
    warnings: z
      .array(WarningsSchema)
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
          'A list of warning resource objects representing non-critical errors or warnings.\nA warning resource object is defined similarly to a [JSON API error object](http://jsonapi.org/format/1.0/#error-objects), but MUST also include the field `type`, which MUST have the value `"warning"`.\nThe field `detail` MUST be present and SHOULD contain a non-critical message, e.g., reporting unrecognized search attributes or deprecated features.\nThe field `status`, representing a HTTP response status code, MUST NOT be present for a warning resource object.\nThis is an exclusive field for error resource objects.',
        title: 'Warnings',
      }),
  })
  .openapi({
    description:
      'A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)\nthat contains JSON API meta objects of non-standard\nmeta-information.\n\nOPTIONAL additional information global to the query that is not\nspecified in this document, MUST start with a\ndatabase-provider-specific prefix.',
    required: ['query', 'api_version', 'more_data_available'],
    title: 'ResponseMeta',
  })
  .openapi('ResponseMeta')

const EntryInfoResponseSchema = z
  .object({
    data: EntryInfoResourceSchema.openapi({
      description: 'OPTIMADE information for an entry endpoint',
      title: 'Data',
    }),
    errors: z
      .array(ErrorSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'A list of unique errors', title: 'Errors' }),
    included: z
      .array(ResourceSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'A list of unique included resources', title: 'Included' }),
    jsonapi: JsonApiSchema.exactOptional().openapi({
      description: 'Information about the JSON API used',
      title: 'Jsonapi',
    }),
    links: ToplevelLinksSchema.exactOptional().openapi({
      description: 'Links associated with the primary data or errors',
      title: 'Links',
    }),
    meta: ResponseMetaSchema.openapi({
      description: 'A meta object containing non-standard information',
      title: 'Meta',
    }),
  })
  .openapi({
    description: 'errors are not allowed',
    required: ['data', 'meta'],
    title: 'EntryInfoResponse',
  })
  .openapi('EntryInfoResponse')

const RelationshipLinksSchema = z
  .object({
    related: z
      .union([z.url().min(1).max(65536), LinkSchema])
      .exactOptional()
      .openapi({
        description:
          'A [related resource link](https://jsonapi.org/format/1.0/#document-resource-object-related-resource-links).',
        title: 'Related',
      }),
    self: z
      .union([z.url().min(1).max(65536), LinkSchema])
      .exactOptional()
      .openapi({
        description:
          "A link for the relationship itself (a 'relationship link').\nThis link allows the client to directly manipulate the relationship.\nWhen fetched successfully, this link returns the [linkage](https://jsonapi.org/format/1.0/#document-resource-object-linkage) for the related resources as its primary data.\n(See [Fetching Relationships](https://jsonapi.org/format/1.0/#fetching-relationships).)",
        title: 'Self',
      }),
  })
  .openapi({
    description:
      'A resource object **MAY** contain references to other resource objects ("relationships").\nRelationships may be to-one or to-many.\nRelationships can be specified by including a member in a resource\'s links object.',
    title: 'RelationshipLinks',
    required: [],
  })
  .openapi('RelationshipLinks')

const ReferenceRelationshipSchema = z
  .object({
    data: z
      .union([BaseRelationshipResourceSchema, z.array(BaseRelationshipResourceSchema)])
      .exactOptional()
      .openapi({ description: 'Resource linkage', title: 'Data' }),
    links: RelationshipLinksSchema.exactOptional().openapi({
      description: 'a links object containing at least one of the following: self, related',
      title: 'Links',
    }),
    meta: MetaSchema.exactOptional().openapi({
      description:
        'a meta object that contains non-standard meta-information about the relationship.',
      title: 'Meta',
    }),
  })
  .openapi({
    description:
      'Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource',
    title: 'ReferenceRelationship',
    required: [],
  })
  .openapi('ReferenceRelationship')

const StructureRelationshipSchema = z
  .object({
    data: z
      .union([BaseRelationshipResourceSchema, z.array(BaseRelationshipResourceSchema)])
      .exactOptional()
      .openapi({ description: 'Resource linkage', title: 'Data' }),
    links: RelationshipLinksSchema.exactOptional().openapi({
      description: 'a links object containing at least one of the following: self, related',
      title: 'Links',
    }),
    meta: MetaSchema.exactOptional().openapi({
      description:
        'a meta object that contains non-standard meta-information about the relationship.',
      title: 'Meta',
    }),
  })
  .openapi({
    description:
      'Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource',
    title: 'StructureRelationship',
    required: [],
  })
  .openapi('StructureRelationship')

const EntryRelationshipsSchema = z
  .object({
    references: ReferenceRelationshipSchema.exactOptional().openapi({
      description:
        'Object containing links to relationships with entries of the `references` type.',
      title: 'References',
    }),
    structures: StructureRelationshipSchema.exactOptional().openapi({
      description:
        'Object containing links to relationships with entries of the `structures` type.',
      title: 'Structures',
    }),
  })
  .openapi({
    description:
      'This model wraps the JSON API Relationships to include type-specific top level keys.',
    title: 'EntryRelationships',
    required: [],
  })
  .openapi('EntryRelationships')

const EntryResourceAttributesSchema = z
  .object({
    immutable_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The entry\'s immutable ID (e.g., an UUID). This is important for databases having preferred IDs that point to "the latest version" of a record, but still offer access to older variants. This ID maps to the version-specific record, in case it changes in the future.\n\n- **Type**: string.\n\n- **Requirements/Conventions**:\n    - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n\n- **Examples**:\n    - `"8bd3e750-b477-41a0-9b11-3a799f21b44f"`\n    - `"fjeiwoj,54;@=%<>#32"` (Strings that are not URL-safe are allowed.)',
        title: 'Immutable Id',
      }),
    last_modified: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Date and time representing when the entry was last modified.\n\n- **Type**: timestamp.\n\n- **Requirements/Conventions**:\n    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n    - **Response**: REQUIRED in the response unless the query parameter `response_fields` is present and does not include this property.\n\n- **Example**:\n    - As part of JSON response format: `"2007-04-05T14:30:20Z"` (i.e., encoded as an [RFC 3339 Internet Date/Time Format](https://tools.ietf.org/html/rfc3339#section-5.6) string.)',
        title: 'Last Modified',
      }),
  })
  .openapi({
    description: "Contains key-value pairs representing the entry's properties.",
    required: ['last_modified'],
    title: 'EntryResourceAttributes',
  })
  .openapi('EntryResourceAttributes')

const EntryResourceSchema = z
  .object({
    attributes: EntryResourceAttributesSchema.openapi({
      description:
        "A dictionary, containing key-value pairs representing the entry's properties, except for `type` and `id`.\nDatabase-provider-specific properties need to include the database-provider-specific prefix (see section on Database-Provider-Specific Namespace Prefixes).",
      title: 'Attributes',
    }),
    id: z
      .string()
      .openapi({
        description:
          'An entry\'s ID as defined in section Definition of Terms.\n\n- **Type**: string.\n\n- **Requirements/Conventions**:\n    - **Support**: MUST be supported by all implementations, MUST NOT be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n    - **Response**: REQUIRED in the response.\n\n- **Examples**:\n    - `"db/1234567"`\n    - `"cod/2000000"`\n    - `"cod/2000000@1234567"`\n    - `"nomad/L1234567890"`\n    - `"42"`',
        title: 'Id',
      }),
    links: ResourceLinksSchema.exactOptional().openapi({
      description: 'a links object containing links related to the resource.',
      title: 'Links',
    }),
    meta: MetaSchema.exactOptional().openapi({
      description:
        'a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship.',
      title: 'Meta',
    }),
    relationships: EntryRelationshipsSchema.exactOptional().openapi({
      description:
        'A dictionary containing references to other entries according to the description in section Relationships encoded as [JSON API Relationships](https://jsonapi.org/format/1.0/#document-resource-object-relationships).\nThe OPTIONAL human-readable description of the relationship MAY be provided in the `description` field inside the `meta` dictionary of the JSON API resource identifier object.',
      title: 'Relationships',
    }),
    type: z
      .string()
      .openapi({
        description:
          'The name of the type of an entry.\n\n- **Type**: string.\n\n- **Requirements/Conventions**:\n    - **Support**: MUST be supported by all implementations, MUST NOT be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n    - **Response**: REQUIRED in the response.\n    - MUST be an existing entry type.\n    - The entry of type `<type>` and ID `<id>` MUST be returned in response to a request for `/<type>/<id>` under the versioned base URL.\n\n- **Example**: `"structures"`',
        title: 'Type',
      }),
  })
  .openapi({
    description: 'The base model for an entry resource.',
    required: ['id', 'type', 'attributes'],
    title: 'EntryResource',
  })
  .openapi('EntryResource')

const OptimadeErrorSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'an application-specific error code, expressed as a string value.',
        title: 'Code',
      }),
    detail: z
      .string()
      .openapi({
        description: 'A human-readable explanation specific to this occurrence of the problem.',
        title: 'Detail',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique identifier for this particular occurrence of the problem.',
        title: 'Id',
      }),
    links: ErrorLinksSchema.exactOptional().openapi({
      description: 'A links object storing about',
      title: 'Links',
    }),
    meta: MetaSchema.exactOptional().openapi({
      description: 'a meta object containing non-standard meta-information about the error.',
      title: 'Meta',
    }),
    source: ErrorSourceSchema.exactOptional().openapi({
      description: 'An object containing references to the source of the error',
      title: 'Source',
    }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'the HTTP status code applicable to this problem, expressed as a string value.',
        title: 'Status',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short, human-readable summary of the problem. It **SHOULD NOT** change from occurrence to occurrence of the problem, except for purposes of localization.',
        title: 'Title',
      }),
  })
  .openapi({ description: 'detail MUST be present', required: ['detail'], title: 'OptimadeError' })
  .openapi('OptimadeError')

const ErrorResponseSchema = z
  .object({
    data: z
      .union([ResourceSchema, z.array(ResourceSchema)])
      .exactOptional()
      .openapi({ description: 'Outputted Data', title: 'Data' }),
    errors: z
      .array(OptimadeErrorSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({
        description:
          'A list of OPTIMADE-specific JSON API error objects, where the field detail MUST be present.',
        title: 'Errors',
      }),
    included: z
      .array(ResourceSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'A list of unique included resources', title: 'Included' }),
    jsonapi: JsonApiSchema.exactOptional().openapi({
      description: 'Information about the JSON API used',
      title: 'Jsonapi',
    }),
    links: ToplevelLinksSchema.exactOptional().openapi({
      description: 'Links associated with the primary data or errors',
      title: 'Links',
    }),
    meta: ResponseMetaSchema.openapi({
      description: 'A meta object containing non-standard information',
      title: 'Meta',
    }),
  })
  .openapi({
    description: 'errors MUST be present and data MUST be skipped',
    required: ['meta', 'errors'],
    title: 'ErrorResponse',
  })
  .openapi('ErrorResponse')

const InfoResponseSchema = z
  .object({
    data: BaseInfoResourceSchema.openapi({
      description: 'The implementations /info data',
      title: 'Data',
    }),
    errors: z
      .array(ErrorSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'A list of unique errors', title: 'Errors' }),
    included: z
      .array(ResourceSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'A list of unique included resources', title: 'Included' }),
    jsonapi: JsonApiSchema.exactOptional().openapi({
      description: 'Information about the JSON API used',
      title: 'Jsonapi',
    }),
    links: ToplevelLinksSchema.exactOptional().openapi({
      description: 'Links associated with the primary data or errors',
      title: 'Links',
    }),
    meta: ResponseMetaSchema.openapi({
      description: 'A meta object containing non-standard information',
      title: 'Meta',
    }),
  })
  .openapi({
    description: 'errors are not allowed',
    required: ['data', 'meta'],
    title: 'InfoResponse',
  })
  .openapi('InfoResponse')

const LinkTypeSchema = z
  .enum(['child', 'root', 'external', 'providers'])
  .openapi({ description: 'Enumeration of link_type values', title: 'LinkType' })
  .openapi('LinkType')

const LinksResourceAttributesSchema = z
  .object({
    aggregate: AggregateSchema.default('ok')
      .exactOptional()
      .openapi({
        description:
          'A string indicating whether a client that is following links to aggregate results from different OPTIMADE implementations should follow this link or not.\nThis flag SHOULD NOT be indicated for links where `link_type` is not `child`.\n\nIf not specified, clients MAY assume that the value is `ok`.\nIf specified, and the value is anything different than `ok`, the client MUST assume that the server is suggesting not to follow the link during aggregation by default (also if the value is not among the known ones, in case a future specification adds new accepted values).\n\nSpecific values indicate the reason why the server is providing the suggestion.\nA client MAY follow the link anyway if it has reason to do so (e.g., if the client is looking for all test databases, it MAY follow the links marked with `aggregate`=`test`).\n\nIf specified, it MUST be one of the values listed in section Link Aggregate Options.',
        title: 'Aggregate',
      }),
    base_url: z
      .union([z.url().min(1).max(65536), LinkSchema])
      .openapi({
        description: 'JSON API links object, pointing to the base URL for this implementation',
        title: 'Base Url',
      }),
    description: z
      .string()
      .openapi({
        description:
          'Human-readable description for the OPTIMADE API implementation, e.g., for use in clients to show a description to the end-user.',
        title: 'Description',
      }),
    homepage: z
      .union([z.url().min(1).max(65536), LinkSchema])
      .openapi({
        description: 'JSON API links object, pointing to a homepage URL for this implementation',
        title: 'Homepage',
      }),
    link_type: LinkTypeSchema.openapi({
      description:
        "The type of the linked relation.\nMUST be one of these values: 'child', 'root', 'external', 'providers'.",
      title: 'Link Type',
    }),
    name: z
      .string()
      .openapi({
        description:
          'Human-readable name for the OPTIMADE API implementation, e.g., for use in clients to show the name to the end-user.',
        title: 'Name',
      }),
    no_aggregate_reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An OPTIONAL human-readable string indicating the reason for suggesting not to aggregate results following the link.\nIt SHOULD NOT be present if `aggregate`=`ok`.',
        title: 'No Aggregate Reason',
      }),
  })
  .openapi({
    description: 'Links endpoint resource object attributes',
    required: ['name', 'description', 'base_url', 'homepage', 'link_type'],
    title: 'LinksResourceAttributes',
  })
  .openapi('LinksResourceAttributes')

const LinksResourceSchema = z
  .object({
    attributes: LinksResourceAttributesSchema.openapi({
      description:
        "A dictionary containing key-value pairs representing the Links resource's properties.",
      title: 'Attributes',
    }),
    id: z
      .string()
      .openapi({
        description:
          'An entry\'s ID as defined in section Definition of Terms.\n\n- **Type**: string.\n\n- **Requirements/Conventions**:\n    - **Support**: MUST be supported by all implementations, MUST NOT be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n    - **Response**: REQUIRED in the response.\n\n- **Examples**:\n    - `"db/1234567"`\n    - `"cod/2000000"`\n    - `"cod/2000000@1234567"`\n    - `"nomad/L1234567890"`\n    - `"42"`',
        title: 'Id',
      }),
    links: ResourceLinksSchema.exactOptional().openapi({
      description: 'a links object containing links related to the resource.',
      title: 'Links',
    }),
    meta: MetaSchema.exactOptional().openapi({
      description:
        'a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship.',
      title: 'Meta',
    }),
    relationships: EntryRelationshipsSchema.exactOptional().openapi({
      description:
        'A dictionary containing references to other entries according to the description in section Relationships encoded as [JSON API Relationships](https://jsonapi.org/format/1.0/#document-resource-object-relationships).\nThe OPTIONAL human-readable description of the relationship MAY be provided in the `description` field inside the `meta` dictionary of the JSON API resource identifier object.',
      title: 'Relationships',
    }),
    type: z
      .string()
      .regex(/^links$/)
      .openapi({
        description: 'These objects are described in detail in the section Links Endpoint',
        title: 'Type',
      }),
  })
  .openapi({
    description: 'A Links endpoint resource object',
    required: ['id', 'type', 'attributes'],
    title: 'LinksResource',
  })
  .openapi('LinksResource')

const LinksResponseSchema = z
  .object({
    data: z
      .union([z.array(LinksResourceSchema), z.array(z.object({}))])
      .openapi({ description: 'List of unique OPTIMADE links resource objects', title: 'Data' }),
    errors: z
      .array(ErrorSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'A list of unique errors', title: 'Errors' }),
    included: z
      .union([z.array(EntryResourceSchema), z.array(z.object({}))])
      .exactOptional()
      .openapi({ title: 'Included' }),
    jsonapi: JsonApiSchema.exactOptional().openapi({
      description: 'Information about the JSON API used',
      title: 'Jsonapi',
    }),
    links: ToplevelLinksSchema.exactOptional().openapi({
      description: 'Links associated with the primary data or errors',
      title: 'Links',
    }),
    meta: ResponseMetaSchema.openapi({
      description: 'A meta object containing non-standard information',
      title: 'Meta',
    }),
  })
  .openapi({
    description: 'errors are not allowed',
    required: ['data', 'meta'],
    title: 'LinksResponse',
  })
  .openapi('LinksResponse')

const PeriodicitySchema = z
  .union([z.literal(0), z.literal(1)])
  .openapi({ description: 'Integer enumeration of dimension_types values', title: 'Periodicity' })
  .openapi('Periodicity')

const PersonSchema = z
  .object({
    firstname: z
      .string()
      .exactOptional()
      .openapi({ description: 'First name of the person.', title: 'Firstname' }),
    lastname: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last name of the person.', title: 'Lastname' }),
    name: z.string().openapi({ description: 'Full name of the person, REQUIRED.', title: 'Name' }),
  })
  .openapi({
    description: 'A person, i.e., an author, editor or other.',
    required: ['name'],
    title: 'Person',
  })
  .openapi('Person')

const ReferenceResourceAttributesSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Address',
      }),
    annote: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Annote',
      }),
    authors: z
      .array(PersonSchema)
      .exactOptional()
      .openapi({
        description: 'List of person objects containing the authors of the reference.',
        title: 'Authors',
      }),
    bib_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of the reference, corresponding to the **type** property in the BiBTeX specification.',
        title: 'Bib Type',
      }),
    booktitle: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Booktitle',
      }),
    chapter: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Chapter',
      }),
    crossref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Crossref',
      }),
    doi: z
      .string()
      .exactOptional()
      .openapi({ description: 'The digital object identifier of the reference.', title: 'Doi' }),
    edition: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Edition',
      }),
    editors: z
      .array(PersonSchema)
      .exactOptional()
      .openapi({
        description: 'List of person objects containing the editors of the reference.',
        title: 'Editors',
      }),
    howpublished: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Howpublished',
      }),
    immutable_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The entry\'s immutable ID (e.g., an UUID). This is important for databases having preferred IDs that point to "the latest version" of a record, but still offer access to older variants. This ID maps to the version-specific record, in case it changes in the future.\n\n- **Type**: string.\n\n- **Requirements/Conventions**:\n    - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n\n- **Examples**:\n    - `"8bd3e750-b477-41a0-9b11-3a799f21b44f"`\n    - `"fjeiwoj,54;@=%<>#32"` (Strings that are not URL-safe are allowed.)',
        title: 'Immutable Id',
      }),
    institution: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Institution',
      }),
    journal: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Journal',
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Key',
      }),
    last_modified: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Date and time representing when the entry was last modified.\n\n- **Type**: timestamp.\n\n- **Requirements/Conventions**:\n    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n    - **Response**: REQUIRED in the response unless the query parameter `response_fields` is present and does not include this property.\n\n- **Example**:\n    - As part of JSON response format: `"2007-04-05T14:30:20Z"` (i.e., encoded as an [RFC 3339 Internet Date/Time Format](https://tools.ietf.org/html/rfc3339#section-5.6) string.)',
        title: 'Last Modified',
      }),
    month: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Month',
      }),
    note: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Note',
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Number',
      }),
    organization: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Organization',
      }),
    pages: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Pages',
      }),
    publisher: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Publisher',
      }),
    school: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'School',
      }),
    series: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Series',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Title',
      }),
    url: z
      .url()
      .min(1)
      .max(65536)
      .exactOptional()
      .openapi({ description: 'The URL of the reference.', title: 'Url' }),
    volume: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Volume',
      }),
    year: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaning of property matches the BiBTeX specification.',
        title: 'Year',
      }),
  })
  .openapi({
    description:
      'Model that stores the attributes of a reference.\n\nMany properties match the meaning described in the\n[BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf).',
    required: ['last_modified'],
    title: 'ReferenceResourceAttributes',
  })
  .openapi('ReferenceResourceAttributes')

const ReferenceResourceSchema = z
  .object({
    attributes: ReferenceResourceAttributesSchema,
    id: z
      .string()
      .openapi({
        description:
          'An entry\'s ID as defined in section Definition of Terms.\n\n- **Type**: string.\n\n- **Requirements/Conventions**:\n    - **Support**: MUST be supported by all implementations, MUST NOT be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n    - **Response**: REQUIRED in the response.\n\n- **Examples**:\n    - `"db/1234567"`\n    - `"cod/2000000"`\n    - `"cod/2000000@1234567"`\n    - `"nomad/L1234567890"`\n    - `"42"`',
        title: 'Id',
      }),
    links: ResourceLinksSchema.exactOptional().openapi({
      description: 'a links object containing links related to the resource.',
      title: 'Links',
    }),
    meta: MetaSchema.exactOptional().openapi({
      description:
        'a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship.',
      title: 'Meta',
    }),
    relationships: EntryRelationshipsSchema.exactOptional().openapi({
      description:
        'A dictionary containing references to other entries according to the description in section Relationships encoded as [JSON API Relationships](https://jsonapi.org/format/1.0/#document-resource-object-relationships).\nThe OPTIONAL human-readable description of the relationship MAY be provided in the `description` field inside the `meta` dictionary of the JSON API resource identifier object.',
      title: 'Relationships',
    }),
    type: z
      .string()
      .regex(/^references$/)
      .openapi({
        description:
          'The name of the type of an entry.\n- **Type**: string.\n- **Requirements/Conventions**:\n    - **Support**: MUST be supported by all implementations, MUST NOT be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n    - **Response**: REQUIRED in the response.\n    - MUST be an existing entry type.\n    - The entry of type <type> and ID <id> MUST be returned in response to a request for `/<type>/<id>` under the versioned base URL.\n- **Example**: `"structures"`',
        title: 'Type',
      }),
  })
  .openapi({
    description:
      "The `references` entries describe bibliographic references.\n\nThe following properties are used to provide the bibliographic details:\n\n- **address**, **annote**, **booktitle**, **chapter**, **crossref**, **edition**, **howpublished**, **institution**, **journal**, **key**, **month**, **note**, **number**, **organization**, **pages**, **publisher**, **school**, **series**, **title**, **volume**, **year**: meanings of these properties match the [BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf), values are strings;\n- **bib_type**: type of the reference, corresponding to **type** property in the BibTeX specification, value is string;\n- **authors** and **editors**: lists of *person objects* which are dictionaries with the following keys:\n    - **name**: Full name of the person, REQUIRED.\n    - **firstname**, **lastname**: Parts of the person's name, OPTIONAL.\n- **doi** and **url**: values are strings.\n- **Requirements/Conventions**:\n    - **Support**: OPTIONAL support in implementations, i.e., any of the properties MAY be `null`.\n    - **Query**: Support for queries on any of these properties is OPTIONAL.\n        If supported, filters MAY support only a subset of comparison operators.\n    - Every references entry MUST contain at least one of the properties.",
    required: ['id', 'type', 'attributes'],
    title: 'ReferenceResource',
  })
  .openapi('ReferenceResource')

const ReferenceResponseManySchema = z
  .object({
    data: z
      .union([z.array(ReferenceResourceSchema), z.array(z.object({}))])
      .openapi({
        description: 'List of unique OPTIMADE references entry resource objects',
        title: 'Data',
      }),
    errors: z
      .array(ErrorSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'A list of unique errors', title: 'Errors' }),
    included: z
      .union([z.array(EntryResourceSchema), z.array(z.object({}))])
      .exactOptional()
      .openapi({ title: 'Included' }),
    jsonapi: JsonApiSchema.exactOptional().openapi({
      description: 'Information about the JSON API used',
      title: 'Jsonapi',
    }),
    links: ToplevelLinksSchema.exactOptional().openapi({
      description: 'Links associated with the primary data or errors',
      title: 'Links',
    }),
    meta: ResponseMetaSchema.openapi({
      description: 'A meta object containing non-standard information',
      title: 'Meta',
    }),
  })
  .openapi({
    description: 'errors are not allowed',
    required: ['data', 'meta'],
    title: 'ReferenceResponseMany',
  })
  .openapi('ReferenceResponseMany')

const ReferenceResponseOneSchema = z
  .object({
    data: z
      .union([ReferenceResourceSchema, z.object({})])
      .openapi({ description: 'A single references entry resource', title: 'Data' }),
    errors: z
      .array(ErrorSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'A list of unique errors', title: 'Errors' }),
    included: z
      .union([z.array(EntryResourceSchema), z.array(z.object({}))])
      .exactOptional()
      .openapi({ title: 'Included' }),
    jsonapi: JsonApiSchema.exactOptional().openapi({
      description: 'Information about the JSON API used',
      title: 'Jsonapi',
    }),
    links: ToplevelLinksSchema.exactOptional().openapi({
      description: 'Links associated with the primary data or errors',
      title: 'Links',
    }),
    meta: ResponseMetaSchema.openapi({
      description: 'A meta object containing non-standard information',
      title: 'Meta',
    }),
  })
  .openapi({
    description: 'errors are not allowed',
    required: ['data', 'meta'],
    title: 'ReferenceResponseOne',
  })
  .openapi('ReferenceResponseOne')

const SpeciesSchema = z
  .object({
    attached: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If provided MUST be a list of length 1 or more of strings of chemical symbols for the elements attached to this site, or "X" for a non-chemical element.',
        title: 'Attached',
      }),
    chemical_symbols: z
      .array(z.string())
      .openapi({
        description:
          'MUST be a list of strings of all chemical elements composing this species. Each item of the list MUST be one of the following:\n\n- a valid chemical-element name, or\n- the special value `"X"` to represent a non-chemical element, or\n- the special value `"vacancy"` to represent that this site has a non-zero probability of having a vacancy (the respective probability is indicated in the `concentration` list, see below).\n\nIf any one entry in the `species` list has a `chemical_symbols` list that is longer than 1 element, the correct flag MUST be set in the list `structure_features`.',
        title: 'Chemical Symbols',
      }),
    concentration: z
      .array(z.number())
      .openapi({
        description:
          'MUST be a list of floats, with same length as `chemical_symbols`. The numbers represent the relative concentration of the corresponding chemical symbol in this species. The numbers SHOULD sum to one. Cases in which the numbers do not sum to one typically fall only in the following two categories:\n\n- Numerical errors when representing float numbers in fixed precision, e.g. for two chemical symbols with concentrations `1/3` and `2/3`, the concentration might look something like `[0.33333333333, 0.66666666666]`. If the client is aware that the sum is not one because of numerical precision, it can renormalize the values so that the sum is exactly one.\n- Experimental errors in the data present in the database. In this case, it is the responsibility of the client to decide how to process the data.\n\nNote that concentrations are uncorrelated between different site (even of the same species).',
        title: 'Concentration',
      }),
    mass: z
      .array(z.number())
      .exactOptional()
      .openapi({
        description:
          'If present MUST be a list of floats expressed in a.m.u.\nElements denoting vacancies MUST have masses equal to 0.',
        title: 'Mass',
      }),
    name: z
      .string()
      .openapi({
        description:
          'Gives the name of the species; the **name** value MUST be unique in the `species` list.',
        title: 'Name',
      }),
    nattached: z
      .array(z.int())
      .exactOptional()
      .openapi({
        description:
          'If provided MUST be a list of length 1 or more of integers indicating the number of attached atoms of the kind specified in the value of the :field:`attached` key.',
        title: 'Nattached',
      }),
    original_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Can be any valid Unicode string, and SHOULD contain (if specified) the name of the species that is used internally in the source database.\n\nNote: With regards to "source database", we refer to the immediate source being queried via the OPTIMADE API implementation.',
        title: 'Original Name',
      }),
  })
  .openapi({
    description:
      'A list describing the species of the sites of this structure.\n\nSpecies can represent pure chemical elements, virtual-crystal atoms representing a\nstatistical occupation of a given site by multiple chemical elements, and/or a\nlocation to which there are attached atoms, i.e., atoms whose precise location are\nunknown beyond that they are attached to that position (frequently used to indicate\nhydrogen atoms attached to another element, e.g., a carbon with three attached\nhydrogens might represent a methyl group, -CH3).\n\n- **Examples**:\n    - `[ {"name": "Ti", "chemical_symbols": ["Ti"], "concentration": [1.0]} ]`: any site with this species is occupied by a Ti atom.\n    - `[ {"name": "Ti", "chemical_symbols": ["Ti", "vacancy"], "concentration": [0.9, 0.1]} ]`: any site with this species is occupied by a Ti atom with 90 % probability, and has a vacancy with 10 % probability.\n    - `[ {"name": "BaCa", "chemical_symbols": ["vacancy", "Ba", "Ca"], "concentration": [0.05, 0.45, 0.5], "mass": [0.0, 137.327, 40.078]} ]`: any site with this species is occupied by a Ba atom with 45 % probability, a Ca atom with 50 % probability, and by a vacancy with 5 % probability. The mass of this site is (on average) 88.5 a.m.u.\n    - `[ {"name": "C12", "chemical_symbols": ["C"], "concentration": [1.0], "mass": [12.0]} ]`: any site with this species is occupied by a carbon isotope with mass 12.\n    - `[ {"name": "C13", "chemical_symbols": ["C"], "concentration": [1.0], "mass": [13.0]} ]`: any site with this species is occupied by a carbon isotope with mass 13.\n    - `[ {"name": "CH3", "chemical_symbols": ["C"], "concentration": [1.0], "attached": ["H"], "nattached": [3]} ]`: any site with this species is occupied by a methyl group, -CH3, which is represented without specifying precise positions of the hydrogen atoms.',
    required: ['name', 'chemical_symbols', 'concentration'],
    title: 'Species',
  })
  .openapi('Species')

const StructureFeaturesSchema = z
  .enum(['disorder', 'implicit_atoms', 'site_attachments', 'assemblies'])
  .openapi({ description: 'Enumeration of structure_features values', title: 'StructureFeatures' })
  .openapi('StructureFeatures')

const StructureResourceAttributesSchema = z
  .object({
    assemblies: z
      .array(AssemblySchema)
      .exactOptional()
      .openapi({
        description:
          'A description of groups of sites that are statistically correlated.\n\n- **Type**: list of dictionary with keys:\n    - `sites_in_groups`: list of list of integers (REQUIRED)\n    - `group_probabilities`: list of floats (REQUIRED)\n\n- **Requirements/Conventions**:\n    - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.\n    - **Query**: Support for queries on this property is OPTIONAL.\n        If supported, filters MAY support only a subset of comparison operators.\n    - The property SHOULD be `null` for entries that have no partial occupancies.\n    - If present, the correct flag MUST be set in the list `structure_features`.\n    - Client implementations MUST check its presence (as its presence changes the interpretation of the structure).\n    - If present, it MUST be a list of dictionaries, each of which represents an assembly and MUST have the following two keys:\n        - **sites_in_groups**: Index of the sites (0-based) that belong to each group for each assembly.\n\n            Example: `[[1], [2]]`: two groups, one with the second site, one with the third.\n            Example: `[[1,2], [3]]`: one group with the second and third site, one with the fourth.\n\n        - **group_probabilities**: Statistical probability of each group. It MUST have the same length as `sites_in_groups`.\n            It SHOULD sum to one.\n            See below for examples of how to specify the probability of the occurrence of a vacancy.\n            The possible reasons for the values not to sum to one are the same as already specified above for the `concentration` of each `species`.\n\n    - If a site is not present in any group, it means that it is present with 100 % probability (as if no assembly was specified).\n    - A site MUST NOT appear in more than one group.\n\n- **Examples** (for each entry of the assemblies list):\n    - `{"sites_in_groups": [[0], [1]], "group_probabilities: [0.3, 0.7]}`: the first site and the second site never occur at the same time in the unit cell.\n        Statistically, 30 % of the times the first site is present, while 70 % of the times the second site is present.\n    - `{"sites_in_groups": [[1,2], [3]], "group_probabilities: [0.3, 0.7]}`: the second and third site are either present together or not present; they form the first group of atoms for this assembly.\n        The second group is formed by the fourth site.\n        Sites of the first group (the second and the third) are never present at the same time as the fourth site.\n        30 % of times sites 1 and 2 are present (and site 3 is absent); 70 % of times site 3 is present (and sites 1 and 2 are absent).\n\n- **Notes**:\n    - Assemblies are essential to represent, for instance, the situation where an atom can statistically occupy two different positions (sites).\n\n    - By defining groups, it is possible to represent, e.g., the case where a functional molecule (and not just one atom) is either present or absent (or the case where it it is present in two conformations)\n\n    - Considerations on virtual alloys and on vacancies: In the special case of a virtual alloy, these specifications allow two different, equivalent ways of specifying them.\n        For instance, for a site at the origin with 30 % probability of being occupied by Si, 50 % probability of being occupied by Ge, and 20 % of being a vacancy, the following two representations are possible:\n\n        - Using a single species:\n            ```json\n            {\n              "cartesian_site_positions": [[0,0,0]],\n              "species_at_sites": ["SiGe-vac"],\n              "species": [\n              {\n                "name": "SiGe-vac",\n                "chemical_symbols": ["Si", "Ge", "vacancy"],\n                "concentration": [0.3, 0.5, 0.2]\n              }\n              ]\n              // ...\n            }\n            ```\n\n        - Using multiple species and the assemblies:\n            ```json\n            {\n              "cartesian_site_positions": [ [0,0,0], [0,0,0], [0,0,0] ],\n              "species_at_sites": ["Si", "Ge", "vac"],\n              "species": [\n                { "name": "Si", "chemical_symbols": ["Si"], "concentration": [1.0] },\n                { "name": "Ge", "chemical_symbols": ["Ge"], "concentration": [1.0] },\n                { "name": "vac", "chemical_symbols": ["vacancy"], "concentration": [1.0] }\n              ],\n              "assemblies": [\n                {\n              "sites_in_groups": [ [0], [1], [2] ],\n              "group_probabilities": [0.3, 0.5, 0.2]\n                }\n              ]\n              // ...\n            }\n            ```\n\n    - It is up to the database provider to decide which representation to use, typically depending on the internal format in which the structure is stored.\n        However, given a structure identified by a unique ID, the API implementation MUST always provide the same representation for it.\n\n    - The probabilities of occurrence of different assemblies are uncorrelated.\n        So, for instance in the following case with two assemblies:\n        ```json\n        {\n          "assemblies": [\n            {\n              "sites_in_groups": [ [0], [1] ],\n              "group_probabilities": [0.2, 0.8],\n            },\n            {\n              "sites_in_groups": [ [2], [3] ],\n              "group_probabilities": [0.3, 0.7]\n            }\n          ]\n        }\n        ```\n\n        Site 0 is present with a probability of 20 % and site 1 with a probability of 80 %. These two sites are correlated (either site 0 or 1 is present). Similarly, site 2 is present with a probability of 30 % and site 3 with a probability of 70 %.\n        These two sites are correlated (either site 2 or 3 is present).\n        However, the presence or absence of sites 0 and 1 is not correlated with the presence or absence of sites 2 and 3 (in the specific example, the pair of sites (0, 2) can occur with 0.2*0.3 = 6 % probability; the pair (0, 3) with 0.2*0.7 = 14 % probability; the pair (1, 2) with 0.8*0.3 = 24 % probability; and the pair (1, 3) with 0.8*0.7 = 56 % probability).',
        title: 'Assemblies',
      }),
    cartesian_site_positions: z
      .array(z.array(z.number()).length(3))
      .nullable()
      .openapi({
        description:
          'Cartesian positions of each site in the structure.\nA site is usually used to describe positions of atoms; what atoms can be encountered at a given site is conveyed by the `species_at_sites` property, and the species themselves are described in the `species` property.\n\n- **Type**: list of list of floats\n\n- **Requirements/Conventions**:\n    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.\n    - **Query**: Support for queries on this property is OPTIONAL.\n      If supported, filters MAY support only a subset of comparison operators.\n    - It MUST be a list of length equal to the number of sites in the structure, where every element is a list of the three Cartesian coordinates of a site expressed as float values in the unit angstrom (Å).\n    - An entry MAY have multiple sites at the same Cartesian position (for a relevant use of this, see e.g., the property `assemblies`).\n\n- **Examples**:\n    - `[[0,0,0],[0,0,2]]` indicates a structure with two sites, one sitting at the origin and one along the (positive) *z*-axis, 2 Å away from the origin.',
        title: 'Cartesian Site Positions',
      }),
    chemical_formula_anonymous: z
      .string()
      .regex(/^([A-Z][a-z]?\d*)*$/)
      .nullable()
      .openapi({
        description:
          'The anonymous formula is the `chemical_formula_reduced`, but where the elements are instead first ordered by their chemical proportion number, and then, in order left to right, replaced by anonymous symbols A, B, C, ..., Z, Aa, Ba, ..., Za, Ab, Bb, ... and so on.\n\n- **Type**: string\n\n- **Requirements/Conventions**:\n    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.\n    - **Query**: MUST be a queryable property.\n      However, support for filters using partial string matching with this property is OPTIONAL (i.e., BEGINS WITH, ENDS WITH, and CONTAINS).\n\n- **Examples**:\n    - `"A2B"`\n    - `"A42B42C16D12E10F9G5"`\n\n- **Querying**:\n    - A filter that matches an exactly given formula is `chemical_formula_anonymous="A2B"`.',
        title: 'Chemical Formula Anonymous',
      }),
    chemical_formula_descriptive: z
      .string()
      .nullable()
      .openapi({
        description:
          'The chemical formula for a structure as a string in a form chosen by the API implementation.\n\n- **Type**: string\n\n- **Requirements/Conventions**:\n    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n    - The chemical formula is given as a string consisting of properly capitalized element symbols followed by integers or decimal numbers, balanced parentheses, square, and curly brackets `(`,`)`, `[`,`]`, `{`, `}`, commas, the `+`, `-`, `:` and `=` symbols. The parentheses are allowed to be followed by a number. Spaces are allowed anywhere except within chemical symbols. The order of elements and any groupings indicated by parentheses or brackets are chosen freely by the API implementation.\n    - The string SHOULD be arithmetically consistent with the element ratios in the `chemical_formula_reduced` property.\n    - It is RECOMMENDED, but not mandatory, that symbols, parentheses and brackets, if used, are used with the meanings prescribed by [IUPAC\'s Nomenclature of Organic Chemistry](https://www.qmul.ac.uk/sbcs/iupac/bibliog/blue.html).\n\n- **Examples**:\n    - `"(H2O)2 Na"`\n    - `"NaCl"`\n    - `"CaCO3"`\n    - `"CCaO3"`\n    - `"(CH3)3N+ - [CH2]2-OH = Me3N+ - CH2 - CH2OH"`\n\n- **Query examples**:\n    - Note: the free-form nature of this property is likely to make queries on it across different databases inconsistent.\n    - A filter that matches an exactly given formula: `chemical_formula_descriptive="(H2O)2 Na"`.\n    - A filter that does a partial match: `chemical_formula_descriptive CONTAINS "H2O"`.',
        title: 'Chemical Formula Descriptive',
      }),
    chemical_formula_hill: z
      .string()
      .regex(/^([A-Z][a-z]?\d*)*$/)
      .exactOptional()
      .openapi({
        description:
          'The chemical formula for a structure in [Hill form](https://dx.doi.org/10.1021/ja02046a005) with element symbols followed by integer chemical proportion numbers. The proportion number MUST be omitted if it is 1.\n\n- **Type**: string\n\n- **Requirements/Conventions**:\n    - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.\n    - **Query**: Support for queries on this property is OPTIONAL.\n      If supported, only a subset of the filter features MAY be supported.\n    - The overall scale factor of the chemical proportions is chosen such that the resulting values are integers that indicate the most chemically relevant unit of which the system is composed.\n      For example, if the structure is a repeating unit cell with four hydrogens and four oxygens that represents two hydroperoxide molecules, `chemical_formula_hill` is `"H2O2"` (i.e., not `"HO"`, nor `"H4O4"`).\n    - If the chemical insight needed to ascribe a Hill formula to the system is not present, the property MUST be handled as unset.\n    - Element symbols MUST have proper capitalization (e.g., `"Si"`, not `"SI"` for "silicon").\n    - Elements MUST be placed in [Hill order](https://dx.doi.org/10.1021/ja02046a005), followed by their integer chemical proportion number.\n      Hill order means: if carbon is present, it is placed first, and if also present, hydrogen is placed second.\n      After that, all other elements are ordered alphabetically.\n      If carbon is not present, all elements are ordered alphabetically.\n    - If the system has sites with partial occupation and the total occupations of each element do not all sum up to integers, then the Hill formula SHOULD be handled as unset.\n    - No spaces or separators are allowed.\n\n- **Examples**:\n    - `"H2O2"`\n\n- **Query examples**:\n    - A filter that matches an exactly given formula is `chemical_formula_hill="H2O2"`.',
        title: 'Chemical Formula Hill',
      }),
    chemical_formula_reduced: z
      .string()
      .regex(/^([A-Z][a-z]?\d*)*$/)
      .nullable()
      .openapi({
        description:
          'The reduced chemical formula for a structure as a string with element symbols and integer chemical proportion numbers.\nThe proportion number MUST be omitted if it is 1.\n\n- **Type**: string\n\n- **Requirements/Conventions**:\n    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.\n    - **Query**: MUST be a queryable property.\n      However, support for filters using partial string matching with this property is OPTIONAL (i.e., BEGINS WITH, ENDS WITH, and CONTAINS).\n      Intricate queries on formula components are instead suggested to be formulated using set-type filter operators on the multi valued `elements` and `elements_ratios` properties.\n    - Element symbols MUST have proper capitalization (e.g., `"Si"`, not `"SI"` for "silicon").\n    - Elements MUST be placed in alphabetical order, followed by their integer chemical proportion number.\n    - For structures with no partial occupation, the chemical proportion numbers are the smallest integers for which the chemical proportion is exactly correct.\n    - For structures with partial occupation, the chemical proportion numbers are integers that within reasonable approximation indicate the correct chemical proportions. The precise details of how to perform the rounding is chosen by the API implementation.\n    - No spaces or separators are allowed.\n\n- **Examples**:\n    - `"H2NaO"`\n    - `"ClNa"`\n    - `"CCaO3"`\n\n- **Query examples**:\n    - A filter that matches an exactly given formula is `chemical_formula_reduced="H2NaO"`.',
        title: 'Chemical Formula Reduced',
      }),
    dimension_types: z
      .array(PeriodicitySchema)
      .length(3)
      .nullable()
      .openapi({
        description:
          'List of three integers.\nFor each of the three directions indicated by the three lattice vectors (see property `lattice_vectors`), this list indicates if the direction is periodic (value `1`) or non-periodic (value `0`).\nNote: the elements in this list each refer to the direction of the corresponding entry in `lattice_vectors` and *not* the Cartesian x, y, z directions.\n\n- **Type**: list of integers.\n\n- **Requirements/Conventions**:\n    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.\n    - **Query**: Support for queries on this property is OPTIONAL.\n    - MUST be a list of length 3.\n    - Each integer element MUST assume only the value 0 or 1.\n\n- **Examples**:\n    - For a molecule: `[0, 0, 0]`\n    - For a wire along the direction specified by the third lattice vector: `[0, 0, 1]`\n    - For a 2D surface/slab, periodic on the plane defined by the first and third lattice vectors: `[1, 0, 1]`\n    - For a bulk 3D system: `[1, 1, 1]`',
        title: 'Dimension Types',
      }),
    elements: z
      .array(z.string())
      .nullable()
      .openapi({
        description:
          'Symbols of the different elements present in the structure.\n\n- **Type**: list of strings.\n\n- **Requirements/Conventions**:\n    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n    - The strings are the chemical symbols, i.e., either a single uppercase letter or an uppercase letter followed by a number of lowercase letters.\n    - The order MUST be alphabetical.\n    - MUST refer to the same elements in the same order, and therefore be of the same length, as `elements_ratios`, if the latter is provided.\n    - Note: This property SHOULD NOT contain the string "X" to indicate non-chemical elements or "vacancy" to indicate vacancies (in contrast to the field `chemical_symbols` for the `species` property).\n\n- **Examples**:\n    - `["Si"]`\n    - `["Al","O","Si"]`\n\n- **Query examples**:\n    - A filter that matches all records of structures that contain Si, Al **and** O, and possibly other elements: `elements HAS ALL "Si", "Al", "O"`.\n    - To match structures with exactly these three elements, use `elements HAS ALL "Si", "Al", "O" AND elements LENGTH 3`.\n    - Note: length queries on this property can be equivalently formulated by filtering on the `nelements`_ property directly.',
        title: 'Elements',
      }),
    elements_ratios: z
      .array(z.number())
      .nullable()
      .openapi({
        description:
          'Relative proportions of different elements in the structure.\n\n- **Type**: list of floats\n\n- **Requirements/Conventions**:\n    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n    - Composed by the proportions of elements in the structure as a list of floating point numbers.\n    - The sum of the numbers MUST be 1.0 (within floating point accuracy)\n    - MUST refer to the same elements in the same order, and therefore be of the same length, as `elements`, if the latter is provided.\n\n- **Examples**:\n    - `[1.0]`\n    - `[0.3333333333333333, 0.2222222222222222, 0.4444444444444444]`\n\n- **Query examples**:\n    - Note: Useful filters can be formulated using the set operator syntax for correlated values.\n      However, since the values are floating point values, the use of equality comparisons is generally inadvisable.\n    - OPTIONAL: a filter that matches structures where approximately 1/3 of the atoms in the structure are the element Al is: `elements:elements_ratios HAS ALL "Al":>0.3333, "Al":<0.3334`.',
        title: 'Elements Ratios',
      }),
    immutable_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The entry\'s immutable ID (e.g., an UUID). This is important for databases having preferred IDs that point to "the latest version" of a record, but still offer access to older variants. This ID maps to the version-specific record, in case it changes in the future.\n\n- **Type**: string.\n\n- **Requirements/Conventions**:\n    - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n\n- **Examples**:\n    - `"8bd3e750-b477-41a0-9b11-3a799f21b44f"`\n    - `"fjeiwoj,54;@=%<>#32"` (Strings that are not URL-safe are allowed.)',
        title: 'Immutable Id',
      }),
    last_modified: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({
        description:
          'Date and time representing when the entry was last modified.\n\n- **Type**: timestamp.\n\n- **Requirements/Conventions**:\n    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n    - **Response**: REQUIRED in the response unless the query parameter `response_fields` is present and does not include this property.\n\n- **Example**:\n    - As part of JSON response format: `"2007-04-05T14:30:20Z"` (i.e., encoded as an [RFC 3339 Internet Date/Time Format](https://tools.ietf.org/html/rfc3339#section-5.6) string.)',
        title: 'Last Modified',
      }),
    lattice_vectors: z
      .array(z.array(z.number()).length(3))
      .length(3)
      .nullable()
      .openapi({
        description:
          "The three lattice vectors in Cartesian coordinates, in ångström (Å).\n\n- **Type**: list of list of floats or unknown values.\n\n- **Requirements/Conventions**:\n    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.\n    - **Query**: Support for queries on this property is OPTIONAL.\n      If supported, filters MAY support only a subset of comparison operators.\n    - MUST be a list of three vectors *a*, *b*, and *c*, where each of the vectors MUST BE a list of the vector's coordinates along the x, y, and z Cartesian coordinates.\n      (Therefore, the first index runs over the three lattice vectors and the second index runs over the x, y, z Cartesian coordinates).\n    - For databases that do not define an absolute Cartesian system (e.g., only defining the length and angles between vectors), the first lattice vector SHOULD be set along *x* and the second on the *xy*-plane.\n    - MUST always contain three vectors of three coordinates each, independently of the elements of property `dimension_types`.\n      The vectors SHOULD by convention be chosen so the determinant of the `lattice_vectors` matrix is different from zero.\n      The vectors in the non-periodic directions have no significance beyond fulfilling these requirements.\n    - The coordinates of the lattice vectors of non-periodic dimensions (i.e., those dimensions for which `dimension_types` is `0`) MAY be given as a list of all `null` values.\n        If a lattice vector contains the value `null`, all coordinates of that lattice vector MUST be `null`.\n\n- **Examples**:\n    - `[[4.0,0.0,0.0],[0.0,4.0,0.0],[0.0,1.0,4.0]]` represents a cell, where the first vector is `(4, 0, 0)`, i.e., a vector aligned along the `x` axis of length 4 Å; the second vector is `(0, 4, 0)`; and the third vector is `(0, 1, 4)`.",
        title: 'Lattice Vectors',
      }),
    nelements: z
      .int()
      .nullable()
      .openapi({
        description:
          'Number of different elements in the structure as an integer.\n\n- **Type**: integer\n\n- **Requirements/Conventions**:\n    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n    - MUST be equal to the lengths of the list properties `elements` and `elements_ratios`, if they are provided.\n\n- **Examples**:\n    - `3`\n\n- **Querying**:\n    - Note: queries on this property can equivalently be formulated using `elements LENGTH`.\n    - A filter that matches structures that have exactly 4 elements: `nelements=4`.\n    - A filter that matches structures that have between 2 and 7 elements: `nelements>=2 AND nelements<=7`.',
        title: 'Nelements',
      }),
    nperiodic_dimensions: z
      .int()
      .nullable()
      .openapi({
        description:
          'An integer specifying the number of periodic dimensions in the structure, equivalent to the number of non-zero entries in `dimension_types`.\n\n- **Type**: integer\n\n- **Requirements/Conventions**:\n    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n    - The integer value MUST be between 0 and 3 inclusive and MUST be equal to the sum of the items in the `dimension_types` property.\n    - This property only reflects the treatment of the lattice vectors provided for the structure, and not any physical interpretation of the dimensionality of its contents.\n\n- **Examples**:\n    - `2` should be indicated in cases where `dimension_types` is any of `[1, 1, 0]`, `[1, 0, 1]`, `[0, 1, 1]`.\n\n- **Query examples**:\n    - Match only structures with exactly 3 periodic dimensions: `nperiodic_dimensions=3`\n    - Match all structures with 2 or fewer periodic dimensions: `nperiodic_dimensions<=2`',
        title: 'Nperiodic Dimensions',
      }),
    nsites: z
      .int()
      .nullable()
      .openapi({
        description:
          'An integer specifying the length of the `cartesian_site_positions` property.\n\n- **Type**: integer\n\n- **Requirements/Conventions**:\n    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n\n- **Examples**:\n    - `42`\n\n- **Query examples**:\n    - Match only structures with exactly 4 sites: `nsites=4`\n    - Match structures that have between 2 and 7 sites: `nsites>=2 AND nsites<=7`',
        title: 'Nsites',
      }),
    species: z
      .array(SpeciesSchema)
      .nullable()
      .openapi({
        description:
          'A list describing the species of the sites of this structure.\nSpecies can represent pure chemical elements, virtual-crystal atoms representing a statistical occupation of a given site by multiple chemical elements, and/or a location to which there are attached atoms, i.e., atoms whose precise location are unknown beyond that they are attached to that position (frequently used to indicate hydrogen atoms attached to another element, e.g., a carbon with three attached hydrogens might represent a methyl group, -CH3).\n\n- **Type**: list of dictionary with keys:\n    - `name`: string (REQUIRED)\n    - `chemical_symbols`: list of strings (REQUIRED)\n    - `concentration`: list of float (REQUIRED)\n    - `attached`: list of strings (REQUIRED)\n    - `nattached`: list of integers (OPTIONAL)\n    - `mass`: list of floats (OPTIONAL)\n    - `original_name`: string (OPTIONAL).\n\n- **Requirements/Conventions**:\n    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.\n    - **Query**: Support for queries on this property is OPTIONAL.\n        If supported, filters MAY support only a subset of comparison operators.\n    - Each list member MUST be a dictionary with the following keys:\n        - **name**: REQUIRED; gives the name of the species; the **name** value MUST be unique in the `species` list;\n        - **chemical_symbols**: REQUIRED; MUST be a list of strings of all chemical elements composing this species.\n          Each item of the list MUST be one of the following:\n            - a valid chemical-element symbol, or\n            - the special value `"X"` to represent a non-chemical element, or\n            - the special value `"vacancy"` to represent that this site has a non-zero probability of having a vacancy (the respective probability is indicated in the `concentration` list, see below).\n\n          If any one entry in the `species` list has a `chemical_symbols` list that is longer than 1 element, the correct flag MUST be set in the list `structure_features`.\n\n        - **concentration**: REQUIRED; MUST be a list of floats, with same length as `chemical_symbols`.\n          The numbers represent the relative concentration of the corresponding chemical symbol in this species.\n          The numbers SHOULD sum to one. Cases in which the numbers do not sum to one typically fall only in the following two categories:\n\n            - Numerical errors when representing float numbers in fixed precision, e.g. for two chemical symbols with concentrations `1/3` and `2/3`, the concentration might look something like `[0.33333333333, 0.66666666666]`. If the client is aware that the sum is not one because of numerical precision, it can renormalize the values so that the sum is exactly one.\n            - Experimental errors in the data present in the database. In this case, it is the responsibility of the client to decide how to process the data.\n\n            Note that concentrations are uncorrelated between different sites (even of the same species).\n\n        - **attached**: OPTIONAL; if provided MUST be a list of length 1 or more of strings of chemical symbols for the elements attached to this site, or "X" for a non-chemical element.\n\n        - **nattached**: OPTIONAL; if provided MUST be a list of length 1 or more of integers indicating the number of attached atoms of the kind specified in the value of the `attached` key.\n\n          The implementation MUST include either both or none of the `attached` and `nattached` keys, and if they are provided, they MUST be of the same length.\n          Furthermore, if they are provided, the `structure_features` property MUST include the string `site_attachments`.\n\n        - **mass**: OPTIONAL. If present MUST be a list of floats, with the same length as `chemical_symbols`, providing element masses expressed in a.m.u.\n          Elements denoting vacancies MUST have masses equal to 0.\n\n        - **original_name**: OPTIONAL. Can be any valid Unicode string, and SHOULD contain (if specified) the name of the species that is used internally in the source database.\n\n          Note: With regards to "source database", we refer to the immediate source being queried via the OPTIMADE API implementation.\n\n          The main use of this field is for source databases that use species names, containing characters that are not allowed (see description of the list property `species_at_sites`).\n\n    - For systems that have only species formed by a single chemical symbol, and that have at most one species per chemical symbol, SHOULD use the chemical symbol as species name (e.g., `"Ti"` for titanium, `"O"` for oxygen, etc.)\n      However, note that this is OPTIONAL, and client implementations MUST NOT assume that the key corresponds to a chemical symbol, nor assume that if the species name is a valid chemical symbol, that it represents a species with that chemical symbol.\n      This means that a species `{"name": "C", "chemical_symbols": ["Ti"], "concentration": [1.0]}` is valid and represents a titanium species (and *not* a carbon species).\n    - It is NOT RECOMMENDED that a structure includes species that do not have at least one corresponding site.\n\n- **Examples**:\n    - `[ {"name": "Ti", "chemical_symbols": ["Ti"], "concentration": [1.0]} ]`: any site with this species is occupied by a Ti atom.\n    - `[ {"name": "Ti", "chemical_symbols": ["Ti", "vacancy"], "concentration": [0.9, 0.1]} ]`: any site with this species is occupied by a Ti atom with 90 % probability, and has a vacancy with 10 % probability.\n    - `[ {"name": "BaCa", "chemical_symbols": ["vacancy", "Ba", "Ca"], "concentration": [0.05, 0.45, 0.5], "mass": [0.0, 137.327, 40.078]} ]`: any site with this species is occupied by a Ba atom with 45 % probability, a Ca atom with 50 % probability, and by a vacancy with 5 % probability. The mass of this site is (on average) 88.5 a.m.u.\n    - `[ {"name": "C12", "chemical_symbols": ["C"], "concentration": [1.0], "mass": [12.0]} ]`: any site with this species is occupied by a carbon isotope with mass 12.\n    - `[ {"name": "C13", "chemical_symbols": ["C"], "concentration": [1.0], "mass": [13.0]} ]`: any site with this species is occupied by a carbon isotope with mass 13.\n    - `[ {"name": "CH3", "chemical_symbols": ["C"], "concentration": [1.0], "attached": ["H"], "nattached": [3]} ]`: any site with this species is occupied by a methyl group, -CH3, which is represented without specifying precise positions of the hydrogen atoms.',
        title: 'Species',
      }),
    species_at_sites: z
      .array(z.string())
      .nullable()
      .openapi({
        description:
          'Name of the species at each site (where values for sites are specified with the same order of the property `cartesian_site_positions`).\nThe properties of the species are found in the property `species`.\n\n- **Type**: list of strings.\n\n- **Requirements/Conventions**:\n    - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.\n    - **Query**: Support for queries on this property is OPTIONAL.\n      If supported, filters MAY support only a subset of comparison operators.\n    - MUST have length equal to the number of sites in the structure (first dimension of the list property `cartesian_site_positions`).\n    - Each species name mentioned in the `species_at_sites` list MUST be described in the list property `species` (i.e. for each value in the `species_at_sites` list there MUST exist exactly one dictionary in the `species` list with the `name` attribute equal to the corresponding `species_at_sites` value).\n    - Each site MUST be associated only to a single species.\n      **Note**: However, species can represent mixtures of atoms, and multiple species MAY be defined for the same chemical element.\n      This latter case is useful when different atoms of the same type need to be grouped or distinguished, for instance in simulation codes to assign different initial spin states.\n\n- **Examples**:\n    - `["Ti","O2"]` indicates that the first site is hosting a species labeled `"Ti"` and the second a species labeled `"O2"`.\n    - `["Ac", "Ac", "Ag", "Ir"]` indicating the first two sites contains the `"Ac"` species, while the third and fourth sites contain the `"Ag"` and `"Ir"` species, respectively.',
        title: 'Species At Sites',
      }),
    structure_features: z
      .array(StructureFeaturesSchema)
      .openapi({
        description:
          'A list of strings that flag which special features are used by the structure.\n\n- **Type**: list of strings\n\n- **Requirements/Conventions**:\n    - **Support**: MUST be supported by all implementations, MUST NOT be `null`.\n    - **Query**: MUST be a queryable property.\n    Filters on the list MUST support all mandatory HAS-type queries.\n    Filter operators for comparisons on the string components MUST support equality, support for other comparison operators are OPTIONAL.\n    - MUST be an empty list if no special features are used.\n    - MUST be sorted alphabetically.\n    - If a special feature listed below is used, the list MUST contain the corresponding string.\n    - If a special feature listed below is not used, the list MUST NOT contain the corresponding string.\n    - **List of strings used to indicate special structure features**:\n        - `disorder`: this flag MUST be present if any one entry in the `species` list has a `chemical_symbols` list that is longer than 1 element.\n        - `implicit_atoms`: this flag MUST be present if the structure contains atoms that are not assigned to sites via the property `species_at_sites` (e.g., because their positions are unknown).\n           When this flag is present, the properties related to the chemical formula will likely not match the type and count of atoms represented by the `species_at_sites`, `species` and `assemblies` properties.\n        - `site_attachments`: this flag MUST be present if any one entry in the `species` list includes `attached` and `nattached`.\n        - `assemblies`: this flag MUST be present if the property `assemblies` is present.\n\n- **Examples**: A structure having implicit atoms and using assemblies: `["assemblies", "implicit_atoms"]`',
        title: 'Structure Features',
      }),
  })
  .openapi({
    description:
      'This class contains the Field for the attributes used to represent a structure, e.g. unit cell, atoms, positions.',
    required: [
      'last_modified',
      'elements',
      'nelements',
      'elements_ratios',
      'chemical_formula_descriptive',
      'chemical_formula_reduced',
      'chemical_formula_anonymous',
      'dimension_types',
      'nperiodic_dimensions',
      'lattice_vectors',
      'cartesian_site_positions',
      'nsites',
      'species',
      'species_at_sites',
      'structure_features',
    ],
    title: 'StructureResourceAttributes',
  })
  .openapi('StructureResourceAttributes')

const StructureResourceSchema = z
  .object({
    attributes: StructureResourceAttributesSchema,
    id: z
      .string()
      .openapi({
        description:
          'An entry\'s ID as defined in section Definition of Terms.\n\n- **Type**: string.\n\n- **Requirements/Conventions**:\n    - **Support**: MUST be supported by all implementations, MUST NOT be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n    - **Response**: REQUIRED in the response.\n\n- **Examples**:\n    - `"db/1234567"`\n    - `"cod/2000000"`\n    - `"cod/2000000@1234567"`\n    - `"nomad/L1234567890"`\n    - `"42"`',
        title: 'Id',
      }),
    links: ResourceLinksSchema.exactOptional().openapi({
      description: 'a links object containing links related to the resource.',
      title: 'Links',
    }),
    meta: MetaSchema.exactOptional().openapi({
      description:
        'a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship.',
      title: 'Meta',
    }),
    relationships: EntryRelationshipsSchema.exactOptional().openapi({
      description:
        'A dictionary containing references to other entries according to the description in section Relationships encoded as [JSON API Relationships](https://jsonapi.org/format/1.0/#document-resource-object-relationships).\nThe OPTIONAL human-readable description of the relationship MAY be provided in the `description` field inside the `meta` dictionary of the JSON API resource identifier object.',
      title: 'Relationships',
    }),
    type: z
      .string()
      .regex(/^structures$/)
      .openapi({
        description:
          'The name of the type of an entry.\n\n- **Type**: string.\n\n- **Requirements/Conventions**:\n    - **Support**: MUST be supported by all implementations, MUST NOT be `null`.\n    - **Query**: MUST be a queryable property with support for all mandatory filter features.\n    - **Response**: REQUIRED in the response.\n    - MUST be an existing entry type.\n    - The entry of type `<type>` and ID `<id>` MUST be returned in response to a request for `/<type>/<id>` under the versioned base URL.\n\n- **Examples**:\n    - `"structures"`',
        title: 'Type',
      }),
  })
  .openapi({
    description: 'Representing a structure.',
    required: ['id', 'type', 'attributes'],
    title: 'StructureResource',
  })
  .openapi('StructureResource')

const StructureResponseManySchema = z
  .object({
    data: z
      .union([z.array(StructureResourceSchema), z.array(z.object({}))])
      .openapi({
        description: 'List of unique OPTIMADE structures entry resource objects',
        title: 'Data',
      }),
    errors: z
      .array(ErrorSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'A list of unique errors', title: 'Errors' }),
    included: z
      .union([z.array(EntryResourceSchema), z.array(z.object({}))])
      .exactOptional()
      .openapi({ title: 'Included' }),
    jsonapi: JsonApiSchema.exactOptional().openapi({
      description: 'Information about the JSON API used',
      title: 'Jsonapi',
    }),
    links: ToplevelLinksSchema.exactOptional().openapi({
      description: 'Links associated with the primary data or errors',
      title: 'Links',
    }),
    meta: ResponseMetaSchema.openapi({
      description: 'A meta object containing non-standard information',
      title: 'Meta',
    }),
  })
  .openapi({
    description: 'errors are not allowed',
    required: ['data', 'meta'],
    title: 'StructureResponseMany',
  })
  .openapi('StructureResponseMany')

const StructureResponseOneSchema = z
  .object({
    data: z
      .union([StructureResourceSchema, z.object({})])
      .openapi({ description: 'A single structures entry resource', title: 'Data' }),
    errors: z
      .array(ErrorSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'A list of unique errors', title: 'Errors' }),
    included: z
      .union([z.array(EntryResourceSchema), z.array(z.object({}))])
      .exactOptional()
      .openapi({ title: 'Included' }),
    jsonapi: JsonApiSchema.exactOptional().openapi({
      description: 'Information about the JSON API used',
      title: 'Jsonapi',
    }),
    links: ToplevelLinksSchema.exactOptional().openapi({
      description: 'Links associated with the primary data or errors',
      title: 'Links',
    }),
    meta: ResponseMetaSchema.openapi({
      description: 'A meta object containing non-standard information',
      title: 'Meta',
    }),
  })
  .openapi({
    description: 'errors are not allowed',
    required: ['data', 'meta'],
    title: 'StructureResponseOne',
  })
  .openapi('StructureResponseOne')

export const getInfoRoute = createRoute({
  method: 'get',
  path: '/info',
  tags: ['Info'],
  summary: 'Get Info',
  operationId: 'get_info_info_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: InfoResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    501: {
      description: 'Not Implemented',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    553: {
      description: 'Version Not Supported',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getInfoEntryRoute = createRoute({
  method: 'get',
  path: '/info/{entry}',
  tags: ['Info'],
  summary: 'Get Entry Info',
  operationId: 'get_entry_info_info__entry__get',
  request: {
    params: z.object({
      entry: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'entry',
            required: true,
            schema: { title: 'Entry', type: 'string' },
          },
          title: 'Entry',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EntryInfoResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    501: {
      description: 'Not Implemented',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    553: {
      description: 'Version Not Supported',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getLinksRoute = createRoute({
  method: 'get',
  path: '/links',
  tags: ['Links'],
  summary: 'Get Links',
  operationId: 'get_links_links_get',
  request: {
    query: z.object({
      filter: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter string, in the format described in section API Filtering Format Specification of the specification.',
            in: 'query',
            name: 'filter',
            required: false,
            schema: {
              default: '',
              description:
                'A filter string, in the format described in section API Filtering Format Specification of the specification.',
              title: 'Filter',
              type: 'string',
            },
          },
          description:
            'A filter string, in the format described in section API Filtering Format Specification of the specification.',
          title: 'Filter',
        }),
      response_format: z
        .string()
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The output format requested (see section Response Format).\nDefaults to the format string 'json', which specifies the standard output format described in this specification.\nExample: `http://example.com/v1/structures?response_format=xml`",
            in: 'query',
            name: 'response_format',
            required: false,
            schema: {
              default: 'json',
              description:
                "The output format requested (see section Response Format).\nDefaults to the format string 'json', which specifies the standard output format described in this specification.\nExample: `http://example.com/v1/structures?response_format=xml`",
              title: 'Response Format',
              type: 'string',
            },
          },
          description:
            "The output format requested (see section Response Format).\nDefaults to the format string 'json', which specifies the standard output format described in this specification.\nExample: `http://example.com/v1/structures?response_format=xml`",
          title: 'Response Format',
        }),
      email_address: z
        .email()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'An email address of the user making the request.\nThe email SHOULD be that of a person and not an automatic system.\nExample: `http://example.com/v1/structures?email_address=user@example.com`',
            in: 'query',
            name: 'email_address',
            required: false,
            schema: {
              default: '',
              description:
                'An email address of the user making the request.\nThe email SHOULD be that of a person and not an automatic system.\nExample: `http://example.com/v1/structures?email_address=user@example.com`',
              format: 'email',
              title: 'Email Address',
              type: 'string',
            },
          },
          description:
            'An email address of the user making the request.\nThe email SHOULD be that of a person and not an automatic system.\nExample: `http://example.com/v1/structures?email_address=user@example.com`',
          title: 'Email Address',
        }),
      response_fields: z
        .string()
        .regex(/([a-z_][a-z_0-9]*(,[a-z_][a-z_0-9]*)*)?/)
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-delimited set of fields to be provided in the output.\nIf provided, these fields MUST be returned along with the REQUIRED fields.\nOther OPTIONAL fields MUST NOT be returned when this parameter is present.\nExample: `http://example.com/v1/structures?response_fields=last_modified,nsites`',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: {
              default: '',
              description:
                'A comma-delimited set of fields to be provided in the output.\nIf provided, these fields MUST be returned along with the REQUIRED fields.\nOther OPTIONAL fields MUST NOT be returned when this parameter is present.\nExample: `http://example.com/v1/structures?response_fields=last_modified,nsites`',
              pattern: '([a-z_][a-z_0-9]*(,[a-z_][a-z_0-9]*)*)?',
              title: 'Response Fields',
              type: 'string',
            },
          },
          description:
            'A comma-delimited set of fields to be provided in the output.\nIf provided, these fields MUST be returned along with the REQUIRED fields.\nOther OPTIONAL fields MUST NOT be returned when this parameter is present.\nExample: `http://example.com/v1/structures?response_fields=last_modified,nsites`',
          title: 'Response Fields',
        }),
      sort: z
        .string()
        .regex(/([a-z_][a-z_0-9]*(,[a-z_][a-z_0-9]*)*)?/)
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'If supporting sortable queries, an implementation MUST use the `sort` query parameter with format as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-sorting).\n\nAn implementation MAY support multiple sort fields for a single query.\nIf it does, it again MUST conform to the JSON API 1.0 specification.\n\nIf an implementation supports sorting for an entry listing endpoint, then the `/info/<entries>` endpoint MUST include, for each field name `<fieldname>` in its `data.properties.<fieldname>` response value that can be used for sorting, the key `sortable` with value `true`.\nIf a field name under an entry listing endpoint supporting sorting cannot be used for sorting, the server MUST either leave out the `sortable` key or set it equal to `false` for the specific field name.\nThe set of field names, with `sortable` equal to `true` are allowed to be used in the "sort fields" list according to its definition in the JSON API 1.0 specification.\nThe field `sortable` is in addition to each property description and other OPTIONAL fields.\nAn example is shown in the section Entry Listing Info Endpoints.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: '',
              description:
                'If supporting sortable queries, an implementation MUST use the `sort` query parameter with format as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-sorting).\n\nAn implementation MAY support multiple sort fields for a single query.\nIf it does, it again MUST conform to the JSON API 1.0 specification.\n\nIf an implementation supports sorting for an entry listing endpoint, then the `/info/<entries>` endpoint MUST include, for each field name `<fieldname>` in its `data.properties.<fieldname>` response value that can be used for sorting, the key `sortable` with value `true`.\nIf a field name under an entry listing endpoint supporting sorting cannot be used for sorting, the server MUST either leave out the `sortable` key or set it equal to `false` for the specific field name.\nThe set of field names, with `sortable` equal to `true` are allowed to be used in the "sort fields" list according to its definition in the JSON API 1.0 specification.\nThe field `sortable` is in addition to each property description and other OPTIONAL fields.\nAn example is shown in the section Entry Listing Info Endpoints.',
              pattern: '([a-z_][a-z_0-9]*(,[a-z_][a-z_0-9]*)*)?',
              title: 'Sort',
              type: 'string',
            },
          },
          description:
            'If supporting sortable queries, an implementation MUST use the `sort` query parameter with format as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-sorting).\n\nAn implementation MAY support multiple sort fields for a single query.\nIf it does, it again MUST conform to the JSON API 1.0 specification.\n\nIf an implementation supports sorting for an entry listing endpoint, then the `/info/<entries>` endpoint MUST include, for each field name `<fieldname>` in its `data.properties.<fieldname>` response value that can be used for sorting, the key `sortable` with value `true`.\nIf a field name under an entry listing endpoint supporting sorting cannot be used for sorting, the server MUST either leave out the `sortable` key or set it equal to `false` for the specific field name.\nThe set of field names, with `sortable` equal to `true` are allowed to be used in the "sort fields" list according to its definition in the JSON API 1.0 specification.\nThe field `sortable` is in addition to each property description and other OPTIONAL fields.\nAn example is shown in the section Entry Listing Info Endpoints.',
          title: 'Sort',
        }),
      page_limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sets a numerical limit on the number of entries returned.\nSee [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-pagination).\nThe API implementation MUST return no more than the number specified.\nIt MAY return fewer.\nThe database MAY have a maximum limit and not accept larger numbers (in which case an error code -- 403 Forbidden -- MUST be returned).\nThe default limit value is up to the API implementation to decide.\nExample: `http://example.com/optimade/v1/structures?page_limit=100`',
            in: 'query',
            name: 'page_limit',
            required: false,
            schema: {
              default: 20,
              description:
                'Sets a numerical limit on the number of entries returned.\nSee [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-pagination).\nThe API implementation MUST return no more than the number specified.\nIt MAY return fewer.\nThe database MAY have a maximum limit and not accept larger numbers (in which case an error code -- 403 Forbidden -- MUST be returned).\nThe default limit value is up to the API implementation to decide.\nExample: `http://example.com/optimade/v1/structures?page_limit=100`',
              minimum: 0,
              title: 'Page Limit',
              type: 'integer',
            },
          },
          description:
            'Sets a numerical limit on the number of entries returned.\nSee [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-pagination).\nThe API implementation MUST return no more than the number specified.\nIt MAY return fewer.\nThe database MAY have a maximum limit and not accept larger numbers (in which case an error code -- 403 Forbidden -- MUST be returned).\nThe default limit value is up to the API implementation to decide.\nExample: `http://example.com/optimade/v1/structures?page_limit=100`',
          title: 'Page Limit',
        }),
      page_offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'RECOMMENDED for use with _offset-based_ pagination: using `page_offset` and `page_limit` is RECOMMENDED.\nExample: Skip 50 structures and fetch up to 100: `/structures?page_offset=50&page_limit=100`.',
            in: 'query',
            name: 'page_offset',
            required: false,
            schema: {
              default: 0,
              description:
                'RECOMMENDED for use with _offset-based_ pagination: using `page_offset` and `page_limit` is RECOMMENDED.\nExample: Skip 50 structures and fetch up to 100: `/structures?page_offset=50&page_limit=100`.',
              minimum: 0,
              title: 'Page Offset',
              type: 'integer',
            },
          },
          description:
            'RECOMMENDED for use with _offset-based_ pagination: using `page_offset` and `page_limit` is RECOMMENDED.\nExample: Skip 50 structures and fetch up to 100: `/structures?page_offset=50&page_limit=100`.',
          title: 'Page Offset',
        }),
      page_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'RECOMMENDED for use with _page-based_ pagination: using `page_number` and `page_limit` is RECOMMENDED.\nIt is RECOMMENDED that the first page has number 1, i.e., that `page_number` is 1-based.\nExample: Fetch page 2 of up to 50 structures per page: `/structures?page_number=2&page_limit=50`.',
            in: 'query',
            name: 'page_number',
            required: false,
            schema: {
              default: 0,
              description:
                'RECOMMENDED for use with _page-based_ pagination: using `page_number` and `page_limit` is RECOMMENDED.\nIt is RECOMMENDED that the first page has number 1, i.e., that `page_number` is 1-based.\nExample: Fetch page 2 of up to 50 structures per page: `/structures?page_number=2&page_limit=50`.',
              minimum: 0,
              title: 'Page Number',
              type: 'integer',
            },
          },
          description:
            'RECOMMENDED for use with _page-based_ pagination: using `page_number` and `page_limit` is RECOMMENDED.\nIt is RECOMMENDED that the first page has number 1, i.e., that `page_number` is 1-based.\nExample: Fetch page 2 of up to 50 structures per page: `/structures?page_number=2&page_limit=50`.',
          title: 'Page Number',
        }),
      page_cursor: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'RECOMMENDED for use with _cursor-based_ pagination: using `page_cursor` and `page_limit` is RECOMMENDED.',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: {
              default: 0,
              description:
                'RECOMMENDED for use with _cursor-based_ pagination: using `page_cursor` and `page_limit` is RECOMMENDED.',
              minimum: 0,
              title: 'Page Cursor',
              type: 'integer',
            },
          },
          description:
            'RECOMMENDED for use with _cursor-based_ pagination: using `page_cursor` and `page_limit` is RECOMMENDED.',
          title: 'Page Cursor',
        }),
      page_above: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.\nExample: Fetch up to 100 structures above sort-field value 4000 (in this example, server chooses to fetch results sorted by increasing `id`, so `page_above` value refers to an `id` value): `/structures?page_above=4000&page_limit=100`.',
            in: 'query',
            name: 'page_above',
            required: false,
            schema: {
              default: 0,
              description:
                'RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.\nExample: Fetch up to 100 structures above sort-field value 4000 (in this example, server chooses to fetch results sorted by increasing `id`, so `page_above` value refers to an `id` value): `/structures?page_above=4000&page_limit=100`.',
              minimum: 0,
              title: 'Page Above',
              type: 'integer',
            },
          },
          description:
            'RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.\nExample: Fetch up to 100 structures above sort-field value 4000 (in this example, server chooses to fetch results sorted by increasing `id`, so `page_above` value refers to an `id` value): `/structures?page_above=4000&page_limit=100`.',
          title: 'Page Above',
        }),
      page_below: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.',
            in: 'query',
            name: 'page_below',
            required: false,
            schema: {
              default: 0,
              description:
                'RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.',
              minimum: 0,
              title: 'Page Below',
              type: 'integer',
            },
          },
          description:
            'RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.',
          title: 'Page Below',
        }),
      include: z
        .string()
        .default('references')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).\n\nAll related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.\n\nThe value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).\nIf relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.\n\nThe **default value** for `include` is `references`.\nThis means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.\nNote, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.\n\n> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.',
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              default: 'references',
              description:
                'A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).\n\nAll related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.\n\nThe value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).\nIf relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.\n\nThe **default value** for `include` is `references`.\nThis means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.\nNote, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.\n\n> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.',
              title: 'Include',
              type: 'string',
            },
          },
          description:
            'A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).\n\nAll related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.\n\nThe value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).\nIf relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.\n\nThe **default value** for `include` is `references`.\nThis means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.\nNote, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.\n\n> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.',
          title: 'Include',
        }),
      api_hint: z
        .string()
        .regex(/(v[0-9]+(\.[0-9]+)?)?/)
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.',
            in: 'query',
            name: 'api_hint',
            required: false,
            schema: {
              default: '',
              description:
                'If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.',
              pattern: '(v[0-9]+(\\.[0-9]+)?)?',
              title: 'Api Hint',
              type: 'string',
            },
          },
          description:
            'If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.',
          title: 'Api Hint',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: LinksResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    501: {
      description: 'Not Implemented',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    553: {
      description: 'Version Not Supported',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getReferencesRoute = createRoute({
  method: 'get',
  path: '/references',
  tags: ['References'],
  summary: 'Get References',
  operationId: 'get_references_references_get',
  request: {
    query: z.object({
      filter: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter string, in the format described in section API Filtering Format Specification of the specification.',
            in: 'query',
            name: 'filter',
            required: false,
            schema: {
              default: '',
              description:
                'A filter string, in the format described in section API Filtering Format Specification of the specification.',
              title: 'Filter',
              type: 'string',
            },
          },
          description:
            'A filter string, in the format described in section API Filtering Format Specification of the specification.',
          title: 'Filter',
        }),
      response_format: z
        .string()
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The output format requested (see section Response Format).\nDefaults to the format string 'json', which specifies the standard output format described in this specification.\nExample: `http://example.com/v1/structures?response_format=xml`",
            in: 'query',
            name: 'response_format',
            required: false,
            schema: {
              default: 'json',
              description:
                "The output format requested (see section Response Format).\nDefaults to the format string 'json', which specifies the standard output format described in this specification.\nExample: `http://example.com/v1/structures?response_format=xml`",
              title: 'Response Format',
              type: 'string',
            },
          },
          description:
            "The output format requested (see section Response Format).\nDefaults to the format string 'json', which specifies the standard output format described in this specification.\nExample: `http://example.com/v1/structures?response_format=xml`",
          title: 'Response Format',
        }),
      email_address: z
        .email()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'An email address of the user making the request.\nThe email SHOULD be that of a person and not an automatic system.\nExample: `http://example.com/v1/structures?email_address=user@example.com`',
            in: 'query',
            name: 'email_address',
            required: false,
            schema: {
              default: '',
              description:
                'An email address of the user making the request.\nThe email SHOULD be that of a person and not an automatic system.\nExample: `http://example.com/v1/structures?email_address=user@example.com`',
              format: 'email',
              title: 'Email Address',
              type: 'string',
            },
          },
          description:
            'An email address of the user making the request.\nThe email SHOULD be that of a person and not an automatic system.\nExample: `http://example.com/v1/structures?email_address=user@example.com`',
          title: 'Email Address',
        }),
      response_fields: z
        .string()
        .regex(/([a-z_][a-z_0-9]*(,[a-z_][a-z_0-9]*)*)?/)
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-delimited set of fields to be provided in the output.\nIf provided, these fields MUST be returned along with the REQUIRED fields.\nOther OPTIONAL fields MUST NOT be returned when this parameter is present.\nExample: `http://example.com/v1/structures?response_fields=last_modified,nsites`',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: {
              default: '',
              description:
                'A comma-delimited set of fields to be provided in the output.\nIf provided, these fields MUST be returned along with the REQUIRED fields.\nOther OPTIONAL fields MUST NOT be returned when this parameter is present.\nExample: `http://example.com/v1/structures?response_fields=last_modified,nsites`',
              pattern: '([a-z_][a-z_0-9]*(,[a-z_][a-z_0-9]*)*)?',
              title: 'Response Fields',
              type: 'string',
            },
          },
          description:
            'A comma-delimited set of fields to be provided in the output.\nIf provided, these fields MUST be returned along with the REQUIRED fields.\nOther OPTIONAL fields MUST NOT be returned when this parameter is present.\nExample: `http://example.com/v1/structures?response_fields=last_modified,nsites`',
          title: 'Response Fields',
        }),
      sort: z
        .string()
        .regex(/([a-z_][a-z_0-9]*(,[a-z_][a-z_0-9]*)*)?/)
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'If supporting sortable queries, an implementation MUST use the `sort` query parameter with format as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-sorting).\n\nAn implementation MAY support multiple sort fields for a single query.\nIf it does, it again MUST conform to the JSON API 1.0 specification.\n\nIf an implementation supports sorting for an entry listing endpoint, then the `/info/<entries>` endpoint MUST include, for each field name `<fieldname>` in its `data.properties.<fieldname>` response value that can be used for sorting, the key `sortable` with value `true`.\nIf a field name under an entry listing endpoint supporting sorting cannot be used for sorting, the server MUST either leave out the `sortable` key or set it equal to `false` for the specific field name.\nThe set of field names, with `sortable` equal to `true` are allowed to be used in the "sort fields" list according to its definition in the JSON API 1.0 specification.\nThe field `sortable` is in addition to each property description and other OPTIONAL fields.\nAn example is shown in the section Entry Listing Info Endpoints.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: '',
              description:
                'If supporting sortable queries, an implementation MUST use the `sort` query parameter with format as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-sorting).\n\nAn implementation MAY support multiple sort fields for a single query.\nIf it does, it again MUST conform to the JSON API 1.0 specification.\n\nIf an implementation supports sorting for an entry listing endpoint, then the `/info/<entries>` endpoint MUST include, for each field name `<fieldname>` in its `data.properties.<fieldname>` response value that can be used for sorting, the key `sortable` with value `true`.\nIf a field name under an entry listing endpoint supporting sorting cannot be used for sorting, the server MUST either leave out the `sortable` key or set it equal to `false` for the specific field name.\nThe set of field names, with `sortable` equal to `true` are allowed to be used in the "sort fields" list according to its definition in the JSON API 1.0 specification.\nThe field `sortable` is in addition to each property description and other OPTIONAL fields.\nAn example is shown in the section Entry Listing Info Endpoints.',
              pattern: '([a-z_][a-z_0-9]*(,[a-z_][a-z_0-9]*)*)?',
              title: 'Sort',
              type: 'string',
            },
          },
          description:
            'If supporting sortable queries, an implementation MUST use the `sort` query parameter with format as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-sorting).\n\nAn implementation MAY support multiple sort fields for a single query.\nIf it does, it again MUST conform to the JSON API 1.0 specification.\n\nIf an implementation supports sorting for an entry listing endpoint, then the `/info/<entries>` endpoint MUST include, for each field name `<fieldname>` in its `data.properties.<fieldname>` response value that can be used for sorting, the key `sortable` with value `true`.\nIf a field name under an entry listing endpoint supporting sorting cannot be used for sorting, the server MUST either leave out the `sortable` key or set it equal to `false` for the specific field name.\nThe set of field names, with `sortable` equal to `true` are allowed to be used in the "sort fields" list according to its definition in the JSON API 1.0 specification.\nThe field `sortable` is in addition to each property description and other OPTIONAL fields.\nAn example is shown in the section Entry Listing Info Endpoints.',
          title: 'Sort',
        }),
      page_limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sets a numerical limit on the number of entries returned.\nSee [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-pagination).\nThe API implementation MUST return no more than the number specified.\nIt MAY return fewer.\nThe database MAY have a maximum limit and not accept larger numbers (in which case an error code -- 403 Forbidden -- MUST be returned).\nThe default limit value is up to the API implementation to decide.\nExample: `http://example.com/optimade/v1/structures?page_limit=100`',
            in: 'query',
            name: 'page_limit',
            required: false,
            schema: {
              default: 20,
              description:
                'Sets a numerical limit on the number of entries returned.\nSee [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-pagination).\nThe API implementation MUST return no more than the number specified.\nIt MAY return fewer.\nThe database MAY have a maximum limit and not accept larger numbers (in which case an error code -- 403 Forbidden -- MUST be returned).\nThe default limit value is up to the API implementation to decide.\nExample: `http://example.com/optimade/v1/structures?page_limit=100`',
              minimum: 0,
              title: 'Page Limit',
              type: 'integer',
            },
          },
          description:
            'Sets a numerical limit on the number of entries returned.\nSee [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-pagination).\nThe API implementation MUST return no more than the number specified.\nIt MAY return fewer.\nThe database MAY have a maximum limit and not accept larger numbers (in which case an error code -- 403 Forbidden -- MUST be returned).\nThe default limit value is up to the API implementation to decide.\nExample: `http://example.com/optimade/v1/structures?page_limit=100`',
          title: 'Page Limit',
        }),
      page_offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'RECOMMENDED for use with _offset-based_ pagination: using `page_offset` and `page_limit` is RECOMMENDED.\nExample: Skip 50 structures and fetch up to 100: `/structures?page_offset=50&page_limit=100`.',
            in: 'query',
            name: 'page_offset',
            required: false,
            schema: {
              default: 0,
              description:
                'RECOMMENDED for use with _offset-based_ pagination: using `page_offset` and `page_limit` is RECOMMENDED.\nExample: Skip 50 structures and fetch up to 100: `/structures?page_offset=50&page_limit=100`.',
              minimum: 0,
              title: 'Page Offset',
              type: 'integer',
            },
          },
          description:
            'RECOMMENDED for use with _offset-based_ pagination: using `page_offset` and `page_limit` is RECOMMENDED.\nExample: Skip 50 structures and fetch up to 100: `/structures?page_offset=50&page_limit=100`.',
          title: 'Page Offset',
        }),
      page_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'RECOMMENDED for use with _page-based_ pagination: using `page_number` and `page_limit` is RECOMMENDED.\nIt is RECOMMENDED that the first page has number 1, i.e., that `page_number` is 1-based.\nExample: Fetch page 2 of up to 50 structures per page: `/structures?page_number=2&page_limit=50`.',
            in: 'query',
            name: 'page_number',
            required: false,
            schema: {
              default: 0,
              description:
                'RECOMMENDED for use with _page-based_ pagination: using `page_number` and `page_limit` is RECOMMENDED.\nIt is RECOMMENDED that the first page has number 1, i.e., that `page_number` is 1-based.\nExample: Fetch page 2 of up to 50 structures per page: `/structures?page_number=2&page_limit=50`.',
              minimum: 0,
              title: 'Page Number',
              type: 'integer',
            },
          },
          description:
            'RECOMMENDED for use with _page-based_ pagination: using `page_number` and `page_limit` is RECOMMENDED.\nIt is RECOMMENDED that the first page has number 1, i.e., that `page_number` is 1-based.\nExample: Fetch page 2 of up to 50 structures per page: `/structures?page_number=2&page_limit=50`.',
          title: 'Page Number',
        }),
      page_cursor: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'RECOMMENDED for use with _cursor-based_ pagination: using `page_cursor` and `page_limit` is RECOMMENDED.',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: {
              default: 0,
              description:
                'RECOMMENDED for use with _cursor-based_ pagination: using `page_cursor` and `page_limit` is RECOMMENDED.',
              minimum: 0,
              title: 'Page Cursor',
              type: 'integer',
            },
          },
          description:
            'RECOMMENDED for use with _cursor-based_ pagination: using `page_cursor` and `page_limit` is RECOMMENDED.',
          title: 'Page Cursor',
        }),
      page_above: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.\nExample: Fetch up to 100 structures above sort-field value 4000 (in this example, server chooses to fetch results sorted by increasing `id`, so `page_above` value refers to an `id` value): `/structures?page_above=4000&page_limit=100`.',
            in: 'query',
            name: 'page_above',
            required: false,
            schema: {
              default: 0,
              description:
                'RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.\nExample: Fetch up to 100 structures above sort-field value 4000 (in this example, server chooses to fetch results sorted by increasing `id`, so `page_above` value refers to an `id` value): `/structures?page_above=4000&page_limit=100`.',
              minimum: 0,
              title: 'Page Above',
              type: 'integer',
            },
          },
          description:
            'RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.\nExample: Fetch up to 100 structures above sort-field value 4000 (in this example, server chooses to fetch results sorted by increasing `id`, so `page_above` value refers to an `id` value): `/structures?page_above=4000&page_limit=100`.',
          title: 'Page Above',
        }),
      page_below: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.',
            in: 'query',
            name: 'page_below',
            required: false,
            schema: {
              default: 0,
              description:
                'RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.',
              minimum: 0,
              title: 'Page Below',
              type: 'integer',
            },
          },
          description:
            'RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.',
          title: 'Page Below',
        }),
      include: z
        .string()
        .default('references')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).\n\nAll related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.\n\nThe value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).\nIf relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.\n\nThe **default value** for `include` is `references`.\nThis means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.\nNote, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.\n\n> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.',
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              default: 'references',
              description:
                'A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).\n\nAll related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.\n\nThe value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).\nIf relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.\n\nThe **default value** for `include` is `references`.\nThis means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.\nNote, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.\n\n> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.',
              title: 'Include',
              type: 'string',
            },
          },
          description:
            'A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).\n\nAll related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.\n\nThe value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).\nIf relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.\n\nThe **default value** for `include` is `references`.\nThis means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.\nNote, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.\n\n> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.',
          title: 'Include',
        }),
      api_hint: z
        .string()
        .regex(/(v[0-9]+(\.[0-9]+)?)?/)
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.',
            in: 'query',
            name: 'api_hint',
            required: false,
            schema: {
              default: '',
              description:
                'If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.',
              pattern: '(v[0-9]+(\\.[0-9]+)?)?',
              title: 'Api Hint',
              type: 'string',
            },
          },
          description:
            'If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.',
          title: 'Api Hint',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ReferenceResponseManySchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    501: {
      description: 'Not Implemented',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    553: {
      description: 'Version Not Supported',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getReferencesEntryIdRoute = createRoute({
  method: 'get',
  path: '/references/{entry_id}',
  tags: ['References'],
  summary: 'Get Single Reference',
  operationId: 'get_single_reference_references__entry_id__get',
  request: {
    params: z.object({
      entry_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'entry_id',
            required: true,
            schema: { title: 'Entry Id', type: 'string' },
          },
          title: 'Entry Id',
        }),
    }),
    query: z.object({
      response_format: z
        .string()
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The output format requested (see section Response Format).\nDefaults to the format string 'json', which specifies the standard output format described in this specification.\nExample: `http://example.com/v1/structures?response_format=xml`",
            in: 'query',
            name: 'response_format',
            required: false,
            schema: {
              default: 'json',
              description:
                "The output format requested (see section Response Format).\nDefaults to the format string 'json', which specifies the standard output format described in this specification.\nExample: `http://example.com/v1/structures?response_format=xml`",
              title: 'Response Format',
              type: 'string',
            },
          },
          description:
            "The output format requested (see section Response Format).\nDefaults to the format string 'json', which specifies the standard output format described in this specification.\nExample: `http://example.com/v1/structures?response_format=xml`",
          title: 'Response Format',
        }),
      email_address: z
        .email()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'An email address of the user making the request.\nThe email SHOULD be that of a person and not an automatic system.\nExample: `http://example.com/v1/structures?email_address=user@example.com`',
            in: 'query',
            name: 'email_address',
            required: false,
            schema: {
              default: '',
              description:
                'An email address of the user making the request.\nThe email SHOULD be that of a person and not an automatic system.\nExample: `http://example.com/v1/structures?email_address=user@example.com`',
              format: 'email',
              title: 'Email Address',
              type: 'string',
            },
          },
          description:
            'An email address of the user making the request.\nThe email SHOULD be that of a person and not an automatic system.\nExample: `http://example.com/v1/structures?email_address=user@example.com`',
          title: 'Email Address',
        }),
      response_fields: z
        .string()
        .regex(/([a-z_][a-z_0-9]*(,[a-z_][a-z_0-9]*)*)?/)
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-delimited set of fields to be provided in the output.\nIf provided, these fields MUST be returned along with the REQUIRED fields.\nOther OPTIONAL fields MUST NOT be returned when this parameter is present.\nExample: `http://example.com/v1/structures?response_fields=last_modified,nsites`',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: {
              default: '',
              description:
                'A comma-delimited set of fields to be provided in the output.\nIf provided, these fields MUST be returned along with the REQUIRED fields.\nOther OPTIONAL fields MUST NOT be returned when this parameter is present.\nExample: `http://example.com/v1/structures?response_fields=last_modified,nsites`',
              pattern: '([a-z_][a-z_0-9]*(,[a-z_][a-z_0-9]*)*)?',
              title: 'Response Fields',
              type: 'string',
            },
          },
          description:
            'A comma-delimited set of fields to be provided in the output.\nIf provided, these fields MUST be returned along with the REQUIRED fields.\nOther OPTIONAL fields MUST NOT be returned when this parameter is present.\nExample: `http://example.com/v1/structures?response_fields=last_modified,nsites`',
          title: 'Response Fields',
        }),
      include: z
        .string()
        .default('references')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).\n\nAll related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.\n\nThe value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).\nIf relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.\n\nThe **default value** for `include` is `references`.\nThis means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.\nNote, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.\n\n> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.',
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              default: 'references',
              description:
                'A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).\n\nAll related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.\n\nThe value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).\nIf relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.\n\nThe **default value** for `include` is `references`.\nThis means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.\nNote, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.\n\n> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.',
              title: 'Include',
              type: 'string',
            },
          },
          description:
            'A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).\n\nAll related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.\n\nThe value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).\nIf relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.\n\nThe **default value** for `include` is `references`.\nThis means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.\nNote, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.\n\n> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.',
          title: 'Include',
        }),
      api_hint: z
        .string()
        .regex(/(v[0-9]+(\.[0-9]+)?)?/)
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.',
            in: 'query',
            name: 'api_hint',
            required: false,
            schema: {
              default: '',
              description:
                'If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.',
              pattern: '(v[0-9]+(\\.[0-9]+)?)?',
              title: 'Api Hint',
              type: 'string',
            },
          },
          description:
            'If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.',
          title: 'Api Hint',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ReferenceResponseOneSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    501: {
      description: 'Not Implemented',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    553: {
      description: 'Version Not Supported',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getStructuresRoute = createRoute({
  method: 'get',
  path: '/structures',
  tags: ['Structures'],
  summary: 'Get Structures',
  operationId: 'get_structures_structures_get',
  request: {
    query: z.object({
      filter: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter string, in the format described in section API Filtering Format Specification of the specification.',
            in: 'query',
            name: 'filter',
            required: false,
            schema: {
              default: '',
              description:
                'A filter string, in the format described in section API Filtering Format Specification of the specification.',
              title: 'Filter',
              type: 'string',
            },
          },
          description:
            'A filter string, in the format described in section API Filtering Format Specification of the specification.',
          title: 'Filter',
        }),
      response_format: z
        .string()
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The output format requested (see section Response Format).\nDefaults to the format string 'json', which specifies the standard output format described in this specification.\nExample: `http://example.com/v1/structures?response_format=xml`",
            in: 'query',
            name: 'response_format',
            required: false,
            schema: {
              default: 'json',
              description:
                "The output format requested (see section Response Format).\nDefaults to the format string 'json', which specifies the standard output format described in this specification.\nExample: `http://example.com/v1/structures?response_format=xml`",
              title: 'Response Format',
              type: 'string',
            },
          },
          description:
            "The output format requested (see section Response Format).\nDefaults to the format string 'json', which specifies the standard output format described in this specification.\nExample: `http://example.com/v1/structures?response_format=xml`",
          title: 'Response Format',
        }),
      email_address: z
        .email()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'An email address of the user making the request.\nThe email SHOULD be that of a person and not an automatic system.\nExample: `http://example.com/v1/structures?email_address=user@example.com`',
            in: 'query',
            name: 'email_address',
            required: false,
            schema: {
              default: '',
              description:
                'An email address of the user making the request.\nThe email SHOULD be that of a person and not an automatic system.\nExample: `http://example.com/v1/structures?email_address=user@example.com`',
              format: 'email',
              title: 'Email Address',
              type: 'string',
            },
          },
          description:
            'An email address of the user making the request.\nThe email SHOULD be that of a person and not an automatic system.\nExample: `http://example.com/v1/structures?email_address=user@example.com`',
          title: 'Email Address',
        }),
      response_fields: z
        .string()
        .regex(/([a-z_][a-z_0-9]*(,[a-z_][a-z_0-9]*)*)?/)
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-delimited set of fields to be provided in the output.\nIf provided, these fields MUST be returned along with the REQUIRED fields.\nOther OPTIONAL fields MUST NOT be returned when this parameter is present.\nExample: `http://example.com/v1/structures?response_fields=last_modified,nsites`',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: {
              default: '',
              description:
                'A comma-delimited set of fields to be provided in the output.\nIf provided, these fields MUST be returned along with the REQUIRED fields.\nOther OPTIONAL fields MUST NOT be returned when this parameter is present.\nExample: `http://example.com/v1/structures?response_fields=last_modified,nsites`',
              pattern: '([a-z_][a-z_0-9]*(,[a-z_][a-z_0-9]*)*)?',
              title: 'Response Fields',
              type: 'string',
            },
          },
          description:
            'A comma-delimited set of fields to be provided in the output.\nIf provided, these fields MUST be returned along with the REQUIRED fields.\nOther OPTIONAL fields MUST NOT be returned when this parameter is present.\nExample: `http://example.com/v1/structures?response_fields=last_modified,nsites`',
          title: 'Response Fields',
        }),
      sort: z
        .string()
        .regex(/([a-z_][a-z_0-9]*(,[a-z_][a-z_0-9]*)*)?/)
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'If supporting sortable queries, an implementation MUST use the `sort` query parameter with format as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-sorting).\n\nAn implementation MAY support multiple sort fields for a single query.\nIf it does, it again MUST conform to the JSON API 1.0 specification.\n\nIf an implementation supports sorting for an entry listing endpoint, then the `/info/<entries>` endpoint MUST include, for each field name `<fieldname>` in its `data.properties.<fieldname>` response value that can be used for sorting, the key `sortable` with value `true`.\nIf a field name under an entry listing endpoint supporting sorting cannot be used for sorting, the server MUST either leave out the `sortable` key or set it equal to `false` for the specific field name.\nThe set of field names, with `sortable` equal to `true` are allowed to be used in the "sort fields" list according to its definition in the JSON API 1.0 specification.\nThe field `sortable` is in addition to each property description and other OPTIONAL fields.\nAn example is shown in the section Entry Listing Info Endpoints.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: '',
              description:
                'If supporting sortable queries, an implementation MUST use the `sort` query parameter with format as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-sorting).\n\nAn implementation MAY support multiple sort fields for a single query.\nIf it does, it again MUST conform to the JSON API 1.0 specification.\n\nIf an implementation supports sorting for an entry listing endpoint, then the `/info/<entries>` endpoint MUST include, for each field name `<fieldname>` in its `data.properties.<fieldname>` response value that can be used for sorting, the key `sortable` with value `true`.\nIf a field name under an entry listing endpoint supporting sorting cannot be used for sorting, the server MUST either leave out the `sortable` key or set it equal to `false` for the specific field name.\nThe set of field names, with `sortable` equal to `true` are allowed to be used in the "sort fields" list according to its definition in the JSON API 1.0 specification.\nThe field `sortable` is in addition to each property description and other OPTIONAL fields.\nAn example is shown in the section Entry Listing Info Endpoints.',
              pattern: '([a-z_][a-z_0-9]*(,[a-z_][a-z_0-9]*)*)?',
              title: 'Sort',
              type: 'string',
            },
          },
          description:
            'If supporting sortable queries, an implementation MUST use the `sort` query parameter with format as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-sorting).\n\nAn implementation MAY support multiple sort fields for a single query.\nIf it does, it again MUST conform to the JSON API 1.0 specification.\n\nIf an implementation supports sorting for an entry listing endpoint, then the `/info/<entries>` endpoint MUST include, for each field name `<fieldname>` in its `data.properties.<fieldname>` response value that can be used for sorting, the key `sortable` with value `true`.\nIf a field name under an entry listing endpoint supporting sorting cannot be used for sorting, the server MUST either leave out the `sortable` key or set it equal to `false` for the specific field name.\nThe set of field names, with `sortable` equal to `true` are allowed to be used in the "sort fields" list according to its definition in the JSON API 1.0 specification.\nThe field `sortable` is in addition to each property description and other OPTIONAL fields.\nAn example is shown in the section Entry Listing Info Endpoints.',
          title: 'Sort',
        }),
      page_limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sets a numerical limit on the number of entries returned.\nSee [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-pagination).\nThe API implementation MUST return no more than the number specified.\nIt MAY return fewer.\nThe database MAY have a maximum limit and not accept larger numbers (in which case an error code -- 403 Forbidden -- MUST be returned).\nThe default limit value is up to the API implementation to decide.\nExample: `http://example.com/optimade/v1/structures?page_limit=100`',
            in: 'query',
            name: 'page_limit',
            required: false,
            schema: {
              default: 20,
              description:
                'Sets a numerical limit on the number of entries returned.\nSee [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-pagination).\nThe API implementation MUST return no more than the number specified.\nIt MAY return fewer.\nThe database MAY have a maximum limit and not accept larger numbers (in which case an error code -- 403 Forbidden -- MUST be returned).\nThe default limit value is up to the API implementation to decide.\nExample: `http://example.com/optimade/v1/structures?page_limit=100`',
              minimum: 0,
              title: 'Page Limit',
              type: 'integer',
            },
          },
          description:
            'Sets a numerical limit on the number of entries returned.\nSee [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-pagination).\nThe API implementation MUST return no more than the number specified.\nIt MAY return fewer.\nThe database MAY have a maximum limit and not accept larger numbers (in which case an error code -- 403 Forbidden -- MUST be returned).\nThe default limit value is up to the API implementation to decide.\nExample: `http://example.com/optimade/v1/structures?page_limit=100`',
          title: 'Page Limit',
        }),
      page_offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'RECOMMENDED for use with _offset-based_ pagination: using `page_offset` and `page_limit` is RECOMMENDED.\nExample: Skip 50 structures and fetch up to 100: `/structures?page_offset=50&page_limit=100`.',
            in: 'query',
            name: 'page_offset',
            required: false,
            schema: {
              default: 0,
              description:
                'RECOMMENDED for use with _offset-based_ pagination: using `page_offset` and `page_limit` is RECOMMENDED.\nExample: Skip 50 structures and fetch up to 100: `/structures?page_offset=50&page_limit=100`.',
              minimum: 0,
              title: 'Page Offset',
              type: 'integer',
            },
          },
          description:
            'RECOMMENDED for use with _offset-based_ pagination: using `page_offset` and `page_limit` is RECOMMENDED.\nExample: Skip 50 structures and fetch up to 100: `/structures?page_offset=50&page_limit=100`.',
          title: 'Page Offset',
        }),
      page_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'RECOMMENDED for use with _page-based_ pagination: using `page_number` and `page_limit` is RECOMMENDED.\nIt is RECOMMENDED that the first page has number 1, i.e., that `page_number` is 1-based.\nExample: Fetch page 2 of up to 50 structures per page: `/structures?page_number=2&page_limit=50`.',
            in: 'query',
            name: 'page_number',
            required: false,
            schema: {
              default: 0,
              description:
                'RECOMMENDED for use with _page-based_ pagination: using `page_number` and `page_limit` is RECOMMENDED.\nIt is RECOMMENDED that the first page has number 1, i.e., that `page_number` is 1-based.\nExample: Fetch page 2 of up to 50 structures per page: `/structures?page_number=2&page_limit=50`.',
              minimum: 0,
              title: 'Page Number',
              type: 'integer',
            },
          },
          description:
            'RECOMMENDED for use with _page-based_ pagination: using `page_number` and `page_limit` is RECOMMENDED.\nIt is RECOMMENDED that the first page has number 1, i.e., that `page_number` is 1-based.\nExample: Fetch page 2 of up to 50 structures per page: `/structures?page_number=2&page_limit=50`.',
          title: 'Page Number',
        }),
      page_cursor: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'RECOMMENDED for use with _cursor-based_ pagination: using `page_cursor` and `page_limit` is RECOMMENDED.',
            in: 'query',
            name: 'page_cursor',
            required: false,
            schema: {
              default: 0,
              description:
                'RECOMMENDED for use with _cursor-based_ pagination: using `page_cursor` and `page_limit` is RECOMMENDED.',
              minimum: 0,
              title: 'Page Cursor',
              type: 'integer',
            },
          },
          description:
            'RECOMMENDED for use with _cursor-based_ pagination: using `page_cursor` and `page_limit` is RECOMMENDED.',
          title: 'Page Cursor',
        }),
      page_above: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.\nExample: Fetch up to 100 structures above sort-field value 4000 (in this example, server chooses to fetch results sorted by increasing `id`, so `page_above` value refers to an `id` value): `/structures?page_above=4000&page_limit=100`.',
            in: 'query',
            name: 'page_above',
            required: false,
            schema: {
              default: 0,
              description:
                'RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.\nExample: Fetch up to 100 structures above sort-field value 4000 (in this example, server chooses to fetch results sorted by increasing `id`, so `page_above` value refers to an `id` value): `/structures?page_above=4000&page_limit=100`.',
              minimum: 0,
              title: 'Page Above',
              type: 'integer',
            },
          },
          description:
            'RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.\nExample: Fetch up to 100 structures above sort-field value 4000 (in this example, server chooses to fetch results sorted by increasing `id`, so `page_above` value refers to an `id` value): `/structures?page_above=4000&page_limit=100`.',
          title: 'Page Above',
        }),
      page_below: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.',
            in: 'query',
            name: 'page_below',
            required: false,
            schema: {
              default: 0,
              description:
                'RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.',
              minimum: 0,
              title: 'Page Below',
              type: 'integer',
            },
          },
          description:
            'RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.',
          title: 'Page Below',
        }),
      include: z
        .string()
        .default('references')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).\n\nAll related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.\n\nThe value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).\nIf relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.\n\nThe **default value** for `include` is `references`.\nThis means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.\nNote, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.\n\n> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.',
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              default: 'references',
              description:
                'A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).\n\nAll related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.\n\nThe value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).\nIf relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.\n\nThe **default value** for `include` is `references`.\nThis means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.\nNote, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.\n\n> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.',
              title: 'Include',
              type: 'string',
            },
          },
          description:
            'A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).\n\nAll related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.\n\nThe value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).\nIf relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.\n\nThe **default value** for `include` is `references`.\nThis means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.\nNote, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.\n\n> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.',
          title: 'Include',
        }),
      api_hint: z
        .string()
        .regex(/(v[0-9]+(\.[0-9]+)?)?/)
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.',
            in: 'query',
            name: 'api_hint',
            required: false,
            schema: {
              default: '',
              description:
                'If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.',
              pattern: '(v[0-9]+(\\.[0-9]+)?)?',
              title: 'Api Hint',
              type: 'string',
            },
          },
          description:
            'If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.',
          title: 'Api Hint',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: StructureResponseManySchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    501: {
      description: 'Not Implemented',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    553: {
      description: 'Version Not Supported',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getStructuresEntryIdRoute = createRoute({
  method: 'get',
  path: '/structures/{entry_id}',
  tags: ['Structures'],
  summary: 'Get Single Structure',
  operationId: 'get_single_structure_structures__entry_id__get',
  request: {
    params: z.object({
      entry_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'entry_id',
            required: true,
            schema: { title: 'Entry Id', type: 'string' },
          },
          title: 'Entry Id',
        }),
    }),
    query: z.object({
      response_format: z
        .string()
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The output format requested (see section Response Format).\nDefaults to the format string 'json', which specifies the standard output format described in this specification.\nExample: `http://example.com/v1/structures?response_format=xml`",
            in: 'query',
            name: 'response_format',
            required: false,
            schema: {
              default: 'json',
              description:
                "The output format requested (see section Response Format).\nDefaults to the format string 'json', which specifies the standard output format described in this specification.\nExample: `http://example.com/v1/structures?response_format=xml`",
              title: 'Response Format',
              type: 'string',
            },
          },
          description:
            "The output format requested (see section Response Format).\nDefaults to the format string 'json', which specifies the standard output format described in this specification.\nExample: `http://example.com/v1/structures?response_format=xml`",
          title: 'Response Format',
        }),
      email_address: z
        .email()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'An email address of the user making the request.\nThe email SHOULD be that of a person and not an automatic system.\nExample: `http://example.com/v1/structures?email_address=user@example.com`',
            in: 'query',
            name: 'email_address',
            required: false,
            schema: {
              default: '',
              description:
                'An email address of the user making the request.\nThe email SHOULD be that of a person and not an automatic system.\nExample: `http://example.com/v1/structures?email_address=user@example.com`',
              format: 'email',
              title: 'Email Address',
              type: 'string',
            },
          },
          description:
            'An email address of the user making the request.\nThe email SHOULD be that of a person and not an automatic system.\nExample: `http://example.com/v1/structures?email_address=user@example.com`',
          title: 'Email Address',
        }),
      response_fields: z
        .string()
        .regex(/([a-z_][a-z_0-9]*(,[a-z_][a-z_0-9]*)*)?/)
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-delimited set of fields to be provided in the output.\nIf provided, these fields MUST be returned along with the REQUIRED fields.\nOther OPTIONAL fields MUST NOT be returned when this parameter is present.\nExample: `http://example.com/v1/structures?response_fields=last_modified,nsites`',
            in: 'query',
            name: 'response_fields',
            required: false,
            schema: {
              default: '',
              description:
                'A comma-delimited set of fields to be provided in the output.\nIf provided, these fields MUST be returned along with the REQUIRED fields.\nOther OPTIONAL fields MUST NOT be returned when this parameter is present.\nExample: `http://example.com/v1/structures?response_fields=last_modified,nsites`',
              pattern: '([a-z_][a-z_0-9]*(,[a-z_][a-z_0-9]*)*)?',
              title: 'Response Fields',
              type: 'string',
            },
          },
          description:
            'A comma-delimited set of fields to be provided in the output.\nIf provided, these fields MUST be returned along with the REQUIRED fields.\nOther OPTIONAL fields MUST NOT be returned when this parameter is present.\nExample: `http://example.com/v1/structures?response_fields=last_modified,nsites`',
          title: 'Response Fields',
        }),
      include: z
        .string()
        .default('references')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).\n\nAll related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.\n\nThe value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).\nIf relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.\n\nThe **default value** for `include` is `references`.\nThis means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.\nNote, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.\n\n> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.',
            in: 'query',
            name: 'include',
            required: false,
            schema: {
              default: 'references',
              description:
                'A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).\n\nAll related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.\n\nThe value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).\nIf relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.\n\nThe **default value** for `include` is `references`.\nThis means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.\nNote, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.\n\n> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.',
              title: 'Include',
              type: 'string',
            },
          },
          description:
            'A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).\n\nAll related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.\n\nThe value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).\nIf relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.\n\nThe **default value** for `include` is `references`.\nThis means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.\nNote, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.\n\n> **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.',
          title: 'Include',
        }),
      api_hint: z
        .string()
        .regex(/(v[0-9]+(\.[0-9]+)?)?/)
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.',
            in: 'query',
            name: 'api_hint',
            required: false,
            schema: {
              default: '',
              description:
                'If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.',
              pattern: '(v[0-9]+(\\.[0-9]+)?)?',
              title: 'Api Hint',
              type: 'string',
            },
          },
          description:
            'If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.',
          title: 'Api Hint',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: StructureResponseOneSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    501: {
      description: 'Not Implemented',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    553: {
      description: 'Version Not Supported',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getVersionsRoute = createRoute({
  method: 'get',
  path: '/versions',
  tags: ['Versions'],
  summary: 'Get Versions',
  description: 'Respond with the text/csv representation for the served versions.',
  operationId: 'get_versions_versions_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'text/csv; header=present': { schema: z.string() } },
    },
  },
})
