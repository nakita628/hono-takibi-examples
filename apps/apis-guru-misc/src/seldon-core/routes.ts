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
      '- DT_INVALID: Not a legal value for DataType.  Used to indicate a DataType field\nhas not been set.\n - DT_FLOAT: Data types that all computation devices are expected to be\ncapable to support.\n - DT_FLOAT_REF: Do not use!  These are only for parameters.  Every enum above\nshould have a corresponding value below (verified by types_test).',
    title: 'LINT.IfChange',
  })
  .openapi('TensorflowDataType')

const TensorflowResourceHandleProtoSchema: z.ZodType<TensorflowResourceHandleProtoType> = z
  .object({
    container: z
      .string()
      .exactOptional()
      .openapi({ description: 'Container in which this resource is placed.' }),
    device: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique name for the device containing the resource.' }),
    hash_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Hash code for the type of the resource. Is only valid in the same device\nand in the same execution.',
      }),
    maybe_type_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For debug-only, the name of the type pointed to by this handle, if\navailable.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Unique name of this resource.' }),
  })
  .openapi({
    description:
      'Protocol buffer representing a handle to a tensorflow resource. Handles are\nnot valid across executions, but can be serialized back and forth from within\na single run.',
    required: [],
  })
  .openapi('TensorflowResourceHandleProto')

const TensorShapeProtoDimSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional name of the tensor dimension.' }),
    size: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Size of the tensor in that dimension.\nThis value must be >= -1, but values of -1 are reserved for "unknown"\nshapes (values of -1 mean "unknown" dimension).  Certain wrappers\nthat work with TensorShapeProto may fail at runtime when deserializing\na TensorShapeProto containing a dim value of -1.',
      }),
  })
  .openapi({ description: 'One dimension of the tensor.', required: [] })
  .openapi('TensorShapeProtoDim')

type TensorflowTensorShapeProtoType = {
  dim?: z.infer<typeof TensorShapeProtoDimSchema>[]
  unknown_rank?: boolean
}

const TensorflowTensorShapeProtoSchema: z.ZodType<TensorflowTensorShapeProtoType> = z
  .object({
    dim: z
      .array(TensorShapeProtoDimSchema)
      .exactOptional()
      .openapi({
        description:
          'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
      }),
    unknown_rank: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
      }),
  })
  .openapi({ description: 'Dimensions of a tensor.', required: [] })
  .openapi('TensorflowTensorShapeProto')

const TensorflowVariantTensorDataProtoSchema: z.ZodType<TensorflowVariantTensorDataProtoType> = z
  .lazy(() =>
    z
      .object({
        metadata: z
          .string()
          .exactOptional()
          .openapi({ description: 'Portions of the object that are not Tensors.' }),
        tensors: z
          .array(TensorflowTensorProtoSchema)
          .exactOptional()
          .openapi({ description: 'Tensors contained within objects being serialized.' }),
        type_name: z
          .string()
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
      .object({
        bool_val: z.array(z.boolean()).exactOptional().openapi({ title: 'DT_BOOL' }),
        dcomplex_val: z
          .array(z.float64())
          .exactOptional()
          .openapi({
            description:
              'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
          }),
        double_val: z.array(z.float64()).exactOptional().openapi({ description: 'DT_DOUBLE.' }),
        dtype: TensorflowDataTypeSchema.exactOptional(),
        float_val: z.array(z.float32()).exactOptional().openapi({ description: 'DT_FLOAT.' }),
        half_val: z
          .array(z.int32())
          .exactOptional()
          .openapi({
            description:
              "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
          }),
        int64_val: z.array(z.string()).exactOptional().openapi({ title: 'DT_INT64' }),
        int_val: z
          .array(z.int32())
          .exactOptional()
          .openapi({ description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.' }),
        resource_handle_val: z
          .array(TensorflowResourceHandleProtoSchema)
          .exactOptional()
          .openapi({ title: 'DT_RESOURCE' }),
        scomplex_val: z
          .array(z.float32())
          .exactOptional()
          .openapi({
            description:
              'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
          }),
        string_val: z.array(z.string()).exactOptional().openapi({ title: 'DT_STRING' }),
        tensor_content: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
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
          .exactOptional()
          .openapi({ title: 'DT_UINT32' }),
        uint64_val: z.array(z.string()).exactOptional().openapi({ title: 'DT_UINT64' }),
        variant_val: z
          .array(TensorflowVariantTensorDataProtoSchema)
          .exactOptional()
          .openapi({ title: 'DT_VARIANT' }),
        version_number: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
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
  .object({
    shape: z.array(z.int32()).exactOptional(),
    values: z.array(z.float64()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Tensor')

const DefaultDataSchema = z
  .object({
    names: z.array(z.string()).exactOptional(),
    ndarry: z.array(AnyValueSchema).exactOptional(),
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
  .object({
    key: z.string().exactOptional(),
    type: MetricTypeSchema.exactOptional(),
    value: z.float32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Metric')

const MetaSchema = z
  .object({
    metrics: z.array(MetricSchema).exactOptional(),
    puid: z.string().exactOptional(),
    requestPath: z
      .record(z.string(), z.string())
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
  .object({
    code: z.int32().exactOptional(),
    info: z.string().exactOptional(),
    reason: z.string().exactOptional(),
    status: StatusStatusFlagSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Status')

const SeldonMessageSchema = z
  .object({
    binData: z.string().exactOptional(),
    data: DefaultDataSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    status: StatusSchema.exactOptional(),
    strData: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SeldonMessage')

const FeedbackSchema = z
  .object({
    request: SeldonMessageSchema.exactOptional(),
    response: SeldonMessageSchema.exactOptional(),
    reward: z.float32().exactOptional(),
    truth: SeldonMessageSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Feedback')

const SeldonMessageListSchema = z
  .object({ seldonMessages: z.array(SeldonMessageSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('SeldonMessageList')

export const getAggregateRoute = createRoute({
  method: 'get',
  path: '/aggregate',
  tags: ['Internal'],
  operationId: 'Aggregate',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([['seldonMessages', ['body']]])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          body: z
            .object({
              seldonMessages: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        binData: z.string().exactOptional(),
                        data: z
                          .object({
                            names: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(z.string()),
                              )
                              .exactOptional(),
                            ndarry: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(
                                  ((schema) =>
                                    z.union([
                                      schema,
                                      z.preprocess((val) => (val === 'null' ? null : val), schema),
                                    ]))(AnyValueSchema),
                                ),
                              )
                              .exactOptional(),
                            tensor: z
                              .object({
                                shape: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z.preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.int32(),
                                      ),
                                    ),
                                  )
                                  .exactOptional(),
                                values: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z.preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float64(),
                                      ),
                                    ),
                                  )
                                  .exactOptional(),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                            tftensor: z
                              .object({
                                bool_val: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z.preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      ),
                                    ),
                                  )
                                  .exactOptional()
                                  .openapi({ title: 'DT_BOOL' }),
                                dcomplex_val: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z.preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float64(),
                                      ),
                                    ),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                                  }),
                                double_val: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z.preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float64(),
                                      ),
                                    ),
                                  )
                                  .exactOptional()
                                  .openapi({ description: 'DT_DOUBLE.' }),
                                dtype: TensorflowDataTypeSchema.exactOptional(),
                                float_val: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z.preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float32(),
                                      ),
                                    ),
                                  )
                                  .exactOptional()
                                  .openapi({ description: 'DT_FLOAT.' }),
                                half_val: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z.preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.int32(),
                                      ),
                                    ),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                                  }),
                                int64_val: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(z.string()),
                                  )
                                  .exactOptional()
                                  .openapi({ title: 'DT_INT64' }),
                                int_val: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z.preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.int32(),
                                      ),
                                    ),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.',
                                  }),
                                resource_handle_val: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(TensorflowResourceHandleProtoSchema),
                                  )
                                  .exactOptional()
                                  .openapi({ title: 'DT_RESOURCE' }),
                                scomplex_val: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z.preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float32(),
                                      ),
                                    ),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                                  }),
                                string_val: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(z.string()),
                                  )
                                  .exactOptional()
                                  .openapi({ title: 'DT_STRING' }),
                                tensor_content: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                                  }),
                                tensor_shape: z
                                  .object({
                                    dim: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(TensorShapeProtoDimSchema),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                      }),
                                    unknown_rank: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description: 'Dimensions of a tensor.',
                                    required: [],
                                  }),
                                uint32_val: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .preprocess((val) => {
                                          if (
                                            typeof val !== 'string' ||
                                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                          )
                                            return val
                                          if (/^-?\d+$/.test(val)) return BigInt(val)
                                          const num = Number(val)
                                          return Number.isSafeInteger(num) ? BigInt(num) : val
                                        }, z.int64())
                                        .openapi({ type: 'integer', format: 'int64' }),
                                    ),
                                  )
                                  .exactOptional()
                                  .openapi({ title: 'DT_UINT32' }),
                                uint64_val: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(z.string()),
                                  )
                                  .exactOptional()
                                  .openapi({ title: 'DT_UINT64' }),
                                variant_val: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          metadata: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Portions of the object that are not Tensors.',
                                            }),
                                          tensors: z
                                            .preprocess(
                                              (val) =>
                                                val === undefined || Array.isArray(val)
                                                  ? val
                                                  : [val],
                                              z.array(TensorflowTensorProtoSchema),
                                            )
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Tensors contained within objects being serialized.',
                                            }),
                                          type_name: z
                                            .string()
                                            .exactOptional()
                                            .openapi({
                                              description:
                                                'Name of the type of objects being serialized.',
                                            }),
                                        })
                                        .openapi({
                                          description:
                                            'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                          required: [],
                                        }),
                                    ),
                                  )
                                  .exactOptional()
                                  .openapi({ title: 'DT_VARIANT' }),
                                version_number: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int32(),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                                  }),
                              })
                              .exactOptional()
                              .openapi({
                                description: 'Protocol buffer representing a tensor.',
                                required: [],
                              }),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                        meta: z
                          .object({
                            metrics: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(
                                  z
                                    .object({
                                      key: z.string().exactOptional(),
                                      type: MetricTypeSchema.exactOptional(),
                                      value: z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.float32(),
                                        )
                                        .exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                ),
                              )
                              .exactOptional(),
                            puid: z.string().exactOptional(),
                            requestPath: z
                              .record(z.string(), z.string())
                              .exactOptional()
                              .openapi({ example: { classifier: 'seldonio/mock_classifier:1.0' } }),
                            routing: z
                              .record(
                                z.string(),
                                z.preprocess(
                                  (val) =>
                                    typeof val === 'string' &&
                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                      ? Number(val)
                                      : val,
                                  z.int32(),
                                ),
                              )
                              .exactOptional()
                              .openapi({ example: { router1: 1 } }),
                            tags: z
                              .record(
                                z.string(),
                                ((schema) =>
                                  z.union([
                                    schema,
                                    z.preprocess((val) => (val === 'null' ? null : val), schema),
                                  ]))(AnyValueSchema),
                              )
                              .exactOptional()
                              .openapi({ example: { mytag: 'myvalue' } }),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                        status: z
                          .object({
                            code: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional(),
                            info: z.string().exactOptional(),
                            reason: z.string().exactOptional(),
                            status: StatusStatusFlagSchema.exactOptional(),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                        strData: z.string().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({
              param: {
                in: 'query',
                name: 'body',
                required: true,
                schema: {
                  properties: {
                    seldonMessages: {
                      items: {
                        properties: {
                          binData: { format: 'byte', type: 'string' },
                          data: {
                            properties: {
                              names: { items: { type: 'string' }, type: 'array' },
                              ndarry: {
                                items: { $ref: '#/components/schemas/AnyValue' },
                                type: 'array',
                              },
                              tensor: {
                                properties: {
                                  shape: {
                                    items: { format: 'int32', type: 'integer' },
                                    type: 'array',
                                  },
                                  values: {
                                    items: { format: 'double', type: 'number' },
                                    type: 'array',
                                  },
                                },
                                type: 'object',
                              },
                              tftensor: {
                                description: 'Protocol buffer representing a tensor.',
                                properties: {
                                  bool_val: {
                                    items: { format: 'boolean', type: 'boolean' },
                                    title: 'DT_BOOL',
                                    type: 'array',
                                  },
                                  dcomplex_val: {
                                    description:
                                      'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                                    items: { format: 'double', type: 'number' },
                                    type: 'array',
                                  },
                                  double_val: {
                                    description: 'DT_DOUBLE.',
                                    items: { format: 'double', type: 'number' },
                                    type: 'array',
                                  },
                                  dtype: { $ref: '#/components/schemas/TensorflowDataType' },
                                  float_val: {
                                    description: 'DT_FLOAT.',
                                    items: { format: 'float', type: 'number' },
                                    type: 'array',
                                  },
                                  half_val: {
                                    description:
                                      "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                                    items: { format: 'int32', type: 'integer' },
                                    type: 'array',
                                  },
                                  int64_val: {
                                    items: { format: 'int64', type: 'string' },
                                    title: 'DT_INT64',
                                    type: 'array',
                                  },
                                  int_val: {
                                    description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.',
                                    items: { format: 'int32', type: 'integer' },
                                    type: 'array',
                                  },
                                  resource_handle_val: {
                                    items: {
                                      $ref: '#/components/schemas/TensorflowResourceHandleProto',
                                    },
                                    title: 'DT_RESOURCE',
                                    type: 'array',
                                  },
                                  scomplex_val: {
                                    description:
                                      'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                                    items: { format: 'float', type: 'number' },
                                    type: 'array',
                                  },
                                  string_val: {
                                    items: { format: 'byte', type: 'string' },
                                    title: 'DT_STRING',
                                    type: 'array',
                                  },
                                  tensor_content: {
                                    description:
                                      'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                                    format: 'byte',
                                    type: 'string',
                                  },
                                  tensor_shape: {
                                    description: 'Dimensions of a tensor.',
                                    properties: {
                                      dim: {
                                        description:
                                          'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                        items: { $ref: '#/components/schemas/TensorShapeProtoDim' },
                                        type: 'array',
                                      },
                                      unknown_rank: {
                                        description:
                                          'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                        format: 'boolean',
                                        type: 'boolean',
                                      },
                                    },
                                    type: 'object',
                                  },
                                  uint32_val: {
                                    items: { format: 'int64', type: 'integer' },
                                    title: 'DT_UINT32',
                                    type: 'array',
                                  },
                                  uint64_val: {
                                    items: { format: 'uint64', type: 'string' },
                                    title: 'DT_UINT64',
                                    type: 'array',
                                  },
                                  variant_val: {
                                    items: {
                                      description:
                                        'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                      properties: {
                                        metadata: {
                                          description:
                                            'Portions of the object that are not Tensors.',
                                          format: 'byte',
                                          type: 'string',
                                        },
                                        tensors: {
                                          description:
                                            'Tensors contained within objects being serialized.',
                                          items: {
                                            $ref: '#/components/schemas/TensorflowTensorProto',
                                          },
                                          type: 'array',
                                        },
                                        type_name: {
                                          description:
                                            'Name of the type of objects being serialized.',
                                          type: 'string',
                                        },
                                      },
                                      type: 'object',
                                    },
                                    title: 'DT_VARIANT',
                                    type: 'array',
                                  },
                                  version_number: {
                                    description:
                                      'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                                    format: 'int32',
                                    type: 'integer',
                                  },
                                },
                                type: 'object',
                              },
                            },
                            type: 'object',
                          },
                          meta: {
                            properties: {
                              metrics: {
                                items: {
                                  properties: {
                                    key: { type: 'string' },
                                    type: { $ref: '#/components/schemas/MetricType' },
                                    value: { format: 'float', type: 'number' },
                                  },
                                  type: 'object',
                                },
                                type: 'array',
                              },
                              puid: { type: 'string' },
                              requestPath: {
                                additionalProperties: { type: 'string' },
                                example: { classifier: 'seldonio/mock_classifier:1.0' },
                                type: 'object',
                              },
                              routing: {
                                additionalProperties: { format: 'int32', type: 'integer' },
                                example: { router1: 1 },
                                type: 'object',
                              },
                              tags: {
                                additionalProperties: { $ref: '#/components/schemas/AnyValue' },
                                example: { mytag: 'myvalue' },
                                type: 'object',
                              },
                            },
                            type: 'object',
                          },
                          status: {
                            properties: {
                              code: { format: 'int32', type: 'integer' },
                              info: { type: 'string' },
                              reason: { type: 'string' },
                              status: { $ref: '#/components/schemas/StatusStatusFlag' },
                            },
                            type: 'object',
                          },
                          strData: { type: 'string' },
                        },
                        type: 'object',
                      },
                      type: 'array',
                    },
                  },
                  type: 'object',
                },
              },
              required: [],
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'A successful response.',
      content: { 'application/json': { schema: SeldonMessageSchema } },
    },
  },
})

export const postAggregateRoute = createRoute({
  method: 'post',
  path: '/aggregate',
  tags: ['Internal'],
  operationId: 'Aggregate2',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              json: z
                .object({
                  seldonMessages: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        z
                          .object({
                            binData: z.string().exactOptional(),
                            data: z
                              .object({
                                names: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(z.string()),
                                  )
                                  .exactOptional(),
                                ndarry: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      ((schema) =>
                                        z.union([
                                          schema,
                                          z.preprocess(
                                            (val) => (val === 'null' ? null : val),
                                            schema,
                                          ),
                                        ]))(AnyValueSchema),
                                    ),
                                  )
                                  .exactOptional(),
                                tensor: z
                                  .object({
                                    shape: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(
                                          z.preprocess(
                                            (val) =>
                                              typeof val === 'string' &&
                                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                              (!/^-?\d+$/.test(val) ||
                                                Number.isSafeInteger(Number(val)))
                                                ? Number(val)
                                                : val,
                                            z.int32(),
                                          ),
                                        ),
                                      )
                                      .exactOptional(),
                                    values: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(
                                          z.preprocess(
                                            (val) =>
                                              typeof val === 'string' &&
                                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                              (!/^-?\d+$/.test(val) ||
                                                Number.isSafeInteger(Number(val)))
                                                ? Number(val)
                                                : val,
                                            z.float64(),
                                          ),
                                        ),
                                      )
                                      .exactOptional(),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                                tftensor: z
                                  .object({
                                    bool_val: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(
                                          z.preprocess(
                                            ((read) => (val: unknown) => {
                                              const result = read.safeParse(val)
                                              return result.success ? result.data : val
                                            })(z.stringbool()),
                                            z.boolean(),
                                          ),
                                        ),
                                      )
                                      .exactOptional()
                                      .openapi({ title: 'DT_BOOL' }),
                                    dcomplex_val: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(
                                          z.preprocess(
                                            (val) =>
                                              typeof val === 'string' &&
                                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                              (!/^-?\d+$/.test(val) ||
                                                Number.isSafeInteger(Number(val)))
                                                ? Number(val)
                                                : val,
                                            z.float64(),
                                          ),
                                        ),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                                      }),
                                    double_val: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(
                                          z.preprocess(
                                            (val) =>
                                              typeof val === 'string' &&
                                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                              (!/^-?\d+$/.test(val) ||
                                                Number.isSafeInteger(Number(val)))
                                                ? Number(val)
                                                : val,
                                            z.float64(),
                                          ),
                                        ),
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'DT_DOUBLE.' }),
                                    dtype: TensorflowDataTypeSchema.exactOptional(),
                                    float_val: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(
                                          z.preprocess(
                                            (val) =>
                                              typeof val === 'string' &&
                                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                              (!/^-?\d+$/.test(val) ||
                                                Number.isSafeInteger(Number(val)))
                                                ? Number(val)
                                                : val,
                                            z.float32(),
                                          ),
                                        ),
                                      )
                                      .exactOptional()
                                      .openapi({ description: 'DT_FLOAT.' }),
                                    half_val: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(
                                          z.preprocess(
                                            (val) =>
                                              typeof val === 'string' &&
                                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                              (!/^-?\d+$/.test(val) ||
                                                Number.isSafeInteger(Number(val)))
                                                ? Number(val)
                                                : val,
                                            z.int32(),
                                          ),
                                        ),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                                      }),
                                    int64_val: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(z.string()),
                                      )
                                      .exactOptional()
                                      .openapi({ title: 'DT_INT64' }),
                                    int_val: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(
                                          z.preprocess(
                                            (val) =>
                                              typeof val === 'string' &&
                                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                              (!/^-?\d+$/.test(val) ||
                                                Number.isSafeInteger(Number(val)))
                                                ? Number(val)
                                                : val,
                                            z.int32(),
                                          ),
                                        ),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.',
                                      }),
                                    resource_handle_val: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(TensorflowResourceHandleProtoSchema),
                                      )
                                      .exactOptional()
                                      .openapi({ title: 'DT_RESOURCE' }),
                                    scomplex_val: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(
                                          z.preprocess(
                                            (val) =>
                                              typeof val === 'string' &&
                                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                              (!/^-?\d+$/.test(val) ||
                                                Number.isSafeInteger(Number(val)))
                                                ? Number(val)
                                                : val,
                                            z.float32(),
                                          ),
                                        ),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                                      }),
                                    string_val: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(z.string()),
                                      )
                                      .exactOptional()
                                      .openapi({ title: 'DT_STRING' }),
                                    tensor_content: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                                      }),
                                    tensor_shape: z
                                      .object({
                                        dim: z
                                          .preprocess(
                                            (val) =>
                                              val === undefined || Array.isArray(val) ? val : [val],
                                            z.array(TensorShapeProtoDimSchema),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                          }),
                                        unknown_rank: z
                                          .preprocess(
                                            ((read) => (val: unknown) => {
                                              const result = read.safeParse(val)
                                              return result.success ? result.data : val
                                            })(z.stringbool()),
                                            z.boolean(),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                          }),
                                      })
                                      .exactOptional()
                                      .openapi({
                                        description: 'Dimensions of a tensor.',
                                        required: [],
                                      }),
                                    uint32_val: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(
                                          z
                                            .preprocess((val) => {
                                              if (
                                                typeof val !== 'string' ||
                                                !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                              )
                                                return val
                                              if (/^-?\d+$/.test(val)) return BigInt(val)
                                              const num = Number(val)
                                              return Number.isSafeInteger(num) ? BigInt(num) : val
                                            }, z.int64())
                                            .openapi({ type: 'integer', format: 'int64' }),
                                        ),
                                      )
                                      .exactOptional()
                                      .openapi({ title: 'DT_UINT32' }),
                                    uint64_val: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(z.string()),
                                      )
                                      .exactOptional()
                                      .openapi({ title: 'DT_UINT64' }),
                                    variant_val: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(
                                          z
                                            .object({
                                              metadata: z
                                                .string()
                                                .exactOptional()
                                                .openapi({
                                                  description:
                                                    'Portions of the object that are not Tensors.',
                                                }),
                                              tensors: z
                                                .preprocess(
                                                  (val) =>
                                                    val === undefined || Array.isArray(val)
                                                      ? val
                                                      : [val],
                                                  z.array(TensorflowTensorProtoSchema),
                                                )
                                                .exactOptional()
                                                .openapi({
                                                  description:
                                                    'Tensors contained within objects being serialized.',
                                                }),
                                              type_name: z
                                                .string()
                                                .exactOptional()
                                                .openapi({
                                                  description:
                                                    'Name of the type of objects being serialized.',
                                                }),
                                            })
                                            .openapi({
                                              description:
                                                'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                              required: [],
                                            }),
                                        ),
                                      )
                                      .exactOptional()
                                      .openapi({ title: 'DT_VARIANT' }),
                                    version_number: z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.int32(),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({
                                    description: 'Protocol buffer representing a tensor.',
                                    required: [],
                                  }),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                            meta: z
                              .object({
                                metrics: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          key: z.string().exactOptional(),
                                          type: MetricTypeSchema.exactOptional(),
                                          value: z
                                            .preprocess(
                                              (val) =>
                                                typeof val === 'string' &&
                                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                  val,
                                                ) &&
                                                (!/^-?\d+$/.test(val) ||
                                                  Number.isSafeInteger(Number(val)))
                                                  ? Number(val)
                                                  : val,
                                              z.float32(),
                                            )
                                            .exactOptional(),
                                        })
                                        .openapi({ required: [] }),
                                    ),
                                  )
                                  .exactOptional(),
                                puid: z.string().exactOptional(),
                                requestPath: z
                                  .record(z.string(), z.string())
                                  .exactOptional()
                                  .openapi({
                                    example: { classifier: 'seldonio/mock_classifier:1.0' },
                                  }),
                                routing: z
                                  .record(
                                    z.string(),
                                    z.preprocess(
                                      (val) =>
                                        typeof val === 'string' &&
                                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                          ? Number(val)
                                          : val,
                                      z.int32(),
                                    ),
                                  )
                                  .exactOptional()
                                  .openapi({ example: { router1: 1 } }),
                                tags: z
                                  .record(
                                    z.string(),
                                    ((schema) =>
                                      z.union([
                                        schema,
                                        z.preprocess(
                                          (val) => (val === 'null' ? null : val),
                                          schema,
                                        ),
                                      ]))(AnyValueSchema),
                                  )
                                  .exactOptional()
                                  .openapi({ example: { mytag: 'myvalue' } }),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                            status: z
                              .object({
                                code: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int32(),
                                  )
                                  .exactOptional(),
                                info: z.string().exactOptional(),
                                reason: z.string().exactOptional(),
                                status: StatusStatusFlagSchema.exactOptional(),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                            strData: z.string().exactOptional(),
                          })
                          .openapi({ required: [] }),
                      ),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          encoding: { json: { contentType: 'application/json' } },
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
})

