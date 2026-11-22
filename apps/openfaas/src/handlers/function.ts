import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAsyncFunctionFunctionNameNamespaceRoute,
  postAsyncFunctionFunctionNameRoute,
  postFunctionFunctionNameNamespaceRoute,
  postFunctionFunctionNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const functionHandler = app
  .openapi(postAsyncFunctionFunctionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAsyncFunctionFunctionNameNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFunctionFunctionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFunctionFunctionNameNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
