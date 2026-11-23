import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBrandingSplashscreenRoute,
  getBrandingConfigurationRoute,
  getBrandingCssCssRoute,
  getBrandingCssRoute,
  getBrandingSplashscreenRoute,
  postBrandingSplashscreenRoute,
} from '../routes'

export const getBrandingConfigurationRouteHandler: RouteHandler<
  typeof getBrandingConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBrandingCssRouteHandler: RouteHandler<typeof getBrandingCssRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBrandingCssCssRouteHandler: RouteHandler<typeof getBrandingCssCssRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBrandingSplashscreenRouteHandler: RouteHandler<
  typeof getBrandingSplashscreenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBrandingSplashscreenRouteHandler: RouteHandler<
  typeof postBrandingSplashscreenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBrandingSplashscreenRouteHandler: RouteHandler<
  typeof deleteBrandingSplashscreenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
