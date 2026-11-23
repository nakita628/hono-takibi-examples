import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWellsIndexRoute,
  getWellsTagFilesRoute,
  getWellsTagsIndexRoute,
  getWellsWellTagNumberRoute,
} from '../routes'

export const getWellsIndexRouteHandler: RouteHandler<typeof getWellsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getWellsTagsIndexRouteHandler: RouteHandler<typeof getWellsTagsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getWellsTagFilesRouteHandler: RouteHandler<typeof getWellsTagFilesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getWellsWellTagNumberRouteHandler: RouteHandler<
  typeof getWellsWellTagNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
