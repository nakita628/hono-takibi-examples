import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListAutoMLJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListAutoMLJobsHandler = app.openapi(
  postXAmzTargetSageMakerListAutoMLJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
