import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAudiencesRoute,
  postAudiencesRoute,
  getAudiencesIdRoute,
  putAudiencesIdRoute,
  deleteAudiencesIdRoute,
} from '../routes'

export const getAudiencesRouteHandler: RouteHandler<typeof getAudiencesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAudiencesRouteHandler: RouteHandler<typeof postAudiencesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAudiencesIdRouteHandler: RouteHandler<typeof getAudiencesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAudiencesIdRouteHandler: RouteHandler<typeof putAudiencesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAudiencesIdRouteHandler: RouteHandler<typeof deleteAudiencesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
