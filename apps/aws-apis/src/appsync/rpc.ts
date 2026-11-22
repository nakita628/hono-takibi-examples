import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1DomainnamesDomainNameApiassociation(
  args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.domainnames[':domainName'].apiassociation.$get(args, options),
  )
}

export async function postV1DomainnamesDomainNameApiassociation(
  args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['apiassociation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.domainnames[':domainName'].apiassociation.$post(args, options),
  )
}

export async function deleteV1DomainnamesDomainNameApiassociation(
  args: InferRequestType<
    (typeof client.v1.domainnames)[':domainName']['apiassociation']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.domainnames[':domainName'].apiassociation.$delete(args, options),
  )
}

export async function postV1SourceApisSourceApiIdentifierMergedApiAssociations(
  args: InferRequestType<
    (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.sourceApis[':sourceApiIdentifier'].mergedApiAssociations.$post(args, options),
  )
}

export async function postV1MergedApisMergedApiIdentifierSourceApiAssociations(
  args: InferRequestType<
    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations.$post(args, options),
  )
}

export async function getV1ApisApiIdApiCaches(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].ApiCaches.$get(args, options))
}

export async function postV1ApisApiIdApiCaches(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].ApiCaches.$post(args, options))
}

export async function deleteV1ApisApiIdApiCaches(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].ApiCaches.$delete(args, options))
}

export async function getV1ApisApiIdApikeys(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].apikeys.$get(args, options))
}

export async function postV1ApisApiIdApikeys(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].apikeys.$post(args, options))
}

export async function getV1ApisApiIdDatasources(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].datasources.$get(args, options))
}

export async function postV1ApisApiIdDatasources(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].datasources.$post(args, options))
}

export async function getV1Domainnames(
  args: InferRequestType<typeof client.v1.domainnames.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domainnames.$get(args, options))
}

export async function postV1Domainnames(
  args: InferRequestType<typeof client.v1.domainnames.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domainnames.$post(args, options))
}

export async function getV1ApisApiIdFunctions(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].functions.$get(args, options))
}

export async function postV1ApisApiIdFunctions(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['functions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].functions.$post(args, options))
}

export async function getV1Apis(
  args: InferRequestType<typeof client.v1.apis.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis.$get(args, options))
}

export async function postV1Apis(
  args: InferRequestType<typeof client.v1.apis.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis.$post(args, options))
}

export async function getV1ApisApiIdTypesTypeNameResolvers(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apis[':apiId'].types[':typeName'].resolvers.$get(args, options),
  )
}

export async function postV1ApisApiIdTypesTypeNameResolvers(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apis[':apiId'].types[':typeName'].resolvers.$post(args, options),
  )
}

export async function postV1ApisApiIdTypes(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['types']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].types.$post(args, options))
}

export async function postV1ApisApiIdApikeysId(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].apikeys[':id'].$post(args, options))
}

export async function deleteV1ApisApiIdApikeysId(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['apikeys'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].apikeys[':id'].$delete(args, options))
}

export async function getV1ApisApiIdDatasourcesName(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].datasources[':name'].$get(args, options))
}

export async function postV1ApisApiIdDatasourcesName(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].datasources[':name'].$post(args, options))
}

export async function deleteV1ApisApiIdDatasourcesName(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['datasources'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].datasources[':name'].$delete(args, options))
}

export async function getV1DomainnamesDomainName(
  args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domainnames[':domainName'].$get(args, options))
}

export async function postV1DomainnamesDomainName(
  args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domainnames[':domainName'].$post(args, options))
}

export async function deleteV1DomainnamesDomainName(
  args: InferRequestType<(typeof client.v1.domainnames)[':domainName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domainnames[':domainName'].$delete(args, options))
}

export async function getV1ApisApiIdFunctionsFunctionId(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].functions[':functionId'].$get(args, options))
}

export async function postV1ApisApiIdFunctionsFunctionId(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].functions[':functionId'].$post(args, options))
}

export async function deleteV1ApisApiIdFunctionsFunctionId(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['functions'][':functionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apis[':apiId'].functions[':functionId'].$delete(args, options),
  )
}

export async function getV1ApisApiId(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].$get(args, options))
}

export async function postV1ApisApiId(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].$post(args, options))
}

