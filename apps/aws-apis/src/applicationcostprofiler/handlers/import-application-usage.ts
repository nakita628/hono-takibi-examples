import { OpenAPIHono } from '@hono/zod-openapi'
import { postImportApplicationUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const importApplicationUsageHandler = app.openapi(postImportApplicationUsageRoute, (c) => {
  throw new Error('Not implemented')
})
