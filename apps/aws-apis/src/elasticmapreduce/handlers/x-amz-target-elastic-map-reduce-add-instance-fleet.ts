import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceAddInstanceFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceAddInstanceFleetHandler = app.openapi(
  postXAmzTargetElasticMapReduceAddInstanceFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
