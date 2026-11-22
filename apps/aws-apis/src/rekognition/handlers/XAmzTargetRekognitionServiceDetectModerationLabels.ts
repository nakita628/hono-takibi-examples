import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDetectModerationLabelsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceDetectModerationLabelsHandler = app.openapi(
  postXAmzTargetRekognitionServiceDetectModerationLabelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
