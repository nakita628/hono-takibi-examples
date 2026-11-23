import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppNameMachinesMachineIdLeaseRoute,
  deleteAppsAppNameMachinesMachineIdMetadataKeyRoute,
  deleteAppsAppNameMachinesMachineIdRoute,
  deleteAppsAppNameRoute,
  deleteAppsAppNameVolumesVolumeIdRoute,
  getAppsAppNameMachinesMachineIdEventsRoute,
  getAppsAppNameMachinesMachineIdLeaseRoute,
  getAppsAppNameMachinesMachineIdMetadataRoute,
  getAppsAppNameMachinesMachineIdPsRoute,
  getAppsAppNameMachinesMachineIdRoute,
  getAppsAppNameMachinesMachineIdVersionsRoute,
  getAppsAppNameMachinesMachineIdWaitRoute,
  getAppsAppNameMachinesRoute,
  getAppsAppNameRoute,
  getAppsAppNameVolumesRoute,
  getAppsAppNameVolumesVolumeIdRoute,
  getAppsAppNameVolumesVolumeIdSnapshotsRoute,
  getAppsRoute,
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
  postAppsAppNameVolumesRoute,
  postAppsAppNameVolumesVolumeIdRoute,
  postAppsAppNameVolumesVolumeIdSnapshotsRoute,
  postAppsRoute,
  putAppsAppNameVolumesVolumeIdExtendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app
  .openapi(getAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppNameRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getAppsAppNameVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppNameVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppNameVolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppNameVolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppNameVolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppsAppNameVolumesVolumeIdExtendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppNameVolumesVolumeIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppNameVolumesVolumeIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
