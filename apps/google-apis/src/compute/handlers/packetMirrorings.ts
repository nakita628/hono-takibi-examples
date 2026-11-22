import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionPacketMirroringsPacketMirroringRoute,
  getProjectsProjectAggregatedPacketMirroringsRoute,
  getProjectsProjectRegionsRegionPacketMirroringsPacketMirroringRoute,
  getProjectsProjectRegionsRegionPacketMirroringsRoute,
  patchProjectsProjectRegionsRegionPacketMirroringsPacketMirroringRoute,
  postProjectsProjectRegionsRegionPacketMirroringsResourceTestIamPermissionsRoute,
  postProjectsProjectRegionsRegionPacketMirroringsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packetMirroringsHandler = app
  .openapi(getProjectsProjectAggregatedPacketMirroringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionPacketMirroringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionPacketMirroringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionPacketMirroringsPacketMirroringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionPacketMirroringsPacketMirroringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionPacketMirroringsPacketMirroringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionPacketMirroringsResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
