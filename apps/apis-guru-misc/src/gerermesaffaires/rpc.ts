import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBoxMenus(options?: ClientRequestOptions) {
  return await parseResponse(client.box.menus.$get(undefined, options))
}

export async function getBusinessGroups(
  args: InferRequestType<(typeof client)['business-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['business-groups'].$get(args, options))
}

export async function postBusinessGroups(
  args: InferRequestType<(typeof client)['business-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['business-groups'].$post(args, options))
}

export async function patchBusinessGroups(
  args: InferRequestType<(typeof client)['business-groups']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['business-groups'].$patch(args, options))
}

export async function getBusinessGroupsAll(
  args: InferRequestType<(typeof client)['business-groups']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['business-groups'].all.$get(args, options))
}

export async function getBusinessGroupsId(
  args: InferRequestType<(typeof client)['business-groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['business-groups'][':id'].$get(args, options))
}

export async function getBusinessGroupsIdSpaces(
  args: InferRequestType<(typeof client)['business-groups'][':id']['spaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['business-groups'][':id'].spaces.$get(args, options))
}

export async function deleteBusinessGroupsIdSpacesSpaceId(
  args: InferRequestType<
    (typeof client)['business-groups'][':id']['spaces'][':spaceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['business-groups'][':id'].spaces[':spaceId'].$delete(args, options),
  )
}

export async function postBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdGuestInSpace(
  args: InferRequestType<
    (typeof client)['business-groups'][':id']['spaces'][':spaceId']['legal-entities'][':personId']['customers'][':folderId']['guest-in-space']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['business-groups'][':id'].spaces[':spaceId']['legal-entities'][':personId'].customers[
      ':folderId'
    ]['guest-in-space'].$post(args, options),
  )
}

export async function postBusinessGroupsIdSpacesSpaceIdLegalEntitiesPersonIdCustomersFolderIdSpaces(
  args: InferRequestType<
    (typeof client)['business-groups'][':id']['spaces'][':spaceId']['legal-entities'][':personId']['customers'][':folderId']['spaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['business-groups'][':id'].spaces[':spaceId']['legal-entities'][':personId'].customers[
      ':folderId'
    ].spaces.$post(args, options),
  )
}

export async function getHubBusinessGroupsIdMenus(
  args: InferRequestType<(typeof client.hub)['business-groups'][':Id']['menus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hub['business-groups'][':Id'].menus.$get(args, options))
}

export async function postHubDocuments(
  args: InferRequestType<typeof client.hub.documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hub.documents.$post(args, options))
}

export async function getHubMenus(options?: ClientRequestOptions) {
  return await parseResponse(client.hub.menus.$get(undefined, options))
}

export async function getHubMenusAll(options?: ClientRequestOptions) {
  return await parseResponse(client.hub.menus.all.$get(undefined, options))
}

export async function postHubPayslips(
  args: InferRequestType<typeof client.hub.payslips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hub.payslips.$post(args, options))
}

export async function postHubSpacesSpaceIdDocuments(
  args: InferRequestType<(typeof client.hub.spaces)[':spaceId']['documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hub.spaces[':spaceId'].documents.$post(args, options))
}

export async function getHubSpacesSpaceIdMenus(
  args: InferRequestType<(typeof client.hub.spaces)[':spaceId']['menus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hub.spaces[':spaceId'].menus.$get(args, options))
}

export async function postHubSpacesSpaceIdPayslips(
  args: InferRequestType<(typeof client.hub.spaces)[':spaceId']['payslips']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hub.spaces[':spaceId'].payslips.$post(args, options))
}

export async function getMenus(options?: ClientRequestOptions) {
  return await parseResponse(client.menus.$get(undefined, options))
}

export async function postMenusMenuIdDocuments(
  args: InferRequestType<(typeof client.menus)[':menuId']['documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.menus[':menuId'].documents.$post(args, options))
}

export async function getProfile(
  args: InferRequestType<typeof client.profile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.$get(args, options))
}

export async function postProfile(
  args: InferRequestType<typeof client.profile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.$post(args, options))
}

export async function patchProfile(
  args: InferRequestType<typeof client.profile.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.$patch(args, options))
}

export async function patchProfileEmail(
  args: InferRequestType<typeof client.profile.email.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.email.$patch(args, options))
}

export async function getProfileIdFile(
  args: InferRequestType<(typeof client.profile)['id-file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile['id-file'].$get(args, options))
}

export async function patchProfileMobile(
  args: InferRequestType<typeof client.profile.mobile.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.mobile.$patch(args, options))
}

export async function getRegistration(
  args: InferRequestType<typeof client.registration.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registration.$get(args, options))
}

export async function postRegistration(
  args: InferRequestType<typeof client.registration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registration.$post(args, options))
}

export async function getSession(options?: ClientRequestOptions) {
  return await parseResponse(client.session.$get(undefined, options))
}

export async function getSpaces(
  args: InferRequestType<typeof client.spaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.$get(args, options))
}

