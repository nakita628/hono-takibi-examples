import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getImagesGeneralNameTypeRoute,
  getImagesGeneralRoute,
  getImagesMediaInfoRoute,
  getImagesMediaInfoThemeNameRoute,
  getImagesRatingsRoute,
  getImagesRatingsThemeNameRoute,
  getImagesRemoteRoute,
} from '../routes'

export const getImagesGeneralRouteHandler: RouteHandler<typeof getImagesGeneralRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getImagesGeneralNameTypeRouteHandler: RouteHandler<
  typeof getImagesGeneralNameTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getImagesMediaInfoRouteHandler: RouteHandler<typeof getImagesMediaInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getImagesMediaInfoThemeNameRouteHandler: RouteHandler<
  typeof getImagesMediaInfoThemeNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getImagesRatingsRouteHandler: RouteHandler<typeof getImagesRatingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getImagesRatingsThemeNameRouteHandler: RouteHandler<
  typeof getImagesRatingsThemeNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getImagesRemoteRouteHandler: RouteHandler<typeof getImagesRemoteRoute> = async (c) => {
  throw new Error('Not implemented')
}
