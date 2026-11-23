import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteImportsImportIdIndexRoute,
  getImportsImportIdIndexRoute,
  postImportsIndexRoute,
  putImportsIndexRoute,
} from '../routes'

export const deleteImportsImportIdIndexRouteHandler: RouteHandler<
  typeof deleteImportsImportIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getImportsImportIdIndexRouteHandler: RouteHandler<
  typeof getImportsImportIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postImportsIndexRouteHandler: RouteHandler<typeof postImportsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putImportsIndexRouteHandler: RouteHandler<typeof putImportsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
