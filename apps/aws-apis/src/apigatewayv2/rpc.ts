import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2Apis(
  args: InferRequestType<typeof client.v2.apis.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis.$get(args, options))
}

export async function putV2Apis(
  args: InferRequestType<typeof client.v2.apis.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis.$put(args, options))
}

export async function postV2Apis(
  args: InferRequestType<typeof client.v2.apis.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis.$post(args, options))
}

export async function getV2DomainnamesDomainNameApimappings(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domainnames[':domainName'].apimappings.$get(args, options))
}

export async function postV2DomainnamesDomainNameApimappings(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domainnames[':domainName'].apimappings.$post(args, options))
}

export async function getV2ApisApiIdAuthorizers(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].authorizers.$get(args, options))
}

export async function postV2ApisApiIdAuthorizers(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].authorizers.$post(args, options))
}

export async function getV2ApisApiIdDeployments(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].deployments.$get(args, options))
}

export async function postV2ApisApiIdDeployments(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].deployments.$post(args, options))
}

export async function getV2Domainnames(
  args: InferRequestType<typeof client.v2.domainnames.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domainnames.$get(args, options))
}

export async function postV2Domainnames(
  args: InferRequestType<typeof client.v2.domainnames.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domainnames.$post(args, options))
}

export async function getV2ApisApiIdIntegrations(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].integrations.$get(args, options))
}

export async function postV2ApisApiIdIntegrations(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['integrations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].integrations.$post(args, options))
}

export async function getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponses(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].integrations[':integrationId'].integrationresponses.$get(
      args,
      options,
    ),
  )
}

export async function postV2ApisApiIdIntegrationsIntegrationIdIntegrationresponses(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].integrations[':integrationId'].integrationresponses.$post(
      args,
      options,
    ),
  )
}

export async function getV2ApisApiIdModels(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].models.$get(args, options))
}

export async function postV2ApisApiIdModels(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].models.$post(args, options))
}

export async function getV2ApisApiIdRoutes(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].routes.$get(args, options))
}

export async function postV2ApisApiIdRoutes(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].routes.$post(args, options))
}

export async function getV2ApisApiIdRoutesRouteIdRouteresponses(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].routes[':routeId'].routeresponses.$get(args, options),
  )
}

export async function postV2ApisApiIdRoutesRouteIdRouteresponses(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].routes[':routeId'].routeresponses.$post(args, options),
  )
}

export async function getV2ApisApiIdStages(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].stages.$get(args, options))
}

export async function postV2ApisApiIdStages(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].stages.$post(args, options))
}

export async function getV2Vpclinks(
  args: InferRequestType<typeof client.v2.vpclinks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpclinks.$get(args, options))
}

export async function postV2Vpclinks(
  args: InferRequestType<typeof client.v2.vpclinks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpclinks.$post(args, options))
}

export async function deleteV2ApisApiIdStagesStageNameAccesslogsettings(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['stages'][':stageName']['accesslogsettings']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].stages[':stageName'].accesslogsettings.$delete(args, options),
  )
}

export async function getV2ApisApiId(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].$get(args, options))
}

export async function putV2ApisApiId(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].$put(args, options))
}

export async function deleteV2ApisApiId(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].$delete(args, options))
}

export async function patchV2ApisApiId(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].$patch(args, options))
}

export async function getV2DomainnamesDomainNameApimappingsApiMappingId(
  args: InferRequestType<
    (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.domainnames[':domainName'].apimappings[':apiMappingId'].$get(args, options),
  )
}

export async function deleteV2DomainnamesDomainNameApimappingsApiMappingId(
  args: InferRequestType<
    (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.domainnames[':domainName'].apimappings[':apiMappingId'].$delete(args, options),
  )
}

export async function patchV2DomainnamesDomainNameApimappingsApiMappingId(
  args: InferRequestType<
    (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.domainnames[':domainName'].apimappings[':apiMappingId'].$patch(args, options),
  )
}

export async function getV2ApisApiIdAuthorizersAuthorizerId(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].authorizers[':authorizerId'].$get(args, options),
  )
}

export async function deleteV2ApisApiIdAuthorizersAuthorizerId(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].authorizers[':authorizerId'].$delete(args, options),
  )
}

export async function patchV2ApisApiIdAuthorizersAuthorizerId(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].authorizers[':authorizerId'].$patch(args, options),
  )
}

export async function deleteV2ApisApiIdCors(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['cors']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].cors.$delete(args, options))
}

export async function getV2ApisApiIdDeploymentsDeploymentId(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].deployments[':deploymentId'].$get(args, options),
  )
}

