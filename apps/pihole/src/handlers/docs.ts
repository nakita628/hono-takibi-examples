import { OpenAPIHono } from '@hono/zod-openapi'
import { getDocsRoute } from '../routes'

const app = new OpenAPIHono()

export const docsHandler = app.openapi(getDocsRoute, (c) => {
  throw new Error('Not implemented')
})
