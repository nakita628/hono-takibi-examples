import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDetectModerationLabelsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceDetectModerationLabelsHandler = app.openapi(
  postXAmzTargetRekognitionServiceDetectModerationLabelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
