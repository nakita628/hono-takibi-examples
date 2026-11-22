import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRoute,
  deleteAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRulesRuleIdRoute,
  deleteAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRulesetVersionRoute,
  deleteAccountsAccountIdRulesetsRulesetIdRoute,
  deleteAccountsAccountIdRulesetsRulesetIdRulesRuleIdRoute,
  deleteAccountsAccountIdRulesetsRulesetIdVersionsRulesetVersionRoute,
  getAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointRoute,
  getAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRoute,
  getAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRulesetVersionRoute,
  getAccountOrZoneAccountOrZoneIdRulesetsRoute,
  getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRoute,
  getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRoute,
  getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRulesetVersionByTagRuleTagRoute,
  getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRulesetVersionRoute,
  getAccountsAccountIdRulesetsPhasesRulesetPhaseEntrypointRoute,
  getAccountsAccountIdRulesetsPhasesRulesetPhaseEntrypointVersionsRoute,
  getAccountsAccountIdRulesetsPhasesRulesetPhaseEntrypointVersionsRulesetVersionRoute,
  getAccountsAccountIdRulesetsRoute,
  getAccountsAccountIdRulesetsRulesetIdRoute,
  getAccountsAccountIdRulesetsRulesetIdVersionsRoute,
  getAccountsAccountIdRulesetsRulesetIdVersionsRulesetVersionByTagRuleTagRoute,
  getAccountsAccountIdRulesetsRulesetIdVersionsRulesetVersionRoute,
  patchAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRulesRuleIdRoute,
  patchAccountsAccountIdRulesetsRulesetIdRulesRuleIdRoute,
  postAccountOrZoneAccountOrZoneIdRulesetsRoute,
  postAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRulesRoute,
  postAccountsAccountIdRulesetsRoute,
  postAccountsAccountIdRulesetsRulesetIdRulesRoute,
  putAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointRoute,
  putAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRoute,
  putAccountsAccountIdRulesetsPhasesRulesetPhaseEntrypointRoute,
  putAccountsAccountIdRulesetsRulesetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountRulesetsHandler = app
  .openapi(getAccountsAccountIdRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRulesetsPhasesRulesetPhaseEntrypointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdRulesetsPhasesRulesetPhaseEntrypointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRulesetsPhasesRulesetPhaseEntrypointVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAccountsAccountIdRulesetsPhasesRulesetPhaseEntrypointVersionsRulesetVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteAccountsAccountIdRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdRulesetsRulesetIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdRulesetsRulesetIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdRulesetsRulesetIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRulesetsRulesetIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdRulesetsRulesetIdVersionsRulesetVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRulesetsRulesetIdVersionsRulesetVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRulesetsRulesetIdVersionsRulesetVersionByTagRuleTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountOrZoneAccountOrZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRulesetVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountOrZoneAccountOrZoneIdRulesetsRulesetIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRulesetVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRulesetVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAccountOrZoneAccountOrZoneIdRulesetsRulesetIdVersionsRulesetVersionByTagRuleTagRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
