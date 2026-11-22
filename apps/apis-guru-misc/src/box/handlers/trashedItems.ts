import { OpenAPIHono } from '@hono/zod-openapi'
import { getFoldersTrashItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const trashedItemsHandler = app.openapi(getFoldersTrashItemsRoute, (c) => {
  throw new Error('Not implemented')
})
