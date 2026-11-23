import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCategoriesKeywordsIdKeywordRoute,
  getCategoriesRoute,
  postCategoriesKeywordsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(getCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCategoriesKeywordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCategoriesKeywordsIdKeywordRoute, (c) => {
    throw new Error('Not implemented')
  })
