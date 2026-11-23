import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePortsIdNativeVlanRoute,
  getPortsIdRoute,
  getPortsIdVlanAssignmentsAssignmentIdRoute,
  getPortsIdVlanAssignmentsBatchesBatchIdRoute,
  getPortsIdVlanAssignmentsBatchesRoute,
  getPortsIdVlanAssignmentsRoute,
  postPortsIdAssignRoute,
  postPortsIdBondRoute,
  postPortsIdConvertLayer2Route,
  postPortsIdConvertLayer3Route,
  postPortsIdDisbondRoute,
  postPortsIdNativeVlanRoute,
  postPortsIdUnassignRoute,
  postPortsIdVlanAssignmentsBatchesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portsHandler = app
  .openapi(getPortsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortsIdAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortsIdBondRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortsIdConvertLayer2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortsIdConvertLayer3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortsIdDisbondRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePortsIdNativeVlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortsIdNativeVlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortsIdUnassignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortsIdVlanAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortsIdVlanAssignmentsAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortsIdVlanAssignmentsBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortsIdVlanAssignmentsBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortsIdVlanAssignmentsBatchesBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
