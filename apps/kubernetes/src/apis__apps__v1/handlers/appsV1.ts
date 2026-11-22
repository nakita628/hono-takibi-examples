import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisAppsV1NamespacesNamespaceControllerrevisionsNameRoute,
  deleteApisAppsV1NamespacesNamespaceControllerrevisionsRoute,
  deleteApisAppsV1NamespacesNamespaceDaemonsetsNameRoute,
  deleteApisAppsV1NamespacesNamespaceDaemonsetsRoute,
  deleteApisAppsV1NamespacesNamespaceDeploymentsNameRoute,
  deleteApisAppsV1NamespacesNamespaceDeploymentsRoute,
  deleteApisAppsV1NamespacesNamespaceReplicasetsNameRoute,
  deleteApisAppsV1NamespacesNamespaceReplicasetsRoute,
  deleteApisAppsV1NamespacesNamespaceStatefulsetsNameRoute,
  deleteApisAppsV1NamespacesNamespaceStatefulsetsRoute,
  getApisAppsV1ControllerrevisionsRoute,
  getApisAppsV1DaemonsetsRoute,
  getApisAppsV1DeploymentsRoute,
  getApisAppsV1IndexRoute,
  getApisAppsV1NamespacesNamespaceControllerrevisionsNameRoute,
  getApisAppsV1NamespacesNamespaceControllerrevisionsRoute,
  getApisAppsV1NamespacesNamespaceDaemonsetsNameRoute,
  getApisAppsV1NamespacesNamespaceDaemonsetsNameStatusRoute,
  getApisAppsV1NamespacesNamespaceDaemonsetsRoute,
  getApisAppsV1NamespacesNamespaceDeploymentsNameRoute,
  getApisAppsV1NamespacesNamespaceDeploymentsNameScaleRoute,
  getApisAppsV1NamespacesNamespaceDeploymentsNameStatusRoute,
  getApisAppsV1NamespacesNamespaceDeploymentsRoute,
  getApisAppsV1NamespacesNamespaceReplicasetsNameRoute,
  getApisAppsV1NamespacesNamespaceReplicasetsNameScaleRoute,
  getApisAppsV1NamespacesNamespaceReplicasetsNameStatusRoute,
  getApisAppsV1NamespacesNamespaceReplicasetsRoute,
  getApisAppsV1NamespacesNamespaceStatefulsetsNameRoute,
  getApisAppsV1NamespacesNamespaceStatefulsetsNameScaleRoute,
  getApisAppsV1NamespacesNamespaceStatefulsetsNameStatusRoute,
  getApisAppsV1NamespacesNamespaceStatefulsetsRoute,
  getApisAppsV1ReplicasetsRoute,
  getApisAppsV1StatefulsetsRoute,
  getApisAppsV1WatchControllerrevisionsRoute,
  getApisAppsV1WatchDaemonsetsRoute,
  getApisAppsV1WatchDeploymentsRoute,
  getApisAppsV1WatchNamespacesNamespaceControllerrevisionsNameRoute,
  getApisAppsV1WatchNamespacesNamespaceControllerrevisionsRoute,
  getApisAppsV1WatchNamespacesNamespaceDaemonsetsNameRoute,
  getApisAppsV1WatchNamespacesNamespaceDaemonsetsRoute,
  getApisAppsV1WatchNamespacesNamespaceDeploymentsNameRoute,
  getApisAppsV1WatchNamespacesNamespaceDeploymentsRoute,
  getApisAppsV1WatchNamespacesNamespaceReplicasetsNameRoute,
  getApisAppsV1WatchNamespacesNamespaceReplicasetsRoute,
  getApisAppsV1WatchNamespacesNamespaceStatefulsetsNameRoute,
  getApisAppsV1WatchNamespacesNamespaceStatefulsetsRoute,
  getApisAppsV1WatchReplicasetsRoute,
  getApisAppsV1WatchStatefulsetsRoute,
  patchApisAppsV1NamespacesNamespaceControllerrevisionsNameRoute,
  patchApisAppsV1NamespacesNamespaceDaemonsetsNameRoute,
  patchApisAppsV1NamespacesNamespaceDaemonsetsNameStatusRoute,
  patchApisAppsV1NamespacesNamespaceDeploymentsNameRoute,
  patchApisAppsV1NamespacesNamespaceDeploymentsNameScaleRoute,
  patchApisAppsV1NamespacesNamespaceDeploymentsNameStatusRoute,
  patchApisAppsV1NamespacesNamespaceReplicasetsNameRoute,
  patchApisAppsV1NamespacesNamespaceReplicasetsNameScaleRoute,
  patchApisAppsV1NamespacesNamespaceReplicasetsNameStatusRoute,
  patchApisAppsV1NamespacesNamespaceStatefulsetsNameRoute,
  patchApisAppsV1NamespacesNamespaceStatefulsetsNameScaleRoute,
  patchApisAppsV1NamespacesNamespaceStatefulsetsNameStatusRoute,
  postApisAppsV1NamespacesNamespaceControllerrevisionsRoute,
  postApisAppsV1NamespacesNamespaceDaemonsetsRoute,
  postApisAppsV1NamespacesNamespaceDeploymentsRoute,
  postApisAppsV1NamespacesNamespaceReplicasetsRoute,
  postApisAppsV1NamespacesNamespaceStatefulsetsRoute,
  putApisAppsV1NamespacesNamespaceControllerrevisionsNameRoute,
  putApisAppsV1NamespacesNamespaceDaemonsetsNameRoute,
  putApisAppsV1NamespacesNamespaceDaemonsetsNameStatusRoute,
  putApisAppsV1NamespacesNamespaceDeploymentsNameRoute,
  putApisAppsV1NamespacesNamespaceDeploymentsNameScaleRoute,
  putApisAppsV1NamespacesNamespaceDeploymentsNameStatusRoute,
  putApisAppsV1NamespacesNamespaceReplicasetsNameRoute,
  putApisAppsV1NamespacesNamespaceReplicasetsNameScaleRoute,
  putApisAppsV1NamespacesNamespaceReplicasetsNameStatusRoute,
  putApisAppsV1NamespacesNamespaceStatefulsetsNameRoute,
  putApisAppsV1NamespacesNamespaceStatefulsetsNameScaleRoute,
  putApisAppsV1NamespacesNamespaceStatefulsetsNameStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appsV1Handler = app
  .openapi(getApisAppsV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1ControllerrevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1DaemonsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1DeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAppsV1NamespacesNamespaceControllerrevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1NamespacesNamespaceControllerrevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAppsV1NamespacesNamespaceControllerrevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAppsV1NamespacesNamespaceControllerrevisionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1NamespacesNamespaceControllerrevisionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAppsV1NamespacesNamespaceControllerrevisionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAppsV1NamespacesNamespaceControllerrevisionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAppsV1NamespacesNamespaceDaemonsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1NamespacesNamespaceDaemonsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAppsV1NamespacesNamespaceDaemonsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAppsV1NamespacesNamespaceDaemonsetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1NamespacesNamespaceDaemonsetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAppsV1NamespacesNamespaceDaemonsetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAppsV1NamespacesNamespaceDaemonsetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1NamespacesNamespaceDaemonsetsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAppsV1NamespacesNamespaceDaemonsetsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAppsV1NamespacesNamespaceDaemonsetsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAppsV1NamespacesNamespaceDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1NamespacesNamespaceDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAppsV1NamespacesNamespaceDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAppsV1NamespacesNamespaceDeploymentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1NamespacesNamespaceDeploymentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAppsV1NamespacesNamespaceDeploymentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAppsV1NamespacesNamespaceDeploymentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1NamespacesNamespaceDeploymentsNameScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAppsV1NamespacesNamespaceDeploymentsNameScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAppsV1NamespacesNamespaceDeploymentsNameScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1NamespacesNamespaceDeploymentsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAppsV1NamespacesNamespaceDeploymentsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAppsV1NamespacesNamespaceDeploymentsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAppsV1NamespacesNamespaceReplicasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1NamespacesNamespaceReplicasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAppsV1NamespacesNamespaceReplicasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAppsV1NamespacesNamespaceReplicasetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1NamespacesNamespaceReplicasetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAppsV1NamespacesNamespaceReplicasetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAppsV1NamespacesNamespaceReplicasetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1NamespacesNamespaceReplicasetsNameScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAppsV1NamespacesNamespaceReplicasetsNameScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAppsV1NamespacesNamespaceReplicasetsNameScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1NamespacesNamespaceReplicasetsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAppsV1NamespacesNamespaceReplicasetsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAppsV1NamespacesNamespaceReplicasetsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAppsV1NamespacesNamespaceStatefulsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1NamespacesNamespaceStatefulsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAppsV1NamespacesNamespaceStatefulsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisAppsV1NamespacesNamespaceStatefulsetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1NamespacesNamespaceStatefulsetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAppsV1NamespacesNamespaceStatefulsetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAppsV1NamespacesNamespaceStatefulsetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1NamespacesNamespaceStatefulsetsNameScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAppsV1NamespacesNamespaceStatefulsetsNameScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAppsV1NamespacesNamespaceStatefulsetsNameScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1NamespacesNamespaceStatefulsetsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisAppsV1NamespacesNamespaceStatefulsetsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisAppsV1NamespacesNamespaceStatefulsetsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1ReplicasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1StatefulsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1WatchControllerrevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1WatchDaemonsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1WatchDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1WatchNamespacesNamespaceControllerrevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1WatchNamespacesNamespaceControllerrevisionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1WatchNamespacesNamespaceDaemonsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1WatchNamespacesNamespaceDaemonsetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1WatchNamespacesNamespaceDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1WatchNamespacesNamespaceDeploymentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1WatchNamespacesNamespaceReplicasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1WatchNamespacesNamespaceReplicasetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1WatchNamespacesNamespaceStatefulsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1WatchNamespacesNamespaceStatefulsetsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1WatchReplicasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisAppsV1WatchStatefulsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
