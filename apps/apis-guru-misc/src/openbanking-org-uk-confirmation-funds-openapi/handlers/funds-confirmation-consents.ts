import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFundsConfirmationConsentsConsentIdRoute,
  getFundsConfirmationConsentsConsentIdRoute,
  postFundsConfirmationConsentsRoute,
} from '../routes'

export const postFundsConfirmationConsentsRouteHandler: RouteHandler<
  typeof postFundsConfirmationConsentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFundsConfirmationConsentsConsentIdRouteHandler: RouteHandler<
  typeof deleteFundsConfirmationConsentsConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFundsConfirmationConsentsConsentIdRouteHandler: RouteHandler<
  typeof getFundsConfirmationConsentsConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
