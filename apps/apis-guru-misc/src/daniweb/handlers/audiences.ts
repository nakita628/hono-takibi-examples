import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAudiencesIDRoute,
  getAudiencesRoute,
  postAudiencesIDMembershipsRoute,
} from '../routes'

export const getAudiencesRouteHandler: RouteHandler<typeof getAudiencesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAudiencesIDRouteHandler: RouteHandler<typeof getAudiencesIDRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAudiencesIDMembershipsRouteHandler: RouteHandler<
  typeof postAudiencesIDMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
