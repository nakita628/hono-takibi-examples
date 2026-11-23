import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceListCollectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceListCollectionsHandler = app.openapi(
  postXAmzTargetRekognitionServiceListCollectionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
