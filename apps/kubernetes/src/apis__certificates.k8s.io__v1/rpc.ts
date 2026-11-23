import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisCertificatesK8sIoV1Index(options?: ClientRequestOptions) {
  return await parseResponse(client.apis['certificates.k8s.io'].v1.index.$get(undefined, options))
}

export async function getApisCertificatesK8sIoV1Certificatesigningrequests(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.certificatesigningrequests.$get(args, options),
  )
}

export async function postApisCertificatesK8sIoV1Certificatesigningrequests(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.certificatesigningrequests.$post(args, options),
  )
}

export async function deleteApisCertificatesK8sIoV1Certificatesigningrequests(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.certificatesigningrequests.$delete(args, options),
  )
}

export async function getApisCertificatesK8sIoV1CertificatesigningrequestsName(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].$get(args, options),
  )
}

export async function putApisCertificatesK8sIoV1CertificatesigningrequestsName(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].$put(args, options),
  )
}

export async function deleteApisCertificatesK8sIoV1CertificatesigningrequestsName(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisCertificatesK8sIoV1CertificatesigningrequestsName(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].$patch(args, options),
  )
}

export async function getApisCertificatesK8sIoV1CertificatesigningrequestsNameApproval(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].approval.$get(
      args,
      options,
    ),
  )
}

export async function putApisCertificatesK8sIoV1CertificatesigningrequestsNameApproval(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].approval.$put(
      args,
      options,
    ),
  )
}

export async function patchApisCertificatesK8sIoV1CertificatesigningrequestsNameApproval(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['approval']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].approval.$patch(
      args,
      options,
    ),
  )
}

export async function getApisCertificatesK8sIoV1CertificatesigningrequestsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].status.$get(
      args,
      options,
    ),
  )
}

export async function putApisCertificatesK8sIoV1CertificatesigningrequestsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].status.$put(
      args,
      options,
    ),
  )
}

export async function patchApisCertificatesK8sIoV1CertificatesigningrequestsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['certificatesigningrequests'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.certificatesigningrequests[':name'].status.$patch(
      args,
      options,
    ),
  )
}

export async function getApisCertificatesK8sIoV1Clustertrustbundles(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.clustertrustbundles.$get(args, options),
  )
}

export async function postApisCertificatesK8sIoV1Clustertrustbundles(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.clustertrustbundles.$post(args, options),
  )
}

export async function deleteApisCertificatesK8sIoV1Clustertrustbundles(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.clustertrustbundles.$delete(args, options),
  )
}

export async function getApisCertificatesK8sIoV1ClustertrustbundlesName(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.clustertrustbundles[':name'].$get(args, options),
  )
}

export async function putApisCertificatesK8sIoV1ClustertrustbundlesName(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.clustertrustbundles[':name'].$put(args, options),
  )
}

export async function deleteApisCertificatesK8sIoV1ClustertrustbundlesName(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.clustertrustbundles[':name'].$delete(args, options),
  )
}

export async function patchApisCertificatesK8sIoV1ClustertrustbundlesName(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['clustertrustbundles'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.clustertrustbundles[':name'].$patch(args, options),
  )
}

export async function getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequests(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests.$get(
      args,
      options,
    ),
  )
}

export async function postApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequests(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests.$post(
      args,
      options,
    ),
  )
}

export async function deleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequests(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests.$delete(
      args,
      options,
    ),
  )
}

export async function getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsName(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
      ':name'
    ].$get(args, options),
  )
}

export async function putApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsName(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
      ':name'
    ].$put(args, options),
  )
}

export async function deleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsName(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
      ':name'
    ].$delete(args, options),
  )
}

export async function patchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsName(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
      ':name'
    ].$patch(args, options),
  )
}

export async function getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
      ':name'
    ].status.$get(args, options),
  )
}

export async function putApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
      ':name'
    ].status.$put(args, options),
  )
}

export async function patchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['namespaces'][':namespace']['podcertificaterequests'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.namespaces[':namespace'].podcertificaterequests[
      ':name'
    ].status.$patch(args, options),
  )
}

export async function getApisCertificatesK8sIoV1Podcertificaterequests(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['podcertificaterequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.podcertificaterequests.$get(args, options),
  )
}

export async function getApisCertificatesK8sIoV1WatchCertificatesigningrequests(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.watch.certificatesigningrequests.$get(args, options),
  )
}

export async function getApisCertificatesK8sIoV1WatchCertificatesigningrequestsName(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['certificatesigningrequests'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.watch.certificatesigningrequests[':name'].$get(
      args,
      options,
    ),
  )
}

export async function getApisCertificatesK8sIoV1WatchClustertrustbundles(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.watch.clustertrustbundles.$get(args, options),
  )
}

export async function getApisCertificatesK8sIoV1WatchClustertrustbundlesName(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['clustertrustbundles'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.watch.clustertrustbundles[':name'].$get(args, options),
  )
}

export async function getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequests(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.watch.namespaces[
      ':namespace'
    ].podcertificaterequests.$get(args, options),
  )
}

export async function getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsName(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['namespaces'][':namespace']['podcertificaterequests'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.watch.namespaces[':namespace'].podcertificaterequests[
      ':name'
    ].$get(args, options),
  )
}

export async function getApisCertificatesK8sIoV1WatchPodcertificaterequests(
  args: InferRequestType<
    (typeof client.apis)['certificates.k8s.io']['v1']['watch']['podcertificaterequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['certificates.k8s.io'].v1.watch.podcertificaterequests.$get(args, options),
  )
}
