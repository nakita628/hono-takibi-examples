import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3UserTokensTokenIdRoute,
  getV3DeploymentsIdOrUrlEventsRoute,
  getV3EventsRoute,
  getV3TeamsTeamIdMembersRoute,
  patchV3DomainsDomainRoute,
  postV3SandboxesNameForkRoute,
  postV3SandboxesRoute,
  postV3SandboxesSessionsSessionIdSnapshotRoute,
  postV3UserTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
  .openapi(getV3DeploymentsIdOrUrlEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3DomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SandboxesSessionsSessionIdSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SandboxesNameForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3TeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3UserTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3UserTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
