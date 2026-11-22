import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsProjectRegionsRegionInstanceGroupsInstanceGroupRoute,
  getProjectsProjectRegionsRegionInstanceGroupsRoute,
  postProjectsProjectRegionsRegionInstanceGroupsInstanceGroupListInstancesRoute,
  postProjectsProjectRegionsRegionInstanceGroupsInstanceGroupSetNamedPortsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionInstanceGroupsHandler = app
  .openapi(getProjectsProjectRegionsRegionInstanceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionInstanceGroupsInstanceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionInstanceGroupsInstanceGroupListInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionInstanceGroupsInstanceGroupSetNamedPortsRoute, (c) => {
    throw new Error('Not implemented')
  })
