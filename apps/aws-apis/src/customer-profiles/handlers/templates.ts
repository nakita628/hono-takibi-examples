import { OpenAPIHono } from '@hono/zod-openapi'
import { getTemplatesRoute, getTemplatesTemplateIdRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
