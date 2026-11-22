import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminRoute, patchAdminRoute } from '../routes'

const app = new OpenAPIHono()

export const adminAdminHandler = app
  .openapi(getAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
