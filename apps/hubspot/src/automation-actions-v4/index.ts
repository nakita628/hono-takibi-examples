import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAutomationActions202609AppIdRoute,
  postAutomationActions202609AppIdRoute,
  getAutomationActions202609AppIdDefinitionIdRoute,
  deleteAutomationActions202609AppIdDefinitionIdRoute,
  patchAutomationActions202609AppIdDefinitionIdRoute,
  getAutomationActions202609AppIdDefinitionIdFunctionsRoute,
  getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRoute,
  putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRoute,
  deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRoute,
  getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRoute,
  putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRoute,
  deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRoute,
  getAutomationActions202609AppIdDefinitionIdRequiresObjectRoute,
  postAutomationActions202609AppIdDefinitionIdRequiresObjectRoute,
  getAutomationActions202609AppIdDefinitionIdRevisionsRoute,
  getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdRoute,
  postAutomationActionsCallbacks202609CompleteRoute,
  postAutomationActionsCallbacks202609CallbackIdCompleteRoute,
} from './routes'
import {
  getAutomationActions202609AppIdRouteHandler,
  postAutomationActions202609AppIdRouteHandler,
  getAutomationActions202609AppIdDefinitionIdRouteHandler,
  deleteAutomationActions202609AppIdDefinitionIdRouteHandler,
  patchAutomationActions202609AppIdDefinitionIdRouteHandler,
  getAutomationActions202609AppIdDefinitionIdFunctionsRouteHandler,
  getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRouteHandler,
  putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRouteHandler,
  deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRouteHandler,
  getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRouteHandler,
  putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRouteHandler,
  deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRouteHandler,
  getAutomationActions202609AppIdDefinitionIdRequiresObjectRouteHandler,
  postAutomationActions202609AppIdDefinitionIdRequiresObjectRouteHandler,
  getAutomationActions202609AppIdDefinitionIdRevisionsRouteHandler,
  getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdRouteHandler,
  postAutomationActionsCallbacks202609CompleteRouteHandler,
  postAutomationActionsCallbacks202609CallbackIdCompleteRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAutomationActions202609AppIdRoute, getAutomationActions202609AppIdRouteHandler)
  .openapi(postAutomationActions202609AppIdRoute, postAutomationActions202609AppIdRouteHandler)
  .openapi(
    getAutomationActions202609AppIdDefinitionIdRoute,
    getAutomationActions202609AppIdDefinitionIdRouteHandler,
  )
  .openapi(
    deleteAutomationActions202609AppIdDefinitionIdRoute,
    deleteAutomationActions202609AppIdDefinitionIdRouteHandler,
  )
  .openapi(
    patchAutomationActions202609AppIdDefinitionIdRoute,
    patchAutomationActions202609AppIdDefinitionIdRouteHandler,
  )
  .openapi(
    getAutomationActions202609AppIdDefinitionIdFunctionsRoute,
    getAutomationActions202609AppIdDefinitionIdFunctionsRouteHandler,
  )
  .openapi(
    getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRoute,
    getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRouteHandler,
  )
  .openapi(
    putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRoute,
    putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRouteHandler,
  )
  .openapi(
    deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRoute,
    deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRouteHandler,
  )
  .openapi(
    getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRoute,
    getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRouteHandler,
  )
  .openapi(
    putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRoute,
    putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRouteHandler,
  )
  .openapi(
    deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRoute,
    deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRouteHandler,
  )
  .openapi(
    getAutomationActions202609AppIdDefinitionIdRequiresObjectRoute,
    getAutomationActions202609AppIdDefinitionIdRequiresObjectRouteHandler,
  )
  .openapi(
    postAutomationActions202609AppIdDefinitionIdRequiresObjectRoute,
    postAutomationActions202609AppIdDefinitionIdRequiresObjectRouteHandler,
  )
  .openapi(
    getAutomationActions202609AppIdDefinitionIdRevisionsRoute,
    getAutomationActions202609AppIdDefinitionIdRevisionsRouteHandler,
  )
  .openapi(
    getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdRoute,
    getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdRouteHandler,
  )
  .openapi(
    postAutomationActionsCallbacks202609CompleteRoute,
    postAutomationActionsCallbacks202609CompleteRouteHandler,
  )
  .openapi(
    postAutomationActionsCallbacks202609CallbackIdCompleteRoute,
    postAutomationActionsCallbacks202609CallbackIdCompleteRouteHandler,
  )

export default app
