import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectZonesZoneNodeGroupsNodeGroupRoute,
  getProjectsProjectAggregatedNodeGroupsRoute,
  getProjectsProjectZonesZoneNodeGroupsNodeGroupRoute,
  getProjectsProjectZonesZoneNodeGroupsResourceGetIamPolicyRoute,
  getProjectsProjectZonesZoneNodeGroupsRoute,
  patchProjectsProjectZonesZoneNodeGroupsNodeGroupRoute,
  postProjectsProjectZonesZoneNodeGroupsNodeGroupAddNodesRoute,
  postProjectsProjectZonesZoneNodeGroupsNodeGroupDeleteNodesRoute,
  postProjectsProjectZonesZoneNodeGroupsNodeGroupListNodesRoute,
  postProjectsProjectZonesZoneNodeGroupsNodeGroupSetNodeTemplateRoute,
  postProjectsProjectZonesZoneNodeGroupsNodeGroupSimulateMaintenanceEventRoute,
  postProjectsProjectZonesZoneNodeGroupsResourceSetIamPolicyRoute,
  postProjectsProjectZonesZoneNodeGroupsResourceTestIamPermissionsRoute,
  postProjectsProjectZonesZoneNodeGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodeGroupsHandler = app
  .openapi(getProjectsProjectAggregatedNodeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneNodeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneNodeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectZonesZoneNodeGroupsNodeGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneNodeGroupsNodeGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectZonesZoneNodeGroupsNodeGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneNodeGroupsNodeGroupAddNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneNodeGroupsNodeGroupDeleteNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneNodeGroupsNodeGroupListNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneNodeGroupsNodeGroupSetNodeTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneNodeGroupsNodeGroupSimulateMaintenanceEventRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneNodeGroupsResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneNodeGroupsResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneNodeGroupsResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
