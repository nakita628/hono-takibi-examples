import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiApikeys(options?: ClientRequestOptions) {
  return await parseResponse(client.api.apikeys.$get(undefined, options))
}

export async function getApiAuths(options?: ClientRequestOptions) {
  return await parseResponse(client.api.auths.$get(undefined, options))
}

export async function postApiAuths(
  args: InferRequestType<typeof client.api.auths.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auths.$post(args, options))
}

export async function getApiAuthsId(
  args: InferRequestType<(typeof client.api.auths)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auths[':id'].$get(args, options))
}

export async function putApiAuthsId(
  args: InferRequestType<(typeof client.api.auths)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auths[':id'].$put(args, options))
}

export async function deleteApiAuthsId(
  args: InferRequestType<(typeof client.api.auths)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auths[':id'].$delete(args, options))
}

export async function patchApiAuthsId(
  args: InferRequestType<(typeof client.api.auths)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auths[':id'].$patch(args, options))
}

export async function getApiCertificates(options?: ClientRequestOptions) {
  return await parseResponse(client.api.certificates.$get(undefined, options))
}

export async function postApiCertificates(
  args: InferRequestType<typeof client.api.certificates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.certificates.$post(args, options))
}

export async function getApiCertificatesId(
  args: InferRequestType<(typeof client.api.certificates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.certificates[':id'].$get(args, options))
}

export async function putApiCertificatesId(
  args: InferRequestType<(typeof client.api.certificates)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.certificates[':id'].$put(args, options))
}

export async function deleteApiCertificatesId(
  args: InferRequestType<(typeof client.api.certificates)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.certificates[':id'].$delete(args, options))
}

export async function patchApiCertificatesId(
  args: InferRequestType<(typeof client.api.certificates)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.certificates[':id'].$patch(args, options))
}

export async function getApiClientValidators(options?: ClientRequestOptions) {
  return await parseResponse(client.api['client-validators'].$get(undefined, options))
}

export async function postApiClientValidators(
  args: InferRequestType<(typeof client.api)['client-validators']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['client-validators'].$post(args, options))
}

export async function getApiClientValidatorsId(
  args: InferRequestType<(typeof client.api)['client-validators'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['client-validators'][':id'].$get(args, options))
}

export async function putApiClientValidatorsId(
  args: InferRequestType<(typeof client.api)['client-validators'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['client-validators'][':id'].$put(args, options))
}

export async function deleteApiClientValidatorsId(
  args: InferRequestType<(typeof client.api)['client-validators'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['client-validators'][':id'].$delete(args, options))
}

export async function patchApiClientValidatorsId(
  args: InferRequestType<(typeof client.api)['client-validators'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['client-validators'][':id'].$patch(args, options))
}

export async function getApiDataExporterConfigs(options?: ClientRequestOptions) {
  return await parseResponse(client.api['data-exporter-configs'].$get(undefined, options))
}

export async function postApiDataExporterConfigs(
  args: InferRequestType<(typeof client.api)['data-exporter-configs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['data-exporter-configs'].$post(args, options))
}

export async function putApiDataExporterConfigsBulk(
  args: InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['data-exporter-configs']._bulk.$put(args, options))
}

export async function postApiDataExporterConfigsBulk(
  args: InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['data-exporter-configs']._bulk.$post(args, options))
}

export async function deleteApiDataExporterConfigsBulk(
  args: InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['data-exporter-configs']._bulk.$delete(args, options))
}

export async function patchApiDataExporterConfigsBulk(
  args: InferRequestType<(typeof client.api)['data-exporter-configs']['_bulk']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['data-exporter-configs']._bulk.$patch(args, options))
}

export async function getApiDataExporterConfigsTemplate(
  args: InferRequestType<(typeof client.api)['data-exporter-configs']['_template']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['data-exporter-configs']._template.$get(args, options))
}

export async function getApiDataExporterConfigsDataExporterConfigId(
  args: InferRequestType<
    (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['data-exporter-configs'][':dataExporterConfigId'].$get(args, options),
  )
}

export async function putApiDataExporterConfigsDataExporterConfigId(
  args: InferRequestType<
    (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['data-exporter-configs'][':dataExporterConfigId'].$put(args, options),
  )
}

export async function deleteApiDataExporterConfigsDataExporterConfigId(
  args: InferRequestType<
    (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['data-exporter-configs'][':dataExporterConfigId'].$delete(args, options),
  )
}

export async function patchApiDataExporterConfigsDataExporterConfigId(
  args: InferRequestType<
    (typeof client.api)['data-exporter-configs'][':dataExporterConfigId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['data-exporter-configs'][':dataExporterConfigId'].$patch(args, options),
  )
}

export async function getApiGlobalconfig(options?: ClientRequestOptions) {
  return await parseResponse(client.api.globalconfig.$get(undefined, options))
}

export async function putApiGlobalconfig(
  args: InferRequestType<typeof client.api.globalconfig.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.globalconfig.$put(args, options))
}

export async function patchApiGlobalconfig(
  args: InferRequestType<typeof client.api.globalconfig.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.globalconfig.$patch(args, options))
}

