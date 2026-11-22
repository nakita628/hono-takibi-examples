import { OpenAPIHono } from '@hono/zod-openapi'
import { getCategoriesCategoryGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesGroupsHandler = app.openapi(getCategoriesCategoryGroupsRoute, (c) => {
  throw new Error('Not implemented')
})
