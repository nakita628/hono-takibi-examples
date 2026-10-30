import { createRoute, z } from '@hono/zod-openapi'

const SubjectSetSchema = z
  .object({
    namespace: z.string().openapi({ description: 'Namespace of the Subject Set' }),
    object: z.string().openapi({ description: 'Object of the Subject Set' }),
    relation: z.string().openapi({ description: 'Relation of the Subject Set' }),
  })
  .openapi({ required: ['namespace', 'object', 'relation'] })
  .openapi('SubjectSet')

const RelationshipSchema = z
  .object({
    namespace: z.string().openapi({ description: 'Namespace of the Relation Tuple' }),
    object: z.string().openapi({ description: 'Object of the Relation Tuple' }),
    relation: z.string().openapi({ description: 'Relation of the Relation Tuple' }),
    subject_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'SubjectID of the Relation Tuple\n\nEither SubjectSet or SubjectID can be provided.',
      }),
    subject_set: SubjectSetSchema.exactOptional(),
  })
  .openapi({ description: 'Relationship', required: ['namespace', 'object', 'relation'] })
  .openapi('Relationship')

type ExpandedPermissionTreeType = {
  children?: ExpandedPermissionTreeType[]
  tuple?: z.infer<typeof RelationshipSchema>
  type:
    | 'union'
    | 'exclusion'
    | 'intersection'
    | 'leaf'
    | 'tuple_to_subject_set'
    | 'computed_subject_set'
    | 'not'
    | 'unspecified'
}

const DefaultErrorSchema = z
  .any()
  .openapi({
    description:
      'From https://go.dev/wiki/CodeReviewComments#receiver-type:\n> Can function or methods, either concurrently or when called from this method, be mutating the receiver? A value type creates a copy of the receiver when the method is invoked, so outside updates will not be applied to this receiver. If changes must be visible in the original receiver, the receiver must be a pointer.\n> If the receiver is a struct, array or slice and any of its elements is a pointer to something that might be mutating,\n> prefer a pointer receiver, as it will make the intention clearer to the reader.\n> Don’t mix receiver types. Choose either pointers or struct types for all available methods.',
    title:
      'DefaultError is not safe to shallow copy because it contains\nfields which are not value types, e.g. maps.\nA shallow copy would inadvertently share these underlying fields,\nleading to incorrect behavior and data races in a concurrent context.\nConsequently, all methods take the type by pointer and not by value.',
  })
  .openapi('DefaultError')

const SourcePositionSchema = z
  .object({
    Line: z
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
    column: z
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
  })
  .openapi({ required: [] })
  .openapi('SourcePosition')

const ParseErrorSchema = z
  .object({
    end: SourcePositionSchema.exactOptional(),
    message: z.string().exactOptional(),
    start: SourcePositionSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ParseError')

const UUIDSchema = z.string().openapi('UUID')

const BatchCheckPermissionBodySchema = z
  .object({ tuples: z.array(RelationshipSchema).exactOptional() })
  .openapi({ description: 'Batch Check Permission Body', required: [] })
  .openapi('BatchCheckPermissionBody')

const CheckPermissionResultWithErrorSchema = z
  .object({
    allowed: z.boolean().openapi({ description: 'whether the relation tuple is allowed' }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'any error generated while checking the relation tuple' }),
  })
  .openapi({ description: 'Check Permission Result With Error', required: ['allowed'] })
  .openapi('CheckPermissionResultWithError')

const BatchCheckPermissionResultSchema = z
  .object({
    results: z
      .array(CheckPermissionResultWithErrorSchema)
      .openapi({
        description: 'An array of check results. The order aligns with the input order.',
      }),
  })
  .openapi({ description: 'Batch Check Permission Result', required: ['results'] })
  .openapi('BatchCheckPermissionResult')

const CheckOplSyntaxBodySchema = z
  .string()
  .openapi({ description: 'Ory Permission Language Document' })
  .openapi('CheckOplSyntaxBody')

const CheckOplSyntaxResultSchema = z
  .object({
    errors: z
      .array(ParseErrorSchema)
      .exactOptional()
      .openapi({ description: 'The list of syntax errors' }),
  })
  .openapi({
    title: 'CheckOPLSyntaxResponse represents the response for an OPL syntax check request.',
    required: [],
  })
  .openapi('CheckOplSyntaxResult')

const CheckPermissionResultSchema = z
  .object({
    allowed: z.boolean().openapi({ description: 'whether the relation tuple is allowed' }),
  })
  .openapi({
    description: 'The content of the allowed field is mirrored in the HTTP status code.',
    required: ['allowed'],
    title: 'Check Permission Result',
  })
  .openapi('CheckPermissionResult')

const CreateRelationshipBodySchema = z
  .object({
    namespace: z.string().exactOptional().openapi({ description: 'Namespace to query' }),
    object: z.string().exactOptional().openapi({ description: 'Object to query' }),
    relation: z.string().exactOptional().openapi({ description: 'Relation to query' }),
    subject_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'SubjectID to query\n\nEither SubjectSet or SubjectID can be provided.',
      }),
    subject_set: SubjectSetSchema.exactOptional(),
  })
  .openapi({ description: 'Create Relationship Request Body', required: [] })
  .openapi('CreateRelationshipBody')

