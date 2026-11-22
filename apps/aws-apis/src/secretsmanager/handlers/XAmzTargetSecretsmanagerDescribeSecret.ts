import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerDescribeSecretRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSecretsmanagerDescribeSecretHandler = app.openapi(
  postXAmzTargetSecretsmanagerDescribeSecretRoute,
  (c) => {},
)
