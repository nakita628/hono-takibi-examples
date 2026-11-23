import { OpenAPIHono } from '@hono/zod-openapi'
import { getXmlRoute } from '../routes'

const app = new OpenAPIHono()

export const xmlHandler = app.openapi(getXmlRoute, (c) => {
  throw new Error('Not implemented')
})
