import { createRoute, z } from '@hono/zod-openapi'

type TensorflowDataTypeType =
  | 'DT_INVALID'
  | 'DT_FLOAT'
  | 'DT_DOUBLE'
  | 'DT_INT32'
  | 'DT_UINT8'
  | 'DT_INT16'
  | 'DT_INT8'
  | 'DT_STRING'
  | 'DT_COMPLEX64'
  | 'DT_INT64'
  | 'DT_BOOL'
  | 'DT_QINT8'
  | 'DT_QUINT8'
  | 'DT_QINT32'
  | 'DT_BFLOAT16'
  | 'DT_QINT16'
  | 'DT_QUINT16'
  | 'DT_UINT16'
  | 'DT_COMPLEX128'
  | 'DT_HALF'
  | 'DT_RESOURCE'
  | 'DT_VARIANT'
  | 'DT_UINT32'
  | 'DT_UINT64'
  | 'DT_FLOAT_REF'
  | 'DT_DOUBLE_REF'
  | 'DT_INT32_REF'
  | 'DT_UINT8_REF'
  | 'DT_INT16_REF'
  | 'DT_INT8_REF'
  | 'DT_STRING_REF'
  | 'DT_COMPLEX64_REF'
  | 'DT_INT64_REF'
  | 'DT_BOOL_REF'
  | 'DT_QINT8_REF'
  | 'DT_QUINT8_REF'
  | 'DT_QINT32_REF'
  | 'DT_BFLOAT16_REF'
  | 'DT_QINT16_REF'
  | 'DT_QUINT16_REF'
  | 'DT_UINT16_REF'
  | 'DT_COMPLEX128_REF'
  | 'DT_HALF_REF'
  | 'DT_RESOURCE_REF'
  | 'DT_VARIANT_REF'
  | 'DT_UINT32_REF'
  | 'DT_UINT64_REF'

type TensorflowResourceHandleProtoType = {
  container?: string
  device?: string
  hash_code?: string
  maybe_type_name?: string
  name?: string
}

const TensorflowDataTypeSchema: z.ZodType<TensorflowDataTypeType> = z
  .enum([
    'DT_INVALID',
    'DT_FLOAT',
    'DT_DOUBLE',
    'DT_INT32',
    'DT_UINT8',
    'DT_INT16',
    'DT_INT8',
    'DT_STRING',
    'DT_COMPLEX64',
    'DT_INT64',
    'DT_BOOL',
    'DT_QINT8',
    'DT_QUINT8',
    'DT_QINT32',
    'DT_BFLOAT16',
    'DT_QINT16',
    'DT_QUINT16',
    'DT_UINT16',
    'DT_COMPLEX128',
    'DT_HALF',
    'DT_RESOURCE',
    'DT_VARIANT',
    'DT_UINT32',
    'DT_UINT64',
    'DT_FLOAT_REF',
    'DT_DOUBLE_REF',
    'DT_INT32_REF',
    'DT_UINT8_REF',
    'DT_INT16_REF',
    'DT_INT8_REF',
    'DT_STRING_REF',
    'DT_COMPLEX64_REF',
    'DT_INT64_REF',
    'DT_BOOL_REF',
    'DT_QINT8_REF',
    'DT_QUINT8_REF',
    'DT_QINT32_REF',
    'DT_BFLOAT16_REF',
    'DT_QINT16_REF',
    'DT_QUINT16_REF',
    'DT_UINT16_REF',
    'DT_COMPLEX128_REF',
    'DT_HALF_REF',
    'DT_RESOURCE_REF',
    'DT_VARIANT_REF',
    'DT_UINT32_REF',
    'DT_UINT64_REF',
  ])
  .default('DT_INVALID')
  .openapi({
    description:
      '- DT_INVALID: Not a legal value for DataType.  Used to indicate a DataType field has not been set. - DT_FLOAT: Data types that all computation devices are expected to be capable to support. - DT_FLOAT_REF: Do not use!  These are only for parameters.  Every enum above should have a corresponding value below (verified by types_test).',
    title: 'LINT.IfChange',
  })
  .openapi('TensorflowDataType')

