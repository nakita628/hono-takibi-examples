import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGroupsGroupIdArtifactsArtifactIdVersionsRoute,
  getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesRoute,
  getGroupsGroupIdArtifactsArtifactIdVersionsVersionRoute,
  postGroupsGroupIdArtifactsArtifactIdVersionsRoute,
  putGroupsGroupIdArtifactsArtifactIdVersionsVersionStateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const versionsHandler = app
  .openapi(getGroupsGroupIdArtifactsArtifactIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdArtifactsArtifactIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdArtifactsArtifactIdVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdArtifactsArtifactIdVersionsVersionStateRoute, (c) => {
    throw new Error('Not implemented')
  })
