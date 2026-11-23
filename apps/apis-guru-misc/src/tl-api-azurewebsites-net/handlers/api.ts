import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiArticleRoute,
  deleteApiPackageRoute,
  getApiArticleArticleIDRoute,
  getApiArticleGetAddonsRoute,
  getApiArticleGymArticleArticleIdGymIdRoute,
  getApiArticleMeasureUnitsRoute,
  getApiArticleRevenueAccountsRoute,
  getApiArticleSearchRoute,
  getApiGymGymIDRoute,
  getApiMembershipRoute,
  getApiPackageRoute,
  getApiPackageSearchRoute,
  getApiStatusRoute,
  getApiTestRoute,
  getApiUserRoute,
  postApiArticleMeasureUnitRoute,
  postApiArticleRoute,
  postApiAuthLoginRoute,
  postApiMembershipRoute,
  postApiPackageRoute,
  postApiUserRegisterUserRoute,
  putApiArticleArticleGymDetailsRoute,
  putApiArticleRoute,
  putApiArticleUpdateStatusRoute,
  putApiPackageRoute,
  putApiPackageUpdateStatusRoute,
  putApiUserUpdateuserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
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
  .openapi(postApiAuthLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGymGymIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMembershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPackageSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPackageUpdateStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserRegisterUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUserUpdateuserRoute, (c) => {
    throw new Error('Not implemented')
  })
