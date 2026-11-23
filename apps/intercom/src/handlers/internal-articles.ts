import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInternalArticlesInternalArticleIdRoute,
  deleteInternalArticlesInternalArticleIdTagsIdRoute,
  getInternalArticlesInternalArticleIdRoute,
  getInternalArticlesRoute,
  getInternalArticlesSearchRoute,
  postInternalArticlesInternalArticleIdTagsRoute,
  postInternalArticlesRoute,
  putInternalArticlesInternalArticleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const internalArticlesHandler = app
  .openapi(getInternalArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInternalArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternalArticlesInternalArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInternalArticlesInternalArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInternalArticlesInternalArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInternalArticlesInternalArticleIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInternalArticlesInternalArticleIdTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternalArticlesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