export const getPredictRoute = createRoute({
  method: 'get',
  path: '/predict',
  tags: ['Internal'],
  operationId: 'TransformInput4',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['binData', ['json']],
          ['data', ['json']],
          ['meta', ['json']],
          ['status', ['json']],
          ['strData', ['json']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          json: z
            .object({
              binData: z.string().exactOptional(),
              data: z
                .object({
                  names: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string()),
                    )
                    .exactOptional(),
                  ndarry: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        ((schema) =>
                          z.union([
                            schema,
                            z.preprocess((val) => (val === 'null' ? null : val), schema),
                          ]))(AnyValueSchema),
                      ),
                    )
                    .exactOptional(),
                  tensor: z
                    .object({
                      shape: z
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
                              z.int32(),
                            ),
                          ),
                        )
                        .exactOptional(),
                      values: z
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
                              z.float64(),
                            ),
                          ),
                        )
                        .exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  tftensor: z
                    .object({
                      bool_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z.preprocess(
                              ((read) => (val: unknown) => {
                                const result = read.safeParse(val)
                                return result.success ? result.data : val
                              })(z.stringbool()),
                              z.boolean(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_BOOL' }),
                      dcomplex_val: z
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
                              z.float64(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                        }),
                      double_val: z
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
                              z.float64(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({ description: 'DT_DOUBLE.' }),
                      dtype: TensorflowDataTypeSchema.exactOptional(),
                      float_val: z
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
                              z.float32(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({ description: 'DT_FLOAT.' }),
                      half_val: z
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
                              z.int32(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                        }),
                      int64_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_INT64' }),
                      int_val: z
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
                              z.int32(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({ description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.' }),
                      resource_handle_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(TensorflowResourceHandleProtoSchema),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_RESOURCE' }),
                      scomplex_val: z
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
                              z.float32(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                        }),
                      string_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_STRING' }),
                      tensor_content: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                        }),
                      tensor_shape: z
                        .object({
                          dim: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(TensorShapeProtoDimSchema),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                            }),
                          unknown_rank: z
                            .preprocess(
                              ((read) => (val: unknown) => {
                                const result = read.safeParse(val)
                                return result.success ? result.data : val
                              })(z.stringbool()),
                              z.boolean(),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                            }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Dimensions of a tensor.', required: [] }),
                      uint32_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.int64())
                              .openapi({ type: 'integer', format: 'int64' }),
                          ),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_UINT32' }),
                      uint64_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_UINT64' }),
                      variant_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                metadata: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: 'Portions of the object that are not Tensors.',
                                  }),
                                tensors: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(TensorflowTensorProtoSchema),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Tensors contained within objects being serialized.',
                                  }),
                                type_name: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: 'Name of the type of objects being serialized.',
                                  }),
                              })
                              .openapi({
                                description:
                                  'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                required: [],
                              }),
                          ),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_VARIANT' }),
                      version_number: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Protocol buffer representing a tensor.',
                      required: [],
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              meta: z
                .object({
                  metrics: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        z
                          .object({
                            key: z.string().exactOptional(),
                            type: MetricTypeSchema.exactOptional(),
                            value: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.float32(),
                              )
                              .exactOptional(),
                          })
                          .openapi({ required: [] }),
                      ),
                    )
                    .exactOptional(),
                  puid: z.string().exactOptional(),
                  requestPath: z
                    .record(z.string(), z.string())
                    .exactOptional()
                    .openapi({ example: { classifier: 'seldonio/mock_classifier:1.0' } }),
                  routing: z
                    .record(
                      z.string(),
                      z.preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.int32(),
                      ),
                    )
                    .exactOptional()
                    .openapi({ example: { router1: 1 } }),
                  tags: z
                    .record(
                      z.string(),
                      ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(AnyValueSchema),
                    )
                    .exactOptional()
                    .openapi({ example: { mytag: 'myvalue' } }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              status: z
                .object({
                  code: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                  info: z.string().exactOptional(),
                  reason: z.string().exactOptional(),
                  status: StatusStatusFlagSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              strData: z.string().exactOptional(),
            })
            .openapi({
              param: {
                example: {
                  json: '{"data":{"names" : ["feature1"],"tensor" : {"shape": [1,1],"values": [1]}}}',
                },
                in: 'query',
                name: 'json',
                required: true,
                schema: {
                  properties: {
                    binData: { format: 'byte', type: 'string' },
                    data: {
                      properties: {
                        names: { items: { type: 'string' }, type: 'array' },
                        ndarry: { items: { $ref: '#/components/schemas/AnyValue' }, type: 'array' },
                        tensor: {
                          properties: {
                            shape: { items: { format: 'int32', type: 'integer' }, type: 'array' },
                            values: { items: { format: 'double', type: 'number' }, type: 'array' },
                          },
                          type: 'object',
                        },
                        tftensor: {
                          description: 'Protocol buffer representing a tensor.',
                          properties: {
                            bool_val: {
                              items: { format: 'boolean', type: 'boolean' },
                              title: 'DT_BOOL',
                              type: 'array',
                            },
                            dcomplex_val: {
                              description:
                                'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                              items: { format: 'double', type: 'number' },
                              type: 'array',
                            },
                            double_val: {
                              description: 'DT_DOUBLE.',
                              items: { format: 'double', type: 'number' },
                              type: 'array',
                            },
                            dtype: { $ref: '#/components/schemas/TensorflowDataType' },
                            float_val: {
                              description: 'DT_FLOAT.',
                              items: { format: 'float', type: 'number' },
                              type: 'array',
                            },
                            half_val: {
                              description:
                                "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                              items: { format: 'int32', type: 'integer' },
                              type: 'array',
                            },
                            int64_val: {
                              items: { format: 'int64', type: 'string' },
                              title: 'DT_INT64',
                              type: 'array',
                            },
                            int_val: {
                              description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.',
                              items: { format: 'int32', type: 'integer' },
                              type: 'array',
                            },
                            resource_handle_val: {
                              items: { $ref: '#/components/schemas/TensorflowResourceHandleProto' },
                              title: 'DT_RESOURCE',
                              type: 'array',
                            },
                            scomplex_val: {
                              description:
                                'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                              items: { format: 'float', type: 'number' },
                              type: 'array',
                            },
                            string_val: {
                              items: { format: 'byte', type: 'string' },
                              title: 'DT_STRING',
                              type: 'array',
                            },
                            tensor_content: {
                              description:
                                'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                              format: 'byte',
                              type: 'string',
                            },
                            tensor_shape: {
                              description: 'Dimensions of a tensor.',
                              properties: {
                                dim: {
                                  description:
                                    'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                  items: { $ref: '#/components/schemas/TensorShapeProtoDim' },
                                  type: 'array',
                                },
                                unknown_rank: {
                                  description:
                                    'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                  format: 'boolean',
                                  type: 'boolean',
                                },
                              },
                              type: 'object',
                            },
                            uint32_val: {
                              items: { format: 'int64', type: 'integer' },
                              title: 'DT_UINT32',
                              type: 'array',
                            },
                            uint64_val: {
                              items: { format: 'uint64', type: 'string' },
                              title: 'DT_UINT64',
                              type: 'array',
                            },
                            variant_val: {
                              items: {
                                description:
                                  'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                properties: {
                                  metadata: {
                                    description: 'Portions of the object that are not Tensors.',
                                    format: 'byte',
                                    type: 'string',
                                  },
                                  tensors: {
                                    description:
                                      'Tensors contained within objects being serialized.',
                                    items: { $ref: '#/components/schemas/TensorflowTensorProto' },
                                    type: 'array',
                                  },
                                  type_name: {
                                    description: 'Name of the type of objects being serialized.',
                                    type: 'string',
                                  },
                                },
                                type: 'object',
                              },
                              title: 'DT_VARIANT',
                              type: 'array',
                            },
                            version_number: {
                              description:
                                'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                              format: 'int32',
                              type: 'integer',
                            },
                          },
                          type: 'object',
                        },
                      },
                      type: 'object',
                    },
                    meta: {
                      properties: {
                        metrics: {
                          items: {
                            properties: {
                              key: { type: 'string' },
                              type: { $ref: '#/components/schemas/MetricType' },
                              value: { format: 'float', type: 'number' },
                            },
                            type: 'object',
                          },
                          type: 'array',
                        },
                        puid: { type: 'string' },
                        requestPath: {
                          additionalProperties: { type: 'string' },
                          example: { classifier: 'seldonio/mock_classifier:1.0' },
                          type: 'object',
                        },
                        routing: {
                          additionalProperties: { format: 'int32', type: 'integer' },
                          example: { router1: 1 },
                          type: 'object',
                        },
                        tags: {
                          additionalProperties: { $ref: '#/components/schemas/AnyValue' },
                          example: { mytag: 'myvalue' },
                          type: 'object',
                        },
                      },
                      type: 'object',
                    },
                    status: {
                      properties: {
                        code: { format: 'int32', type: 'integer' },
                        info: { type: 'string' },
                        reason: { type: 'string' },
                        status: { $ref: '#/components/schemas/StatusStatusFlag' },
                      },
                      type: 'object',
                    },
                    strData: { type: 'string' },
                  },
                  type: 'object',
                },
              },
              required: [],
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'A successful response.',
      content: { 'application/json': { schema: SeldonMessageSchema } },
    },
  },
})

