import { OpenAPIHono } from '@hono/zod-openapi'
import { getArrRoute } from '../routes'

const app = new OpenAPIHono()

export const arrHandler = app.openapi(getArrRoute, (c) => {
  throw new Error('Not implemented')
})
