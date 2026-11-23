import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV2AftermarketServicesCertificates(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.v2.AftermarketServices.Certificates.$get(undefined, options),
  )
}

export async function putApiV2AftermarketServicesECUsSerialNumber(
  args: InferRequestType<(typeof client.api.v2.AftermarketServices.ECUs)[':serialNumber']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.AftermarketServices.ECUs[':serialNumber'].$put(args, options),
  )
}

export async function getApiV2AftermarketServicesEnginesSerialNumberIQACodes(
  args: InferRequestType<
    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.AftermarketServices.Engines[':serialNumber'].IQACodes.$get(args, options),
  )
}

export async function putApiV2AftermarketServicesEnginesSerialNumberIQACodes(
  args: InferRequestType<
    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['IQACodes']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.AftermarketServices.Engines[':serialNumber'].IQACodes.$put(args, options),
  )
}

export async function getApiV2AftermarketServicesEnginesSerialNumberProductionData(
  args: InferRequestType<
    (typeof client.api.v2.AftermarketServices.Engines)[':serialNumber']['ProductionData']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.AftermarketServices.Engines[':serialNumber'].ProductionData.$get(args, options),
  )
}

export async function getApiV2AftermarketServicesHello(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.AftermarketServices.Hello.$get(undefined, options))
}

export async function getApiV2AftermarketServicesUserStatuses(
  args: InferRequestType<typeof client.api.v2.AftermarketServices.UserStatuses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AftermarketServices.UserStatuses.$get(args, options))
}

export async function putApiV2AftermarketServicesUserStatuses(
  args: InferRequestType<typeof client.api.v2.AftermarketServices.UserStatuses.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AftermarketServices.UserStatuses.$put(args, options))
}

export async function putApiV2AuthenticatedUsersUserIDTokens(
  args: InferRequestType<(typeof client.api.v2.AuthenticatedUsers)[':UserID']['Tokens']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AuthenticatedUsers[':UserID'].Tokens.$put(args, options))
}

export async function postApiV2Authentication(
  args: InferRequestType<typeof client.api.v2.Authentication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Authentication.$post(args, options))
}

export async function getApiV2AuthenticationIsAlive(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.Authentication.IsAlive.$get(undefined, options))
}

export async function postApiV2AuthenticationRequestPasswordReset(
  args: InferRequestType<typeof client.api.v2.Authentication.RequestPasswordReset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Authentication.RequestPasswordReset.$post(args, options))
}

export async function postApiV2AuthenticationResetPasword(
  args: InferRequestType<typeof client.api.v2.Authentication.ResetPasword.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Authentication.ResetPasword.$post(args, options))
}

export async function getApiV2AuthorizationCategories(
  args: InferRequestType<typeof client.api.v2.AuthorizationCategories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AuthorizationCategories.$get(args, options))
}

export async function postApiV2AuthorizationCategories(
  args: InferRequestType<typeof client.api.v2.AuthorizationCategories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AuthorizationCategories.$post(args, options))
}

export async function getApiV2AuthorizationCategoriesUsers(
  args: InferRequestType<typeof client.api.v2.AuthorizationCategories.Users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AuthorizationCategories.Users.$get(args, options))
}

export async function putApiV2AuthorizationCategoriesId(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCategories)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AuthorizationCategories[':id'].$put(args, options))
}

export async function deleteApiV2AuthorizationCategoriesId(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCategories)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AuthorizationCategories[':id'].$delete(args, options))
}

export async function postApiV2AuthorizationCategoriesIdUsersUserID(
  args: InferRequestType<
    (typeof client.api.v2.AuthorizationCategories)[':id']['Users'][':userID']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.AuthorizationCategories[':id'].Users[':userID'].$post(args, options),
  )
}

export async function deleteApiV2AuthorizationCategoriesIdUsersUserID(
  args: InferRequestType<
    (typeof client.api.v2.AuthorizationCategories)[':id']['Users'][':userID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.AuthorizationCategories[':id'].Users[':userID'].$delete(args, options),
  )
}

export async function getApiV2AuthorizationCodeDefinitions(
  args: InferRequestType<typeof client.api.v2.AuthorizationCodeDefinitions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AuthorizationCodeDefinitions.$get(args, options))
}

export async function postApiV2AuthorizationCodeDefinitions(
  args: InferRequestType<typeof client.api.v2.AuthorizationCodeDefinitions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AuthorizationCodeDefinitions.$post(args, options))
}

export async function postApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryID(
  args: InferRequestType<
    (typeof client.api.v2.AuthorizationCodeDefinitions)[':ID']['Categories'][':categoryID']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.AuthorizationCodeDefinitions[':ID'].Categories[':categoryID'].$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryID(
  args: InferRequestType<
    (typeof client.api.v2.AuthorizationCodeDefinitions)[':ID']['Categories'][':categoryID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.AuthorizationCodeDefinitions[':ID'].Categories[':categoryID'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2AuthorizationCodeDefinitionsId(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AuthorizationCodeDefinitions[':id'].$get(args, options))
}

export async function putApiV2AuthorizationCodeDefinitionsId(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AuthorizationCodeDefinitions[':id'].$put(args, options))
}

export async function deleteApiV2AuthorizationCodeDefinitionsId(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodeDefinitions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.AuthorizationCodeDefinitions[':id'].$delete(args, options),
  )
}

export async function getApiV2AuthorizationCodes(
  args: InferRequestType<typeof client.api.v2.AuthorizationCodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AuthorizationCodes.$get(args, options))
}

export async function postApiV2AuthorizationCodes(
  args: InferRequestType<typeof client.api.v2.AuthorizationCodes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AuthorizationCodes.$post(args, options))
}

export async function getApiV2AuthorizationCodesId(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AuthorizationCodes[':id'].$get(args, options))
}

export async function putApiV2AuthorizationCodesId(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AuthorizationCodes[':id'].$put(args, options))
}

