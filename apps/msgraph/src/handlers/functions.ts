import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFunctionsAttributeMappingFunctionSchemaIdRoute,
  getFunctionsAttributeMappingFunctionSchemaIdRoute,
  getFunctionsCountRoute,
  getFunctionsRoute,
  patchFunctionsAttributeMappingFunctionSchemaIdRoute,
  postFunctionsRoute,
} from '../routes'

export const getFunctionsRouteHandler: RouteHandler<typeof getFunctionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFunctionsRouteHandler: RouteHandler<typeof postFunctionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFunctionsAttributeMappingFunctionSchemaIdRouteHandler: RouteHandler<
  typeof getFunctionsAttributeMappingFunctionSchemaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFunctionsAttributeMappingFunctionSchemaIdRouteHandler: RouteHandler<
  typeof patchFunctionsAttributeMappingFunctionSchemaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFunctionsAttributeMappingFunctionSchemaIdRouteHandler: RouteHandler<
  typeof deleteFunctionsAttributeMappingFunctionSchemaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFunctionsCountRouteHandler: RouteHandler<typeof getFunctionsCountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
