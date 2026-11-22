import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4AdminActiveContextDeadQueueRoute,
  getApiV4AdminActiveContextConnectionsRoute,
  postApiV4AdminActiveContextDeadQueueReplayRoute,
  putApiV4AdminActiveContextCodeEnabledNamespacesRoute,
  putApiV4AdminActiveContextCollectionsIdRoute,
  putApiV4AdminActiveContextConnectionsActivateRoute,
  putApiV4AdminActiveContextConnectionsDeactivateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const activeContextHandler = app
  .openapi(getApiV4AdminActiveContextConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4AdminActiveContextConnectionsActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4AdminActiveContextConnectionsDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4AdminActiveContextCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4AdminActiveContextDeadQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AdminActiveContextDeadQueueReplayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4AdminActiveContextCodeEnabledNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
