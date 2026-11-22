import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceCreateDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceCreateDatasetHandler = app.openapi(
  postXAmzTargetRekognitionServiceCreateDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
