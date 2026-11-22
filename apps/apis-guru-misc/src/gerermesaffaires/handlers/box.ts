import { OpenAPIHono } from '@hono/zod-openapi'
import { getBoxMenusRoute } from '../routes'

const app = new OpenAPIHono()

export const boxHandler = app.openapi(getBoxMenusRoute, (c) => {
  throw new Error('Not implemented')
})
