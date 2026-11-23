import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBrandingThemesBrandingThemeIDPaymentServicesRoute,
  getBrandingThemesBrandingThemeIDRoute,
  getBrandingThemesRoute,
  postBrandingThemesBrandingThemeIDPaymentServicesRoute,
} from '../routes'

export const getBrandingThemesRouteHandler: RouteHandler<typeof getBrandingThemesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBrandingThemesBrandingThemeIDRouteHandler: RouteHandler<
  typeof getBrandingThemesBrandingThemeIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBrandingThemesBrandingThemeIDPaymentServicesRouteHandler: RouteHandler<
  typeof getBrandingThemesBrandingThemeIDPaymentServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBrandingThemesBrandingThemeIDPaymentServicesRouteHandler: RouteHandler<
  typeof postBrandingThemesBrandingThemeIDPaymentServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
