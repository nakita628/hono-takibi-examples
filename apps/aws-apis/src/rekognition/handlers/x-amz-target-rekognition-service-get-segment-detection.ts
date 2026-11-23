import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceGetSegmentDetectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRekognitionServiceGetSegmentDetectionHandler = app.openapi(
  postXAmzTargetRekognitionServiceGetSegmentDetectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
