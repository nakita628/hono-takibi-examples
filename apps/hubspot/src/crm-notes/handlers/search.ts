import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609NotesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609NotesSearchRoute, (c) => {
  throw new Error('Not implemented')
})
