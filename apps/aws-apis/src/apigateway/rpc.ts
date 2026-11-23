import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApikeys(
  args: InferRequestType<typeof client.apikeys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apikeys.$get(args, options))
}

export async function postApikeys(
  args: InferRequestType<typeof client.apikeys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apikeys.$post(args, options))
}

export async function getRestapisRestapiIdAuthorizers(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['authorizers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis[':restapi_id'].authorizers.$get(args, options))
}

export async function postRestapisRestapiIdAuthorizers(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['authorizers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis[':restapi_id'].authorizers.$post(args, options))
}

export async function getDomainnamesDomainNameBasepathmappings(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domainnames[':domain_name'].basepathmappings.$get(args, options),
  )
}

export async function postDomainnamesDomainNameBasepathmappings(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['basepathmappings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domainnames[':domain_name'].basepathmappings.$post(args, options),
  )
}

export async function getRestapisRestapiIdDeployments(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis[':restapi_id'].deployments.$get(args, options))
}

export async function postRestapisRestapiIdDeployments(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['deployments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis[':restapi_id'].deployments.$post(args, options))
}

export async function getRestapisRestapiIdDocumentationParts(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis[':restapi_id'].documentation.parts.$get(args, options))
}

export async function putRestapisRestapiIdDocumentationParts(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['documentation']['parts']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis[':restapi_id'].documentation.parts.$put(args, options))
}

export async function postRestapisRestapiIdDocumentationParts(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['parts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].documentation.parts.$post(args, options),
  )
}

export async function getRestapisRestapiIdDocumentationVersions(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].documentation.versions.$get(args, options),
  )
}

export async function postRestapisRestapiIdDocumentationVersions(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].documentation.versions.$post(args, options),
  )
}

export async function getDomainnames(
  args: InferRequestType<typeof client.domainnames.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domainnames.$get(args, options))
}

export async function postDomainnames(
  args: InferRequestType<typeof client.domainnames.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domainnames.$post(args, options))
}

export async function getRestapisRestapiIdModels(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis[':restapi_id'].models.$get(args, options))
}

export async function postRestapisRestapiIdModels(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['models']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis[':restapi_id'].models.$post(args, options))
}

export async function getRestapisRestapiIdRequestvalidators(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis[':restapi_id'].requestvalidators.$get(args, options))
}

export async function postRestapisRestapiIdRequestvalidators(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['requestvalidators']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis[':restapi_id'].requestvalidators.$post(args, options))
}

export async function postRestapisRestapiIdResourcesParentId(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':parent_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':parent_id'].$post(args, options),
  )
}

export async function getRestapis(
  args: InferRequestType<typeof client.restapis.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis.$get(args, options))
}

export async function postRestapis(
  args: InferRequestType<typeof client.restapis.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis.$post(args, options))
}

export async function getRestapisRestapiIdStages(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['stages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis[':restapi_id'].stages.$get(args, options))
}

export async function postRestapisRestapiIdStages(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['stages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis[':restapi_id'].stages.$post(args, options))
}

export async function getUsageplans(
  args: InferRequestType<typeof client.usageplans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usageplans.$get(args, options))
}

export async function postUsageplans(
  args: InferRequestType<typeof client.usageplans.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usageplans.$post(args, options))
}

export async function getUsageplansUsageplanIdKeys(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usageplans[':usageplanId'].keys.$get(args, options))
}

export async function postUsageplansUsageplanIdKeys(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usageplans[':usageplanId'].keys.$post(args, options))
}

export async function getVpclinks(
  args: InferRequestType<typeof client.vpclinks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpclinks.$get(args, options))
}

export async function postVpclinks(
  args: InferRequestType<typeof client.vpclinks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpclinks.$post(args, options))
}

export async function getApikeysApiKey(
  args: InferRequestType<(typeof client.apikeys)[':api_Key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apikeys[':api_Key'].$get(args, options))
}

export async function deleteApikeysApiKey(
  args: InferRequestType<(typeof client.apikeys)[':api_Key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apikeys[':api_Key'].$delete(args, options))
}

export async function patchApikeysApiKey(
  args: InferRequestType<(typeof client.apikeys)[':api_Key']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apikeys[':api_Key'].$patch(args, options))
}

export async function getRestapisRestapiIdAuthorizersAuthorizerId(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].authorizers[':authorizer_id'].$get(args, options),
  )
}