const TensorflowResourceHandleProtoSchema: z.ZodType<TensorflowResourceHandleProtoType> = z
  .strictObject({
    container: z
      .string()
      .regex(/^.{1,2097152}/)
      .max(2097152)
      .exactOptional()
      .openapi({ description: 'Container in which this resource is placed.' }),
    device: z
      .string()
      .regex(/^.{1,2097152}/)
      .max(2097152)
      .exactOptional()
      .openapi({ description: 'Unique name for the device containing the resource.' }),
    hash_code: z
      .string()
      .regex(/^.{1,2097152}/)
      .max(2097152)
      .exactOptional()
      .openapi({
        description:
          'Hash code for the type of the resource. Is only valid in the same device and in the same execution.',
      }),
    maybe_type_name: z
      .string()
      .regex(/^.{1,2097152}/)
      .max(2097152)
      .exactOptional()
      .openapi({
        description:
          'For debug-only, the name of the type pointed to by this handle, if available.',
      }),
    name: z
      .string()
      .regex(/^.{1,2097152}/)
      .max(2097152)
      .exactOptional()
      .openapi({ description: 'Unique name of this resource.' }),
  })
  .openapi({
    description:
      'Protocol buffer representing a handle to a tensorflow resource. Handles are not valid across executions, but can be serialized back and forth from within a single run.',
    required: [],
  })
  .openapi('TensorflowResourceHandleProto')

const TensorShapeProtoDimSchema = z
  .strictObject({
    name: z
      .string()
      .regex(/^.{1,2097152}/)
      .max(2097152)
      .exactOptional()
      .openapi({ description: 'Optional name of the tensor dimension.' }),
    size: z
      .string()
      .regex(/^.{1,2097152}/)
      .max(2097152)
      .exactOptional()
      .openapi({
        description:
          'Size of the tensor in that dimension. This value must be >= -1, but values of -1 are reserved for "unknown" shapes (values of -1 mean "unknown" dimension).  Certain wrappers that work with TensorShapeProto may fail at runtime when deserializing a TensorShapeProto containing a dim value of -1.',
      }),
  })
  .openapi({ description: 'One dimension of the tensor.', required: [] })
  .openapi('TensorShapeProtoDim')

type TensorflowTensorShapeProtoType = {
  dim?: z.infer<typeof TensorShapeProtoDimSchema>[]
  unknown_rank?: boolean
}

const TensorflowTensorShapeProtoSchema: z.ZodType<TensorflowTensorShapeProtoType> = z
  .strictObject({
    dim: z
      .array(TensorShapeProtoDimSchema)
      .max(2097152)
      .exactOptional()
      .openapi({
        description:
          'Dimensions of the tensor, such as {"input", 30}, {"output", 40} for a 30 x 40 2D tensor.  If an entry has size -1, this corresponds to a dimension of unknown size. The names are optional.\nThe order of entries in "dim" matters: It indicates the layout of the values in the tensor in-memory representation.\nThe first entry in "dim" is the outermost dimension used to layout the values, the last entry is the innermost dimension.  This matches the in-memory layout of RowMajor Eigen tensors.\nIf "dim.size()" > 0, "unknown_rank" must be false.',
      }),
    unknown_rank: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the number of dimensions in the shape is unknown.\nIf true, "dim.size()" must be 0.',
      }),
  })
  .openapi({ description: 'Dimensions of a tensor.', required: [] })
  .openapi('TensorflowTensorShapeProto')

const TensorflowVariantTensorDataProtoSchema: z.ZodType<TensorflowVariantTensorDataProtoType> = z
  .lazy(() =>
    z
      .strictObject({
        metadata: z
          .string()
          .regex(/^.{1,2097152}/)
          .max(2097152)
          .exactOptional()
          .openapi({ description: 'Portions of the object that are not Tensors.' }),
        tensors: z
          .array(TensorflowTensorProtoSchema)
          .max(2097152)
          .exactOptional()
          .openapi({ description: 'Tensors contained within objects being serialized.' }),
        type_name: z
          .string()
          .regex(/^.{1,2097152}/)
          .max(2097152)
          .exactOptional()
          .openapi({ description: 'Name of the type of objects being serialized.' }),
      })
      .openapi({
        description: 'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
        required: [],
      }),
  )
  .openapi('TensorflowVariantTensorDataProto')

type TensorflowTensorProtoType = {
  bool_val?: boolean[]
  dcomplex_val?: number[]
  double_val?: number[]
  dtype?: z.infer<typeof TensorflowDataTypeSchema>
  float_val?: number[]
  half_val?: number[]
  int64_val?: string[]
  int_val?: number[]
  resource_handle_val?: z.infer<typeof TensorflowResourceHandleProtoSchema>[]
  scomplex_val?: number[]
  string_val?: string[]
  tensor_content?: string
  tensor_shape?: z.infer<typeof TensorflowTensorShapeProtoSchema>
  uint32_val?: bigint[]
  uint64_val?: string[]
  variant_val?: z.infer<typeof TensorflowVariantTensorDataProtoSchema>[]
  version_number?: number
}

