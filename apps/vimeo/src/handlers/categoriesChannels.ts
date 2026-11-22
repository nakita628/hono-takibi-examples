import { OpenAPIHono } from '@hono/zod-openapi'
import { getCategoriesCategoryChannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesChannelsHandler = app.openapi(getCategoriesCategoryChannelsRoute, (c) => {
  throw new Error('Not implemented')
})
