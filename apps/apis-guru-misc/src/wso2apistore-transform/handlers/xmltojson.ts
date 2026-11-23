import { OpenAPIHono } from '@hono/zod-openapi'
import { postXmltojsonRoute } from '../routes'

const app = new OpenAPIHono()

export const xmltojsonHandler = app.openapi(postXmltojsonRoute, (c) => {
  throw new Error('Not implemented')
})