export async function deleteApiV2AuthorizationCodesId(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AuthorizationCodes[':id'].$delete(args, options))
}

export async function getApiV2AuthorizationCodesIdContactInformation(
  args: InferRequestType<
    (typeof client.api.v2.AuthorizationCodes)[':id']['ContactInformation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.AuthorizationCodes[':id'].ContactInformation.$get(args, options),
  )
}

export async function getApiV2AuthorizationCodesIdValidate(
  args: InferRequestType<(typeof client.api.v2.AuthorizationCodes)[':id']['Validate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AuthorizationCodes[':id'].Validate.$get(args, options))
}

export async function getApiV2AuthorizationContactInformation(
  args: InferRequestType<typeof client.api.v2.AuthorizationContactInformation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AuthorizationContactInformation.$get(args, options))
}

export async function postApiV2AuthorizationContactInformation(
  args: InferRequestType<typeof client.api.v2.AuthorizationContactInformation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.AuthorizationContactInformation.$post(args, options))
}

export async function getApiV2Brands(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.Brands.$get(undefined, options))
}

export async function getApiV2Bundles(
  args: InferRequestType<typeof client.api.v2.Bundles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Bundles.$get(args, options))
}

export async function postApiV2Bundles(
  args: InferRequestType<typeof client.api.v2.Bundles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Bundles.$post(args, options))
}

export async function getApiV2BundlesID(
  args: InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Bundles[':ID'].$get(args, options))
}

export async function putApiV2BundlesID(
  args: InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Bundles[':ID'].$put(args, options))
}

export async function deleteApiV2BundlesID(
  args: InferRequestType<(typeof client.api.v2.Bundles)[':ID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Bundles[':ID'].$delete(args, options))
}

export async function getApiV2Clients(
  args: InferRequestType<typeof client.api.v2.Clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Clients.$get(args, options))
}

export async function getApiV2ClientsClientIDCachedFiles(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['CachedFiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Clients[':ClientID'].CachedFiles.$get(args, options))
}

export async function getApiV2ClientsClientIDPackageReports(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Clients[':ClientID'].PackageReports.$get(args, options))
}

export async function putApiV2ClientsClientIDPackageReports(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ClientID']['PackageReports']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Clients[':ClientID'].PackageReports.$put(args, options))
}

export async function putApiV2ClientsClientIDPackageReportsBatch(
  args: InferRequestType<
    (typeof client.api.v2.Clients)[':ClientID']['PackageReports']['Batch']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.Clients[':ClientID'].PackageReports.Batch.$put(args, options),
  )
}

export async function getApiV2ClientsID(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Clients[':ID'].$get(args, options))
}

export async function putApiV2ClientsID(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Clients[':ID'].$put(args, options))
}

export async function getApiV2ClientsIDAvailableUpdateGroupSubscriptions(
  args: InferRequestType<
    (typeof client.api.v2.Clients)[':ID']['AvailableUpdateGroupSubscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.Clients[':ID'].AvailableUpdateGroupSubscriptions.$get(args, options),
  )
}

export async function getApiV2ClientsIDUpdateGroupSubscriptions(
  args: InferRequestType<(typeof client.api.v2.Clients)[':ID']['UpdateGroupSubscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.Clients[':ID'].UpdateGroupSubscriptions.$get(args, options),
  )
}

export async function putApiV2ContentDefinitionAttributesBatch(
  args: InferRequestType<typeof client.api.v2.ContentDefinitionAttributes.Batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ContentDefinitionAttributes.Batch.$put(args, options))
}

export async function putApiV2ContentDefinitionAttributesContentDefinitionAttributeID(
  args: InferRequestType<
    (typeof client.api.v2.ContentDefinitionAttributes)[':contentDefinitionAttributeID']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ContentDefinitionAttributes[':contentDefinitionAttributeID'].$put(args, options),
  )
}

export async function deleteApiV2ContentDefinitionAttributesContentDefinitionAttributeID(
  args: InferRequestType<
    (typeof client.api.v2.ContentDefinitionAttributes)[':contentDefinitionAttributeID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ContentDefinitionAttributes[':contentDefinitionAttributeID'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2ContentDefinitions(
  args: InferRequestType<typeof client.api.v2.ContentDefinitions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ContentDefinitions.$get(args, options))
}

export async function postApiV2ContentDefinitions(
  args: InferRequestType<typeof client.api.v2.ContentDefinitions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ContentDefinitions.$post(args, options))
}

export async function getApiV2ContentDefinitionsContentDefinitionID(
  args: InferRequestType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ContentDefinitions[':contentDefinitionID'].$get(args, options),
  )
}

export async function putApiV2ContentDefinitionsContentDefinitionID(
  args: InferRequestType<(typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ContentDefinitions[':contentDefinitionID'].$put(args, options),
  )
}

export async function deleteApiV2ContentDefinitionsContentDefinitionID(
  args: InferRequestType<
    (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ContentDefinitions[':contentDefinitionID'].$delete(args, options),
  )
}

export async function getApiV2ContentDefinitionsContentDefinitionIDAttributes(
  args: InferRequestType<
    (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ContentDefinitions[':contentDefinitionID'].Attributes.$get(args, options),
  )
}

export async function postApiV2ContentDefinitionsContentDefinitionIDAttributes(
  args: InferRequestType<
    (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ContentDefinitions[':contentDefinitionID'].Attributes.$post(args, options),
  )
}

export async function postApiV2ContentDefinitionsContentDefinitionIDAttributesBatch(
  args: InferRequestType<
    (typeof client.api.v2.ContentDefinitions)[':contentDefinitionID']['Attributes']['Batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ContentDefinitions[':contentDefinitionID'].Attributes.Batch.$post(args, options),
  )
}

export async function getApiV2ContentReleases(
  args: InferRequestType<typeof client.api.v2.ContentReleases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ContentReleases.$get(args, options))
}

