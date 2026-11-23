import type { RouteHandler } from '@hono/zod-openapi'
import type { getTranslationsTxtRoute } from '../routes'

export const getTranslationsTxtRouteHandler: RouteHandler<typeof getTranslationsTxtRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
