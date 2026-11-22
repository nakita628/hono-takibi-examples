import { OpenAPIHono } from '@hono/zod-openapi'
import { getGoogleAuthProvidersIdRoute, getGoogleAuthProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const googleAuthProvidersHandler = app
  .openapi(getGoogleAuthProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGoogleAuthProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
