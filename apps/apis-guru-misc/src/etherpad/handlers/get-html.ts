import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetHTMLRoute, postGetHTMLRoute } from '../routes'

const app = new OpenAPIHono()

export const getHtmlHandler = app
  .openapi(getGetHTMLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetHTMLRoute, (c) => {
    throw new Error('Not implemented')
  })
