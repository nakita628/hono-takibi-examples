import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteShareholdersRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteShareholdersHandler = app.openapi(postDeleteShareholdersRoute, (c) => {
  throw new Error('Not implemented')
})
