import { OpenAPIHono } from '@hono/zod-openapi'
import { getIdentityRoute, patchIdentityRoute } from '../routes'

const app = new OpenAPIHono()

export const identityIdentityContainerHandler = app
  .openapi(getIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
