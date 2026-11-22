import { OpenAPIHono } from '@hono/zod-openapi'
import { getInstallationInstallationIDServerPublicKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const serverPublicKeyHandler = app.openapi(
  getInstallationInstallationIDServerPublicKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
