import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFilePaymentConsentsConsentIdFileRoute,
  getFilePaymentConsentsConsentIdRoute,
  postFilePaymentConsentsConsentIdFileRoute,
  postFilePaymentConsentsRoute,
} from '../routes'

export const postFilePaymentConsentsRouteHandler: RouteHandler<
  typeof postFilePaymentConsentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilePaymentConsentsConsentIdRouteHandler: RouteHandler<
  typeof getFilePaymentConsentsConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilePaymentConsentsConsentIdFileRouteHandler: RouteHandler<
  typeof getFilePaymentConsentsConsentIdFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFilePaymentConsentsConsentIdFileRouteHandler: RouteHandler<
  typeof postFilePaymentConsentsConsentIdFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
