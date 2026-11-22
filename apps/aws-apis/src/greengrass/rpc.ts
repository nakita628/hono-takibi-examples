import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGreengrassGroupsGroupIdRole(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.groups[':GroupId'].role.$get(args, options))
}

export async function putGreengrassGroupsGroupIdRole(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.groups[':GroupId'].role.$put(args, options))
}

export async function deleteGreengrassGroupsGroupIdRole(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.groups[':GroupId'].role.$delete(args, options))
}

export async function getGreengrassServicerole(
  args: InferRequestType<typeof client.greengrass.servicerole.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.servicerole.$get(args, options))
}

export async function putGreengrassServicerole(
  args: InferRequestType<typeof client.greengrass.servicerole.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.servicerole.$put(args, options))
}

export async function deleteGreengrassServicerole(
  args: InferRequestType<typeof client.greengrass.servicerole.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.servicerole.$delete(args, options))
}

export async function getGreengrassDefinitionConnectors(
  args: InferRequestType<typeof client.greengrass.definition.connectors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.definition.connectors.$get(args, options))
}

export async function postGreengrassDefinitionConnectors(
  args: InferRequestType<typeof client.greengrass.definition.connectors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.definition.connectors.$post(args, options))
}

export async function getGreengrassDefinitionConnectorsConnectorDefinitionIdVersions(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.connectors[':ConnectorDefinitionId'].versions.$get(args, options),
  )
}

export async function postGreengrassDefinitionConnectorsConnectorDefinitionIdVersions(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.connectors[':ConnectorDefinitionId'].versions.$post(args, options),
  )
}

export async function getGreengrassDefinitionCores(
  args: InferRequestType<typeof client.greengrass.definition.cores.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.definition.cores.$get(args, options))
}

export async function postGreengrassDefinitionCores(
  args: InferRequestType<typeof client.greengrass.definition.cores.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.definition.cores.$post(args, options))
}

export async function getGreengrassDefinitionCoresCoreDefinitionIdVersions(
  args: InferRequestType<
    (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.cores[':CoreDefinitionId'].versions.$get(args, options),
  )
}

export async function postGreengrassDefinitionCoresCoreDefinitionIdVersions(
  args: InferRequestType<
    (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.cores[':CoreDefinitionId'].versions.$post(args, options),
  )
}

export async function getGreengrassGroupsGroupIdDeployments(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.groups[':GroupId'].deployments.$get(args, options))
}

export async function postGreengrassGroupsGroupIdDeployments(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.groups[':GroupId'].deployments.$post(args, options))
}

export async function getGreengrassDefinitionDevices(
  args: InferRequestType<typeof client.greengrass.definition.devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.definition.devices.$get(args, options))
}

export async function postGreengrassDefinitionDevices(
  args: InferRequestType<typeof client.greengrass.definition.devices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.definition.devices.$post(args, options))
}

export async function getGreengrassDefinitionDevicesDeviceDefinitionIdVersions(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.devices[':DeviceDefinitionId'].versions.$get(args, options),
  )
}

export async function postGreengrassDefinitionDevicesDeviceDefinitionIdVersions(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.devices[':DeviceDefinitionId'].versions.$post(args, options),
  )
}

export async function getGreengrassDefinitionFunctions(
  args: InferRequestType<typeof client.greengrass.definition.functions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.definition.functions.$get(args, options))
}

export async function postGreengrassDefinitionFunctions(
  args: InferRequestType<typeof client.greengrass.definition.functions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.definition.functions.$post(args, options))
}

export async function getGreengrassDefinitionFunctionsFunctionDefinitionIdVersions(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.functions[':FunctionDefinitionId'].versions.$get(args, options),
  )
}

export async function postGreengrassDefinitionFunctionsFunctionDefinitionIdVersions(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.functions[':FunctionDefinitionId'].versions.$post(args, options),
  )
}

export async function getGreengrassGroups(
  args: InferRequestType<typeof client.greengrass.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.groups.$get(args, options))
}

export async function postGreengrassGroups(
  args: InferRequestType<typeof client.greengrass.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.groups.$post(args, options))
}

export async function getGreengrassGroupsGroupIdCertificateauthorities(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.groups[':GroupId'].certificateauthorities.$get(args, options),
  )
}

export async function postGreengrassGroupsGroupIdCertificateauthorities(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.groups[':GroupId'].certificateauthorities.$post(args, options),
  )
}

export async function getGreengrassGroupsGroupIdVersions(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.groups[':GroupId'].versions.$get(args, options))
}

export async function postGreengrassGroupsGroupIdVersions(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.groups[':GroupId'].versions.$post(args, options))
}

