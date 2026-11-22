import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceSetTerminationProtectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceSetTerminationProtectionHandler = app.openapi(
  postXAmzTargetElasticMapReduceSetTerminationProtectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
