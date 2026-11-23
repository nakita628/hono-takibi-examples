import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postAsyncFunctionFunctionNameNamespaceRoute,
  postAsyncFunctionFunctionNameRoute,
} from '../routes'

export const postAsyncFunctionFunctionNameRouteHandler: RouteHandler<
  typeof postAsyncFunctionFunctionNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAsyncFunctionFunctionNameNamespaceRouteHandler: RouteHandler<
  typeof postAsyncFunctionFunctionNameNamespaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
