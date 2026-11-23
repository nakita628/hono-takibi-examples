import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTermsOfServiceAgreementsAgreementIdRoute,
  getTermsOfServiceAgreementsRoute,
  getTermsOfServiceInfoRoute,
  getTermsOfServiceStatusRoute,
  postTermsOfServiceBrandedCallingAgreeRoute,
  postTermsOfServiceNumberReputationAgreeRoute,
} from '../routes'

export const getTermsOfServiceAgreementsRouteHandler: RouteHandler<
  typeof getTermsOfServiceAgreementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTermsOfServiceAgreementsAgreementIdRouteHandler: RouteHandler<
  typeof getTermsOfServiceAgreementsAgreementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTermsOfServiceBrandedCallingAgreeRouteHandler: RouteHandler<
  typeof postTermsOfServiceBrandedCallingAgreeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTermsOfServiceInfoRouteHandler: RouteHandler<
  typeof getTermsOfServiceInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTermsOfServiceNumberReputationAgreeRouteHandler: RouteHandler<
  typeof postTermsOfServiceNumberReputationAgreeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTermsOfServiceStatusRouteHandler: RouteHandler<
  typeof getTermsOfServiceStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
