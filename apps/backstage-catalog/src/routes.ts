import { createRoute, z } from '@hono/zod-openapi'

const ErrorSchema = z
  .object({
    error: z
      .object({
        name: z.string(),
        message: z.string(),
        stack: z.string().exactOptional(),
        code: z.string().exactOptional(),
      })
      .openapi({ required: ['name', 'message'] }),
    request: z
      .object({ method: z.string(), url: z.string() })
      .exactOptional()
      .openapi({ required: ['method', 'url'] }),
    response: z.object({ statusCode: z.number() }).openapi({ required: ['statusCode'] }),
  })
  .catchall(z.any())
  .openapi({ required: ['error', 'response'] })
  .openapi('Error')

const JsonObjectSchema = z
  .record(z.string(), z.any())
  .openapi({ description: 'A type representing all allowed JSON object values.' })
  .openapi('JsonObject')

const MapStringStringSchema = z
  .record(z.string(), z.string())
  .openapi({ description: 'Construct a type with a set of properties K of type T' })
  .openapi('MapStringString')

const EntityLinkSchema = z
  .strictObject({
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional value to categorize links into specific groups' }),
    icon: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional semantic key that represents a visual icon.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional descriptive title for the link.' }),
    url: z.string().openapi({ description: 'The url to the external site, document, etc.' }),
  })
  .openapi({
    required: ['url'],
    description: 'A link to external information that is related to the entity.',
  })
  .openapi('EntityLink')

const EntityMetaSchema = z
  .object({
    links: z
      .array(EntityLinkSchema)
      .exactOptional()
      .openapi({ description: 'A list of external hyperlinks related to the entity.' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of single-valued strings, to for example classify catalog entities in\nvarious ways.',
      }),
    annotations: MapStringStringSchema.exactOptional(),
    labels: MapStringStringSchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short (typically relatively few words, on one line) description of the\nentity.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A display name of the entity, to be presented in user interfaces instead\nof the `name` property above, when available.\nThis field is sometimes useful when the `name` is cumbersome or ends up\nbeing perceived as overly technical. The title generally does not have\nas stringent format requirements on it, so it may contain special\ncharacters and be more explanatory. Do keep it very short though, and\navoid situations where a title can be confused with the name of another\nentity, or where two entities share a title.\nNote that this is only for display purposes, and may be ignored by some\nparts of the code. Entity references still always make use of the `name`\nproperty, not the title.',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'The namespace that the entity belongs to.' }),
    name: z
      .string()
      .openapi({
        description:
          'The name of the entity.\nMust be unique within the catalog at any given point in time, for any\ngiven namespace + kind pair. This value is part of the technical\nidentifier of the entity, and as such it will appear in URLs, database\ntables, entity references, and similar. It is subject to restrictions\nregarding what characters are allowed.\nIf you want to use a different, more human readable string with fewer\nrestrictions on it in user interfaces, see the `title` field below.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque string that changes for each update operation to any part of\nthe entity, including metadata.\nThis field can not be set by the user at creation time, and the server\nwill reject an attempt to do so. The field will be populated in read\noperations. The field can (optionally) be specified when performing\nupdate or delete operations, and the server will then reject the\noperation if it does not match the current stored value.',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A globally unique ID for the entity.\nThis field can not be set by the user at creation time, and the server\nwill reject an attempt to do so. The field will be populated in read\noperations. The field can (optionally) be specified when performing\nupdate or delete operations, but the server is free to reject requests\nthat do so in such a way that it breaks semantics.',
      }),
  })
  .catchall(z.any())
  .openapi({
    required: ['name'],
    description: 'Metadata fields common to all versions/kinds of entity.',
  })
  .openapi('EntityMeta')

const EntityRelationSchema = z
  .strictObject({
    targetRef: z
      .string()
      .openapi({ description: 'The entity ref of the target of this relation.' }),
    type: z.string().openapi({ description: 'The type of the relation.' }),
  })
  .openapi({
    required: ['targetRef', 'type'],
    description: 'A relation of a specific type to another entity in the catalog.',
  })
  .openapi('EntityRelation')

