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
} from '../routes'

const app = new OpenAPIHono()

export const automationHandler = app
  .openapi(getAutomationActions202609AppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationActions202609AppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActions202609AppIdDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAutomationActions202609AppIdDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAutomationActions202609AppIdDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActions202609AppIdDefinitionIdFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAutomationActions202609AppIdDefinitionIdRequiresObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationActions202609AppIdDefinitionIdRequiresObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActions202609AppIdDefinitionIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationActionsCallbacks202609CompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationActionsCallbacks202609CallbackIdCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
