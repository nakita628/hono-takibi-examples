import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOcsV2PhpSettingsApiDeclarativeFormsRoute,
  postOcsV2PhpSettingsApiDeclarativeValueRoute,
  postOcsV2PhpSettingsApiDeclarativeValueSensitiveRoute,
} from '../routes'

export const postOcsV2PhpSettingsApiDeclarativeValueRouteHandler: RouteHandler<
  typeof postOcsV2PhpSettingsApiDeclarativeValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOcsV2PhpSettingsApiDeclarativeValueSensitiveRouteHandler: RouteHandler<
  typeof postOcsV2PhpSettingsApiDeclarativeValueSensitiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOcsV2PhpSettingsApiDeclarativeFormsRouteHandler: RouteHandler<
  typeof getOcsV2PhpSettingsApiDeclarativeFormsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
