import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListAutoMLJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListAutoMlJobsHandler = app.openapi(
  postXAmzTargetSageMakerListAutoMLJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
