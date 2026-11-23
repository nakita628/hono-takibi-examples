import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceCreateDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceCreateDatasetHandler = app.openapi(
  postXAmzTargetRekognitionServiceCreateDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
