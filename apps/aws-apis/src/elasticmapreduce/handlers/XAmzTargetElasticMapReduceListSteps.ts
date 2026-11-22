import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceListStepsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceListStepsHandler = app.openapi(
  postXAmzTargetElasticMapReduceListStepsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
