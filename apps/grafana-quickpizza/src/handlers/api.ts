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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiPizzaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPizzaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIngredientsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDoughsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRatingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiRatingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiRatingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiRatingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersTokenLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersTokenLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCsrfTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdjectivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStatusStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBytesNRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDelayDelayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCookiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCookiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBasicAuthUsernamePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiXmlRoute, (c) => {
    throw new Error('Not implemented')
  })