export async function postSpaces(
  args: InferRequestType<typeof client.spaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.$post(args, options))
}

export async function getSpacesAll(
  args: InferRequestType<typeof client.spaces.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces.all.$get(args, options))
}

export async function getSpacesId(
  args: InferRequestType<(typeof client.spaces)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].$get(args, options))
}

export async function deleteSpacesId(
  args: InferRequestType<(typeof client.spaces)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].$delete(args, options))
}

export async function patchSpacesId(
  args: InferRequestType<(typeof client.spaces)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].$patch(args, options))
}

export async function getSpacesIdAccountingYear(
  args: InferRequestType<(typeof client.spaces)[':id']['accounting-year']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id']['accounting-year'].$get(args, options))
}

export async function postSpacesIdAccountingYear(
  args: InferRequestType<(typeof client.spaces)[':id']['accounting-year']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id']['accounting-year'].$post(args, options))
}

export async function getSpacesIdCollectiveDecision(
  args: InferRequestType<(typeof client.spaces)[':id']['collective-decision']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id']['collective-decision'].$get(args, options))
}

export async function postSpacesIdCollectiveDecision(
  args: InferRequestType<(typeof client.spaces)[':id']['collective-decision']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id']['collective-decision'].$post(args, options))
}

export async function getSpacesIdCompanyEntities(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id']['company-entities'].$get(args, options))
}

export async function postSpacesIdCompanyEntities(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id']['company-entities'].$post(args, options))
}

export async function getSpacesIdCompanyEntitiesAll(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id']['company-entities'].all.$get(args, options))
}

export async function getSpacesIdCompanyEntitiesCompanyId(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':id']['company-entities'][':companyId'].$get(args, options),
  )
}

export async function patchSpacesIdCompanyEntitiesCompanyId(
  args: InferRequestType<(typeof client.spaces)[':id']['company-entities'][':companyId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':id']['company-entities'][':companyId'].$patch(args, options),
  )
}

export async function getSpacesIdCompanyEntitiesPersonIdDetails(
  args: InferRequestType<
    (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':id']['company-entities'][':personId'].details.$get(args, options),
  )
}

export async function postSpacesIdCompanyEntitiesPersonIdDetails(
  args: InferRequestType<
    (typeof client.spaces)[':id']['company-entities'][':personId']['details']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':id']['company-entities'][':personId'].details.$post(args, options),
  )
}

export async function deleteSpacesIdCompanyEntitiesPersonIdDetailsDesignation(
  args: InferRequestType<
    (typeof client.spaces)[':id']['company-entities'][':personId']['details'][':designation']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':id']['company-entities'][':personId'].details[':designation'].$delete(
      args,
      options,
    ),
  )
}

export async function postSpacesIdDocumentsDownload(
  args: InferRequestType<(typeof client.spaces)[':id']['documents']['download']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].documents.download.$post(args, options))
}

export async function getSpacesIdFoldersFolderIdPersonsMemberId(
  args: InferRequestType<
    (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':id'].folders[':folderId'].persons[':memberId'].$get(args, options),
  )
}

export async function patchSpacesIdFoldersFolderIdPersonsMemberId(
  args: InferRequestType<
    (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':id'].folders[':folderId'].persons[':memberId'].$patch(args, options),
  )
}

export async function patchSpacesIdFoldersFolderIdPersonsMemberIdActiveaccess(
  args: InferRequestType<
    (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['activeaccess']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':id'].folders[':folderId'].persons[':memberId'].activeaccess.$patch(
      args,
      options,
    ),
  )
}

export async function patchSpacesIdFoldersFolderIdPersonsMemberIdUnactiveaccess(
  args: InferRequestType<
    (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':memberId']['unactiveaccess']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':id'].folders[':folderId'].persons[':memberId'].unactiveaccess.$patch(
      args,
      options,
    ),
  )
}

export async function postSpacesIdFoldersFolderIdPersonsPersonIdGuestInSpace(
  args: InferRequestType<
    (typeof client.spaces)[':id']['folders'][':folderId']['persons'][':personId']['guest-in-space']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':id'].folders[':folderId'].persons[':personId']['guest-in-space'].$post(
      args,
      options,
    ),
  )
}

export async function getSpacesIdGroups(
  args: InferRequestType<(typeof client.spaces)[':id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].groups.$get(args, options))
}

export async function postSpacesIdGroups(
  args: InferRequestType<(typeof client.spaces)[':id']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].groups.$post(args, options))
}

export async function getSpacesIdGroupsAll(
  args: InferRequestType<(typeof client.spaces)[':id']['groups']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].groups.all.$get(args, options))
}