export async function postApiV2ContentReleases(
  args: InferRequestType<typeof client.api.v2.ContentReleases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ContentReleases.$post(args, options))
}

export async function getApiV2ContentReleasesContentReleaseId(
  args: InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ContentReleases[':ContentReleaseId'].$get(args, options))
}

export async function putApiV2ContentReleasesContentReleaseId(
  args: InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ContentReleases[':ContentReleaseId'].$put(args, options))
}

export async function deleteApiV2ContentReleasesContentReleaseId(
  args: InferRequestType<(typeof client.api.v2.ContentReleases)[':ContentReleaseId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ContentReleases[':ContentReleaseId'].$delete(args, options),
  )
}

export async function putApiV2ContentSubmissionAttributesBatch(
  args: InferRequestType<typeof client.api.v2.ContentSubmissionAttributes.Batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ContentSubmissionAttributes.Batch.$put(args, options))
}

export async function putApiV2ContentSubmissionAttributesContentSubmissionAttributeID(
  args: InferRequestType<
    (typeof client.api.v2.ContentSubmissionAttributes)[':contentSubmissionAttributeID']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ContentSubmissionAttributes[':contentSubmissionAttributeID'].$put(args, options),
  )
}

export async function deleteApiV2ContentSubmissionAttributesContentSubmissionAttributeID(
  args: InferRequestType<
    (typeof client.api.v2.ContentSubmissionAttributes)[':contentSubmissionAttributeID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ContentSubmissionAttributes[':contentSubmissionAttributeID'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2ContentSubmissionTypes(
  args: InferRequestType<typeof client.api.v2.ContentSubmissionTypes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ContentSubmissionTypes.$get(args, options))
}

export async function postApiV2ContentSubmissionTypes(
  args: InferRequestType<typeof client.api.v2.ContentSubmissionTypes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ContentSubmissionTypes.$post(args, options))
}

export async function getApiV2ContentSubmissionTypesId(
  args: InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ContentSubmissionTypes[':id'].$get(args, options))
}

export async function putApiV2ContentSubmissionTypesId(
  args: InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ContentSubmissionTypes[':id'].$put(args, options))
}

export async function deleteApiV2ContentSubmissionTypesId(
  args: InferRequestType<(typeof client.api.v2.ContentSubmissionTypes)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ContentSubmissionTypes[':id'].$delete(args, options))
}

export async function getApiV2ContentSubmissions(
  args: InferRequestType<typeof client.api.v2.ContentSubmissions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ContentSubmissions.$get(args, options))
}

export async function postApiV2ContentSubmissions(
  args: InferRequestType<typeof client.api.v2.ContentSubmissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ContentSubmissions.$post(args, options))
}

export async function getApiV2ContentSubmissionsContentSubmissionID(
  args: InferRequestType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ContentSubmissions[':contentSubmissionID'].$get(args, options),
  )
}

export async function putApiV2ContentSubmissionsContentSubmissionID(
  args: InferRequestType<(typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ContentSubmissions[':contentSubmissionID'].$put(args, options),
  )
}

export async function deleteApiV2ContentSubmissionsContentSubmissionID(
  args: InferRequestType<
    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ContentSubmissions[':contentSubmissionID'].$delete(args, options),
  )
}

export async function getApiV2ContentSubmissionsContentSubmissionIDAttributes(
  args: InferRequestType<
    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ContentSubmissions[':contentSubmissionID'].Attributes.$get(args, options),
  )
}

export async function postApiV2ContentSubmissionsContentSubmissionIDAttributes(
  args: InferRequestType<
    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ContentSubmissions[':contentSubmissionID'].Attributes.$post(args, options),
  )
}

export async function postApiV2ContentSubmissionsContentSubmissionIDAttributesBatch(
  args: InferRequestType<
    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Attributes']['Batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ContentSubmissions[':contentSubmissionID'].Attributes.Batch.$post(args, options),
  )
}

export async function getApiV2ContentSubmissionsContentSubmissionIDStatus(
  args: InferRequestType<
    (typeof client.api.v2.ContentSubmissions)[':contentSubmissionID']['Status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.ContentSubmissions[':contentSubmissionID'].Status.$get(args, options),
  )
}

export async function getApiV2DealerByCountry(
  args: InferRequestType<typeof client.api.v2.DealerByCountry.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.DealerByCountry.$get(args, options))
}

export async function getApiV2Dealers(
  args: InferRequestType<typeof client.api.v2.Dealers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Dealers.$get(args, options))
}

export async function getApiV2DealersDealerCode(
  args: InferRequestType<(typeof client.api.v2.Dealers)[':DealerCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Dealers[':DealerCode'].$get(args, options))
}

export async function getApiV2Files(
  args: InferRequestType<typeof client.api.v2.Files.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Files.$get(args, options))
}

export async function postApiV2Files(
  args: InferRequestType<typeof client.api.v2.Files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Files.$post(args, options))
}

export async function getApiV2FilesID(
  args: InferRequestType<(typeof client.api.v2.Files)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Files[':ID'].$get(args, options))
}

export async function putApiV2FilesID(
  args: InferRequestType<(typeof client.api.v2.Files)[':ID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Files[':ID'].$put(args, options))
}

export async function deleteApiV2FilesID(
  args: InferRequestType<(typeof client.api.v2.Files)[':ID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Files[':ID'].$delete(args, options))
}

export async function getApiV2FilesIDFileContents(
  args: InferRequestType<(typeof client.api.v2.Files)[':ID']['FileContents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Files[':ID'].FileContents.$get(args, options))
}

export async function putApiV2FilesIDFileContents(
  args: InferRequestType<(typeof client.api.v2.Files)[':ID']['FileContents']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Files[':ID'].FileContents.$put(args, options))
}

export async function getApiV2GlobalImageCategories(
  args: InferRequestType<typeof client.api.v2.GlobalImageCategories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.GlobalImageCategories.$get(args, options))
}

export async function postApiV2GlobalImageCategories(
  args: InferRequestType<typeof client.api.v2.GlobalImageCategories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.GlobalImageCategories.$post(args, options))
}

