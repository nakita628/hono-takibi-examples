import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceCreateSecurityConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceCreateSecurityConfigurationHandler = app.openapi(
  postXAmzTargetElasticMapReduceCreateSecurityConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
