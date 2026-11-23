import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBusinessNames(
  args: InferRequestType<(typeof client)['business-names']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['business-names'].$get(args, options))
}

export async function getClassificationsAddressTypes(
  args: InferRequestType<(typeof client.classifications)['address-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classifications['address-types'].$get(args, options))
}

export async function getClassificationsBusinessNameLifecycleStates(
  args: InferRequestType<(typeof client.classifications)['business-name-lifecycle-states']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classifications['business-name-lifecycle-states'].$get(args, options),
  )
}

export async function getClassificationsElectronicAddressTypes(
  args: InferRequestType<(typeof client.classifications)['electronic-address-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classifications['electronic-address-types'].$get(args, options))
}

export async function getClassificationsGenders(
  args: InferRequestType<typeof client.classifications.genders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classifications.genders.$get(args, options))
}

export async function getClassificationsLegalEntityTypes(
  args: InferRequestType<(typeof client.classifications)['legal-entity-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classifications['legal-entity-types'].$get(args, options))
}

export async function getClassificationsLicenseLifecycleStates(
  args: InferRequestType<(typeof client.classifications)['license-lifecycle-states']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classifications['license-lifecycle-states'].$get(args, options))
}

export async function getClassificationsLicenseTypes(
  args: InferRequestType<(typeof client.classifications)['license-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classifications['license-types'].$get(args, options))
}

export async function getClassificationsNameDirections(
  args: InferRequestType<(typeof client.classifications)['name-directions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classifications['name-directions'].$get(args, options))
}

export async function getClassificationsNamePrefixes(
  args: InferRequestType<(typeof client.classifications)['name-prefixes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classifications['name-prefixes'].$get(args, options))
}

export async function getClassificationsNameTypes(
  args: InferRequestType<(typeof client.classifications)['name-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classifications['name-types'].$get(args, options))
}

export async function getClassificationsRegisteredIdentifierTypes(
  args: InferRequestType<(typeof client.classifications)['registered-identifier-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classifications['registered-identifier-types'].$get(args, options),
  )
}

export async function getClassificationsRoles(
  args: InferRequestType<typeof client.classifications.roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classifications.roles.$get(args, options))
}

export async function getIndividuals(
  args: InferRequestType<typeof client.individuals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.individuals.$get(args, options))
}

export async function postIndividuals(
  args: InferRequestType<typeof client.individuals.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.individuals.$post(args, options))
}

export async function getIndividualsPartyId(
  args: InferRequestType<(typeof client.individuals)[':partyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.individuals[':partyId'].$get(args, options))
}

export async function putIndividualsPartyId(
  args: InferRequestType<(typeof client.individuals)[':partyId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.individuals[':partyId'].$put(args, options))
}

export async function deleteIndividualsPartyId(
  args: InferRequestType<(typeof client.individuals)[':partyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.individuals[':partyId'].$delete(args, options))
}

export async function getIndividualsPartyIdAddresses(
  args: InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.individuals[':partyId'].addresses.$get(args, options))
}

export async function postIndividualsPartyIdAddresses(
  args: InferRequestType<(typeof client.individuals)[':partyId']['addresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.individuals[':partyId'].addresses.$post(args, options))
}

export async function getIndividualsPartyIdAddressesAddressId(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['addresses'][':addressId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.individuals[':partyId'].addresses[':addressId'].$get(args, options),
  )
}

export async function putIndividualsPartyIdAddressesAddressId(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['addresses'][':addressId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.individuals[':partyId'].addresses[':addressId'].$put(args, options),
  )
}

export async function deleteIndividualsPartyIdAddressesAddressId(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['addresses'][':addressId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.individuals[':partyId'].addresses[':addressId'].$delete(args, options),
  )
}

export async function getIndividualsPartyIdBusinessNames(
  args: InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.individuals[':partyId']['business-names'].$get(args, options))
}

export async function postIndividualsPartyIdBusinessNames(
  args: InferRequestType<(typeof client.individuals)[':partyId']['business-names']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.individuals[':partyId']['business-names'].$post(args, options))
}

export async function getIndividualsPartyIdBusinessNamesProductId(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['business-names'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.individuals[':partyId']['business-names'][':productId'].$get(args, options),
  )
}

export async function putIndividualsPartyIdBusinessNamesProductId(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['business-names'][':productId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.individuals[':partyId']['business-names'][':productId'].$put(args, options),
  )
}

export async function deleteIndividualsPartyIdBusinessNamesProductId(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['business-names'][':productId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.individuals[':partyId']['business-names'][':productId'].$delete(args, options),
  )
}

export async function getIndividualsPartyIdElectronicAddresses(
  args: InferRequestType<(typeof client.individuals)[':partyId']['electronic-addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.individuals[':partyId']['electronic-addresses'].$get(args, options),
  )
}

export async function postIndividualsPartyIdElectronicAddresses(
  args: InferRequestType<(typeof client.individuals)[':partyId']['electronic-addresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.individuals[':partyId']['electronic-addresses'].$post(args, options),
  )
}

export async function getIndividualsPartyIdElectronicAddressesAddressId(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.individuals[':partyId']['electronic-addresses'][':addressId'].$get(args, options),
  )
}

export async function putIndividualsPartyIdElectronicAddressesAddressId(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.individuals[':partyId']['electronic-addresses'][':addressId'].$put(args, options),
  )
}

