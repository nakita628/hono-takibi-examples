import { OpenAPIHono } from '@hono/zod-openapi'
import { postFunctionFunctionNameNamespaceRoute, postFunctionFunctionNameRoute } from '../routes'

const app = new OpenAPIHono()

export const functionHandler = app
  .openapi(postFunctionFunctionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFunctionFunctionNameNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
