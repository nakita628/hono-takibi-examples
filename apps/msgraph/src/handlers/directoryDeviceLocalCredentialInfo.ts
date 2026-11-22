import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryDeviceLocalCredentialsDeviceLocalCredentialInfoIdRoute,
  getDirectoryDeviceLocalCredentialsCountRoute,
  getDirectoryDeviceLocalCredentialsDeviceLocalCredentialInfoIdRoute,
  getDirectoryDeviceLocalCredentialsRoute,
  patchDirectoryDeviceLocalCredentialsDeviceLocalCredentialInfoIdRoute,
  postDirectoryDeviceLocalCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryDeviceLocalCredentialInfoHandler = app
  .openapi(getDirectoryDeviceLocalCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryDeviceLocalCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeviceLocalCredentialsDeviceLocalCredentialInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryDeviceLocalCredentialsDeviceLocalCredentialInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryDeviceLocalCredentialsDeviceLocalCredentialInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeviceLocalCredentialsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