export async function deleteIndividualsPartyIdElectronicAddressesAddressId(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['electronic-addresses'][':addressId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.individuals[':partyId']['electronic-addresses'][':addressId'].$delete(args, options),
  )
}

export async function getIndividualsPartyIdLicenses(
  args: InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.individuals[':partyId'].licenses.$get(args, options))
}

export async function postIndividualsPartyIdLicenses(
  args: InferRequestType<(typeof client.individuals)[':partyId']['licenses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.individuals[':partyId'].licenses.$post(args, options))
}

export async function getIndividualsPartyIdLicensesProductId(
  args: InferRequestType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.individuals[':partyId'].licenses[':productId'].$get(args, options),
  )
}

export async function putIndividualsPartyIdLicensesProductId(
  args: InferRequestType<(typeof client.individuals)[':partyId']['licenses'][':productId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.individuals[':partyId'].licenses[':productId'].$put(args, options),
  )
}

export async function deleteIndividualsPartyIdLicensesProductId(
  args: InferRequestType<
    (typeof client.individuals)[':partyId']['licenses'][':productId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.individuals[':partyId'].licenses[':productId'].$delete(args, options),
  )
}

export async function getIndividualsPartyIdRoles(
  args: InferRequestType<(typeof client.individuals)[':partyId']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.individuals[':partyId'].roles.$get(args, options))
}

export async function postIndividualsPartyIdRoles(
  args: InferRequestType<(typeof client.individuals)[':partyId']['roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.individuals[':partyId'].roles.$post(args, options))
}

export async function getIndividualsPartyIdRolesRoleId(
  args: InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.individuals[':partyId'].roles[':roleId'].$get(args, options))
}

export async function putIndividualsPartyIdRolesRoleId(
  args: InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.individuals[':partyId'].roles[':roleId'].$put(args, options))
}

export async function deleteIndividualsPartyIdRolesRoleId(
  args: InferRequestType<(typeof client.individuals)[':partyId']['roles'][':roleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.individuals[':partyId'].roles[':roleId'].$delete(args, options))
}

export async function getLicenses(
  args: InferRequestType<typeof client.licenses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licenses.$get(args, options))
}

export async function getOrganisations(
  args: InferRequestType<typeof client.organisations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations.$get(args, options))
}

export async function postOrganisations(
  args: InferRequestType<typeof client.organisations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations.$post(args, options))
}