export async function getGreengrassDefinitionLoggers(
  args: InferRequestType<typeof client.greengrass.definition.loggers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.definition.loggers.$get(args, options))
}

export async function postGreengrassDefinitionLoggers(
  args: InferRequestType<typeof client.greengrass.definition.loggers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.definition.loggers.$post(args, options))
}

export async function getGreengrassDefinitionLoggersLoggerDefinitionIdVersions(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.loggers[':LoggerDefinitionId'].versions.$get(args, options),
  )
}

export async function postGreengrassDefinitionLoggersLoggerDefinitionIdVersions(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.loggers[':LoggerDefinitionId'].versions.$post(args, options),
  )
}

export async function getGreengrassDefinitionResources(
  args: InferRequestType<typeof client.greengrass.definition.resources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.definition.resources.$get(args, options))
}

export async function postGreengrassDefinitionResources(
  args: InferRequestType<typeof client.greengrass.definition.resources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.definition.resources.$post(args, options))
}

export async function getGreengrassDefinitionResourcesResourceDefinitionIdVersions(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.resources[':ResourceDefinitionId'].versions.$get(args, options),
  )
}

export async function postGreengrassDefinitionResourcesResourceDefinitionIdVersions(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.resources[':ResourceDefinitionId'].versions.$post(args, options),
  )
}

export async function postGreengrassUpdates(
  args: InferRequestType<typeof client.greengrass.updates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.updates.$post(args, options))
}

export async function getGreengrassDefinitionSubscriptions(
  args: InferRequestType<typeof client.greengrass.definition.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.definition.subscriptions.$get(args, options))
}

export async function postGreengrassDefinitionSubscriptions(
  args: InferRequestType<typeof client.greengrass.definition.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.definition.subscriptions.$post(args, options))
}

export async function getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersions(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].versions.$get(
      args,
      options,
    ),
  )
}

export async function postGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersions(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].versions.$post(
      args,
      options,
    ),
  )
}

export async function getGreengrassDefinitionConnectorsConnectorDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.connectors[':ConnectorDefinitionId'].$get(args, options),
  )
}

export async function putGreengrassDefinitionConnectorsConnectorDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.connectors[':ConnectorDefinitionId'].$put(args, options),
  )
}

export async function deleteGreengrassDefinitionConnectorsConnectorDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.connectors[':ConnectorDefinitionId'].$delete(args, options),
  )
}

export async function getGreengrassDefinitionCoresCoreDefinitionId(
  args: InferRequestType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.cores[':CoreDefinitionId'].$get(args, options),
  )
}

export async function putGreengrassDefinitionCoresCoreDefinitionId(
  args: InferRequestType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.cores[':CoreDefinitionId'].$put(args, options),
  )
}

export async function deleteGreengrassDefinitionCoresCoreDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.cores[':CoreDefinitionId'].$delete(args, options),
  )
}

export async function getGreengrassDefinitionDevicesDeviceDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.devices[':DeviceDefinitionId'].$get(args, options),
  )
}

export async function putGreengrassDefinitionDevicesDeviceDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.devices[':DeviceDefinitionId'].$put(args, options),
  )
}

export async function deleteGreengrassDefinitionDevicesDeviceDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.devices[':DeviceDefinitionId'].$delete(args, options),
  )
}

export async function getGreengrassDefinitionFunctionsFunctionDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.functions[':FunctionDefinitionId'].$get(args, options),
  )
}

export async function putGreengrassDefinitionFunctionsFunctionDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.functions[':FunctionDefinitionId'].$put(args, options),
  )
}

export async function deleteGreengrassDefinitionFunctionsFunctionDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.functions[':FunctionDefinitionId'].$delete(args, options),
  )
}

export async function getGreengrassGroupsGroupId(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.groups[':GroupId'].$get(args, options))
}

export async function putGreengrassGroupsGroupId(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.groups[':GroupId'].$put(args, options))
}

export async function deleteGreengrassGroupsGroupId(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.groups[':GroupId'].$delete(args, options))
}

export async function getGreengrassDefinitionLoggersLoggerDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.loggers[':LoggerDefinitionId'].$get(args, options),
  )
}

export async function putGreengrassDefinitionLoggersLoggerDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.loggers[':LoggerDefinitionId'].$put(args, options),
  )
}

export async function deleteGreengrassDefinitionLoggersLoggerDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.loggers[':LoggerDefinitionId'].$delete(args, options),
  )
}

export async function getGreengrassDefinitionResourcesResourceDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.resources[':ResourceDefinitionId'].$get(args, options),
  )
}

export async function putGreengrassDefinitionResourcesResourceDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.resources[':ResourceDefinitionId'].$put(args, options),
  )
}

