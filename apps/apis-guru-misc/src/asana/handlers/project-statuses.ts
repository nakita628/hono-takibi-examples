import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteProjectStatusesProjectStatusGidRoute,
  getProjectStatusesProjectStatusGidRoute,
} from '../routes'

export const deleteProjectStatusesProjectStatusGidRouteHandler: RouteHandler<
  typeof deleteProjectStatusesProjectStatusGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectStatusesProjectStatusGidRouteHandler: RouteHandler<
  typeof getProjectStatusesProjectStatusGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
