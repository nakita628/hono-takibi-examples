import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceGetClusterSessionCredentialsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceGetClusterSessionCredentialsHandler = app.openapi(
  postXAmzTargetElasticMapReduceGetClusterSessionCredentialsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