export async function getSpacesIdGroupsGroupId(
  args: InferRequestType<(typeof client.spaces)[':id']['groups'][':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].groups[':groupId'].$get(args, options))
}

export async function patchSpacesIdGroupsGroupId(
  args: InferRequestType<(typeof client.spaces)[':id']['groups'][':groupId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].groups[':groupId'].$patch(args, options))
}

export async function deleteSpacesIdGroupsGroupIdFoldersFolderId(
  args: InferRequestType<
    (typeof client.spaces)[':id']['groups'][':groupId']['folders'][':folderId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':id'].groups[':groupId'].folders[':folderId'].$delete(args, options),
  )
}

export async function patchSpacesIdGroupsGroupIdFoldersFolderId(
  args: InferRequestType<
    (typeof client.spaces)[':id']['groups'][':groupId']['folders'][':folderId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':id'].groups[':groupId'].folders[':folderId'].$patch(args, options),
  )
}

export async function deleteSpacesIdGroupsGroupIdPersonsMemberId(
  args: InferRequestType<
    (typeof client.spaces)[':id']['groups'][':groupId']['persons'][':memberId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':id'].groups[':groupId'].persons[':memberId'].$delete(args, options),
  )
}

export async function patchSpacesIdGroupsGroupIdPersonsMemberId(
  args: InferRequestType<
    (typeof client.spaces)[':id']['groups'][':groupId']['persons'][':memberId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':id'].groups[':groupId'].persons[':memberId'].$patch(args, options),
  )
}

export async function getSpacesIdLegal(
  args: InferRequestType<(typeof client.spaces)[':id']['legal']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].legal.$get(args, options))
}

export async function patchSpacesIdLegal(
  args: InferRequestType<(typeof client.spaces)[':id']['legal']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].legal.$patch(args, options))
}

export async function getSpacesIdLogo(
  args: InferRequestType<(typeof client.spaces)[':id']['logo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].logo.$get(args, options))
}

export async function getSpacesIdPersons(
  args: InferRequestType<(typeof client.spaces)[':id']['persons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].persons.$get(args, options))
}

export async function postSpacesIdPersons(
  args: InferRequestType<(typeof client.spaces)[':id']['persons']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].persons.$post(args, options))
}

export async function getSpacesIdPersonsAll(
  args: InferRequestType<(typeof client.spaces)[':id']['persons']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].persons.all.$get(args, options))
}

export async function patchSpacesIdPersonsMemberIdPlayer(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':memberId']['player']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].persons[':memberId'].player.$patch(args, options))
}

export async function getSpacesIdPersonsPersonId(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].persons[':personId'].$get(args, options))
}

export async function deleteSpacesIdPersonsPersonId(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].persons[':personId'].$delete(args, options))
}

export async function patchSpacesIdPersonsPersonId(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].persons[':personId'].$patch(args, options))
}

export async function getSpacesIdPersonsPersonIdDetails(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].persons[':personId'].details.$get(args, options))
}

export async function postSpacesIdPersonsPersonIdDetails(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['details']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].persons[':personId'].details.$post(args, options))
}

export async function deleteSpacesIdPersonsPersonIdDetailsDesignation(
  args: InferRequestType<
    (typeof client.spaces)[':id']['persons'][':personId']['details'][':designation']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':id'].persons[':personId'].details[':designation'].$delete(args, options),
  )
}

export async function getSpacesIdPersonsPersonIdFolders(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].persons[':personId'].folders.$get(args, options))
}

export async function getSpacesIdPersonsPersonIdGroups(
  args: InferRequestType<(typeof client.spaces)[':id']['persons'][':personId']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].persons[':personId'].groups.$get(args, options))
}

export async function getSpacesIdPersonsPersonIdPortfolios(
  args: InferRequestType<
    (typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':id'].persons[':personId'].portfolios.$get(args, options),
  )
}

export async function postSpacesIdPersonsPersonIdPortfolios(
  args: InferRequestType<
    (typeof client.spaces)[':id']['persons'][':personId']['portfolios']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':id'].persons[':personId'].portfolios.$post(args, options),
  )
}

export async function patchSpacesIdPortfoliosPortfolioIdPersonsMemberId(
  args: InferRequestType<
    (typeof client.spaces)[':id']['portfolios'][':portfolioId']['persons'][':memberId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':id'].portfolios[':portfolioId'].persons[':memberId'].$patch(args, options),
  )
}

export async function getSpacesIdProfessionalVehicles(
  args: InferRequestType<(typeof client.spaces)[':id']['professional-vehicles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id']['professional-vehicles'].$get(args, options))
}

export async function postSpacesIdProfessionalVehicles(
  args: InferRequestType<(typeof client.spaces)[':id']['professional-vehicles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id']['professional-vehicles'].$post(args, options))
}

export async function getSpacesIdSettingsNf203Logs(
  args: InferRequestType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].settings.nf203.logs.$get(args, options))
}

export async function postSpacesIdSettingsNf203Logs(
  args: InferRequestType<(typeof client.spaces)[':id']['settings']['nf203']['logs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].settings.nf203.logs.$post(args, options))
}

export async function getSpacesIdStatus(
  args: InferRequestType<(typeof client.spaces)[':id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].status.$get(args, options))
}

export async function postSpacesIdStatus(
  args: InferRequestType<(typeof client.spaces)[':id']['status']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].status.$post(args, options))
}

