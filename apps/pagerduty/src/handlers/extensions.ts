import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getExtensionsRoute,
  postExtensionsRoute,
  getExtensionsIdRoute,
  deleteExtensionsIdRoute,
  putExtensionsIdRoute,
  postExtensionsIdEnableRoute,
} from '../routes'

export const getExtensionsRouteHandler: RouteHandler<typeof getExtensionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postExtensionsRouteHandler: RouteHandler<typeof postExtensionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getExtensionsIdRouteHandler: RouteHandler<typeof getExtensionsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteExtensionsIdRouteHandler: RouteHandler<typeof deleteExtensionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putExtensionsIdRouteHandler: RouteHandler<typeof putExtensionsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postExtensionsIdEnableRouteHandler: RouteHandler<
  typeof postExtensionsIdEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
