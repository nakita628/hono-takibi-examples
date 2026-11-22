import { OpenAPIHono } from '@hono/zod-openapi'
import { getTenantIDMeOwnedObjectsRoute, getTenantIDMeRoute } from '../routes'

const app = new OpenAPIHono()

export const signedInUserHandler = app
  .openapi(getTenantIDMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDMeOwnedObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
