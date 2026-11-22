import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRoute,
  deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRoute,
  getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRoute,
  getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRoute,
  getAutomationActions202609AppIdDefinitionIdFunctionsRoute,
  putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdRoute,
  putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const functionsHandler = app
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
