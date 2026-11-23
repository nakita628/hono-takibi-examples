import { OpenAPIHono } from '@hono/zod-openapi'
import { postTemplatesRestoreRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesRestoreHandler = app.openapi(postTemplatesRestoreRoute, (c) => {
  throw new Error('Not implemented')
})
