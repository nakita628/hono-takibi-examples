import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeDevicePolicyConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const describeDevicePolicyConfigurationHandler = app.openapi(
  postDescribeDevicePolicyConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
