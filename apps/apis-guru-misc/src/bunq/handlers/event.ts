import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDEventItemIdRoute, getUserUserIDEventRoute } from '../routes'

const app = new OpenAPIHono()

export const eventHandler = app
  .openapi(getUserUserIDEventRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDEventItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
