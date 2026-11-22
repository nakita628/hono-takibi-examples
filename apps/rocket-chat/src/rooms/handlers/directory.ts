import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1DirectoryRoute } from '../routes'

const app = new OpenAPIHono()

export const directoryHandler = app.openapi(getApiV1DirectoryRoute, (c) => {
  throw new Error('Not implemented')
})
