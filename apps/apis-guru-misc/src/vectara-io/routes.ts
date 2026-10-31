import { createRoute, z } from '@hono/zod-openapi'

const VectaraindexingCustomDimensionSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the dimension.' }),
    value: z.float64().exactOptional().openapi({ description: 'The value of the dimension.' }),
  })
  .openapi({
    description:
      'The value of a custom dimension. A valid list of custom dimensions is defined ahead of time for a corpus.',
    required: [],
  })
  .openapi('VectaraindexingCustomDimension')

type IndexingSectionType = {
  customDims?: z.infer<typeof VectaraindexingCustomDimensionSchema>[]
  id?: number
  metadataJson?: string
  section?: IndexingSectionType[]
  text?: string
  title?: string
}

const CorpusKeySemanticsSchema = z
  .enum(['DEFAULT', 'QUERY', 'RESPONSE'])
  .default('DEFAULT')
  .openapi({
    description:
      'Semantics controls the interpretation of the query string by the\nserver, and can be used to override the default semantics assigned\nin the corpus definition.\n\n\n\n\n - DEFAULT: Use corpus-assigned semantics.  This is the most common setting.\n - QUERY: Use query semantics.  This is also common.\n - RESPONSE: Use response semantics.  Usage of this is rare.',
  })
  .openapi('CorpusKeySemantics')

const QueryRequestRerankingConfigSchema = z
  .object({
    rerankerId: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        title:
          'Which reranking model to use if reranking.  Currently, the only ID\navailable is ID 272725717',
      }),
  })
  .openapi({ description: 'Configuration options to apply to the reranking.', required: [] })
  .openapi('QueryRequestRerankingConfig')

const AdminDimensionSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description for the custom dimension.' }),
    indexingDefault: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The default value to give to documents for this custom dimension.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the custom dimension.  The maximum length of the name is\n8 characters.',
      }),
    servingDefault: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The default weight to give this dimension when running queries. A value of\n0.0, for example, gives it no weight at all.',
      }),
  })
  .openapi({
    description:
      'A custom dimension is additional numeric metadata that you want to affect\nVectara\'s scoring.  For example, these could be "number of stars" ratings,\nor other business metrics like a product\'s margins that you want to use\nto boost where a result is in the list.',
    required: [],
  })
  .openapi('AdminDimension')

const AdminFilterAttributeLevelSchema = z
  .enum([
    'FILTER_ATTRIBUTE_LEVEL__UNDEFINED',
    'FILTER_ATTRIBUTE_LEVEL__DOCUMENT',
    'FILTER_ATTRIBUTE_LEVEL__DOCUMENT_PART',
  ])
  .default('FILTER_ATTRIBUTE_LEVEL__UNDEFINED')
  .openapi({
    title:
      '- FILTER_ATTRIBUTE_LEVEL__DOCUMENT: Document-level attribute\n - FILTER_ATTRIBUTE_LEVEL__DOCUMENT_PART: Part-level attribute',
  })
  .openapi('AdminFilterAttributeLevel')

const AdminFilterAttributeTypeSchema = z
  .enum([
    'FILTER_ATTRIBUTE_TYPE__UNDEFINED',
    'FILTER_ATTRIBUTE_TYPE__INTEGER',
    'FILTER_ATTRIBUTE_TYPE__INTEGER_LIST',
    'FILTER_ATTRIBUTE_TYPE__REAL',
    'FILTER_ATTRIBUTE_TYPE__REAL_LIST',
    'FILTER_ATTRIBUTE_TYPE__TEXT',
    'FILTER_ATTRIBUTE_TYPE__TEXT_LIST',
  ])
  .default('FILTER_ATTRIBUTE_TYPE__UNDEFINED')
  .openapi('AdminFilterAttributeType')

const AdminFilterAttributeSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'An optional description.' }),
    indexed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the field is indexed for maximum query speed.' }),
    level: AdminFilterAttributeLevelSchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the field, as seen in metadata.' }),
    type: AdminFilterAttributeTypeSchema.exactOptional(),
  })
  .openapi({
    description: 'Defines metadata fields that can be used in predicate queries.',
    required: [],
  })
  .openapi('AdminFilterAttribute')

