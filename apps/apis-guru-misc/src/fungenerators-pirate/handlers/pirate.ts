import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPirateGenerateInsultRoute,
  getPirateGenerateLoremIpsumRoute,
  getPirateGenerateNameRoute,
  getPirateTranslateRoute,
} from '../routes'

export const getPirateGenerateInsultRouteHandler: RouteHandler<
  typeof getPirateGenerateInsultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPirateGenerateLoremIpsumRouteHandler: RouteHandler<
  typeof getPirateGenerateLoremIpsumRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPirateGenerateNameRouteHandler: RouteHandler<
  typeof getPirateGenerateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPirateTranslateRouteHandler: RouteHandler<typeof getPirateTranslateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
