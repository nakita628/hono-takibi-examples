import { OpenAPIHono } from '@hono/zod-openapi'
import { getRangeNumbytesRoute } from '../routes'

const app = new OpenAPIHono()

export const rangeHandler = app.openapi(getRangeNumbytesRoute, (c) => {
  throw new Error('Not implemented')
})
