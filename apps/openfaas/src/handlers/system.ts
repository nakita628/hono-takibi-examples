import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSystemFunctionsRoute,
  deleteSystemSecretsRoute,
  getSystemFunctionFunctionNameRoute,
  getSystemFunctionsRoute,
  getSystemInfoRoute,
  getSystemLogsRoute,
  getSystemNamespacesRoute,
  getSystemSecretsRoute,
  postSystemAlertRoute,
  postSystemFunctionsRoute,
  postSystemScaleFunctionFunctionNameRoute,
  postSystemSecretsRoute,
  putSystemFunctionsRoute,
  putSystemSecretsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app
  .openapi(getSystemInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemAlertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSystemFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSystemFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemScaleFunctionFunctionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemFunctionFunctionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSystemSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSystemSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
