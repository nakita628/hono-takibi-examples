import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceListSecurityConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceListSecurityConfigurationsHandler = app.openapi(
  postXAmzTargetElasticMapReduceListSecurityConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
