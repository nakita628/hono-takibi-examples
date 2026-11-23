import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOutpostsInstancesUuidIndexRoute,
  deleteOutpostsServiceConnectionsAllUuidIndexRoute,
  deleteOutpostsServiceConnectionsDockerUuidIndexRoute,
  deleteOutpostsServiceConnectionsKubernetesUuidIndexRoute,
  getOutpostsInstancesDefaultSettingsIndexRoute,
  getOutpostsInstancesIndexRoute,
  getOutpostsInstancesUuidHealthIndexRoute,
  getOutpostsInstancesUuidIndexRoute,
  getOutpostsInstancesUuidUsedByIndexRoute,
  getOutpostsLdapIdCheckAccessIndexRoute,
  getOutpostsLdapIndexRoute,
  getOutpostsProxyIndexRoute,
  getOutpostsRadiusIdCheckAccessIndexRoute,
  getOutpostsRadiusIndexRoute,
  getOutpostsServiceConnectionsAllIndexRoute,
  getOutpostsServiceConnectionsAllTypesIndexRoute,
  getOutpostsServiceConnectionsAllUuidIndexRoute,
  getOutpostsServiceConnectionsAllUuidStateIndexRoute,
  getOutpostsServiceConnectionsAllUuidUsedByIndexRoute,
  getOutpostsServiceConnectionsDockerIndexRoute,
  getOutpostsServiceConnectionsDockerUuidIndexRoute,
  getOutpostsServiceConnectionsDockerUuidUsedByIndexRoute,
  getOutpostsServiceConnectionsKubernetesIndexRoute,
  getOutpostsServiceConnectionsKubernetesUuidIndexRoute,
  getOutpostsServiceConnectionsKubernetesUuidUsedByIndexRoute,
  patchOutpostsInstancesUuidIndexRoute,
  patchOutpostsServiceConnectionsDockerUuidIndexRoute,
  patchOutpostsServiceConnectionsKubernetesUuidIndexRoute,
  postOutpostsInstancesIndexRoute,
  postOutpostsInstancesUuidRebuildPermissionsIndexRoute,
  postOutpostsServiceConnectionsDockerIndexRoute,
  postOutpostsServiceConnectionsKubernetesIndexRoute,
  putOutpostsInstancesUuidIndexRoute,
  putOutpostsServiceConnectionsDockerUuidIndexRoute,
  putOutpostsServiceConnectionsKubernetesUuidIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const outpostsHandler = app
  .openapi(getOutpostsInstancesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOutpostsInstancesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsInstancesUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOutpostsInstancesUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOutpostsInstancesUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOutpostsInstancesUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsInstancesUuidHealthIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOutpostsInstancesUuidRebuildPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsInstancesUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsInstancesDefaultSettingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsLdapIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsLdapIdCheckAccessIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsProxyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsRadiusIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsRadiusIdCheckAccessIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsServiceConnectionsAllIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsServiceConnectionsAllUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOutpostsServiceConnectionsAllUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsServiceConnectionsAllUuidStateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsServiceConnectionsAllUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsServiceConnectionsAllTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsServiceConnectionsDockerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOutpostsServiceConnectionsDockerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsServiceConnectionsDockerUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOutpostsServiceConnectionsDockerUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOutpostsServiceConnectionsDockerUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOutpostsServiceConnectionsDockerUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsServiceConnectionsDockerUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsServiceConnectionsKubernetesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOutpostsServiceConnectionsKubernetesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsServiceConnectionsKubernetesUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOutpostsServiceConnectionsKubernetesUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOutpostsServiceConnectionsKubernetesUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOutpostsServiceConnectionsKubernetesUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsServiceConnectionsKubernetesUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
