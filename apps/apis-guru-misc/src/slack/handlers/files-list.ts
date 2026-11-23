import { OpenAPIHono } from '@hono/zod-openapi'
import { getFilesListRoute } from '../routes'

const app = new OpenAPIHono()

export const filesListHandler = app.openapi(getFilesListRoute, (c) => {
  throw new Error('Not implemented')
})
