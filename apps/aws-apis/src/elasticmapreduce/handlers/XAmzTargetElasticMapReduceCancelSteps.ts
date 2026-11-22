import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceCancelStepsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceCancelStepsHandler = app.openapi(
  postXAmzTargetElasticMapReduceCancelStepsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