export async function deleteV2ApisApiIdDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].deployments[':deploymentId'].$delete(args, options),
  )
}

export async function patchV2ApisApiIdDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].deployments[':deploymentId'].$patch(args, options),
  )
}

export async function getV2DomainnamesDomainName(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domainnames[':domainName'].$get(args, options))
}

export async function deleteV2DomainnamesDomainName(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domainnames[':domainName'].$delete(args, options))
}

export async function patchV2DomainnamesDomainName(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domainnames[':domainName'].$patch(args, options))
}

export async function getV2ApisApiIdIntegrationsIntegrationId(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].integrations[':integrationId'].$get(args, options),
  )
}

export async function deleteV2ApisApiIdIntegrationsIntegrationId(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].integrations[':integrationId'].$delete(args, options),
  )
}

export async function patchV2ApisApiIdIntegrationsIntegrationId(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].integrations[':integrationId'].$patch(args, options),
  )
}

export async function getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseId(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].integrations[':integrationId'].integrationresponses[
      ':integrationResponseId'
    ].$get(args, options),
  )
}

export async function deleteV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseId(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].integrations[':integrationId'].integrationresponses[
      ':integrationResponseId'
    ].$delete(args, options),
  )
}

export async function patchV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseId(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].integrations[':integrationId'].integrationresponses[
      ':integrationResponseId'
    ].$patch(args, options),
  )
}

export async function getV2ApisApiIdModelsModelId(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].models[':modelId'].$get(args, options))
}

export async function deleteV2ApisApiIdModelsModelId(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].models[':modelId'].$delete(args, options))
}

export async function patchV2ApisApiIdModelsModelId(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].models[':modelId'].$patch(args, options))
}

export async function getV2ApisApiIdRoutesRouteId(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].routes[':routeId'].$get(args, options))
}

export async function deleteV2ApisApiIdRoutesRouteId(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].routes[':routeId'].$delete(args, options))
}

export async function patchV2ApisApiIdRoutesRouteId(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].routes[':routeId'].$patch(args, options))
}

export async function deleteV2ApisApiIdRoutesRouteIdRequestparametersRequestParameterKey(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['requestparameters'][':requestParameterKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].routes[':routeId'].requestparameters[':requestParameterKey'].$delete(
      args,
      options,
    ),
  )
}

export async function getV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseId(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].routes[':routeId'].routeresponses[':routeResponseId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseId(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].routes[':routeId'].routeresponses[':routeResponseId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseId(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].routes[':routeId'].routeresponses[':routeResponseId'].$patch(
      args,
      options,
    ),
  )
}

export async function deleteV2ApisApiIdStagesStageNameRoutesettingsRouteKey(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['stages'][':stageName']['routesettings'][':routeKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].stages[':stageName'].routesettings[':routeKey'].$delete(args, options),
  )
}

export async function getV2ApisApiIdStagesStageName(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].stages[':stageName'].$get(args, options))
}

export async function deleteV2ApisApiIdStagesStageName(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].stages[':stageName'].$delete(args, options))
}

export async function patchV2ApisApiIdStagesStageName(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apis[':apiId'].stages[':stageName'].$patch(args, options))
}

export async function getV2VpclinksVpcLinkId(
  args: InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpclinks[':vpcLinkId'].$get(args, options))
}

export async function deleteV2VpclinksVpcLinkId(
  args: InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpclinks[':vpcLinkId'].$delete(args, options))
}

export async function patchV2VpclinksVpcLinkId(
  args: InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpclinks[':vpcLinkId'].$patch(args, options))
}

export async function getV2ApisApiIdExportsSpecificationOutputType(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['exports'][':specification#outputType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].exports[':specification#outputType'].$get(args, options),
  )
}

export async function deleteV2ApisApiIdStagesStageNameCacheAuthorizers(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['stages'][':stageName']['cache']['authorizers']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].stages[':stageName'].cache.authorizers.$delete(args, options),
  )
}

export async function getV2ApisApiIdModelsModelIdTemplate(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['models'][':modelId']['template']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apis[':apiId'].models[':modelId'].template.$get(args, options),
  )
}

export async function getV2TagsResourceArn(
  args: InferRequestType<(typeof client.v2.tags)[':resource-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tags[':resource-arn'].$get(args, options))
}

export async function postV2TagsResourceArn(
  args: InferRequestType<(typeof client.v2.tags)[':resource-arn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tags[':resource-arn'].$post(args, options))
}

export async function deleteV2TagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.v2.tags)[':resource-arn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tags[':resource-arn#tagKeys'].$delete(args, options))
}
