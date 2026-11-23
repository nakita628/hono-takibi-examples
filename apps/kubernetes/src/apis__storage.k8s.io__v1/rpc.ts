import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisStorageK8sIoV1Index(options?: ClientRequestOptions) {
  return await parseResponse(client.apis['storage.k8s.io'].v1.index.$get(undefined, options))
}

export async function getApisStorageK8sIoV1Csidrivers(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['storage.k8s.io'].v1.csidrivers.$get(args, options))
}

export async function postApisStorageK8sIoV1Csidrivers(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['storage.k8s.io'].v1.csidrivers.$post(args, options))
}

export async function deleteApisStorageK8sIoV1Csidrivers(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['storage.k8s.io'].v1.csidrivers.$delete(args, options))
}

export async function getApisStorageK8sIoV1CsidriversName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.csidrivers[':name'].$get(args, options),
  )
}

export async function putApisStorageK8sIoV1CsidriversName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.csidrivers[':name'].$put(args, options),
  )
}

export async function deleteApisStorageK8sIoV1CsidriversName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.csidrivers[':name'].$delete(args, options),
  )
}

export async function patchApisStorageK8sIoV1CsidriversName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.csidrivers[':name'].$patch(args, options),
  )
}

export async function getApisStorageK8sIoV1Csinodes(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['storage.k8s.io'].v1.csinodes.$get(args, options))
}

export async function postApisStorageK8sIoV1Csinodes(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['storage.k8s.io'].v1.csinodes.$post(args, options))
}

export async function deleteApisStorageK8sIoV1Csinodes(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['storage.k8s.io'].v1.csinodes.$delete(args, options))
}

export async function getApisStorageK8sIoV1CsinodesName(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['storage.k8s.io'].v1.csinodes[':name'].$get(args, options))
}

export async function putApisStorageK8sIoV1CsinodesName(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['storage.k8s.io'].v1.csinodes[':name'].$put(args, options))
}

export async function deleteApisStorageK8sIoV1CsinodesName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.csinodes[':name'].$delete(args, options),
  )
}

export async function patchApisStorageK8sIoV1CsinodesName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.csinodes[':name'].$patch(args, options),
  )
}

export async function getApisStorageK8sIoV1CsinodesNameStatus(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.csinodes[':name'].status.$get(args, options),
  )
}

export async function putApisStorageK8sIoV1CsinodesNameStatus(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.csinodes[':name'].status.$put(args, options),
  )
}

export async function patchApisStorageK8sIoV1CsinodesNameStatus(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.csinodes[':name'].status.$patch(args, options),
  )
}

export async function getApisStorageK8sIoV1Csistoragecapacities(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csistoragecapacities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.csistoragecapacities.$get(args, options),
  )
}

export async function getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacities(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities.$get(
      args,
      options,
    ),
  )
}

export async function postApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacities(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities.$post(
      args,
      options,
    ),
  )
}

export async function deleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacities(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities.$delete(
      args,
      options,
    ),
  )
}

export async function getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities[':name'].$patch(
      args,
      options,
    ),
  )
}

export async function getApisStorageK8sIoV1Storageclasses(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['storage.k8s.io'].v1.storageclasses.$get(args, options))
}

export async function postApisStorageK8sIoV1Storageclasses(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['storage.k8s.io'].v1.storageclasses.$post(args, options))
}

export async function deleteApisStorageK8sIoV1Storageclasses(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['storage.k8s.io'].v1.storageclasses.$delete(args, options))
}

export async function getApisStorageK8sIoV1StorageclassesName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.storageclasses[':name'].$get(args, options),
  )
}

export async function putApisStorageK8sIoV1StorageclassesName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.storageclasses[':name'].$put(args, options),
  )
}

export async function deleteApisStorageK8sIoV1StorageclassesName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.storageclasses[':name'].$delete(args, options),
  )
}

export async function patchApisStorageK8sIoV1StorageclassesName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.storageclasses[':name'].$patch(args, options),
  )
}

export async function getApisStorageK8sIoV1Volumeattachments(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['storage.k8s.io'].v1.volumeattachments.$get(args, options))
}

