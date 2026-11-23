import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVirtualizationClusterGroupsIdIndexRoute,
  deleteVirtualizationClustersIdIndexRoute,
  deleteVirtualizationClusterTypesIdIndexRoute,
  deleteVirtualizationInterfacesIdIndexRoute,
  deleteVirtualizationVirtualMachinesIdIndexRoute,
  getVirtualizationClusterGroupsIdIndexRoute,
  getVirtualizationClusterGroupsIndexRoute,
  getVirtualizationClustersIdIndexRoute,
  getVirtualizationClustersIndexRoute,
  getVirtualizationClusterTypesIdIndexRoute,
  getVirtualizationClusterTypesIndexRoute,
  getVirtualizationInterfacesIdIndexRoute,
  getVirtualizationInterfacesIndexRoute,
  getVirtualizationVirtualMachinesIdIndexRoute,
  getVirtualizationVirtualMachinesIndexRoute,
  patchVirtualizationClusterGroupsIdIndexRoute,
  patchVirtualizationClustersIdIndexRoute,
  patchVirtualizationClusterTypesIdIndexRoute,
  patchVirtualizationInterfacesIdIndexRoute,
  patchVirtualizationVirtualMachinesIdIndexRoute,
  postVirtualizationClusterGroupsIndexRoute,
  postVirtualizationClustersIndexRoute,
  postVirtualizationClusterTypesIndexRoute,
  postVirtualizationInterfacesIndexRoute,
  postVirtualizationVirtualMachinesIndexRoute,
  putVirtualizationClusterGroupsIdIndexRoute,
  putVirtualizationClustersIdIndexRoute,
  putVirtualizationClusterTypesIdIndexRoute,
  putVirtualizationInterfacesIdIndexRoute,
  putVirtualizationVirtualMachinesIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const virtualizationHandler = app
  .openapi(getVirtualizationClusterGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVirtualizationClusterGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVirtualizationClusterGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualizationClusterGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVirtualizationClusterGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVirtualizationClusterGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualizationClusterTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVirtualizationClusterTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVirtualizationClusterTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualizationClusterTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVirtualizationClusterTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVirtualizationClusterTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualizationClustersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVirtualizationClustersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVirtualizationClustersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualizationClustersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVirtualizationClustersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVirtualizationClustersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualizationInterfacesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVirtualizationInterfacesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVirtualizationInterfacesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualizationInterfacesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVirtualizationInterfacesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVirtualizationInterfacesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualizationVirtualMachinesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVirtualizationVirtualMachinesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVirtualizationVirtualMachinesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualizationVirtualMachinesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVirtualizationVirtualMachinesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVirtualizationVirtualMachinesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