const EntitySchema = z
  .object({
    relations: z
      .array(EntityRelationSchema)
      .exactOptional()
      .openapi({ description: 'The relations that this entity has with other entities.' }),
    spec: JsonObjectSchema.exactOptional(),
    metadata: EntityMetaSchema,
    kind: z.string().openapi({ description: 'The high level entity type being described.' }),
    apiVersion: z
      .string()
      .openapi({
        description:
          'The version of specification format for this particular entity that\nthis is written against.',
      }),
  })
  .openapi({
    required: ['metadata', 'kind', 'apiVersion'],
    description: "The parts of the format that's common to all versions/kinds of entity.",
  })
  .openapi('Entity')

const NullableEntitySchema = z
  .union([
    z
      .object({
        relations: z
          .array(EntityRelationSchema)
          .exactOptional()
          .openapi({ description: 'The relations that this entity has with other entities.' }),
        spec: JsonObjectSchema.exactOptional(),
        metadata: EntityMetaSchema,
        kind: z.string().openapi({ description: 'The high level entity type being described.' }),
        apiVersion: z
          .string()
          .openapi({
            description:
              'The version of specification format for this particular entity that\nthis is written against.',
          }),
      })
      .openapi({
        required: ['metadata', 'kind', 'apiVersion'],
        description: "The parts of the format that's common to all versions/kinds of entity.",
      }),
    z.null().nullable(),
  ])
  .openapi('NullableEntity')

const EntityAncestryResponseSchema = z
  .strictObject({
    items: z.array(
      z
        .object({ parentEntityRefs: z.array(z.string()), entity: EntitySchema })
        .openapi({ required: ['parentEntityRefs', 'entity'] }),
    ),
    rootEntityRef: z.string(),
  })
  .openapi({ required: ['items', 'rootEntityRef'] })
  .openapi('EntityAncestryResponse')

const EntitiesBatchResponseSchema = z
  .strictObject({
    items: z
      .array(NullableEntitySchema)
      .openapi({
        description:
          'The list of entities, in the same order as the refs in the request. Entries\nthat are null signify that no entity existed with that ref.',
      }),
  })
  .openapi({ required: ['items'] })
  .openapi('EntitiesBatchResponse')

const EntityFacetSchema = z
  .strictObject({ value: z.string(), count: z.number() })
  .openapi({ required: ['value', 'count'] })
  .openapi('EntityFacet')

const EntityFacetsResponseSchema = z
  .strictObject({ facets: z.record(z.string(), z.array(EntityFacetSchema)) })
  .openapi({ required: ['facets'] })
  .openapi('EntityFacetsResponse')

const LocationSchema = z
  .strictObject({
    target: z.string(),
    type: z.string(),
    id: z.string(),
    entityRef: z
      .string()
      .openapi({
        description:
          'The entity ref of the corresponding Location kind entity, e.g. location:default/generated-<sha1hex>.',
      }),
  })
  .openapi({
    required: ['target', 'type', 'id', 'entityRef'],
    description: 'Entity location for a specific entity.',
  })
  .openapi('Location')

const LocationSpecSchema = z
  .strictObject({ target: z.string(), type: z.string() })
  .openapi({ required: ['target', 'type'], description: 'Holds the entity location information.' })
  .openapi('LocationSpec')