export async function getApiGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.api.groups.$get(undefined, options))
}

export async function postApiGroups(
  args: InferRequestType<typeof client.api.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.groups.$post(args, options))
}

export async function getApiGroupsGroupIdApikeys(
  args: InferRequestType<(typeof client.api.groups)[':groupId']['apikeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.groups[':groupId'].apikeys.$get(args, options))
}

export async function postApiGroupsGroupIdApikeys(
  args: InferRequestType<(typeof client.api.groups)[':groupId']['apikeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.groups[':groupId'].apikeys.$post(args, options))
}

export async function getApiGroupsGroupIdApikeysClientId(
  args: InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.groups[':groupId'].apikeys[':clientId'].$get(args, options))
}

export async function putApiGroupsGroupIdApikeysClientId(
  args: InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.groups[':groupId'].apikeys[':clientId'].$put(args, options))
}

export async function deleteApiGroupsGroupIdApikeysClientId(
  args: InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.groups[':groupId'].apikeys[':clientId'].$delete(args, options),
  )
}

export async function patchApiGroupsGroupIdApikeysClientId(
  args: InferRequestType<(typeof client.api.groups)[':groupId']['apikeys'][':clientId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.groups[':groupId'].apikeys[':clientId'].$patch(args, options),
  )
}

export async function getApiGroupsGroupIdApikeysClientIdQuotas(
  args: InferRequestType<
    (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.groups[':groupId'].apikeys[':clientId'].quotas.$get(args, options),
  )
}

export async function deleteApiGroupsGroupIdApikeysClientIdQuotas(
  args: InferRequestType<
    (typeof client.api.groups)[':groupId']['apikeys'][':clientId']['quotas']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.groups[':groupId'].apikeys[':clientId'].quotas.$delete(args, options),
  )
}

export async function getApiGroupsServiceGroupId(
  args: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.groups[':serviceGroupId'].$get(args, options))
}

export async function putApiGroupsServiceGroupId(
  args: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.groups[':serviceGroupId'].$put(args, options))
}

export async function deleteApiGroupsServiceGroupId(
  args: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.groups[':serviceGroupId'].$delete(args, options))
}

export async function patchApiGroupsServiceGroupId(
  args: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.groups[':serviceGroupId'].$patch(args, options))
}

export async function getApiGroupsServiceGroupIdServices(
  args: InferRequestType<(typeof client.api.groups)[':serviceGroupId']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.groups[':serviceGroupId'].services.$get(args, options))
}

export async function postApiImport(
  args: InferRequestType<typeof client.api.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.import.$post(args, options))
}

export async function getApiLive(options?: ClientRequestOptions) {
  return await parseResponse(client.api.live.$get(undefined, options))
}

export async function getApiLiveId(
  args: InferRequestType<(typeof client.api.live)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.live[':id'].$get(args, options))
}

export async function getApiOtoroshiJson(options?: ClientRequestOptions) {
  return await parseResponse(client.api['otoroshi.json'].$get(undefined, options))
}

export async function postApiOtoroshiJson(
  args: InferRequestType<(typeof client.api)['otoroshi.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['otoroshi.json'].$post(args, options))
}

export async function getApiScripts(options?: ClientRequestOptions) {
  return await parseResponse(client.api.scripts.$get(undefined, options))
}

export async function postApiScripts(
  args: InferRequestType<typeof client.api.scripts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.scripts.$post(args, options))
}

export async function postApiScriptsCompile(
  args: InferRequestType<typeof client.api.scripts._compile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.scripts._compile.$post(args, options))
}

export async function getApiScriptsScriptId(
  args: InferRequestType<(typeof client.api.scripts)[':scriptId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.scripts[':scriptId'].$get(args, options))
}

export async function putApiScriptsScriptId(
  args: InferRequestType<(typeof client.api.scripts)[':scriptId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.scripts[':scriptId'].$put(args, options))
}

export async function deleteApiScriptsScriptId(
  args: InferRequestType<(typeof client.api.scripts)[':scriptId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.scripts[':scriptId'].$delete(args, options))
}

export async function patchApiScriptsScriptId(
  args: InferRequestType<(typeof client.api.scripts)[':scriptId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.scripts[':scriptId'].$patch(args, options))
}

export async function getApiServices(options?: ClientRequestOptions) {
  return await parseResponse(client.api.services.$get(undefined, options))
}

export async function postApiServices(
  args: InferRequestType<typeof client.api.services.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.services.$post(args, options))
}

export async function getApiServicesServiceId(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.services[':serviceId'].$get(args, options))
}

export async function putApiServicesServiceId(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.services[':serviceId'].$put(args, options))
}

export async function deleteApiServicesServiceId(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.services[':serviceId'].$delete(args, options))
}

export async function patchApiServicesServiceId(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.services[':serviceId'].$patch(args, options))
}

