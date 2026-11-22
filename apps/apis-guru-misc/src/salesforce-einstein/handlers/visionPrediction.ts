import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2VisionDetectRoute, postV2VisionOcrRoute, postV2VisionPredictRoute } from '../routes'

const app = new OpenAPIHono()

export const visionPredictionHandler = app
  .openapi(postV2VisionDetectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VisionOcrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VisionPredictRoute, (c) => {
    throw new Error('Not implemented')
  })