const LocationsQueryResponseSchema = z
  .strictObject({
    items: z
      .array(LocationSchema)
      .openapi({ description: 'The list of locations paginated by a specific query.' }),
    totalItems: z.number(),
    pageInfo: z
      .object({
        nextCursor: z
          .string()
          .exactOptional()
          .openapi({ description: 'The cursor for the next batch of locations.' }),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['items', 'totalItems', 'pageInfo'] })
  .openapi('LocationsQueryResponse')

const AnalyzeLocationExistingEntitySchema = z
  .strictObject({ entity: EntitySchema, isRegistered: z.boolean(), location: LocationSpecSchema })
  .openapi({
    required: ['entity', 'isRegistered', 'location'],
    description:
      "If the folder pointed to already contained catalog info yaml files, they are\nread and emitted like this so that the frontend can inform the user that it\nlocated them and can make sure to register them as well if they weren't\nalready",
  })
  .openapi('AnalyzeLocationExistingEntity')

const RecursivePartialEntityRelationSchema = z
  .strictObject({
    targetRef: z
      .string()
      .exactOptional()
      .openapi({ description: 'The entity ref of the target of this relation.' }),
    type: z.string().exactOptional().openapi({ description: 'The type of the relation.' }),
  })
  .openapi({
    description: 'A relation of a specific type to another entity in the catalog.',
    required: [],
  })
  .openapi('RecursivePartialEntityRelation')

const RecursivePartialEntityMetaSchema = JsonObjectSchema.and(
  z
    .object({
      links: z
        .array(EntityLinkSchema)
        .exactOptional()
        .openapi({ description: 'A list of external hyperlinks related to the entity.' }),
      tags: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description:
            'A list of single-valued strings, to for example classify catalog entities in\nvarious ways.',
        }),
      annotations: MapStringStringSchema.exactOptional(),
      labels: MapStringStringSchema.exactOptional(),
      description: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'A short (typically relatively few words, on one line) description of the\nentity.',
        }),
      title: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'A display name of the entity, to be presented in user interfaces instead\nof the `name` property above, when available.\nThis field is sometimes useful when the `name` is cumbersome or ends up\nbeing perceived as overly technical. The title generally does not have\nas stringent format requirements on it, so it may contain special\ncharacters and be more explanatory. Do keep it very short though, and\navoid situations where a title can be confused with the name of another\nentity, or where two entities share a title.\nNote that this is only for display purposes, and may be ignored by some\nparts of the code. Entity references still always make use of the `name`\nproperty, not the title.',
        }),
      namespace: z
        .string()
        .exactOptional()
        .openapi({ description: 'The namespace that the entity belongs to.' }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The name of the entity.\nMust be unique within the catalog at any given point in time, for any\ngiven namespace + kind pair. This value is part of the technical\nidentifier of the entity, and as such it will appear in URLs, database\ntables, entity references, and similar. It is subject to restrictions\nregarding what characters are allowed.\nIf you want to use a different, more human readable string with fewer\nrestrictions on it in user interfaces, see the `title` field below.',
        }),
      etag: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'An opaque string that changes for each update operation to any part of\nthe entity, including metadata.\nThis field can not be set by the user at creation time, and the server\nwill reject an attempt to do so. The field will be populated in read\noperations. The field can (optionally) be specified when performing\nupdate or delete operations, and the server will then reject the\noperation if it does not match the current stored value.',
        }),
      uid: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'A globally unique ID for the entity.\nThis field can not be set by the user at creation time, and the server\nwill reject an attempt to do so. The field will be populated in read\noperations. The field can (optionally) be specified when performing\nupdate or delete operations, but the server is free to reject requests\nthat do so in such a way that it breaks semantics.',
        }),
    })
    .openapi({
      description: 'Metadata fields common to all versions/kinds of entity.',
      required: [],
    }),
).openapi('RecursivePartialEntityMeta')

const RecursivePartialEntitySchema = z
  .strictObject({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of specification format for this particular entity that\nthis is written against.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The high level entity type being described.' }),
    metadata: RecursivePartialEntityMetaSchema.exactOptional(),
    spec: JsonObjectSchema.exactOptional(),
    relations: z
      .array(RecursivePartialEntityRelationSchema)
      .exactOptional()
      .openapi({ description: 'The relations that this entity has with other entities.' }),
  })
  .openapi({ description: 'Makes all keys of an entire hierarchy optional.', required: [] })
  .openapi('RecursivePartialEntity')

const AnalyzeLocationEntityFieldSchema = z
  .strictObject({
    description: z
      .string()
      .openapi({
        description:
          'A text to show to the user to inform about the choices made. Like, it could say\n"Found a CODEOWNERS file that covers this target, so we suggest leaving this\nfield empty; which would currently make it owned by X" where X is taken from the\ncodeowners file.',
      }),
    value: z.xor([z.string(), z.null().nullable()]),
    state: z
      .enum(['analysisSuggestedValue', 'analysisSuggestedNoValue', 'needsUserInput'])
      .openapi({ description: 'The outcome of the analysis for this particular field' }),
    field: z
      .string()
      .openapi({
        description:
          'e.g. "spec.owner"? The frontend needs to know how to "inject" the field into the\nentity again if the user wants to change it',
      }),
  })
  .openapi({ required: ['description', 'value', 'state', 'field'] })
  .openapi('AnalyzeLocationEntityField')

