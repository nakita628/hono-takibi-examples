import { OpenAPIHono } from '@hono/zod-openapi'
import { postProjectsProjectIdRollbackRoute } from '../routes'

const app = new OpenAPIHono()

export const rollbackHandler = app.openapi(postProjectsProjectIdRollbackRoute, (c) => {
  throw new Error('Not implemented')
})