export async function deleteSpacesIdStatusCode(
  args: InferRequestType<(typeof client.spaces)[':id']['status'][':code']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].status[':code'].$delete(args, options))
}

export async function getSpacesIdTaxContracts(
  args: InferRequestType<(typeof client.spaces)[':id']['tax-contracts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id']['tax-contracts'].$get(args, options))
}

export async function postSpacesIdTaxContracts(
  args: InferRequestType<(typeof client.spaces)[':id']['tax-contracts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id']['tax-contracts'].$post(args, options))
}

export async function getSpacesIdTriggers(
  args: InferRequestType<(typeof client.spaces)[':id']['triggers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].triggers.$get(args, options))
}

export async function postSpacesIdTriggersName(
  args: InferRequestType<(typeof client.spaces)[':id']['triggers'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].triggers[':name'].$post(args, options))
}

export async function deleteSpacesIdTriggersName(
  args: InferRequestType<(typeof client.spaces)[':id']['triggers'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':id'].triggers[':name'].$delete(args, options))
}

export async function deleteSpacesSpaceIdCommonFoldersId(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['common-folders'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['common-folders'][':id'].$delete(args, options),
  )
}

export async function patchSpacesSpaceIdCommonFoldersId(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['common-folders'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['common-folders'][':id'].$patch(args, options),
  )
}

export async function getSpacesSpaceIdCompanyEntitiesIdFollowUps(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['company-entities'][':id']['follow-ups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['company-entities'][':id']['follow-ups'].$get(args, options),
  )
}

export async function getSpacesSpaceIdCustomers(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['customers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].customers.$get(args, options))
}

export async function getSpacesSpaceIdCustomersAll(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['customers']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].customers.all.$get(args, options))
}

export async function getSpacesSpaceIdDocuments(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].documents.$get(args, options))
}

export async function patchSpacesSpaceIdDocumentsDocumentId(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':documentId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].documents[':documentId'].$patch(args, options),
  )
}

export async function getSpacesSpaceIdDocumentsDocumentIdExtend(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].documents[':documentId'].extend.$get(args, options),
  )
}

export async function postSpacesSpaceIdDocumentsDocumentIdExtend(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['extend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].documents[':documentId'].extend.$post(args, options),
  )
}

export async function getSpacesSpaceIdDocumentsDocumentIdFolders(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['folders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].documents[':documentId'].folders.$get(args, options),
  )
}

export async function postSpacesSpaceIdDocumentsDocumentIdMailing(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailing']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].documents[':documentId'].mailing.$post(args, options),
  )
}

export async function getSpacesSpaceIdDocumentsDocumentIdMailingprice(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['mailingprice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].documents[':documentId'].mailingprice.$get(args, options),
  )
}

export async function getSpacesSpaceIdDocumentsDocumentIdVersions(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].documents[':documentId'].versions.$get(args, options),
  )
}

export async function postSpacesSpaceIdDocumentsDocumentIdVersions(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].documents[':documentId'].versions.$post(args, options),
  )
}

export async function getSpacesSpaceIdDocumentsDocumentIdVersionsCurrent(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':documentId']['versions']['current']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].documents[':documentId'].versions.current.$get(args, options),
  )
}

export async function getSpacesSpaceIdDocumentsIdAccess(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['documents'][':id']['access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].documents[':id'].access.$get(args, options))
}

export async function getSpacesSpaceIdDocumentsIdAccounting(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':id']['accounting']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].documents[':id'].accounting.$get(args, options),
  )
}

export async function getSpacesSpaceIdDocumentsIdDownload(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['documents'][':id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].documents[':id'].download.$get(args, options),
  )
}

export async function getSpacesSpaceIdEmployees(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employees']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].employees.$get(args, options))
}

export async function getSpacesSpaceIdEmployeesAll(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employees']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].employees.all.$get(args, options))
}

export async function getSpacesSpaceIdEmployers(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].employers.$get(args, options))
}

export async function getSpacesSpaceIdEmployersAll(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['employers']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].employers.all.$get(args, options))
}

export async function getSpacesSpaceIdExtend(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['extend']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].extend.$get(args, options))
}

export async function postSpacesSpaceIdExtend(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['extend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].extend.$post(args, options))
}

export async function getSpacesSpaceIdFolders(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders.$get(args, options))
}

export async function getSpacesSpaceIdFoldersAll(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders.all.$get(args, options))
}

export async function deleteSpacesSpaceIdFoldersFolderIdBankStatementsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['bank-statements'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['bank-statements'][':documentId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchSpacesSpaceIdFoldersFolderIdBankStatementsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['bank-statements'][':documentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['bank-statements'][':documentId'].$patch(
      args,
      options,
    ),
  )
}

