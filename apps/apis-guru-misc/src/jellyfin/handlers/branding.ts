import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBrandingConfigurationRoute,
  getBrandingCssCssRoute,
  getBrandingCssRoute,
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
