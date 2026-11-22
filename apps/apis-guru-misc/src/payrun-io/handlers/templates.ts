import { OpenAPIHono } from '@hono/zod-openapi'
import { getTemplateDtoDataTypeRoute, getTemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getTemplateDtoDataTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
