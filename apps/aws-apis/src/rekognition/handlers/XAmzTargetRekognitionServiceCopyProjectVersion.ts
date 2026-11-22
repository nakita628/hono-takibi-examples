import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceCopyProjectVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceCopyProjectVersionHandler = app.openapi(
  postXAmzTargetRekognitionServiceCopyProjectVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
