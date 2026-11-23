import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceGetBlockPublicAccessConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceGetBlockPublicAccessConfigurationHandler = app.openapi(
  postXAmzTargetElasticMapReduceGetBlockPublicAccessConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