export async function getOrganisationsPartyId(
  args: InferRequestType<(typeof client.organisations)[':partyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':partyId'].$get(args, options))
}

export async function putOrganisationsPartyId(
  args: InferRequestType<(typeof client.organisations)[':partyId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':partyId'].$put(args, options))
}

export async function deleteOrganisationsPartyId(
  args: InferRequestType<(typeof client.organisations)[':partyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':partyId'].$delete(args, options))
}

export async function getOrganisationsPartyIdAddresses(
  args: InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':partyId'].addresses.$get(args, options))
}

export async function postOrganisationsPartyIdAddresses(
  args: InferRequestType<(typeof client.organisations)[':partyId']['addresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':partyId'].addresses.$post(args, options))
}

export async function getOrganisationsPartyIdAddressesAddressId(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['addresses'][':addressId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':partyId'].addresses[':addressId'].$get(args, options),
  )
}

export async function putOrganisationsPartyIdAddressesAddressId(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['addresses'][':addressId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':partyId'].addresses[':addressId'].$put(args, options),
  )
}

export async function deleteOrganisationsPartyIdAddressesAddressId(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['addresses'][':addressId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':partyId'].addresses[':addressId'].$delete(args, options),
  )
}

export async function getOrganisationsPartyIdBusinessNames(
  args: InferRequestType<(typeof client.organisations)[':partyId']['business-names']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':partyId']['business-names'].$get(args, options))
}

export async function postOrganisationsPartyIdBusinessNames(
  args: InferRequestType<(typeof client.organisations)[':partyId']['business-names']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':partyId']['business-names'].$post(args, options),
  )
}

export async function getOrganisationsPartyIdBusinessNamesProductId(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['business-names'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':partyId']['business-names'][':productId'].$get(args, options),
  )
}

export async function putOrganisationsPartyIdBusinessNamesProductId(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['business-names'][':productId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':partyId']['business-names'][':productId'].$put(args, options),
  )
}

export async function deleteOrganisationsPartyIdBusinessNamesProductId(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['business-names'][':productId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':partyId']['business-names'][':productId'].$delete(args, options),
  )
}

export async function getOrganisationsPartyIdElectronicAddresses(
  args: InferRequestType<(typeof client.organisations)[':partyId']['electronic-addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':partyId']['electronic-addresses'].$get(args, options),
  )
}

export async function postOrganisationsPartyIdElectronicAddresses(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['electronic-addresses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':partyId']['electronic-addresses'].$post(args, options),
  )
}

export async function getOrganisationsPartyIdElectronicAddressesAddressId(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':partyId']['electronic-addresses'][':addressId'].$get(args, options),
  )
}

export async function putOrganisationsPartyIdElectronicAddressesAddressId(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':partyId']['electronic-addresses'][':addressId'].$put(args, options),
  )
}

export async function deleteOrganisationsPartyIdElectronicAddressesAddressId(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['electronic-addresses'][':addressId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':partyId']['electronic-addresses'][':addressId'].$delete(args, options),
  )
}

export async function getOrganisationsPartyIdLicenses(
  args: InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':partyId'].licenses.$get(args, options))
}

export async function postOrganisationsPartyIdLicenses(
  args: InferRequestType<(typeof client.organisations)[':partyId']['licenses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':partyId'].licenses.$post(args, options))
}

export async function getOrganisationsPartyIdLicensesProductId(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['licenses'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':partyId'].licenses[':productId'].$get(args, options),
  )
}

export async function putOrganisationsPartyIdLicensesProductId(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['licenses'][':productId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':partyId'].licenses[':productId'].$put(args, options),
  )
}

export async function deleteOrganisationsPartyIdLicensesProductId(
  args: InferRequestType<
    (typeof client.organisations)[':partyId']['licenses'][':productId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':partyId'].licenses[':productId'].$delete(args, options),
  )
}

export async function getOrganisationsPartyIdRoles(
  args: InferRequestType<(typeof client.organisations)[':partyId']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':partyId'].roles.$get(args, options))
}

export async function postOrganisationsPartyIdRoles(
  args: InferRequestType<(typeof client.organisations)[':partyId']['roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':partyId'].roles.$post(args, options))
}

export async function getOrganisationsPartyIdRolesRoleId(
  args: InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':partyId'].roles[':roleId'].$get(args, options))
}

export async function putOrganisationsPartyIdRolesRoleId(
  args: InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organisations[':partyId'].roles[':roleId'].$put(args, options))
}

export async function deleteOrganisationsPartyIdRolesRoleId(
  args: InferRequestType<(typeof client.organisations)[':partyId']['roles'][':roleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organisations[':partyId'].roles[':roleId'].$delete(args, options),
  )
}