const GenericErrorSchema = z
  .object({
    code: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The status code', example: 404 }),
    debug: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Debug information\n\nThis field is often not exposed to protect against leaking\nsensitive information.',
        example: 'SQL field "foo" is not a bool.',
      }),
    details: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'Further error details' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The error ID\n\nUseful when trying to identify various errors in application logic.',
      }),
    message: z
      .string()
      .openapi({
        description: "Error message\n\nThe error's message.",
        example: 'The resource could not be found',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable reason for the error',
        example: 'User with ID 1234 does not exist.',
      }),
    request: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The request ID\n\nThe request ID is often exposed internally in order to trace\nerrors across service architectures. This is often a UUID.',
        example: 'd7ef54b1-ec15-46e6-bccb-524b82c035e6',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status description', example: 'Not Found' }),
  })
  .openapi({ required: ['message'] })
  .openapi('GenericError')

const ErrorGenericSchema = z
  .object({ error: GenericErrorSchema })
  .openapi({
    description: 'The standard Ory JSON API error format.',
    required: ['error'],
    title: 'JSON API Error Response',
  })
  .openapi('ErrorGeneric')

const ExpandedPermissionTreeSchema: z.ZodType<ExpandedPermissionTreeType> = z
  .lazy(() =>
    z
      .object({
        children: z
          .array(ExpandedPermissionTreeSchema)
          .exactOptional()
          .openapi({ description: 'The children of the node, possibly none.' }),
        tuple: RelationshipSchema.exactOptional(),
        type: z
          .enum([
            'union',
            'exclusion',
            'intersection',
            'leaf',
            'tuple_to_subject_set',
            'computed_subject_set',
            'not',
            'unspecified',
          ])
          .openapi({
            description:
              'The type of the node.\nunion TreeNodeUnion\nexclusion TreeNodeExclusion\nintersection TreeNodeIntersection\nleaf TreeNodeLeaf\ntuple_to_subject_set TreeNodeTupleToSubjectSet\ncomputed_subject_set TreeNodeComputedSubjectSet\nnot TreeNodeNot\nunspecified TreeNodeUnspecified',
            'x-go-enum-desc':
              'union TreeNodeUnion\nexclusion TreeNodeExclusion\nintersection TreeNodeIntersection\nleaf TreeNodeLeaf\ntuple_to_subject_set TreeNodeTupleToSubjectSet\ncomputed_subject_set TreeNodeComputedSubjectSet\nnot TreeNodeNot\nunspecified TreeNodeUnspecified',
          }),
      })
      .openapi({ required: ['type'] }),
  )
  .openapi('ExpandedPermissionTree')

