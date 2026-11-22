import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteAppstoreV1InstallationJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const uninstallationHandler = app.openapi(deleteAppstoreV1InstallationJsonRoute, (c) => {
  throw new Error('Not implemented')
})
