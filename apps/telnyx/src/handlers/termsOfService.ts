import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTermsOfServiceAgreementsAgreementIdRoute,
  getTermsOfServiceAgreementsRoute,
  getTermsOfServiceInfoRoute,
  getTermsOfServiceStatusRoute,
  postTermsOfServiceBrandedCallingAgreeRoute,
  postTermsOfServiceNumberReputationAgreeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const termsOfServiceHandler = app
  .openapi(getTermsOfServiceAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTermsOfServiceAgreementsAgreementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTermsOfServiceBrandedCallingAgreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTermsOfServiceInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTermsOfServiceNumberReputationAgreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTermsOfServiceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
