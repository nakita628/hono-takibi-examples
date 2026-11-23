import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAttributeGroupsAttributeGroupRoute,
  getAttributeGroupsAttributeGroupRoute,
  getAttributeGroupsRoute,
  patchAttributeGroupsAttributeGroupRoute,
  postAttributeGroupsRoute,
} from '../routes'

export const postAttributeGroupsRouteHandler: RouteHandler<
  typeof postAttributeGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAttributeGroupsRouteHandler: RouteHandler<typeof getAttributeGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAttributeGroupsAttributeGroupRouteHandler: RouteHandler<
  typeof deleteAttributeGroupsAttributeGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAttributeGroupsAttributeGroupRouteHandler: RouteHandler<
  typeof getAttributeGroupsAttributeGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAttributeGroupsAttributeGroupRouteHandler: RouteHandler<
  typeof patchAttributeGroupsAttributeGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
