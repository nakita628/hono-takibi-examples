import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPaymentNoticesIdRoute,
  getPaymentNoticesRoute,
  getPaymentNoticesTemplatesRoute,
  postPaymentNoticesRoute,
  putPaymentNoticesIdCancelRoute,
  putPaymentNoticesIdRoute,
  putPaymentNoticesIdUncancelRoute,
} from '../routes'

export const getPaymentNoticesRouteHandler: RouteHandler<typeof getPaymentNoticesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPaymentNoticesRouteHandler: RouteHandler<typeof postPaymentNoticesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPaymentNoticesTemplatesRouteHandler: RouteHandler<
  typeof getPaymentNoticesTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentNoticesIdRouteHandler: RouteHandler<
  typeof getPaymentNoticesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPaymentNoticesIdRouteHandler: RouteHandler<
  typeof putPaymentNoticesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPaymentNoticesIdCancelRouteHandler: RouteHandler<
  typeof putPaymentNoticesIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPaymentNoticesIdUncancelRouteHandler: RouteHandler<
  typeof putPaymentNoticesIdUncancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
