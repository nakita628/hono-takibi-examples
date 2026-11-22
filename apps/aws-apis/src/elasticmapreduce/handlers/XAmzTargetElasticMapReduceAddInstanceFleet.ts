import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceAddInstanceFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceAddInstanceFleetHandler = app.openapi(
  postXAmzTargetElasticMapReduceAddInstanceFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