const TensorflowTensorProtoSchema: z.ZodType<TensorflowTensorProtoType> = z
  .lazy(() =>
    z
      .strictObject({
        bool_val: z.array(z.boolean()).max(2097152).exactOptional().openapi({ title: 'DT_BOOL' }),
        dcomplex_val: z
          .array(z.float64())
          .max(2097152)
          .exactOptional()
          .openapi({
            description:
              'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real and imaginary parts of i-th double precision complex.',
          }),
        double_val: z
          .array(z.float64())
          .max(2097152)
          .exactOptional()
          .openapi({ description: 'DT_DOUBLE.' }),
        dtype: TensorflowDataTypeSchema.exactOptional(),
        float_val: z
          .array(z.float32())
          .max(2097152)
          .exactOptional()
          .openapi({ description: 'DT_FLOAT.' }),
        half_val: z
          .array(z.int32())
          .max(2097152)
          .exactOptional()
          .openapi({
            description:
              "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll have some pointless zero padding for each value here.",
          }),
        int64_val: z
          .array(
            z
              .string()
              .regex(/^.{1,2097152}/)
              .max(2097152),
          )
          .max(2097152)
          .exactOptional()
          .openapi({ title: 'DT_INT64' }),
        int_val: z
          .array(z.int32())
          .max(2097152)
          .exactOptional()
          .openapi({ description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.' }),
        resource_handle_val: z
          .array(TensorflowResourceHandleProtoSchema)
          .max(2097152)
          .exactOptional()
          .openapi({ title: 'DT_RESOURCE' }),
        scomplex_val: z
          .array(z.float32())
          .max(2097152)
          .exactOptional()
          .openapi({
            description:
              'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real and imaginary parts of i-th single precision complex.',
          }),
        string_val: z
          .array(
            z
              .string()
              .regex(/^.{1,2097152}/)
              .max(2097152),
          )
          .max(2097152)
          .exactOptional()
          .openapi({ title: 'DT_STRING' }),
        tensor_content: z
          .string()
          .regex(/.* maxLength: 2097152/)
          .exactOptional()
          .openapi({
            description:
              'Serialized raw tensor content from either Tensor::AsProtoTensorContent or memcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation can be used for all tensor types. The purpose of this representation is to reduce serialization overhead during RPC call by avoiding serialization of many repeated small items.',
          }),
        tensor_shape: TensorflowTensorShapeProtoSchema.exactOptional().openapi({
          description: 'Shape of the tensor.  TODO(touts): sort out the 0-rank issues.',
        }),
        uint32_val: z
          .array(
            z
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
          )
          .max(2097152)
          .exactOptional()
          .openapi({ title: 'DT_UINT32' }),
        uint64_val: z
          .array(
            z
              .string()
              .regex(/^.{1,2097152}/)
              .max(2097152),
          )
          .max(2097152)
          .exactOptional()
          .openapi({ title: 'DT_UINT64' }),
        variant_val: z
          .array(TensorflowVariantTensorDataProtoSchema)
          .max(2097152)
          .exactOptional()
          .openapi({ title: 'DT_VARIANT' }),
        version_number: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'Version number.\nIn version 0, if the "repeated xxx" representations contain only one element, that element is repeated to fill the shape.  This makes it easy to represent a constant Tensor with a single value.',
          }),
      })
      .openapi({ description: 'Protocol buffer representing a tensor.', required: [] }),
  )
  .openapi('TensorflowTensorProto')

type TensorflowVariantTensorDataProtoType = {
  metadata?: string
  tensors?: z.infer<typeof TensorflowTensorProtoSchema>[]
  type_name?: string
}

const AnyValueSchema = z
  .any()
  .openapi({ description: 'Can be anything: string, number, array, object, etc.' })
  .openapi('AnyValue')

