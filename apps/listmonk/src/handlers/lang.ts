import type { RouteHandler } from '@hono/zod-openapi'
import type { getLangLangRoute } from '../routes'

export const getLangLangRouteHandler: RouteHandler<typeof getLangLangRoute> = async (c) => {
  throw new Error('Not implemented')
}
