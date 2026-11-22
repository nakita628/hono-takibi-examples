import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectFieldnoteRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectFieldnoteHandler = app.openapi(
  getRepositorySearchTypeProjectFieldnoteRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
