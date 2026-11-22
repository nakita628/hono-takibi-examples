import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceGetBlockPublicAccessConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceGetBlockPublicAccessConfigurationHandler = app.openapi(
  postXAmzTargetElasticMapReduceGetBlockPublicAccessConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
