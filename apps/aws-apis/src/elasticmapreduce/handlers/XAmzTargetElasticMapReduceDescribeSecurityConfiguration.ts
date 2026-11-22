import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceDescribeSecurityConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceDescribeSecurityConfigurationHandler = app.openapi(
  postXAmzTargetElasticMapReduceDescribeSecurityConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
