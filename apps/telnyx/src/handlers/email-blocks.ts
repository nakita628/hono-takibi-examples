import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEmailBlocksIdRoute,
  getEmailBlocksExportRoute,
  getEmailBlocksIdEventsRoute,
  getEmailBlocksIdRoute,
  getEmailBlocksImportIdRoute,
  getEmailBlocksRoute,
  postEmailBlocksImportRoute,
  postEmailBlocksRoute,
} from '../routes'

export const getEmailBlocksRouteHandler: RouteHandler<typeof getEmailBlocksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmailBlocksRouteHandler: RouteHandler<typeof postEmailBlocksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmailBlocksExportRouteHandler: RouteHandler<
  typeof getEmailBlocksExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmailBlocksImportRouteHandler: RouteHandler<
  typeof postEmailBlocksImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmailBlocksImportIdRouteHandler: RouteHandler<
  typeof getEmailBlocksImportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmailBlocksIdRouteHandler: RouteHandler<
  typeof deleteEmailBlocksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmailBlocksIdRouteHandler: RouteHandler<typeof getEmailBlocksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEmailBlocksIdEventsRouteHandler: RouteHandler<
  typeof getEmailBlocksIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
