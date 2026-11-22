import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConnectedAppsClientsClientIdRoute,
  getV1ConnectedAppsClientsClientIdRoute,
  postV1ConnectedAppsClientsRoute,
  postV1ConnectedAppsClientsSearchRoute,
  putV1ConnectedAppsClientsClientIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectedAppsHandler = app
  .openapi(getV1ConnectedAppsClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConnectedAppsClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConnectedAppsClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectedAppsClientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectedAppsClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
