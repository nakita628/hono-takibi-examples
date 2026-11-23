import type { RouteHandler } from '@hono/zod-openapi'
import type { patchPatchRoute } from '../routes'

export const patchPatchRouteHandler: RouteHandler<typeof patchPatchRoute> = async (c) => {
  throw new Error('Not implemented')
}