export async function deleteSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['contractual-documents'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['contractual-documents'][':documentId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['contractual-documents'][':documentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['contractual-documents'][':documentId'].$patch(
      args,
      options,
    ),
  )
}

export async function deleteSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['corporate-tax-declarations'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['corporate-tax-declarations'][
      ':documentId'
    ].$delete(args, options),
  )
}

export async function patchSpacesSpaceIdFoldersFolderIdCorporateTaxDeclarationsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['corporate-tax-declarations'][':documentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['corporate-tax-declarations'][
      ':documentId'
    ].$patch(args, options),
  )
}

export async function deleteSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-proofs'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['expense-proofs'][':documentId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchSpacesSpaceIdFoldersFolderIdExpenseProofsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-proofs'][':documentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['expense-proofs'][':documentId'].$patch(
      args,
      options,
    ),
  )
}

export async function deleteSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-reports'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['expense-reports'][':documentId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchSpacesSpaceIdFoldersFolderIdExpenseReportsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['expense-reports'][':documentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['expense-reports'][':documentId'].$patch(
      args,
      options,
    ),
  )
}

export async function deleteSpacesSpaceIdFoldersFolderIdInvoicesDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['invoices'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId'].invoices[':documentId'].$delete(args, options),
  )
}

export async function patchSpacesSpaceIdFoldersFolderIdInvoicesDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['invoices'][':documentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId'].invoices[':documentId'].$patch(args, options),
  )
}

export async function getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['nominative-social-declarations'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['nominative-social-declarations'][
      ':documentId'
    ].$get(args, options),
  )
}

export async function deleteSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['other-taxes'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['other-taxes'][':documentId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchSpacesSpaceIdFoldersFolderIdOtherTaxesDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['other-taxes'][':documentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['other-taxes'][':documentId'].$patch(
      args,
      options,
    ),
  )
}

export async function deleteSpacesSpaceIdFoldersFolderIdPayrollsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId'].payrolls[':documentId'].$delete(args, options),
  )
}

export async function patchSpacesSpaceIdFoldersFolderIdPayrollsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId'].payrolls[':documentId'].$patch(args, options),
  )
}

export async function postSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefresh(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['payrolls'][':documentId']['refresh']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId'].payrolls[':documentId'].refresh.$post(
      args,
      options,
    ),
  )
}

export async function deleteSpacesSpaceIdFoldersFolderIdPayslipsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['payslips'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId'].payslips[':documentId'].$delete(args, options),
  )
}

export async function patchSpacesSpaceIdFoldersFolderIdPayslipsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['payslips'][':documentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId'].payslips[':documentId'].$patch(args, options),
  )
}

export async function deleteSpacesSpaceIdFoldersFolderIdSocialContractsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-contracts'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['social-contracts'][':documentId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchSpacesSpaceIdFoldersFolderIdSocialContractsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-contracts'][':documentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['social-contracts'][':documentId'].$patch(
      args,
      options,
    ),
  )
}

export async function deleteSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-declarations'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['social-declarations'][':documentId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchSpacesSpaceIdFoldersFolderIdSocialDeclarationsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['social-declarations'][':documentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['social-declarations'][':documentId'].$patch(
      args,
      options,
    ),
  )
}

export async function deleteSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['vat-declarations'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['vat-declarations'][':documentId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchSpacesSpaceIdFoldersFolderIdVatDeclarationsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':folderId']['vat-declarations'][':documentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':folderId']['vat-declarations'][':documentId'].$patch(
      args,
      options,
    ),
  )
}

export async function getSpacesSpaceIdFoldersId(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].$get(args, options))
}

export async function patchSpacesSpaceIdFoldersId(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].$patch(args, options))
}

export async function deleteSpacesSpaceIdFoldersIdAccountingYear(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['accounting-year']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['accounting-year'].$delete(args, options),
  )
}

export async function patchSpacesSpaceIdFoldersIdAccountingYear(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['accounting-year']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['accounting-year'].$patch(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdAccountings(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['accountings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].accountings.$get(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdAccountingsJournal(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['accountings-journal']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['accountings-journal'].$get(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdBank(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].bank.$get(args, options))
}

export async function deleteSpacesSpaceIdFoldersIdBank(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].bank.$delete(args, options))
}

export async function patchSpacesSpaceIdFoldersIdBank(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['bank']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].bank.$patch(args, options))
}

export async function getSpacesSpaceIdFoldersIdBankStatements(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['bank-statements'].$get(args, options),
  )
}

export async function postSpacesSpaceIdFoldersIdBankStatements(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['bank-statements']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['bank-statements'].$post(args, options),
  )
}

