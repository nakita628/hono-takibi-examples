import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnterprisesEnterpriseIdReputationNumbersPhoneNumberRoute,
  deleteEnterprisesEnterpriseIdReputationRoute,
  deleteReputationNumbersPhoneNumberRoute,
  getEnterprisesEnterpriseIdReputationExternalVerificationRoute,
  getEnterprisesEnterpriseIdReputationNumbersPhoneNumberOwnershipRoute,
  getEnterprisesEnterpriseIdReputationNumbersPhoneNumberRoute,
  getEnterprisesEnterpriseIdReputationNumbersRoute,
  getEnterprisesEnterpriseIdReputationRemediationRemediationIdRoute,
  getEnterprisesEnterpriseIdReputationRemediationRoute,
  getEnterprisesEnterpriseIdReputationRoute,
  getReputationNumbersPhoneNumberRoute,
  getReputationNumbersRoute,
  patchEnterprisesEnterpriseIdReputationFrequencyRoute,
  patchEnterprisesEnterpriseIdReputationLoaRoute,
  patchEnterprisesEnterpriseIdReputationWebhookRoute,
  postEnterprisesEnterpriseIdReputationExternalVerificationRoute,
  postEnterprisesEnterpriseIdReputationLoaRoute,
  postEnterprisesEnterpriseIdReputationNumbersPhoneNumberOwnershipConfirmRoute,
  postEnterprisesEnterpriseIdReputationNumbersRefreshRoute,
  postEnterprisesEnterpriseIdReputationNumbersRoute,
  postEnterprisesEnterpriseIdReputationRemediationRoute,
  postEnterprisesEnterpriseIdReputationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reputationHandler = app
  .openapi(deleteEnterprisesEnterpriseIdReputationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseIdReputationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesEnterpriseIdReputationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseIdReputationExternalVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesEnterpriseIdReputationExternalVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEnterprisesEnterpriseIdReputationFrequencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEnterprisesEnterpriseIdReputationLoaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesEnterpriseIdReputationLoaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseIdReputationNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesEnterpriseIdReputationNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesEnterpriseIdReputationNumbersRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnterprisesEnterpriseIdReputationNumbersPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseIdReputationNumbersPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseIdReputationNumbersPhoneNumberOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesEnterpriseIdReputationNumbersPhoneNumberOwnershipConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseIdReputationRemediationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesEnterpriseIdReputationRemediationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseIdReputationRemediationRemediationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEnterprisesEnterpriseIdReputationWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReputationNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReputationNumbersPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReputationNumbersPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
