import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPartnersRoute,
  postPartnersRoute,
  deletePartnersIdRoute,
  putPartnersIdRoute,
} from '../routes'

export const getPartnersRouteHandler: RouteHandler<typeof getPartnersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPartnersRouteHandler: RouteHandler<typeof postPartnersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePartnersIdRouteHandler: RouteHandler<typeof deletePartnersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putPartnersIdRouteHandler: RouteHandler<typeof putPartnersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
