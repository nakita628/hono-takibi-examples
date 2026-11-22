import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiStorageProfileSystemProfiles(
  args: InferRequestType<(typeof client.api.storage)['profile-system']['profiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.storage['profile-system'].profiles.$post(args, options))
}

export async function putApiStorageProfileSystemProfilesSchema(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles']['schema']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles.schema.$put(args, options),
  )
}

export async function getApiStorageProfileSystemProfilesProfileId(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId'].$get(args, options),
  )
}

export async function deleteApiStorageProfileSystemProfilesProfileId(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId'].$delete(args, options),
  )
}

export async function patchApiStorageProfileSystemProfilesProfileId(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId'].$patch(args, options),
  )
}

export async function getApiStorageProfileSystemProfilesProfileIdAddresses(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId'].addresses.$get(args, options),
  )
}

export async function postApiStorageProfileSystemProfilesProfileIdAddresses(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId'].addresses.$post(args, options),
  )
}

export async function getApiStorageProfileSystemProfilesProfileIdAddressesUnmask(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses']['unmask']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId'].addresses.unmask.$get(
      args,
      options,
    ),
  )
}

export async function getApiStorageProfileSystemProfilesProfileIdAddressesAddressId(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId'].addresses[':addressId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiStorageProfileSystemProfilesProfileIdAddressesAddressId(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId'].addresses[':addressId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiStorageProfileSystemProfilesProfileIdAddressesAddressId(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId'].addresses[':addressId'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdUnmask(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['unmask']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId'].addresses[':addressId'].unmask.$get(
      args,
      options,
    ),
  )
}

export async function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionId(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId'].addresses[':addressId'].versions[
      ':addressVersionId'
    ].$get(args, options),
  )
}

export async function getApiStorageProfileSystemProfilesProfileIdAddressesAddressIdVersionsAddressVersionIdUnmask(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['addresses'][':addressId']['versions'][':addressVersionId']['unmask']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId'].addresses[':addressId'].versions[
      ':addressVersionId'
    ].unmask.$get(args, options),
  )
}

export async function getApiStorageProfileSystemProfilesProfileIdPurchaseInfo(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].$get(
      args,
      options,
    ),
  )
}

export async function postApiStorageProfileSystemProfilesProfileIdPurchaseInfo(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].$post(
      args,
      options,
    ),
  )
}

export async function deleteApiStorageProfileSystemProfilesProfileIdPurchaseInfo(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiStorageProfileSystemProfilesProfileIdPurchaseInfo(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiStorageProfileSystemProfilesProfileIdPurchaseInfoUnmask(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['purchase-info']['unmask']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId']['purchase-info'].unmask.$get(
      args,
      options,
    ),
  )
}

export async function getApiStorageProfileSystemProfilesProfileIdUnmask(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['unmask']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId'].unmask.$get(args, options),
  )
}

export async function getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionId(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId'].versions[':profileVersionId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiStorageProfileSystemProfilesProfileIdVersionsProfileVersionIdUnmask(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['profiles'][':profileId']['versions'][':profileVersionId']['unmask']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].profiles[':profileId'].versions[
      ':profileVersionId'
    ].unmask.$get(args, options),
  )
}

export async function postApiStorageProfileSystemProspects(
  args: InferRequestType<(typeof client.api.storage)['profile-system']['prospects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.storage['profile-system'].prospects.$post(args, options))
}

export async function getApiStorageProfileSystemProspectsProspectId(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].prospects[':prospectId'].$get(args, options),
  )
}

export async function deleteApiStorageProfileSystemProspectsProspectId(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].prospects[':prospectId'].$delete(args, options),
  )
}

export async function patchApiStorageProfileSystemProspectsProspectId(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].prospects[':prospectId'].$patch(args, options),
  )
}

export async function getApiStorageProfileSystemProspectsProspectIdUnmask(
  args: InferRequestType<
    (typeof client.api.storage)['profile-system']['prospects'][':prospectId']['unmask']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.storage['profile-system'].prospects[':prospectId'].unmask.$get(args, options),
  )
}