export const postPredictRoute = createRoute({
  method: 'post',
  path: '/predict',
  tags: ['Internal'],
  operationId: 'TransformInput3',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              json: z
                .object({
                  binData: z.string().exactOptional(),
                  data: z
                    .object({
                      names: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional(),
                      ndarry: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            ((schema) =>
                              z.union([
                                schema,
                                z.preprocess((val) => (val === 'null' ? null : val), schema),
                              ]))(AnyValueSchema),
                          ),
                        )
                        .exactOptional(),
                      tensor: z
                        .object({
                          shape: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional(),
                          values: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      tftensor: z
                        .object({
                          bool_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z.preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_BOOL' }),
                          dcomplex_val: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                            }),
                          double_val: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_DOUBLE.' }),
                          dtype: TensorflowDataTypeSchema.exactOptional(),
                          float_val: z
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
                                  z.float32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_FLOAT.' }),
                          half_val: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                            }),
                          int64_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_INT64' }),
                          int_val: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.' }),
                          resource_handle_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(TensorflowResourceHandleProtoSchema),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_RESOURCE' }),
                          scomplex_val: z
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
                                  z.float32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                            }),
                          string_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_STRING' }),
                          tensor_content: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                            }),
                          tensor_shape: z
                            .object({
                              dim: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(TensorShapeProtoDimSchema),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                }),
                              unknown_rank: z
                                .preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                }),
                            })
                            .exactOptional()
                            .openapi({ description: 'Dimensions of a tensor.', required: [] }),
                          uint32_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .openapi({ type: 'integer', format: 'int64' }),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_UINT32' }),
                          uint64_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_UINT64' }),
                          variant_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z
                                  .object({
                                    metadata: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description: 'Portions of the object that are not Tensors.',
                                      }),
                                    tensors: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(TensorflowTensorProtoSchema),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Tensors contained within objects being serialized.',
                                      }),
                                    type_name: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Name of the type of objects being serialized.',
                                      }),
                                  })
                                  .openapi({
                                    description:
                                      'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                    required: [],
                                  }),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_VARIANT' }),
                          version_number: z
                            .preprocess(
                              (val) =>
                                typeof val === 'string' &&
                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                  ? Number(val)
                                  : val,
                              z.int32(),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Protocol buffer representing a tensor.',
                          required: [],
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  meta: z
                    .object({
                      metrics: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                key: z.string().exactOptional(),
                                type: MetricTypeSchema.exactOptional(),
                                value: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float32(),
                                  )
                                  .exactOptional(),
                              })
                              .openapi({ required: [] }),
                          ),
                        )
                        .exactOptional(),
                      puid: z.string().exactOptional(),
                      requestPath: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ example: { classifier: 'seldonio/mock_classifier:1.0' } }),
                      routing: z
                        .record(
                          z.string(),
                          z.preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          ),
                        )
                        .exactOptional()
                        .openapi({ example: { router1: 1 } }),
                      tags: z
                        .record(
                          z.string(),
                          ((schema) =>
                            z.union([
                              schema,
                              z.preprocess((val) => (val === 'null' ? null : val), schema),
                            ]))(AnyValueSchema),
                        )
                        .exactOptional()
                        .openapi({ example: { mytag: 'myvalue' } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  status: z
                    .object({
                      code: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .exactOptional(),
                      info: z.string().exactOptional(),
                      reason: z.string().exactOptional(),
                      status: StatusStatusFlagSchema.exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  strData: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          encoding: { json: { contentType: 'application/json' } },
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
})

export const getRouteRoute = createRoute({
  method: 'get',
  path: '/route',
  tags: ['Internal'],
  operationId: 'Route2',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['binData', ['json']],
          ['data', ['json']],
          ['meta', ['json']],
          ['status', ['json']],
          ['strData', ['json']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          json: z
            .object({
              binData: z.string().exactOptional(),
              data: z
                .object({
                  names: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string()),
                    )
                    .exactOptional(),
                  ndarry: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        ((schema) =>
                          z.union([
                            schema,
                            z.preprocess((val) => (val === 'null' ? null : val), schema),
                          ]))(AnyValueSchema),
                      ),
                    )
                    .exactOptional(),
                  tensor: z
                    .object({
                      shape: z
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
                              z.int32(),
                            ),
                          ),
                        )
                        .exactOptional(),
                      values: z
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
                              z.float64(),
                            ),
                          ),
                        )
                        .exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  tftensor: z
                    .object({
                      bool_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z.preprocess(
                              ((read) => (val: unknown) => {
                                const result = read.safeParse(val)
                                return result.success ? result.data : val
                              })(z.stringbool()),
                              z.boolean(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_BOOL' }),
                      dcomplex_val: z
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
                              z.float64(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                        }),
                      double_val: z
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
                              z.float64(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({ description: 'DT_DOUBLE.' }),
                      dtype: TensorflowDataTypeSchema.exactOptional(),
                      float_val: z
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
                              z.float32(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({ description: 'DT_FLOAT.' }),
                      half_val: z
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
                              z.int32(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                        }),
                      int64_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_INT64' }),
                      int_val: z
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
                              z.int32(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({ description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.' }),
                      resource_handle_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(TensorflowResourceHandleProtoSchema),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_RESOURCE' }),
                      scomplex_val: z
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
                              z.float32(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                        }),
                      string_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_STRING' }),
                      tensor_content: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                        }),
                      tensor_shape: z
                        .object({
                          dim: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(TensorShapeProtoDimSchema),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                            }),
                          unknown_rank: z
                            .preprocess(
                              ((read) => (val: unknown) => {
                                const result = read.safeParse(val)
                                return result.success ? result.data : val
                              })(z.stringbool()),
                              z.boolean(),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                            }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Dimensions of a tensor.', required: [] }),
                      uint32_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.int64())
                              .openapi({ type: 'integer', format: 'int64' }),
                          ),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_UINT32' }),
                      uint64_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_UINT64' }),
                      variant_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                metadata: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: 'Portions of the object that are not Tensors.',
                                  }),
                                tensors: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(TensorflowTensorProtoSchema),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Tensors contained within objects being serialized.',
                                  }),
                                type_name: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: 'Name of the type of objects being serialized.',
                                  }),
                              })
                              .openapi({
                                description:
                                  'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                required: [],
                              }),
                          ),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_VARIANT' }),
                      version_number: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Protocol buffer representing a tensor.',
                      required: [],
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              meta: z
                .object({
                  metrics: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        z
                          .object({
                            key: z.string().exactOptional(),
                            type: MetricTypeSchema.exactOptional(),
                            value: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.float32(),
                              )
                              .exactOptional(),
                          })
                          .openapi({ required: [] }),
                      ),
                    )
                    .exactOptional(),
                  puid: z.string().exactOptional(),
                  requestPath: z
                    .record(z.string(), z.string())
                    .exactOptional()
                    .openapi({ example: { classifier: 'seldonio/mock_classifier:1.0' } }),
                  routing: z
                    .record(
                      z.string(),
                      z.preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.int32(),
                      ),
                    )
                    .exactOptional()
                    .openapi({ example: { router1: 1 } }),
                  tags: z
                    .record(
                      z.string(),
                      ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(AnyValueSchema),
                    )
                    .exactOptional()
                    .openapi({ example: { mytag: 'myvalue' } }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              status: z
                .object({
                  code: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                  info: z.string().exactOptional(),
                  reason: z.string().exactOptional(),
                  status: StatusStatusFlagSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              strData: z.string().exactOptional(),
            })
            .openapi({
              param: {
                in: 'query',
                name: 'json',
                required: true,
                schema: {
                  properties: {
                    binData: { format: 'byte', type: 'string' },
                    data: {
                      properties: {
                        names: { items: { type: 'string' }, type: 'array' },
                        ndarry: { items: { $ref: '#/components/schemas/AnyValue' }, type: 'array' },
                        tensor: {
                          properties: {
                            shape: { items: { format: 'int32', type: 'integer' }, type: 'array' },
                            values: { items: { format: 'double', type: 'number' }, type: 'array' },
                          },
                          type: 'object',
                        },
                        tftensor: {
                          description: 'Protocol buffer representing a tensor.',
                          properties: {
                            bool_val: {
                              items: { format: 'boolean', type: 'boolean' },
                              title: 'DT_BOOL',
                              type: 'array',
                            },
                            dcomplex_val: {
                              description:
                                'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                              items: { format: 'double', type: 'number' },
                              type: 'array',
                            },
                            double_val: {
                              description: 'DT_DOUBLE.',
                              items: { format: 'double', type: 'number' },
                              type: 'array',
                            },
                            dtype: { $ref: '#/components/schemas/TensorflowDataType' },
                            float_val: {
                              description: 'DT_FLOAT.',
                              items: { format: 'float', type: 'number' },
                              type: 'array',
                            },
                            half_val: {
                              description:
                                "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                              items: { format: 'int32', type: 'integer' },
                              type: 'array',
                            },
                            int64_val: {
                              items: { format: 'int64', type: 'string' },
                              title: 'DT_INT64',
                              type: 'array',
                            },
                            int_val: {
                              description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.',
                              items: { format: 'int32', type: 'integer' },
                              type: 'array',
                            },
                            resource_handle_val: {
                              items: { $ref: '#/components/schemas/TensorflowResourceHandleProto' },
                              title: 'DT_RESOURCE',
                              type: 'array',
                            },
                            scomplex_val: {
                              description:
                                'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                              items: { format: 'float', type: 'number' },
                              type: 'array',
                            },
                            string_val: {
                              items: { format: 'byte', type: 'string' },
                              title: 'DT_STRING',
                              type: 'array',
                            },
                            tensor_content: {
                              description:
                                'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                              format: 'byte',
                              type: 'string',
                            },
                            tensor_shape: {
                              description: 'Dimensions of a tensor.',
                              properties: {
                                dim: {
                                  description:
                                    'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                  items: { $ref: '#/components/schemas/TensorShapeProtoDim' },
                                  type: 'array',
                                },
                                unknown_rank: {
                                  description:
                                    'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                  format: 'boolean',
                                  type: 'boolean',
                                },
                              },
                              type: 'object',
                            },
                            uint32_val: {
                              items: { format: 'int64', type: 'integer' },
                              title: 'DT_UINT32',
                              type: 'array',
                            },
                            uint64_val: {
                              items: { format: 'uint64', type: 'string' },
                              title: 'DT_UINT64',
                              type: 'array',
                            },
                            variant_val: {
                              items: {
                                description:
                                  'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                properties: {
                                  metadata: {
                                    description: 'Portions of the object that are not Tensors.',
                                    format: 'byte',
                                    type: 'string',
                                  },
                                  tensors: {
                                    description:
                                      'Tensors contained within objects being serialized.',
                                    items: { $ref: '#/components/schemas/TensorflowTensorProto' },
                                    type: 'array',
                                  },
                                  type_name: {
                                    description: 'Name of the type of objects being serialized.',
                                    type: 'string',
                                  },
                                },
                                type: 'object',
                              },
                              title: 'DT_VARIANT',
                              type: 'array',
                            },
                            version_number: {
                              description:
                                'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                              format: 'int32',
                              type: 'integer',
                            },
                          },
                          type: 'object',
                        },
                      },
                      type: 'object',
                    },
                    meta: {
                      properties: {
                        metrics: {
                          items: {
                            properties: {
                              key: { type: 'string' },
                              type: { $ref: '#/components/schemas/MetricType' },
                              value: { format: 'float', type: 'number' },
                            },
                            type: 'object',
                          },
                          type: 'array',
                        },
                        puid: { type: 'string' },
                        requestPath: {
                          additionalProperties: { type: 'string' },
                          example: { classifier: 'seldonio/mock_classifier:1.0' },
                          type: 'object',
                        },
                        routing: {
                          additionalProperties: { format: 'int32', type: 'integer' },
                          example: { router1: 1 },
                          type: 'object',
                        },
                        tags: {
                          additionalProperties: { $ref: '#/components/schemas/AnyValue' },
                          example: { mytag: 'myvalue' },
                          type: 'object',
                        },
                      },
                      type: 'object',
                    },
                    status: {
                      properties: {
                        code: { format: 'int32', type: 'integer' },
                        info: { type: 'string' },
                        reason: { type: 'string' },
                        status: { $ref: '#/components/schemas/StatusStatusFlag' },
                      },
                      type: 'object',
                    },
                    strData: { type: 'string' },
                  },
                  type: 'object',
                },
              },
              required: [],
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'A successful response.',
      content: { 'application/json': { schema: SeldonMessageSchema } },
    },
  },
})

