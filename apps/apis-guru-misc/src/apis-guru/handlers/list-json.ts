import { OpenAPIHono } from '@hono/zod-openapi'
import { getListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const listJsonHandler = app.openapi(getListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
