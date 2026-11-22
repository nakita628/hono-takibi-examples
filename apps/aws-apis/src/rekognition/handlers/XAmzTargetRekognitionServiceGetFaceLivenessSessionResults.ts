import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceGetFaceLivenessSessionResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceGetFaceLivenessSessionResultsHandler = app.openapi(
  postXAmzTargetRekognitionServiceGetFaceLivenessSessionResultsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