const AdminCorpusSchema = z
  .object({
    customDimensions: z.array(AdminDimensionSchema).exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description for the corpus.' }),
    dtProvision: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the corpus was provisioned.' }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the corpus is enabled for use or not.' }),
    encoderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is an advanced setting for changing the underlying model type.  The\ndefault value is "1", which is Vectara\'s high-performing global model.\nUnderlying models may be swapped for some paying customers by contacting\nour support team.',
      }),
    encrypted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Encryption is on by default and cannot be turned off.' }),
    filterAttributes: z.array(AdminFilterAttributeSchema).exactOptional(),
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
      .openapi({ type: 'integer', format: 'int64', description: 'The Corpus ID.' }),
    metadataMaxBytes: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'An optional maximum size of the metadata that each document can contain.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the corpus.' }),
    swapIenc: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The default query encoder is designed for normal question-answering types\nof queries when the text contains the answer.  Swapping the index encoder\nis generally rare, but can be used to help directly match questions to\nquestions.  This can be useful if you have a FAQ dataset and you want to\ndirectly match the user question to the question in the FAQ.',
      }),
    swapQenc: z.boolean().exactOptional(),
    textless: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When a corpus is "textless", Vectara does not store the original text.\nInstead, Vectara converts the text to vectors and only retains metadata.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AdminCorpus')

