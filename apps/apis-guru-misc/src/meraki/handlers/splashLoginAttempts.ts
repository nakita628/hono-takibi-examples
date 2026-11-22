import { OpenAPIHono } from '@hono/zod-openapi'
import { getNetworksNetworkIdSplashLoginAttemptsRoute } from '../routes'

const app = new OpenAPIHono()

export const splashLoginAttemptsHandler = app.openapi(
  getNetworksNetworkIdSplashLoginAttemptsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
