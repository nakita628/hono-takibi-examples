import { OpenAPIHono } from '@hono/zod-openapi'
import { getInstallationItemIdRoute, getInstallationRoute, postInstallationRoute } from '../routes'

const app = new OpenAPIHono()

export const installationHandler = app
  .openapi(getInstallationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstallationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstallationItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
