import { OpenAPIHono } from '@hono/zod-openapi'
import { getNumbersPiRoute } from '../routes'

const app = new OpenAPIHono()

export const piHandler = app.openapi(getNumbersPiRoute, (c) => {
  throw new Error('Not implemented')
})
