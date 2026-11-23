import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSearchSourceLangRoute,
  getSearchSourceSearchLanguageTranslationsTargetSearchLanguageRoute,
} from '../routes'

export const getSearchSourceLangRouteHandler: RouteHandler<
  typeof getSearchSourceLangRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchSourceSearchLanguageTranslationsTargetSearchLanguageRouteHandler: RouteHandler<
  typeof getSearchSourceSearchLanguageTranslationsTargetSearchLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
