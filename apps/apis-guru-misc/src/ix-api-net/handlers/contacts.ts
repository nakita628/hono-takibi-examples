import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteContactsIdRoute,
  getContactsIdRoute,
  getContactsRoute,
  patchContactsIdRoute,
  postContactsRoute,
  putContactsIdRoute,
} from '../routes'

export const getContactsRouteHandler: RouteHandler<typeof getContactsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postContactsRouteHandler: RouteHandler<typeof postContactsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteContactsIdRouteHandler: RouteHandler<typeof deleteContactsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getContactsIdRouteHandler: RouteHandler<typeof getContactsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchContactsIdRouteHandler: RouteHandler<typeof patchContactsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putContactsIdRouteHandler: RouteHandler<typeof putContactsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
