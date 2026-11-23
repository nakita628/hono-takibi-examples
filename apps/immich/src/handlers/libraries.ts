import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLibrariesIdRoute,
  getLibrariesIdRoute,
  getLibrariesIdStatisticsRoute,
  getLibrariesRoute,
  postLibrariesIdScanRoute,
  postLibrariesIdValidateRoute,
  postLibrariesRoute,
  putLibrariesIdRoute,
} from '../routes'

export const getLibrariesRouteHandler: RouteHandler<typeof getLibrariesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLibrariesRouteHandler: RouteHandler<typeof postLibrariesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLibrariesIdRouteHandler: RouteHandler<typeof deleteLibrariesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getLibrariesIdRouteHandler: RouteHandler<typeof getLibrariesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putLibrariesIdRouteHandler: RouteHandler<typeof putLibrariesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLibrariesIdScanRouteHandler: RouteHandler<
  typeof postLibrariesIdScanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLibrariesIdStatisticsRouteHandler: RouteHandler<
  typeof getLibrariesIdStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLibrariesIdValidateRouteHandler: RouteHandler<
  typeof postLibrariesIdValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
