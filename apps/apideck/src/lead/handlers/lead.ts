import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLeadLeadsIdRoute,
  getLeadLeadsIdRoute,
  getLeadLeadsRoute,
  patchLeadLeadsIdRoute,
  postLeadLeadsRoute,
} from '../routes'

export const getLeadLeadsRouteHandler: RouteHandler<typeof getLeadLeadsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLeadLeadsRouteHandler: RouteHandler<typeof postLeadLeadsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLeadLeadsIdRouteHandler: RouteHandler<typeof deleteLeadLeadsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getLeadLeadsIdRouteHandler: RouteHandler<typeof getLeadLeadsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchLeadLeadsIdRouteHandler: RouteHandler<typeof patchLeadLeadsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
