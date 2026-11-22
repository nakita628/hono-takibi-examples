import { OpenAPIHono } from '@hono/zod-openapi'
import { getUrlInfoRoute, postBrowserBotRoute, postHtmlCleanRoute } from '../routes'

const app = new OpenAPIHono()

export const wwwHandler = app
  .openapi(postBrowserBotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHtmlCleanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUrlInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
