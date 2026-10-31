import { createRoute, z } from '@hono/zod-openapi'

const DataSetListSchema = z
  .object({
    total: z.int().exactOptional(),
    apis: z
      .array(
        z
          .object({
            apiKey: z
              .string()
              .exactOptional()
              .openapi({ description: 'To be used as a dataset parameter value' }),
            apiVersionNumber: z
              .string()
              .exactOptional()
              .openapi({ description: 'To be used as a version parameter value' }),
            apiUrl: z
              .string()
              .exactOptional()
              .openapi({ description: "The URL describing the dataset's fields" }),
            apiDocumentationUrl: z
              .string()
              .exactOptional()
              .openapi({ description: 'A URL to the API console for each API' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DataSetList')

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['metadata'],
  summary: 'List available data sets',
  operationId: 'list-data-sets',
  responses: {
    200: {
      description: 'Returns a list of data sets',
      content: {
        'application/json': {
          schema: DataSetListSchema,
          example: {
            total: 2,
            apis: [
              {
                apiKey: 'oa_citations',
                apiVersionNumber: 'v1',
                apiUrl: 'https://developer.uspto.gov/ds-api/oa_citations/v1/fields',
                apiDocumentationUrl:
                  'https://developer.uspto.gov/ds-api-docs/index.html?url=https://developer.uspto.gov/ds-api/swagger/docs/oa_citations.json',
              },
              {
                apiKey: 'cancer_moonshot',
                apiVersionNumber: 'v1',
                apiUrl: 'https://developer.uspto.gov/ds-api/cancer_moonshot/v1/fields',
                apiDocumentationUrl:
                  'https://developer.uspto.gov/ds-api-docs/index.html?url=https://developer.uspto.gov/ds-api/swagger/docs/cancer_moonshot.json',
              },
            ],
          },
        },
      },
    },
  },
})

export const getDatasetVersionFieldsRoute = createRoute({
  method: 'get',
  path: '/{dataset}/{version}/fields',
  tags: ['metadata'],
  summary:
    'Provides the general information about the API and the list of fields that can be used to query the dataset.',
  description:
    "This GET API returns the list of all the searchable field names that are in the oa_citations. Please see the 'fields' attribute which returns an array of field names. Each field or a combination of fields can be searched using the syntax options shown below.",
  operationId: 'list-searchable-fields',
  request: {
    params: z.object({
      dataset: z
        .string()
        .openapi({
          param: {
            name: 'dataset',
            in: 'path',
            description: 'Name of the dataset.',
            required: true,
            example: 'oa_citations',
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            name: 'version',
            in: 'path',
            description: 'Version of the dataset.',
            required: true,
            example: 'v1',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The dataset API for the given version is found and it is accessible to consume.',
      content: { 'application/json': { schema: z.string() } },
    },
    404: {
      description:
        'The combination of dataset name and version is not found in the system or it is not published yet to be consumed by public.',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const postDatasetVersionRecordsRoute = createRoute({
  method: 'post',
  path: '/{dataset}/{version}/records',
  tags: ['search'],
  summary: 'Provides search capability for the data set with the given search criteria.',
  description:
    "This API is based on Solr/Lucense Search. The data is indexed using SOLR. This GET API returns the list of all the searchable field names that are in the Solr Index. Please see the 'fields' attribute which returns an array of field names. Each field or a combination of fields can be searched using the Solr/Lucene Syntax. Please refer https://lucene.apache.org/core/3_6_2/queryparsersyntax.html#Overview for the query syntax. List of field names that are searchable can be determined using above GET api.",
  operationId: 'perform-search',
  request: {
    params: z.object({
      version: z
        .string()
        .default('v1')
        .openapi({
          param: {
            name: 'version',
            in: 'path',
            description: 'Version of the dataset.',
            required: true,
            schema: { type: 'string', default: 'v1' },
          },
        }),
      dataset: z
        .string()
        .default('oa_citations')
        .openapi({
          param: {
            name: 'dataset',
            in: 'path',
            description: 'Name of the dataset. In this case, the default value is oa_citations',
            required: true,
            schema: { type: 'string', default: 'oa_citations' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              criteria: z
                .string()
                .default('*:*')
                .openapi({
                  description:
                    "Uses Lucene Query Syntax in the format of propertyName:value, propertyName:[num1 TO num2] and date range format: propertyName:[yyyyMMdd TO yyyyMMdd]. In the response please see the 'docs' element which has the list of record objects. Each record structure would consist of all the fields and their corresponding values.",
                }),
              start: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .default(0)
                .exactOptional()
                .openapi({ description: 'Starting record number. Default value is 0.' }),
              rows: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .default(100)
                .exactOptional()
                .openapi({
                  description:
                    "Specify number of rows to be returned. If you run the search with default values, in the response you will see 'numFound' attribute which will tell the number of records available in the dataset.",
                }),
            })
            .openapi({ required: ['criteria'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.record(z.string(), z.object({}))) } },
    },
    404: { description: 'No matching record found for the given criteria.' },
  },
})
