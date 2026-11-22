import { OpenAPIHono } from '@hono/zod-openapi'
import { getListsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const listsHandler = app.openapi(getListsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
