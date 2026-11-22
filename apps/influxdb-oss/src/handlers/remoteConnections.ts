import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRemotesRemoteIDRoute,
  getRemotesRemoteIDRoute,
  getRemotesRoute,
  patchRemotesRemoteIDRoute,
  postRemotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const remoteConnectionsHandler = app
  .openapi(getRemotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRemotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRemotesRemoteIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRemotesRemoteIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRemotesRemoteIDRoute, (c) => {
    throw new Error('Not implemented')
  })
