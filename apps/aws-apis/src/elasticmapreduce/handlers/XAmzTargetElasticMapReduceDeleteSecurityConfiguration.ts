import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceDeleteSecurityConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceDeleteSecurityConfigurationHandler = app.openapi(
  postXAmzTargetElasticMapReduceDeleteSecurityConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
