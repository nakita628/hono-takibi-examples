import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTaskImportIdIndexRoute,
  getTaskImportIndexRoute,
  postTaskImportIndexRoute,
} from '../routes'

export const getTaskImportIndexRouteHandler: RouteHandler<typeof getTaskImportIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTaskImportIndexRouteHandler: RouteHandler<
  typeof postTaskImportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaskImportIdIndexRouteHandler: RouteHandler<
  typeof getTaskImportIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