const AnalyzeLocationGenerateEntitySchema = z
  .strictObject({
    fields: z.array(AnalyzeLocationEntityFieldSchema),
    entity: RecursivePartialEntitySchema,
  })
  .openapi({
    required: ['fields', 'entity'],
    description:
      "This is some form of representation of what the analyzer could deduce.\nWe should probably have a chat about how this can best be conveyed to\nthe frontend. It'll probably contain a (possibly incomplete) entity, plus\nenough info for the frontend to know what form data to show to the user\nfor overriding/completing the info.",
  })
  .openapi('AnalyzeLocationGenerateEntity')

const AnalyzeLocationResponseSchema = z
  .strictObject({
    generateEntities: z.array(AnalyzeLocationGenerateEntitySchema),
    existingEntityFiles: z.array(AnalyzeLocationExistingEntitySchema),
  })
  .openapi({ required: ['generateEntities', 'existingEntityFiles'] })
  .openapi('AnalyzeLocationResponse')

const LocationInputSchema = z
  .strictObject({ type: z.string(), target: z.string() })
  .openapi({ required: ['type', 'target'] })
  .openapi('LocationInput')

const EntitiesQueryResponseSchema = z
  .strictObject({
    items: z
      .array(EntitySchema)
      .openapi({ description: 'The list of entities paginated by a specific filter.' }),
    totalItems: z.number(),
    pageInfo: z
      .object({
        nextCursor: z
          .string()
          .exactOptional()
          .openapi({ description: 'The cursor for the next batch of entities.' }),
        prevCursor: z
          .string()
          .exactOptional()
          .openapi({ description: 'The cursor for the previous batch of entities.' }),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['items', 'totalItems', 'pageInfo'] })
  .openapi('EntitiesQueryResponse')

const ErrorResponseResponse = {
  description: 'An error response from the backend.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const KindParamsSchema = z
  .string()
  .openapi({ param: { name: 'kind', in: 'path', required: true, schema: { type: 'string' } } })

const NamespaceParamsSchema = z
  .string()
  .openapi({ param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } } })

const NameParamsSchema = z
  .string()
  .openapi({ param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } } })

const UidParamsSchema = z
  .string()
  .openapi({ param: { name: 'uid', in: 'path', required: true, schema: { type: 'string' } } })

const CursorParamsSchema = z
  .string()
  .min(1)
  .exactOptional()
  .openapi({
    param: {
      name: 'cursor',
      in: 'query',
      description:
        'You may pass the `cursor` query parameters to perform cursor based pagination\nthrough the set of entities. The value of `cursor` will be returned in the response, under the `pageInfo` property:\n\n```json\n  "pageInfo": {\n    "nextCursor": "a-cursor",\n    "prevCursor": "another-cursor"\n  }\n```\n\nIf `nextCursor` exists, it can be used to retrieve the next batch of entities. Following the same approach,\nif `prevCursor` exists, it can be used to retrieve the previous batch of entities.\n\n- [`filter`](#filtering), for selecting only a subset of all entities\n- [`fields`](#field-selection), for selecting only parts of the full data\n  structure of each entity\n- `limit` for limiting the number of entities returned (20 is the default)\n- [`orderField`](#ordering), for deciding the order of the entities\n- `fullTextFilter`\n  **NOTE**: [`filter`, `orderField`, `fullTextFilter`] and `cursor` are mutually exclusive. This means that,\n  it isn\'t possible to change any of [`filter`, `orderField`, `fullTextFilter`] when passing `cursor` as query parameters,\n  as changing any of these properties will affect pagination. If any of `filter`, `orderField`, `fullTextFilter` is specified together with `cursor`, only the latter is taken into consideration.\n',
      required: false,
      allowReserved: true,
      schema: { type: 'string', minLength: 1 },
    },
  })

const AfterParamsSchema = z
  .string()
  .min(1)
  .exactOptional()
  .openapi({
    param: {
      name: 'after',
      in: 'query',
      description: 'Pointer to the previous page of results.',
      required: false,
      allowReserved: true,
      schema: { type: 'string', minLength: 1 },
    },
  })

