import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectionsConnectionIdRoute,
  deleteVirtualCircuitsIdRoute,
  getConnectionsConnectionIdPortsIdRoute,
  getConnectionsConnectionIdPortsPortIdVirtualCircuitsRoute,
  getConnectionsConnectionIdPortsRoute,
  getConnectionsConnectionIdRoute,
  getConnectionsConnectionIdVirtualCircuitsRoute,
  getOrganizationsOrganizationIdConnectionsRoute,
  getProjectsProjectIdConnectionsRoute,
  getVirtualCircuitsIdRoute,
  postConnectionsConnectionIdPortsPortIdVirtualCircuitsRoute,
  postOrganizationsOrganizationIdConnectionsRoute,
  postProjectsProjectIdConnectionsRoute,
  putConnectionsConnectionIdRoute,
  putVirtualCircuitsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const interconnectionsHandler = app
  .openapi(deleteConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdPortsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdVirtualCircuitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdPortsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdPortsPortIdVirtualCircuitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsConnectionIdPortsPortIdVirtualCircuitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVirtualCircuitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualCircuitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVirtualCircuitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
