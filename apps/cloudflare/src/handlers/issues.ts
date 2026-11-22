import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdWorkersObservabilityIssuesAutomationsAutomationIdRoute,
  deleteAccountsAccountIdWorkersObservabilityIssuesGroupsGroupIdMembersIssueIdRoute,
  deleteAccountsAccountIdWorkersObservabilityIssuesGroupsGroupIdRoute,
  getAccountsAccountIdWorkersObservabilityIssuesAutomationsAutomationIdRoute,
  getAccountsAccountIdWorkersObservabilityIssuesAutomationsRoute,
  getAccountsAccountIdWorkersObservabilityIssuesIssueIdOccurrencesRoute,
  getAccountsAccountIdWorkersObservabilityIssuesIssueIdRoute,
  getAccountsAccountIdWorkersObservabilityIssuesRoute,
  getAccountsAccountIdWorkersObservabilityIssuesSummaryRoute,
  patchAccountsAccountIdWorkersObservabilityIssuesIssueIdRoute,
  postAccountsAccountIdWorkersObservabilityIssuesAutomationsRoute,
  postAccountsAccountIdWorkersObservabilityIssuesGroupsGroupIdMembersRoute,
  postAccountsAccountIdWorkersObservabilityIssuesGroupsRoute,
  postAccountsAccountIdWorkersObservabilityIssuesIssueIdNotificationRunsRoute,
  putAccountsAccountIdWorkersObservabilityIssuesAutomationsAutomationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issuesHandler = app
  .openapi(getAccountsAccountIdWorkersObservabilityIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersObservabilityIssuesAutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkersObservabilityIssuesAutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdWorkersObservabilityIssuesAutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersObservabilityIssuesAutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdWorkersObservabilityIssuesAutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkersObservabilityIssuesGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdWorkersObservabilityIssuesGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkersObservabilityIssuesGroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdWorkersObservabilityIssuesGroupsGroupIdMembersIssueIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdWorkersObservabilityIssuesSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersObservabilityIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdWorkersObservabilityIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkersObservabilityIssuesIssueIdNotificationRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersObservabilityIssuesIssueIdOccurrencesRoute, (c) => {
    throw new Error('Not implemented')
  })