const TensorSchema = z
  .strictObject({
    shape: z.array(z.int32()).max(2097152).exactOptional(),
    values: z.array(z.float64()).max(2097152).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Tensor')

const DefaultDataSchema = z
  .strictObject({
    names: z
      .array(
        z
          .string()
          .regex(/^.{1,2097152}/)
          .max(2097152),
      )
      .max(2097152)
      .exactOptional(),
    ndarray: z.array(AnyValueSchema).max(2097152).exactOptional(),
    tensor: TensorSchema.exactOptional(),
    tftensor: TensorflowTensorProtoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DefaultData')

const MetricTypeSchema = z
  .enum(['COUNTER', 'GAUGE', 'TIMER'])
  .default('COUNTER')
  .openapi('MetricType')

const MetricSchema = z
  .strictObject({
    key: z
      .string()
      .regex(/^.{1,2097152}/)
      .max(2097152)
      .exactOptional(),
    type: MetricTypeSchema.exactOptional(),
    value: z.float32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Metric')

const MetaSchema = z
  .strictObject({
    metrics: z.array(MetricSchema).max(2097152).exactOptional(),
    puid: z
      .string()
      .regex(/^.{1,2097152}/)
      .max(2097152)
      .exactOptional(),
    requestPath: z
      .record(
        z.string(),
        z
          .string()
          .regex(/^.{1,2097152}/)
          .max(2097152),
      )
      .exactOptional()
      .openapi({ example: { classifier: 'seldonio/mock_classifier:1.0' } }),
    routing: z
      .record(z.string(), z.int32())
      .exactOptional()
      .openapi({ example: { router1: 1 } }),
    tags: z
      .record(z.string(), AnyValueSchema)
      .exactOptional()
      .openapi({ example: { mytag: 'myvalue' } }),
  })
  .openapi({ required: [] })
  .openapi('Meta')

const StatusStatusFlagSchema = z
  .enum(['SUCCESS', 'FAILURE'])
  .default('SUCCESS')
  .openapi('StatusStatusFlag')

const StatusSchema = z
  .strictObject({
    code: z.int32().exactOptional(),
    info: z
      .string()
      .regex(/^.{1,2097152}/)
      .max(2097152)
      .exactOptional(),
    reason: z
      .string()
      .regex(/^.{1,2097152}/)
      .max(2097152)
      .exactOptional(),
    status: StatusStatusFlagSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Status')

const SeldonMessageSchema = z
  .strictObject({
    binData: z
      .string()
      .regex(/^.{1,2097152}/)
      .max(2097152)
      .exactOptional(),
    data: DefaultDataSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    status: StatusSchema.exactOptional(),
    strData: z
      .string()
      .regex(/^.{1,2097152}/)
      .max(2097152)
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SeldonMessage')

const FeedbackSchema = z
  .strictObject({
    request: SeldonMessageSchema.exactOptional(),
    response: SeldonMessageSchema.exactOptional(),
    reward: z.float32().exactOptional(),
    truth: SeldonMessageSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Feedback')

const SeldonMessageListSchema = z
  .strictObject({ seldonMessages: z.array(SeldonMessageSchema).max(2097152).exactOptional() })
  .openapi({ required: [] })
  .openapi('SeldonMessageList')

const HTTPBearerSecurityScheme = { scheme: 'bearer', type: 'http' }

export const postSeldonNamespaceDeploymentApiV10FeedbackRoute = createRoute({
  method: 'post',
  path: '/seldon/{namespace}/{deployment}/api/v1.0/feedback',
  tags: ['External Ambassador API'],
  operationId: 'SendFeedback',
  request: {
    params: z.object({
      namespace: z
        .string()
        .regex(/^.{1,2097152}/)
        .max(2097152)
        .openapi({
          param: {
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { maxLength: 2097152, pattern: '^.{1,2097152}', type: 'string' },
          },
        }),
      deployment: z
        .string()
        .regex(/^.{1,2097152}/)
        .max(2097152)
        .openapi({
          param: {
            in: 'path',
            name: 'deployment',
            required: true,
            schema: { maxLength: 2097152, pattern: '^.{1,2097152}', type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FeedbackSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'A successful response.',
      content: { 'application/json': { schema: SeldonMessageSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})

export const postSeldonNamespaceDeploymentApiV10PredictionsRoute = createRoute({
  method: 'post',
  path: '/seldon/{namespace}/{deployment}/api/v1.0/predictions',
  tags: ['External Ambassador API'],
  operationId: 'Predict',
  request: {
    params: z.object({
      namespace: z
        .string()
        .regex(/^.{1,2097152}/)
        .max(2097152)
        .openapi({
          param: {
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { maxLength: 2097152, pattern: '^.{1,2097152}', type: 'string' },
          },
        }),
      deployment: z
        .string()
        .regex(/^.{1,2097152}/)
        .max(2097152)
        .openapi({
          param: {
            in: 'path',
            name: 'deployment',
            required: true,
            schema: { maxLength: 2097152, pattern: '^.{1,2097152}', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: SeldonMessageSchema,
          example: { data: { names: ['feature1'], tensor: { shape: [1, 1], values: [1] } } },
        },
        'application/octet-stream': {
          schema: z
            .file()
            .regex(/^.{1,2097152}/)
            .max(2097152)
            .openapi({ type: 'string', format: 'binary' }),
        },
        'text/*': {
          schema: z
            .string()
            .regex(/^.{1,2097152}/)
            .max(2097152),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful response.',
      content: { 'application/json': { schema: SeldonMessageSchema } },
    },
  },
  security: [{ HTTPBearer: [] }],
})
