import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceCreateFaceLivenessSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceCreateFaceLivenessSessionHandler = app.openapi(
  postXAmzTargetRekognitionServiceCreateFaceLivenessSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
