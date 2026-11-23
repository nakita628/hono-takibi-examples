import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFaxLineRoute,
  getFaxLineAreaCodesRoute,
  getFaxLineListRoute,
  getFaxLineRoute,
  postFaxLineCreateRoute,
  putFaxLineAddUserRoute,
  putFaxLineRemoveUserRoute,
} from '../routes'

export const putFaxLineAddUserRouteHandler: RouteHandler<typeof putFaxLineAddUserRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFaxLineAreaCodesRouteHandler: RouteHandler<
  typeof getFaxLineAreaCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFaxLineCreateRouteHandler: RouteHandler<typeof postFaxLineCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFaxLineRouteHandler: RouteHandler<typeof getFaxLineRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFaxLineRouteHandler: RouteHandler<typeof deleteFaxLineRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFaxLineListRouteHandler: RouteHandler<typeof getFaxLineListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putFaxLineRemoveUserRouteHandler: RouteHandler<
  typeof putFaxLineRemoveUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
