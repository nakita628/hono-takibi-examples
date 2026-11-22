import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute,
  getGroupsGroupIdArtifactsArtifactIdMetaRoute,
  getGroupsGroupIdArtifactsArtifactIdOwnerRoute,
  getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute,
  postGroupsGroupIdArtifactsArtifactIdMetaRoute,
  putGroupsGroupIdArtifactsArtifactIdMetaRoute,
  putGroupsGroupIdArtifactsArtifactIdOwnerRoute,
  putGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app
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
  .openapi(deleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
