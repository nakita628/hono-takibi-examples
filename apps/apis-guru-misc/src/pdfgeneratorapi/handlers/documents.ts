import { OpenAPIHono } from '@hono/zod-openapi'
import { postTemplatesOutputRoute, postTemplatesTemplateIdOutputRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(postTemplatesOutputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateIdOutputRoute, (c) => {
    throw new Error('Not implemented')
  })
