import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePaymentPolicyPaymentPolicyIdRoute,
  getPaymentPolicyGetByPolicyNameRoute,
  getPaymentPolicyPaymentPolicyIdRoute,
  getPaymentPolicyRoute,
  postPaymentPolicyRoute,
  putPaymentPolicyPaymentPolicyIdRoute,
} from '../routes'

export const getPaymentPolicyRouteHandler: RouteHandler<typeof getPaymentPolicyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPaymentPolicyRouteHandler: RouteHandler<typeof postPaymentPolicyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPaymentPolicyGetByPolicyNameRouteHandler: RouteHandler<
  typeof getPaymentPolicyGetByPolicyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePaymentPolicyPaymentPolicyIdRouteHandler: RouteHandler<
  typeof deletePaymentPolicyPaymentPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentPolicyPaymentPolicyIdRouteHandler: RouteHandler<
  typeof getPaymentPolicyPaymentPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPaymentPolicyPaymentPolicyIdRouteHandler: RouteHandler<
  typeof putPaymentPolicyPaymentPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
