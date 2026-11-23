import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUploadsUplIdRoute,
  getUploadsRoute,
  getUploadsUplIdExportsExIdRoute,
  getUploadsUplIdReportRoute,
  getUploadsUplIdRoute,
  patchUploadsUplIdRoute,
  postUploadsRoute,
  postUploadsUplIdExportsRoute,
  postUploadsUplIdFileRoute,
} from '../routes'

export const getUploadsRouteHandler: RouteHandler<typeof getUploadsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUploadsRouteHandler: RouteHandler<typeof postUploadsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUploadsUplIdRouteHandler: RouteHandler<typeof getUploadsUplIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUploadsUplIdRouteHandler: RouteHandler<typeof patchUploadsUplIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteUploadsUplIdRouteHandler: RouteHandler<typeof deleteUploadsUplIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUploadsUplIdFileRouteHandler: RouteHandler<
  typeof postUploadsUplIdFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUploadsUplIdExportsRouteHandler: RouteHandler<
  typeof postUploadsUplIdExportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUploadsUplIdReportRouteHandler: RouteHandler<
  typeof getUploadsUplIdReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUploadsUplIdExportsExIdRouteHandler: RouteHandler<
  typeof getUploadsUplIdExportsExIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
