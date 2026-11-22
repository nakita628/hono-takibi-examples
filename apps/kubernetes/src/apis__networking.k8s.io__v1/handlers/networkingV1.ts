import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisNetworkingK8sIoV1IngressclassesNameRoute,
  deleteApisNetworkingK8sIoV1IngressclassesRoute,
  deleteApisNetworkingK8sIoV1IpaddressesNameRoute,
  deleteApisNetworkingK8sIoV1IpaddressesRoute,
  deleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameRoute,
  deleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesRoute,
  deleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameRoute,
  deleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesRoute,
  deleteApisNetworkingK8sIoV1ServicecidrsNameRoute,
  deleteApisNetworkingK8sIoV1ServicecidrsRoute,
  getApisNetworkingK8sIoV1IndexRoute,
  getApisNetworkingK8sIoV1IngressclassesNameRoute,
  getApisNetworkingK8sIoV1IngressclassesRoute,
  getApisNetworkingK8sIoV1IngressesRoute,
  getApisNetworkingK8sIoV1IpaddressesNameRoute,
  getApisNetworkingK8sIoV1IpaddressesRoute,
  getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameRoute,
  getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusRoute,
  getApisNetworkingK8sIoV1NamespacesNamespaceIngressesRoute,
  getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameRoute,
  getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesRoute,
  getApisNetworkingK8sIoV1NetworkpoliciesRoute,
  getApisNetworkingK8sIoV1ServicecidrsNameRoute,
  getApisNetworkingK8sIoV1ServicecidrsNameStatusRoute,
  getApisNetworkingK8sIoV1ServicecidrsRoute,
  getApisNetworkingK8sIoV1WatchIngressclassesNameRoute,
  getApisNetworkingK8sIoV1WatchIngressclassesRoute,
  getApisNetworkingK8sIoV1WatchIngressesRoute,
  getApisNetworkingK8sIoV1WatchIpaddressesNameRoute,
  getApisNetworkingK8sIoV1WatchIpaddressesRoute,
  getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameRoute,
  getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesRoute,
  getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameRoute,
  getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesRoute,
  getApisNetworkingK8sIoV1WatchNetworkpoliciesRoute,
  getApisNetworkingK8sIoV1WatchServicecidrsNameRoute,
  getApisNetworkingK8sIoV1WatchServicecidrsRoute,
  patchApisNetworkingK8sIoV1IngressclassesNameRoute,
  patchApisNetworkingK8sIoV1IpaddressesNameRoute,
  patchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameRoute,
  patchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusRoute,
  patchApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameRoute,
  patchApisNetworkingK8sIoV1ServicecidrsNameRoute,
  patchApisNetworkingK8sIoV1ServicecidrsNameStatusRoute,
  postApisNetworkingK8sIoV1IngressclassesRoute,
  postApisNetworkingK8sIoV1IpaddressesRoute,
  postApisNetworkingK8sIoV1NamespacesNamespaceIngressesRoute,
  postApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesRoute,
  postApisNetworkingK8sIoV1ServicecidrsRoute,
  putApisNetworkingK8sIoV1IngressclassesNameRoute,
  putApisNetworkingK8sIoV1IpaddressesNameRoute,
  putApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameRoute,
  putApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusRoute,
  putApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameRoute,
  putApisNetworkingK8sIoV1ServicecidrsNameRoute,
  putApisNetworkingK8sIoV1ServicecidrsNameStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkingV1Handler = app
  .openapi(getApisNetworkingK8sIoV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisNetworkingK8sIoV1IngressclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1IngressclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisNetworkingK8sIoV1IngressclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisNetworkingK8sIoV1IngressclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1IngressclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisNetworkingK8sIoV1IngressclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisNetworkingK8sIoV1IngressclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1IngressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisNetworkingK8sIoV1IpaddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1IpaddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisNetworkingK8sIoV1IpaddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisNetworkingK8sIoV1IpaddressesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1IpaddressesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisNetworkingK8sIoV1IpaddressesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisNetworkingK8sIoV1IpaddressesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1NamespacesNamespaceIngressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisNetworkingK8sIoV1NamespacesNamespaceIngressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1NetworkpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisNetworkingK8sIoV1ServicecidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1ServicecidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisNetworkingK8sIoV1ServicecidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisNetworkingK8sIoV1ServicecidrsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1ServicecidrsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisNetworkingK8sIoV1ServicecidrsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisNetworkingK8sIoV1ServicecidrsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1ServicecidrsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisNetworkingK8sIoV1ServicecidrsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisNetworkingK8sIoV1ServicecidrsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1WatchIngressclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1WatchIngressclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1WatchIngressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1WatchIpaddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1WatchIpaddressesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1WatchNetworkpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1WatchServicecidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisNetworkingK8sIoV1WatchServicecidrsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
