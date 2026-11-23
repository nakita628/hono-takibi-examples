import { OpenAPIHono } from '@hono/zod-openapi'
import { postExportUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const exportHandler = app.openapi(postExportUsersRoute, (c) => {
  throw new Error('Not implemented')
})