export async function getApiV2GlobalImageCategoriesID(
  args: InferRequestType<(typeof client.api.v2.GlobalImageCategories)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.GlobalImageCategories[':ID'].$get(args, options))
}

export async function getApiV2GlobalImages(
  args: InferRequestType<typeof client.api.v2.GlobalImages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.GlobalImages.$get(args, options))
}

export async function postApiV2GlobalImages(
  args: InferRequestType<typeof client.api.v2.GlobalImages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.GlobalImages.$post(args, options))
}

export async function getApiV2GlobalImagesID(
  args: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.GlobalImages[':ID'].$get(args, options))
}

export async function putApiV2GlobalImagesID(
  args: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.GlobalImages[':ID'].$put(args, options))
}

export async function deleteApiV2GlobalImagesID(
  args: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.GlobalImages[':ID'].$delete(args, options))
}

export async function getApiV2GlobalImagesIDImageContents(
  args: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.GlobalImages[':ID'].ImageContents.$get(args, options))
}

export async function putApiV2GlobalImagesIDImageContents(
  args: InferRequestType<(typeof client.api.v2.GlobalImages)[':ID']['ImageContents']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.GlobalImages[':ID'].ImageContents.$put(args, options))
}

export async function getApiV2Languages(
  args: InferRequestType<typeof client.api.v2.Languages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Languages.$get(args, options))
}

export async function postApiV2Languages(
  args: InferRequestType<typeof client.api.v2.Languages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Languages.$post(args, options))
}

export async function getApiV2LanguagesLocaleID(
  args: InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Languages[':LocaleID'].$get(args, options))
}

export async function putApiV2LanguagesLocaleID(
  args: InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Languages[':LocaleID'].$put(args, options))
}

export async function deleteApiV2LanguagesLocaleID(
  args: InferRequestType<(typeof client.api.v2.Languages)[':LocaleID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Languages[':LocaleID'].$delete(args, options))
}

export async function postApiV2LicenseActivations(
  args: InferRequestType<typeof client.api.v2.LicenseActivations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.LicenseActivations.$post(args, options))
}

export async function postApiV2LicenseActivationsRegisterEDTLite(
  args: InferRequestType<typeof client.api.v2.LicenseActivations.RegisterEDTLite.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.LicenseActivations.RegisterEDTLite.$post(args, options))
}

export async function putApiV2LicenseActivationsID(
  args: InferRequestType<(typeof client.api.v2.LicenseActivations)[':ID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.LicenseActivations[':ID'].$put(args, options))
}

export async function putApiV2LicenseActivationsIDConfirm(
  args: InferRequestType<(typeof client.api.v2.LicenseActivations)[':ID']['Confirm']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.LicenseActivations[':ID'].Confirm.$put(args, options))
}

export async function getApiV2Licenses(
  args: InferRequestType<typeof client.api.v2.Licenses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Licenses.$get(args, options))
}

export async function getApiV2LicensesID(
  args: InferRequestType<(typeof client.api.v2.Licenses)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Licenses[':ID'].$get(args, options))
}

export async function getApiV2Logs(
  args: InferRequestType<typeof client.api.v2.Logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Logs.$get(args, options))
}

export async function postApiV2Logs(
  args: InferRequestType<typeof client.api.v2.Logs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Logs.$post(args, options))
}

export async function getApiV2LogsID(
  args: InferRequestType<(typeof client.api.v2.Logs)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Logs[':ID'].$get(args, options))
}

export async function postApiV2Notifications(
  args: InferRequestType<typeof client.api.v2.Notifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Notifications.$post(args, options))
}

export async function getApiV2PackageTypes(
  args: InferRequestType<typeof client.api.v2.PackageTypes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.PackageTypes.$get(args, options))
}

export async function postApiV2PackageTypes(
  args: InferRequestType<typeof client.api.v2.PackageTypes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.PackageTypes.$post(args, options))
}

export async function getApiV2PackageTypesID(
  args: InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.PackageTypes[':ID'].$get(args, options))
}

export async function putApiV2PackageTypesID(
  args: InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.PackageTypes[':ID'].$put(args, options))
}

export async function deleteApiV2PackageTypesID(
  args: InferRequestType<(typeof client.api.v2.PackageTypes)[':ID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.PackageTypes[':ID'].$delete(args, options))
}

export async function postApiV2PackageTypesIdUsersUserID(
  args: InferRequestType<(typeof client.api.v2.PackageTypes)[':id']['Users'][':userID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.PackageTypes[':id'].Users[':userID'].$post(args, options),
  )
}

export async function deleteApiV2PackageTypesIdUsersUserID(
  args: InferRequestType<(typeof client.api.v2.PackageTypes)[':id']['Users'][':userID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.PackageTypes[':id'].Users[':userID'].$delete(args, options),
  )
}

export async function getApiV2PackageTypetoBundles(
  args: InferRequestType<typeof client.api.v2.PackageTypetoBundles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.PackageTypetoBundles.$get(args, options))
}

export async function putApiV2PackageTypetoBundles(
  args: InferRequestType<typeof client.api.v2.PackageTypetoBundles.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.PackageTypetoBundles.$put(args, options))
}

export async function postApiV2PackageTypetoBundles(
  args: InferRequestType<typeof client.api.v2.PackageTypetoBundles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.PackageTypetoBundles.$post(args, options))
}

export async function deleteApiV2PackageTypetoBundles(
  args: InferRequestType<typeof client.api.v2.PackageTypetoBundles.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.PackageTypetoBundles.$delete(args, options))
}

export async function getApiV2Packages(
  args: InferRequestType<typeof client.api.v2.Packages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Packages.$get(args, options))
}

