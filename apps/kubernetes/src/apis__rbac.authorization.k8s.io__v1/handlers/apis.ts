import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameRoute,
  deleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsRoute,
  deleteApisRbacAuthorizationK8sIoV1ClusterrolesNameRoute,
  deleteApisRbacAuthorizationK8sIoV1ClusterrolesRoute,
  deleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameRoute,
  deleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsRoute,
  deleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameRoute,
  deleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesRoute,
  getApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameRoute,
  getApisRbacAuthorizationK8sIoV1ClusterrolebindingsRoute,
  getApisRbacAuthorizationK8sIoV1ClusterrolesNameRoute,
  getApisRbacAuthorizationK8sIoV1ClusterrolesRoute,
  getApisRbacAuthorizationK8sIoV1IndexRoute,
  getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameRoute,
  getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsRoute,
  getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameRoute,
  getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesRoute,
  getApisRbacAuthorizationK8sIoV1RolebindingsRoute,
  getApisRbacAuthorizationK8sIoV1RolesRoute,
  getApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsNameRoute,
  getApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsRoute,
  getApisRbacAuthorizationK8sIoV1WatchClusterrolesNameRoute,
  getApisRbacAuthorizationK8sIoV1WatchClusterrolesRoute,
  getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsNameRoute,
  getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsRoute,
  getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesNameRoute,
  getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesRoute,
  getApisRbacAuthorizationK8sIoV1WatchRolebindingsRoute,
  getApisRbacAuthorizationK8sIoV1WatchRolesRoute,
  patchApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameRoute,
  patchApisRbacAuthorizationK8sIoV1ClusterrolesNameRoute,
  patchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameRoute,
  patchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameRoute,
  postApisRbacAuthorizationK8sIoV1ClusterrolebindingsRoute,
  postApisRbacAuthorizationK8sIoV1ClusterrolesRoute,
  postApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsRoute,
  postApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesRoute,
  putApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameRoute,
  putApisRbacAuthorizationK8sIoV1ClusterrolesNameRoute,
  putApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameRoute,
  putApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apisHandler = app
  .openapi(getApisRbacAuthorizationK8sIoV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1ClusterrolebindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisRbacAuthorizationK8sIoV1ClusterrolebindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisRbacAuthorizationK8sIoV1ClusterrolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1ClusterrolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisRbacAuthorizationK8sIoV1ClusterrolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisRbacAuthorizationK8sIoV1ClusterrolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1ClusterrolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisRbacAuthorizationK8sIoV1ClusterrolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisRbacAuthorizationK8sIoV1ClusterrolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1RolebindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1RolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1WatchClusterrolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1WatchClusterrolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1WatchRolebindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisRbacAuthorizationK8sIoV1WatchRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
