import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDTreeProgressRoute } from '../routes'

const app = new OpenAPIHono()

export const treeProgressHandler = app.openapi(getUserUserIDTreeProgressRoute, (c) => {
  throw new Error('Not implemented')
})