export const postRouteRoute = createRoute({
  method: 'post',
  path: '/route',
  tags: ['Internal'],
  operationId: 'Route',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              json: z
                .object({
                  binData: z.string().exactOptional(),
                  data: z
                    .object({
                      names: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional(),
                      ndarry: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            ((schema) =>
                              z.union([
                                schema,
                                z.preprocess((val) => (val === 'null' ? null : val), schema),
                              ]))(AnyValueSchema),
                          ),
                        )
                        .exactOptional(),
                      tensor: z
                        .object({
                          shape: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional(),
                          values: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      tftensor: z
                        .object({
                          bool_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z.preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_BOOL' }),
                          dcomplex_val: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                            }),
                          double_val: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_DOUBLE.' }),
                          dtype: TensorflowDataTypeSchema.exactOptional(),
                          float_val: z
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
                                  z.float32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_FLOAT.' }),
                          half_val: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                            }),
                          int64_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_INT64' }),
                          int_val: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.' }),
                          resource_handle_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(TensorflowResourceHandleProtoSchema),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_RESOURCE' }),
                          scomplex_val: z
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
                                  z.float32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                            }),
                          string_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_STRING' }),
                          tensor_content: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                            }),
                          tensor_shape: z
                            .object({
                              dim: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(TensorShapeProtoDimSchema),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                }),
                              unknown_rank: z
                                .preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                }),
                            })
                            .exactOptional()
                            .openapi({ description: 'Dimensions of a tensor.', required: [] }),
                          uint32_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .openapi({ type: 'integer', format: 'int64' }),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_UINT32' }),
                          uint64_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_UINT64' }),
                          variant_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z
                                  .object({
                                    metadata: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description: 'Portions of the object that are not Tensors.',
                                      }),
                                    tensors: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(TensorflowTensorProtoSchema),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Tensors contained within objects being serialized.',
                                      }),
                                    type_name: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Name of the type of objects being serialized.',
                                      }),
                                  })
                                  .openapi({
                                    description:
                                      'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                    required: [],
                                  }),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_VARIANT' }),
                          version_number: z
                            .preprocess(
                              (val) =>
                                typeof val === 'string' &&
                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                  ? Number(val)
                                  : val,
                              z.int32(),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Protocol buffer representing a tensor.',
                          required: [],
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  meta: z
                    .object({
                      metrics: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                key: z.string().exactOptional(),
                                type: MetricTypeSchema.exactOptional(),
                                value: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float32(),
                                  )
                                  .exactOptional(),
                              })
                              .openapi({ required: [] }),
                          ),
                        )
                        .exactOptional(),
                      puid: z.string().exactOptional(),
                      requestPath: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ example: { classifier: 'seldonio/mock_classifier:1.0' } }),
                      routing: z
                        .record(
                          z.string(),
                          z.preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          ),
                        )
                        .exactOptional()
                        .openapi({ example: { router1: 1 } }),
                      tags: z
                        .record(
                          z.string(),
                          ((schema) =>
                            z.union([
                              schema,
                              z.preprocess((val) => (val === 'null' ? null : val), schema),
                            ]))(AnyValueSchema),
                        )
                        .exactOptional()
                        .openapi({ example: { mytag: 'myvalue' } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  status: z
                    .object({
                      code: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .exactOptional(),
                      info: z.string().exactOptional(),
                      reason: z.string().exactOptional(),
                      status: StatusStatusFlagSchema.exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  strData: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          encoding: { json: { contentType: 'application/json' } },
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
})

export const getSendFeedbackRoute = createRoute({
  method: 'get',
  path: '/send-feedback',
  tags: ['Internal'],
  operationId: 'SendFeedback2',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['request', ['json']],
          ['response', ['json']],
          ['reward', ['json']],
          ['truth', ['json']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          json: z
            .object({
              request: z
                .object({
                  binData: z.string().exactOptional(),
                  data: z
                    .object({
                      names: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional(),
                      ndarry: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            ((schema) =>
                              z.union([
                                schema,
                                z.preprocess((val) => (val === 'null' ? null : val), schema),
                              ]))(AnyValueSchema),
                          ),
                        )
                        .exactOptional(),
                      tensor: z
                        .object({
                          shape: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional(),
                          values: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      tftensor: z
                        .object({
                          bool_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z.preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_BOOL' }),
                          dcomplex_val: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                            }),
                          double_val: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_DOUBLE.' }),
                          dtype: TensorflowDataTypeSchema.exactOptional(),
                          float_val: z
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
                                  z.float32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_FLOAT.' }),
                          half_val: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                            }),
                          int64_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_INT64' }),
                          int_val: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.' }),
                          resource_handle_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(TensorflowResourceHandleProtoSchema),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_RESOURCE' }),
                          scomplex_val: z
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
                                  z.float32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                            }),
                          string_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_STRING' }),
                          tensor_content: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                            }),
                          tensor_shape: z
                            .object({
                              dim: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(TensorShapeProtoDimSchema),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                }),
                              unknown_rank: z
                                .preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                }),
                            })
                            .exactOptional()
                            .openapi({ description: 'Dimensions of a tensor.', required: [] }),
                          uint32_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .openapi({ type: 'integer', format: 'int64' }),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_UINT32' }),
                          uint64_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_UINT64' }),
                          variant_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z
                                  .object({
                                    metadata: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description: 'Portions of the object that are not Tensors.',
                                      }),
                                    tensors: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(TensorflowTensorProtoSchema),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Tensors contained within objects being serialized.',
                                      }),
                                    type_name: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Name of the type of objects being serialized.',
                                      }),
                                  })
                                  .openapi({
                                    description:
                                      'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                    required: [],
                                  }),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_VARIANT' }),
                          version_number: z
                            .preprocess(
                              (val) =>
                                typeof val === 'string' &&
                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                  ? Number(val)
                                  : val,
                              z.int32(),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Protocol buffer representing a tensor.',
                          required: [],
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  meta: z
                    .object({
                      metrics: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                key: z.string().exactOptional(),
                                type: MetricTypeSchema.exactOptional(),
                                value: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float32(),
                                  )
                                  .exactOptional(),
                              })
                              .openapi({ required: [] }),
                          ),
                        )
                        .exactOptional(),
                      puid: z.string().exactOptional(),
                      requestPath: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ example: { classifier: 'seldonio/mock_classifier:1.0' } }),
                      routing: z
                        .record(
                          z.string(),
                          z.preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          ),
                        )
                        .exactOptional()
                        .openapi({ example: { router1: 1 } }),
                      tags: z
                        .record(
                          z.string(),
                          ((schema) =>
                            z.union([
                              schema,
                              z.preprocess((val) => (val === 'null' ? null : val), schema),
                            ]))(AnyValueSchema),
                        )
                        .exactOptional()
                        .openapi({ example: { mytag: 'myvalue' } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  status: z
                    .object({
                      code: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .exactOptional(),
                      info: z.string().exactOptional(),
                      reason: z.string().exactOptional(),
                      status: StatusStatusFlagSchema.exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  strData: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              response: z
                .object({
                  binData: z.string().exactOptional(),
                  data: z
                    .object({
                      names: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional(),
                      ndarry: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            ((schema) =>
                              z.union([
                                schema,
                                z.preprocess((val) => (val === 'null' ? null : val), schema),
                              ]))(AnyValueSchema),
                          ),
                        )
                        .exactOptional(),
                      tensor: z
                        .object({
                          shape: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional(),
                          values: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      tftensor: z
                        .object({
                          bool_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z.preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_BOOL' }),
                          dcomplex_val: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                            }),
                          double_val: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_DOUBLE.' }),
                          dtype: TensorflowDataTypeSchema.exactOptional(),
                          float_val: z
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
                                  z.float32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_FLOAT.' }),
                          half_val: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                            }),
                          int64_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_INT64' }),
                          int_val: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.' }),
                          resource_handle_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(TensorflowResourceHandleProtoSchema),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_RESOURCE' }),
                          scomplex_val: z
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
                                  z.float32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                            }),
                          string_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_STRING' }),
                          tensor_content: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                            }),
                          tensor_shape: z
                            .object({
                              dim: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(TensorShapeProtoDimSchema),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                }),
                              unknown_rank: z
                                .preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                }),
                            })
                            .exactOptional()
                            .openapi({ description: 'Dimensions of a tensor.', required: [] }),
                          uint32_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .openapi({ type: 'integer', format: 'int64' }),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_UINT32' }),
                          uint64_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_UINT64' }),
                          variant_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z
                                  .object({
                                    metadata: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description: 'Portions of the object that are not Tensors.',
                                      }),
                                    tensors: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(TensorflowTensorProtoSchema),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Tensors contained within objects being serialized.',
                                      }),
                                    type_name: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Name of the type of objects being serialized.',
                                      }),
                                  })
                                  .openapi({
                                    description:
                                      'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                    required: [],
                                  }),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_VARIANT' }),
                          version_number: z
                            .preprocess(
                              (val) =>
                                typeof val === 'string' &&
                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                  ? Number(val)
                                  : val,
                              z.int32(),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Protocol buffer representing a tensor.',
                          required: [],
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  meta: z
                    .object({
                      metrics: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                key: z.string().exactOptional(),
                                type: MetricTypeSchema.exactOptional(),
                                value: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float32(),
                                  )
                                  .exactOptional(),
                              })
                              .openapi({ required: [] }),
                          ),
                        )
                        .exactOptional(),
                      puid: z.string().exactOptional(),
                      requestPath: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ example: { classifier: 'seldonio/mock_classifier:1.0' } }),
                      routing: z
                        .record(
                          z.string(),
                          z.preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          ),
                        )
                        .exactOptional()
                        .openapi({ example: { router1: 1 } }),
                      tags: z
                        .record(
                          z.string(),
                          ((schema) =>
                            z.union([
                              schema,
                              z.preprocess((val) => (val === 'null' ? null : val), schema),
                            ]))(AnyValueSchema),
                        )
                        .exactOptional()
                        .openapi({ example: { mytag: 'myvalue' } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  status: z
                    .object({
                      code: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .exactOptional(),
                      info: z.string().exactOptional(),
                      reason: z.string().exactOptional(),
                      status: StatusStatusFlagSchema.exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  strData: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              reward: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float32(),
                )
                .exactOptional(),
              truth: z
                .object({
                  binData: z.string().exactOptional(),
                  data: z
                    .object({
                      names: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional(),
                      ndarry: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            ((schema) =>
                              z.union([
                                schema,
                                z.preprocess((val) => (val === 'null' ? null : val), schema),
                              ]))(AnyValueSchema),
                          ),
                        )
                        .exactOptional(),
                      tensor: z
                        .object({
                          shape: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional(),
                          values: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      tftensor: z
                        .object({
                          bool_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z.preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_BOOL' }),
                          dcomplex_val: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                            }),
                          double_val: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_DOUBLE.' }),
                          dtype: TensorflowDataTypeSchema.exactOptional(),
                          float_val: z
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
                                  z.float32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_FLOAT.' }),
                          half_val: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                            }),
                          int64_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_INT64' }),
                          int_val: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.' }),
                          resource_handle_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(TensorflowResourceHandleProtoSchema),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_RESOURCE' }),
                          scomplex_val: z
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
                                  z.float32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                            }),
                          string_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_STRING' }),
                          tensor_content: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                            }),
                          tensor_shape: z
                            .object({
                              dim: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(TensorShapeProtoDimSchema),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                }),
                              unknown_rank: z
                                .preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                }),
                            })
                            .exactOptional()
                            .openapi({ description: 'Dimensions of a tensor.', required: [] }),
                          uint32_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .openapi({ type: 'integer', format: 'int64' }),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_UINT32' }),
                          uint64_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_UINT64' }),
                          variant_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z
                                  .object({
                                    metadata: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description: 'Portions of the object that are not Tensors.',
                                      }),
                                    tensors: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(TensorflowTensorProtoSchema),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Tensors contained within objects being serialized.',
                                      }),
                                    type_name: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Name of the type of objects being serialized.',
                                      }),
                                  })
                                  .openapi({
                                    description:
                                      'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                    required: [],
                                  }),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_VARIANT' }),
                          version_number: z
                            .preprocess(
                              (val) =>
                                typeof val === 'string' &&
                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                  ? Number(val)
                                  : val,
                              z.int32(),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Protocol buffer representing a tensor.',
                          required: [],
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  meta: z
                    .object({
                      metrics: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                key: z.string().exactOptional(),
                                type: MetricTypeSchema.exactOptional(),
                                value: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float32(),
                                  )
                                  .exactOptional(),
                              })
                              .openapi({ required: [] }),
                          ),
                        )
                        .exactOptional(),
                      puid: z.string().exactOptional(),
                      requestPath: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ example: { classifier: 'seldonio/mock_classifier:1.0' } }),
                      routing: z
                        .record(
                          z.string(),
                          z.preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          ),
                        )
                        .exactOptional()
                        .openapi({ example: { router1: 1 } }),
                      tags: z
                        .record(
                          z.string(),
                          ((schema) =>
                            z.union([
                              schema,
                              z.preprocess((val) => (val === 'null' ? null : val), schema),
                            ]))(AnyValueSchema),
                        )
                        .exactOptional()
                        .openapi({ example: { mytag: 'myvalue' } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  status: z
                    .object({
                      code: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .exactOptional(),
                      info: z.string().exactOptional(),
                      reason: z.string().exactOptional(),
                      status: StatusStatusFlagSchema.exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  strData: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              param: {
                in: 'query',
                name: 'json',
                required: true,
                schema: {
                  properties: {
                    request: {
                      properties: {
                        binData: { format: 'byte', type: 'string' },
                        data: {
                          properties: {
                            names: { items: { type: 'string' }, type: 'array' },
                            ndarry: {
                              items: { $ref: '#/components/schemas/AnyValue' },
                              type: 'array',
                            },
                            tensor: {
                              properties: {
                                shape: {
                                  items: { format: 'int32', type: 'integer' },
                                  type: 'array',
                                },
                                values: {
                                  items: { format: 'double', type: 'number' },
                                  type: 'array',
                                },
                              },
                              type: 'object',
                            },
                            tftensor: {
                              description: 'Protocol buffer representing a tensor.',
                              properties: {
                                bool_val: {
                                  items: { format: 'boolean', type: 'boolean' },
                                  title: 'DT_BOOL',
                                  type: 'array',
                                },
                                dcomplex_val: {
                                  description:
                                    'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                                  items: { format: 'double', type: 'number' },
                                  type: 'array',
                                },
                                double_val: {
                                  description: 'DT_DOUBLE.',
                                  items: { format: 'double', type: 'number' },
                                  type: 'array',
                                },
                                dtype: { $ref: '#/components/schemas/TensorflowDataType' },
                                float_val: {
                                  description: 'DT_FLOAT.',
                                  items: { format: 'float', type: 'number' },
                                  type: 'array',
                                },
                                half_val: {
                                  description:
                                    "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                                  items: { format: 'int32', type: 'integer' },
                                  type: 'array',
                                },
                                int64_val: {
                                  items: { format: 'int64', type: 'string' },
                                  title: 'DT_INT64',
                                  type: 'array',
                                },
                                int_val: {
                                  description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.',
                                  items: { format: 'int32', type: 'integer' },
                                  type: 'array',
                                },
                                resource_handle_val: {
                                  items: {
                                    $ref: '#/components/schemas/TensorflowResourceHandleProto',
                                  },
                                  title: 'DT_RESOURCE',
                                  type: 'array',
                                },
                                scomplex_val: {
                                  description:
                                    'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                                  items: { format: 'float', type: 'number' },
                                  type: 'array',
                                },
                                string_val: {
                                  items: { format: 'byte', type: 'string' },
                                  title: 'DT_STRING',
                                  type: 'array',
                                },
                                tensor_content: {
                                  description:
                                    'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                                  format: 'byte',
                                  type: 'string',
                                },
                                tensor_shape: {
                                  description: 'Dimensions of a tensor.',
                                  properties: {
                                    dim: {
                                      description:
                                        'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                      items: { $ref: '#/components/schemas/TensorShapeProtoDim' },
                                      type: 'array',
                                    },
                                    unknown_rank: {
                                      description:
                                        'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                      format: 'boolean',
                                      type: 'boolean',
                                    },
                                  },
                                  type: 'object',
                                },
                                uint32_val: {
                                  items: { format: 'int64', type: 'integer' },
                                  title: 'DT_UINT32',
                                  type: 'array',
                                },
                                uint64_val: {
                                  items: { format: 'uint64', type: 'string' },
                                  title: 'DT_UINT64',
                                  type: 'array',
                                },
                                variant_val: {
                                  items: {
                                    description:
                                      'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                    properties: {
                                      metadata: {
                                        description: 'Portions of the object that are not Tensors.',
                                        format: 'byte',
                                        type: 'string',
                                      },
                                      tensors: {
                                        description:
                                          'Tensors contained within objects being serialized.',
                                        items: {
                                          $ref: '#/components/schemas/TensorflowTensorProto',
                                        },
                                        type: 'array',
                                      },
                                      type_name: {
                                        description:
                                          'Name of the type of objects being serialized.',
                                        type: 'string',
                                      },
                                    },
                                    type: 'object',
                                  },
                                  title: 'DT_VARIANT',
                                  type: 'array',
                                },
                                version_number: {
                                  description:
                                    'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                                  format: 'int32',
                                  type: 'integer',
                                },
                              },
                              type: 'object',
                            },
                          },
                          type: 'object',
                        },
                        meta: {
                          properties: {
                            metrics: {
                              items: {
                                properties: {
                                  key: { type: 'string' },
                                  type: { $ref: '#/components/schemas/MetricType' },
                                  value: { format: 'float', type: 'number' },
                                },
                                type: 'object',
                              },
                              type: 'array',
                            },
                            puid: { type: 'string' },
                            requestPath: {
                              additionalProperties: { type: 'string' },
                              example: { classifier: 'seldonio/mock_classifier:1.0' },
                              type: 'object',
                            },
                            routing: {
                              additionalProperties: { format: 'int32', type: 'integer' },
                              example: { router1: 1 },
                              type: 'object',
                            },
                            tags: {
                              additionalProperties: { $ref: '#/components/schemas/AnyValue' },
                              example: { mytag: 'myvalue' },
                              type: 'object',
                            },
                          },
                          type: 'object',
                        },
                        status: {
                          properties: {
                            code: { format: 'int32', type: 'integer' },
                            info: { type: 'string' },
                            reason: { type: 'string' },
                            status: { $ref: '#/components/schemas/StatusStatusFlag' },
                          },
                          type: 'object',
                        },
                        strData: { type: 'string' },
                      },
                      type: 'object',
                    },
                    response: {
                      properties: {
                        binData: { format: 'byte', type: 'string' },
                        data: {
                          properties: {
                            names: { items: { type: 'string' }, type: 'array' },
                            ndarry: {
                              items: { $ref: '#/components/schemas/AnyValue' },
                              type: 'array',
                            },
                            tensor: {
                              properties: {
                                shape: {
                                  items: { format: 'int32', type: 'integer' },
                                  type: 'array',
                                },
                                values: {
                                  items: { format: 'double', type: 'number' },
                                  type: 'array',
                                },
                              },
                              type: 'object',
                            },
                            tftensor: {
                              description: 'Protocol buffer representing a tensor.',
                              properties: {
                                bool_val: {
                                  items: { format: 'boolean', type: 'boolean' },
                                  title: 'DT_BOOL',
                                  type: 'array',
                                },
                                dcomplex_val: {
                                  description:
                                    'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                                  items: { format: 'double', type: 'number' },
                                  type: 'array',
                                },
                                double_val: {
                                  description: 'DT_DOUBLE.',
                                  items: { format: 'double', type: 'number' },
                                  type: 'array',
                                },
                                dtype: { $ref: '#/components/schemas/TensorflowDataType' },
                                float_val: {
                                  description: 'DT_FLOAT.',
                                  items: { format: 'float', type: 'number' },
                                  type: 'array',
                                },
                                half_val: {
                                  description:
                                    "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                                  items: { format: 'int32', type: 'integer' },
                                  type: 'array',
                                },
                                int64_val: {
                                  items: { format: 'int64', type: 'string' },
                                  title: 'DT_INT64',
                                  type: 'array',
                                },
                                int_val: {
                                  description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.',
                                  items: { format: 'int32', type: 'integer' },
                                  type: 'array',
                                },
                                resource_handle_val: {
                                  items: {
                                    $ref: '#/components/schemas/TensorflowResourceHandleProto',
                                  },
                                  title: 'DT_RESOURCE',
                                  type: 'array',
                                },
                                scomplex_val: {
                                  description:
                                    'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                                  items: { format: 'float', type: 'number' },
                                  type: 'array',
                                },
                                string_val: {
                                  items: { format: 'byte', type: 'string' },
                                  title: 'DT_STRING',
                                  type: 'array',
                                },
                                tensor_content: {
                                  description:
                                    'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                                  format: 'byte',
                                  type: 'string',
                                },
                                tensor_shape: {
                                  description: 'Dimensions of a tensor.',
                                  properties: {
                                    dim: {
                                      description:
                                        'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                      items: { $ref: '#/components/schemas/TensorShapeProtoDim' },
                                      type: 'array',
                                    },
                                    unknown_rank: {
                                      description:
                                        'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                      format: 'boolean',
                                      type: 'boolean',
                                    },
                                  },
                                  type: 'object',
                                },
                                uint32_val: {
                                  items: { format: 'int64', type: 'integer' },
                                  title: 'DT_UINT32',
                                  type: 'array',
                                },
                                uint64_val: {
                                  items: { format: 'uint64', type: 'string' },
                                  title: 'DT_UINT64',
                                  type: 'array',
                                },
                                variant_val: {
                                  items: {
                                    description:
                                      'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                    properties: {
                                      metadata: {
                                        description: 'Portions of the object that are not Tensors.',
                                        format: 'byte',
                                        type: 'string',
                                      },
                                      tensors: {
                                        description:
                                          'Tensors contained within objects being serialized.',
                                        items: {
                                          $ref: '#/components/schemas/TensorflowTensorProto',
                                        },
                                        type: 'array',
                                      },
                                      type_name: {
                                        description:
                                          'Name of the type of objects being serialized.',
                                        type: 'string',
                                      },
                                    },
                                    type: 'object',
                                  },
                                  title: 'DT_VARIANT',
                                  type: 'array',
                                },
                                version_number: {
                                  description:
                                    'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                                  format: 'int32',
                                  type: 'integer',
                                },
                              },
                              type: 'object',
                            },
                          },
                          type: 'object',
                        },
                        meta: {
                          properties: {
                            metrics: {
                              items: {
                                properties: {
                                  key: { type: 'string' },
                                  type: { $ref: '#/components/schemas/MetricType' },
                                  value: { format: 'float', type: 'number' },
                                },
                                type: 'object',
                              },
                              type: 'array',
                            },
                            puid: { type: 'string' },
                            requestPath: {
                              additionalProperties: { type: 'string' },
                              example: { classifier: 'seldonio/mock_classifier:1.0' },
                              type: 'object',
                            },
                            routing: {
                              additionalProperties: { format: 'int32', type: 'integer' },
                              example: { router1: 1 },
                              type: 'object',
                            },
                            tags: {
                              additionalProperties: { $ref: '#/components/schemas/AnyValue' },
                              example: { mytag: 'myvalue' },
                              type: 'object',
                            },
                          },
                          type: 'object',
                        },
                        status: {
                          properties: {
                            code: { format: 'int32', type: 'integer' },
                            info: { type: 'string' },
                            reason: { type: 'string' },
                            status: { $ref: '#/components/schemas/StatusStatusFlag' },
                          },
                          type: 'object',
                        },
                        strData: { type: 'string' },
                      },
                      type: 'object',
                    },
                    reward: { format: 'float', type: 'number' },
                    truth: {
                      properties: {
                        binData: { format: 'byte', type: 'string' },
                        data: {
                          properties: {
                            names: { items: { type: 'string' }, type: 'array' },
                            ndarry: {
                              items: { $ref: '#/components/schemas/AnyValue' },
                              type: 'array',
                            },
                            tensor: {
                              properties: {
                                shape: {
                                  items: { format: 'int32', type: 'integer' },
                                  type: 'array',
                                },
                                values: {
                                  items: { format: 'double', type: 'number' },
                                  type: 'array',
                                },
                              },
                              type: 'object',
                            },
                            tftensor: {
                              description: 'Protocol buffer representing a tensor.',
                              properties: {
                                bool_val: {
                                  items: { format: 'boolean', type: 'boolean' },
                                  title: 'DT_BOOL',
                                  type: 'array',
                                },
                                dcomplex_val: {
                                  description:
                                    'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                                  items: { format: 'double', type: 'number' },
                                  type: 'array',
                                },
                                double_val: {
                                  description: 'DT_DOUBLE.',
                                  items: { format: 'double', type: 'number' },
                                  type: 'array',
                                },
                                dtype: { $ref: '#/components/schemas/TensorflowDataType' },
                                float_val: {
                                  description: 'DT_FLOAT.',
                                  items: { format: 'float', type: 'number' },
                                  type: 'array',
                                },
                                half_val: {
                                  description:
                                    "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                                  items: { format: 'int32', type: 'integer' },
                                  type: 'array',
                                },
                                int64_val: {
                                  items: { format: 'int64', type: 'string' },
                                  title: 'DT_INT64',
                                  type: 'array',
                                },
                                int_val: {
                                  description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.',
                                  items: { format: 'int32', type: 'integer' },
                                  type: 'array',
                                },
                                resource_handle_val: {
                                  items: {
                                    $ref: '#/components/schemas/TensorflowResourceHandleProto',
                                  },
                                  title: 'DT_RESOURCE',
                                  type: 'array',
                                },
                                scomplex_val: {
                                  description:
                                    'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                                  items: { format: 'float', type: 'number' },
                                  type: 'array',
                                },
                                string_val: {
                                  items: { format: 'byte', type: 'string' },
                                  title: 'DT_STRING',
                                  type: 'array',
                                },
                                tensor_content: {
                                  description:
                                    'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                                  format: 'byte',
                                  type: 'string',
                                },
                                tensor_shape: {
                                  description: 'Dimensions of a tensor.',
                                  properties: {
                                    dim: {
                                      description:
                                        'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                      items: { $ref: '#/components/schemas/TensorShapeProtoDim' },
                                      type: 'array',
                                    },
                                    unknown_rank: {
                                      description:
                                        'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                      format: 'boolean',
                                      type: 'boolean',
                                    },
                                  },
                                  type: 'object',
                                },
                                uint32_val: {
                                  items: { format: 'int64', type: 'integer' },
                                  title: 'DT_UINT32',
                                  type: 'array',
                                },
                                uint64_val: {
                                  items: { format: 'uint64', type: 'string' },
                                  title: 'DT_UINT64',
                                  type: 'array',
                                },
                                variant_val: {
                                  items: {
                                    description:
                                      'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                    properties: {
                                      metadata: {
                                        description: 'Portions of the object that are not Tensors.',
                                        format: 'byte',
                                        type: 'string',
                                      },
                                      tensors: {
                                        description:
                                          'Tensors contained within objects being serialized.',
                                        items: {
                                          $ref: '#/components/schemas/TensorflowTensorProto',
                                        },
                                        type: 'array',
                                      },
                                      type_name: {
                                        description:
                                          'Name of the type of objects being serialized.',
                                        type: 'string',
                                      },
                                    },
                                    type: 'object',
                                  },
                                  title: 'DT_VARIANT',
                                  type: 'array',
                                },
                                version_number: {
                                  description:
                                    'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                                  format: 'int32',
                                  type: 'integer',
                                },
                              },
                              type: 'object',
                            },
                          },
                          type: 'object',
                        },
                        meta: {
                          properties: {
                            metrics: {
                              items: {
                                properties: {
                                  key: { type: 'string' },
                                  type: { $ref: '#/components/schemas/MetricType' },
                                  value: { format: 'float', type: 'number' },
                                },
                                type: 'object',
                              },
                              type: 'array',
                            },
                            puid: { type: 'string' },
                            requestPath: {
                              additionalProperties: { type: 'string' },
                              example: { classifier: 'seldonio/mock_classifier:1.0' },
                              type: 'object',
                            },
                            routing: {
                              additionalProperties: { format: 'int32', type: 'integer' },
                              example: { router1: 1 },
                              type: 'object',
                            },
                            tags: {
                              additionalProperties: { $ref: '#/components/schemas/AnyValue' },
                              example: { mytag: 'myvalue' },
                              type: 'object',
                            },
                          },
                          type: 'object',
                        },
                        status: {
                          properties: {
                            code: { format: 'int32', type: 'integer' },
                            info: { type: 'string' },
                            reason: { type: 'string' },
                            status: { $ref: '#/components/schemas/StatusStatusFlag' },
                          },
                          type: 'object',
                        },
                        strData: { type: 'string' },
                      },
                      type: 'object',
                    },
                  },
                  type: 'object',
                },
              },
              required: [],
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'A successful response.',
      content: { 'application/json': { schema: SeldonMessageSchema } },
    },
  },
})

