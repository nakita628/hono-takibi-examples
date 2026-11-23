import type { RouteHandler } from '@hono/zod-openapi'
import type { postImportUserDictRoute } from '../routes'

export const postImportUserDictRouteHandler: RouteHandler<typeof postImportUserDictRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
