import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postUserAccountSessionEventSendRoute,
  postUserAccountSessionGetRoute,
} from '../routes'

export const postUserAccountSessionGetRouteHandler: RouteHandler<
  typeof postUserAccountSessionGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserAccountSessionEventSendRouteHandler: RouteHandler<
  typeof postUserAccountSessionEventSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}
