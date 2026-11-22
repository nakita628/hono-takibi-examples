import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceCreateSecurityConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceCreateSecurityConfigurationHandler = app.openapi(
  postXAmzTargetElasticMapReduceCreateSecurityConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
