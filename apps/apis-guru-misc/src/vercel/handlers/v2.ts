import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2AliasesAliasIdRoute,
  deleteV2DomainsDomainRecordsRecordIdRoute,
  deleteV2SecretsIdOrNameRoute,
  getV2DeploymentsIdAliasesRoute,
  getV2DeploymentsIdOrUrlEventsRoute,
  getV2IntegrationsLogDrainsRoute,
  getV2TeamsRoute,
  getV2TeamsTeamIdMembersRoute,
  getV2TeamsTeamIdRoute,
  getV2UserRoute,
  patchV2SecretsNameRoute,
  patchV2TeamsTeamIdRoute,
  postV2DeploymentsIdAliasesRoute,
  postV2DomainsDomainRecordsRoute,
  postV2FilesRoute,
  postV2IntegrationsLogDrainsRoute,
  postV2SecretsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(deleteV2AliasesAliasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DeploymentsIdOrUrlEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DeploymentsIdAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DeploymentsIdAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DomainsDomainRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DomainsDomainRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2IntegrationsLogDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2IntegrationsLogDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SecretsIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SecretsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SecretsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2TeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamsTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserRoute, (c) => {
    throw new Error('Not implemented')
  })
