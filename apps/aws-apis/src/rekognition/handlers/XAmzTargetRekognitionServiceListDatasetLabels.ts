import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceListDatasetLabelsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceListDatasetLabelsHandler = app.openapi(
  postXAmzTargetRekognitionServiceListDatasetLabelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
