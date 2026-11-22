import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFunctionsFunctionIdDeploymentsDeploymentIdRoute,
  deleteFunctionsFunctionIdExecutionsExecutionIdRoute,
  deleteFunctionsFunctionIdRoute,
  deleteFunctionsFunctionIdVariablesVariableIdRoute,
  getFunctionsFunctionIdDeploymentsDeploymentIdDownloadRoute,
  getFunctionsFunctionIdDeploymentsDeploymentIdRoute,
  getFunctionsFunctionIdDeploymentsRoute,
  getFunctionsFunctionIdExecutionsExecutionIdRoute,
  getFunctionsFunctionIdExecutionsRoute,
  getFunctionsFunctionIdRoute,
  getFunctionsFunctionIdVariablesRoute,
  getFunctionsFunctionIdVariablesVariableIdRoute,
  getFunctionsRoute,
  getFunctionsRuntimesRoute,
  getFunctionsSpecificationsRoute,
  patchFunctionsFunctionIdDeploymentRoute,
  patchFunctionsFunctionIdDeploymentsDeploymentIdStatusRoute,
  postFunctionsFunctionIdDeploymentsDuplicateRoute,
  postFunctionsFunctionIdDeploymentsRoute,
  postFunctionsFunctionIdDeploymentsTemplateRoute,
  postFunctionsFunctionIdDeploymentsVcsRoute,
  postFunctionsFunctionIdExecutionsRoute,
  postFunctionsFunctionIdVariablesRoute,
  postFunctionsRoute,
  putFunctionsFunctionIdRoute,
  putFunctionsFunctionIdVariablesVariableIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const functionsHandler = app
  .openapi(getFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFunctionsRuntimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFunctionsSpecificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFunctionsFunctionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFunctionsFunctionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFunctionsFunctionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFunctionsFunctionIdDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFunctionsFunctionIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFunctionsFunctionIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFunctionsFunctionIdDeploymentsDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFunctionsFunctionIdDeploymentsTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFunctionsFunctionIdDeploymentsVcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFunctionsFunctionIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFunctionsFunctionIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFunctionsFunctionIdDeploymentsDeploymentIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFunctionsFunctionIdDeploymentsDeploymentIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFunctionsFunctionIdExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFunctionsFunctionIdExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFunctionsFunctionIdExecutionsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFunctionsFunctionIdExecutionsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFunctionsFunctionIdVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFunctionsFunctionIdVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFunctionsFunctionIdVariablesVariableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFunctionsFunctionIdVariablesVariableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFunctionsFunctionIdVariablesVariableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
