import { OpenAPIHono } from '@hono/zod-openapi'
import { deletePitRoute } from '../routes'

const app = new OpenAPIHono()

export const pitHandler = app.openapi(deletePitRoute, (c) => {
  throw new Error('Not implemented')
})
