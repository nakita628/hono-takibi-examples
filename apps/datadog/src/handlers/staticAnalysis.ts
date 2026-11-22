import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2StaticAnalysisAiMemoryIdRoute,
  deleteApiV2StaticAnalysisAiRulesetsRulesetNameRoute,
  deleteApiV2StaticAnalysisAiRulesetsRulesetNameRulesRuleNameRoute,
  deleteApiV2StaticAnalysisCustomRulesetsRulesetNameRoute,
  deleteApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRuleNameRoute,
  getApiV2StaticAnalysisAiMemoryRoute,
  getApiV2StaticAnalysisAiPromptsRoute,
  getApiV2StaticAnalysisAiRulesetsRoute,
  getApiV2StaticAnalysisAiRulesetsRulesetNameRoute,
  getApiV2StaticAnalysisAiRulesetsRulesetNameRulesRuleNameRevisionsIdRoute,
  getApiV2StaticAnalysisAiRulesetsRulesetNameRulesRuleNameRevisionsRoute,
  getApiV2StaticAnalysisAiRulesetsRulesetNameRulesRuleNameRoute,
  getApiV2StaticAnalysisCustomRulesetsRoute,
  getApiV2StaticAnalysisCustomRulesetsRulesetNameRoute,
  getApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRuleNameRevisionsIdRoute,
  getApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRuleNameRevisionsRoute,
  getApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRuleNameRoute,
  getApiV2StaticAnalysisScaDependenciesScanJobIdRoute,
  getApiV2StaticAnalysisScaLicensesListRoute,
  patchApiV2StaticAnalysisAiRulesetsRulesetNameRoute,
  patchApiV2StaticAnalysisCustomRulesetsRulesetNameRoute,
  postApiV2StaticAnalysisAiMemoryRoute,
  postApiV2StaticAnalysisAiRulesetsRoute,
  postApiV2StaticAnalysisAiRulesetsRulesetNameRulesRoute,
  postApiV2StaticAnalysisAiRulesetsRulesetNameRulesRuleNameRevisionsRoute,
  postApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRuleNameRevisionsRevertRoute,
  postApiV2StaticAnalysisScaDependenciesRoute,
  postApiV2StaticAnalysisScaDependenciesScanRoute,
  postApiV2StaticAnalysisScaVulnerabilitiesResolveVulnerableSymbolsRoute,
  putApiV2StaticAnalysisCustomRulesetsRoute,
  putApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRoute,
  putApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRuleNameRevisionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const staticAnalysisHandler = app
  .openapi(postApiV2StaticAnalysisScaDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StaticAnalysisScaDependenciesScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisScaDependenciesScanJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisScaLicensesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StaticAnalysisScaVulnerabilitiesResolveVulnerableSymbolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisAiMemoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StaticAnalysisAiMemoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2StaticAnalysisAiMemoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisAiPromptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisAiRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StaticAnalysisAiRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2StaticAnalysisAiRulesetsRulesetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisAiRulesetsRulesetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2StaticAnalysisAiRulesetsRulesetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StaticAnalysisAiRulesetsRulesetNameRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2StaticAnalysisAiRulesetsRulesetNameRulesRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisAiRulesetsRulesetNameRulesRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisAiRulesetsRulesetNameRulesRuleNameRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StaticAnalysisAiRulesetsRulesetNameRulesRuleNameRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisAiRulesetsRulesetNameRulesRuleNameRevisionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisCustomRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2StaticAnalysisCustomRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2StaticAnalysisCustomRulesetsRulesetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisCustomRulesetsRulesetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2StaticAnalysisCustomRulesetsRulesetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRuleNameRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRuleNameRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRuleNameRevisionsRevertRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2StaticAnalysisCustomRulesetsRulesetNameRulesRuleNameRevisionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
