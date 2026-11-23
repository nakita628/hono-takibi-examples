import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceCancelStepsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceCancelStepsHandler = app.openapi(
  postXAmzTargetElasticMapReduceCancelStepsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
