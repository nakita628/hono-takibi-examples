import { OpenAPIHono } from '@hono/zod-openapi'
import { getProfileActiveRoute, getProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const profileHandler = app
  .openapi(getProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfileActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
