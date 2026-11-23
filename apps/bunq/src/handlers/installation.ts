import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInstallationInstallationIDServerPublicKeyRoute,
  getInstallationItemIdRoute,
  getInstallationRoute,
  postInstallationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const installationHandler = app
  .openapi(postInstallationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstallationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstallationItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstallationInstallationIDServerPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
