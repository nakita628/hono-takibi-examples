import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeIdentityProviderConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const describeIdentityProviderConfigurationHandler = app.openapi(
  postDescribeIdentityProviderConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
