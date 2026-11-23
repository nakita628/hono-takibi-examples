import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRemoteServersIdRoute,
  getRemoteServersIdConfigurationFileRoute,
  getRemoteServersIdRoute,
  getRemoteServersRoute,
  patchRemoteServersIdRoute,
  postRemoteServersIdConfigurationFileRoute,
  postRemoteServersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const remoteServersHandler = app
  .openapi(getRemoteServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRemoteServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRemoteServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRemoteServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRemoteServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRemoteServersIdConfigurationFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRemoteServersIdConfigurationFileRoute, (c) => {
    throw new Error('Not implemented')
  })
