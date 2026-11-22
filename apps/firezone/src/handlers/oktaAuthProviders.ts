import { OpenAPIHono } from '@hono/zod-openapi'
import { getOktaAuthProvidersIdRoute, getOktaAuthProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const oktaAuthProvidersHandler = app
  .openapi(getOktaAuthProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOktaAuthProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