export async function patchSpacesSpaceIdFoldersIdCollectiveDecision(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['collective-decision']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['collective-decision'].$patch(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdCommonFolders(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['common-folders'].$get(args, options),
  )
}

export async function postSpacesSpaceIdFoldersIdCommonFolders(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['common-folders'].$post(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdCommonFoldersAll(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['common-folders']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['common-folders'].all.$get(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdContractingPartner(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['contracting-partner'].$get(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdContractingPartnerSpace(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contracting-partner']['space']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['contracting-partner'].space.$get(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdContractualDocuments(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['contractual-documents'].$get(args, options),
  )
}

export async function postSpacesSpaceIdFoldersIdContractualDocuments(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-documents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['contractual-documents'].$post(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdContractualRelationship(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['contractual-relationship']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['contractual-relationship'].$get(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdCoporateTaxDeclarations(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['coporate-tax-declarations'].$get(args, options),
  )
}

export async function postSpacesSpaceIdFoldersIdCoporateTaxDeclarations(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['coporate-tax-declarations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['coporate-tax-declarations'].$post(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdCustomer(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].customer.$get(args, options))
}

export async function deleteSpacesSpaceIdFoldersIdCustomer(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].customer.$delete(args, options),
  )
}

export async function patchSpacesSpaceIdFoldersIdCustomer(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['customer']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].customer.$patch(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdDeliveriesJournal(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['deliveries-journal']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['deliveries-journal'].$get(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdDocuments(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].documents.$get(args, options))
}

export async function postSpacesSpaceIdFoldersIdDocuments(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['documents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].documents.$post(args, options),
  )
}

export async function patchSpacesSpaceIdFoldersIdDocumentsDocumentIdDetach(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['documents'][':documentId']['detach']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].documents[':documentId'].detach.$patch(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdEmployee(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].employee.$get(args, options))
}

export async function deleteSpacesSpaceIdFoldersIdEmployee(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].employee.$delete(args, options),
  )
}

export async function patchSpacesSpaceIdFoldersIdEmployee(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['employee']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].employee.$patch(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdExpenseProofs(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['expense-proofs'].$get(args, options),
  )
}

export async function postSpacesSpaceIdFoldersIdExpenseProofs(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-proofs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['expense-proofs'].$post(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdExpenseReports(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['expense-reports'].$get(args, options),
  )
}

export async function postSpacesSpaceIdFoldersIdExpenseReports(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['expense-reports'].$post(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofs(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['expense-reports'][':expenseReportId']['expense-proofs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['expense-reports'][':expenseReportId'][
      'expense-proofs'
    ].$get(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdInsurance(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].insurance.$get(args, options))
}

export async function deleteSpacesSpaceIdFoldersIdInsurance(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].insurance.$delete(args, options),
  )
}

export async function patchSpacesSpaceIdFoldersIdInsurance(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['insurance']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].insurance.$patch(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdInvoices(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].invoices.$get(args, options))
}

export async function postSpacesSpaceIdFoldersIdInvoices(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['invoices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].invoices.$post(args, options))
}

export async function getSpacesSpaceIdFoldersIdLegalEntity(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['legal-entity']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['legal-entity'].$get(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdLoan(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].loan.$get(args, options))
}

export async function deleteSpacesSpaceIdFoldersIdLoan(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].loan.$delete(args, options))
}

export async function patchSpacesSpaceIdFoldersIdLoan(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['loan']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].loan.$patch(args, options))
}

export async function getSpacesSpaceIdFoldersIdMessages(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].messages.$get(args, options))
}

export async function postSpacesSpaceIdFoldersIdMessages(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].messages.$post(args, options))
}

export async function getSpacesSpaceIdFoldersIdMessagesMessageId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].messages[':messageId'].$get(args, options),
  )
}

export async function patchSpacesSpaceIdFoldersIdMessagesMessageId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['messages'][':messageId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].messages[':messageId'].$patch(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdNominativeSocialDeclarations(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['nominative-social-declarations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['nominative-social-declarations'].$get(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdOtherTaxes(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['other-taxes'].$get(args, options),
  )
}

export async function postSpacesSpaceIdFoldersIdOtherTaxes(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['other-taxes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['other-taxes'].$post(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdPasswords(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].passwords.$get(args, options))
}

export async function postSpacesSpaceIdFoldersIdPasswords(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['passwords']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].passwords.$post(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdPasswordsPasswordId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].passwords[':passwordId'].$get(args, options),
  )
}

export async function deleteSpacesSpaceIdFoldersIdPasswordsPasswordId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].passwords[':passwordId'].$delete(args, options),
  )
}

export async function patchSpacesSpaceIdFoldersIdPasswordsPasswordId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['passwords'][':passwordId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].passwords[':passwordId'].$patch(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdPayrolls(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].payrolls.$get(args, options))
}

export async function postSpacesSpaceIdFoldersIdPayrolls(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payrolls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].payrolls.$post(args, options))
}

export async function postSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclaration(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls'][':payrollId']['nominative-social-declaration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].payrolls[':payrollId'][
      'nominative-social-declaration'
    ].$post(args, options),
  )
}

export async function deleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclaration(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['payrolls'][':payrollId']['nominative-social-declaration']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].payrolls[':payrollId'][
      'nominative-social-declaration'
    ].$delete(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdPayslips(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].payslips.$get(args, options))
}

