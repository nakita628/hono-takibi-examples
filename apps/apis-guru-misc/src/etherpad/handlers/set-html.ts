import { OpenAPIHono } from '@hono/zod-openapi'
import { getSetHTMLRoute, postSetHTMLRoute } from '../routes'

const app = new OpenAPIHono()

export const setHtmlHandler = app
  .openapi(getSetHTMLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetHTMLRoute, (c) => {
    throw new Error('Not implemented')
  })