const FieldsParamsSchema = z
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
      name: 'fields',
      in: 'query',
      description:
        "By default the full entities are returned, but you can pass in a `fields` query\nparameter which selects what parts of the entity data to retain. This makes the\nresponse smaller and faster to transfer, and may allow the catalog to perform\nmore efficient queries.\n\nThe query parameter value is a comma separated list of simplified JSON paths\nlike above. Each path corresponds to the key of either a value, or of a subtree\nroot that you want to keep in the output. The rest is pruned away. For example,\nspecifying `?fields=metadata.name,metadata.annotations,spec` retains only the\n`name` and `annotations` fields of the `metadata` of each entity (it'll be an\nobject with at most two keys), keeps the entire `spec` unchanged, and cuts out\nall other roots such as `relations`.\n\nSome more real world usable examples:\n\n- Return only enough data to form the full ref of each entity:\n\n  `/entities/by-query?fields=kind,metadata.namespace,metadata.name`\n",
      required: false,
      allowReserved: true,
      explode: false,
      schema: { type: 'array', items: { type: 'string' } },
      examples: {
        'Get name and the entire relations collection': { value: ['metadata.name', 'relations'] },
        'Get kind, name and namespace': { value: ['kind', 'metadata.name', 'metadata.namespace'] },
      },
    },
  })

const FilterParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'filter',
      in: 'query',
      description:
        'You can pass in one or more filter sets that get matched against each entity.\nEach filter set is a number of conditions that all have to match for the\ncondition to be true (conditions effectively have an AND between them). At least\none filter set has to be true for the entity to be part of the result set\n(filter sets effectively have an OR between them).\n\nExample:\n\n```text\n/entities/by-query?filter=kind=user,metadata.namespace=default&filter=kind=group,spec.type\n\n  Return entities that match\n\n    Filter set 1:\n      Condition 1: kind = user\n                  AND\n      Condition 2: metadata.namespace = default\n\n    OR\n\n    Filter set 2:\n      Condition 1: kind = group\n                  AND\n      Condition 2: spec.type exists\n```\n\nEach condition is either on the form `<key>`, or on the form `<key>=<value>`.\nThe first form asserts on the existence of a certain key (with any value), and\nthe second asserts that the key exists and has a certain value. All checks are\nalways case _insensitive_.\n\nIn all cases, the key is a simplified JSON path in a given piece of entity data.\nEach part of the path is a key of an object, and the traversal also descends\nthrough arrays. There are two special forms:\n\n- Array items that are simple value types (such as strings) match on a key-value\n  pair where the key is the item as a string, and the value is the string `true`\n- Relations can be matched on a `relations.<type>=<targetRef>` form\n\nLet\'s look at a simplified example to illustrate the concept:\n\n```json\n{\n  "a": {\n    "b": ["c", { "d": 1 }],\n    "e": 7\n  }\n}\n```\n\nThis would match any one of the following conditions:\n\n- `a`\n- `a.b`\n- `a.b.c`\n- `a.b.c=true`\n- `a.b.d`\n- `a.b.d=1`\n- `a.e`\n- `a.e=7`\n\nSome more real world usable examples:\n\n- Return all orphaned entities:\n\n  `/entities/by-query?filter=metadata.annotations.backstage.io/orphan=true`\n\n- Return all users and groups:\n\n  `/entities/by-query?filter=kind=user&filter=kind=group`\n\n- Return all service components:\n\n  `/entities/by-query?filter=kind=component,spec.type=service`\n\n- Return all entities with the `java` tag:\n\n  `/entities/by-query?filter=metadata.tags.java`\n\n- Return all users who are members of the `ops` group (note that the full\n  [reference](references.md) of the group is used):\n\n  `/entities/by-query?filter=kind=user,relations.memberof=group:default/ops`\n',
      required: false,
      allowReserved: true,
      schema: { type: 'array', items: { type: 'string' } },
      examples: {
        'Get groups': { value: ['kind=group'] },
        'Get orphaned components': {
          value: ['kind=component,metadata.annotations.backstage.io/orphan=true'],
        },
      },
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
    z.int().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'offset',
      in: 'query',
      description: 'Number of records to skip in the query page.',
      required: false,
      allowReserved: true,
      schema: { type: 'integer', minimum: 0 },
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
    z.int().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      in: 'query',
      description: 'Number of records to return in the response.',
      required: false,
      allowReserved: true,
      schema: { type: 'integer', minimum: 0 },
    },
  })

const OrderFieldParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(z.string().openapi({ description: 'A two-item tuple of [field, order].' })),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'orderField',
      in: 'query',
      description:
        'By default the entities are returned ordered by their internal uid. You can\ncustomize the `orderField` query parameters to affect that ordering.\n\nFor example, to return entities by their name:\n\n`/entities/by-query?orderField=metadata.name,asc`\n\nEach parameter can be followed by `asc` for ascending lexicographical order or\n`desc` for descending (reverse) lexicographical order.\n\n**Note:** although `orderField` accepts a list, the `entities/by-query`\nendpoint currently applies only the first value; any additional order\nfields are ignored (the backend logs a warning). Multi-field ordering is\ntracked in https://github.com/backstage/backstage/issues/17560. For\nmulti-field ordering today, use the legacy `GET /entities` `order`\nparameter.\n',
      required: false,
      allowReserved: true,
      schema: {
        type: 'array',
        items: { type: 'string', description: 'A two-item tuple of [field, order].' },
      },
      explode: true,
      style: 'form',
      examples: {
        'Order ascending by name': { value: ['metadata.name,asc'] },
        'Order descending by owner': { value: ['spec.owner,desc'] },
      },
    },
  })

const TotalItemsParamsSchema = z
  .enum(['include', 'exclude'])
  .exactOptional()
  .openapi({
    param: {
      name: 'totalItems',
      in: 'query',
      description:
        "Controls whether the response's `totalItems` field is computed. Computing\nthe total may be expensive for large catalogs; pass `exclude` if the\ncaller does not need it (e.g. cursor-paginated UIs that only display the\ncount cosmetically). Defaults to `include`. New values may be added in\nthe future, such as an approximate mode.\n",
      required: false,
      allowReserved: true,
      schema: { type: 'string', enum: ['include', 'exclude'] },
    },
  })

const JWTSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }

