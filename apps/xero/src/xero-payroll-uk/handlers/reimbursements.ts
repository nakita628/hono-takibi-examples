import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getReimbursementsReimbursementIDRoute,
  getReimbursementsRoute,
  postReimbursementsRoute,
} from '../routes'

export const getReimbursementsRouteHandler: RouteHandler<typeof getReimbursementsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postReimbursementsRouteHandler: RouteHandler<typeof postReimbursementsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getReimbursementsReimbursementIDRouteHandler: RouteHandler<
  typeof getReimbursementsReimbursementIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
