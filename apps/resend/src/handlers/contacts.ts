import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postContactsRoute,
  getContactsRoute,
  postContactsImportsRoute,
  getContactsImportsRoute,
  getContactsImportsIdRoute,
  getContactsIdRoute,
  patchContactsIdRoute,
  deleteContactsIdRoute,
  getContactsContactIdSegmentsRoute,
  postContactsContactIdSegmentsSegmentIdRoute,
  deleteContactsContactIdSegmentsSegmentIdRoute,
  getContactsContactIdTopicsRoute,
  patchContactsContactIdTopicsRoute,
} from '../routes'

export const postContactsRouteHandler: RouteHandler<typeof postContactsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getContactsRouteHandler: RouteHandler<typeof getContactsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postContactsImportsRouteHandler: RouteHandler<
  typeof postContactsImportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getContactsImportsRouteHandler: RouteHandler<typeof getContactsImportsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getContactsImportsIdRouteHandler: RouteHandler<
  typeof getContactsImportsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getContactsIdRouteHandler: RouteHandler<typeof getContactsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchContactsIdRouteHandler: RouteHandler<typeof patchContactsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteContactsIdRouteHandler: RouteHandler<typeof deleteContactsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getContactsContactIdSegmentsRouteHandler: RouteHandler<
  typeof getContactsContactIdSegmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postContactsContactIdSegmentsSegmentIdRouteHandler: RouteHandler<
  typeof postContactsContactIdSegmentsSegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteContactsContactIdSegmentsSegmentIdRouteHandler: RouteHandler<
  typeof deleteContactsContactIdSegmentsSegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getContactsContactIdTopicsRouteHandler: RouteHandler<
  typeof getContactsContactIdTopicsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchContactsContactIdTopicsRouteHandler: RouteHandler<
  typeof patchContactsContactIdTopicsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
