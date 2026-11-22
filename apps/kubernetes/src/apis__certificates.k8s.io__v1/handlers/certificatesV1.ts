import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisCertificatesK8sIoV1CertificatesigningrequestsNameRoute,
  deleteApisCertificatesK8sIoV1CertificatesigningrequestsRoute,
  deleteApisCertificatesK8sIoV1ClustertrustbundlesNameRoute,
  deleteApisCertificatesK8sIoV1ClustertrustbundlesRoute,
  deleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameRoute,
  deleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsRoute,
  getApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalRoute,
  getApisCertificatesK8sIoV1CertificatesigningrequestsNameRoute,
  getApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusRoute,
  getApisCertificatesK8sIoV1CertificatesigningrequestsRoute,
  getApisCertificatesK8sIoV1ClustertrustbundlesNameRoute,
  getApisCertificatesK8sIoV1ClustertrustbundlesRoute,
  getApisCertificatesK8sIoV1IndexRoute,
  getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameRoute,
  getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusRoute,
  getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsRoute,
  getApisCertificatesK8sIoV1PodcertificaterequestsRoute,
  getApisCertificatesK8sIoV1WatchCertificatesigningrequestsNameRoute,
  getApisCertificatesK8sIoV1WatchCertificatesigningrequestsRoute,
  getApisCertificatesK8sIoV1WatchClustertrustbundlesNameRoute,
  getApisCertificatesK8sIoV1WatchClustertrustbundlesRoute,
  getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsNameRoute,
  getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsRoute,
  getApisCertificatesK8sIoV1WatchPodcertificaterequestsRoute,
  patchApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalRoute,
  patchApisCertificatesK8sIoV1CertificatesigningrequestsNameRoute,
  patchApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusRoute,
  patchApisCertificatesK8sIoV1ClustertrustbundlesNameRoute,
  patchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameRoute,
  patchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusRoute,
  postApisCertificatesK8sIoV1CertificatesigningrequestsRoute,
  postApisCertificatesK8sIoV1ClustertrustbundlesRoute,
  postApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsRoute,
  putApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalRoute,
  putApisCertificatesK8sIoV1CertificatesigningrequestsNameRoute,
  putApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusRoute,
  putApisCertificatesK8sIoV1ClustertrustbundlesNameRoute,
  putApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameRoute,
  putApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const certificatesV1Handler = app
  .openapi(getApisCertificatesK8sIoV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisCertificatesK8sIoV1CertificatesigningrequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCertificatesK8sIoV1CertificatesigningrequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisCertificatesK8sIoV1CertificatesigningrequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisCertificatesK8sIoV1CertificatesigningrequestsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCertificatesK8sIoV1CertificatesigningrequestsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisCertificatesK8sIoV1CertificatesigningrequestsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisCertificatesK8sIoV1CertificatesigningrequestsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisCertificatesK8sIoV1CertificatesigningrequestsNameApprovalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisCertificatesK8sIoV1CertificatesigningrequestsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisCertificatesK8sIoV1ClustertrustbundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCertificatesK8sIoV1ClustertrustbundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisCertificatesK8sIoV1ClustertrustbundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisCertificatesK8sIoV1ClustertrustbundlesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCertificatesK8sIoV1ClustertrustbundlesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisCertificatesK8sIoV1ClustertrustbundlesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisCertificatesK8sIoV1ClustertrustbundlesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApisCertificatesK8sIoV1NamespacesNamespacePodcertificaterequestsNameStatusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApisCertificatesK8sIoV1PodcertificaterequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCertificatesK8sIoV1WatchCertificatesigningrequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCertificatesK8sIoV1WatchCertificatesigningrequestsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCertificatesK8sIoV1WatchClustertrustbundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCertificatesK8sIoV1WatchClustertrustbundlesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApisCertificatesK8sIoV1WatchNamespacesNamespacePodcertificaterequestsNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApisCertificatesK8sIoV1WatchPodcertificaterequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
