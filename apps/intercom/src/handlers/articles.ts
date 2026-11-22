import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteArticlesArticleIdRoute,
  deleteArticlesArticleIdTagsIdRoute,
  getArticlesArticleIdRoute,
  getArticlesArticleIdVersionsIdRoute,
  getArticlesArticleIdVersionsRoute,
  getArticlesIdDraftRoute,
  getArticlesRoute,
  getArticlesSearchRoute,
  postArticlesArticleIdTagsRoute,
  postArticlesIdDraftPublishRoute,
  postArticlesRoute,
  putArticlesArticleIdRoute,
  putArticlesIdDraftRoute,
} from '../routes'

const app = new OpenAPIHono()

export const articlesHandler = app
  .openapi(getArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putArticlesArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteArticlesArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putArticlesIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postArticlesIdDraftPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postArticlesArticleIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteArticlesArticleIdTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesArticleIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesArticleIdVersionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
