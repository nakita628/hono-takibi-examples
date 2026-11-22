import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServicePutProjectPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServicePutProjectPolicyHandler = app.openapi(
  postXAmzTargetRekognitionServicePutProjectPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
