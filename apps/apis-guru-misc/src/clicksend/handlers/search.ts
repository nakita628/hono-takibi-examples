import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchContactsListsQQRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(getSearchContactsListsQQRoute, (c) => {
  throw new Error('Not implemented')
})