export const postSendFeedbackRoute = createRoute({
  method: 'post',
  path: '/send-feedback',
  tags: ['Internal'],
  operationId: 'SendFeedback',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              json: z
                .object({
                  request: z
                    .object({
                      binData: z.string().exactOptional(),
                      data: z
                        .object({
                          names: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional(),
                          ndarry: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                ((schema) =>
                                  z.union([
                                    schema,
                                    z.preprocess((val) => (val === 'null' ? null : val), schema),
                                  ]))(AnyValueSchema),
                              ),
                            )
                            .exactOptional(),
                          tensor: z
                            .object({
                              shape: z
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
                                      z.int32(),
                                    ),
                                  ),
                                )
                                .exactOptional(),
                              values: z
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
                                      z.float64(),
                                    ),
                                  ),
                                )
                                .exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          tftensor: z
                            .object({
                              bool_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(
                                    z.preprocess(
                                      ((read) => (val: unknown) => {
                                        const result = read.safeParse(val)
                                        return result.success ? result.data : val
                                      })(z.stringbool()),
                                      z.boolean(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_BOOL' }),
                              dcomplex_val: z
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
                                      z.float64(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                                }),
                              double_val: z
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
                                      z.float64(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({ description: 'DT_DOUBLE.' }),
                              dtype: TensorflowDataTypeSchema.exactOptional(),
                              float_val: z
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
                                      z.float32(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({ description: 'DT_FLOAT.' }),
                              half_val: z
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
                                      z.int32(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                                }),
                              int64_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(z.string()),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_INT64' }),
                              int_val: z
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
                                      z.int32(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({ description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.' }),
                              resource_handle_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(TensorflowResourceHandleProtoSchema),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_RESOURCE' }),
                              scomplex_val: z
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
                                      z.float32(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                                }),
                              string_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(z.string()),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_STRING' }),
                              tensor_content: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                                }),
                              tensor_shape: z
                                .object({
                                  dim: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(TensorShapeProtoDimSchema),
                                    )
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                    }),
                                  unknown_rank: z
                                    .preprocess(
                                      ((read) => (val: unknown) => {
                                        const result = read.safeParse(val)
                                        return result.success ? result.data : val
                                      })(z.stringbool()),
                                      z.boolean(),
                                    )
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                    }),
                                })
                                .exactOptional()
                                .openapi({ description: 'Dimensions of a tensor.', required: [] }),
                              uint32_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(
                                    z
                                      .preprocess((val) => {
                                        if (
                                          typeof val !== 'string' ||
                                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                        )
                                          return val
                                        if (/^-?\d+$/.test(val)) return BigInt(val)
                                        const num = Number(val)
                                        return Number.isSafeInteger(num) ? BigInt(num) : val
                                      }, z.int64())
                                      .openapi({ type: 'integer', format: 'int64' }),
                                  ),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_UINT32' }),
                              uint64_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(z.string()),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_UINT64' }),
                              variant_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(
                                    z
                                      .object({
                                        metadata: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Portions of the object that are not Tensors.',
                                          }),
                                        tensors: z
                                          .preprocess(
                                            (val) =>
                                              val === undefined || Array.isArray(val) ? val : [val],
                                            z.array(TensorflowTensorProtoSchema),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Tensors contained within objects being serialized.',
                                          }),
                                        type_name: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Name of the type of objects being serialized.',
                                          }),
                                      })
                                      .openapi({
                                        description:
                                          'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                        required: [],
                                      }),
                                  ),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_VARIANT' }),
                              version_number: z
                                .preprocess(
                                  (val) =>
                                    typeof val === 'string' &&
                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                      ? Number(val)
                                      : val,
                                  z.int32(),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                                }),
                            })
                            .exactOptional()
                            .openapi({
                              description: 'Protocol buffer representing a tensor.',
                              required: [],
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      meta: z
                        .object({
                          metrics: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z
                                  .object({
                                    key: z.string().exactOptional(),
                                    type: MetricTypeSchema.exactOptional(),
                                    value: z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float32(),
                                      )
                                      .exactOptional(),
                                  })
                                  .openapi({ required: [] }),
                              ),
                            )
                            .exactOptional(),
                          puid: z.string().exactOptional(),
                          requestPath: z
                            .record(z.string(), z.string())
                            .exactOptional()
                            .openapi({ example: { classifier: 'seldonio/mock_classifier:1.0' } }),
                          routing: z
                            .record(
                              z.string(),
                              z.preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              ),
                            )
                            .exactOptional()
                            .openapi({ example: { router1: 1 } }),
                          tags: z
                            .record(
                              z.string(),
                              ((schema) =>
                                z.union([
                                  schema,
                                  z.preprocess((val) => (val === 'null' ? null : val), schema),
                                ]))(AnyValueSchema),
                            )
                            .exactOptional()
                            .openapi({ example: { mytag: 'myvalue' } }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      status: z
                        .object({
                          code: z
                            .preprocess(
                              (val) =>
                                typeof val === 'string' &&
                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                  ? Number(val)
                                  : val,
                              z.int32(),
                            )
                            .exactOptional(),
                          info: z.string().exactOptional(),
                          reason: z.string().exactOptional(),
                          status: StatusStatusFlagSchema.exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      strData: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  response: z
                    .object({
                      binData: z.string().exactOptional(),
                      data: z
                        .object({
                          names: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional(),
                          ndarry: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                ((schema) =>
                                  z.union([
                                    schema,
                                    z.preprocess((val) => (val === 'null' ? null : val), schema),
                                  ]))(AnyValueSchema),
                              ),
                            )
                            .exactOptional(),
                          tensor: z
                            .object({
                              shape: z
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
                                      z.int32(),
                                    ),
                                  ),
                                )
                                .exactOptional(),
                              values: z
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
                                      z.float64(),
                                    ),
                                  ),
                                )
                                .exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          tftensor: z
                            .object({
                              bool_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(
                                    z.preprocess(
                                      ((read) => (val: unknown) => {
                                        const result = read.safeParse(val)
                                        return result.success ? result.data : val
                                      })(z.stringbool()),
                                      z.boolean(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_BOOL' }),
                              dcomplex_val: z
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
                                      z.float64(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                                }),
                              double_val: z
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
                                      z.float64(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({ description: 'DT_DOUBLE.' }),
                              dtype: TensorflowDataTypeSchema.exactOptional(),
                              float_val: z
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
                                      z.float32(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({ description: 'DT_FLOAT.' }),
                              half_val: z
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
                                      z.int32(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                                }),
                              int64_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(z.string()),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_INT64' }),
                              int_val: z
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
                                      z.int32(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({ description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.' }),
                              resource_handle_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(TensorflowResourceHandleProtoSchema),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_RESOURCE' }),
                              scomplex_val: z
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
                                      z.float32(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                                }),
                              string_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(z.string()),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_STRING' }),
                              tensor_content: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                                }),
                              tensor_shape: z
                                .object({
                                  dim: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(TensorShapeProtoDimSchema),
                                    )
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                    }),
                                  unknown_rank: z
                                    .preprocess(
                                      ((read) => (val: unknown) => {
                                        const result = read.safeParse(val)
                                        return result.success ? result.data : val
                                      })(z.stringbool()),
                                      z.boolean(),
                                    )
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                    }),
                                })
                                .exactOptional()
                                .openapi({ description: 'Dimensions of a tensor.', required: [] }),
                              uint32_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(
                                    z
                                      .preprocess((val) => {
                                        if (
                                          typeof val !== 'string' ||
                                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                        )
                                          return val
                                        if (/^-?\d+$/.test(val)) return BigInt(val)
                                        const num = Number(val)
                                        return Number.isSafeInteger(num) ? BigInt(num) : val
                                      }, z.int64())
                                      .openapi({ type: 'integer', format: 'int64' }),
                                  ),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_UINT32' }),
                              uint64_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(z.string()),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_UINT64' }),
                              variant_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(
                                    z
                                      .object({
                                        metadata: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Portions of the object that are not Tensors.',
                                          }),
                                        tensors: z
                                          .preprocess(
                                            (val) =>
                                              val === undefined || Array.isArray(val) ? val : [val],
                                            z.array(TensorflowTensorProtoSchema),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Tensors contained within objects being serialized.',
                                          }),
                                        type_name: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Name of the type of objects being serialized.',
                                          }),
                                      })
                                      .openapi({
                                        description:
                                          'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                        required: [],
                                      }),
                                  ),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_VARIANT' }),
                              version_number: z
                                .preprocess(
                                  (val) =>
                                    typeof val === 'string' &&
                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                      ? Number(val)
                                      : val,
                                  z.int32(),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                                }),
                            })
                            .exactOptional()
                            .openapi({
                              description: 'Protocol buffer representing a tensor.',
                              required: [],
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      meta: z
                        .object({
                          metrics: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z
                                  .object({
                                    key: z.string().exactOptional(),
                                    type: MetricTypeSchema.exactOptional(),
                                    value: z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float32(),
                                      )
                                      .exactOptional(),
                                  })
                                  .openapi({ required: [] }),
                              ),
                            )
                            .exactOptional(),
                          puid: z.string().exactOptional(),
                          requestPath: z
                            .record(z.string(), z.string())
                            .exactOptional()
                            .openapi({ example: { classifier: 'seldonio/mock_classifier:1.0' } }),
                          routing: z
                            .record(
                              z.string(),
                              z.preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              ),
                            )
                            .exactOptional()
                            .openapi({ example: { router1: 1 } }),
                          tags: z
                            .record(
                              z.string(),
                              ((schema) =>
                                z.union([
                                  schema,
                                  z.preprocess((val) => (val === 'null' ? null : val), schema),
                                ]))(AnyValueSchema),
                            )
                            .exactOptional()
                            .openapi({ example: { mytag: 'myvalue' } }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      status: z
                        .object({
                          code: z
                            .preprocess(
                              (val) =>
                                typeof val === 'string' &&
                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                  ? Number(val)
                                  : val,
                              z.int32(),
                            )
                            .exactOptional(),
                          info: z.string().exactOptional(),
                          reason: z.string().exactOptional(),
                          status: StatusStatusFlagSchema.exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      strData: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  reward: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.float32(),
                    )
                    .exactOptional(),
                  truth: z
                    .object({
                      binData: z.string().exactOptional(),
                      data: z
                        .object({
                          names: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional(),
                          ndarry: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                ((schema) =>
                                  z.union([
                                    schema,
                                    z.preprocess((val) => (val === 'null' ? null : val), schema),
                                  ]))(AnyValueSchema),
                              ),
                            )
                            .exactOptional(),
                          tensor: z
                            .object({
                              shape: z
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
                                      z.int32(),
                                    ),
                                  ),
                                )
                                .exactOptional(),
                              values: z
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
                                      z.float64(),
                                    ),
                                  ),
                                )
                                .exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          tftensor: z
                            .object({
                              bool_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(
                                    z.preprocess(
                                      ((read) => (val: unknown) => {
                                        const result = read.safeParse(val)
                                        return result.success ? result.data : val
                                      })(z.stringbool()),
                                      z.boolean(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_BOOL' }),
                              dcomplex_val: z
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
                                      z.float64(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                                }),
                              double_val: z
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
                                      z.float64(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({ description: 'DT_DOUBLE.' }),
                              dtype: TensorflowDataTypeSchema.exactOptional(),
                              float_val: z
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
                                      z.float32(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({ description: 'DT_FLOAT.' }),
                              half_val: z
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
                                      z.int32(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                                }),
                              int64_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(z.string()),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_INT64' }),
                              int_val: z
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
                                      z.int32(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({ description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.' }),
                              resource_handle_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(TensorflowResourceHandleProtoSchema),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_RESOURCE' }),
                              scomplex_val: z
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
                                      z.float32(),
                                    ),
                                  ),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                                }),
                              string_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(z.string()),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_STRING' }),
                              tensor_content: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                                }),
                              tensor_shape: z
                                .object({
                                  dim: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(TensorShapeProtoDimSchema),
                                    )
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                    }),
                                  unknown_rank: z
                                    .preprocess(
                                      ((read) => (val: unknown) => {
                                        const result = read.safeParse(val)
                                        return result.success ? result.data : val
                                      })(z.stringbool()),
                                      z.boolean(),
                                    )
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                    }),
                                })
                                .exactOptional()
                                .openapi({ description: 'Dimensions of a tensor.', required: [] }),
                              uint32_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(
                                    z
                                      .preprocess((val) => {
                                        if (
                                          typeof val !== 'string' ||
                                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                        )
                                          return val
                                        if (/^-?\d+$/.test(val)) return BigInt(val)
                                        const num = Number(val)
                                        return Number.isSafeInteger(num) ? BigInt(num) : val
                                      }, z.int64())
                                      .openapi({ type: 'integer', format: 'int64' }),
                                  ),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_UINT32' }),
                              uint64_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(z.string()),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_UINT64' }),
                              variant_val: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(
                                    z
                                      .object({
                                        metadata: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Portions of the object that are not Tensors.',
                                          }),
                                        tensors: z
                                          .preprocess(
                                            (val) =>
                                              val === undefined || Array.isArray(val) ? val : [val],
                                            z.array(TensorflowTensorProtoSchema),
                                          )
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Tensors contained within objects being serialized.',
                                          }),
                                        type_name: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              'Name of the type of objects being serialized.',
                                          }),
                                      })
                                      .openapi({
                                        description:
                                          'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                        required: [],
                                      }),
                                  ),
                                )
                                .exactOptional()
                                .openapi({ title: 'DT_VARIANT' }),
                              version_number: z
                                .preprocess(
                                  (val) =>
                                    typeof val === 'string' &&
                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                      ? Number(val)
                                      : val,
                                  z.int32(),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                                }),
                            })
                            .exactOptional()
                            .openapi({
                              description: 'Protocol buffer representing a tensor.',
                              required: [],
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      meta: z
                        .object({
                          metrics: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z
                                  .object({
                                    key: z.string().exactOptional(),
                                    type: MetricTypeSchema.exactOptional(),
                                    value: z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.float32(),
                                      )
                                      .exactOptional(),
                                  })
                                  .openapi({ required: [] }),
                              ),
                            )
                            .exactOptional(),
                          puid: z.string().exactOptional(),
                          requestPath: z
                            .record(z.string(), z.string())
                            .exactOptional()
                            .openapi({ example: { classifier: 'seldonio/mock_classifier:1.0' } }),
                          routing: z
                            .record(
                              z.string(),
                              z.preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              ),
                            )
                            .exactOptional()
                            .openapi({ example: { router1: 1 } }),
                          tags: z
                            .record(
                              z.string(),
                              ((schema) =>
                                z.union([
                                  schema,
                                  z.preprocess((val) => (val === 'null' ? null : val), schema),
                                ]))(AnyValueSchema),
                            )
                            .exactOptional()
                            .openapi({ example: { mytag: 'myvalue' } }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      status: z
                        .object({
                          code: z
                            .preprocess(
                              (val) =>
                                typeof val === 'string' &&
                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                  ? Number(val)
                                  : val,
                              z.int32(),
                            )
                            .exactOptional(),
                          info: z.string().exactOptional(),
                          reason: z.string().exactOptional(),
                          status: StatusStatusFlagSchema.exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      strData: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          encoding: { json: { contentType: 'application/json' } },
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
})

export const getTransformInputRoute = createRoute({
  method: 'get',
  path: '/transform-input',
  tags: ['Internal'],
  operationId: 'TransformInput2',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['binData', ['json']],
          ['data', ['json']],
          ['meta', ['json']],
          ['status', ['json']],
          ['strData', ['json']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          json: z
            .object({
              binData: z.string().exactOptional(),
              data: z
                .object({
                  names: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string()),
                    )
                    .exactOptional(),
                  ndarry: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        ((schema) =>
                          z.union([
                            schema,
                            z.preprocess((val) => (val === 'null' ? null : val), schema),
                          ]))(AnyValueSchema),
                      ),
                    )
                    .exactOptional(),
                  tensor: z
                    .object({
                      shape: z
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
                              z.int32(),
                            ),
                          ),
                        )
                        .exactOptional(),
                      values: z
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
                              z.float64(),
                            ),
                          ),
                        )
                        .exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  tftensor: z
                    .object({
                      bool_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z.preprocess(
                              ((read) => (val: unknown) => {
                                const result = read.safeParse(val)
                                return result.success ? result.data : val
                              })(z.stringbool()),
                              z.boolean(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_BOOL' }),
                      dcomplex_val: z
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
                              z.float64(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                        }),
                      double_val: z
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
                              z.float64(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({ description: 'DT_DOUBLE.' }),
                      dtype: TensorflowDataTypeSchema.exactOptional(),
                      float_val: z
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
                              z.float32(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({ description: 'DT_FLOAT.' }),
                      half_val: z
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
                              z.int32(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                        }),
                      int64_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_INT64' }),
                      int_val: z
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
                              z.int32(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({ description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.' }),
                      resource_handle_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(TensorflowResourceHandleProtoSchema),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_RESOURCE' }),
                      scomplex_val: z
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
                              z.float32(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                        }),
                      string_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_STRING' }),
                      tensor_content: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                        }),
                      tensor_shape: z
                        .object({
                          dim: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(TensorShapeProtoDimSchema),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                            }),
                          unknown_rank: z
                            .preprocess(
                              ((read) => (val: unknown) => {
                                const result = read.safeParse(val)
                                return result.success ? result.data : val
                              })(z.stringbool()),
                              z.boolean(),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                            }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Dimensions of a tensor.', required: [] }),
                      uint32_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.int64())
                              .openapi({ type: 'integer', format: 'int64' }),
                          ),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_UINT32' }),
                      uint64_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_UINT64' }),
                      variant_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                metadata: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: 'Portions of the object that are not Tensors.',
                                  }),
                                tensors: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(TensorflowTensorProtoSchema),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Tensors contained within objects being serialized.',
                                  }),
                                type_name: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: 'Name of the type of objects being serialized.',
                                  }),
                              })
                              .openapi({
                                description:
                                  'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                required: [],
                              }),
                          ),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_VARIANT' }),
                      version_number: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Protocol buffer representing a tensor.',
                      required: [],
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              meta: z
                .object({
                  metrics: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        z
                          .object({
                            key: z.string().exactOptional(),
                            type: MetricTypeSchema.exactOptional(),
                            value: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.float32(),
                              )
                              .exactOptional(),
                          })
                          .openapi({ required: [] }),
                      ),
                    )
                    .exactOptional(),
                  puid: z.string().exactOptional(),
                  requestPath: z
                    .record(z.string(), z.string())
                    .exactOptional()
                    .openapi({ example: { classifier: 'seldonio/mock_classifier:1.0' } }),
                  routing: z
                    .record(
                      z.string(),
                      z.preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.int32(),
                      ),
                    )
                    .exactOptional()
                    .openapi({ example: { router1: 1 } }),
                  tags: z
                    .record(
                      z.string(),
                      ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(AnyValueSchema),
                    )
                    .exactOptional()
                    .openapi({ example: { mytag: 'myvalue' } }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              status: z
                .object({
                  code: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                  info: z.string().exactOptional(),
                  reason: z.string().exactOptional(),
                  status: StatusStatusFlagSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              strData: z.string().exactOptional(),
            })
            .openapi({
              param: {
                in: 'query',
                name: 'json',
                required: true,
                schema: {
                  properties: {
                    binData: { format: 'byte', type: 'string' },
                    data: {
                      properties: {
                        names: { items: { type: 'string' }, type: 'array' },
                        ndarry: { items: { $ref: '#/components/schemas/AnyValue' }, type: 'array' },
                        tensor: {
                          properties: {
                            shape: { items: { format: 'int32', type: 'integer' }, type: 'array' },
                            values: { items: { format: 'double', type: 'number' }, type: 'array' },
                          },
                          type: 'object',
                        },
                        tftensor: {
                          description: 'Protocol buffer representing a tensor.',
                          properties: {
                            bool_val: {
                              items: { format: 'boolean', type: 'boolean' },
                              title: 'DT_BOOL',
                              type: 'array',
                            },
                            dcomplex_val: {
                              description:
                                'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                              items: { format: 'double', type: 'number' },
                              type: 'array',
                            },
                            double_val: {
                              description: 'DT_DOUBLE.',
                              items: { format: 'double', type: 'number' },
                              type: 'array',
                            },
                            dtype: { $ref: '#/components/schemas/TensorflowDataType' },
                            float_val: {
                              description: 'DT_FLOAT.',
                              items: { format: 'float', type: 'number' },
                              type: 'array',
                            },
                            half_val: {
                              description:
                                "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                              items: { format: 'int32', type: 'integer' },
                              type: 'array',
                            },
                            int64_val: {
                              items: { format: 'int64', type: 'string' },
                              title: 'DT_INT64',
                              type: 'array',
                            },
                            int_val: {
                              description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.',
                              items: { format: 'int32', type: 'integer' },
                              type: 'array',
                            },
                            resource_handle_val: {
                              items: { $ref: '#/components/schemas/TensorflowResourceHandleProto' },
                              title: 'DT_RESOURCE',
                              type: 'array',
                            },
                            scomplex_val: {
                              description:
                                'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                              items: { format: 'float', type: 'number' },
                              type: 'array',
                            },
                            string_val: {
                              items: { format: 'byte', type: 'string' },
                              title: 'DT_STRING',
                              type: 'array',
                            },
                            tensor_content: {
                              description:
                                'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                              format: 'byte',
                              type: 'string',
                            },
                            tensor_shape: {
                              description: 'Dimensions of a tensor.',
                              properties: {
                                dim: {
                                  description:
                                    'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                  items: { $ref: '#/components/schemas/TensorShapeProtoDim' },
                                  type: 'array',
                                },
                                unknown_rank: {
                                  description:
                                    'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                  format: 'boolean',
                                  type: 'boolean',
                                },
                              },
                              type: 'object',
                            },
                            uint32_val: {
                              items: { format: 'int64', type: 'integer' },
                              title: 'DT_UINT32',
                              type: 'array',
                            },
                            uint64_val: {
                              items: { format: 'uint64', type: 'string' },
                              title: 'DT_UINT64',
                              type: 'array',
                            },
                            variant_val: {
                              items: {
                                description:
                                  'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                properties: {
                                  metadata: {
                                    description: 'Portions of the object that are not Tensors.',
                                    format: 'byte',
                                    type: 'string',
                                  },
                                  tensors: {
                                    description:
                                      'Tensors contained within objects being serialized.',
                                    items: { $ref: '#/components/schemas/TensorflowTensorProto' },
                                    type: 'array',
                                  },
                                  type_name: {
                                    description: 'Name of the type of objects being serialized.',
                                    type: 'string',
                                  },
                                },
                                type: 'object',
                              },
                              title: 'DT_VARIANT',
                              type: 'array',
                            },
                            version_number: {
                              description:
                                'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                              format: 'int32',
                              type: 'integer',
                            },
                          },
                          type: 'object',
                        },
                      },
                      type: 'object',
                    },
                    meta: {
                      properties: {
                        metrics: {
                          items: {
                            properties: {
                              key: { type: 'string' },
                              type: { $ref: '#/components/schemas/MetricType' },
                              value: { format: 'float', type: 'number' },
                            },
                            type: 'object',
                          },
                          type: 'array',
                        },
                        puid: { type: 'string' },
                        requestPath: {
                          additionalProperties: { type: 'string' },
                          example: { classifier: 'seldonio/mock_classifier:1.0' },
                          type: 'object',
                        },
                        routing: {
                          additionalProperties: { format: 'int32', type: 'integer' },
                          example: { router1: 1 },
                          type: 'object',
                        },
                        tags: {
                          additionalProperties: { $ref: '#/components/schemas/AnyValue' },
                          example: { mytag: 'myvalue' },
                          type: 'object',
                        },
                      },
                      type: 'object',
                    },
                    status: {
                      properties: {
                        code: { format: 'int32', type: 'integer' },
                        info: { type: 'string' },
                        reason: { type: 'string' },
                        status: { $ref: '#/components/schemas/StatusStatusFlag' },
                      },
                      type: 'object',
                    },
                    strData: { type: 'string' },
                  },
                  type: 'object',
                },
              },
              required: [],
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'A successful response.',
      content: { 'application/json': { schema: SeldonMessageSchema } },
    },
  },
})

