import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdLogIntegrationsIdRoute,
  deleteApiAtlasV2GroupsGroupIdPushBasedLogExportRoute,
  deleteApiAtlasV2OrgsOrgIdLogIntegrationsLogIntegrationIdRoute,
  getApiAtlasV2GroupsGroupIdLogIntegrationsIdRoute,
  getApiAtlasV2GroupsGroupIdLogIntegrationsRoute,
  getApiAtlasV2GroupsGroupIdPushBasedLogExportRoute,
  getApiAtlasV2OrgsOrgIdLogIntegrationsLogIntegrationIdRoute,
  getApiAtlasV2OrgsOrgIdLogIntegrationsRoute,
  patchApiAtlasV2GroupsGroupIdPushBasedLogExportRoute,
  postApiAtlasV2GroupsGroupIdLogIntegrationsRoute,
  postApiAtlasV2GroupsGroupIdPushBasedLogExportRoute,
  postApiAtlasV2OrgsOrgIdLogIntegrationsRoute,
  putApiAtlasV2GroupsGroupIdLogIntegrationsIdRoute,
  putApiAtlasV2OrgsOrgIdLogIntegrationsLogIntegrationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pushBasedLogExportHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdLogIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdLogIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdLogIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdLogIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAtlasV2GroupsGroupIdLogIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdPushBasedLogExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdPushBasedLogExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdPushBasedLogExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdPushBasedLogExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdLogIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdLogIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2OrgsOrgIdLogIntegrationsLogIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdLogIntegrationsLogIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAtlasV2OrgsOrgIdLogIntegrationsLogIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
