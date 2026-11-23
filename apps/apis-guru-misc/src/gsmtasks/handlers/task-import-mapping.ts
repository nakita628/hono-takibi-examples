import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTaskImportMappingIdIndexRoute,
  getTaskImportMappingIndexRoute,
  postTaskImportMappingIndexRoute,
} from '../routes'

export const getTaskImportMappingIndexRouteHandler: RouteHandler<
  typeof getTaskImportMappingIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTaskImportMappingIndexRouteHandler: RouteHandler<
  typeof postTaskImportMappingIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaskImportMappingIdIndexRouteHandler: RouteHandler<
  typeof getTaskImportMappingIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
