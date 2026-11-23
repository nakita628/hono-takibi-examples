import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getArticlesArticleIdFilesFileIdRoute,
  getArticlesArticleIdFilesRoute,
  getArticlesArticleIdRoute,
  getArticlesArticleIdVersionsRoute,
  getArticlesArticleIdVersionsVNumberConfidentialityRoute,
  getArticlesArticleIdVersionsVNumberEmbargoRoute,
  getArticlesArticleIdVersionsVNumberRoute,
  getArticlesRoute,
  postArticlesSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const articlesHandler = app
  .openapi(getArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postArticlesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesArticleIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesArticleIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesArticleIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesArticleIdVersionsVNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesArticleIdVersionsVNumberConfidentialityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticlesArticleIdVersionsVNumberEmbargoRoute, (c) => {
    throw new Error('Not implemented')
  })
