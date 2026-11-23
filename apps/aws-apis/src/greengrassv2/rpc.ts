import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

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

export async function postGreengrassV2CoreDevicesCoreDeviceThingNameAssociateClientDevices(
  args: InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associateClientDevices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.v2.coreDevices[':coreDeviceThingName'].associateClientDevices.$post(
      args,
      options,
    ),
  )
}

export async function postGreengrassV2CoreDevicesCoreDeviceThingNameDisassociateClientDevices(
  args: InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['disassociateClientDevices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.v2.coreDevices[':coreDeviceThingName'].disassociateClientDevices.$post(
      args,
      options,
    ),
  )
}

export async function postGreengrassV2DeploymentsDeploymentIdCancel(
  args: InferRequestType<
    (typeof client.greengrass.v2.deployments)[':deploymentId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.v2.deployments[':deploymentId'].cancel.$post(args, options),
  )
}

export async function postGreengrassV2CreateComponentVersion(
  args: InferRequestType<typeof client.greengrass.v2.createComponentVersion.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.v2.createComponentVersion.$post(args, options))
}

export async function getGreengrassV2Deployments(
  args: InferRequestType<typeof client.greengrass.v2.deployments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.v2.deployments.$get(args, options))
}

export async function postGreengrassV2Deployments(
  args: InferRequestType<typeof client.greengrass.v2.deployments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.v2.deployments.$post(args, options))
}

export async function getGreengrassV2ComponentsArn(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.v2.components[':arn'].$get(args, options))
}

export async function deleteGreengrassV2ComponentsArn(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.v2.components[':arn'].$delete(args, options))
}

export async function getGreengrassV2CoreDevicesCoreDeviceThingName(
  args: InferRequestType<(typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.v2.coreDevices[':coreDeviceThingName'].$get(args, options),
  )
}

export async function deleteGreengrassV2CoreDevicesCoreDeviceThingName(
  args: InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.v2.coreDevices[':coreDeviceThingName'].$delete(args, options),
  )
}

export async function getGreengrassV2DeploymentsDeploymentId(
  args: InferRequestType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.v2.deployments[':deploymentId'].$get(args, options))
}

export async function deleteGreengrassV2DeploymentsDeploymentId(
  args: InferRequestType<(typeof client.greengrass.v2.deployments)[':deploymentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.v2.deployments[':deploymentId'].$delete(args, options),
  )
}

export async function getGreengrassV2ComponentsArnMetadata(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.v2.components[':arn'].metadata.$get(args, options))
}

export async function getGreengrassV2ComponentsArnArtifactsArtifactName(
  args: InferRequestType<
    (typeof client.greengrass.v2.components)[':arn']['artifacts'][':artifactName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.v2.components[':arn'].artifacts[':artifactName'].$get(args, options),
  )
}

export async function getGreengrassThingsThingNameConnectivityInfo(
  args: InferRequestType<
    (typeof client.greengrass.things)[':thingName']['connectivityInfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.things[':thingName'].connectivityInfo.$get(args, options),
  )
}

export async function putGreengrassThingsThingNameConnectivityInfo(
  args: InferRequestType<
    (typeof client.greengrass.things)[':thingName']['connectivityInfo']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.things[':thingName'].connectivityInfo.$put(args, options),
  )
}

export async function getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevices(
  args: InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['associatedClientDevices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.v2.coreDevices[':coreDeviceThingName'].associatedClientDevices.$get(
      args,
      options,
    ),
  )
}

export async function getGreengrassV2ComponentsArnVersions(
  args: InferRequestType<(typeof client.greengrass.v2.components)[':arn']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.v2.components[':arn'].versions.$get(args, options))
}

export async function getGreengrassV2Components(
  args: InferRequestType<typeof client.greengrass.v2.components.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.v2.components.$get(args, options))
}

export async function getGreengrassV2CoreDevices(
  args: InferRequestType<typeof client.greengrass.v2.coreDevices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.v2.coreDevices.$get(args, options))
}

export async function getGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeployments(
  args: InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['effectiveDeployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.v2.coreDevices[':coreDeviceThingName'].effectiveDeployments.$get(
      args,
      options,
    ),
  )
}

export async function getGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponents(
  args: InferRequestType<
    (typeof client.greengrass.v2.coreDevices)[':coreDeviceThingName']['installedComponents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.greengrass.v2.coreDevices[':coreDeviceThingName'].installedComponents.$get(
      args,
      options,
    ),
  )
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function postGreengrassV2ResolveComponentCandidates(
  args: InferRequestType<typeof client.greengrass.v2.resolveComponentCandidates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.greengrass.v2.resolveComponentCandidates.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}
