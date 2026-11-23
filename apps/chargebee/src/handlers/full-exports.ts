import { OpenAPIHono } from '@hono/zod-openapi'
import { getFullExportsStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const fullExportsHandler = app.openapi(getFullExportsStatusRoute, (c) => {
  throw new Error('Not implemented')
})
