import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceListCollectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceListCollectionsHandler = app.openapi(
  postXAmzTargetRekognitionServiceListCollectionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
