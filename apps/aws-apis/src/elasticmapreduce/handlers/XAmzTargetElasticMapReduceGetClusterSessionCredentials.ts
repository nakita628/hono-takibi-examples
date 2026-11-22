import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceGetClusterSessionCredentialsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceGetClusterSessionCredentialsHandler = app.openapi(
  postXAmzTargetElasticMapReduceGetClusterSessionCredentialsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
