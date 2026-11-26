import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postBroadcastsRoute,
  getBroadcastsRoute,
  deleteBroadcastsIdRoute,
  getBroadcastsIdRoute,
  patchBroadcastsIdRoute,
  postBroadcastsIdSendRoute,
  postBroadcastsIdCancelRoute,
  postBroadcastsIdDuplicateRoute,
  getBroadcastsIdRecipientsRoute,
  getBroadcastsIdClickedLinksRoute,
} from '../routes'

export const postBroadcastsRouteHandler: RouteHandler<typeof postBroadcastsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBroadcastsRouteHandler: RouteHandler<typeof getBroadcastsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBroadcastsIdRouteHandler: RouteHandler<typeof deleteBroadcastsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBroadcastsIdRouteHandler: RouteHandler<typeof getBroadcastsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchBroadcastsIdRouteHandler: RouteHandler<typeof patchBroadcastsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postBroadcastsIdSendRouteHandler: RouteHandler<
  typeof postBroadcastsIdSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBroadcastsIdCancelRouteHandler: RouteHandler<
  typeof postBroadcastsIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBroadcastsIdDuplicateRouteHandler: RouteHandler<
  typeof postBroadcastsIdDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBroadcastsIdRecipientsRouteHandler: RouteHandler<
  typeof getBroadcastsIdRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBroadcastsIdClickedLinksRouteHandler: RouteHandler<
  typeof getBroadcastsIdClickedLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
