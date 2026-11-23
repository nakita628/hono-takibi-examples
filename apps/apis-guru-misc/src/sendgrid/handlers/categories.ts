import { OpenAPIHono } from '@hono/zod-openapi'
import { getCategoriesRoute, getCategoriesStatsRoute, getCategoriesStatsSumsRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(getCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesStatsSumsRoute, (c) => {
    throw new Error('Not implemented')
  })
