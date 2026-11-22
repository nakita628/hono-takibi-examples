import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateDevicePolicyConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const updateDevicePolicyConfigurationHandler = app.openapi(
  postUpdateDevicePolicyConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