export async function getApiServicesServiceIdApikeys(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['apikeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.services[':serviceId'].apikeys.$get(args, options))
}

export async function postApiServicesServiceIdApikeys(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['apikeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.services[':serviceId'].apikeys.$post(args, options))
}

export async function getApiServicesServiceIdApikeysClientId(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.services[':serviceId'].apikeys[':clientId'].$get(args, options),
  )
}

export async function putApiServicesServiceIdApikeysClientId(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.services[':serviceId'].apikeys[':clientId'].$put(args, options),
  )
}

export async function deleteApiServicesServiceIdApikeysClientId(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.services[':serviceId'].apikeys[':clientId'].$delete(args, options),
  )
}

export async function patchApiServicesServiceIdApikeysClientId(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.services[':serviceId'].apikeys[':clientId'].$patch(args, options),
  )
}

export async function getApiServicesServiceIdApikeysClientIdGroup(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.services[':serviceId'].apikeys[':clientId'].group.$get(args, options),
  )
}

export async function getApiServicesServiceIdApikeysClientIdQuotas(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.services[':serviceId'].apikeys[':clientId'].quotas.$get(args, options),
  )
}

export async function deleteApiServicesServiceIdApikeysClientIdQuotas(
  args: InferRequestType<
    (typeof client.api.services)[':serviceId']['apikeys'][':clientId']['quotas']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.services[':serviceId'].apikeys[':clientId'].quotas.$delete(args, options),
  )
}

export async function getApiServicesServiceIdTargets(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.services[':serviceId'].targets.$get(args, options))
}

export async function postApiServicesServiceIdTargets(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.services[':serviceId'].targets.$post(args, options))
}

export async function deleteApiServicesServiceIdTargets(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.services[':serviceId'].targets.$delete(args, options))
}

export async function patchApiServicesServiceIdTargets(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['targets']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.services[':serviceId'].targets.$patch(args, options))
}

export async function getApiServicesServiceIdTemplate(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['template']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.services[':serviceId'].template.$get(args, options))
}

export async function putApiServicesServiceIdTemplate(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['template']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.services[':serviceId'].template.$put(args, options))
}

export async function postApiServicesServiceIdTemplate(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['template']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.services[':serviceId'].template.$post(args, options))
}

export async function deleteApiServicesServiceIdTemplate(
  args: InferRequestType<(typeof client.api.services)[':serviceId']['template']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.services[':serviceId'].template.$delete(args, options))
}

export async function postApiSnowmonkeyStart(options?: ClientRequestOptions) {
  return await parseResponse(client.api.snowmonkey._start.$post(undefined, options))
}

export async function postApiSnowmonkeyStop(options?: ClientRequestOptions) {
  return await parseResponse(client.api.snowmonkey._stop.$post(undefined, options))
}

export async function getApiSnowmonkeyConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.api.snowmonkey.config.$get(undefined, options))
}

export async function putApiSnowmonkeyConfig(
  args: InferRequestType<typeof client.api.snowmonkey.config.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.snowmonkey.config.$put(args, options))
}

export async function patchApiSnowmonkeyConfig(
  args: InferRequestType<typeof client.api.snowmonkey.config.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.snowmonkey.config.$patch(args, options))
}

export async function getApiSnowmonkeyOutages(options?: ClientRequestOptions) {
  return await parseResponse(client.api.snowmonkey.outages.$get(undefined, options))
}

export async function deleteApiSnowmonkeyOutages(options?: ClientRequestOptions) {
  return await parseResponse(client.api.snowmonkey.outages.$delete(undefined, options))
}

export async function getApiVerifiers(options?: ClientRequestOptions) {
  return await parseResponse(client.api.verifiers.$get(undefined, options))
}

export async function postApiVerifiers(
  args: InferRequestType<typeof client.api.verifiers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.verifiers.$post(args, options))
}

export async function getApiVerifiersVerifierId(
  args: InferRequestType<(typeof client.api.verifiers)[':verifierId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.verifiers[':verifierId'].$get(args, options))
}

export async function putApiVerifiersVerifierId(
  args: InferRequestType<(typeof client.api.verifiers)[':verifierId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.verifiers[':verifierId'].$put(args, options))
}

export async function deleteApiVerifiersVerifierId(
  args: InferRequestType<(typeof client.api.verifiers)[':verifierId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.verifiers[':verifierId'].$delete(args, options))
}

export async function patchApiVerifiersVerifierId(
  args: InferRequestType<(typeof client.api.verifiers)[':verifierId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.verifiers[':verifierId'].$patch(args, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getLines(options?: ClientRequestOptions) {
  return await parseResponse(client.lines.$get(undefined, options))
}

export async function getLinesLineServices(
  args: InferRequestType<(typeof client.lines)[':line']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lines[':line'].services.$get(args, options))
}

export async function getNewApikey(options?: ClientRequestOptions) {
  return await parseResponse(client.new.apikey.$get(undefined, options))
}

export async function getNewGroup(options?: ClientRequestOptions) {
  return await parseResponse(client.new.group.$get(undefined, options))
}

export async function getNewService(options?: ClientRequestOptions) {
  return await parseResponse(client.new.service.$get(undefined, options))
}
