import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositoryEntryShowRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceMediaTabularExtractsheetHandler = app.openapi(
  getRepositoryEntryShowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
