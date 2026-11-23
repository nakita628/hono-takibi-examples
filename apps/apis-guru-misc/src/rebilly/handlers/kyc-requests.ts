import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteKycRequestsIdRoute,
  getKycRequestsIdRoute,
  getKycRequestsRoute,
  patchKycRequestsIdRoute,
  postKycRequestsRoute,
} from '../routes'

export const getKycRequestsRouteHandler: RouteHandler<typeof getKycRequestsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postKycRequestsRouteHandler: RouteHandler<typeof postKycRequestsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKycRequestsIdRouteHandler: RouteHandler<
  typeof deleteKycRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKycRequestsIdRouteHandler: RouteHandler<typeof getKycRequestsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchKycRequestsIdRouteHandler: RouteHandler<typeof patchKycRequestsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
