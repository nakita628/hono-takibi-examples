import { OpenAPIHono } from '@hono/zod-openapi'
import { postJSONtoHTMLRoute } from '../routes'

const app = new OpenAPIHono()

export const jsoNtoHtmlHandler = app.openapi(postJSONtoHTMLRoute, (c) => {
  throw new Error('Not implemented')
})
