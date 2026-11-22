import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDEventItemIdRoute, getUserUserIDEventRoute } from '../routes'

const app = new OpenAPIHono()

export const eventHandler = app
  .openapi(getUserUserIDEventItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDEventRoute, (c) => {
    throw new Error('Not implemented')
  })
