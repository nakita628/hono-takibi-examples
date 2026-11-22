import { OpenAPIHono } from '@hono/zod-openapi'
import { getCertificateBasedAuthConfigurationCountRoute } from '../routes'

const app = new OpenAPIHono()

export const certificateBasedAuthConfigurationHandler = app.openapi(
  getCertificateBasedAuthConfigurationCountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
