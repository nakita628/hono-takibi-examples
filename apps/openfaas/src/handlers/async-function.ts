import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAsyncFunctionFunctionNameNamespaceRoute,
  postAsyncFunctionFunctionNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const asyncFunctionHandler = app
  .openapi(postAsyncFunctionFunctionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAsyncFunctionFunctionNameNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
