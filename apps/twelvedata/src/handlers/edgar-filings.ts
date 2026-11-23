import { OpenAPIHono } from '@hono/zod-openapi'
import { getEdgarFilingsArchiveRoute } from '../routes'

const app = new OpenAPIHono()

export const edgarFilingsHandler = app.openapi(getEdgarFilingsArchiveRoute, (c) => {
  throw new Error('Not implemented')
})
