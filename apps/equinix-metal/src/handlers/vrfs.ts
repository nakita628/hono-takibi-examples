import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVrfsIdRoute,
  getVrfsIdIpsRoute,
  getVrfsIdRoute,
  getVrfsIdRoutesRoute,
  getVrfsVrfIdIpsIdRoute,
  postVrfsIdRoutesRoute,
  putVrfsIdRoute,
} from '../routes'

export const deleteVrfsIdRouteHandler: RouteHandler<typeof deleteVrfsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVrfsIdRouteHandler: RouteHandler<typeof getVrfsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putVrfsIdRouteHandler: RouteHandler<typeof putVrfsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVrfsIdIpsRouteHandler: RouteHandler<typeof getVrfsIdIpsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVrfsVrfIdIpsIdRouteHandler: RouteHandler<typeof getVrfsVrfIdIpsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getVrfsIdRoutesRouteHandler: RouteHandler<typeof getVrfsIdRoutesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVrfsIdRoutesRouteHandler: RouteHandler<typeof postVrfsIdRoutesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
