import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteTokenRoute, getTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const tokenHandler = app
  .openapi(deleteTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
