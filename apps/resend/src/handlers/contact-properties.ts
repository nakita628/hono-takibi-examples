import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteContactPropertiesIdRoute,
  getContactPropertiesIdRoute,
  getContactPropertiesRoute,
  patchContactPropertiesIdRoute,
  postContactPropertiesRoute,
} from '../routes'

export const postContactPropertiesRouteHandler: RouteHandler<
  typeof postContactPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getContactPropertiesRouteHandler: RouteHandler<
  typeof getContactPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getContactPropertiesIdRouteHandler: RouteHandler<
  typeof getContactPropertiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchContactPropertiesIdRouteHandler: RouteHandler<
  typeof patchContactPropertiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteContactPropertiesIdRouteHandler: RouteHandler<
  typeof deleteContactPropertiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
