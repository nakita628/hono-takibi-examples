import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRequirementsIdVersionsPendingRoute,
  getRequirementsIdRoute,
  getRequirementsRoute,
  postRequirementsIdVersionsRoute,
} from '../routes'

export const getRequirementsRouteHandler: RouteHandler<typeof getRequirementsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRequirementsIdRouteHandler: RouteHandler<typeof getRequirementsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRequirementsIdVersionsRouteHandler: RouteHandler<
  typeof postRequirementsIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRequirementsIdVersionsPendingRouteHandler: RouteHandler<
  typeof deleteRequirementsIdVersionsPendingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
