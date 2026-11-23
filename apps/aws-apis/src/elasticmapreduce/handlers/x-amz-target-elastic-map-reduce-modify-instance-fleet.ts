import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceModifyInstanceFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceModifyInstanceFleetHandler = app.openapi(
  postXAmzTargetElasticMapReduceModifyInstanceFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
