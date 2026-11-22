import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectZonesZoneInstanceGroupsInstanceGroupRoute,
  getProjectsProjectAggregatedInstanceGroupsRoute,
  getProjectsProjectZonesZoneInstanceGroupsInstanceGroupRoute,
  getProjectsProjectZonesZoneInstanceGroupsRoute,
  postProjectsProjectZonesZoneInstanceGroupsInstanceGroupAddInstancesRoute,
  postProjectsProjectZonesZoneInstanceGroupsInstanceGroupListInstancesRoute,
  postProjectsProjectZonesZoneInstanceGroupsInstanceGroupRemoveInstancesRoute,
  postProjectsProjectZonesZoneInstanceGroupsInstanceGroupSetNamedPortsRoute,
  postProjectsProjectZonesZoneInstanceGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instanceGroupsHandler = app
  .openapi(getProjectsProjectAggregatedInstanceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneInstanceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstanceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectZonesZoneInstanceGroupsInstanceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneInstanceGroupsInstanceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstanceGroupsInstanceGroupAddInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstanceGroupsInstanceGroupListInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstanceGroupsInstanceGroupRemoveInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstanceGroupsInstanceGroupSetNamedPortsRoute, (c) => {
    throw new Error('Not implemented')
  })
