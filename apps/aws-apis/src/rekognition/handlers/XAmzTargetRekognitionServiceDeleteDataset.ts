import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDeleteDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceDeleteDatasetHandler = app.openapi(
  postXAmzTargetRekognitionServiceDeleteDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
