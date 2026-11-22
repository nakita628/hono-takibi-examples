import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdArtifactsArtifactIdRulesRoute,
  deleteGroupsGroupIdArtifactsArtifactIdRulesRuleRoute,
  getGroupsGroupIdArtifactsArtifactIdRulesRoute,
  getGroupsGroupIdArtifactsArtifactIdRulesRuleRoute,
  postGroupsGroupIdArtifactsArtifactIdRulesRoute,
  putGroupsGroupIdArtifactsArtifactIdRulesRuleRoute,
  putGroupsGroupIdArtifactsArtifactIdTestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const artifactRulesHandler = app
  .openapi(deleteGroupsGroupIdArtifactsArtifactIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdArtifactsArtifactIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdArtifactsArtifactIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdArtifactsArtifactIdRulesRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdArtifactsArtifactIdRulesRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdArtifactsArtifactIdRulesRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdArtifactsArtifactIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
