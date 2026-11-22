import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDCardNameRoute } from '../routes'

const app = new OpenAPIHono()

export const cardNameHandler = app.openapi(getUserUserIDCardNameRoute, (c) => {
  throw new Error('Not implemented')
})
