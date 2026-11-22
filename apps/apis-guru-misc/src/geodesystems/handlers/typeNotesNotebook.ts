import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeNotesNotebookRoute } from '../routes'

const app = new OpenAPIHono()

export const typeNotesNotebookHandler = app.openapi(
  getRepositorySearchTypeNotesNotebookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