export async function deleteV1ApisApiId(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].$delete(args, options))
}

export async function getV1ApisApiIdTypesTypeNameResolversFieldName(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apis[':apiId'].types[':typeName'].resolvers[':fieldName'].$get(args, options),
  )
}

export async function postV1ApisApiIdTypesTypeNameResolversFieldName(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apis[':apiId'].types[':typeName'].resolvers[':fieldName'].$post(args, options),
  )
}

export async function deleteV1ApisApiIdTypesTypeNameResolversFieldName(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['types'][':typeName']['resolvers'][':fieldName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apis[':apiId'].types[':typeName'].resolvers[':fieldName'].$delete(args, options),
  )
}

export async function postV1ApisApiIdTypesTypeName(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].types[':typeName'].$post(args, options))
}

export async function deleteV1ApisApiIdTypesTypeName(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].types[':typeName'].$delete(args, options))
}

export async function deleteV1SourceApisSourceApiIdentifierMergedApiAssociationsAssociationId(
  args: InferRequestType<
    (typeof client.v1.sourceApis)[':sourceApiIdentifier']['mergedApiAssociations'][':associationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.sourceApis[':sourceApiIdentifier'].mergedApiAssociations[':associationId'].$delete(
      args,
      options,
    ),
  )
}

export async function getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationId(
  args: InferRequestType<
    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[':associationId'].$get(
      args,
      options,
    ),
  )
}

export async function postV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationId(
  args: InferRequestType<
    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[':associationId'].$post(
      args,
      options,
    ),
  )
}

export async function deleteV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationId(
  args: InferRequestType<
    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[':associationId'].$delete(
      args,
      options,
    ),
  )
}

export async function postV1DataplaneEvaluatecode(
  args: InferRequestType<(typeof client.v1)['dataplane-evaluatecode']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['dataplane-evaluatecode'].$post(args, options))
}

export async function postV1DataplaneEvaluatetemplate(
  args: InferRequestType<(typeof client.v1)['dataplane-evaluatetemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['dataplane-evaluatetemplate'].$post(args, options))
}

export async function deleteV1ApisApiIdFlushCache(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['FlushCache']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].FlushCache.$delete(args, options))
}

export async function getV1ApisApiIdSchemaFormat(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['schema#format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId']['schema#format'].$get(args, options))
}

export async function getV1ApisApiIdSchemacreation(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].schemacreation.$get(args, options))
}

export async function postV1ApisApiIdSchemacreation(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['schemacreation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].schemacreation.$post(args, options))
}

export async function getV1ApisApiIdTypesTypeNameFormat(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['types'][':typeName#format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].types[':typeName#format'].$get(args, options))
}

export async function getV1ApisApiIdFunctionsFunctionIdResolvers(
  args: InferRequestType<
    (typeof client.v1.apis)[':apiId']['functions'][':functionId']['resolvers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.apis[':apiId'].functions[':functionId'].resolvers.$get(args, options),
  )
}

export async function getV1ApisApiIdSourceApiAssociations(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['sourceApiAssociations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].sourceApiAssociations.$get(args, options))
}

export async function getV1TagsResourceArn(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':resourceArn'].$get(args, options))
}

export async function postV1TagsResourceArn(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':resourceArn'].$post(args, options))
}

export async function getV1ApisApiIdTypesFormat(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['types#format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId']['types#format'].$get(args, options))
}

export async function getV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdTypesFormat(
  args: InferRequestType<
    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['types#format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[':associationId'][
      'types#format'
    ].$get(args, options),
  )
}

export async function postV1MergedApisMergedApiIdentifierSourceApiAssociationsAssociationIdMerge(
  args: InferRequestType<
    (typeof client.v1.mergedApis)[':mergedApiIdentifier']['sourceApiAssociations'][':associationId']['merge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.mergedApis[':mergedApiIdentifier'].sourceApiAssociations[
      ':associationId'
    ].merge.$post(args, options),
  )
}

export async function deleteV1TagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function postV1ApisApiIdApiCachesUpdate(
  args: InferRequestType<(typeof client.v1.apis)[':apiId']['ApiCaches']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apis[':apiId'].ApiCaches.update.$post(args, options))
}
