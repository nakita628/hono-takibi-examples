import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerDescribeSecretRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerDescribeSecretHandler = app.openapi(
  postXAmzTargetSecretsmanagerDescribeSecretRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
