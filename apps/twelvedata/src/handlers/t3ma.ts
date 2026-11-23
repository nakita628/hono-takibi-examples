import { OpenAPIHono } from '@hono/zod-openapi'
import { getT3maRoute } from '../routes'

const app = new OpenAPIHono()

export const t3maHandler = app.openapi(getT3maRoute, (c) => {
  throw new Error('Not implemented')
})
