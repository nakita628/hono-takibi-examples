import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserRoute, getUserTenantsRoute, patchUserRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserTenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
