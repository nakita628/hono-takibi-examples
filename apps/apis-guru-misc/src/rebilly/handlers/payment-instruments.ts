import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPaymentInstrumentsIdRoute,
  getPaymentInstrumentsRoute,
  patchPaymentInstrumentsIdRoute,
  postPaymentInstrumentsIdDeactivationRoute,
  postPaymentInstrumentsRoute,
} from '../routes'

export const getPaymentInstrumentsRouteHandler: RouteHandler<
  typeof getPaymentInstrumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentInstrumentsRouteHandler: RouteHandler<
  typeof postPaymentInstrumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentInstrumentsIdRouteHandler: RouteHandler<
  typeof getPaymentInstrumentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPaymentInstrumentsIdRouteHandler: RouteHandler<
  typeof patchPaymentInstrumentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentInstrumentsIdDeactivationRouteHandler: RouteHandler<
  typeof postPaymentInstrumentsIdDeactivationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
