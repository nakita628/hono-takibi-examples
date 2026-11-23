import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectionsIdRoute,
  getConnectionsCountRoute,
  getConnectionsIdRoute,
  getConnectionsRoute,
  postConnectionsRoute,
  putConnectionsIdArchiveRoute,
  putConnectionsIdDisableRoute,
  putConnectionsIdEnableRoute,
  putConnectionsIdPauseRoute,
  putConnectionsIdRoute,
  putConnectionsIdUnarchiveRoute,
  putConnectionsIdUnpauseRoute,
  putConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionsHandler = app
  .openapi(getConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectionsIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectionsIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectionsIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectionsIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectionsIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectionsIdUnpauseRoute, (c) => {
    throw new Error('Not implemented')
  })
