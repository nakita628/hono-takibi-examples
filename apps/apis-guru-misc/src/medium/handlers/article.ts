import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getArticleArticleIdContentRoute,
  getArticleArticleIdFansRoute,
  getArticleArticleIdMarkdownRoute,
  getArticleArticleIdRelatedRoute,
  getArticleArticleIdResponsesRoute,
  getArticleArticleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const articleHandler = app
  .openapi(getArticleArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticleArticleIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticleArticleIdFansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticleArticleIdMarkdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticleArticleIdRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArticleArticleIdResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
