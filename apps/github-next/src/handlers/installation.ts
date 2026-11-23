import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteInstallationTokenRoute, getInstallationRepositoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const installationHandler = app
  .openapi(getInstallationRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInstallationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