export async function postApiV2Packages(
  args: InferRequestType<typeof client.api.v2.Packages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Packages.$post(args, options))
}

export async function getApiV2PackagesID(
  args: InferRequestType<(typeof client.api.v2.Packages)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Packages[':ID'].$get(args, options))
}

export async function putApiV2PackagesID(
  args: InferRequestType<(typeof client.api.v2.Packages)[':ID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Packages[':ID'].$put(args, options))
}

export async function deleteApiV2PackagesID(
  args: InferRequestType<(typeof client.api.v2.Packages)[':ID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Packages[':ID'].$delete(args, options))
}

export async function getApiV2Permissions(
  args: InferRequestType<typeof client.api.v2.Permissions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Permissions.$get(args, options))
}

export async function postApiV2Permissions(
  args: InferRequestType<typeof client.api.v2.Permissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Permissions.$post(args, options))
}

export async function getApiV2PermissionsId(
  args: InferRequestType<(typeof client.api.v2.Permissions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Permissions[':id'].$get(args, options))
}

export async function putApiV2PermissionsId(
  args: InferRequestType<(typeof client.api.v2.Permissions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Permissions[':id'].$put(args, options))
}

export async function deleteApiV2PermissionsId(
  args: InferRequestType<(typeof client.api.v2.Permissions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Permissions[':id'].$delete(args, options))
}

export async function getApiV2PriorityPackages(
  args: InferRequestType<typeof client.api.v2.PriorityPackages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.PriorityPackages.$get(args, options))
}

export async function postApiV2PriorityPackages(
  args: InferRequestType<typeof client.api.v2.PriorityPackages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.PriorityPackages.$post(args, options))
}

export async function getApiV2PriorityPackagesID(
  args: InferRequestType<(typeof client.api.v2.PriorityPackages)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.PriorityPackages[':ID'].$get(args, options))
}

export async function deleteApiV2PriorityPackagesID(
  args: InferRequestType<(typeof client.api.v2.PriorityPackages)[':ID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.PriorityPackages[':ID'].$delete(args, options))
}

export async function getApiV2Releases(
  args: InferRequestType<typeof client.api.v2.Releases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Releases.$get(args, options))
}

export async function postApiV2Releases(
  args: InferRequestType<typeof client.api.v2.Releases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Releases.$post(args, options))
}

export async function getApiV2ReleasesReleaseId(
  args: InferRequestType<(typeof client.api.v2.Releases)[':ReleaseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Releases[':ReleaseId'].$get(args, options))
}

export async function postApiV2ReleasesReleaseIdBundleBundleId(
  args: InferRequestType<
    (typeof client.api.v2.Releases)[':ReleaseId']['Bundle'][':BundleId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.Releases[':ReleaseId'].Bundle[':BundleId'].$post(args, options),
  )
}

export async function deleteApiV2ReleasesReleaseIdBundleBundleId(
  args: InferRequestType<
    (typeof client.api.v2.Releases)[':ReleaseId']['Bundle'][':BundleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.Releases[':ReleaseId'].Bundle[':BundleId'].$delete(args, options),
  )
}

export async function putApiV2ReleasesReleaseId2(
  args: InferRequestType<(typeof client.api.v2.Releases)[':releaseId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Releases[':releaseId'].$put(args, options))
}

export async function getApiV2ReportingBundleStatusSummary(
  args: InferRequestType<typeof client.api.v2.Reporting.BundleStatusSummary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Reporting.BundleStatusSummary.$get(args, options))
}

export async function getApiV2ReportingBundlesInUpdateGroup(
  args: InferRequestType<typeof client.api.v2.Reporting.BundlesInUpdateGroup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Reporting.BundlesInUpdateGroup.$get(args, options))
}

export async function getApiV2ReportingClientInfo(
  args: InferRequestType<typeof client.api.v2.Reporting.ClientInfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Reporting.ClientInfo.$get(args, options))
}

export async function getApiV2ReportingCurrentPackagesInUpdateGroup(
  args: InferRequestType<typeof client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.Reporting.CurrentPackagesInUpdateGroup.$get(args, options),
  )
}

export async function getApiV2ReportingGetClient(
  args: InferRequestType<typeof client.api.v2.Reporting.GetClient.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Reporting.GetClient.$get(args, options))
}

export async function getApiV2ReportingGetSubscriptions(
  args: InferRequestType<typeof client.api.v2.Reporting.GetSubscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Reporting.GetSubscriptions.$get(args, options))
}

export async function getApiV2ReportingPackageStatusSummary(
  args: InferRequestType<typeof client.api.v2.Reporting.PackageStatusSummary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Reporting.PackageStatusSummary.$get(args, options))
}

export async function getApiV2ReportingRegisteredClients(
  args: InferRequestType<typeof client.api.v2.Reporting.RegisteredClients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Reporting.RegisteredClients.$get(args, options))
}

export async function getApiV2ReportingUpdateGroups(
  args: InferRequestType<typeof client.api.v2.Reporting.UpdateGroups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Reporting.UpdateGroups.$get(args, options))
}

export async function getApiV2ReportingUpdateMetrics(
  args: InferRequestType<typeof client.api.v2.Reporting.UpdateMetrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Reporting.UpdateMetrics.$get(args, options))
}

export async function getApiV2Roles(
  args: InferRequestType<typeof client.api.v2.Roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Roles.$get(args, options))
}

export async function postApiV2Roles(
  args: InferRequestType<typeof client.api.v2.Roles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Roles.$post(args, options))
}

export async function getApiV2RolesId(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Roles[':id'].$get(args, options))
}

export async function putApiV2RolesId(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Roles[':id'].$put(args, options))
}

export async function deleteApiV2RolesId(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Roles[':id'].$delete(args, options))
}

