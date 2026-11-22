import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdZtRiskScoringBehaviorsRoute,
  getAccountsAccountIdZtRiskScoringSummaryRoute,
  getAccountsAccountIdZtRiskScoringUserIdRoute,
  postAccountsAccountIdZtRiskScoringUserIdResetRoute,
  putAccountsAccountIdZtRiskScoringBehaviorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zeroTrustRiskScoringHandler = app
  .openapi(getAccountsAccountIdZtRiskScoringBehaviorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdZtRiskScoringBehaviorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdZtRiskScoringSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdZtRiskScoringUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdZtRiskScoringUserIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