export const postRefreshRoute = createRoute({
  method: 'post',
  path: '/refresh',
  tags: ['Entity'],
  description: 'Refresh the entity related to entityRef.',
  operationId: 'RefreshEntity',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              authorizationToken: z.string().exactOptional(),
              entityRef: z
                .string()
                .openapi({
                  description: 'The reference to a single entity that should be refreshed',
                }),
            })
            .openapi({
              required: ['entityRef'],
              description: 'Options for requesting a refresh of entities in the catalog.',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Refreshed' },
    400: ErrorResponseResponse,
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const getEntitiesRoute = createRoute({
  method: 'get',
  path: '/entities',
  tags: ['Entity'],
  description: 'Get all entities matching a given filter.',
  operationId: 'GetEntities',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      filter: FilterParamsSchema,
      offset: OffsetParamsSchema,
      after: AfterParamsSchema,
      order: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'order',
            in: 'query',
            allowReserved: true,
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(EntitySchema) } } },
    400: ErrorResponseResponse,
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const getEntitiesByUidUidRoute = createRoute({
  method: 'get',
  path: '/entities/by-uid/{uid}',
  tags: ['Entity'],
  description: 'Get a single entity by the UID.',
  operationId: 'GetEntityByUid',
  request: { params: z.object({ uid: UidParamsSchema }) },
  responses: {
    200: { description: 'Ok', content: { 'application/json': { schema: EntitySchema } } },
    400: ErrorResponseResponse,
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const deleteEntitiesByUidUidRoute = createRoute({
  method: 'delete',
  path: '/entities/by-uid/{uid}',
  tags: ['Entity'],
  description: 'Delete a single entity by UID.',
  operationId: 'DeleteEntityByUid',
  request: { params: z.object({ uid: UidParamsSchema }) },
  responses: {
    204: { description: 'Deleted successfully.' },
    400: ErrorResponseResponse,
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const getEntitiesByNameKindNamespaceNameRoute = createRoute({
  method: 'get',
  path: '/entities/by-name/{kind}/{namespace}/{name}',
  tags: ['Entity'],
  description: 'Get an entity by an entity ref.',
  operationId: 'GetEntityByName',
  request: {
    params: z.object({
      kind: KindParamsSchema,
      namespace: NamespaceParamsSchema,
      name: NameParamsSchema,
    }),
  },
  responses: {
    200: { description: 'Ok', content: { 'application/json': { schema: EntitySchema } } },
    400: ErrorResponseResponse,
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const getEntitiesByNameKindNamespaceNameAncestryRoute = createRoute({
  method: 'get',
  path: '/entities/by-name/{kind}/{namespace}/{name}/ancestry',
  tags: ['Entity'],
  description: "Get an entity's ancestry by entity ref.",
  operationId: 'GetEntityAncestryByName',
  request: {
    params: z.object({
      kind: KindParamsSchema,
      namespace: NamespaceParamsSchema,
      name: NameParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: EntityAncestryResponseSchema } },
    },
    400: ErrorResponseResponse,
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const postEntitiesByRefsRoute = createRoute({
  method: 'post',
  path: '/entities/by-refs',
  tags: ['Entity'],
  description: 'Get a batch set of entities given an array of entityRefs.',
  operationId: 'GetEntitiesByRefs',
  request: {
    query: z.object({ filter: FilterParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              entityRefs: z.array(z.string()),
              fields: z.array(z.string()).exactOptional(),
              query: JsonObjectSchema.exactOptional(),
            })
            .openapi({ required: ['entityRefs'] }),
          examples: {
            'Fetch Backstage entities': {
              value: { entityRefs: ['component:default/backstage', 'api:default/backstage'] },
            },
            'Fetch annotations for backstage entity': {
              value: {
                entityRefs: ['component:default/backstage'],
                fields: ['metadata.annotations'],
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: EntitiesBatchResponseSchema } },
    },
    400: ErrorResponseResponse,
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const getEntitiesByQueryRoute = createRoute({
  method: 'get',
  path: '/entities/by-query',
  tags: ['Entity'],
  description: 'Search for entities by a given query.',
  operationId: 'GetEntitiesByQuery',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      orderField: OrderFieldParamsSchema,
      cursor: CursorParamsSchema,
      filter: FilterParamsSchema,
      totalItems: TotalItemsParamsSchema,
      fullTextFilterTerm: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'fullTextFilterTerm',
            in: 'query',
            description: 'Text search term.',
            required: false,
            allowReserved: true,
            schema: { type: 'string' },
          },
        }),
      fullTextFilterFields: z
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
            name: 'fullTextFilterFields',
            in: 'query',
            description: 'A comma separated list of fields to sort returned results by.',
            required: false,
            allowReserved: true,
            schema: { type: 'array', items: { type: 'string' } },
            explode: false,
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: EntitiesQueryResponseSchema } },
    },
    400: ErrorResponseResponse,
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const postEntitiesByQueryRoute = createRoute({
  method: 'post',
  path: '/entities/by-query',
  tags: ['Entity'],
  description: 'Query entities using predicate-based filters.',
  operationId: 'QueryEntitiesByPredicate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              cursor: z.string().exactOptional(),
              limit: z.number().exactOptional(),
              offset: z.number().exactOptional(),
              orderBy: z
                .array(
                  z
                    .object({ field: z.string(), order: z.enum(['asc', 'desc']) })
                    .openapi({ required: ['field', 'order'] }),
                )
                .exactOptional(),
              fullTextFilter: z
                .object({
                  term: z.string().exactOptional(),
                  fields: z.array(z.string()).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              fields: z.array(z.string()).exactOptional(),
              totalItems: z
                .enum(['include', 'exclude'])
                .exactOptional()
                .openapi({
                  description:
                    "Controls whether the response's `totalItems` field is\ncomputed. Pass `exclude` to skip the count when the caller\ndoesn't need it. Defaults to `include`.\n",
                }),
              query: JsonObjectSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: EntitiesQueryResponseSchema } },
    },
    400: ErrorResponseResponse,
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const getEntityFacetsRoute = createRoute({
  method: 'get',
  path: '/entity-facets',
  tags: ['Entity'],
  description: 'Get all entity facets that match the given filters.',
  operationId: 'GetEntityFacets',
  request: {
    query: z.object({
      facet: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'facet',
            required: true,
            allowReserved: true,
            schema: { type: 'array', items: { type: 'string' } },
            examples: {
              'Entities by kind': { value: ['kind'] },
              'Entities by spec type': { value: ['spec.type'] },
            },
          },
        }),
      filter: FilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: EntityFacetsResponseSchema } },
    },
    400: ErrorResponseResponse,
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const postEntityFacetsRoute = createRoute({
  method: 'post',
  path: '/entity-facets',
  tags: ['Entity'],
  description: 'Get entity facets using predicate-based filters.',
  operationId: 'QueryEntityFacetsByPredicate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ facets: z.array(z.string()), query: JsonObjectSchema.exactOptional() })
            .openapi({ required: ['facets'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: EntityFacetsResponseSchema } },
    },
    400: ErrorResponseResponse,
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const getLocationsRoute = createRoute({
  method: 'get',
  path: '/locations',
  tags: ['Locations'],
  description: 'Get all locations',
  operationId: 'GetLocations',
  responses: {
    200: {
      description: 'Ok',
      content: {
        'application/json': {
          schema: z.array(z.object({ data: LocationSchema }).openapi({ required: ['data'] })),
        },
      },
    },
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const postLocationsRoute = createRoute({
  method: 'post',
  path: '/locations',
  tags: ['Locations'],
  description: 'Create a location for a given target.',
  operationId: 'CreateLocation',
  request: {
    query: z.object({
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dryRun',
            required: false,
            allowReserved: true,
            schema: { type: 'string' },
          },
        }),
      onConflict: z
        .enum(['refresh', 'reject'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'onConflict',
            required: false,
            allowReserved: true,
            schema: { type: 'string', enum: ['refresh', 'reject'] },
            description:
              "Behavior when the location already exists. 'reject' (default) returns a 409 error, 'refresh' triggers a refresh of the existing location entity and returns 201.",
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ target: z.string(), type: z.string() })
            .openapi({ required: ['target', 'type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': {
          schema: z
            .object({
              exists: z.boolean().exactOptional(),
              entities: z.array(EntitySchema),
              location: LocationSchema,
            })
            .openapi({ required: ['entities', 'location'] }),
        },
      },
    },
    400: ErrorResponseResponse,
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const postLocationsByQueryRoute = createRoute({
  method: 'post',
  path: '/locations/by-query',
  tags: ['Locations'],
  description: 'Query for locations',
  operationId: 'GetLocationsByQuery',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              cursor: z.string().exactOptional(),
              limit: z.number().exactOptional(),
              query: JsonObjectSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: LocationsQueryResponseSchema } },
    },
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const getLocationsIdRoute = createRoute({
  method: 'get',
  path: '/locations/{id}',
  tags: ['Locations'],
  description: 'Get a location by id.',
  operationId: 'GetLocation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: 'Ok', content: { 'application/json': { schema: LocationSchema } } },
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const putLocationsIdRoute = createRoute({
  method: 'put',
  path: '/locations/{id}',
  tags: ['Locations'],
  description: 'Update the type and target of an existing location by id.',
  operationId: 'UpdateLocation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: LocationInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Ok', content: { 'application/json': { schema: LocationSchema } } },
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const deleteLocationsIdRoute = createRoute({
  method: 'delete',
  path: '/locations/{id}',
  tags: ['Locations'],
  description: 'Delete a location by id.',
  operationId: 'DeleteLocation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    204: { description: 'No content' },
    400: ErrorResponseResponse,
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const getLocationsByEntityKindNamespaceNameRoute = createRoute({
  method: 'get',
  path: '/locations/by-entity/{kind}/{namespace}/{name}',
  tags: ['Locations'],
  description: 'Get a location for entity.',
  operationId: 'getLocationByEntity',
  request: {
    params: z.object({
      kind: z
        .string()
        .openapi({
          param: { in: 'path', name: 'kind', required: true, schema: { type: 'string' } },
        }),
      namespace: z
        .string()
        .openapi({
          param: { in: 'path', name: 'namespace', required: true, schema: { type: 'string' } },
        }),
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Ok', content: { 'application/json': { schema: LocationSchema } } },
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const postAnalyzeLocationRoute = createRoute({
  method: 'post',
  path: '/analyze-location',
  tags: ['Locations'],
  description: 'Validate a given location.',
  operationId: 'AnalyzeLocation',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ catalogFileName: z.string().exactOptional(), location: LocationInputSchema })
            .openapi({ required: ['location'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: AnalyzeLocationResponseSchema } },
    },
    400: ErrorResponseResponse,
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const postValidateEntityRoute = createRoute({
  method: 'post',
  path: '/validate-entity',
  tags: ['Entity'],
  description: 'Validate that a passed in entity has no errors in schema.',
  operationId: 'ValidateEntity',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ location: z.string(), entity: z.record(z.string(), z.any()) })
            .openapi({ required: ['location', 'entity'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Ok' },
    400: {
      description: 'Validation errors.',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(
                z
                  .object({ name: z.string(), message: z.string() })
                  .catchall(z.any())
                  .openapi({ required: ['name', 'message'] }),
              ),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
  },
  security: [{}, { JWT: [] }],
})
