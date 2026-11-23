import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getParameterExamplesParam1Param2Route,
  patchParameterExamplesParam1Param2Route,
  patchRequestBodyPrimitiveExampleRoute,
  patchRequestBodyRoute,
  postRequestBodyFormDataExampleRoute,
  postRequestBodyMultiMediaTypesRoute,
  postRequestBodyPrimitiveExampleRoute,
  postRequestBodyRoute,
  putParameterExamplesParam1Param2Route,
  putRequestBodyPrimitiveExampleRoute,
  putRequestBodyRoute,
} from './routes'
import {
  getParameterExamplesParam1Param2RouteHandler,
  patchParameterExamplesParam1Param2RouteHandler,
  patchRequestBodyPrimitiveExampleRouteHandler,
  patchRequestBodyRouteHandler,
  postRequestBodyFormDataExampleRouteHandler,
  postRequestBodyMultiMediaTypesRouteHandler,
  postRequestBodyPrimitiveExampleRouteHandler,
  postRequestBodyRouteHandler,
  putParameterExamplesParam1Param2RouteHandler,
  putRequestBodyPrimitiveExampleRouteHandler,
  putRequestBodyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getParameterExamplesParam1Param2Route, getParameterExamplesParam1Param2RouteHandler)
  .openapi(patchParameterExamplesParam1Param2Route, patchParameterExamplesParam1Param2RouteHandler)
  .openapi(putParameterExamplesParam1Param2Route, putParameterExamplesParam1Param2RouteHandler)
  .openapi(postRequestBodyRoute, postRequestBodyRouteHandler)
  .openapi(patchRequestBodyRoute, patchRequestBodyRouteHandler)
  .openapi(putRequestBodyRoute, putRequestBodyRouteHandler)
  .openapi(postRequestBodyPrimitiveExampleRoute, postRequestBodyPrimitiveExampleRouteHandler)
  .openapi(patchRequestBodyPrimitiveExampleRoute, patchRequestBodyPrimitiveExampleRouteHandler)
  .openapi(putRequestBodyPrimitiveExampleRoute, putRequestBodyPrimitiveExampleRouteHandler)
  .openapi(postRequestBodyMultiMediaTypesRoute, postRequestBodyMultiMediaTypesRouteHandler)
  .openapi(postRequestBodyFormDataExampleRoute, postRequestBodyFormDataExampleRouteHandler)

export default app