export const postTransformInputRoute = createRoute({
  method: 'post',
  path: '/transform-input',
  tags: ['Internal'],
  operationId: 'TransformInput',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              json: z
                .object({
                  binData: z.string().exactOptional(),
                  data: z
                    .object({
                      names: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional(),
                      ndarry: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            ((schema) =>
                              z.union([
                                schema,
                                z.preprocess((val) => (val === 'null' ? null : val), schema),
                              ]))(AnyValueSchema),
                          ),
                        )
                        .exactOptional(),
                      tensor: z
                        .object({
                          shape: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional(),
                          values: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      tftensor: z
                        .object({
                          bool_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z.preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_BOOL' }),
                          dcomplex_val: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                            }),
                          double_val: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_DOUBLE.' }),
                          dtype: TensorflowDataTypeSchema.exactOptional(),
                          float_val: z
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
                                  z.float32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_FLOAT.' }),
                          half_val: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                            }),
                          int64_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_INT64' }),
                          int_val: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.' }),
                          resource_handle_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(TensorflowResourceHandleProtoSchema),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_RESOURCE' }),
                          scomplex_val: z
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
                                  z.float32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                            }),
                          string_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_STRING' }),
                          tensor_content: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                            }),
                          tensor_shape: z
                            .object({
                              dim: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(TensorShapeProtoDimSchema),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                }),
                              unknown_rank: z
                                .preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                }),
                            })
                            .exactOptional()
                            .openapi({ description: 'Dimensions of a tensor.', required: [] }),
                          uint32_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .openapi({ type: 'integer', format: 'int64' }),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_UINT32' }),
                          uint64_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_UINT64' }),
                          variant_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z
                                  .object({
                                    metadata: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description: 'Portions of the object that are not Tensors.',
                                      }),
                                    tensors: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(TensorflowTensorProtoSchema),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Tensors contained within objects being serialized.',
                                      }),
                                    type_name: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Name of the type of objects being serialized.',
                                      }),
                                  })
                                  .openapi({
                                    description:
                                      'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                    required: [],
                                  }),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_VARIANT' }),
                          version_number: z
                            .preprocess(
                              (val) =>
                                typeof val === 'string' &&
                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                  ? Number(val)
                                  : val,
                              z.int32(),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Protocol buffer representing a tensor.',
                          required: [],
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  meta: z
                    .object({
                      metrics: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                key: z.string().exactOptional(),
                                type: MetricTypeSchema.exactOptional(),
                                value: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float32(),
                                  )
                                  .exactOptional(),
                              })
                              .openapi({ required: [] }),
                          ),
                        )
                        .exactOptional(),
                      puid: z.string().exactOptional(),
                      requestPath: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ example: { classifier: 'seldonio/mock_classifier:1.0' } }),
                      routing: z
                        .record(
                          z.string(),
                          z.preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          ),
                        )
                        .exactOptional()
                        .openapi({ example: { router1: 1 } }),
                      tags: z
                        .record(
                          z.string(),
                          ((schema) =>
                            z.union([
                              schema,
                              z.preprocess((val) => (val === 'null' ? null : val), schema),
                            ]))(AnyValueSchema),
                        )
                        .exactOptional()
                        .openapi({ example: { mytag: 'myvalue' } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  status: z
                    .object({
                      code: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .exactOptional(),
                      info: z.string().exactOptional(),
                      reason: z.string().exactOptional(),
                      status: StatusStatusFlagSchema.exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  strData: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          encoding: { json: { contentType: 'application/json' } },
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
})

export const getTransformOutputRoute = createRoute({
  method: 'get',
  path: '/transform-output',
  tags: ['Internal'],
  operationId: 'TransformOutput2',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['binData', ['json']],
          ['data', ['json']],
          ['meta', ['json']],
          ['status', ['json']],
          ['strData', ['json']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          json: z
            .object({
              binData: z.string().exactOptional(),
              data: z
                .object({
                  names: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string()),
                    )
                    .exactOptional(),
                  ndarry: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        ((schema) =>
                          z.union([
                            schema,
                            z.preprocess((val) => (val === 'null' ? null : val), schema),
                          ]))(AnyValueSchema),
                      ),
                    )
                    .exactOptional(),
                  tensor: z
                    .object({
                      shape: z
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
                              z.int32(),
                            ),
                          ),
                        )
                        .exactOptional(),
                      values: z
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
                              z.float64(),
                            ),
                          ),
                        )
                        .exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  tftensor: z
                    .object({
                      bool_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z.preprocess(
                              ((read) => (val: unknown) => {
                                const result = read.safeParse(val)
                                return result.success ? result.data : val
                              })(z.stringbool()),
                              z.boolean(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_BOOL' }),
                      dcomplex_val: z
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
                              z.float64(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                        }),
                      double_val: z
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
                              z.float64(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({ description: 'DT_DOUBLE.' }),
                      dtype: TensorflowDataTypeSchema.exactOptional(),
                      float_val: z
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
                              z.float32(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({ description: 'DT_FLOAT.' }),
                      half_val: z
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
                              z.int32(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                        }),
                      int64_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_INT64' }),
                      int_val: z
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
                              z.int32(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({ description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.' }),
                      resource_handle_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(TensorflowResourceHandleProtoSchema),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_RESOURCE' }),
                      scomplex_val: z
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
                              z.float32(),
                            ),
                          ),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                        }),
                      string_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_STRING' }),
                      tensor_content: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                        }),
                      tensor_shape: z
                        .object({
                          dim: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(TensorShapeProtoDimSchema),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                            }),
                          unknown_rank: z
                            .preprocess(
                              ((read) => (val: unknown) => {
                                const result = read.safeParse(val)
                                return result.success ? result.data : val
                              })(z.stringbool()),
                              z.boolean(),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                            }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Dimensions of a tensor.', required: [] }),
                      uint32_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.int64())
                              .openapi({ type: 'integer', format: 'int64' }),
                          ),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_UINT32' }),
                      uint64_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_UINT64' }),
                      variant_val: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                metadata: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: 'Portions of the object that are not Tensors.',
                                  }),
                                tensors: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(TensorflowTensorProtoSchema),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Tensors contained within objects being serialized.',
                                  }),
                                type_name: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: 'Name of the type of objects being serialized.',
                                  }),
                              })
                              .openapi({
                                description:
                                  'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                required: [],
                              }),
                          ),
                        )
                        .exactOptional()
                        .openapi({ title: 'DT_VARIANT' }),
                      version_number: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Protocol buffer representing a tensor.',
                      required: [],
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              meta: z
                .object({
                  metrics: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        z
                          .object({
                            key: z.string().exactOptional(),
                            type: MetricTypeSchema.exactOptional(),
                            value: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.float32(),
                              )
                              .exactOptional(),
                          })
                          .openapi({ required: [] }),
                      ),
                    )
                    .exactOptional(),
                  puid: z.string().exactOptional(),
                  requestPath: z
                    .record(z.string(), z.string())
                    .exactOptional()
                    .openapi({ example: { classifier: 'seldonio/mock_classifier:1.0' } }),
                  routing: z
                    .record(
                      z.string(),
                      z.preprocess(
                        (val) =>
                          typeof val === 'string' &&
                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                            ? Number(val)
                            : val,
                        z.int32(),
                      ),
                    )
                    .exactOptional()
                    .openapi({ example: { router1: 1 } }),
                  tags: z
                    .record(
                      z.string(),
                      ((schema) =>
                        z.union([
                          schema,
                          z.preprocess((val) => (val === 'null' ? null : val), schema),
                        ]))(AnyValueSchema),
                    )
                    .exactOptional()
                    .openapi({ example: { mytag: 'myvalue' } }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              status: z
                .object({
                  code: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                  info: z.string().exactOptional(),
                  reason: z.string().exactOptional(),
                  status: StatusStatusFlagSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              strData: z.string().exactOptional(),
            })
            .openapi({
              param: {
                in: 'query',
                name: 'json',
                required: true,
                schema: {
                  properties: {
                    binData: { format: 'byte', type: 'string' },
                    data: {
                      properties: {
                        names: { items: { type: 'string' }, type: 'array' },
                        ndarry: { items: { $ref: '#/components/schemas/AnyValue' }, type: 'array' },
                        tensor: {
                          properties: {
                            shape: { items: { format: 'int32', type: 'integer' }, type: 'array' },
                            values: { items: { format: 'double', type: 'number' }, type: 'array' },
                          },
                          type: 'object',
                        },
                        tftensor: {
                          description: 'Protocol buffer representing a tensor.',
                          properties: {
                            bool_val: {
                              items: { format: 'boolean', type: 'boolean' },
                              title: 'DT_BOOL',
                              type: 'array',
                            },
                            dcomplex_val: {
                              description:
                                'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                              items: { format: 'double', type: 'number' },
                              type: 'array',
                            },
                            double_val: {
                              description: 'DT_DOUBLE.',
                              items: { format: 'double', type: 'number' },
                              type: 'array',
                            },
                            dtype: { $ref: '#/components/schemas/TensorflowDataType' },
                            float_val: {
                              description: 'DT_FLOAT.',
                              items: { format: 'float', type: 'number' },
                              type: 'array',
                            },
                            half_val: {
                              description:
                                "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                              items: { format: 'int32', type: 'integer' },
                              type: 'array',
                            },
                            int64_val: {
                              items: { format: 'int64', type: 'string' },
                              title: 'DT_INT64',
                              type: 'array',
                            },
                            int_val: {
                              description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.',
                              items: { format: 'int32', type: 'integer' },
                              type: 'array',
                            },
                            resource_handle_val: {
                              items: { $ref: '#/components/schemas/TensorflowResourceHandleProto' },
                              title: 'DT_RESOURCE',
                              type: 'array',
                            },
                            scomplex_val: {
                              description:
                                'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                              items: { format: 'float', type: 'number' },
                              type: 'array',
                            },
                            string_val: {
                              items: { format: 'byte', type: 'string' },
                              title: 'DT_STRING',
                              type: 'array',
                            },
                            tensor_content: {
                              description:
                                'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                              format: 'byte',
                              type: 'string',
                            },
                            tensor_shape: {
                              description: 'Dimensions of a tensor.',
                              properties: {
                                dim: {
                                  description:
                                    'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                  items: { $ref: '#/components/schemas/TensorShapeProtoDim' },
                                  type: 'array',
                                },
                                unknown_rank: {
                                  description:
                                    'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                  format: 'boolean',
                                  type: 'boolean',
                                },
                              },
                              type: 'object',
                            },
                            uint32_val: {
                              items: { format: 'int64', type: 'integer' },
                              title: 'DT_UINT32',
                              type: 'array',
                            },
                            uint64_val: {
                              items: { format: 'uint64', type: 'string' },
                              title: 'DT_UINT64',
                              type: 'array',
                            },
                            variant_val: {
                              items: {
                                description:
                                  'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                properties: {
                                  metadata: {
                                    description: 'Portions of the object that are not Tensors.',
                                    format: 'byte',
                                    type: 'string',
                                  },
                                  tensors: {
                                    description:
                                      'Tensors contained within objects being serialized.',
                                    items: { $ref: '#/components/schemas/TensorflowTensorProto' },
                                    type: 'array',
                                  },
                                  type_name: {
                                    description: 'Name of the type of objects being serialized.',
                                    type: 'string',
                                  },
                                },
                                type: 'object',
                              },
                              title: 'DT_VARIANT',
                              type: 'array',
                            },
                            version_number: {
                              description:
                                'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                              format: 'int32',
                              type: 'integer',
                            },
                          },
                          type: 'object',
                        },
                      },
                      type: 'object',
                    },
                    meta: {
                      properties: {
                        metrics: {
                          items: {
                            properties: {
                              key: { type: 'string' },
                              type: { $ref: '#/components/schemas/MetricType' },
                              value: { format: 'float', type: 'number' },
                            },
                            type: 'object',
                          },
                          type: 'array',
                        },
                        puid: { type: 'string' },
                        requestPath: {
                          additionalProperties: { type: 'string' },
                          example: { classifier: 'seldonio/mock_classifier:1.0' },
                          type: 'object',
                        },
                        routing: {
                          additionalProperties: { format: 'int32', type: 'integer' },
                          example: { router1: 1 },
                          type: 'object',
                        },
                        tags: {
                          additionalProperties: { $ref: '#/components/schemas/AnyValue' },
                          example: { mytag: 'myvalue' },
                          type: 'object',
                        },
                      },
                      type: 'object',
                    },
                    status: {
                      properties: {
                        code: { format: 'int32', type: 'integer' },
                        info: { type: 'string' },
                        reason: { type: 'string' },
                        status: { $ref: '#/components/schemas/StatusStatusFlag' },
                      },
                      type: 'object',
                    },
                    strData: { type: 'string' },
                  },
                  type: 'object',
                },
              },
              required: [],
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'A successful response.',
      content: { 'application/json': { schema: SeldonMessageSchema } },
    },
  },
})

