import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCatalogsNameRoute,
  getCatalogsNameRoute,
  getCatalogsRoute,
  patchCatalogsNameRoute,
  postCatalogsRoute,
} from '../routes'

export const postCatalogsRouteHandler: RouteHandler<typeof postCatalogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCatalogsRouteHandler: RouteHandler<typeof getCatalogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCatalogsNameRouteHandler: RouteHandler<typeof getCatalogsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCatalogsNameRouteHandler: RouteHandler<typeof patchCatalogsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteCatalogsNameRouteHandler: RouteHandler<typeof deleteCatalogsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
