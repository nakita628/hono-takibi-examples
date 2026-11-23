import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePartnersIdRoute,
  getPartnersRoute,
  postPartnersIdRoute,
  postPartnersRoute,
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

export const postPartnersIdRouteHandler: RouteHandler<typeof postPartnersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putPartnersIdRouteHandler: RouteHandler<typeof putPartnersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