export async function postRestapisRestapiIdAuthorizersAuthorizerId(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].authorizers[':authorizer_id'].$post(args, options),
  )
}

export async function deleteRestapisRestapiIdAuthorizersAuthorizerId(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].authorizers[':authorizer_id'].$delete(args, options),
  )
}

export async function patchRestapisRestapiIdAuthorizersAuthorizerId(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['authorizers'][':authorizer_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].authorizers[':authorizer_id'].$patch(args, options),
  )
}

export async function getDomainnamesDomainNameBasepathmappingsBasePath(
  args: InferRequestType<
    (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domainnames[':domain_name'].basepathmappings[':base_path'].$get(args, options),
  )
}

export async function deleteDomainnamesDomainNameBasepathmappingsBasePath(
  args: InferRequestType<
    (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domainnames[':domain_name'].basepathmappings[':base_path'].$delete(args, options),
  )
}

export async function patchDomainnamesDomainNameBasepathmappingsBasePath(
  args: InferRequestType<
    (typeof client.domainnames)[':domain_name']['basepathmappings'][':base_path']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domainnames[':domain_name'].basepathmappings[':base_path'].$patch(args, options),
  )
}

export async function getClientcertificatesClientcertificateId(
  args: InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clientcertificates[':clientcertificate_id'].$get(args, options))
}

export async function deleteClientcertificatesClientcertificateId(
  args: InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clientcertificates[':clientcertificate_id'].$delete(args, options),
  )
}

export async function patchClientcertificatesClientcertificateId(
  args: InferRequestType<(typeof client.clientcertificates)[':clientcertificate_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clientcertificates[':clientcertificate_id'].$patch(args, options),
  )
}

export async function getRestapisRestapiIdDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].deployments[':deployment_id'].$get(args, options),
  )
}

export async function deleteRestapisRestapiIdDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].deployments[':deployment_id'].$delete(args, options),
  )
}

export async function patchRestapisRestapiIdDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['deployments'][':deployment_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].deployments[':deployment_id'].$patch(args, options),
  )
}

export async function getRestapisRestapiIdDocumentationPartsPartId(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].documentation.parts[':part_id'].$get(args, options),
  )
}

export async function deleteRestapisRestapiIdDocumentationPartsPartId(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].documentation.parts[':part_id'].$delete(args, options),
  )
}

export async function patchRestapisRestapiIdDocumentationPartsPartId(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['parts'][':part_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].documentation.parts[':part_id'].$patch(args, options),
  )
}

export async function getRestapisRestapiIdDocumentationVersionsDocVersion(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].documentation.versions[':doc_version'].$get(args, options),
  )
}

export async function deleteRestapisRestapiIdDocumentationVersionsDocVersion(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].documentation.versions[':doc_version'].$delete(args, options),
  )
}

export async function patchRestapisRestapiIdDocumentationVersionsDocVersion(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['documentation']['versions'][':doc_version']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].documentation.versions[':doc_version'].$patch(args, options),
  )
}

export async function getDomainnamesDomainName(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domainnames[':domain_name'].$get(args, options))
}

export async function deleteDomainnamesDomainName(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domainnames[':domain_name'].$delete(args, options))
}

export async function patchDomainnamesDomainName(
  args: InferRequestType<(typeof client.domainnames)[':domain_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domainnames[':domain_name'].$patch(args, options))
}

export async function getRestapisRestapiIdGatewayresponsesResponseType(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].gatewayresponses[':response_type'].$get(args, options),
  )
}

export async function putRestapisRestapiIdGatewayresponsesResponseType(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].gatewayresponses[':response_type'].$put(args, options),
  )
}

export async function deleteRestapisRestapiIdGatewayresponsesResponseType(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].gatewayresponses[':response_type'].$delete(args, options),
  )
}

export async function patchRestapisRestapiIdGatewayresponsesResponseType(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['gatewayresponses'][':response_type']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].gatewayresponses[':response_type'].$patch(args, options),
  )
}

export async function getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegration(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].methods[
      ':http_method'
    ].integration.$get(args, options),
  )
}

