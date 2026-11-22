import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppNameMachinesMachineIdLeaseRoute,
  deleteAppsAppNameMachinesMachineIdMetadataKeyRoute,
  deleteAppsAppNameMachinesMachineIdRoute,
  getAppsAppNameMachinesMachineIdEventsRoute,
  getAppsAppNameMachinesMachineIdLeaseRoute,
  getAppsAppNameMachinesMachineIdMetadataRoute,
  getAppsAppNameMachinesMachineIdPsRoute,
  getAppsAppNameMachinesMachineIdRoute,
  getAppsAppNameMachinesMachineIdVersionsRoute,
  getAppsAppNameMachinesMachineIdWaitRoute,
  getAppsAppNameMachinesRoute,
  postAppsAppNameMachinesMachineIdCordonRoute,
  postAppsAppNameMachinesMachineIdExecRoute,
  postAppsAppNameMachinesMachineIdLeaseRoute,
  postAppsAppNameMachinesMachineIdMetadataKeyRoute,
  postAppsAppNameMachinesMachineIdRestartRoute,
  postAppsAppNameMachinesMachineIdRoute,
  postAppsAppNameMachinesMachineIdSignalRoute,
  postAppsAppNameMachinesMachineIdStartRoute,
  postAppsAppNameMachinesMachineIdStopRoute,
  postAppsAppNameMachinesMachineIdUncordonRoute,
  postAppsAppNameMachinesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const machinesHandler = app
  .openapi(getAppsAppNameMachinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppNameMachinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppNameMachinesMachineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppNameMachinesMachineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppNameMachinesMachineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppNameMachinesMachineIdCordonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppNameMachinesMachineIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppNameMachinesMachineIdExecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppNameMachinesMachineIdLeaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppNameMachinesMachineIdLeaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppNameMachinesMachineIdLeaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppNameMachinesMachineIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppNameMachinesMachineIdMetadataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppNameMachinesMachineIdMetadataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppNameMachinesMachineIdPsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppNameMachinesMachineIdRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppNameMachinesMachineIdSignalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppNameMachinesMachineIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppNameMachinesMachineIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppNameMachinesMachineIdUncordonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppNameMachinesMachineIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppNameMachinesMachineIdWaitRoute, (c) => {
    throw new Error('Not implemented')
  })
