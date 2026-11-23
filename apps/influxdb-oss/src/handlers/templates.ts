import { OpenAPIHono } from '@hono/zod-openapi'
import { postTemplatesApplyRoute, postTemplatesExportRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(postTemplatesApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesExportRoute, (c) => {
    throw new Error('Not implemented')
  })