const AdminCreateCorpusRequestSchema = z
  .object({ corpus: AdminCorpusSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AdminCreateCorpusRequest')

const VectaraStatusCodeSchema = z
  .enum([
    'OK',
    'FAILURE',
    'UNKNOWN',
    'INVALID_ARGUMENT',
    'DEADLINE_EXCEEDED',
    'ALREADY_EXISTS',
    'PERMISSION_DENIED',
    'RESOURCE_EXHAUSTED',
    'FAILED_PRECONDITION',
    'ABORTED',
    'OUT_OF_RANGE',
    'UNIMPLEMENTED',
    'INTERNAL',
    'UNAVAILABLE',
    'DATA_LOSS',
    'UNAUTHENTICATED',
    'BAD_REQUEST',
    'UNAUTHORIZED',
    'FORBIDDEN',
    'NOT_FOUND',
    'METHOD_NOT_ALLOWED',
    'CONFLICT',
    'UNSUPPORTED_MEDIA_TYPE',
    'TOO_MANY_REQUESTS',
    'INTERNAL_SERVER_ERROR',
    'NOT_IMPLEMENTED',
    'SERVICE_UNAVAILABLE',
    'INSUFFICIENT_STORAGE',
    'UNPARSEABLE_RESPONSE',
    'DISABLED_CUSTOMER',
    'INVALID_CUSTOMER_ID',
    'DISABLED_CORPUS',
    'INVALID_CORPUS_ID',
    'DISABLED_API_KEY',
    'EXPIRED_API_KEY',
    'INVALID_API_KEY',
    'CMK_INACCESSIBLE',
    'QRY__DISABLED_CORPUS',
    'QRY__DOCUMENT_DB_FAILURE',
    'QRY__ENCODER_FAILURE',
    'QRY__INTERRUPTED',
    'QRY__INVALID_CORPUS',
    'QRY__INVALID_START',
    'QRY__INVALID_NUM_RESULTS',
    'QRY__INVALID_CONTEXT',
    'QRY__MISSING_QUERY',
    'QRY__MISSING_CORPUS',
    'QRY__TIMEOUT',
    'QRY__TOO_MANY_CORPORA',
    'QRY__TOO_MANY_QUERIES',
    'QRY__VECTOR_INDEX_FAILURE',
    'QRY__INVALID_DIMENSION',
    'QRY__INVALID_CLIENTKEY',
    'QRY__DECRYPTION_FAILURE',
    'QRY__INVALID_RERANKER',
    'QRY__PARTIAL_RERANK',
    'QRY__RERANK_FAILURE',
    'QRY__TOO_MANY_RESULT_ROWS',
    'QRY__PARTIAL_RETRIEVAL',
    'CX_SPECS__INVALID_JSON',
    'CX_SPECS__UNREGISTERED_TYPE',
    'CX_SPECS__MISSING_SPEC',
    'CX_SPECS__MISSING_TYPE',
    'CX_SPECS__UNPARSEABLE_SPEC',
    'ADM__INVALID_CUSTOMER_ID',
    'ADM__INVALID_CORPUS_ID',
    'ADM__INVALID_ENCODER_ID',
    'ADM__INVALID_ROLE_ID',
    'ADM__ROLE_ALREADY_EXISTS',
    'ADM__ONLY_ONE_OWNER_SUPPORTED',
    'ADM__INVALID_PERMISSION',
    'ADM__ROLECREATION_FAILURE',
    'ADM__USER_EMAIL_NOT_AVAIALBLE',
    'ADM__USERNAME_NOT_AVAILABLE',
    'ADM__SIGNUP_MISSING_NAME',
    'ADM__SIGNUP_MISSING_ORG',
    'ADM__SIGNUP_MISSING_EMAIL',
    'ADM__SIGNUP_MISSING_PAYMENT',
    'ADM__SIGNUP_MISSING_PLAN',
    'ADM__SIGNUP_MISSING_PASSWORD',
    'ADM__SIGNUP_INVALID_NAME',
    'ADM__SIGNUP_INVALID_ORG',
    'ADM__SIGNUP_INVALID_EMAIL',
    'ADM__SIGNUP_INVALID_PAYMENT',
    'ADM__SIGNUP_INVALID_PLAN',
    'ADM__SIGNUP_INVALID_PASSWORD',
    'ADM__SIGNUP_INVALID_ACCOUNT_ALIAS',
    'ADM__SIGNUP_INVALID_EMAIL_VALIDATION_CODE',
    'ADM__SIGNUP_MISSING_COUNTRY_CODE',
    'ADM__SIGNUP_ROOT_EMAIL_NOT_AVAILABLE',
    'ADM__CUST_MARK_DELETE_FAILED',
    'ADM__CUST_FAISS_DEALLOC_FAILED',
    'ADM__CORPUS_LIMIT_REACHED',
    'ADM__STRIPE_CARD_DECLINED',
    'ADM__STRIPE_PROCESSING_ERROR',
    'ADM__EMAIL_VALIDATION_REQUEST_NOT_FOUND',
    'ADM__EMAIL_NOT_VALIDATED',
    'ADM__CHANGE_PLAN__NO_CURRENT_PLAN',
    'ADM__CHANGE_PLAN__REQUIRES_MANUAL_CHANGE',
    'ADM__CHANGE_PLAN__INVALID_PLAN_ID',
    'ADM__CHANGE_PLAN__NO_PAYMENT_SOURCE',
    'ADM__CHANGE_PLAN__INVALID_EFFECTIVE_DATE',
    'ADM__CHANGE_PLAN__CONFLICTING_CHANGE',
    'SCM__MISCONFIGURED_CONNECTION',
    'STATS_DB_READ_FAILURE',
    'VDB__TEXT_READ_FAILURE',
    'REBUILD__LOW_RECALL',
    'REBUILD__INDEX_UPLOAD_FAILURE',
    'REBUILD__UPDATE_JOURNAL_FAILURE',
    'REBUILD__UPDATE_FAISSPARAMS_FAILURE',
    'REBUILD__NO_DATA',
    'REBUILD__EVALUATION',
    'IDX__TRANSIENT_PARTIAL_DELETION_FAILURE',
    'IDX__PERMANENT_PARTIAL_DELETION_FAILURE',
  ])
  .default('OK')
  .openapi('VectaraStatusCode')

const ComvectaraStatusSchema = z
  .object({
    code: VectaraStatusCodeSchema.exactOptional(),
    statusDetail: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ComvectaraStatus')

const AdminCreateCorpusResponseSchema = z
  .object({
    corpusId: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The Corpus ID that was created.',
      }),
    status: ComvectaraStatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdminCreateCorpusResponse')

const AdminDeleteCorpusRequestSchema = z
  .object({
    corpusId: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The Corpus ID to be deleted.' }),
    customerId: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The Customer ID that contains the corpus to be deleted.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AdminDeleteCorpusRequest')

const AdminDeleteCorpusResponseSchema = z
  .object({ status: ComvectaraStatusSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AdminDeleteCorpusResponse')

const AdminListCorporaRequestSchema = z
  .object({
    filter: z
      .string()
      .exactOptional()
      .openapi({ description: 'A regex to match corpora against.' }),
    numResults: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The maximum results to return.' }),
    pageKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'A key that is passed in to retrieve a specific page of results.' }),
  })
  .openapi({ required: [] })
  .openapi('AdminListCorporaRequest')

const AdminListCorporaResponseSchema = z
  .object({
    corpus: z.array(AdminCorpusSchema).exactOptional(),
    pageKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A key that is passed into a subsequent result in order to\nretrieve the next page of results.',
      }),
    status: ComvectaraStatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdminListCorporaResponse')

const AdminResetCorpusRequestSchema = z
  .object({
    corpusId: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The Corpus ID to be reset.' }),
    customerId: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The Customer ID that contains the corpus to be reset.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AdminResetCorpusRequest')

const AdminResetCorpusResponseSchema = z
  .object({ status: ComvectaraStatusSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AdminResetCorpusResponse')

const ProtobufAnySchema = z
  .object({
    typeUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n\n\n\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n\n\n\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Must be a valid serialized protocol buffer of the above specified type.',
      }),
  })
  .openapi({
    description:
      '`Any` contains an arbitrary serialized protocol buffer message along with a\nURL that describes the type of the serialized message.\n\nProtobuf library provides support to pack/unpack Any values in the form\nof utility functions or additional generated methods of the Any type.\n\nExample 1: Pack and unpack a message in C++.\n\n\n\n\n    Foo foo = ...;\n    Any any;\n    any.PackFrom(foo);\n    ...\n    if (any.UnpackTo(&foo)) {\n      ...\n    }\n\nExample 2: Pack and unpack a message in Java.\n\n\n\n\n    Foo foo = ...;\n    Any any = Any.pack(foo);\n    ...\n    if (any.is(Foo.class)) {\n      foo = any.unpack(Foo.class);\n    }\n\nExample 3: Pack and unpack a message in Python.\n\n\n\n\n    foo = Foo(...)\n    any = Any()\n    any.Pack(foo)\n    ...\n    if any.Is(Foo.DESCRIPTOR):\n      any.Unpack(foo)\n      ...\n\nExample 4: Pack and unpack a message in Go\n\n\n\n\n     foo := &pb.Foo{...}\n     any, err := anypb.New(foo)\n     if err != nil {\n       ...\n     }\n     ...\n     foo := &pb.Foo{}\n     if err := any.UnmarshalTo(foo); err != nil {\n       ...\n     }\n\nThe pack methods provided by protobuf library will by default use\n\'type.googleapis.com/full.type.name\' as the type URL and the unpack\nmethods only use the fully qualified type name after the last \'/\'\nin the type URL, for example "foo.bar.com/x/y.z" will yield type\nname "y.z".\n\n\nJSON\n\nThe JSON representation of an `Any` value uses the regular\nrepresentation of the deserialized, embedded message, with an\nadditional field `@type` which contains the type URL. Example:\n\n\n\n\n    package google.profile;\n    message Person {\n      string first_name = 1;\n      string last_name = 2;\n    }\n\n    {\n      "@type": "type.googleapis.com/google.profile.Person",\n      "firstName": <string>,\n      "lastName": <string>\n    }\n\nIf the embedded message type is well-known and has a custom JSON\nrepresentation, that representation will be embedded adding a field\n`value` which holds the custom JSON in addition to the `@type`\nfield. Example (for message [google.protobuf.Duration][]):\n\n\n\n\n    {\n      "@type": "type.googleapis.com/google.protobuf.Duration",\n      "value": "1.212s"\n    }',
    required: [],
  })
  .openapi('ProtobufAny')

const GooglerpcStatusSchema = z
  .object({
    code: z.int32().exactOptional(),
    details: z.array(ProtobufAnySchema).exactOptional(),
    message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GooglerpcStatus')

const IndexingSectionSchema: z.ZodType<IndexingSectionType> = z
  .lazy(() =>
    z
      .object({
        customDims: z
          .array(VectaraindexingCustomDimensionSchema)
          .exactOptional()
          .openapi({
            description:
              'A list of custom dimension values that are included in the generated\nrepresentation of all subsections (i.e. sections contains by this section).',
          }),
        id: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'Optionally, the unique ID of this section. If set, it will be returned as\nmetadata in query results.',
          }),
        metadataJson: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Metadata about this section. This should be a json string. It is passed\nthrough the system, without being used at indexing time. It can be\nretrieved at query time.',
          }),
        section: z
          .array(IndexingSectionSchema)
          .exactOptional()
          .openapi({ description: 'A list of subsections.' }),
        text: z
          .string()
          .exactOptional()
          .openapi({ description: 'The text of the section. This should never be empty.' }),
        title: z
          .string()
          .exactOptional()
          .openapi({ description: 'Optionally, the title of the section. This may be empty.' }),
      })
      .openapi({ description: 'A section within a structured document.', required: [] }),
  )
  .openapi('IndexingSection')

const ServingAttributeSchema = z
  .object({ name: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ServingAttribute')

const VectaraservingCustomDimensionSchema = z
  .object({ name: z.string().exactOptional(), weight: z.float64().exactOptional() })
  .openapi({ description: 'Defined the weight of a custom dimension at query time.', required: [] })
  .openapi('VectaraservingCustomDimension')

const ServingCorpusKeySchema = z
  .object({
    corpusId: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The Corpus ID.' }),
    customerId: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'The Customer ID.' }),
    dim: z
      .array(VectaraservingCustomDimensionSchema)
      .exactOptional()
      .openapi({ description: 'Weights on custom dimensions for the corpus.' }),
    metadataFilter: z.string().exactOptional(),
    semantics: CorpusKeySemanticsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServingCorpusKey')

const ServingQueryRequestSchema = z
  .object({
    corpusKey: z.array(ServingCorpusKeySchema).exactOptional(),
    numResults: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The number of results to return.',
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({ description: 'The query text to use from the end user.' }),
    rerankingConfig: QueryRequestRerankingConfigSchema.exactOptional(),
    start: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'The start position in the result set' }),
  })
  .openapi({ required: [] })
  .openapi('ServingQueryRequest')

const ServingBatchQueryRequestSchema = z
  .object({ query: z.array(ServingQueryRequestSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ServingBatchQueryRequest')

const ServingPerformanceMetricsSchema = z
  .object({
    queryEncodeMs: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'How long it took to encode the query.',
      }),
    rerankMs: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'How long it took to rerank the results.',
      }),
    retrievalMs: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'How long it took to retrieve relevant results.',
      }),
    userdataRetrievalMs: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'How long it took to retrieve user data.',
      }),
  })
  .openapi({
    description: 'Basic performance metrics that can be attached to a server response.',
    required: [],
  })
  .openapi('ServingPerformanceMetrics')

const ServingResponseSetDocumentSchema = z
  .object({
    id: z.string().exactOptional(),
    metadata: z.array(ServingAttributeSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServingResponseSetDocument')

const ServingResponseSchema = z
  .object({
    corpusKey: ServingCorpusKeySchema.exactOptional(),
    documentIndex: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Use this ID to find the document in the ResponseSet.',
      }),
    metadata: z.array(ServingAttributeSchema).exactOptional(),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The score used for ranking results.  The higher the score, the better the match.',
      }),
    text: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServingResponse')

const ServingResponseSetSchema = z
  .object({
    document: z.array(ServingResponseSetDocumentSchema).exactOptional(),
    response: z.array(ServingResponseSchema).exactOptional(),
    status: z
      .array(ComvectaraStatusSchema)
      .exactOptional()
      .openapi({ description: 'Potentially multiple warnings.' }),
  })
  .openapi({ required: [] })
  .openapi('ServingResponseSet')

const ServingBatchQueryResponseSchema = z
  .object({
    metrics: ServingPerformanceMetricsSchema.exactOptional(),
    responseSet: z.array(ServingResponseSetSchema).exactOptional(),
    status: z.array(ComvectaraStatusSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServingBatchQueryResponse')

const VectaraDeleteDocumentRequestSchema = z
  .object({
    corpusId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Corpus ID that contains the document.' }),
    customerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Customer ID to issue the request for.' }),
    documentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Document ID to be deleted.' }),
  })
  .openapi({ description: 'Request to delete a document from an index.', required: [] })
  .openapi('VectaraDeleteDocumentRequest')

const VectaraDeleteDocumentResponseSchema = z.object({}).openapi('VectaraDeleteDocumentResponse')

const VectaraindexingDocumentSchema = z
  .object({
    customDims: z
      .array(VectaraindexingCustomDimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of custom dimension values that are included in the generated\nrepresentation of all sections.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional description for the document.' }),
    documentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client assigned document ID to this document.' }),
    metadataJson: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Metadata about the document. This should be a json string, and it can be\nretrieved at query time.',
      }),
    section: z
      .array(IndexingSectionSchema)
      .exactOptional()
      .openapi({
        description:
          'The actual content of the document, structured as a repeating list\nof sections.',
      }),
    title: z.string().exactOptional().openapi({ description: 'The title of the document.' }),
  })
  .openapi({ description: 'A document to index.', required: [] })
  .openapi('VectaraindexingDocument')

const VectaraIndexDocumentRequestSchema = z
  .object({
    corpusId: z.string().exactOptional(),
    customerId: z.string().exactOptional(),
    document: VectaraindexingDocumentSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VectaraIndexDocumentRequest')

const VectaraStorageQuotaSchema = z
  .object({
    numChars: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number of chars from the document that consumed the storage quota.',
      }),
    numMetadataChars: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of chars in the metadata of the document that consumed the\nstorage quota.',
      }),
  })
  .openapi({
    title: 'Encapsulates storage quota consumed by indexed documents.\nNextId: 3',
    required: [],
  })
  .openapi('VectaraStorageQuota')

const VectaraIndexDocumentResponseSchema = z
  .object({
    quotaConsumed: VectaraStorageQuotaSchema.exactOptional(),
    status: ComvectaraStatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VectaraIndexDocumentResponse')

const CustomerIdentifierParamsSchema = z
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
      description: 'The Customer ID to use for the request.',
      in: 'header',
      name: 'customer-id',
      required: true,
      schema: { type: 'integer' },
    },
  })

const ServingBatchQueryRequestRequestBody = {
  content: { 'application/json': { schema: ServingBatchQueryRequestSchema } },
  required: true,
}

const ApiKeyAuthSecurityScheme = { in: 'header', name: 'x-api-key', type: 'apiKey' }

const OAuthSecurityScheme = {
  description: 'OAuth2 access to Vectara',
  flows: {
    clientCredentials: {
      scopes: {},
      tokenUrl:
        'https://vectara-prod-YOUR_VECTARA_CUSTOMER_ID.auth.us-west-2.amazoncognito.com/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1CreateCorpusRoute = createRoute({
  method: 'post',
  path: '/v1/create-corpus',
  tags: ['AdminService'],
  description: 'Create Corpus',
  operationId: 'CreateCorpus',
  request: {
    headers: z.object({ 'customer-id': CustomerIdentifierParamsSchema }),
    body: {
      content: { 'application/json': { schema: AdminCreateCorpusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful response.',
      content: { 'application/json': { schema: AdminCreateCorpusResponseSchema } },
    },
    default: {
      description: 'An unexpected error response.',
      content: { 'application/json': { schema: GooglerpcStatusSchema } },
    },
  },
})

export const postV1DeleteCorpusRoute = createRoute({
  method: 'post',
  path: '/v1/delete-corpus',
  tags: ['AdminService'],
  description: 'Delete Corpus',
  operationId: 'DeleteCorpus',
  request: {
    headers: z.object({ 'customer-id': CustomerIdentifierParamsSchema }),
    body: {
      content: { 'application/json': { schema: AdminDeleteCorpusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful response.',
      content: { 'application/json': { schema: AdminDeleteCorpusResponseSchema } },
    },
    default: {
      description: 'An unexpected error response.',
      content: { 'application/json': { schema: GooglerpcStatusSchema } },
    },
  },
})

export const postV1DeleteDocRoute = createRoute({
  method: 'post',
  path: '/v1/delete-doc',
  tags: ['IndexService'],
  description: 'Delete',
  operationId: 'Delete',
  request: {
    headers: z.object({ 'customer-id': CustomerIdentifierParamsSchema }),
    body: {
      content: { 'application/json': { schema: VectaraDeleteDocumentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful response.',
      content: { 'application/json': { schema: VectaraDeleteDocumentResponseSchema } },
    },
    default: {
      description: 'An unexpected error response.',
      content: { 'application/json': { schema: GooglerpcStatusSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }, { oAuth: [] }],
})

export const postV1IndexRoute = createRoute({
  method: 'post',
  path: '/v1/index',
  tags: ['IndexService'],
  description: 'Index',
  operationId: 'Index',
  request: {
    headers: z.object({ 'customer-id': CustomerIdentifierParamsSchema }),
    body: {
      content: { 'application/json': { schema: VectaraIndexDocumentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful response.',
      content: { 'application/json': { schema: VectaraIndexDocumentResponseSchema } },
    },
    default: {
      description: 'An unexpected error response.',
      content: { 'application/json': { schema: GooglerpcStatusSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }, { oAuth: [] }],
})

export const postV1ListCorporaRoute = createRoute({
  method: 'post',
  path: '/v1/list-corpora',
  tags: ['AdminService'],
  description: 'List Corpora',
  operationId: 'ListCorpora',
  request: {
    headers: z.object({ 'customer-id': CustomerIdentifierParamsSchema }),
    body: {
      content: { 'application/json': { schema: AdminListCorporaRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful response.',
      content: { 'application/json': { schema: AdminListCorporaResponseSchema } },
    },
    default: {
      description: 'An unexpected error response.',
      content: { 'application/json': { schema: GooglerpcStatusSchema } },
    },
  },
})

export const postV1QueryRoute = createRoute({
  method: 'post',
  path: '/v1/query',
  tags: ['QueryService'],
  description: 'Query',
  operationId: 'Query',
  request: {
    headers: z.object({ 'customer-id': CustomerIdentifierParamsSchema }),
    body: ServingBatchQueryRequestRequestBody,
  },
  responses: {
    200: {
      description: 'A successful response.',
      content: { 'application/json': { schema: ServingBatchQueryResponseSchema } },
    },
    default: {
      description: 'An unexpected error response.',
      content: { 'application/json': { schema: GooglerpcStatusSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }, { oAuth: [] }],
})

export const postV1ResetCorpusRoute = createRoute({
  method: 'post',
  path: '/v1/reset-corpus',
  tags: ['AdminService'],
  description: 'Reset Corpus',
  operationId: 'ResetCorpus',
  request: {
    headers: z.object({ 'customer-id': CustomerIdentifierParamsSchema }),
    body: {
      content: { 'application/json': { schema: AdminResetCorpusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful response.',
      content: { 'application/json': { schema: AdminResetCorpusResponseSchema } },
    },
    default: {
      description: 'An unexpected error response.',
      content: { 'application/json': { schema: GooglerpcStatusSchema } },
    },
  },
})

export const postV1StreamQueryRoute = createRoute({
  method: 'post',
  path: '/v1/stream-query',
  tags: ['QueryService'],
  description: 'Stream Query',
  operationId: 'StreamQuery',
  request: {
    headers: z.object({ 'customer-id': CustomerIdentifierParamsSchema }),
    body: ServingBatchQueryRequestRequestBody,
  },
  responses: {
    200: {
      description: 'A successful response.(streaming responses)',
      content: {
        'application/json': {
          schema: z
            .object({
              error: GooglerpcStatusSchema.exactOptional(),
              result: ServingResponseSetSchema.exactOptional(),
            })
            .openapi({ title: 'Stream result of servingResponseSet', required: [] }),
        },
      },
    },
    default: {
      description: 'An unexpected error response.',
      content: { 'application/json': { schema: GooglerpcStatusSchema } },
    },
  },
  security: [{ ApiKeyAuth: [] }, { oAuth: [] }],
})

export const postV1UploadRoute = createRoute({
  method: 'post',
  path: '/v1/upload',
  tags: ['IndexService'],
  description: 'File Upload',
  operationId: 'FileUpload',
  request: {
    query: z.object({
      c: z
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
            description: 'Customer ID',
            in: 'query',
            name: 'c',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      o: z
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
            description: 'Corpus ID',
            in: 'query',
            name: 'o',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      d: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, the server returns the extracted document that was indexed',
            in: 'query',
            name: 'd',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              doc_metadata: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A JSON string of any additional metadata you want attached to the file.',
                }),
              file: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The file to be indexed into Vectara.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'A successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              response: z
                .object({
                  quotaConsumed: z
                    .object({
                      numChars: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The number of characters Vectara indexed from the file uploaded.',
                        }),
                      numMetadataChars: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The number of metadata characters Vectara indexed from the file uploaded.',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  status: z.object({}).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'An invalid request was sent.  e.g. one or more parameters was missing, or the corpus does not exist.',
      content: {
        'application/json': {
          schema: z
            .object({
              httpCode: z.int().exactOptional().openapi({ description: 'Returned HTTP code' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: { description: 'The request was not authenticated' },
    403: { description: 'The caller is not authorized to add documents to the corpus' },
    409: {
      description:
        'A document already exists in the corpus with the same document ID, yet the contents of the indexed document are different than the file being uploaded.\nSince the indexer is idempotent, the same document (identified by the document ID) can be uploaded multiple times.\nThe indexer does not support updates yet, so an error is returned when a different document is uploaded for the same document ID\nNote that when a raw file is uploaded, the file name is used as the document ID.',
    },
    507: {
      description:
        'There is no more indexing quota left for the corpus or customer to index more documents.  Upgrade your account, add a credit card, or contact sales.',
    },
  },
  security: [{ ApiKeyAuth: [] }, { oAuth: [] }],
})
