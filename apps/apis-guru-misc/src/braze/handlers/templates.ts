import { OpenAPIHono } from '@hono/zod-openapi'
import { getTemplatesEmailInfoRoute, getTemplatesEmailListRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getTemplatesEmailInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesEmailListRoute, (c) => {
    throw new Error('Not implemented')
  })