export const postTransformOutputRoute = createRoute({
  method: 'post',
  path: '/transform-output',
  tags: ['Internal'],
  operationId: 'TransformOutput',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              json: z
                .object({
                  binData: z.string().exactOptional(),
                  data: z
                    .object({
                      names: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional(),
                      ndarry: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            ((schema) =>
                              z.union([
                                schema,
                                z.preprocess((val) => (val === 'null' ? null : val), schema),
                              ]))(AnyValueSchema),
                          ),
                        )
                        .exactOptional(),
                      tensor: z
                        .object({
                          shape: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional(),
                          values: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      tftensor: z
                        .object({
                          bool_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z.preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_BOOL' }),
                          dcomplex_val: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real\nand imaginary parts of i-th double precision complex.',
                            }),
                          double_val: z
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
                                  z.float64(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_DOUBLE.' }),
                          dtype: TensorflowDataTypeSchema.exactOptional(),
                          float_val: z
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
                                  z.float32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_FLOAT.' }),
                          half_val: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                "DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll\nhave some pointless zero padding for each value here.",
                            }),
                          int64_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_INT64' }),
                          int_val: z
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
                                  z.int32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({ description: 'DT_INT32, DT_INT16, DT_INT8, DT_UINT8.' }),
                          resource_handle_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(TensorflowResourceHandleProtoSchema),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_RESOURCE' }),
                          scomplex_val: z
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
                                  z.float32(),
                                ),
                              ),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real\nand imaginary parts of i-th single precision complex.',
                            }),
                          string_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_STRING' }),
                          tensor_content: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Serialized raw tensor content from either Tensor::AsProtoTensorContent or\nmemcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation\ncan be used for all tensor types. The purpose of this representation is to\nreduce serialization overhead during RPC call by avoiding serialization of\nmany repeated small items.',
                            }),
                          tensor_shape: z
                            .object({
                              dim: z
                                .preprocess(
                                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                  z.array(TensorShapeProtoDimSchema),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Dimensions of the tensor, such as {"input", 30}, {"output", 40}\nfor a 30 x 40 2D tensor.  If an entry has size -1, this\ncorresponds to a dimension of unknown size. The names are\noptional.\n\nThe order of entries in "dim" matters: It indicates the layout of the\nvalues in the tensor in-memory representation.\n\nThe first entry in "dim" is the outermost dimension used to layout the\nvalues, the last entry is the innermost dimension.  This matches the\nin-memory layout of RowMajor Eigen tensors.\n\nIf "dim.size()" > 0, "unknown_rank" must be false.',
                                }),
                              unknown_rank: z
                                .preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'If true, the number of dimensions in the shape is unknown.\n\nIf true, "dim.size()" must be 0.',
                                }),
                            })
                            .exactOptional()
                            .openapi({ description: 'Dimensions of a tensor.', required: [] }),
                          uint32_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z
                                  .preprocess((val) => {
                                    if (
                                      typeof val !== 'string' ||
                                      !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                    )
                                      return val
                                    if (/^-?\d+$/.test(val)) return BigInt(val)
                                    const num = Number(val)
                                    return Number.isSafeInteger(num) ? BigInt(num) : val
                                  }, z.int64())
                                  .openapi({ type: 'integer', format: 'int64' }),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_UINT32' }),
                          uint64_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(z.string()),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_UINT64' }),
                          variant_val: z
                            .preprocess(
                              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                              z.array(
                                z
                                  .object({
                                    metadata: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description: 'Portions of the object that are not Tensors.',
                                      }),
                                    tensors: z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(TensorflowTensorProtoSchema),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Tensors contained within objects being serialized.',
                                      }),
                                    type_name: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'Name of the type of objects being serialized.',
                                      }),
                                  })
                                  .openapi({
                                    description:
                                      'Protocol buffer representing the serialization format of DT_VARIANT tensors.',
                                    required: [],
                                  }),
                              ),
                            )
                            .exactOptional()
                            .openapi({ title: 'DT_VARIANT' }),
                          version_number: z
                            .preprocess(
                              (val) =>
                                typeof val === 'string' &&
                                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                  ? Number(val)
                                  : val,
                              z.int32(),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Version number.\n\nIn version 0, if the "repeated xxx" representations contain only one\nelement, that element is repeated to fill the shape.  This makes it easy\nto represent a constant Tensor with a single value.',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Protocol buffer representing a tensor.',
                          required: [],
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  meta: z
                    .object({
                      metrics: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                key: z.string().exactOptional(),
                                type: MetricTypeSchema.exactOptional(),
                                value: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.float32(),
                                  )
                                  .exactOptional(),
                              })
                              .openapi({ required: [] }),
                          ),
                        )
                        .exactOptional(),
                      puid: z.string().exactOptional(),
                      requestPath: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({ example: { classifier: 'seldonio/mock_classifier:1.0' } }),
                      routing: z
                        .record(
                          z.string(),
                          z.preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          ),
                        )
                        .exactOptional()
                        .openapi({ example: { router1: 1 } }),
                      tags: z
                        .record(
                          z.string(),
                          ((schema) =>
                            z.union([
                              schema,
                              z.preprocess((val) => (val === 'null' ? null : val), schema),
                            ]))(AnyValueSchema),
                        )
                        .exactOptional()
                        .openapi({ example: { mytag: 'myvalue' } }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  status: z
                    .object({
                      code: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .exactOptional(),
                      info: z.string().exactOptional(),
                      reason: z.string().exactOptional(),
                      status: StatusStatusFlagSchema.exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  strData: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          encoding: { json: { contentType: 'application/json' } },
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
})
