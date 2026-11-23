import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminTeamsTeamIDApiKeysApiKeyIDRoute,
  getAdminSandboxesRunningCountsRoute,
  getAdminSandboxesSandboxIDRoute,
  getAdminTeamsTeamIDApiKeysRoute,
  postAdminTeamsTeamIDApiKeysRoute,
  postAdminTeamsTeamIDBuildsCancelRoute,
  postAdminTeamsTeamIDSandboxesKillRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(postAdminTeamsTeamIDSandboxesKillRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminSandboxesRunningCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminSandboxesSandboxIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTeamsTeamIDBuildsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTeamsTeamIDApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTeamsTeamIDApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminTeamsTeamIDApiKeysApiKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
