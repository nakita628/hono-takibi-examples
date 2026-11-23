import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getExportsExportIdDownloadRoute,
  getExportsExportIdRoute,
  postExportsRoute,
} from '../routes'

export const postExportsRouteHandler: RouteHandler<typeof postExportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getExportsExportIdRouteHandler: RouteHandler<typeof getExportsExportIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getExportsExportIdDownloadRouteHandler: RouteHandler<
  typeof getExportsExportIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
