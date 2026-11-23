import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postIncomeVerificationCreateRoute,
  postIncomeVerificationDocumentsDownloadRoute,
  postIncomeVerificationPaystubsGetRoute,
  postIncomeVerificationPrecheckRoute,
  postIncomeVerificationTaxformsGetRoute,
} from '../routes'

export const postIncomeVerificationCreateRouteHandler: RouteHandler<
  typeof postIncomeVerificationCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIncomeVerificationPaystubsGetRouteHandler: RouteHandler<
  typeof postIncomeVerificationPaystubsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIncomeVerificationDocumentsDownloadRouteHandler: RouteHandler<
  typeof postIncomeVerificationDocumentsDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIncomeVerificationTaxformsGetRouteHandler: RouteHandler<
  typeof postIncomeVerificationTaxformsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIncomeVerificationPrecheckRouteHandler: RouteHandler<
  typeof postIncomeVerificationPrecheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}
