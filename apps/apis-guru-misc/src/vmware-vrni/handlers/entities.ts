import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEntitiesClustersIdRoute,
  getEntitiesClustersRoute,
  getEntitiesDatastoresIdRoute,
  getEntitiesDatastoresRoute,
  getEntitiesDistributedVirtualPortgroupsIdRoute,
  getEntitiesDistributedVirtualPortgroupsRoute,
  getEntitiesDistributedVirtualSwitchesIdRoute,
  getEntitiesDistributedVirtualSwitchesRoute,
  getEntitiesFirewallRulesIdRoute,
  getEntitiesFirewallRulesRoute,
  getEntitiesFirewallsIdRoute,
  getEntitiesFirewallsRoute,
  getEntitiesFlowsIdRoute,
  getEntitiesFlowsRoute,
  getEntitiesFoldersIdRoute,
  getEntitiesFoldersRoute,
  getEntitiesHostsIdRoute,
  getEntitiesHostsRoute,
  getEntitiesIpSetsIdRoute,
  getEntitiesIpSetsRoute,
  getEntitiesLayer2NetworksIdRoute,
  getEntitiesLayer2NetworksRoute,
  getEntitiesNamesIdRoute,
  getEntitiesNsxManagersIdRoute,
  getEntitiesNsxManagersRoute,
  getEntitiesProblemsIdRoute,
  getEntitiesProblemsRoute,
  getEntitiesSecurityGroupsIdRoute,
  getEntitiesSecurityGroupsRoute,
  getEntitiesSecurityTagsIdRoute,
  getEntitiesSecurityTagsRoute,
  getEntitiesServiceGroupsIdRoute,
  getEntitiesServiceGroupsRoute,
  getEntitiesServicesIdRoute,
  getEntitiesServicesRoute,
  getEntitiesVcDatacentersIdRoute,
  getEntitiesVcDatacentersRoute,
  getEntitiesVcenterManagersIdRoute,
  getEntitiesVcenterManagersRoute,
  getEntitiesVmknicsIdRoute,
  getEntitiesVmknicsRoute,
  getEntitiesVmsIdRoute,
  getEntitiesVmsRoute,
  getEntitiesVnicsIdRoute,
  getEntitiesVnicsRoute,
  postEntitiesNamesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const entitiesHandler = app
  .openapi(getEntitiesClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesClustersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesDatastoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesDatastoresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesDistributedVirtualPortgroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesDistributedVirtualPortgroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesDistributedVirtualSwitchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesDistributedVirtualSwitchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesFirewallRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesFirewallsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesHostsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesIpSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesIpSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesLayer2NetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesLayer2NetworksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEntitiesNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesNamesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesNsxManagersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesNsxManagersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesProblemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesProblemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesSecurityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesSecurityGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesSecurityTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesSecurityTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesServiceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesServiceGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesVcDatacentersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesVcDatacentersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesVcenterManagersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesVcenterManagersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesVmknicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesVmknicsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesVmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesVmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesVnicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntitiesVnicsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
