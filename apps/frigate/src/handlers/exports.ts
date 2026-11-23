import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getExportsExportIdRoute,
  getExportsRoute,
  postExportsBatchRoute,
  postExportsDeleteRoute,
  postExportsReassignRoute,
} from '../routes'

export const getExportsRouteHandler: RouteHandler<typeof getExportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postExportsBatchRouteHandler: RouteHandler<typeof postExportsBatchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getExportsExportIdRouteHandler: RouteHandler<typeof getExportsExportIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postExportsDeleteRouteHandler: RouteHandler<typeof postExportsDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postExportsReassignRouteHandler: RouteHandler<
  typeof postExportsReassignRoute
> = async (c) => {
  throw new Error('Not implemented')
}
