import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiDeleteRoute,
  deleteApiRatingsIdRoute,
  deleteApiRatingsRoute,
  getApiAdjectivesRoute,
  getApiBasicAuthUsernamePasswordRoute,
  getApiBytesNRoute,
  getApiConfigRoute,
  getApiCookiesRoute,
  getApiDelayDelayRoute,
  getApiDoughsRoute,
  getApiGetRoute,
  getApiHeadersRoute,
  getApiIngredientsTypeRoute,
  getApiJsonRoute,
  getApiNamesRoute,
  getApiPizzaIdRoute,
  getApiQuotesRoute,
  getApiRatingsIdRoute,
  getApiRatingsRoute,
  getApiStatusStatusRoute,
  getApiToolsRoute,
  getApiXmlRoute,
  getHealthzRoute,
  getMetricsRoute,
  getReadyRoute,
  patchApiPatchRoute,
  patchApiRatingsIdRoute,
  postApiAdminLoginRoute,
  postApiCookiesRoute,
  postApiCsrfTokenRoute,
  postApiPizzaRoute,
  postApiPostRoute,
  postApiRatingsRoute,
  postApiUsersRoute,
  postApiUsersTokenLoginRoute,
  postApiUsersTokenLogoutRoute,
  putApiPutRoute,
  putApiRatingsIdRoute,
} from './routes'
import {
  deleteApiDeleteRouteHandler,
  deleteApiRatingsIdRouteHandler,
  deleteApiRatingsRouteHandler,
  getApiAdjectivesRouteHandler,
  getApiBasicAuthUsernamePasswordRouteHandler,
  getApiBytesNRouteHandler,
  getApiConfigRouteHandler,
  getApiCookiesRouteHandler,
  getApiDelayDelayRouteHandler,
  getApiDoughsRouteHandler,
  getApiGetRouteHandler,
  getApiHeadersRouteHandler,
  getApiIngredientsTypeRouteHandler,
  getApiJsonRouteHandler,
  getApiNamesRouteHandler,
  getApiPizzaIdRouteHandler,
  getApiQuotesRouteHandler,
  getApiRatingsIdRouteHandler,
  getApiRatingsRouteHandler,
  getApiStatusStatusRouteHandler,
  getApiToolsRouteHandler,
  getApiXmlRouteHandler,
  getHealthzRouteHandler,
  getMetricsRouteHandler,
  getReadyRouteHandler,
  patchApiPatchRouteHandler,
  patchApiRatingsIdRouteHandler,
  postApiAdminLoginRouteHandler,
  postApiCookiesRouteHandler,
  postApiCsrfTokenRouteHandler,
  postApiPizzaRouteHandler,
  postApiPostRouteHandler,
  postApiRatingsRouteHandler,
  postApiUsersRouteHandler,
  postApiUsersTokenLoginRouteHandler,
  postApiUsersTokenLogoutRouteHandler,
  putApiPutRouteHandler,
  putApiRatingsIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApiPizzaRoute, postApiPizzaRouteHandler)
  .openapi(getApiPizzaIdRoute, getApiPizzaIdRouteHandler)
  .openapi(getApiIngredientsTypeRoute, getApiIngredientsTypeRouteHandler)
  .openapi(getApiDoughsRoute, getApiDoughsRouteHandler)
  .openapi(getApiToolsRoute, getApiToolsRouteHandler)
  .openapi(postApiRatingsRoute, postApiRatingsRouteHandler)
  .openapi(getApiRatingsRoute, getApiRatingsRouteHandler)
  .openapi(deleteApiRatingsRoute, deleteApiRatingsRouteHandler)
  .openapi(getApiRatingsIdRoute, getApiRatingsIdRouteHandler)
  .openapi(putApiRatingsIdRoute, putApiRatingsIdRouteHandler)
  .openapi(patchApiRatingsIdRoute, patchApiRatingsIdRouteHandler)
  .openapi(deleteApiRatingsIdRoute, deleteApiRatingsIdRouteHandler)
  .openapi(postApiUsersRoute, postApiUsersRouteHandler)
  .openapi(postApiUsersTokenLoginRoute, postApiUsersTokenLoginRouteHandler)
  .openapi(postApiUsersTokenLogoutRoute, postApiUsersTokenLogoutRouteHandler)
  .openapi(postApiAdminLoginRoute, postApiAdminLoginRouteHandler)
  .openapi(postApiCsrfTokenRoute, postApiCsrfTokenRouteHandler)
  .openapi(getApiQuotesRoute, getApiQuotesRouteHandler)
  .openapi(getApiNamesRoute, getApiNamesRouteHandler)
  .openapi(getApiAdjectivesRoute, getApiAdjectivesRouteHandler)
  .openapi(getApiConfigRoute, getApiConfigRouteHandler)
  .openapi(getReadyRoute, getReadyRouteHandler)
  .openapi(getHealthzRoute, getHealthzRouteHandler)
  .openapi(getMetricsRoute, getMetricsRouteHandler)
  .openapi(getApiStatusStatusRoute, getApiStatusStatusRouteHandler)
  .openapi(getApiBytesNRoute, getApiBytesNRouteHandler)
  .openapi(getApiDelayDelayRoute, getApiDelayDelayRouteHandler)
  .openapi(getApiGetRoute, getApiGetRouteHandler)
  .openapi(deleteApiDeleteRoute, deleteApiDeleteRouteHandler)
  .openapi(postApiPostRoute, postApiPostRouteHandler)
  .openapi(putApiPutRoute, putApiPutRouteHandler)
  .openapi(patchApiPatchRoute, patchApiPatchRouteHandler)
  .openapi(getApiCookiesRoute, getApiCookiesRouteHandler)
  .openapi(postApiCookiesRoute, postApiCookiesRouteHandler)
  .openapi(getApiHeadersRoute, getApiHeadersRouteHandler)
  .openapi(getApiBasicAuthUsernamePasswordRoute, getApiBasicAuthUsernamePasswordRouteHandler)
  .openapi(getApiJsonRoute, getApiJsonRouteHandler)
  .openapi(getApiXmlRoute, getApiXmlRouteHandler)

export default app
