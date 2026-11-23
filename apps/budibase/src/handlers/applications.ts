import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApplicationsAppIdRoute,
  getApplicationsAppIdRoute,
  postApplicationsAppIdExportRoute,
  postApplicationsAppIdImportRoute,
  postApplicationsAppIdPublishRoute,
  postApplicationsAppIdUnpublishRoute,
  postApplicationsRoute,
  postApplicationsSearchRoute,
  putApplicationsAppIdRoute,
} from '../routes'

export const postApplicationsRouteHandler: RouteHandler<typeof postApplicationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApplicationsAppIdRouteHandler: RouteHandler<
  typeof putApplicationsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsAppIdRouteHandler: RouteHandler<
  typeof deleteApplicationsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsAppIdRouteHandler: RouteHandler<
  typeof getApplicationsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsAppIdUnpublishRouteHandler: RouteHandler<
  typeof postApplicationsAppIdUnpublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsAppIdPublishRouteHandler: RouteHandler<
  typeof postApplicationsAppIdPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsAppIdImportRouteHandler: RouteHandler<
  typeof postApplicationsAppIdImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsAppIdExportRouteHandler: RouteHandler<
  typeof postApplicationsAppIdExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsSearchRouteHandler: RouteHandler<
  typeof postApplicationsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
