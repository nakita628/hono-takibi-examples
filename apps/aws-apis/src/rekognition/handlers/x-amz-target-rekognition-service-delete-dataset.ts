import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDeleteDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceDeleteDatasetHandler = app.openapi(
  postXAmzTargetRekognitionServiceDeleteDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
