import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiMailServicePvtProvidersEmailProviderDkimRoute } from '../routes'

const app = new OpenAPIHono()

export const dkimConfigurationHandler = app.openapi(
  postApiMailServicePvtProvidersEmailProviderDkimRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
