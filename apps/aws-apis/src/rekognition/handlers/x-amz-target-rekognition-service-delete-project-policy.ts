import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDeleteProjectPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceDeleteProjectPolicyHandler = app.openapi(
  postXAmzTargetRekognitionServiceDeleteProjectPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