export async function getApiV2RolesIdPermissions(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['Permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Roles[':id'].Permissions.$get(args, options))
}

export async function putApiV2RolesIdPermissions(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['Permissions']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Roles[':id'].Permissions.$put(args, options))
}

export async function getApiV2RolesIdUsers(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['Users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Roles[':id'].Users.$get(args, options))
}

export async function putApiV2RolesIdUsers(
  args: InferRequestType<(typeof client.api.v2.Roles)[':id']['Users']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Roles[':id'].Users.$put(args, options))
}

export async function getApiV2StringDefinitions(
  args: InferRequestType<typeof client.api.v2.StringDefinitions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.StringDefinitions.$get(args, options))
}

export async function putApiV2StringDefinitionsBatch(
  args: InferRequestType<typeof client.api.v2.StringDefinitions.Batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.StringDefinitions.Batch.$put(args, options))
}

export async function postApiV2StringDefinitionsBatch(
  args: InferRequestType<typeof client.api.v2.StringDefinitions.Batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.StringDefinitions.Batch.$post(args, options))
}

export async function getApiV2StringDefinitionsID(
  args: InferRequestType<(typeof client.api.v2.StringDefinitions)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.StringDefinitions[':ID'].$get(args, options))
}

export async function getApiV2StringTranslations(
  args: InferRequestType<typeof client.api.v2.StringTranslations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.StringTranslations.$get(args, options))
}

export async function putApiV2StringTranslationsBatch(
  args: InferRequestType<typeof client.api.v2.StringTranslations.Batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.StringTranslations.Batch.$put(args, options))
}

export async function getApiV2StringTranslationsStringIdLanguageId(
  args: InferRequestType<
    (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.StringTranslations[':stringId'][':languageId'].$get(args, options),
  )
}

export async function putApiV2StringTranslationsStringIdLanguageId(
  args: InferRequestType<
    (typeof client.api.v2.StringTranslations)[':stringId'][':languageId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.StringTranslations[':stringId'][':languageId'].$put(args, options),
  )
}

export async function getApiV2TranslationKeys(
  args: InferRequestType<typeof client.api.v2.TranslationKeys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationKeys.$get(args, options))
}

export async function postApiV2TranslationKeys(
  args: InferRequestType<typeof client.api.v2.TranslationKeys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationKeys.$post(args, options))
}

export async function getApiV2TranslationKeysID(
  args: InferRequestType<(typeof client.api.v2.TranslationKeys)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationKeys[':ID'].$get(args, options))
}

export async function putApiV2TranslationKeysID(
  args: InferRequestType<(typeof client.api.v2.TranslationKeys)[':ID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationKeys[':ID'].$put(args, options))
}

export async function getApiV2TranslationRequests(
  args: InferRequestType<typeof client.api.v2.TranslationRequests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationRequests.$get(args, options))
}

export async function postApiV2TranslationRequests(
  args: InferRequestType<typeof client.api.v2.TranslationRequests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationRequests.$post(args, options))
}

export async function getApiV2TranslationRequestsId(
  args: InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationRequests[':Id'].$get(args, options))
}

export async function putApiV2TranslationRequestsId(
  args: InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationRequests[':Id'].$put(args, options))
}

export async function putApiV2TranslationRequestsIdStrings(
  args: InferRequestType<(typeof client.api.v2.TranslationRequests)[':Id']['Strings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationRequests[':Id'].Strings.$put(args, options))
}

export async function putApiV2TranslationSetAttributesBatch(
  args: InferRequestType<typeof client.api.v2.TranslationSetAttributes.Batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationSetAttributes.Batch.$put(args, options))
}

export async function putApiV2TranslationSetAttributesID(
  args: InferRequestType<(typeof client.api.v2.TranslationSetAttributes)[':ID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationSetAttributes[':ID'].$put(args, options))
}

export async function deleteApiV2TranslationSetAttributesID(
  args: InferRequestType<(typeof client.api.v2.TranslationSetAttributes)[':ID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationSetAttributes[':ID'].$delete(args, options))
}

export async function getApiV2TranslationSets(
  args: InferRequestType<typeof client.api.v2.TranslationSets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationSets.$get(args, options))
}

export async function getApiV2TranslationSetsID(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationSets[':ID'].$get(args, options))
}

export async function putApiV2TranslationSetsID(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationSets[':ID'].$put(args, options))
}

export async function getApiV2TranslationSetsIDAttributes(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationSets[':ID'].Attributes.$get(args, options))
}

export async function postApiV2TranslationSetsIDAttributes(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Attributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationSets[':ID'].Attributes.$post(args, options))
}

export async function postApiV2TranslationSetsIDAttributesBatch(
  args: InferRequestType<
    (typeof client.api.v2.TranslationSets)[':ID']['Attributes']['Batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.TranslationSets[':ID'].Attributes.Batch.$post(args, options),
  )
}

export async function getApiV2TranslationSetsIDSourceStrings(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['SourceStrings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationSets[':ID'].SourceStrings.$get(args, options))
}

export async function getApiV2TranslationSetsIDStatistics(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationSets[':ID'].Statistics.$get(args, options))
}

export async function getApiV2TranslationSetsIDStrings(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationSets[':ID'].Strings.$get(args, options))
}

export async function putApiV2TranslationSetsIDStrings(
  args: InferRequestType<(typeof client.api.v2.TranslationSets)[':ID']['Strings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.TranslationSets[':ID'].Strings.$put(args, options))
}

export async function getApiV2UpdateGroupClientRelationships(
  args: InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.UpdateGroupClientRelationships.$get(args, options))
}

export async function putApiV2UpdateGroupClientRelationships(
  args: InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.UpdateGroupClientRelationships.$put(args, options))
}

export async function postApiV2UpdateGroupClientRelationships(
  args: InferRequestType<typeof client.api.v2.UpdateGroupClientRelationships.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.UpdateGroupClientRelationships.$post(args, options))
}

