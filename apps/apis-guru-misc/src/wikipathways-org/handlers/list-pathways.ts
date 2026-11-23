import { OpenAPIHono } from '@hono/zod-openapi'
import { getListPathwaysRoute } from '../routes'

const app = new OpenAPIHono()

export const listPathwaysHandler = app.openapi(getListPathwaysRoute, (c) => {
  throw new Error('Not implemented')
})