export async function postApisStorageK8sIoV1Volumeattachments(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.volumeattachments.$post(args, options),
  )
}

export async function deleteApisStorageK8sIoV1Volumeattachments(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.volumeattachments.$delete(args, options),
  )
}

export async function getApisStorageK8sIoV1VolumeattachmentsName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.volumeattachments[':name'].$get(args, options),
  )
}

export async function putApisStorageK8sIoV1VolumeattachmentsName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.volumeattachments[':name'].$put(args, options),
  )
}

export async function deleteApisStorageK8sIoV1VolumeattachmentsName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.volumeattachments[':name'].$delete(args, options),
  )
}

export async function patchApisStorageK8sIoV1VolumeattachmentsName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.volumeattachments[':name'].$patch(args, options),
  )
}

export async function getApisStorageK8sIoV1VolumeattachmentsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.volumeattachments[':name'].status.$get(args, options),
  )
}

export async function putApisStorageK8sIoV1VolumeattachmentsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.volumeattachments[':name'].status.$put(args, options),
  )
}

export async function patchApisStorageK8sIoV1VolumeattachmentsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.volumeattachments[':name'].status.$patch(args, options),
  )
}

export async function getApisStorageK8sIoV1Volumeattributesclasses(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.volumeattributesclasses.$get(args, options),
  )
}

export async function postApisStorageK8sIoV1Volumeattributesclasses(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.volumeattributesclasses.$post(args, options),
  )
}

export async function deleteApisStorageK8sIoV1Volumeattributesclasses(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.volumeattributesclasses.$delete(args, options),
  )
}

export async function getApisStorageK8sIoV1VolumeattributesclassesName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.volumeattributesclasses[':name'].$get(args, options),
  )
}

export async function putApisStorageK8sIoV1VolumeattributesclassesName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.volumeattributesclasses[':name'].$put(args, options),
  )
}

export async function deleteApisStorageK8sIoV1VolumeattributesclassesName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.volumeattributesclasses[':name'].$delete(args, options),
  )
}

export async function patchApisStorageK8sIoV1VolumeattributesclassesName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.volumeattributesclasses[':name'].$patch(args, options),
  )
}

export async function getApisStorageK8sIoV1WatchCsidrivers(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['storage.k8s.io'].v1.watch.csidrivers.$get(args, options))
}

export async function getApisStorageK8sIoV1WatchCsidriversName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.watch.csidrivers[':name'].$get(args, options),
  )
}

export async function getApisStorageK8sIoV1WatchCsinodes(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['storage.k8s.io'].v1.watch.csinodes.$get(args, options))
}

export async function getApisStorageK8sIoV1WatchCsinodesName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.watch.csinodes[':name'].$get(args, options),
  )
}

export async function getApisStorageK8sIoV1WatchCsistoragecapacities(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csistoragecapacities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.watch.csistoragecapacities.$get(args, options),
  )
}

export async function getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacities(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.watch.namespaces[':namespace'].csistoragecapacities.$get(
      args,
      options,
    ),
  )
}

export async function getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.watch.namespaces[':namespace'].csistoragecapacities[
      ':name'
    ].$get(args, options),
  )
}

export async function getApisStorageK8sIoV1WatchStorageclasses(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.watch.storageclasses.$get(args, options),
  )
}

export async function getApisStorageK8sIoV1WatchStorageclassesName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.watch.storageclasses[':name'].$get(args, options),
  )
}

export async function getApisStorageK8sIoV1WatchVolumeattachments(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.watch.volumeattachments.$get(args, options),
  )
}

export async function getApisStorageK8sIoV1WatchVolumeattachmentsName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.watch.volumeattachments[':name'].$get(args, options),
  )
}

export async function getApisStorageK8sIoV1WatchVolumeattributesclasses(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.watch.volumeattributesclasses.$get(args, options),
  )
}

export async function getApisStorageK8sIoV1WatchVolumeattributesclassesName(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storage.k8s.io'].v1.watch.volumeattributesclasses[':name'].$get(args, options),
  )
}
