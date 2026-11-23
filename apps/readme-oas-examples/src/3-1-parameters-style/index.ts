import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnythingFormDataDeepObjectRoute,
  getAnythingHeadersRoute,
  getAnythingHeadersSimpleRoute,
  getAnythingPathLabelPrimitiveArrayObjectRoute,
  getAnythingPathMatrixPrimitiveArrayObjectRoute,
  getAnythingPathPrimitiveArrayObjectRoute,
  getAnythingPathSimplePrimitiveArrayObjectRoute,
  getAnythingQueryDeepObjectRoute,
  getAnythingQueryFormRoute,
  getAnythingQueryPipeDelimitedRoute,
  getAnythingQueryRoute,
  getAnythingQuerySpaceDelimitedRoute,
  getCookiesFormExplodedRoute,
  getCookiesFormNonExplodedRoute,
  getCookiesRoute,
  postAnythingFormDataFormRoute,
  postAnythingFormDataPipeDelimitedRoute,
  postAnythingFormDataRoute,
  postAnythingFormDataSpaceDelimitedRoute,
  postAnythingHeadersSimpleRoute,
  postAnythingPathLabelPrimitiveArrayObjectRoute,
  postAnythingPathMatrixPrimitiveArrayObjectRoute,
  postAnythingPathSimplePrimitiveArrayObjectRoute,
  postAnythingQueryFormRoute,
  putAnythingFormDataFormRoute,
} from './routes'
import {
  getAnythingFormDataDeepObjectRouteHandler,
  getAnythingHeadersRouteHandler,
  getAnythingHeadersSimpleRouteHandler,
  getAnythingPathLabelPrimitiveArrayObjectRouteHandler,
  getAnythingPathMatrixPrimitiveArrayObjectRouteHandler,
  getAnythingPathPrimitiveArrayObjectRouteHandler,
  getAnythingPathSimplePrimitiveArrayObjectRouteHandler,
  getAnythingQueryDeepObjectRouteHandler,
  getAnythingQueryFormRouteHandler,
  getAnythingQueryPipeDelimitedRouteHandler,
  getAnythingQueryRouteHandler,
  getAnythingQuerySpaceDelimitedRouteHandler,
  getCookiesFormExplodedRouteHandler,
  getCookiesFormNonExplodedRouteHandler,
  getCookiesRouteHandler,
  postAnythingFormDataFormRouteHandler,
  postAnythingFormDataPipeDelimitedRouteHandler,
  postAnythingFormDataRouteHandler,
  postAnythingFormDataSpaceDelimitedRouteHandler,
  postAnythingHeadersSimpleRouteHandler,
  postAnythingPathLabelPrimitiveArrayObjectRouteHandler,
  postAnythingPathMatrixPrimitiveArrayObjectRouteHandler,
  postAnythingPathSimplePrimitiveArrayObjectRouteHandler,
  postAnythingQueryFormRouteHandler,
  putAnythingFormDataFormRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCookiesRoute, getCookiesRouteHandler)
  .openapi(getCookiesFormNonExplodedRoute, getCookiesFormNonExplodedRouteHandler)
  .openapi(getCookiesFormExplodedRoute, getCookiesFormExplodedRouteHandler)
  .openapi(getAnythingHeadersRoute, getAnythingHeadersRouteHandler)
  .openapi(getAnythingHeadersSimpleRoute, getAnythingHeadersSimpleRouteHandler)
  .openapi(postAnythingHeadersSimpleRoute, postAnythingHeadersSimpleRouteHandler)
  .openapi(
    getAnythingPathPrimitiveArrayObjectRoute,
    getAnythingPathPrimitiveArrayObjectRouteHandler,
  )
  .openapi(
    getAnythingPathMatrixPrimitiveArrayObjectRoute,
    getAnythingPathMatrixPrimitiveArrayObjectRouteHandler,
  )
  .openapi(
    postAnythingPathMatrixPrimitiveArrayObjectRoute,
    postAnythingPathMatrixPrimitiveArrayObjectRouteHandler,
  )
  .openapi(
    getAnythingPathLabelPrimitiveArrayObjectRoute,
    getAnythingPathLabelPrimitiveArrayObjectRouteHandler,
  )
  .openapi(
    postAnythingPathLabelPrimitiveArrayObjectRoute,
    postAnythingPathLabelPrimitiveArrayObjectRouteHandler,
  )
  .openapi(
    getAnythingPathSimplePrimitiveArrayObjectRoute,
    getAnythingPathSimplePrimitiveArrayObjectRouteHandler,
  )
  .openapi(
    postAnythingPathSimplePrimitiveArrayObjectRoute,
    postAnythingPathSimplePrimitiveArrayObjectRouteHandler,
  )
  .openapi(getAnythingQueryRoute, getAnythingQueryRouteHandler)
  .openapi(getAnythingQueryFormRoute, getAnythingQueryFormRouteHandler)
  .openapi(postAnythingQueryFormRoute, postAnythingQueryFormRouteHandler)
  .openapi(getAnythingQuerySpaceDelimitedRoute, getAnythingQuerySpaceDelimitedRouteHandler)
  .openapi(getAnythingQueryPipeDelimitedRoute, getAnythingQueryPipeDelimitedRouteHandler)
  .openapi(getAnythingQueryDeepObjectRoute, getAnythingQueryDeepObjectRouteHandler)
  .openapi(postAnythingFormDataRoute, postAnythingFormDataRouteHandler)
  .openapi(postAnythingFormDataFormRoute, postAnythingFormDataFormRouteHandler)
  .openapi(putAnythingFormDataFormRoute, putAnythingFormDataFormRouteHandler)
  .openapi(postAnythingFormDataSpaceDelimitedRoute, postAnythingFormDataSpaceDelimitedRouteHandler)
  .openapi(postAnythingFormDataPipeDelimitedRoute, postAnythingFormDataPipeDelimitedRouteHandler)
  .openapi(getAnythingFormDataDeepObjectRoute, getAnythingFormDataDeepObjectRouteHandler)

export default app
