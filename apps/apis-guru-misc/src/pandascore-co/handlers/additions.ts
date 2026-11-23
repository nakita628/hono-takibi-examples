import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdditionsRoute } from '../routes'

const app = new OpenAPIHono()

export const additionsHandler = app.openapi(getAdditionsRoute, (c) => {
  throw new Error('Not implemented')
})
