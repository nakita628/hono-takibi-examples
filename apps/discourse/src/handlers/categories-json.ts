import { OpenAPIHono } from '@hono/zod-openapi'
import { getCategoriesJsonRoute, postCategoriesJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesJsonHandler = app
  .openapi(postCategoriesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