export async function getApiV2UpdateGroupClientRelationshipsRelationshipID(
  args: InferRequestType<
    (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.UpdateGroupClientRelationships[':RelationshipID'].$get(args, options),
  )
}

export async function putApiV2UpdateGroupClientRelationshipsRelationshipID(
  args: InferRequestType<
    (typeof client.api.v2.UpdateGroupClientRelationships)[':RelationshipID']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.UpdateGroupClientRelationships[':RelationshipID'].$put(args, options),
  )
}

export async function getApiV2UpdateGroupSubscriptions(
  args: InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.UpdateGroupSubscriptions.$get(args, options))
}

export async function postApiV2UpdateGroupSubscriptions(
  args: InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.UpdateGroupSubscriptions.$post(args, options))
}

export async function putApiV2UpdateGroupSubscriptionsBatch(
  args: InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.Batch.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.UpdateGroupSubscriptions.Batch.$put(args, options))
}

export async function postApiV2UpdateGroupSubscriptionsBatch(
  args: InferRequestType<typeof client.api.v2.UpdateGroupSubscriptions.Batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.UpdateGroupSubscriptions.Batch.$post(args, options))
}

export async function getApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionID(
  args: InferRequestType<
    (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.UpdateGroupSubscriptions[':UpdateGroupSubscriptionID'].$get(args, options),
  )
}

export async function putApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionID(
  args: InferRequestType<
    (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.UpdateGroupSubscriptions[':UpdateGroupSubscriptionID'].$put(args, options),
  )
}

export async function deleteApiV2UpdateGroupSubscriptionsUpdateGroupSubscriptionID(
  args: InferRequestType<
    (typeof client.api.v2.UpdateGroupSubscriptions)[':UpdateGroupSubscriptionID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.UpdateGroupSubscriptions[':UpdateGroupSubscriptionID'].$delete(args, options),
  )
}

export async function getApiV2UpdateGroups(
  args: InferRequestType<typeof client.api.v2.UpdateGroups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.UpdateGroups.$get(args, options))
}

export async function postApiV2UpdateGroups(
  args: InferRequestType<typeof client.api.v2.UpdateGroups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.UpdateGroups.$post(args, options))
}

export async function getApiV2UpdateGroupsID(
  args: InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.UpdateGroups[':ID'].$get(args, options))
}

export async function putApiV2UpdateGroupsID(
  args: InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.UpdateGroups[':ID'].$put(args, options))
}

export async function deleteApiV2UpdateGroupsID(
  args: InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.UpdateGroups[':ID'].$delete(args, options))
}

export async function getApiV2UpdateGroupsIDBundles(
  args: InferRequestType<(typeof client.api.v2.UpdateGroups)[':ID']['Bundles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.UpdateGroups[':ID'].Bundles.$get(args, options))
}

export async function postApiV2UpdateGroupsIdUsersUserID(
  args: InferRequestType<(typeof client.api.v2.UpdateGroups)[':id']['Users'][':userID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.UpdateGroups[':id'].Users[':userID'].$post(args, options),
  )
}

export async function deleteApiV2UpdateGroupsIdUsersUserID(
  args: InferRequestType<(typeof client.api.v2.UpdateGroups)[':id']['Users'][':userID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.UpdateGroups[':id'].Users[':userID'].$delete(args, options),
  )
}

export async function getApiV2UpdateSystem(
  args: InferRequestType<typeof client.api.v2.UpdateSystem.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.UpdateSystem.$get(args, options))
}

export async function getApiV2UserContentDefinitions(
  args: InferRequestType<typeof client.api.v2.UserContentDefinitions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.UserContentDefinitions.$get(args, options))
}

export async function postApiV2UserContentDefinitions(
  args: InferRequestType<typeof client.api.v2.UserContentDefinitions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.UserContentDefinitions.$post(args, options))
}

export async function getApiV2UserContentDefinitionsUserContentDefinitionID(
  args: InferRequestType<
    (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.UserContentDefinitions[':userContentDefinitionID'].$get(args, options),
  )
}

export async function deleteApiV2UserContentDefinitionsUserContentDefinitionID(
  args: InferRequestType<
    (typeof client.api.v2.UserContentDefinitions)[':userContentDefinitionID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.UserContentDefinitions[':userContentDefinitionID'].$delete(args, options),
  )
}

export async function getApiV2Users(
  args: InferRequestType<typeof client.api.v2.Users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Users.$get(args, options))
}

export async function postApiV2Users(
  args: InferRequestType<typeof client.api.v2.Users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Users.$post(args, options))
}

export async function getApiV2UsersCurrent(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.Users.Current.$get(undefined, options))
}

export async function putApiV2UsersCurrent(
  args: InferRequestType<typeof client.api.v2.Users.Current.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Users.Current.$put(args, options))
}

export async function getApiV2UsersCurrentPermissions(
  args: InferRequestType<typeof client.api.v2.Users.Current.Permissions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Users.Current.Permissions.$get(args, options))
}

export async function getApiV2UsersCurrentRoles(
  args: InferRequestType<typeof client.api.v2.Users.Current.Roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Users.Current.Roles.$get(args, options))
}

export async function getApiV2UsersId(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Users[':id'].$get(args, options))
}

export async function putApiV2UsersId(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Users[':id'].$put(args, options))
}

export async function deleteApiV2UsersId(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Users[':id'].$delete(args, options))
}

export async function getApiV2UsersIdPermissions(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['Permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Users[':id'].Permissions.$get(args, options))
}

export async function getApiV2UsersIdRoles(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['Roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Users[':id'].Roles.$get(args, options))
}

export async function putApiV2UsersIdRoles(
  args: InferRequestType<(typeof client.api.v2.Users)[':id']['Roles']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Users[':id'].Roles.$put(args, options))
}

export async function getApiV2VoucherHistory(
  args: InferRequestType<typeof client.api.v2.VoucherHistory.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.VoucherHistory.$get(args, options))
}

