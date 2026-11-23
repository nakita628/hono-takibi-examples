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
} from './routes'
import {
  deleteApiArticleRouteHandler,
  deleteApiPackageRouteHandler,
  getApiArticleArticleIDRouteHandler,
  getApiArticleGetAddonsRouteHandler,
  getApiArticleGymArticleArticleIdGymIdRouteHandler,
  getApiArticleMeasureUnitsRouteHandler,
  getApiArticleRevenueAccountsRouteHandler,
  getApiArticleSearchRouteHandler,
  getApiGymGymIDRouteHandler,
  getApiMembershipRouteHandler,
  getApiPackageRouteHandler,
  getApiPackageSearchRouteHandler,
  getApiStatusRouteHandler,
  getApiTestRouteHandler,
  getApiUserRouteHandler,
  postApiArticleMeasureUnitRouteHandler,
  postApiArticleRouteHandler,
  postApiAuthLoginRouteHandler,
  postApiMembershipRouteHandler,
  postApiPackageRouteHandler,
  postApiUserRegisterUserRouteHandler,
  putApiArticleArticleGymDetailsRouteHandler,
  putApiArticleRouteHandler,
  putApiArticleUpdateStatusRouteHandler,
  putApiPackageRouteHandler,
  putApiPackageUpdateStatusRouteHandler,
  putApiUserUpdateuserRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteApiArticleRoute, deleteApiArticleRouteHandler)
  .openapi(postApiArticleRoute, postApiArticleRouteHandler)
  .openapi(putApiArticleRoute, putApiArticleRouteHandler)
  .openapi(putApiArticleArticleGymDetailsRoute, putApiArticleArticleGymDetailsRouteHandler)
  .openapi(getApiArticleGetAddonsRoute, getApiArticleGetAddonsRouteHandler)
  .openapi(
    getApiArticleGymArticleArticleIdGymIdRoute,
    getApiArticleGymArticleArticleIdGymIdRouteHandler,
  )
  .openapi(postApiArticleMeasureUnitRoute, postApiArticleMeasureUnitRouteHandler)
  .openapi(getApiArticleMeasureUnitsRoute, getApiArticleMeasureUnitsRouteHandler)
  .openapi(getApiArticleRevenueAccountsRoute, getApiArticleRevenueAccountsRouteHandler)
  .openapi(getApiArticleSearchRoute, getApiArticleSearchRouteHandler)
  .openapi(putApiArticleUpdateStatusRoute, putApiArticleUpdateStatusRouteHandler)
  .openapi(getApiArticleArticleIDRoute, getApiArticleArticleIDRouteHandler)
  .openapi(postApiAuthLoginRoute, postApiAuthLoginRouteHandler)
  .openapi(getApiGymGymIDRoute, getApiGymGymIDRouteHandler)
  .openapi(getApiMembershipRoute, getApiMembershipRouteHandler)
  .openapi(postApiMembershipRoute, postApiMembershipRouteHandler)
  .openapi(deleteApiPackageRoute, deleteApiPackageRouteHandler)
  .openapi(getApiPackageRoute, getApiPackageRouteHandler)
  .openapi(postApiPackageRoute, postApiPackageRouteHandler)
  .openapi(putApiPackageRoute, putApiPackageRouteHandler)
  .openapi(getApiPackageSearchRoute, getApiPackageSearchRouteHandler)
  .openapi(putApiPackageUpdateStatusRoute, putApiPackageUpdateStatusRouteHandler)
  .openapi(getApiStatusRoute, getApiStatusRouteHandler)
  .openapi(getApiTestRoute, getApiTestRouteHandler)
  .openapi(getApiUserRoute, getApiUserRouteHandler)
  .openapi(postApiUserRegisterUserRoute, postApiUserRegisterUserRouteHandler)
  .openapi(putApiUserUpdateuserRoute, putApiUserUpdateuserRouteHandler)

export default app
