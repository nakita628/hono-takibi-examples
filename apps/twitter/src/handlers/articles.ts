import { OpenAPIHono } from '@hono/zod-openapi'
import { post2ArticlesArticleIdPublishRoute, post2ArticlesDraftRoute } from '../routes'

const app = new OpenAPIHono()

export const articlesHandler = app
  .openapi(post2ArticlesDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ArticlesArticleIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
