import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeNotesJsonfileRoute } from '../routes'

const app = new OpenAPIHono()

export const typeNotesJsonfileHandler = app.openapi(
  getRepositorySearchTypeNotesJsonfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
