import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeNotesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeNotesHandler = app.openapi(getRepositorySearchTypeNotesRoute, (c) => {
  throw new Error('Not implemented')
})
