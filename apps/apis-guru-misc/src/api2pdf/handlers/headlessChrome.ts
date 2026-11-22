import { OpenAPIHono } from '@hono/zod-openapi'
import { getChromeUrlRoute, postChromeHtmlRoute, postChromeUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const headlessChromeHandler = app
  .openapi(postChromeHtmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChromeUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChromeUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