export async function getApiV2Vouchers(
  args: InferRequestType<typeof client.api.v2.Vouchers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Vouchers.$get(args, options))
}

export async function postApiV2Vouchers(
  args: InferRequestType<typeof client.api.v2.Vouchers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Vouchers.$post(args, options))
}

export async function getApiV2VouchersVoucherCode(
  args: InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Vouchers[':VoucherCode'].$get(args, options))
}

export async function putApiV2VouchersVoucherCode(
  args: InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Vouchers[':VoucherCode'].$put(args, options))
}

export async function deleteApiV2VouchersVoucherCode(
  args: InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.Vouchers[':VoucherCode'].$delete(args, options))
}

export async function getApiV2VouchersVoucherCodeVoucherHistory(
  args: InferRequestType<(typeof client.api.v2.Vouchers)[':VoucherCode']['VoucherHistory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.Vouchers[':VoucherCode'].VoucherHistory.$get(args, options),
  )
}

export async function getApiV2Activities(
  args: InferRequestType<typeof client.api.v2.activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.activities.$get(args, options))
}

export async function postApiV2Activities(
  args: InferRequestType<typeof client.api.v2.activities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.activities.$post(args, options))
}

export async function getApiV2ActivitiesActivityID(
  args: InferRequestType<(typeof client.api.v2.activities)[':activityID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.activities[':activityID'].$get(args, options))
}

export async function putApiV2ActivitiesActivityID(
  args: InferRequestType<(typeof client.api.v2.activities)[':activityID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.activities[':activityID'].$put(args, options))
}

export async function deleteApiV2ActivitiesActivityID(
  args: InferRequestType<(typeof client.api.v2.activities)[':activityID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.activities[':activityID'].$delete(args, options))
}

export async function getApiV2ActivityRuns(
  args: InferRequestType<typeof client.api.v2.activityRuns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.activityRuns.$get(args, options))
}

export async function getApiV2ActivityRunsActivityRunID(
  args: InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.activityRuns[':activityRunID'].$get(args, options))
}

export async function putApiV2ActivityRunsActivityRunID(
  args: InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.activityRuns[':activityRunID'].$put(args, options))
}

export async function getApiV2ActivityRunsActivityRunIDStatus(
  args: InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.activityRuns[':activityRunID'].status.$get(args, options),
  )
}

export async function putApiV2ActivityRunsActivityRunIDStatus(
  args: InferRequestType<(typeof client.api.v2.activityRuns)[':activityRunID']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.activityRuns[':activityRunID'].status.$put(args, options),
  )
}

export async function getApiV2Agents(
  args: InferRequestType<typeof client.api.v2.agents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.agents.$get(args, options))
}

export async function postApiV2Agents(
  args: InferRequestType<typeof client.api.v2.agents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.agents.$post(args, options))
}

export async function getApiV2AgentsCurrent(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.agents.Current.$get(undefined, options))
}

export async function getApiV2AgentsCurrentActivityRun(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.agents.Current.ActivityRun.$get(undefined, options))
}

export async function getApiV2AgentsAgentID(
  args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.agents[':agentID'].$get(args, options))
}

export async function putApiV2AgentsAgentID(
  args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.agents[':agentID'].$put(args, options))
}

export async function deleteApiV2AgentsAgentID(
  args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.agents[':agentID'].$delete(args, options))
}

export async function getApiV2AgentsAgentIDActivityRun(
  args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.agents[':agentID'].ActivityRun.$get(args, options))
}

export async function putApiV2AgentsAgentIDActivityRun(
  args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['ActivityRun']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.agents[':agentID'].ActivityRun.$put(args, options))
}

export async function putApiV2AgentsAgentIDStatus(
  args: InferRequestType<(typeof client.api.v2.agents)[':agentID']['Status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.agents[':agentID'].Status.$put(args, options))
}

export async function getApiV2JobRuns(
  args: InferRequestType<typeof client.api.v2.jobRuns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.jobRuns.$get(args, options))
}

export async function postApiV2JobRuns(
  args: InferRequestType<typeof client.api.v2.jobRuns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.jobRuns.$post(args, options))
}

export async function getApiV2JobRunsJobRunID(
  args: InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.jobRuns[':jobRunID'].$get(args, options))
}

export async function putApiV2JobRunsJobRunID(
  args: InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.jobRuns[':jobRunID'].$put(args, options))
}

export async function deleteApiV2JobRunsJobRunID(
  args: InferRequestType<(typeof client.api.v2.jobRuns)[':jobRunID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.jobRuns[':jobRunID'].$delete(args, options))
}

export async function getApiV2Jobs(
  args: InferRequestType<typeof client.api.v2.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.jobs.$get(args, options))
}

export async function postApiV2Jobs(
  args: InferRequestType<typeof client.api.v2.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.jobs.$post(args, options))
}

export async function getApiV2JobsJobID(
  args: InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.jobs[':jobID'].$get(args, options))
}

export async function putApiV2JobsJobID(
  args: InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.jobs[':jobID'].$put(args, options))
}

export async function deleteApiV2JobsJobID(
  args: InferRequestType<(typeof client.api.v2.jobs)[':jobID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.jobs[':jobID'].$delete(args, options))
}

export async function getApiV2Steps(
  args: InferRequestType<typeof client.api.v2.steps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.steps.$get(args, options))
}

export async function postApiV2Steps(
  args: InferRequestType<typeof client.api.v2.steps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.steps.$post(args, options))
}

export async function getApiV2StepsStepID(
  args: InferRequestType<(typeof client.api.v2.steps)[':stepID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.steps[':stepID'].$get(args, options))
}

export async function putApiV2StepsStepID(
  args: InferRequestType<(typeof client.api.v2.steps)[':stepID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.steps[':stepID'].$put(args, options))
}
