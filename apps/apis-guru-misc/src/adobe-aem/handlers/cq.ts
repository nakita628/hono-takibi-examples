import { OpenAPIHono } from '@hono/zod-openapi'
import { getLibsGraniteCoreContentLoginHtmlRoute, postCqactionsHtmlRoute } from '../routes'

const app = new OpenAPIHono()

export const cqHandler = app
  .openapi(postCqactionsHtmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLibsGraniteCoreContentLoginHtmlRoute, (c) => {
    throw new Error('Not implemented')
  })
