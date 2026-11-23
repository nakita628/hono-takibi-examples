import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentContactsComputeRoute,
  getV1ParentContactsRoute,
  patchV1NameRoute,
  postV1ParentContactsRoute,
  postV1ResourceContactsSendTestMessageRoute,
} from '../routes'

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NameRouteHandler: RouteHandler<typeof patchV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentContactsRouteHandler: RouteHandler<
  typeof getV1ParentContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentContactsRouteHandler: RouteHandler<
  typeof postV1ParentContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentContactsComputeRouteHandler: RouteHandler<
  typeof getV1ParentContactsComputeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ResourceContactsSendTestMessageRouteHandler: RouteHandler<
  typeof postV1ResourceContactsSendTestMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
