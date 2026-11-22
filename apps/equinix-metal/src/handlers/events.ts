import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConnectionsConnectionIdEventsRoute,
  getConnectionsConnectionIdPortsIdEventsRoute,
  getDevicesIdEventsRoute,
  getEventsIdRoute,
  getEventsRoute,
  getOrganizationsIdEventsRoute,
  getProjectsIdEventsRoute,
  getRoutesIdEventsRoute,
  getVirtualCircuitsIdEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getConnectionsConnectionIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsConnectionIdPortsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutesIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualCircuitsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
