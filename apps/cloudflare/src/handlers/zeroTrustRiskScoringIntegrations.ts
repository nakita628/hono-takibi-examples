import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdZtRiskScoringIntegrationsIntegrationIdRoute,
  getAccountsAccountIdZtRiskScoringIntegrationsIntegrationIdRoute,
  getAccountsAccountIdZtRiskScoringIntegrationsReferenceIdReferenceIdRoute,
  getAccountsAccountIdZtRiskScoringIntegrationsRoute,
  postAccountsAccountIdZtRiskScoringIntegrationsRoute,
  putAccountsAccountIdZtRiskScoringIntegrationsIntegrationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zeroTrustRiskScoringIntegrationsHandler = app
  .openapi(getAccountsAccountIdZtRiskScoringIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdZtRiskScoringIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdZtRiskScoringIntegrationsReferenceIdReferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdZtRiskScoringIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdZtRiskScoringIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdZtRiskScoringIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