export async function putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegration(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].methods[
      ':http_method'
    ].integration.$put(args, options),
  )
}

export async function deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegration(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].methods[
      ':http_method'
    ].integration.$delete(args, options),
  )
}

export async function patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegration(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].methods[
      ':http_method'
    ].integration.$patch(args, options),
  )
}

export async function getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCode(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].methods[
      ':http_method'
    ].integration.responses[':status_code'].$get(args, options),
  )
}

export async function putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCode(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].methods[
      ':http_method'
    ].integration.responses[':status_code'].$put(args, options),
  )
}

export async function deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCode(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].methods[
      ':http_method'
    ].integration.responses[':status_code'].$delete(args, options),
  )
}

export async function patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCode(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['integration']['responses'][':status_code']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].methods[
      ':http_method'
    ].integration.responses[':status_code'].$patch(args, options),
  )
}

export async function getRestapisRestapiIdResourcesResourceIdMethodsHttpMethod(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].$get(
      args,
      options,
    ),
  )
}

export async function putRestapisRestapiIdResourcesResourceIdMethodsHttpMethod(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].$put(
      args,
      options,
    ),
  )
}

export async function postRestapisRestapiIdResourcesResourceIdMethodsHttpMethod(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].$post(
      args,
      options,
    ),
  )
}

export async function deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethod(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].$delete(
      args,
      options,
    ),
  )
}

export async function patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethod(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].$patch(
      args,
      options,
    ),
  )
}

export async function getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCode(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].responses[
      ':status_code'
    ].$get(args, options),
  )
}

export async function putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCode(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].responses[
      ':status_code'
    ].$put(args, options),
  )
}

export async function deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCode(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].responses[
      ':status_code'
    ].$delete(args, options),
  )
}

export async function patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCode(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['methods'][':http_method']['responses'][':status_code']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].methods[':http_method'].responses[
      ':status_code'
    ].$patch(args, options),
  )
}

export async function getRestapisRestapiIdModelsModelName(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['models'][':model_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].models[':model_name'].$get(args, options),
  )
}

export async function deleteRestapisRestapiIdModelsModelName(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['models'][':model_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].models[':model_name'].$delete(args, options),
  )
}

export async function patchRestapisRestapiIdModelsModelName(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['models'][':model_name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].models[':model_name'].$patch(args, options),
  )
}

export async function getRestapisRestapiIdRequestvalidatorsRequestvalidatorId(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].requestvalidators[':requestvalidator_id'].$get(args, options),
  )
}

export async function deleteRestapisRestapiIdRequestvalidatorsRequestvalidatorId(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].requestvalidators[':requestvalidator_id'].$delete(args, options),
  )
}

export async function patchRestapisRestapiIdRequestvalidatorsRequestvalidatorId(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['requestvalidators'][':requestvalidator_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].requestvalidators[':requestvalidator_id'].$patch(args, options),
  )
}

export async function getRestapisRestapiIdResourcesResourceId(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].$get(args, options),
  )
}

export async function deleteRestapisRestapiIdResourcesResourceId(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].$delete(args, options),
  )
}

export async function patchRestapisRestapiIdResourcesResourceId(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['resources'][':resource_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].resources[':resource_id'].$patch(args, options),
  )
}

export async function getRestapisRestapiId(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis[':restapi_id'].$get(args, options))
}

export async function putRestapisRestapiId(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis[':restapi_id'].$put(args, options))
}

export async function deleteRestapisRestapiId(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis[':restapi_id'].$delete(args, options))
}

export async function patchRestapisRestapiId(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis[':restapi_id'].$patch(args, options))
}

export async function getRestapisRestapiIdStagesStageName(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].stages[':stage_name'].$get(args, options),
  )
}

export async function deleteRestapisRestapiIdStagesStageName(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].stages[':stage_name'].$delete(args, options),
  )
}

export async function patchRestapisRestapiIdStagesStageName(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].stages[':stage_name'].$patch(args, options),
  )
}

export async function getUsageplansUsageplanId(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usageplans[':usageplanId'].$get(args, options))
}

export async function deleteUsageplansUsageplanId(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usageplans[':usageplanId'].$delete(args, options))
}

