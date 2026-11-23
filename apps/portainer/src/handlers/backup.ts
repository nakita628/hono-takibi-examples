import { OpenAPIHono } from '@hono/zod-openapi'
import { postBackupRoute } from '../routes'

const app = new OpenAPIHono()

export const backupHandler = app.openapi(postBackupRoute, (c) => {
  throw new Error('Not implemented')
})
