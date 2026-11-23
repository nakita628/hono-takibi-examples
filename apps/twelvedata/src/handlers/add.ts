import { OpenAPIHono } from '@hono/zod-openapi'
import { getAddRoute } from '../routes'

const app = new OpenAPIHono()

export const addHandler = app.openapi(getAddRoute, (c) => {
  throw new Error('Not implemented')
})
