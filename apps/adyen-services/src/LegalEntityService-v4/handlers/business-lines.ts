import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBusinessLinesIdRoute,
  getBusinessLinesIdRoute,
  patchBusinessLinesIdRoute,
  postBusinessLinesRoute,
} from '../routes'

export const postBusinessLinesRouteHandler: RouteHandler<typeof postBusinessLinesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBusinessLinesIdRouteHandler: RouteHandler<typeof getBusinessLinesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteBusinessLinesIdRouteHandler: RouteHandler<
  typeof deleteBusinessLinesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchBusinessLinesIdRouteHandler: RouteHandler<
  typeof patchBusinessLinesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
