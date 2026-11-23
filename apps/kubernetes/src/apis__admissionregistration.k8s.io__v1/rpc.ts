import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisAdmissionregistrationK8sIoV1Index(options?: ClientRequestOptions) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.index.$get(undefined, options),
  )
}

export async function getApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicies(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies.$get(args, options),
  )
}

export async function postApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicies(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies.$post(args, options),
  )
}

export async function deleteApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicies(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies.$delete(args, options),
  )
}

export async function getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies[':name'].$patch(
      args,
      options,
    ),
  )
}

export async function getApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicybindings(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings.$get(
      args,
      options,
    ),
  )
}

export async function postApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicybindings(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings.$post(
      args,
      options,
    ),
  )
}

export async function deleteApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicybindings(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings.$delete(
      args,
      options,
    ),
  )
}

export async function getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings[':name'].$patch(
      args,
      options,
    ),
  )
}

export async function getApisAdmissionregistrationK8sIoV1Mutatingwebhookconfigurations(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations.$get(
      args,
      options,
    ),
  )
}

export async function postApisAdmissionregistrationK8sIoV1Mutatingwebhookconfigurations(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations.$post(
      args,
      options,
    ),
  )
}

export async function deleteApisAdmissionregistrationK8sIoV1Mutatingwebhookconfigurations(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations.$delete(
      args,
      options,
    ),
  )
}

export async function getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations[':name'].$patch(
      args,
      options,
    ),
  )
}

export async function getApisAdmissionregistrationK8sIoV1Validatingadmissionpolicies(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies.$get(args, options),
  )
}

export async function postApisAdmissionregistrationK8sIoV1Validatingadmissionpolicies(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies.$post(args, options),
  )
}

export async function deleteApisAdmissionregistrationK8sIoV1Validatingadmissionpolicies(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies.$delete(
      args,
      options,
    ),
  )
}

export async function getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[':name'].$patch(
      args,
      options,
    ),
  )
}

export async function getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatus(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[':name'].status.$get(
      args,
      options,
    ),
  )
}

export async function putApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatus(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[':name'].status.$put(
      args,
      options,
    ),
  )
}

export async function patchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatus(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[
      ':name'
    ].status.$patch(args, options),
  )
}

export async function getApisAdmissionregistrationK8sIoV1Validatingadmissionpolicybindings(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings.$get(
      args,
      options,
    ),
  )
}

export async function postApisAdmissionregistrationK8sIoV1Validatingadmissionpolicybindings(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings.$post(
      args,
      options,
    ),
  )
}

export async function deleteApisAdmissionregistrationK8sIoV1Validatingadmissionpolicybindings(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings.$delete(
      args,
      options,
    ),
  )
}

export async function getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings[
      ':name'
    ].$delete(args, options),
  )
}

export async function patchApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings[
      ':name'
    ].$patch(args, options),
  )
}

export async function getApisAdmissionregistrationK8sIoV1Validatingwebhookconfigurations(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations.$get(
      args,
      options,
    ),
  )
}

export async function postApisAdmissionregistrationK8sIoV1Validatingwebhookconfigurations(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations.$post(
      args,
      options,
    ),
  )
}

export async function deleteApisAdmissionregistrationK8sIoV1Validatingwebhookconfigurations(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations.$delete(
      args,
      options,
    ),
  )
}

export async function getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations[':name'].$patch(
      args,
      options,
    ),
  )
}

export async function getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicies(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.watch.mutatingadmissionpolicies.$get(
      args,
      options,
    ),
  )
}

export async function getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.watch.mutatingadmissionpolicies[':name'].$get(
      args,
      options,
    ),
  )
}

export async function getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindings(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.watch.mutatingadmissionpolicybindings.$get(
      args,
      options,
    ),
  )
}

export async function getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.watch.mutatingadmissionpolicybindings[
      ':name'
    ].$get(args, options),
  )
}

export async function getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurations(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.watch.mutatingwebhookconfigurations.$get(
      args,
      options,
    ),
  )
}

export async function getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.watch.mutatingwebhookconfigurations[
      ':name'
    ].$get(args, options),
  )
}

export async function getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicies(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.watch.validatingadmissionpolicies.$get(
      args,
      options,
    ),
  )
}

export async function getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.watch.validatingadmissionpolicies[':name'].$get(
      args,
      options,
    ),
  )
}

export async function getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindings(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.watch.validatingadmissionpolicybindings.$get(
      args,
      options,
    ),
  )
}

export async function getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.watch.validatingadmissionpolicybindings[
      ':name'
    ].$get(args, options),
  )
}

export async function getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurations(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.watch.validatingwebhookconfigurations.$get(
      args,
      options,
    ),
  )
}

export async function getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsName(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['admissionregistration.k8s.io'].v1.watch.validatingwebhookconfigurations[
      ':name'
    ].$get(args, options),
  )
}
