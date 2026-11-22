import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReducePutBlockPublicAccessConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReducePutBlockPublicAccessConfigurationHandler = app.openapi(
  postXAmzTargetElasticMapReducePutBlockPublicAccessConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
