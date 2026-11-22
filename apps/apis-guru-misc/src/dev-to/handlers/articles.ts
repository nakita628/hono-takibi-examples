import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiArticlesIdRoute,
  getApiArticlesLatestRoute,
  getApiArticlesMeAllRoute,
  getApiArticlesMePublishedRoute,
  getApiArticlesMeRoute,
  getApiArticlesMeUnpublishedRoute,
  getApiArticlesRoute,
  getApiArticlesUsernameSlugRoute,
  postApiArticlesRoute,
  putApiArticlesIdRoute,
  putApiArticlesIdUnpublishRoute,
} from '../routes'

const app = new OpenAPIHono()

export const articlesHandler = app
  .openapi(getApiArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticlesLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticlesMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticlesMeAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticlesMePublishedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticlesMeUnpublishedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticlesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiArticlesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiArticlesIdUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticlesUsernameSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
