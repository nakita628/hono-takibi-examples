import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthTokenRoute,
  deleteDataSourcesAristaSwitchesIdRoute,
  deleteDataSourcesBrocadeSwitchesIdRoute,
  deleteDataSourcesCheckpointFirewallsIdRoute,
  deleteDataSourcesCiscoSwitchesIdRoute,
  deleteDataSourcesDellSwitchesIdRoute,
  deleteDataSourcesHpovManagersIdRoute,
  deleteDataSourcesHpvcManagersIdRoute,
  deleteDataSourcesJuniperSwitchesIdRoute,
  deleteDataSourcesNsxvManagersIdRoute,
  deleteDataSourcesPanoramaFirewallsIdRoute,
  deleteDataSourcesUcsManagersIdRoute,
  deleteDataSourcesVcentersIdRoute,
  deleteGroupsApplicationsIdRoute,
  deleteGroupsApplicationsIdTiersTierIdRoute,
  getDataSourcesAristaSwitchesIdRoute,
  getDataSourcesAristaSwitchesIdSnmpConfigRoute,
  getDataSourcesAristaSwitchesRoute,
  getDataSourcesBrocadeSwitchesIdRoute,
  getDataSourcesBrocadeSwitchesIdSnmpConfigRoute,
  getDataSourcesBrocadeSwitchesRoute,
  getDataSourcesCheckpointFirewallsIdRoute,
  getDataSourcesCheckpointFirewallsRoute,
  getDataSourcesCiscoSwitchesIdRoute,
  getDataSourcesCiscoSwitchesIdSnmpConfigRoute,
  getDataSourcesCiscoSwitchesRoute,
  getDataSourcesDellSwitchesIdRoute,
  getDataSourcesDellSwitchesIdSnmpConfigRoute,
  getDataSourcesDellSwitchesRoute,
  getDataSourcesHpovManagersIdRoute,
  getDataSourcesHpovManagersRoute,
  getDataSourcesHpvcManagersIdRoute,
  getDataSourcesHpvcManagersRoute,
  getDataSourcesJuniperSwitchesIdRoute,
  getDataSourcesJuniperSwitchesIdSnmpConfigRoute,
  getDataSourcesJuniperSwitchesRoute,
  getDataSourcesNsxvManagersIdControllerClusterRoute,
  getDataSourcesNsxvManagersIdRoute,
  getDataSourcesNsxvManagersRoute,
  getDataSourcesPanoramaFirewallsIdRoute,
  getDataSourcesPanoramaFirewallsRoute,
  getDataSourcesUcsManagersIdRoute,
  getDataSourcesUcsManagersIdSnmpConfigRoute,
  getDataSourcesUcsManagersRoute,
  getDataSourcesVcentersIdRoute,
  getDataSourcesVcentersRoute,
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
  getGroupsApplicationsIdRoute,
  getGroupsApplicationsIdTiersRoute,
  getGroupsApplicationsIdTiersTierIdRoute,
  getGroupsApplicationsRoute,
  getGroupsTiersTierIdRoute,
  getInfoVersionRoute,
  getInfraNodesIdRoute,
  getInfraNodesRoute,
  postAuthTokenRoute,
  postDataSourcesAristaSwitchesIdDisableRoute,
  postDataSourcesAristaSwitchesIdEnableRoute,
  postDataSourcesAristaSwitchesRoute,
  postDataSourcesBrocadeSwitchesIdDisableRoute,
  postDataSourcesBrocadeSwitchesIdEnableRoute,
  postDataSourcesBrocadeSwitchesRoute,
  postDataSourcesCheckpointFirewallsIdDisableRoute,
  postDataSourcesCheckpointFirewallsIdEnableRoute,
  postDataSourcesCheckpointFirewallsRoute,
  postDataSourcesCiscoSwitchesIdDisableRoute,
  postDataSourcesCiscoSwitchesIdEnableRoute,
  postDataSourcesCiscoSwitchesRoute,
  postDataSourcesDellSwitchesIdDisableRoute,
  postDataSourcesDellSwitchesIdEnableRoute,
  postDataSourcesDellSwitchesRoute,
  postDataSourcesHpovManagersIdDisableRoute,
  postDataSourcesHpovManagersIdEnableRoute,
  postDataSourcesHpovManagersRoute,
  postDataSourcesHpvcManagersIdDisableRoute,
  postDataSourcesHpvcManagersIdEnableRoute,
  postDataSourcesHpvcManagersRoute,
  postDataSourcesJuniperSwitchesIdDisableRoute,
  postDataSourcesJuniperSwitchesIdEnableRoute,
  postDataSourcesJuniperSwitchesRoute,
  postDataSourcesNsxvManagersIdDisableRoute,
  postDataSourcesNsxvManagersIdEnableRoute,
  postDataSourcesNsxvManagersRoute,
  postDataSourcesPanoramaFirewallsIdDisableRoute,
  postDataSourcesPanoramaFirewallsIdEnableRoute,
  postDataSourcesPanoramaFirewallsRoute,
  postDataSourcesUcsManagersIdDisableRoute,
  postDataSourcesUcsManagersIdEnableRoute,
  postDataSourcesUcsManagersRoute,
  postDataSourcesVcentersIdDisableRoute,
  postDataSourcesVcentersIdEnableRoute,
  postDataSourcesVcentersRoute,
  postEntitiesNamesRoute,
  postGroupsApplicationsIdTiersRoute,
  postGroupsApplicationsRoute,
  postMicroSegRecommendedRulesNsxRoute,
  postMicroSegRecommendedRulesRoute,
  postSearchRoute,
  putDataSourcesAristaSwitchesIdRoute,
  putDataSourcesAristaSwitchesIdSnmpConfigRoute,
  putDataSourcesBrocadeSwitchesIdRoute,
  putDataSourcesBrocadeSwitchesIdSnmpConfigRoute,
  putDataSourcesCheckpointFirewallsIdRoute,
  putDataSourcesCiscoSwitchesIdRoute,
  putDataSourcesCiscoSwitchesIdSnmpConfigRoute,
  putDataSourcesDellSwitchesIdRoute,
  putDataSourcesDellSwitchesIdSnmpConfigRoute,
  putDataSourcesHpovManagersIdRoute,
  putDataSourcesHpvcManagersIdRoute,
  putDataSourcesJuniperSwitchesIdRoute,
  putDataSourcesJuniperSwitchesIdSnmpConfigRoute,
  putDataSourcesNsxvManagersIdControllerClusterRoute,
  putDataSourcesNsxvManagersIdRoute,
  putDataSourcesPanoramaFirewallsIdRoute,
  putDataSourcesUcsManagersIdRoute,
  putDataSourcesUcsManagersIdSnmpConfigRoute,
  putDataSourcesVcentersIdRoute,
} from './routes'
import {
  deleteAuthTokenRouteHandler,
  deleteDataSourcesAristaSwitchesIdRouteHandler,
  deleteDataSourcesBrocadeSwitchesIdRouteHandler,
  deleteDataSourcesCheckpointFirewallsIdRouteHandler,
  deleteDataSourcesCiscoSwitchesIdRouteHandler,
  deleteDataSourcesDellSwitchesIdRouteHandler,
  deleteDataSourcesHpovManagersIdRouteHandler,
  deleteDataSourcesHpvcManagersIdRouteHandler,
  deleteDataSourcesJuniperSwitchesIdRouteHandler,
  deleteDataSourcesNsxvManagersIdRouteHandler,
  deleteDataSourcesPanoramaFirewallsIdRouteHandler,
  deleteDataSourcesUcsManagersIdRouteHandler,
  deleteDataSourcesVcentersIdRouteHandler,
  deleteGroupsApplicationsIdRouteHandler,
  deleteGroupsApplicationsIdTiersTierIdRouteHandler,
  getDataSourcesAristaSwitchesIdRouteHandler,
  getDataSourcesAristaSwitchesIdSnmpConfigRouteHandler,
  getDataSourcesAristaSwitchesRouteHandler,
  getDataSourcesBrocadeSwitchesIdRouteHandler,
  getDataSourcesBrocadeSwitchesIdSnmpConfigRouteHandler,
  getDataSourcesBrocadeSwitchesRouteHandler,
  getDataSourcesCheckpointFirewallsIdRouteHandler,
  getDataSourcesCheckpointFirewallsRouteHandler,
  getDataSourcesCiscoSwitchesIdRouteHandler,
  getDataSourcesCiscoSwitchesIdSnmpConfigRouteHandler,
  getDataSourcesCiscoSwitchesRouteHandler,
  getDataSourcesDellSwitchesIdRouteHandler,
  getDataSourcesDellSwitchesIdSnmpConfigRouteHandler,
  getDataSourcesDellSwitchesRouteHandler,
  getDataSourcesHpovManagersIdRouteHandler,
  getDataSourcesHpovManagersRouteHandler,
  getDataSourcesHpvcManagersIdRouteHandler,
  getDataSourcesHpvcManagersRouteHandler,
  getDataSourcesJuniperSwitchesIdRouteHandler,
  getDataSourcesJuniperSwitchesIdSnmpConfigRouteHandler,
  getDataSourcesJuniperSwitchesRouteHandler,
  getDataSourcesNsxvManagersIdControllerClusterRouteHandler,
  getDataSourcesNsxvManagersIdRouteHandler,
  getDataSourcesNsxvManagersRouteHandler,
  getDataSourcesPanoramaFirewallsIdRouteHandler,
  getDataSourcesPanoramaFirewallsRouteHandler,
  getDataSourcesUcsManagersIdRouteHandler,
  getDataSourcesUcsManagersIdSnmpConfigRouteHandler,
  getDataSourcesUcsManagersRouteHandler,
  getDataSourcesVcentersIdRouteHandler,
  getDataSourcesVcentersRouteHandler,
  getEntitiesClustersIdRouteHandler,
  getEntitiesClustersRouteHandler,
  getEntitiesDatastoresIdRouteHandler,
  getEntitiesDatastoresRouteHandler,
  getEntitiesDistributedVirtualPortgroupsIdRouteHandler,
  getEntitiesDistributedVirtualPortgroupsRouteHandler,
  getEntitiesDistributedVirtualSwitchesIdRouteHandler,
  getEntitiesDistributedVirtualSwitchesRouteHandler,
  getEntitiesFirewallRulesIdRouteHandler,
  getEntitiesFirewallRulesRouteHandler,
  getEntitiesFirewallsIdRouteHandler,
  getEntitiesFirewallsRouteHandler,
  getEntitiesFlowsIdRouteHandler,
  getEntitiesFlowsRouteHandler,
  getEntitiesFoldersIdRouteHandler,
  getEntitiesFoldersRouteHandler,
  getEntitiesHostsIdRouteHandler,
  getEntitiesHostsRouteHandler,
  getEntitiesIpSetsIdRouteHandler,
  getEntitiesIpSetsRouteHandler,
  getEntitiesLayer2NetworksIdRouteHandler,
  getEntitiesLayer2NetworksRouteHandler,
  getEntitiesNamesIdRouteHandler,
  getEntitiesNsxManagersIdRouteHandler,
  getEntitiesNsxManagersRouteHandler,
  getEntitiesProblemsIdRouteHandler,
  getEntitiesProblemsRouteHandler,
  getEntitiesSecurityGroupsIdRouteHandler,
  getEntitiesSecurityGroupsRouteHandler,
  getEntitiesSecurityTagsIdRouteHandler,
  getEntitiesSecurityTagsRouteHandler,
  getEntitiesServiceGroupsIdRouteHandler,
  getEntitiesServiceGroupsRouteHandler,
  getEntitiesServicesIdRouteHandler,
  getEntitiesServicesRouteHandler,
  getEntitiesVcDatacentersIdRouteHandler,
  getEntitiesVcDatacentersRouteHandler,
  getEntitiesVcenterManagersIdRouteHandler,
  getEntitiesVcenterManagersRouteHandler,
  getEntitiesVmknicsIdRouteHandler,
  getEntitiesVmknicsRouteHandler,
  getEntitiesVmsIdRouteHandler,
  getEntitiesVmsRouteHandler,
  getEntitiesVnicsIdRouteHandler,
  getEntitiesVnicsRouteHandler,
  getGroupsApplicationsIdRouteHandler,
  getGroupsApplicationsIdTiersRouteHandler,
  getGroupsApplicationsIdTiersTierIdRouteHandler,
  getGroupsApplicationsRouteHandler,
  getGroupsTiersTierIdRouteHandler,
  getInfoVersionRouteHandler,
  getInfraNodesIdRouteHandler,
  getInfraNodesRouteHandler,
  postAuthTokenRouteHandler,
  postDataSourcesAristaSwitchesIdDisableRouteHandler,
  postDataSourcesAristaSwitchesIdEnableRouteHandler,
  postDataSourcesAristaSwitchesRouteHandler,
  postDataSourcesBrocadeSwitchesIdDisableRouteHandler,
  postDataSourcesBrocadeSwitchesIdEnableRouteHandler,
  postDataSourcesBrocadeSwitchesRouteHandler,
  postDataSourcesCheckpointFirewallsIdDisableRouteHandler,
  postDataSourcesCheckpointFirewallsIdEnableRouteHandler,
  postDataSourcesCheckpointFirewallsRouteHandler,
  postDataSourcesCiscoSwitchesIdDisableRouteHandler,
  postDataSourcesCiscoSwitchesIdEnableRouteHandler,
  postDataSourcesCiscoSwitchesRouteHandler,
  postDataSourcesDellSwitchesIdDisableRouteHandler,
  postDataSourcesDellSwitchesIdEnableRouteHandler,
  postDataSourcesDellSwitchesRouteHandler,
  postDataSourcesHpovManagersIdDisableRouteHandler,
  postDataSourcesHpovManagersIdEnableRouteHandler,
  postDataSourcesHpovManagersRouteHandler,
  postDataSourcesHpvcManagersIdDisableRouteHandler,
  postDataSourcesHpvcManagersIdEnableRouteHandler,
  postDataSourcesHpvcManagersRouteHandler,
  postDataSourcesJuniperSwitchesIdDisableRouteHandler,
  postDataSourcesJuniperSwitchesIdEnableRouteHandler,
  postDataSourcesJuniperSwitchesRouteHandler,
  postDataSourcesNsxvManagersIdDisableRouteHandler,
  postDataSourcesNsxvManagersIdEnableRouteHandler,
  postDataSourcesNsxvManagersRouteHandler,
  postDataSourcesPanoramaFirewallsIdDisableRouteHandler,
  postDataSourcesPanoramaFirewallsIdEnableRouteHandler,
  postDataSourcesPanoramaFirewallsRouteHandler,
  postDataSourcesUcsManagersIdDisableRouteHandler,
  postDataSourcesUcsManagersIdEnableRouteHandler,
  postDataSourcesUcsManagersRouteHandler,
  postDataSourcesVcentersIdDisableRouteHandler,
  postDataSourcesVcentersIdEnableRouteHandler,
  postDataSourcesVcentersRouteHandler,
  postEntitiesNamesRouteHandler,
  postGroupsApplicationsIdTiersRouteHandler,
  postGroupsApplicationsRouteHandler,
  postMicroSegRecommendedRulesNsxRouteHandler,
  postMicroSegRecommendedRulesRouteHandler,
  postSearchRouteHandler,
  putDataSourcesAristaSwitchesIdRouteHandler,
  putDataSourcesAristaSwitchesIdSnmpConfigRouteHandler,
  putDataSourcesBrocadeSwitchesIdRouteHandler,
  putDataSourcesBrocadeSwitchesIdSnmpConfigRouteHandler,
  putDataSourcesCheckpointFirewallsIdRouteHandler,
  putDataSourcesCiscoSwitchesIdRouteHandler,
  putDataSourcesCiscoSwitchesIdSnmpConfigRouteHandler,
  putDataSourcesDellSwitchesIdRouteHandler,
  putDataSourcesDellSwitchesIdSnmpConfigRouteHandler,
  putDataSourcesHpovManagersIdRouteHandler,
  putDataSourcesHpvcManagersIdRouteHandler,
  putDataSourcesJuniperSwitchesIdRouteHandler,
  putDataSourcesJuniperSwitchesIdSnmpConfigRouteHandler,
  putDataSourcesNsxvManagersIdControllerClusterRouteHandler,
  putDataSourcesNsxvManagersIdRouteHandler,
  putDataSourcesPanoramaFirewallsIdRouteHandler,
  putDataSourcesUcsManagersIdRouteHandler,
  putDataSourcesUcsManagersIdSnmpConfigRouteHandler,
  putDataSourcesVcentersIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteAuthTokenRoute, deleteAuthTokenRouteHandler)
  .openapi(postAuthTokenRoute, postAuthTokenRouteHandler)
  .openapi(getDataSourcesAristaSwitchesRoute, getDataSourcesAristaSwitchesRouteHandler)
  .openapi(postDataSourcesAristaSwitchesRoute, postDataSourcesAristaSwitchesRouteHandler)
  .openapi(deleteDataSourcesAristaSwitchesIdRoute, deleteDataSourcesAristaSwitchesIdRouteHandler)
  .openapi(getDataSourcesAristaSwitchesIdRoute, getDataSourcesAristaSwitchesIdRouteHandler)
  .openapi(putDataSourcesAristaSwitchesIdRoute, putDataSourcesAristaSwitchesIdRouteHandler)
  .openapi(
    postDataSourcesAristaSwitchesIdDisableRoute,
    postDataSourcesAristaSwitchesIdDisableRouteHandler,
  )
  .openapi(
    postDataSourcesAristaSwitchesIdEnableRoute,
    postDataSourcesAristaSwitchesIdEnableRouteHandler,
  )
  .openapi(
    getDataSourcesAristaSwitchesIdSnmpConfigRoute,
    getDataSourcesAristaSwitchesIdSnmpConfigRouteHandler,
  )
  .openapi(
    putDataSourcesAristaSwitchesIdSnmpConfigRoute,
    putDataSourcesAristaSwitchesIdSnmpConfigRouteHandler,
  )
  .openapi(getDataSourcesBrocadeSwitchesRoute, getDataSourcesBrocadeSwitchesRouteHandler)
  .openapi(postDataSourcesBrocadeSwitchesRoute, postDataSourcesBrocadeSwitchesRouteHandler)
  .openapi(deleteDataSourcesBrocadeSwitchesIdRoute, deleteDataSourcesBrocadeSwitchesIdRouteHandler)
  .openapi(getDataSourcesBrocadeSwitchesIdRoute, getDataSourcesBrocadeSwitchesIdRouteHandler)
  .openapi(putDataSourcesBrocadeSwitchesIdRoute, putDataSourcesBrocadeSwitchesIdRouteHandler)
  .openapi(
    postDataSourcesBrocadeSwitchesIdDisableRoute,
    postDataSourcesBrocadeSwitchesIdDisableRouteHandler,
  )
  .openapi(
    postDataSourcesBrocadeSwitchesIdEnableRoute,
    postDataSourcesBrocadeSwitchesIdEnableRouteHandler,
  )
  .openapi(
    getDataSourcesBrocadeSwitchesIdSnmpConfigRoute,
    getDataSourcesBrocadeSwitchesIdSnmpConfigRouteHandler,
  )
  .openapi(
    putDataSourcesBrocadeSwitchesIdSnmpConfigRoute,
    putDataSourcesBrocadeSwitchesIdSnmpConfigRouteHandler,
  )
  .openapi(getDataSourcesCheckpointFirewallsRoute, getDataSourcesCheckpointFirewallsRouteHandler)
  .openapi(postDataSourcesCheckpointFirewallsRoute, postDataSourcesCheckpointFirewallsRouteHandler)
  .openapi(
    deleteDataSourcesCheckpointFirewallsIdRoute,
    deleteDataSourcesCheckpointFirewallsIdRouteHandler,
  )
  .openapi(
    getDataSourcesCheckpointFirewallsIdRoute,
    getDataSourcesCheckpointFirewallsIdRouteHandler,
  )
  .openapi(
    putDataSourcesCheckpointFirewallsIdRoute,
    putDataSourcesCheckpointFirewallsIdRouteHandler,
  )
  .openapi(
    postDataSourcesCheckpointFirewallsIdDisableRoute,
    postDataSourcesCheckpointFirewallsIdDisableRouteHandler,
  )
  .openapi(
    postDataSourcesCheckpointFirewallsIdEnableRoute,
    postDataSourcesCheckpointFirewallsIdEnableRouteHandler,
  )
  .openapi(getDataSourcesCiscoSwitchesRoute, getDataSourcesCiscoSwitchesRouteHandler)
  .openapi(postDataSourcesCiscoSwitchesRoute, postDataSourcesCiscoSwitchesRouteHandler)
  .openapi(deleteDataSourcesCiscoSwitchesIdRoute, deleteDataSourcesCiscoSwitchesIdRouteHandler)
  .openapi(getDataSourcesCiscoSwitchesIdRoute, getDataSourcesCiscoSwitchesIdRouteHandler)
  .openapi(putDataSourcesCiscoSwitchesIdRoute, putDataSourcesCiscoSwitchesIdRouteHandler)
  .openapi(
    postDataSourcesCiscoSwitchesIdDisableRoute,
    postDataSourcesCiscoSwitchesIdDisableRouteHandler,
  )
  .openapi(
    postDataSourcesCiscoSwitchesIdEnableRoute,
    postDataSourcesCiscoSwitchesIdEnableRouteHandler,
  )
  .openapi(
    getDataSourcesCiscoSwitchesIdSnmpConfigRoute,
    getDataSourcesCiscoSwitchesIdSnmpConfigRouteHandler,
  )
  .openapi(
    putDataSourcesCiscoSwitchesIdSnmpConfigRoute,
    putDataSourcesCiscoSwitchesIdSnmpConfigRouteHandler,
  )
  .openapi(getDataSourcesDellSwitchesRoute, getDataSourcesDellSwitchesRouteHandler)
  .openapi(postDataSourcesDellSwitchesRoute, postDataSourcesDellSwitchesRouteHandler)
  .openapi(deleteDataSourcesDellSwitchesIdRoute, deleteDataSourcesDellSwitchesIdRouteHandler)
  .openapi(getDataSourcesDellSwitchesIdRoute, getDataSourcesDellSwitchesIdRouteHandler)
  .openapi(putDataSourcesDellSwitchesIdRoute, putDataSourcesDellSwitchesIdRouteHandler)
  .openapi(
    postDataSourcesDellSwitchesIdDisableRoute,
    postDataSourcesDellSwitchesIdDisableRouteHandler,
  )
  .openapi(
    postDataSourcesDellSwitchesIdEnableRoute,
    postDataSourcesDellSwitchesIdEnableRouteHandler,
  )
  .openapi(
    getDataSourcesDellSwitchesIdSnmpConfigRoute,
    getDataSourcesDellSwitchesIdSnmpConfigRouteHandler,
  )
  .openapi(
    putDataSourcesDellSwitchesIdSnmpConfigRoute,
    putDataSourcesDellSwitchesIdSnmpConfigRouteHandler,
  )
  .openapi(getDataSourcesHpovManagersRoute, getDataSourcesHpovManagersRouteHandler)
  .openapi(postDataSourcesHpovManagersRoute, postDataSourcesHpovManagersRouteHandler)
  .openapi(deleteDataSourcesHpovManagersIdRoute, deleteDataSourcesHpovManagersIdRouteHandler)
  .openapi(getDataSourcesHpovManagersIdRoute, getDataSourcesHpovManagersIdRouteHandler)
  .openapi(putDataSourcesHpovManagersIdRoute, putDataSourcesHpovManagersIdRouteHandler)
  .openapi(
    postDataSourcesHpovManagersIdDisableRoute,
    postDataSourcesHpovManagersIdDisableRouteHandler,
  )
  .openapi(
    postDataSourcesHpovManagersIdEnableRoute,
    postDataSourcesHpovManagersIdEnableRouteHandler,
  )
  .openapi(getDataSourcesHpvcManagersRoute, getDataSourcesHpvcManagersRouteHandler)
  .openapi(postDataSourcesHpvcManagersRoute, postDataSourcesHpvcManagersRouteHandler)
  .openapi(deleteDataSourcesHpvcManagersIdRoute, deleteDataSourcesHpvcManagersIdRouteHandler)
  .openapi(getDataSourcesHpvcManagersIdRoute, getDataSourcesHpvcManagersIdRouteHandler)
  .openapi(putDataSourcesHpvcManagersIdRoute, putDataSourcesHpvcManagersIdRouteHandler)
  .openapi(
    postDataSourcesHpvcManagersIdDisableRoute,
    postDataSourcesHpvcManagersIdDisableRouteHandler,
  )
  .openapi(
    postDataSourcesHpvcManagersIdEnableRoute,
    postDataSourcesHpvcManagersIdEnableRouteHandler,
  )
  .openapi(getDataSourcesJuniperSwitchesRoute, getDataSourcesJuniperSwitchesRouteHandler)
  .openapi(postDataSourcesJuniperSwitchesRoute, postDataSourcesJuniperSwitchesRouteHandler)
  .openapi(deleteDataSourcesJuniperSwitchesIdRoute, deleteDataSourcesJuniperSwitchesIdRouteHandler)
  .openapi(getDataSourcesJuniperSwitchesIdRoute, getDataSourcesJuniperSwitchesIdRouteHandler)
  .openapi(putDataSourcesJuniperSwitchesIdRoute, putDataSourcesJuniperSwitchesIdRouteHandler)
  .openapi(
    postDataSourcesJuniperSwitchesIdDisableRoute,
    postDataSourcesJuniperSwitchesIdDisableRouteHandler,
  )
  .openapi(
    postDataSourcesJuniperSwitchesIdEnableRoute,
    postDataSourcesJuniperSwitchesIdEnableRouteHandler,
  )
  .openapi(
    getDataSourcesJuniperSwitchesIdSnmpConfigRoute,
    getDataSourcesJuniperSwitchesIdSnmpConfigRouteHandler,
  )
  .openapi(
    putDataSourcesJuniperSwitchesIdSnmpConfigRoute,
    putDataSourcesJuniperSwitchesIdSnmpConfigRouteHandler,
  )
  .openapi(getDataSourcesNsxvManagersRoute, getDataSourcesNsxvManagersRouteHandler)
  .openapi(postDataSourcesNsxvManagersRoute, postDataSourcesNsxvManagersRouteHandler)
  .openapi(deleteDataSourcesNsxvManagersIdRoute, deleteDataSourcesNsxvManagersIdRouteHandler)
  .openapi(getDataSourcesNsxvManagersIdRoute, getDataSourcesNsxvManagersIdRouteHandler)
  .openapi(putDataSourcesNsxvManagersIdRoute, putDataSourcesNsxvManagersIdRouteHandler)
  .openapi(
    getDataSourcesNsxvManagersIdControllerClusterRoute,
    getDataSourcesNsxvManagersIdControllerClusterRouteHandler,
  )
  .openapi(
    putDataSourcesNsxvManagersIdControllerClusterRoute,
    putDataSourcesNsxvManagersIdControllerClusterRouteHandler,
  )
  .openapi(
    postDataSourcesNsxvManagersIdDisableRoute,
    postDataSourcesNsxvManagersIdDisableRouteHandler,
  )
  .openapi(
    postDataSourcesNsxvManagersIdEnableRoute,
    postDataSourcesNsxvManagersIdEnableRouteHandler,
  )
  .openapi(getDataSourcesPanoramaFirewallsRoute, getDataSourcesPanoramaFirewallsRouteHandler)
  .openapi(postDataSourcesPanoramaFirewallsRoute, postDataSourcesPanoramaFirewallsRouteHandler)
  .openapi(
    deleteDataSourcesPanoramaFirewallsIdRoute,
    deleteDataSourcesPanoramaFirewallsIdRouteHandler,
  )
  .openapi(getDataSourcesPanoramaFirewallsIdRoute, getDataSourcesPanoramaFirewallsIdRouteHandler)
  .openapi(putDataSourcesPanoramaFirewallsIdRoute, putDataSourcesPanoramaFirewallsIdRouteHandler)
  .openapi(
    postDataSourcesPanoramaFirewallsIdDisableRoute,
    postDataSourcesPanoramaFirewallsIdDisableRouteHandler,
  )
  .openapi(
    postDataSourcesPanoramaFirewallsIdEnableRoute,
    postDataSourcesPanoramaFirewallsIdEnableRouteHandler,
  )
  .openapi(getDataSourcesUcsManagersRoute, getDataSourcesUcsManagersRouteHandler)
  .openapi(postDataSourcesUcsManagersRoute, postDataSourcesUcsManagersRouteHandler)
  .openapi(deleteDataSourcesUcsManagersIdRoute, deleteDataSourcesUcsManagersIdRouteHandler)
  .openapi(getDataSourcesUcsManagersIdRoute, getDataSourcesUcsManagersIdRouteHandler)
  .openapi(putDataSourcesUcsManagersIdRoute, putDataSourcesUcsManagersIdRouteHandler)
  .openapi(
    postDataSourcesUcsManagersIdDisableRoute,
    postDataSourcesUcsManagersIdDisableRouteHandler,
  )
  .openapi(postDataSourcesUcsManagersIdEnableRoute, postDataSourcesUcsManagersIdEnableRouteHandler)
  .openapi(
    getDataSourcesUcsManagersIdSnmpConfigRoute,
    getDataSourcesUcsManagersIdSnmpConfigRouteHandler,
  )
  .openapi(
    putDataSourcesUcsManagersIdSnmpConfigRoute,
    putDataSourcesUcsManagersIdSnmpConfigRouteHandler,
  )
  .openapi(getDataSourcesVcentersRoute, getDataSourcesVcentersRouteHandler)
  .openapi(postDataSourcesVcentersRoute, postDataSourcesVcentersRouteHandler)
  .openapi(deleteDataSourcesVcentersIdRoute, deleteDataSourcesVcentersIdRouteHandler)
  .openapi(getDataSourcesVcentersIdRoute, getDataSourcesVcentersIdRouteHandler)
  .openapi(putDataSourcesVcentersIdRoute, putDataSourcesVcentersIdRouteHandler)
  .openapi(postDataSourcesVcentersIdDisableRoute, postDataSourcesVcentersIdDisableRouteHandler)
  .openapi(postDataSourcesVcentersIdEnableRoute, postDataSourcesVcentersIdEnableRouteHandler)
  .openapi(getEntitiesClustersRoute, getEntitiesClustersRouteHandler)
  .openapi(getEntitiesClustersIdRoute, getEntitiesClustersIdRouteHandler)
  .openapi(getEntitiesDatastoresRoute, getEntitiesDatastoresRouteHandler)
  .openapi(getEntitiesDatastoresIdRoute, getEntitiesDatastoresIdRouteHandler)
  .openapi(
    getEntitiesDistributedVirtualPortgroupsRoute,
    getEntitiesDistributedVirtualPortgroupsRouteHandler,
  )
  .openapi(
    getEntitiesDistributedVirtualPortgroupsIdRoute,
    getEntitiesDistributedVirtualPortgroupsIdRouteHandler,
  )
  .openapi(
    getEntitiesDistributedVirtualSwitchesRoute,
    getEntitiesDistributedVirtualSwitchesRouteHandler,
  )
  .openapi(
    getEntitiesDistributedVirtualSwitchesIdRoute,
    getEntitiesDistributedVirtualSwitchesIdRouteHandler,
  )
  .openapi(getEntitiesFirewallRulesRoute, getEntitiesFirewallRulesRouteHandler)
  .openapi(getEntitiesFirewallRulesIdRoute, getEntitiesFirewallRulesIdRouteHandler)
  .openapi(getEntitiesFirewallsRoute, getEntitiesFirewallsRouteHandler)
  .openapi(getEntitiesFirewallsIdRoute, getEntitiesFirewallsIdRouteHandler)
  .openapi(getEntitiesFlowsRoute, getEntitiesFlowsRouteHandler)
  .openapi(getEntitiesFlowsIdRoute, getEntitiesFlowsIdRouteHandler)
  .openapi(getEntitiesFoldersRoute, getEntitiesFoldersRouteHandler)
  .openapi(getEntitiesFoldersIdRoute, getEntitiesFoldersIdRouteHandler)
  .openapi(getEntitiesHostsRoute, getEntitiesHostsRouteHandler)
  .openapi(getEntitiesHostsIdRoute, getEntitiesHostsIdRouteHandler)
  .openapi(getEntitiesIpSetsRoute, getEntitiesIpSetsRouteHandler)
  .openapi(getEntitiesIpSetsIdRoute, getEntitiesIpSetsIdRouteHandler)
  .openapi(getEntitiesLayer2NetworksRoute, getEntitiesLayer2NetworksRouteHandler)
  .openapi(getEntitiesLayer2NetworksIdRoute, getEntitiesLayer2NetworksIdRouteHandler)
  .openapi(postEntitiesNamesRoute, postEntitiesNamesRouteHandler)
  .openapi(getEntitiesNamesIdRoute, getEntitiesNamesIdRouteHandler)
  .openapi(getEntitiesNsxManagersRoute, getEntitiesNsxManagersRouteHandler)
  .openapi(getEntitiesNsxManagersIdRoute, getEntitiesNsxManagersIdRouteHandler)
  .openapi(getEntitiesProblemsRoute, getEntitiesProblemsRouteHandler)
  .openapi(getEntitiesProblemsIdRoute, getEntitiesProblemsIdRouteHandler)
  .openapi(getEntitiesSecurityGroupsRoute, getEntitiesSecurityGroupsRouteHandler)
  .openapi(getEntitiesSecurityGroupsIdRoute, getEntitiesSecurityGroupsIdRouteHandler)
  .openapi(getEntitiesSecurityTagsRoute, getEntitiesSecurityTagsRouteHandler)
  .openapi(getEntitiesSecurityTagsIdRoute, getEntitiesSecurityTagsIdRouteHandler)
  .openapi(getEntitiesServiceGroupsRoute, getEntitiesServiceGroupsRouteHandler)
  .openapi(getEntitiesServiceGroupsIdRoute, getEntitiesServiceGroupsIdRouteHandler)
  .openapi(getEntitiesServicesRoute, getEntitiesServicesRouteHandler)
  .openapi(getEntitiesServicesIdRoute, getEntitiesServicesIdRouteHandler)
  .openapi(getEntitiesVcDatacentersRoute, getEntitiesVcDatacentersRouteHandler)
  .openapi(getEntitiesVcDatacentersIdRoute, getEntitiesVcDatacentersIdRouteHandler)
  .openapi(getEntitiesVcenterManagersRoute, getEntitiesVcenterManagersRouteHandler)
  .openapi(getEntitiesVcenterManagersIdRoute, getEntitiesVcenterManagersIdRouteHandler)
  .openapi(getEntitiesVmknicsRoute, getEntitiesVmknicsRouteHandler)
  .openapi(getEntitiesVmknicsIdRoute, getEntitiesVmknicsIdRouteHandler)
  .openapi(getEntitiesVmsRoute, getEntitiesVmsRouteHandler)
  .openapi(getEntitiesVmsIdRoute, getEntitiesVmsIdRouteHandler)
  .openapi(getEntitiesVnicsRoute, getEntitiesVnicsRouteHandler)
  .openapi(getEntitiesVnicsIdRoute, getEntitiesVnicsIdRouteHandler)
  .openapi(getGroupsApplicationsRoute, getGroupsApplicationsRouteHandler)
  .openapi(postGroupsApplicationsRoute, postGroupsApplicationsRouteHandler)
  .openapi(deleteGroupsApplicationsIdRoute, deleteGroupsApplicationsIdRouteHandler)
  .openapi(getGroupsApplicationsIdRoute, getGroupsApplicationsIdRouteHandler)
  .openapi(getGroupsApplicationsIdTiersRoute, getGroupsApplicationsIdTiersRouteHandler)
  .openapi(postGroupsApplicationsIdTiersRoute, postGroupsApplicationsIdTiersRouteHandler)
  .openapi(
    deleteGroupsApplicationsIdTiersTierIdRoute,
    deleteGroupsApplicationsIdTiersTierIdRouteHandler,
  )
  .openapi(getGroupsApplicationsIdTiersTierIdRoute, getGroupsApplicationsIdTiersTierIdRouteHandler)
  .openapi(getGroupsTiersTierIdRoute, getGroupsTiersTierIdRouteHandler)
  .openapi(getInfoVersionRoute, getInfoVersionRouteHandler)
  .openapi(getInfraNodesRoute, getInfraNodesRouteHandler)
  .openapi(getInfraNodesIdRoute, getInfraNodesIdRouteHandler)
  .openapi(postMicroSegRecommendedRulesRoute, postMicroSegRecommendedRulesRouteHandler)
  .openapi(postMicroSegRecommendedRulesNsxRoute, postMicroSegRecommendedRulesNsxRouteHandler)
  .openapi(postSearchRoute, postSearchRouteHandler)

export default app
