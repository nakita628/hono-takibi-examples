import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGreengrassServiceroleRoute,
  deleteGreengrassV2ComponentsArnRoute,
  deleteGreengrassV2CoreDevicesCoreDeviceThingNameRoute,
  deleteGreengrassV2DeploymentsDeploymentIdRoute,
  getGreengrassServiceroleRoute,
  getGreengrassThingsThingNameConnectivityInfoRoute,
  getGreengrassV2ComponentsArnArtifactsArtifactNameRoute,
  getGreengrassV2ComponentsArnMetadataRoute,
  getGreengrassV2ComponentsArnRoute,
  getGreengrassV2ComponentsArnVersionsRoute,
  getGreengrassV2ComponentsRoute,
  getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesRoute,
  getGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsRoute,
  getGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsRoute,
  getGreengrassV2CoreDevicesCoreDeviceThingNameRoute,
  getGreengrassV2CoreDevicesRoute,
  getGreengrassV2DeploymentsDeploymentIdRoute,
  getGreengrassV2DeploymentsRoute,
  postGreengrassV2CoreDevicesCoreDeviceThingNameAssociateClientDevicesRoute,
  postGreengrassV2CoreDevicesCoreDeviceThingNameDisassociateClientDevicesRoute,
  postGreengrassV2CreateComponentVersionRoute,
  postGreengrassV2DeploymentsDeploymentIdCancelRoute,
  postGreengrassV2DeploymentsRoute,
  postGreengrassV2ResolveComponentCandidatesRoute,
  putGreengrassServiceroleRoute,
  putGreengrassThingsThingNameConnectivityInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const greengrassHandler = app
  .openapi(putGreengrassServiceroleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGreengrassServiceroleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassServiceroleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassV2CoreDevicesCoreDeviceThingNameAssociateClientDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassV2CoreDevicesCoreDeviceThingNameDisassociateClientDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassV2DeploymentsDeploymentIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassV2CreateComponentVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassV2DeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassV2DeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGreengrassV2ComponentsArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassV2ComponentsArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGreengrassV2CoreDevicesCoreDeviceThingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassV2CoreDevicesCoreDeviceThingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGreengrassV2DeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassV2DeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassV2ComponentsArnMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassV2ComponentsArnArtifactsArtifactNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassThingsThingNameConnectivityInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGreengrassThingsThingNameConnectivityInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassV2ComponentsArnVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassV2ComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassV2CoreDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGreengrassV2ResolveComponentCandidatesRoute, (c) => {
    throw new Error('Not implemented')
  })
