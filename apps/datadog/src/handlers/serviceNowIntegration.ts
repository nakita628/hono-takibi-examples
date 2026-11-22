import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationServicenowHandlesTemplateIdRoute,
  getApiV2IntegrationServicenowAssignmentGroupsInstanceIdRoute,
  getApiV2IntegrationServicenowBusinessServicesInstanceIdRoute,
  getApiV2IntegrationServicenowHandlesRoute,
  getApiV2IntegrationServicenowHandlesTemplateIdRoute,
  getApiV2IntegrationServicenowInstancesRoute,
  getApiV2IntegrationServicenowUsersInstanceIdRoute,
  postApiV2IntegrationServicenowHandlesRoute,
  putApiV2IntegrationServicenowHandlesTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceNowIntegrationHandler = app
  .openapi(getApiV2IntegrationServicenowAssignmentGroupsInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationServicenowBusinessServicesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationServicenowHandlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationServicenowHandlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationServicenowHandlesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationServicenowHandlesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2IntegrationServicenowHandlesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationServicenowInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationServicenowUsersInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
