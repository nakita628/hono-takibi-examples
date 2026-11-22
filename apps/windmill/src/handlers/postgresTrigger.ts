import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspacePostgresTriggersDeletePathRoute,
  deleteWWorkspacePostgresTriggersPublicationDeletePublicationPathRoute,
  deleteWWorkspacePostgresTriggersSlotDeletePathRoute,
  getWWorkspacePostgresTriggersExistsPathRoute,
  getWWorkspacePostgresTriggersGetPathRoute,
  getWWorkspacePostgresTriggersGetTemplateScriptIdRoute,
  getWWorkspacePostgresTriggersIsValidPostgresConfigurationPathRoute,
  getWWorkspacePostgresTriggersListRoute,
  getWWorkspacePostgresTriggersPostgresVersionPathRoute,
  getWWorkspacePostgresTriggersPublicationGetPublicationPathRoute,
  getWWorkspacePostgresTriggersPublicationListPathRoute,
  getWWorkspacePostgresTriggersSlotListPathRoute,
  postWWorkspacePostgresTriggersCreateRoute,
  postWWorkspacePostgresTriggersCreateTemplateScriptRoute,
  postWWorkspacePostgresTriggersPublicationCreatePublicationPathRoute,
  postWWorkspacePostgresTriggersPublicationUpdatePublicationPathRoute,
  postWWorkspacePostgresTriggersSetmodePathRoute,
  postWWorkspacePostgresTriggersSlotCreatePathRoute,
  postWWorkspacePostgresTriggersTestRoute,
  postWWorkspacePostgresTriggersUpdatePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postgresTriggerHandler = app
  .openapi(getWWorkspacePostgresTriggersPostgresVersionPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspacePostgresTriggersIsValidPostgresConfigurationPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspacePostgresTriggersCreateTemplateScriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspacePostgresTriggersGetTemplateScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspacePostgresTriggersSlotListPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspacePostgresTriggersSlotCreatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspacePostgresTriggersSlotDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspacePostgresTriggersPublicationListPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspacePostgresTriggersPublicationGetPublicationPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspacePostgresTriggersPublicationCreatePublicationPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspacePostgresTriggersPublicationUpdatePublicationPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspacePostgresTriggersPublicationDeletePublicationPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspacePostgresTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspacePostgresTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspacePostgresTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspacePostgresTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspacePostgresTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspacePostgresTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspacePostgresTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspacePostgresTriggersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
