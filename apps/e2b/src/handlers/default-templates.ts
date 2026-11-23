import { OpenAPIHono } from '@hono/zod-openapi'
import { getDefaultTemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const defaultTemplatesHandler = app.openapi(getDefaultTemplatesRoute, (c) => {
  throw new Error('Not implemented')
})
