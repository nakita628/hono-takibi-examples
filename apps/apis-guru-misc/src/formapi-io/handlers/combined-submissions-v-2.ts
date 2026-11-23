import type { RouteHandler } from '@hono/zod-openapi'
import type { postCombinedSubmissionsV2Route } from '../routes'

export const postCombinedSubmissionsV2RouteHandler: RouteHandler<
  typeof postCombinedSubmissionsV2Route
> = async (c) => {
  throw new Error('Not implemented')
}
