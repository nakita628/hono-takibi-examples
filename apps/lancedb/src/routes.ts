import { createRoute, z } from '@hono/zod-openapi'

const InvalidRequestResponse = {
  description: 'Invalid request',
  content: { 'text/plain': { schema: z.string() } },
}

const NotFoundResponse = {
  description: 'Not found',
  content: { 'text/plain': { schema: z.string() } },
}

const UnauthorizedResponse = {
  description: 'Unauthorized',
  content: { 'text/plain': { schema: z.string() } },
}

const TableNameParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'name',
      in: 'path',
      description: 'name of the table',
      required: true,
      schema: { type: 'string' },
    },
  })

const IndexNameParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'index_name',
      in: 'path',
      description: 'name of the index',
      required: true,
      schema: { type: 'string' },
    },
  })

const ArrowStreamBufferRequestBody = {
  description: 'Arrow IPC stream buffer',
  content: {
    'application/vnd.apache.arrow.stream': {
      schema: z.file().openapi({ type: 'string', format: 'binary' }),
    },
  },
  required: true,
}

const KeyAuthSecurityScheme = { name: 'x-api-key', type: 'apiKey', in: 'header' }

export const getV1TableIndexRoute = createRoute({
  method: 'get',
  path: '/v1/table/',
  tags: ['Tables'],
  summary: 'List Tables',
  description: 'List tables, optionally, with pagination.',
  operationId: 'listTables',
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
            name: 'limit',
            in: 'query',
            description: 'Limits the number of items to return.',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'page_token',
            in: 'query',
            description: 'Specifies the starting position of the next query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully returned a list of tables in the DB',
      content: {
        'application/json': {
          schema: z
            .object({
              tables: z.array(z.string()).exactOptional(),
              page_token: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: InvalidRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const postV1TableNameCreateIndexRoute = createRoute({
  method: 'post',
  path: '/v1/table/{name}/create/',
  tags: ['Tables'],
  summary: 'Create a new table',
  description: 'Create a new table',
  operationId: 'createTable',
  request: {
    params: z.object({ name: TableNameParamsSchema }),
    body: ArrowStreamBufferRequestBody,
  },
  responses: {
    200: { description: 'Table successfully created' },
    400: InvalidRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const postV1TableNameQueryIndexRoute = createRoute({
  method: 'post',
  path: '/v1/table/{name}/query/',
  tags: ['Data'],
  summary: 'Vector Query',
  description: 'Vector Query',
  request: {
    params: z.object({ name: TableNameParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              vector: z
                .any()
                .openapi({ description: 'The targeted vector to search for. Required.\n' }),
              vector_column: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The column to query, it can be inferred from the schema if there is only one vector column.\n',
                }),
              prefilter: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether to prefilter the data. Optional.\n' }),
              k: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The number of search results to return. Default is 10.\n',
                }),
              distance_type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The distance metric to use for search. l2, Cosine, Dot and Hamming are supported. Default is l2.\n',
                }),
              bypass_vector_index: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether to bypass vector index. Optional.\n' }),
              filter: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A filter expression that specifies the rows to query. Optional.\n',
                }),
              columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The columns to return. Optional.\n' }),
              nprobe: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of probes to use for search. Optional.\n' }),
              refine_factor: z
                .int()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'The refine factor to use for search. Optional.\n' }),
              fast_search: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Whether to use fast search. Optional.\n' }),
            })
            .openapi({ required: ['vector'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'top k results if query is successfully executed',
      content: {
        'application/json': {
          schema: z
            .object({
              results: z
                .array(
                  z
                    .object({
                      id: z.int().exactOptional(),
                      selected_col_1_to_return: z.any().exactOptional(),
                      selected_col_n_to_return: z.any().exactOptional(),
                      _distance: z.any().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: InvalidRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const postV1TableNameInsertIndexRoute = createRoute({
  method: 'post',
  path: '/v1/table/{name}/insert/',
  tags: ['Data'],
  summary: 'Insert new data.',
  description: 'Insert new data to the Table.',
  operationId: 'insertData',
  request: {
    params: z.object({ name: TableNameParamsSchema }),
    body: ArrowStreamBufferRequestBody,
  },
  responses: {
    200: { description: 'Insert successful' },
    400: InvalidRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const postV1TableNameMergeInsertIndexRoute = createRoute({
  method: 'post',
  path: '/v1/table/{name}/merge_insert/',
  tags: ['Data'],
  summary: 'Merge Insert',
  description:
    'Create a "merge insert" operation This operation can add rows, update rows, and remove rows all in a single transaction. See python method `lancedb.table.Table.merge_insert` for examples.',
  operationId: 'mergeInsert',
  request: {
    params: z.object({ name: TableNameParamsSchema }),
    query: z.object({
      on: z
        .string()
        .openapi({
          param: {
            name: 'on',
            in: 'query',
            description: 'The column to use as the primary key for the merge operation.\n',
            required: true,
            schema: { type: 'string' },
          },
        }),
      when_matched_update_all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'when_matched_update_all',
            in: 'query',
            description:
              'Rows that exist in both the source table (new data) and\nthe target table (old data) will be updated, replacing\nthe old row with the corresponding matching row.\n',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      when_matched_update_all_filt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'when_matched_update_all_filt',
            in: 'query',
            description:
              'If present then only rows that satisfy the filter expression will\nbe updated\n',
            required: false,
            schema: { type: 'string' },
          },
        }),
      when_not_matched_insert_all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'when_not_matched_insert_all',
            in: 'query',
            description:
              'Rows that exist only in the source table (new data) will be\ninserted into the target table (old data).\n',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      when_not_matched_by_source_delete: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'when_not_matched_by_source_delete',
            in: 'query',
            description:
              'Rows that exist only in the target table (old data) will be\ndeleted. An optional condition (`when_not_matched_by_source_delete_filt`)\ncan be provided to limit what data is deleted.\n',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      when_not_matched_by_source_delete_filt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'when_not_matched_by_source_delete_filt',
            in: 'query',
            description: 'The filter expression that specifies the rows to delete.\n',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ArrowStreamBufferRequestBody,
  },
  responses: {
    200: { description: 'Merge Insert successful' },
    400: InvalidRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const postV1TableNameDeleteIndexRoute = createRoute({
  method: 'post',
  path: '/v1/table/{name}/delete/',
  tags: ['Data'],
  summary: 'Delete rows from a table',
  description: 'Delete rows from a table.',
  operationId: 'deleteData',
  request: {
    params: z.object({ name: TableNameParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              predicate: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A filter expression that specifies the rows to delete.\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Delete successful' }, 401: UnauthorizedResponse },
})

export const postV1TableNameDropIndexRoute = createRoute({
  method: 'post',
  path: '/v1/table/{name}/drop/',
  tags: ['Tables'],
  summary: 'Drop a table',
  description: 'Drop a table',
  operationId: 'dropTable',
  request: {
    params: z.object({ name: TableNameParamsSchema }),
    body: ArrowStreamBufferRequestBody,
  },
  responses: { 200: { description: 'Drop successful' }, 401: UnauthorizedResponse },
})

export const postV1TableNameDescribeIndexRoute = createRoute({
  method: 'post',
  path: '/v1/table/{name}/describe/',
  tags: ['Tables'],
  summary: 'Describe a table',
  description: 'Describe a table and return Table Information.',
  operationId: 'describeTable',
  request: { params: z.object({ name: TableNameParamsSchema }) },
  responses: {
    200: {
      description: 'Table information',
      content: {
        'application/json': {
          schema: z
            .object({
              table: z.string().exactOptional(),
              version: z.int().exactOptional(),
              schema: z.string().exactOptional(),
              stats: z.object({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const postV1TableNameIndexListIndexRoute = createRoute({
  method: 'post',
  path: '/v1/table/{name}/index/list/',
  tags: ['Tables'],
  summary: 'List indexes of a table',
  description: 'List indexes of a table',
  operationId: 'listIndexes',
  request: { params: z.object({ name: TableNameParamsSchema }) },
  responses: {
    200: {
      description: 'Available list of indexes on the table.',
      content: {
        'application/json': {
          schema: z
            .object({
              indexes: z
                .array(
                  z
                    .object({
                      columns: z.array(z.string()).exactOptional(),
                      index_name: z.string().exactOptional(),
                      index_uuid: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const postV1TableNameCreateIndexIndexRoute = createRoute({
  method: 'post',
  path: '/v1/table/{name}/create_index/',
  tags: ['Tables'],
  summary: 'Create vector index on a Table',
  description: 'Create vector index on a Table',
  operationId: 'createIndex',
  request: {
    params: z.object({ name: TableNameParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              column: z.string().exactOptional(),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Optional name for the created index.' }),
              replace: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'Whether to replace an existing index with the same resolved\nname. Defaults to true.\n',
                }),
              metric_type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The metric type to use for the index. l2, Cosine, Dot are supported.\n',
                }),
              index_type: z.string().exactOptional(),
              custom_stop_words: z
                .array(z.string())
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "The custom stop-word list for an FTS index. A non-null\narray replaces the language's built-in stop-word list and is only\napplied when remove_stop_words is enabled. Null uses the built-in\nlanguage list, while an empty array explicitly replaces it with no\nstop words.\n",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Index successfully created' },
    400: InvalidRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const postV1TableNameCreateScalarIndexIndexRoute = createRoute({
  method: 'post',
  path: '/v1/table/{name}/create_scalar_index/',
  tags: ['Tables'],
  summary: 'Create a scalar index on a table',
  description: 'Create a scalar index on a table',
  operationId: 'createScalarIndex',
  request: {
    params: z.object({ name: TableNameParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ column: z.string().exactOptional(), index_type: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Scalar Index successfully created' },
    400: InvalidRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const postV1TableNameIndexIndexNameDropIndexRoute = createRoute({
  method: 'post',
  path: '/v1/table/{name}/index/{index_name}/drop/',
  tags: ['Tables'],
  summary: 'Drop an index from the table',
  description: 'Drop an index from the table',
  operationId: 'dropIndex',
  request: { params: z.object({ name: TableNameParamsSchema, index_name: IndexNameParamsSchema }) },
  responses: {
    200: { description: 'Index successfully dropped' },
    400: InvalidRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})
