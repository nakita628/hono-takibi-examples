import { OpenAPIHono } from '@hono/zod-openapi'
import { postFileOperationsListRoute } from '../routes'

const app = new OpenAPIHono()

export const fileOperationsListHandler = app.openapi(postFileOperationsListRoute, (c) => {
  throw new Error('Not implemented')
})
