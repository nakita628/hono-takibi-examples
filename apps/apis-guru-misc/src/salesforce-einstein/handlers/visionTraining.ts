import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2VisionTrainModelIdRoute,
  postV2VisionRetrainRoute,
  postV2VisionTrainRoute,
} from '../routes'

const app = new OpenAPIHono()

export const visionTrainingHandler = app
  .openapi(postV2VisionRetrainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VisionTrainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VisionTrainModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
