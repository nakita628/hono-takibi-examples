import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postFunctionFunctionNameNamespaceRoute,
  postFunctionFunctionNameRoute,
} from '../routes'

export const postFunctionFunctionNameRouteHandler: RouteHandler<
  typeof postFunctionFunctionNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFunctionFunctionNameNamespaceRouteHandler: RouteHandler<
  typeof postFunctionFunctionNameNamespaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
