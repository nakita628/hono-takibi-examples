import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiArticleRoute,
  getApiArticleArticleIDRoute,
  getApiArticleGetAddonsRoute,
  getApiArticleGymArticleArticleIdGymIdRoute,
  getApiArticleMeasureUnitsRoute,
  getApiArticleRevenueAccountsRoute,
  getApiArticleSearchRoute,
  postApiArticleMeasureUnitRoute,
  postApiArticleRoute,
  putApiArticleArticleGymDetailsRoute,
  putApiArticleRoute,
  putApiArticleUpdateStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const articleHandler = app
  .openapi(deleteApiArticleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiArticleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiArticleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiArticleArticleGymDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticleGetAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticleGymArticleArticleIdGymIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiArticleMeasureUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticleMeasureUnitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticleRevenueAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticleSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiArticleUpdateStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArticleArticleIDRoute, (c) => {
    throw new Error('Not implemented')
  })