const HealthNotReadyStatusSchema = z
  .object({
    errors: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Errors contains a list of errors that caused the not ready status.',
      }),
  })
  .openapi({ title: 'The not ready status of the service.', required: [] })
  .openapi('HealthNotReadyStatus')

const HealthStatusSchema = z
  .object({
    status: z.string().exactOptional().openapi({ description: 'Status always contains "ok".' }),
  })
  .openapi({ title: 'The health status of the service.', required: [] })
  .openapi('HealthStatus')

const NamespaceSchema = z
  .object({ name: z.string().exactOptional().openapi({ description: 'Name of the namespace.' }) })
  .openapi({ required: [] })
  .openapi('Namespace')

const PostCheckPermissionBodySchema = z
  .object({
    namespace: z.string().exactOptional().openapi({ description: 'Namespace to query' }),
    object: z.string().exactOptional().openapi({ description: 'Object to query' }),
    relation: z.string().exactOptional().openapi({ description: 'Relation to query' }),
    subject_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'SubjectID to query\n\nEither SubjectSet or SubjectID can be provided.',
      }),
    subject_set: SubjectSetSchema.exactOptional(),
  })
  .openapi({ description: 'Check Permission using Post Request Body', required: [] })
  .openapi('PostCheckPermissionBody')

const PostCheckPermissionOrErrorBodySchema = z
  .object({
    namespace: z.string().exactOptional().openapi({ description: 'Namespace to query' }),
    object: z.string().exactOptional().openapi({ description: 'Object to query' }),
    relation: z.string().exactOptional().openapi({ description: 'Relation to query' }),
    subject_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'SubjectID to query\n\nEither SubjectSet or SubjectID can be provided.',
      }),
    subject_set: SubjectSetSchema.exactOptional(),
  })
  .openapi({ description: 'Post Check Permission Or Error Body', required: [] })
  .openapi('PostCheckPermissionOrErrorBody')

const RelationQuerySchema = z
  .object({
    namespace: z.string().exactOptional().openapi({ description: 'Namespace to query' }),
    object: z.string().exactOptional().openapi({ description: 'Object to query' }),
    relation: z.string().exactOptional().openapi({ description: 'Relation to query' }),
    subject_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'SubjectID to query\n\nEither SubjectSet or SubjectID can be provided.',
      }),
    subject_set: SubjectSetSchema.exactOptional(),
  })
  .openapi({ description: 'Relation Query', required: [] })
  .openapi('RelationQuery')

const RelationshipNamespacesSchema = z
  .object({ namespaces: z.array(NamespaceSchema).exactOptional() })
  .openapi({ description: 'Relationship Namespace List', required: [] })
  .openapi('RelationshipNamespaces')

const RelationshipPatchSchema = z
  .object({
    action: z
      .enum(['insert', 'delete'])
      .exactOptional()
      .openapi({ 'x-go-enum-desc': 'insert ActionInsert\ndelete ActionDelete' }),
    relation_tuple: RelationshipSchema.exactOptional(),
  })
  .openapi({ description: 'Payload for patching a relationship', required: [] })
  .openapi('RelationshipPatch')

const RelationshipsSchema = z
  .object({
    next_page_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The opaque token to provide in a subsequent request\nto get the next page. It is the empty string iff this is\nthe last page.',
      }),
    relation_tuples: z.array(RelationshipSchema).exactOptional(),
  })
  .openapi({ description: 'Paginated Relationship List', required: [] })
  .openapi('Relationships')

const UnexpectedErrorSchema = z.string().openapi('UnexpectedError')

const VersionSchema = z
  .object({
    version: z
      .string()
      .exactOptional()
      .openapi({ description: "Version is the service's version." }),
  })
  .openapi({ required: [] })
  .openapi('Version')

const EmptyResponseResponse = {
  description:
    'Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 204.',
}

