import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRoute,
  deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRoute,
  deleteAutomationActions202609AppIdDefinitionIdRoute,
  getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRoute,
  getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRoute,
  getAutomationActions202609AppIdDefinitionIdFunctionsRoute,
  getAutomationActions202609AppIdDefinitionIdRequiresObjectRoute,
  getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdRoute,
  getAutomationActions202609AppIdDefinitionIdRevisionsRoute,
  getAutomationActions202609AppIdDefinitionIdRoute,
  getAutomationActions202609AppIdRoute,
  patchAutomationActions202609AppIdDefinitionIdRoute,
  postAutomationActions202609AppIdDefinitionIdRequiresObjectRoute,
  postAutomationActions202609AppIdRoute,
  postAutomationActionsCallbacks202609CallbackIdCompleteRoute,
  postAutomationActionsCallbacks202609CompleteRoute,
  putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRoute,
  putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRoute,
} from './routes'
import {
  deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRouteHandler,
  deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRouteHandler,
  deleteAutomationActions202609AppIdDefinitionIdRouteHandler,
  getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRouteHandler,
  getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRouteHandler,
  getAutomationActions202609AppIdDefinitionIdFunctionsRouteHandler,
  getAutomationActions202609AppIdDefinitionIdRequiresObjectRouteHandler,
  getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdRouteHandler,
  getAutomationActions202609AppIdDefinitionIdRevisionsRouteHandler,
  getAutomationActions202609AppIdDefinitionIdRouteHandler,
  getAutomationActions202609AppIdRouteHandler,
  patchAutomationActions202609AppIdDefinitionIdRouteHandler,
  postAutomationActions202609AppIdDefinitionIdRequiresObjectRouteHandler,
  postAutomationActions202609AppIdRouteHandler,
  postAutomationActionsCallbacks202609CallbackIdCompleteRouteHandler,
  postAutomationActionsCallbacks202609CompleteRouteHandler,
  putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRouteHandler,
  putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRouteHandler,
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
