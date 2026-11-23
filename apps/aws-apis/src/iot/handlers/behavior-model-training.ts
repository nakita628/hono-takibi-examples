import { OpenAPIHono } from '@hono/zod-openapi'
import { getBehaviorModelTrainingSummariesRoute } from '../routes'

const app = new OpenAPIHono()

export const behaviorModelTrainingHandler = app.openapi(
  getBehaviorModelTrainingSummariesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
