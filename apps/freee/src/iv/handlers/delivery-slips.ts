import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDeliverySlipsIdRoute,
  getDeliverySlipsRoute,
  getDeliverySlipsTemplatesRoute,
  postDeliverySlipsRoute,
  putDeliverySlipsIdCancelRoute,
  putDeliverySlipsIdRoute,
  putDeliverySlipsIdUncancelRoute,
} from '../routes'

export const getDeliverySlipsRouteHandler: RouteHandler<typeof getDeliverySlipsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDeliverySlipsRouteHandler: RouteHandler<typeof postDeliverySlipsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDeliverySlipsTemplatesRouteHandler: RouteHandler<
  typeof getDeliverySlipsTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeliverySlipsIdRouteHandler: RouteHandler<typeof getDeliverySlipsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putDeliverySlipsIdRouteHandler: RouteHandler<typeof putDeliverySlipsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putDeliverySlipsIdCancelRouteHandler: RouteHandler<
  typeof putDeliverySlipsIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDeliverySlipsIdUncancelRouteHandler: RouteHandler<
  typeof putDeliverySlipsIdUncancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