export async function postSpacesSpaceIdFoldersIdPayslips(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['payslips']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].payslips.$post(args, options))
}

export async function deleteSpacesSpaceIdFoldersIdPortfolioPortfolioId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['portfolio'][':portfolioId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].portfolio[':portfolioId'].$delete(args, options),
  )
}

export async function deleteSpacesSpaceIdFoldersIdProfessionalVehicle(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['professional-vehicle']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['professional-vehicle'].$delete(args, options),
  )
}

export async function patchSpacesSpaceIdFoldersIdProfessionalVehicle(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['professional-vehicle']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['professional-vehicle'].$patch(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdProvider(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].provider.$get(args, options))
}

export async function deleteSpacesSpaceIdFoldersIdProvider(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].provider.$delete(args, options),
  )
}

export async function patchSpacesSpaceIdFoldersIdProvider(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['provider']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'].provider.$patch(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdRequiredDocuments(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['required-documents'].$get(args, options),
  )
}

export async function postSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentid(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['required-documents'][':requireddocumentid'].$post(
      args,
      options,
    ),
  )
}

export async function patchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentid(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['required-documents'][':requireddocumentid'].$patch(
      args,
      options,
    ),
  )
}

export async function deleteSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['required-documents'][':requireddocumentid']['documents'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['required-documents'][':requireddocumentid'].documents[
      ':documentId'
    ].$delete(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdSections(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['folders'][':id']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].folders[':id'].sections.$get(args, options))
}

export async function getSpacesSpaceIdFoldersIdSocialContracts(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['social-contracts'].$get(args, options),
  )
}

export async function postSpacesSpaceIdFoldersIdSocialContracts(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-contracts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['social-contracts'].$post(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdSocialDeclarations(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['social-declarations'].$get(args, options),
  )
}

export async function postSpacesSpaceIdFoldersIdSocialDeclarations(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-declarations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['social-declarations'].$post(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdSocialRegimes(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['social-regimes'].$get(args, options),
  )
}

export async function deleteSpacesSpaceIdFoldersIdSocialRegimes(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['social-regimes'].$delete(args, options),
  )
}

export async function patchSpacesSpaceIdFoldersIdSocialRegimes(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['social-regimes']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['social-regimes'].$patch(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdSumInvoices(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['sum-invoices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['sum-invoices'].$get(args, options),
  )
}

export async function deleteSpacesSpaceIdFoldersIdTaxContract(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['tax-contract']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['tax-contract'].$delete(args, options),
  )
}

export async function patchSpacesSpaceIdFoldersIdTaxContract(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['tax-contract']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['tax-contract'].$patch(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdVatDeclarations(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['vat-declarations'].$get(args, options),
  )
}

export async function postSpacesSpaceIdFoldersIdVatDeclarations(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id']['vat-declarations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id']['vat-declarations'].$post(args, options),
  )
}

export async function getSpacesSpaceIdFoldersIdDocumentClass(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'][':documentClass'].$get(args, options),
  )
}

export async function postSpacesSpaceIdFoldersIdDocumentClass(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'][':documentClass'].$post(args, options),
  )
}

export async function deleteSpacesSpaceIdFoldersIdDocumentClass(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['folders'][':id'][':documentClass']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].folders[':id'][':documentClass'].$delete(args, options),
  )
}

export async function getSpacesSpaceIdLegalEntitiesIdBanks(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id'].banks.$get(args, options),
  )
}

export async function postSpacesSpaceIdLegalEntitiesIdBanks(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id'].banks.$post(args, options),
  )
}

export async function getSpacesSpaceIdLegalEntitiesIdBanksAll(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['banks']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id'].banks.all.$get(args, options),
  )
}

export async function getSpacesSpaceIdLegalEntitiesIdContracts(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contracts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id'].contracts.$get(args, options),
  )
}

export async function getSpacesSpaceIdLegalEntitiesIdContractualRelationships(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id']['contractual-relationships'].$get(
      args,
      options,
    ),
  )
}

export async function getSpacesSpaceIdLegalEntitiesIdContractualRelationshipsAll(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['contractual-relationships']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id']['contractual-relationships'].all.$get(
      args,
      options,
    ),
  )
}

export async function getSpacesSpaceIdLegalEntitiesIdCustomers(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id'].customers.$get(args, options),
  )
}

export async function postSpacesSpaceIdLegalEntitiesIdCustomers(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id'].customers.$post(args, options),
  )
}

export async function getSpacesSpaceIdLegalEntitiesIdCustomersAll(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['customers']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id'].customers.all.$get(args, options),
  )
}

export async function getSpacesSpaceIdLegalEntitiesIdInsurances(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id'].insurances.$get(args, options),
  )
}

export async function postSpacesSpaceIdLegalEntitiesIdInsurances(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id'].insurances.$post(args, options),
  )
}

export async function getSpacesSpaceIdLegalEntitiesIdInsurancesAll(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['insurances']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id'].insurances.all.$get(args, options),
  )
}

