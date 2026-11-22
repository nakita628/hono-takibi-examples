import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmAddFsRoute } from '../routes'

const app = new OpenAPIHono()

export const vmAddFsHandler = app.openapi(putVmAddFsRoute, (c) => {
  throw new Error('Not implemented')
})