export const putAdminRelationTuplesRoute = createRoute({
  method: 'put',
  path: '/admin/relation-tuples',
  tags: ['relationship'],
  summary: 'Create a Relationship',
  description: 'Use this endpoint to create a relationship.',
  operationId: 'createRelationship',
  request: { body: { content: { 'application/json': { schema: CreateRelationshipBodySchema } } } },
  responses: {
    201: {
      description: 'relationship',
      content: { 'application/json': { schema: RelationshipSchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const deleteAdminRelationTuplesRoute = createRoute({
  method: 'delete',
  path: '/admin/relation-tuples',
  tags: ['relationship'],
  summary: 'Delete Relationships',
  description: 'Use this endpoint to delete relationships',
  operationId: 'deleteRelationships',
  request: {
    query: z.object({
      namespace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Namespace of the Relationship',
            in: 'query',
            name: 'namespace',
            schema: { type: 'string' },
            required: false,
          },
        }),
      object: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Object of the Relationship',
            in: 'query',
            name: 'object',
            schema: { type: 'string' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Relation of the Relationship',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      subject_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'SubjectID of the Relationship',
            in: 'query',
            name: 'subject_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'subject_set.namespace': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Namespace of the Subject Set',
            in: 'query',
            name: 'subject_set.namespace',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'subject_set.object': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Object of the Subject Set',
            in: 'query',
            name: 'subject_set.object',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'subject_set.relation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Relation of the Subject Set',
            in: 'query',
            name: 'subject_set.relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: EmptyResponseResponse,
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const patchAdminRelationTuplesRoute = createRoute({
  method: 'patch',
  path: '/admin/relation-tuples',
  tags: ['relationship'],
  summary: 'Patch Multiple Relationships',
  description: 'Use this endpoint to patch one or more relationships.',
  operationId: 'patchRelationships',
  request: {
    body: { content: { 'application/json': { schema: z.array(RelationshipPatchSchema) } } },
  },
  responses: {
    204: EmptyResponseResponse,
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getHealthAliveRoute = createRoute({
  method: 'get',
  path: '/health/alive',
  tags: ['metadata'],
  summary: 'Check HTTP Server Status',
  description:
    'This endpoint returns a HTTP 200 status code when Ory Keto is accepting incoming\nHTTP requests. This status does currently not include checks whether the database connection is working.\n\nIf the service supports TLS Edge Termination, this endpoint does not require the\n`X-Forwarded-Proto` header to be set.\n\nBe aware that if you are running multiple nodes of this service, the health status will never\nrefer to the cluster state, only to a single instance.',
  operationId: 'isAlive',
  responses: {
    200: {
      description: 'Ory Keto is ready to accept connections.',
      content: {
        'application/json': {
          schema: z
            .object({ status: z.string().openapi({ description: 'Always "ok".' }) })
            .openapi({ required: ['status'] }),
        },
      },
    },
    default: { description: 'Unexpected error', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getHealthReadyRoute = createRoute({
  method: 'get',
  path: '/health/ready',
  tags: ['metadata'],
  summary: 'Check HTTP Server and Database Status',
  description:
    'This endpoint returns a HTTP 200 status code when Ory Keto is up running and the environment dependencies (e.g.\nthe database) are responsive as well.\n\nIf the service supports TLS Edge Termination, this endpoint does not require the\n`X-Forwarded-Proto` header to be set.\n\nBe aware that if you are running multiple nodes of Ory Keto, the health status will never\nrefer to the cluster state, only to a single instance.',
  operationId: 'isReady',
  responses: {
    200: {
      description: 'Ory Keto is ready to accept requests.',
      content: {
        'application/json': {
          schema: z
            .object({ status: z.string().openapi({ description: 'Always "ok".' }) })
            .openapi({ required: ['status'] }),
        },
      },
    },
    503: {
      description: 'Ory Kratos is not yet ready to accept requests.',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z
                .record(z.string(), z.string())
                .openapi({
                  description: 'Errors contains a list of errors that caused the not ready status.',
                }),
            })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    default: { description: 'Unexpected error', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getNamespacesRoute = createRoute({
  method: 'get',
  path: '/namespaces',
  tags: ['relationship'],
  summary: 'Query namespaces',
  description: 'Get all namespaces',
  operationId: 'listRelationshipNamespaces',
  responses: {
    200: {
      description: 'relationshipNamespaces',
      content: { 'application/json': { schema: RelationshipNamespacesSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const postOplSyntaxCheckRoute = createRoute({
  method: 'post',
  path: '/opl/syntax/check',
  tags: ['relationship'],
  summary: 'Check the syntax of an OPL file',
  description: 'The OPL file is expected in the body of the request.',
  operationId: 'checkOplSyntax',
  request: { body: { content: { 'text/plain': { schema: CheckOplSyntaxBodySchema } } } },
  responses: {
    200: {
      description: 'checkOplSyntaxResult',
      content: { 'application/json': { schema: CheckOplSyntaxResultSchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getRelationTuplesRoute = createRoute({
  method: 'get',
  path: '/relation-tuples',
  tags: ['relationship'],
  summary: 'Query relationships',
  description: 'Get all relationships that match the query. Only the namespace field is required.',
  operationId: 'getRelationships',
  request: {
    query: z.object({
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(250n)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Items per Page\n\nThis is the number of items per page to return.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_size',
            schema: { default: 250, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Next Page Token\n\nThe next page token.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      namespace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Namespace of the Relationship',
            in: 'query',
            name: 'namespace',
            schema: { type: 'string' },
            required: false,
          },
        }),
      object: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Object of the Relationship',
            in: 'query',
            name: 'object',
            schema: { type: 'string' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Relation of the Relationship',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      subject_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'SubjectID of the Relationship',
            in: 'query',
            name: 'subject_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'subject_set.namespace': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Namespace of the Subject Set',
            in: 'query',
            name: 'subject_set.namespace',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'subject_set.object': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Object of the Subject Set',
            in: 'query',
            name: 'subject_set.object',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'subject_set.relation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Relation of the Subject Set',
            in: 'query',
            name: 'subject_set.relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'relationships',
      content: { 'application/json': { schema: RelationshipsSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const postRelationTuplesBatchCheckRoute = createRoute({
  method: 'post',
  path: '/relation-tuples/batch/check',
  tags: ['permission'],
  summary: 'Batch check permissions',
  description:
    'To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.com/docs/keto/concepts/api-overview).',
  operationId: 'batchCheckPermission',
  request: {
    query: z.object({
      'max-depth': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'max-depth',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchCheckPermissionBodySchema } } },
  },
  responses: {
    200: {
      description: 'batchCheckPermissionResult',
      content: { 'application/json': { schema: BatchCheckPermissionResultSchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getRelationTuplesCheckRoute = createRoute({
  method: 'get',
  path: '/relation-tuples/check',
  tags: ['permission'],
  summary: 'Check a permission',
  description:
    'To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.com/docs/keto/concepts/api-overview).',
  operationId: 'checkPermissionOrError',
  request: {
    query: z.object({
      namespace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Namespace of the Relationship',
            in: 'query',
            name: 'namespace',
            schema: { type: 'string' },
            required: false,
          },
        }),
      object: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Object of the Relationship',
            in: 'query',
            name: 'object',
            schema: { type: 'string' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Relation of the Relationship',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      subject_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'SubjectID of the Relationship',
            in: 'query',
            name: 'subject_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'subject_set.namespace': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Namespace of the Subject Set',
            in: 'query',
            name: 'subject_set.namespace',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'subject_set.object': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Object of the Subject Set',
            in: 'query',
            name: 'subject_set.object',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'subject_set.relation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Relation of the Subject Set',
            in: 'query',
            name: 'subject_set.relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'max-depth': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'max-depth',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'checkPermissionResult',
      content: { 'application/json': { schema: CheckPermissionResultSchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    403: {
      description: 'checkPermissionResult',
      content: { 'application/json': { schema: CheckPermissionResultSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const postRelationTuplesCheckRoute = createRoute({
  method: 'post',
  path: '/relation-tuples/check',
  tags: ['permission'],
  summary: 'Check a permission',
  description:
    'To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.com/docs/keto/concepts/api-overview).',
  operationId: 'postCheckPermissionOrError',
  request: {
    query: z.object({
      'max-depth': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'max-depth',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PostCheckPermissionOrErrorBodySchema } } },
  },
  responses: {
    200: {
      description: 'checkPermissionResult',
      content: { 'application/json': { schema: CheckPermissionResultSchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    403: {
      description: 'checkPermissionResult',
      content: { 'application/json': { schema: CheckPermissionResultSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getRelationTuplesCheckOpenapiRoute = createRoute({
  method: 'get',
  path: '/relation-tuples/check/openapi',
  tags: ['permission'],
  summary: 'Check a permission',
  description:
    'To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.com/docs/keto/concepts/api-overview).',
  operationId: 'checkPermission',
  request: {
    query: z.object({
      namespace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Namespace of the Relationship',
            in: 'query',
            name: 'namespace',
            schema: { type: 'string' },
            required: false,
          },
        }),
      object: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Object of the Relationship',
            in: 'query',
            name: 'object',
            schema: { type: 'string' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Relation of the Relationship',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      subject_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'SubjectID of the Relationship',
            in: 'query',
            name: 'subject_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'subject_set.namespace': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Namespace of the Subject Set',
            in: 'query',
            name: 'subject_set.namespace',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'subject_set.object': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Object of the Subject Set',
            in: 'query',
            name: 'subject_set.object',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'subject_set.relation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Relation of the Subject Set',
            in: 'query',
            name: 'subject_set.relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'max-depth': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'max-depth',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'checkPermissionResult',
      content: { 'application/json': { schema: CheckPermissionResultSchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const postRelationTuplesCheckOpenapiRoute = createRoute({
  method: 'post',
  path: '/relation-tuples/check/openapi',
  tags: ['permission'],
  summary: 'Check a permission',
  description:
    'To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.com/docs/keto/concepts/api-overview).',
  operationId: 'postCheckPermission',
  request: {
    query: z.object({
      'max-depth': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'max-depth',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PostCheckPermissionBodySchema } } },
  },
  responses: {
    200: {
      description: 'checkPermissionResult',
      content: { 'application/json': { schema: CheckPermissionResultSchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getRelationTuplesExpandRoute = createRoute({
  method: 'get',
  path: '/relation-tuples/expand',
  tags: ['permission'],
  summary: 'Expand a Relationship into permissions.',
  description: 'Use this endpoint to expand a relationship tuple into permissions.',
  operationId: 'expandPermissions',
  request: {
    query: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'Namespace of the Subject Set',
            in: 'query',
            name: 'namespace',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description: 'Object of the Subject Set',
            in: 'query',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
      relation: z
        .string()
        .openapi({
          param: {
            description: 'Relation of the Subject Set',
            in: 'query',
            name: 'relation',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'max-depth': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'max-depth',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'expandedPermissionTree',
      content: { 'application/json': { schema: ExpandedPermissionTreeSchema } },
    },
    400: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    404: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
    default: {
      description: 'errorGeneric',
      content: { 'application/json': { schema: ErrorGenericSchema } },
    },
  },
})

export const getVersionRoute = createRoute({
  method: 'get',
  path: '/version',
  tags: ['metadata'],
  summary: 'Return Running Software Version.',
  description:
    'This endpoint returns the version of Ory Keto.\n\nIf the service supports TLS Edge Termination, this endpoint does not require the\n`X-Forwarded-Proto` header to be set.\n\nBe aware that if you are running multiple nodes of this service, the version will never\nrefer to the cluster state, only to a single instance.',
  operationId: 'getVersion',
  responses: {
    200: {
      description: 'Returns the Ory Keto version.',
      content: {
        'application/json': {
          schema: z
            .object({ version: z.string().openapi({ description: 'The version of Ory Keto.' }) })
            .openapi({ required: ['version'] }),
        },
      },
    },
  },
})
