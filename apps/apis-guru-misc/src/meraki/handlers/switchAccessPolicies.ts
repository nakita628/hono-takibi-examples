import { OpenAPIHono } from '@hono/zod-openapi'
import { getNetworksNetworkIdAccessPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const switchAccessPoliciesHandler = app.openapi(
  getNetworksNetworkIdAccessPoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
