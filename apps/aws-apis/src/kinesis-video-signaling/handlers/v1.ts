import type { RouteHandler } from '@hono/zod-openapi'
import type { postV1GetIceServerConfigRoute, postV1SendAlexaOfferToMasterRoute } from '../routes'

export const postV1GetIceServerConfigRouteHandler: RouteHandler<
  typeof postV1GetIceServerConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SendAlexaOfferToMasterRouteHandler: RouteHandler<
  typeof postV1SendAlexaOfferToMasterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
