import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceDeleteCollectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceDeleteCollectionHandler = app.openapi(
  postXAmzTargetRekognitionServiceDeleteCollectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
