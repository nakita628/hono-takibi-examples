import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ProjectsProjectKeyAgentGraphsGraphKeyRoute,
  deleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRoute,
  deleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdRoute,
  deleteApiV2ProjectsProjectKeyAiConfigsConfigKeyRoute,
  deleteApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyRoute,
  deleteApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyRoute,
  deleteApiV2ProjectsProjectKeyAiConfigsModelConfigsRestrictedRoute,
  deleteApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyRoute,
  deleteApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyRoute,
  deleteApiV2ProjectsProjectKeyAiToolsToolKeyRoute,
  getApiV2ProjectsProjectKeyAgentGraphsGraphKeyRoute,
  getApiV2ProjectsProjectKeyAgentGraphsRoute,
  getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyAllResultsRoute,
  getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsRoute,
  getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRoute,
  getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRoute,
  getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdResultsRoute,
  getApiV2ProjectsProjectKeyAgentOptimizationsRoute,
  getApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsByVariationRoute,
  getApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsRoute,
  getApiV2ProjectsProjectKeyAiConfigsConfigKeyRoute,
  getApiV2ProjectsProjectKeyAiConfigsConfigKeyTargetingRoute,
  getApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyRoute,
  getApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyRoute,
  getApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyVersionsRoute,
  getApiV2ProjectsProjectKeyAiConfigsModelConfigsRoute,
  getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsRoute,
  getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyReferencesRoute,
  getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyRoute,
  getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyVersionsRoute,
  getApiV2ProjectsProjectKeyAiConfigsQuickStatsRoute,
  getApiV2ProjectsProjectKeyAiConfigsRoute,
  getApiV2ProjectsProjectKeyAiConfigsSkillsRoute,
  getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyReferencesRoute,
  getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyRoute,
  getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyVersionsRoute,
  getApiV2ProjectsProjectKeyAiToolsRoute,
  getApiV2ProjectsProjectKeyAiToolsToolKeyReferencesRoute,
  getApiV2ProjectsProjectKeyAiToolsToolKeyRoute,
  getApiV2ProjectsProjectKeyAiToolsToolKeyVersionsRoute,
  patchApiV2ProjectsProjectKeyAgentGraphsGraphKeyRoute,
  patchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsResultIdRoute,
  patchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRoute,
  patchApiV2ProjectsProjectKeyAiConfigsConfigKeyRoute,
  patchApiV2ProjectsProjectKeyAiConfigsConfigKeyTargetingRoute,
  patchApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyRoute,
  patchApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyRoute,
  patchApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyRoute,
  patchApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyRoute,
  patchApiV2ProjectsProjectKeyAiToolsToolKeyRoute,
  postApiV2ProjectsProjectKeyAgentGraphsRoute,
  postApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsRoute,
  postApiV2ProjectsProjectKeyAgentOptimizationsRoute,
  postApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsRoute,
  postApiV2ProjectsProjectKeyAiConfigsModelConfigsRestrictedRoute,
  postApiV2ProjectsProjectKeyAiConfigsModelConfigsRoute,
  postApiV2ProjectsProjectKeyAiConfigsPromptSnippetsRoute,
  postApiV2ProjectsProjectKeyAiConfigsRoute,
  postApiV2ProjectsProjectKeyAiConfigsSkillsRoute,
  postApiV2ProjectsProjectKeyAiToolsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentControlHandler = app
  .openapi(getApiV2ProjectsProjectKeyAiConfigsConfigKeyTargetingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyAiConfigsConfigKeyTargetingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAiConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAiConfigsConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyAiConfigsConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyAiConfigsConfigKeyVariationsVariationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsQuickStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsConfigKeyMetricsByVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAiConfigsModelConfigsRestrictedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAiConfigsModelConfigsRestrictedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsModelConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAiConfigsModelConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsModelConfigsModelConfigKeyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAiToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiToolsToolKeyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiToolsToolKeyReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAiToolsToolKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiToolsToolKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyAiToolsToolKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAiConfigsPromptSnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsPromptSnippetsSnippetKeyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsSkillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAiConfigsSkillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAiConfigsSkillsSkillKeyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAgentGraphsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAgentGraphsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAgentGraphsGraphKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAgentGraphsGraphKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyAgentGraphsGraphKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAgentOptimizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAgentOptimizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyAllResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyRunsRunIdResultsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2ProjectsProjectKeyAgentOptimizationsOptimizationKeyResultsResultIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