export async function patchUsageplansUsageplanId(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usageplans[':usageplanId'].$patch(args, options))
}

export async function getUsageplansUsageplanIdKeysKeyId(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usageplans[':usageplanId'].keys[':keyId'].$get(args, options))
}

export async function deleteUsageplansUsageplanIdKeysKeyId(
  args: InferRequestType<(typeof client.usageplans)[':usageplanId']['keys'][':keyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.usageplans[':usageplanId'].keys[':keyId'].$delete(args, options),
  )
}

export async function getVpclinksVpclinkId(
  args: InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpclinks[':vpclink_id'].$get(args, options))
}

export async function deleteVpclinksVpclinkId(
  args: InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpclinks[':vpclink_id'].$delete(args, options))
}

export async function patchVpclinksVpclinkId(
  args: InferRequestType<(typeof client.vpclinks)[':vpclink_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpclinks[':vpclink_id'].$patch(args, options))
}

export async function deleteRestapisRestapiIdStagesStageNameCacheAuthorizers(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['cache']['authorizers']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].stages[':stage_name'].cache.authorizers.$delete(args, options),
  )
}

export async function deleteRestapisRestapiIdStagesStageNameCacheData(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['cache']['data']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].stages[':stage_name'].cache.data.$delete(args, options),
  )
}

export async function getClientcertificates(
  args: InferRequestType<typeof client.clientcertificates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clientcertificates.$get(args, options))
}

export async function postClientcertificates(
  args: InferRequestType<typeof client.clientcertificates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clientcertificates.$post(args, options))
}

export async function getAccount(
  args: InferRequestType<typeof client.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.$get(args, options))
}

export async function patchAccount(
  args: InferRequestType<typeof client.account.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.$patch(args, options))
}

export async function getRestapisRestapiIdStagesStageNameExportsExportType(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['exports'][':export_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].stages[':stage_name'].exports[':export_type'].$get(
      args,
      options,
    ),
  )
}

export async function getRestapisRestapiIdGatewayresponses(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['gatewayresponses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis[':restapi_id'].gatewayresponses.$get(args, options))
}

export async function getRestapisRestapiIdModelsModelNameDefaultTemplate(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['models'][':model_name']['default_template']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].models[':model_name'].default_template.$get(args, options),
  )
}

export async function getRestapisRestapiIdResources(
  args: InferRequestType<(typeof client.restapis)[':restapi_id']['resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restapis[':restapi_id'].resources.$get(args, options))
}

export async function getRestapisRestapiIdStagesStageNameSdksSdkType(
  args: InferRequestType<
    (typeof client.restapis)[':restapi_id']['stages'][':stage_name']['sdks'][':sdk_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.restapis[':restapi_id'].stages[':stage_name'].sdks[':sdk_type'].$get(args, options),
  )
}

export async function getSdktypesSdktypeId(
  args: InferRequestType<(typeof client.sdktypes)[':sdktype_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sdktypes[':sdktype_id'].$get(args, options))
}

export async function getSdktypes(
  args: InferRequestType<typeof client.sdktypes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sdktypes.$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resource_arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resource_arn'].$get(args, options))
}

export async function putTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resource_arn']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resource_arn'].$put(args, options))
}

export async function getUsageplansUsageplanIdUsageStartDateEndDate(
  args: InferRequestType<
    (typeof client.usageplans)[':usageplanId']['usage#startDate&endDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.usageplans[':usageplanId']['usage#startDate&endDate'].$get(args, options),
  )
}

export async function postApikeysModeImportFormat(
  args: InferRequestType<(typeof client)['apikeys#mode=import&format']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['apikeys#mode=import&format'].$post(args, options))
}

export async function postRestapisModeImport(
  args: InferRequestType<(typeof client)['restapis#mode=import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['restapis#mode=import'].$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resource_arn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resource_arn#tagKeys'].$delete(args, options))
}

export async function patchUsageplansUsageplanIdKeysKeyIdUsage(
  args: InferRequestType<
    (typeof client.usageplans)[':usageplanId']['keys'][':keyId']['usage']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.usageplans[':usageplanId'].keys[':keyId'].usage.$patch(args, options),
  )
}
