import type { RouteHandler } from '@hono/zod-openapi'
import type { postListTableStorageOptimizersRoute } from '../routes'

export const postListTableStorageOptimizersRouteHandler: RouteHandler<
  typeof postListTableStorageOptimizersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
