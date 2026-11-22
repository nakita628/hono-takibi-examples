import { OpenAPIHono } from '@hono/zod-openapi'
import { getListsFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const listsFormatHandler = app.openapi(getListsFormatRoute, (c) => {
  throw new Error('Not implemented')
})
