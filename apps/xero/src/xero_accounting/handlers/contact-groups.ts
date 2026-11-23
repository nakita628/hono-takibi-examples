import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteContactGroupsContactGroupIDContactsContactIDRoute,
  deleteContactGroupsContactGroupIDContactsRoute,
  getContactGroupsContactGroupIDRoute,
  getContactGroupsRoute,
  postContactGroupsContactGroupIDRoute,
  putContactGroupsContactGroupIDContactsRoute,
  putContactGroupsRoute,
} from '../routes'

export const getContactGroupsRouteHandler: RouteHandler<typeof getContactGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putContactGroupsRouteHandler: RouteHandler<typeof putContactGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getContactGroupsContactGroupIDRouteHandler: RouteHandler<
  typeof getContactGroupsContactGroupIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postContactGroupsContactGroupIDRouteHandler: RouteHandler<
  typeof postContactGroupsContactGroupIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putContactGroupsContactGroupIDContactsRouteHandler: RouteHandler<
  typeof putContactGroupsContactGroupIDContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteContactGroupsContactGroupIDContactsRouteHandler: RouteHandler<
  typeof deleteContactGroupsContactGroupIDContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteContactGroupsContactGroupIDContactsContactIDRouteHandler: RouteHandler<
  typeof deleteContactGroupsContactGroupIDContactsContactIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
