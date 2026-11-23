import type { RouteHandler } from '@hono/zod-openapi'
import type { patchPetsRoute } from '../routes'

export const patchPetsRouteHandler: RouteHandler<typeof patchPetsRoute> = async (c) => {
  throw new Error('Not implemented')
}
