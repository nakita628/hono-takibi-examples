import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceStartSegmentDetectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceStartSegmentDetectionHandler = app.openapi(
  postXAmzTargetRekognitionServiceStartSegmentDetectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
