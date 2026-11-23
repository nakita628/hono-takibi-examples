import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGetDelayRoute,
  getGetIdIdRoute,
  getGetListPageRoute,
  getGetUuidUuidRoute,
  getValidateNameNameRoute,
  getValidateUuidUuidRoute,
  postGenerateUploadRoute,
  postGenerateUrlRoute,
  postGenerateUserRoute,
} from './routes'
import {
  getGetDelayRouteHandler,
  getGetIdIdRouteHandler,
  getGetListPageRouteHandler,
  getGetUuidUuidRouteHandler,
  getValidateNameNameRouteHandler,
  getValidateUuidUuidRouteHandler,
  postGenerateUploadRouteHandler,
  postGenerateUrlRouteHandler,
  postGenerateUserRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postGenerateUploadRoute, postGenerateUploadRouteHandler)
  .openapi(postGenerateUrlRoute, postGenerateUrlRouteHandler)
  .openapi(postGenerateUserRoute, postGenerateUserRouteHandler)
  .openapi(getGetDelayRoute, getGetDelayRouteHandler)
  .openapi(getGetIdIdRoute, getGetIdIdRouteHandler)
  .openapi(getGetListPageRoute, getGetListPageRouteHandler)
  .openapi(getGetUuidUuidRoute, getGetUuidUuidRouteHandler)
  .openapi(getValidateNameNameRoute, getValidateNameNameRouteHandler)
  .openapi(getValidateUuidUuidRoute, getValidateUuidUuidRouteHandler)

export default app
