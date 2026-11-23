type AnyValue = { [x: string]: unknown }
type Tensor = { shape?: number[] | undefined; values?: number[] | undefined }
type TensorflowDataType =
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
type TensorflowResourceHandleProto = {
  container?: string | undefined
  device?: string | undefined
  hash_code?: string | undefined
  maybe_type_name?: string | undefined
  name?: string | undefined
}
type TensorShapeProtoDim = { name?: string | undefined; size?: string | undefined }
type TensorflowTensorShapeProto = {
  dim?: TensorShapeProtoDim[] | undefined
  unknown_rank?: boolean | undefined
}
type TensorflowVariantTensorDataProto = {
  metadata?: string | undefined
  tensors?: TensorflowTensorProto[] | undefined
  type_name?: string | undefined
}
type TensorflowTensorProto = {
  bool_val?: boolean[] | undefined
  dcomplex_val?: number[] | undefined
  double_val?: number[] | undefined
  dtype?: TensorflowDataType | undefined
  float_val?: number[] | undefined
  half_val?: number[] | undefined
  int64_val?: string[] | undefined
  int_val?: number[] | undefined
  resource_handle_val?: TensorflowResourceHandleProto[] | undefined
  scomplex_val?: number[] | undefined
  string_val?: string[] | undefined
  tensor_content?: string | undefined
  tensor_shape?: TensorflowTensorShapeProto | undefined
  uint32_val?: bigint[] | undefined
  uint64_val?: string[] | undefined
  variant_val?: TensorflowVariantTensorDataProto[] | undefined
  version_number?: number | undefined
}
type DefaultData = {
  names?: string[] | undefined
  ndarry?: AnyValue[] | undefined
  tensor?: Tensor | undefined
  tftensor?: TensorflowTensorProto | undefined
}
type MetricType = 'COUNTER' | 'GAUGE' | 'TIMER'
type Metric = {
  key?: string | undefined
  type?: MetricType | undefined
  value?: number | undefined
}
type Meta = {
  metrics?: Metric[] | undefined
  puid?: string | undefined
  requestPath?: { [x: string]: string } | undefined
  routing?: { [x: string]: number } | undefined
  tags?: { [x: string]: AnyValue } | undefined
}
type StatusStatusFlag = 'SUCCESS' | 'FAILURE'
type Status = {
  code?: number | undefined
  info?: string | undefined
  reason?: string | undefined
  status?: StatusStatusFlag | undefined
}
type SeldonMessage = {
  binData?: string | undefined
  data?: DefaultData | undefined
  meta?: Meta | undefined
  status?: Status | undefined
  strData?: string | undefined
}
type SeldonMessageList = { seldonMessages?: SeldonMessage[] | undefined }
type Feedback = {
  request?: SeldonMessage | undefined
  response?: SeldonMessage | undefined
  reward?: number | undefined
  truth?: SeldonMessage | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/aggregate': {
      $get: {
        input: { query: { body: SeldonMessageList } }
        output: SeldonMessage
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { json?: SeldonMessageList | undefined } } & {
          form: { json?: SeldonMessageList | undefined }
        }
        output: SeldonMessage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/predict': {
      $get: {
        input: { query: { json: SeldonMessage } }
        output: SeldonMessage
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { json?: SeldonMessage | undefined } } & {
          form: { json?: SeldonMessage | undefined }
        }
        output: SeldonMessage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/route': {
      $get: {
        input: { query: { json: SeldonMessage } }
        output: SeldonMessage
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { json?: SeldonMessage | undefined } } & {
          form: { json?: SeldonMessage | undefined }
        }
        output: SeldonMessage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/send-feedback': {
      $get: {
        input: { query: { json: Feedback } }
        output: SeldonMessage
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { json?: Feedback | undefined } } & { form: { json?: Feedback | undefined } }
        output: SeldonMessage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/transform-input': {
      $get: {
        input: { query: { json: SeldonMessage } }
        output: SeldonMessage
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { json?: SeldonMessage | undefined } } & {
          form: { json?: SeldonMessage | undefined }
        }
        output: SeldonMessage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/transform-output': {
      $get: {
        input: { query: { json: SeldonMessage } }
        output: SeldonMessage
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { json?: SeldonMessage | undefined } } & {
          form: { json?: SeldonMessage | undefined }
        }
        output: SeldonMessage
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
