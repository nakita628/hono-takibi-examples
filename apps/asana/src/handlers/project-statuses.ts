import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getProjectStatusesProjectStatusGidRoute,
  deleteProjectStatusesProjectStatusGidRoute,
} from '../routes'

export const getProjectStatusesProjectStatusGidRouteHandler: RouteHandler<
  typeof getProjectStatusesProjectStatusGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectStatusesProjectStatusGidRouteHandler: RouteHandler<
  typeof deleteProjectStatusesProjectStatusGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
