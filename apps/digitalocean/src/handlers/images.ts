import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2ImagesImageIdRoute,
  getV2ImagesImageIdRoute,
  getV2ImagesRoute,
  postV2ImagesImageIdAccountTransferAcceptRoute,
  postV2ImagesImageIdAccountTransferCancelRoute,
  postV2ImagesImageIdAccountTransferDeclineRoute,
  postV2ImagesImageIdAccountTransferRoute,
  postV2ImagesRoute,
  putV2ImagesImageIdRoute,
} from '../routes'

export const getV2ImagesRouteHandler: RouteHandler<typeof getV2ImagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ImagesRouteHandler: RouteHandler<typeof postV2ImagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ImagesImageIdRouteHandler: RouteHandler<typeof getV2ImagesImageIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV2ImagesImageIdRouteHandler: RouteHandler<typeof putV2ImagesImageIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV2ImagesImageIdRouteHandler: RouteHandler<
  typeof deleteV2ImagesImageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ImagesImageIdAccountTransferRouteHandler: RouteHandler<
  typeof postV2ImagesImageIdAccountTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ImagesImageIdAccountTransferAcceptRouteHandler: RouteHandler<
  typeof postV2ImagesImageIdAccountTransferAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ImagesImageIdAccountTransferCancelRouteHandler: RouteHandler<
  typeof postV2ImagesImageIdAccountTransferCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ImagesImageIdAccountTransferDeclineRouteHandler: RouteHandler<
  typeof postV2ImagesImageIdAccountTransferDeclineRoute
> = async (c) => {
  throw new Error('Not implemented')
}