export async function deleteGreengrassDefinitionResourcesResourceDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.resources[':ResourceDefinitionId'].$delete(args, options),
  )
}

export async function getGreengrassDefinitionSubscriptionsSubscriptionDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].$get(args, options),
  )
}

export async function putGreengrassDefinitionSubscriptionsSubscriptionDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].$put(args, options),
  )
}

export async function deleteGreengrassDefinitionSubscriptionsSubscriptionDefinitionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].$delete(args, options),
  )
}

export async function getGreengrassBulkDeploymentsBulkDeploymentIdStatus(
  args: InferRequestType<
    (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.bulk.deployments[':BulkDeploymentId'].status.$get(args, options),
  )
}

export async function getGreengrassThingsThingNameConnectivityInfo(
  args: InferRequestType<
    (typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.things[':ThingName'].connectivityInfo.$get(args, options),
  )
}

export async function putGreengrassThingsThingNameConnectivityInfo(
  args: InferRequestType<
    (typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.things[':ThingName'].connectivityInfo.$put(args, options),
  )
}

export async function getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions'][':ConnectorDefinitionVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.connectors[':ConnectorDefinitionId'].versions[
      ':ConnectorDefinitionVersionId'
    ].$get(args, options),
  )
}

export async function getGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions'][':CoreDefinitionVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.cores[':CoreDefinitionId'].versions[
      ':CoreDefinitionVersionId'
    ].$get(args, options),
  )
}

export async function getGreengrassGroupsGroupIdDeploymentsDeploymentIdStatus(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['deployments'][':DeploymentId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.groups[':GroupId'].deployments[':DeploymentId'].status.$get(args, options),
  )
}

export async function getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions'][':DeviceDefinitionVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.devices[':DeviceDefinitionId'].versions[
      ':DeviceDefinitionVersionId'
    ].$get(args, options),
  )
}

export async function getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions'][':FunctionDefinitionVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.functions[':FunctionDefinitionId'].versions[
      ':FunctionDefinitionVersionId'
    ].$get(args, options),
  )
}

export async function getGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityId(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities'][':CertificateAuthorityId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.groups[':GroupId'].certificateauthorities[':CertificateAuthorityId'].$get(
      args,
      options,
    ),
  )
}

export async function getGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiry(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.groups[':GroupId'].certificateauthorities.configuration.expiry.$get(
      args,
      options,
    ),
  )
}

export async function putGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiry(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.groups[':GroupId'].certificateauthorities.configuration.expiry.$put(
      args,
      options,
    ),
  )
}

export async function getGreengrassGroupsGroupIdVersionsGroupVersionId(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['versions'][':GroupVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.groups[':GroupId'].versions[':GroupVersionId'].$get(args, options),
  )
}

export async function getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions'][':LoggerDefinitionVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.loggers[':LoggerDefinitionId'].versions[
      ':LoggerDefinitionVersionId'
    ].$get(args, options),
  )
}

export async function getGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions'][':ResourceDefinitionVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.resources[':ResourceDefinitionId'].versions[
      ':ResourceDefinitionVersionId'
    ].$get(args, options),
  )
}

export async function getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionId(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions'][':SubscriptionDefinitionVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].versions[
      ':SubscriptionDefinitionVersionId'
    ].$get(args, options),
  )
}

export async function getGreengrassThingsThingNameRuntimeconfig(
  args: InferRequestType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.things[':ThingName'].runtimeconfig.$get(args, options),
  )
}

export async function putGreengrassThingsThingNameRuntimeconfig(
  args: InferRequestType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.things[':ThingName'].runtimeconfig.$put(args, options),
  )
}

export async function getGreengrassBulkDeploymentsBulkDeploymentIdDetailedReports(
  args: InferRequestType<
    (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['detailed-reports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.bulk.deployments[':BulkDeploymentId']['detailed-reports'].$get(args, options),
  )
}

export async function getGreengrassBulkDeployments(
  args: InferRequestType<typeof client.greengrass.bulk.deployments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.bulk.deployments.$get(args, options))
}

export async function postGreengrassBulkDeployments(
  args: InferRequestType<typeof client.greengrass.bulk.deployments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.bulk.deployments.$post(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resource-arn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resource-arn'].$post(args, options))
}

export async function postGreengrassGroupsGroupIdDeploymentsReset(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['deployments']['$reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.groups[':GroupId'].deployments.$reset.$post(args, options),
  )
}

export async function putGreengrassBulkDeploymentsBulkDeploymentIdStop(
  args: InferRequestType<
    (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['$stop']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.bulk.deployments[':BulkDeploymentId'].$stop.$put(args, options),
  )
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resource-arn#tagKeys'].$delete(args, options))
}
