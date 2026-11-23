import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSchemasFullNameRoute,
  getSchemasFullNameRoute,
  getSchemasRoute,
  patchSchemasFullNameRoute,
  postSchemasRoute,
} from '../routes'

export const postSchemasRouteHandler: RouteHandler<typeof postSchemasRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchemasRouteHandler: RouteHandler<typeof getSchemasRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchemasFullNameRouteHandler: RouteHandler<typeof getSchemasFullNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchSchemasFullNameRouteHandler: RouteHandler<
  typeof patchSchemasFullNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSchemasFullNameRouteHandler: RouteHandler<
  typeof deleteSchemasFullNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