export async function getSpacesSpaceIdLegalEntitiesIdLoans(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id'].loans.$get(args, options),
  )
}

export async function postSpacesSpaceIdLegalEntitiesIdLoans(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id'].loans.$post(args, options),
  )
}

export async function getSpacesSpaceIdLegalEntitiesIdLoansAll(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['loans']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id'].loans.all.$get(args, options),
  )
}

export async function getSpacesSpaceIdLegalEntitiesIdProviders(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id'].providers.$get(args, options),
  )
}

export async function postSpacesSpaceIdLegalEntitiesIdProviders(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id'].providers.$post(args, options),
  )
}

export async function getSpacesSpaceIdLegalEntitiesIdProvidersAll(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['providers']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id'].providers.all.$get(args, options),
  )
}

export async function getSpacesSpaceIdLegalEntitiesIdSocialRegimes(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id']['social-regimes'].$get(args, options),
  )
}

export async function postSpacesSpaceIdLegalEntitiesIdSocialRegimes(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id']['social-regimes'].$post(args, options),
  )
}

export async function getSpacesSpaceIdLegalEntitiesIdSocialRegimesAll(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['legal-entities'][':id']['social-regimes']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId']['legal-entities'][':id']['social-regimes'].all.$get(args, options),
  )
}

export async function getSpacesSpaceIdLoans(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['loans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].loans.$get(args, options))
}

export async function getSpacesSpaceIdLoansAll(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['loans']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].loans.all.$get(args, options))
}

export async function postSpacesSpaceIdPersonsIdCallForDocument(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['call-for-document']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].persons[':id']['call-for-document'].$post(args, options),
  )
}

export async function patchSpacesSpaceIdPersonsIdCallForDocument(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['call-for-document']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].persons[':id']['call-for-document'].$patch(args, options),
  )
}

export async function getSpacesSpaceIdPersonsIdEmployees(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].persons[':id'].employees.$get(args, options))
}

export async function postSpacesSpaceIdPersonsIdEmployees(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].persons[':id'].employees.$post(args, options),
  )
}

export async function getSpacesSpaceIdPersonsIdEmployeesAll(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['employees']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].persons[':id'].employees.all.$get(args, options),
  )
}

export async function getSpacesSpaceIdPersonsIdExchange(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['persons'][':id']['exchange']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].persons[':id'].exchange.$get(args, options))
}

export async function getSpacesSpaceIdPersonsIdFollowUps(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['follow-ups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].persons[':id']['follow-ups'].$get(args, options),
  )
}

export async function postSpacesSpaceIdPersonsIdGuestInSpace(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].persons[':id']['guest-in-space'].$post(args, options),
  )
}

export async function deleteSpacesSpaceIdPersonsIdGuestInSpace(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].persons[':id']['guest-in-space'].$delete(args, options),
  )
}

export async function patchSpacesSpaceIdPersonsIdGuestInSpace(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['guest-in-space']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].persons[':id']['guest-in-space'].$patch(args, options),
  )
}

export async function getSpacesSpaceIdPersonsIdInvitation(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].persons[':id'].invitation.$get(args, options),
  )
}

export async function postSpacesSpaceIdPersonsIdInvitation(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].persons[':id'].invitation.$post(args, options),
  )
}

export async function deleteSpacesSpaceIdPersonsIdInvitation(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].persons[':id'].invitation.$delete(args, options),
  )
}

export async function patchSpacesSpaceIdPersonsIdInvitation(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['invitation']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].persons[':id'].invitation.$patch(args, options),
  )
}

export async function postSpacesSpaceIdPersonsIdInvitationInvitationIdSend(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':id']['invitation'][':invitationId']['send']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].persons[':id'].invitation[':invitationId'].send.$post(args, options),
  )
}

export async function getSpacesSpaceIdPersonsMemberIdFoldersId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].persons[':memberId'].folders[':id'].$get(args, options),
  )
}

export async function patchSpacesSpaceIdPersonsMemberIdFoldersId(
  args: InferRequestType<
    (typeof client.spaces)[':spaceId']['persons'][':memberId']['folders'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.spaces[':spaceId'].persons[':memberId'].folders[':id'].$patch(args, options),
  )
}

export async function getSpacesSpaceIdProviders(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].providers.$get(args, options))
}

export async function getSpacesSpaceIdProvidersAll(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['providers']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].providers.all.$get(args, options))
}

export async function getSpacesSpaceIdSearch(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId'].search.$get(args, options))
}

export async function getSpacesSpaceIdSocialRegimes(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId']['social-regimes'].$get(args, options))
}

export async function getSpacesSpaceIdSocialRegimesAll(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['social-regimes']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId']['social-regimes'].all.$get(args, options))
}

export async function getSpacesSpaceIdSpacesInvoicings(
  args: InferRequestType<(typeof client.spaces)[':spaceId']['spaces-invoicings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spaces[':spaceId']['spaces-invoicings'].$get(args, options))
}
