import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGlobalIpAssignmentsIdRoute,
  deleteGlobalIpHealthChecksIdRoute,
  deleteGlobalIpsIdRoute,
  getGlobalIpAllowedPortsRoute,
  getGlobalIpAssignmentHealthRoute,
  getGlobalIpAssignmentsIdRoute,
  getGlobalIpAssignmentsRoute,
  getGlobalIpAssignmentsUsage2Route,
  getGlobalIpAssignmentsUsageRoute,
  getGlobalIpHealthChecksIdRoute,
  getGlobalIpHealthChecksRoute,
  getGlobalIpHealthCheckTypesRoute,
  getGlobalIpLatencyRoute,
  getGlobalIpProtocolsRoute,
  getGlobalIpsIdRoute,
  getGlobalIpsRoute,
  getGlobalIpUsageRoute,
  patchGlobalIpAssignmentsIdRoute,
  postGlobalIpAssignmentsRoute,
  postGlobalIpHealthChecksRoute,
  postGlobalIpsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const globalIPsHandler = app
  .openapi(getGlobalIpAllowedPortsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGlobalIpAssignmentHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGlobalIpAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGlobalIpAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGlobalIpAssignmentsUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGlobalIpAssignmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGlobalIpAssignmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGlobalIpAssignmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGlobalIpAssignmentsUsage2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGlobalIpHealthCheckTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGlobalIpHealthChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGlobalIpHealthChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGlobalIpHealthChecksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGlobalIpHealthChecksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGlobalIpLatencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGlobalIpProtocolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGlobalIpUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGlobalIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGlobalIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGlobalIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGlobalIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
