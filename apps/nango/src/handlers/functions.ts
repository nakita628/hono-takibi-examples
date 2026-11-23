import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFunctionsDeploymentsIdRoute,
  getFunctionsDryrunsIdRoute,
  postFunctionsCompileRoute,
  postFunctionsDeploymentsRoute,
  postFunctionsDryrunsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const functionsHandler = app
  .openapi(postFunctionsCompileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFunctionsDryrunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFunctionsDryrunsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFunctionsDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFunctionsDeploymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
