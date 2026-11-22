import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGreengrassDefinitionConnectorsConnectorDefinitionIdRoute,
  deleteGreengrassDefinitionCoresCoreDefinitionIdRoute,
  deleteGreengrassDefinitionDevicesDeviceDefinitionIdRoute,
  deleteGreengrassDefinitionFunctionsFunctionDefinitionIdRoute,
  deleteGreengrassDefinitionLoggersLoggerDefinitionIdRoute,
  deleteGreengrassDefinitionResourcesResourceDefinitionIdRoute,
  deleteGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdRoute,
  deleteGreengrassGroupsGroupIdRoleRoute,
  deleteGreengrassGroupsGroupIdRoute,
  deleteGreengrassServiceroleRoute,
  getGreengrassBulkDeploymentsBulkDeploymentIdDetailedReportsRoute,
  getGreengrassBulkDeploymentsBulkDeploymentIdStatusRoute,
  getGreengrassBulkDeploymentsRoute,
  getGreengrassDefinitionConnectorsConnectorDefinitionIdRoute,
  getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionIdRoute,
  getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsRoute,
  getGreengrassDefinitionConnectorsRoute,
  getGreengrassDefinitionCoresCoreDefinitionIdRoute,
  getGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionIdRoute,
  getGreengrassDefinitionCoresCoreDefinitionIdVersionsRoute,
  getGreengrassDefinitionCoresRoute,
  getGreengrassDefinitionDevicesDeviceDefinitionIdRoute,
  getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionIdRoute,
  getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsRoute,
  getGreengrassDefinitionDevicesRoute,
  getGreengrassDefinitionFunctionsFunctionDefinitionIdRoute,
  getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionIdRoute,
  getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsRoute,
  getGreengrassDefinitionFunctionsRoute,
  getGreengrassDefinitionLoggersLoggerDefinitionIdRoute,
  getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionIdRoute,
  getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsRoute,
  getGreengrassDefinitionLoggersRoute,
  getGreengrassDefinitionResourcesResourceDefinitionIdRoute,
  getGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionIdRoute,
  getGreengrassDefinitionResourcesResourceDefinitionIdVersionsRoute,
  getGreengrassDefinitionResourcesRoute,
  getGreengrassDefinitionSubscriptionsRoute,
  getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdRoute,
  getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsRoute,
  getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionIdRoute,
  getGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityIdRoute,
  getGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryRoute,
  getGreengrassGroupsGroupIdCertificateauthoritiesRoute,
  getGreengrassGroupsGroupIdDeploymentsDeploymentIdStatusRoute,
  getGreengrassGroupsGroupIdDeploymentsRoute,
  getGreengrassGroupsGroupIdRoleRoute,
  getGreengrassGroupsGroupIdRoute,
  getGreengrassGroupsGroupIdVersionsGroupVersionIdRoute,
  getGreengrassGroupsGroupIdVersionsRoute,
  getGreengrassGroupsRoute,
  getGreengrassServiceroleRoute,
  getGreengrassThingsThingNameConnectivityInfoRoute,
  getGreengrassThingsThingNameRuntimeconfigRoute,
  postGreengrassBulkDeploymentsRoute,
  postGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsRoute,
  postGreengrassDefinitionConnectorsRoute,
  postGreengrassDefinitionCoresCoreDefinitionIdVersionsRoute,
  postGreengrassDefinitionCoresRoute,
  postGreengrassDefinitionDevicesDeviceDefinitionIdVersionsRoute,
  postGreengrassDefinitionDevicesRoute,
  postGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsRoute,
  postGreengrassDefinitionFunctionsRoute,
  postGreengrassDefinitionLoggersLoggerDefinitionIdVersionsRoute,
  postGreengrassDefinitionLoggersRoute,
  postGreengrassDefinitionResourcesResourceDefinitionIdVersionsRoute,
  postGreengrassDefinitionResourcesRoute,
  postGreengrassDefinitionSubscriptionsRoute,
  postGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsRoute,
  postGreengrassGroupsGroupIdCertificateauthoritiesRoute,
  postGreengrassGroupsGroupIdDeploymentsResetRoute,
  postGreengrassGroupsGroupIdDeploymentsRoute,
  postGreengrassGroupsGroupIdVersionsRoute,
  postGreengrassGroupsRoute,
  postGreengrassUpdatesRoute,
  putGreengrassBulkDeploymentsBulkDeploymentIdStopRoute,
  putGreengrassDefinitionConnectorsConnectorDefinitionIdRoute,
  putGreengrassDefinitionCoresCoreDefinitionIdRoute,
  putGreengrassDefinitionDevicesDeviceDefinitionIdRoute,
  putGreengrassDefinitionFunctionsFunctionDefinitionIdRoute,
  putGreengrassDefinitionLoggersLoggerDefinitionIdRoute,
  putGreengrassDefinitionResourcesResourceDefinitionIdRoute,
  putGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdRoute,
  putGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryRoute,
  putGreengrassGroupsGroupIdRoleRoute,
  putGreengrassGroupsGroupIdRoute,
  putGreengrassServiceroleRoute,
  putGreengrassThingsThingNameConnectivityInfoRoute,
  putGreengrassThingsThingNameRuntimeconfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const greengrassHandler = app
  .openapi(putGreengrassGroupsGroupIdRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGreengrassGroupsGroupIdRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassGroupsGroupIdRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGreengrassServiceroleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGreengrassServiceroleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassServiceroleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassDefinitionConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassDefinitionCoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionCoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassDefinitionCoresCoreDefinitionIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionCoresCoreDefinitionIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassGroupsGroupIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassGroupsGroupIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassDefinitionDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassDefinitionDevicesDeviceDefinitionIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassDefinitionFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassGroupsGroupIdCertificateauthoritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassGroupsGroupIdCertificateauthoritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassGroupsGroupIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassGroupsGroupIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassDefinitionLoggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionLoggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassDefinitionLoggersLoggerDefinitionIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassDefinitionResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassDefinitionResourcesResourceDefinitionIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionResourcesResourceDefinitionIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassDefinitionSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGreengrassDefinitionConnectorsConnectorDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionConnectorsConnectorDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGreengrassDefinitionConnectorsConnectorDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGreengrassDefinitionCoresCoreDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionCoresCoreDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGreengrassDefinitionCoresCoreDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGreengrassDefinitionDevicesDeviceDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionDevicesDeviceDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGreengrassDefinitionDevicesDeviceDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGreengrassDefinitionFunctionsFunctionDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionFunctionsFunctionDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGreengrassDefinitionFunctionsFunctionDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGreengrassGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGreengrassGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGreengrassDefinitionLoggersLoggerDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionLoggersLoggerDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGreengrassDefinitionLoggersLoggerDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGreengrassDefinitionResourcesResourceDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionResourcesResourceDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGreengrassDefinitionResourcesResourceDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassBulkDeploymentsBulkDeploymentIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassThingsThingNameConnectivityInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGreengrassThingsThingNameConnectivityInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGreengrassGroupsGroupIdDeploymentsDeploymentIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassGroupsGroupIdVersionsGroupVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGreengrassThingsThingNameRuntimeconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGreengrassThingsThingNameRuntimeconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassBulkDeploymentsBulkDeploymentIdDetailedReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassBulkDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassBulkDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassGroupsGroupIdDeploymentsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGreengrassBulkDeploymentsBulkDeploymentIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
