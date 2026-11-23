import type { RouteHandler } from '@hono/zod-openapi'
import type { postLanguageDetectionRoute } from '../routes'

export const postLanguageDetectionRouteHandler: RouteHandler<
  typeof postLanguageDetectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
