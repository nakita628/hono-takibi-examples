import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdArtifactsArtifactIdRoute,
  deleteGroupsGroupIdArtifactsArtifactIdRulesRoute,
  deleteGroupsGroupIdArtifactsArtifactIdRulesRuleRoute,
  deleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute,
  deleteGroupsGroupIdArtifactsRoute,
  deleteGroupsGroupIdRoute,
  getGroupsGroupIdArtifactsArtifactIdMetaRoute,
  getGroupsGroupIdArtifactsArtifactIdOwnerRoute,
  getGroupsGroupIdArtifactsArtifactIdRoute,
  getGroupsGroupIdArtifactsArtifactIdRulesRoute,
  getGroupsGroupIdArtifactsArtifactIdRulesRuleRoute,
  getGroupsGroupIdArtifactsArtifactIdVersionsRoute,
  getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute,
  getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesRoute,
  getGroupsGroupIdArtifactsArtifactIdVersionsVersionRoute,
  getGroupsGroupIdArtifactsRoute,
  getGroupsGroupIdRoute,
  getGroupsRoute,
  postGroupsGroupIdArtifactsArtifactIdMetaRoute,
  postGroupsGroupIdArtifactsArtifactIdRulesRoute,
  postGroupsGroupIdArtifactsArtifactIdVersionsRoute,
  postGroupsGroupIdArtifactsRoute,
  postGroupsRoute,
  putGroupsGroupIdArtifactsArtifactIdMetaRoute,
  putGroupsGroupIdArtifactsArtifactIdOwnerRoute,
  putGroupsGroupIdArtifactsArtifactIdRoute,
  putGroupsGroupIdArtifactsArtifactIdRulesRuleRoute,
  putGroupsGroupIdArtifactsArtifactIdStateRoute,
  putGroupsGroupIdArtifactsArtifactIdTestRoute,
  putGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute,
  putGroupsGroupIdArtifactsArtifactIdVersionsVersionStateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdArtifactsArtifactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdArtifactsArtifactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdArtifactsArtifactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdArtifactsArtifactIdMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdArtifactsArtifactIdMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdArtifactsArtifactIdMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdArtifactsArtifactIdOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdArtifactsArtifactIdOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(putGroupsGroupIdArtifactsArtifactIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdArtifactsArtifactIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdArtifactsArtifactIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdArtifactsArtifactIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdArtifactsArtifactIdVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdArtifactsArtifactIdVersionsVersionStateRoute, (c) => {
    throw new Error('Not implemented')
  })
