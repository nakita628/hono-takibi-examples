import { OpenAPIHono } from '@hono/zod-openapi'
import { getArticlesCategoriesRoute, getArticlesRoute } from '../routes'

const app = new OpenAPIHono()

export const articlesHandler = app
  .openapi(getArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
