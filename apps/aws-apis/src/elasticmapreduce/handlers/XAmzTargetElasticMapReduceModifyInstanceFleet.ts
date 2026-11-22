import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceModifyInstanceFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceModifyInstanceFleetHandler = app.openapi(
  postXAmzTargetElasticMapReduceModifyInstanceFleetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
