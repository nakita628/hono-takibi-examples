import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersIdCategoryRulesRoute, postCategoriesIdCategoryRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const categoryRulesHandler = app
  .openapi(postCategoriesIdCategoryRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdCategoryRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
