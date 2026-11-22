import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeLocalfilesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeLocalfilesHandler = app.openapi(getRepositorySearchTypeLocalfilesRoute, (c) => {
  throw new Error('Not implemented')
})
