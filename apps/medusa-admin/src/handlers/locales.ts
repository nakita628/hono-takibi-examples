import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminLocalesCodeRoute, getAdminLocalesRoute } from '../routes'

const app = new OpenAPIHono()

export const localesHandler = app
  .openapi(getAdminLocalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminLocalesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
