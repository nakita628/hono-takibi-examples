import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceCreateCollectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceCreateCollectionHandler = app.openapi(
  postXAmzTargetRekognitionServiceCreateCollectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
