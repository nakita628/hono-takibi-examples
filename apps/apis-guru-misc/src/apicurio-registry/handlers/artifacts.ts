import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdArtifactsArtifactIdRoute,
  deleteGroupsGroupIdArtifactsRoute,
  getGroupsGroupIdArtifactsArtifactIdRoute,
  getGroupsGroupIdArtifactsRoute,
  getIdsContentHashesContentHashIndexRoute,
  getIdsContentHashesContentHashReferencesRoute,
  getIdsContentIdsContentIdIndexRoute,
  getIdsContentIdsContentIdReferencesRoute,
  getIdsGlobalIdsGlobalIdReferencesRoute,
  getIdsGlobalIdsGlobalIdRoute,
  postGroupsGroupIdArtifactsRoute,
  putGroupsGroupIdArtifactsArtifactIdRoute,
  putGroupsGroupIdArtifactsArtifactIdStateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const artifactsHandler = app
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
  .openapi(putGroupsGroupIdArtifactsArtifactIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdsContentHashesContentHashIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdsContentHashesContentHashReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdsContentIdsContentIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdsContentIdsContentIdReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdsGlobalIdsGlobalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdsGlobalIdsGlobalIdReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
