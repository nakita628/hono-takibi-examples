import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisStoragemigrationK8sIoV1Index(options?: ClientRequestOptions) {
  return await parseResponse(
    client.apis['storagemigration.k8s.io'].v1.index.$get(undefined, options),
  )
}

export async function getApisStoragemigrationK8sIoV1Storageversionmigrations(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storagemigration.k8s.io'].v1.storageversionmigrations.$get(args, options),
  )
}

export async function postApisStoragemigrationK8sIoV1Storageversionmigrations(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storagemigration.k8s.io'].v1.storageversionmigrations.$post(args, options),
  )
}

export async function deleteApisStoragemigrationK8sIoV1Storageversionmigrations(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storagemigration.k8s.io'].v1.storageversionmigrations.$delete(args, options),
  )
}

export async function getApisStoragemigrationK8sIoV1StorageversionmigrationsName(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].$get(args, options),
  )
}

export async function putApisStoragemigrationK8sIoV1StorageversionmigrationsName(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].$put(args, options),
  )
}

export async function deleteApisStoragemigrationK8sIoV1StorageversionmigrationsName(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisStoragemigrationK8sIoV1StorageversionmigrationsName(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].$patch(
      args,
      options,
    ),
  )
}

export async function getApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].status.$get(
      args,
      options,
    ),
  )
}

export async function putApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].status.$put(
      args,
      options,
    ),
  )
}

export async function patchApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].status.$patch(
      args,
      options,
    ),
  )
}

export async function getApisStoragemigrationK8sIoV1WatchStorageversionmigrations(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storagemigration.k8s.io'].v1.watch.storageversionmigrations.$get(args, options),
  )
}

export async function getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsName(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['storagemigration.k8s.io'].v1.watch.storageversionmigrations[':name'].$get(
      args,
      options,
    ),
  )
}
