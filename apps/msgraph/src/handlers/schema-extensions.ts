import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSchemaExtensionsSchemaExtensionIdRoute,
  getSchemaExtensionsCountRoute,
  getSchemaExtensionsRoute,
  getSchemaExtensionsSchemaExtensionIdRoute,
  patchSchemaExtensionsSchemaExtensionIdRoute,
  postSchemaExtensionsRoute,
} from '../routes'

export const getSchemaExtensionsRouteHandler: RouteHandler<
  typeof getSchemaExtensionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSchemaExtensionsRouteHandler: RouteHandler<
  typeof postSchemaExtensionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchemaExtensionsSchemaExtensionIdRouteHandler: RouteHandler<
  typeof getSchemaExtensionsSchemaExtensionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSchemaExtensionsSchemaExtensionIdRouteHandler: RouteHandler<
  typeof patchSchemaExtensionsSchemaExtensionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSchemaExtensionsSchemaExtensionIdRouteHandler: RouteHandler<
  typeof deleteSchemaExtensionsSchemaExtensionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchemaExtensionsCountRouteHandler: RouteHandler<
  typeof getSchemaExtensionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
