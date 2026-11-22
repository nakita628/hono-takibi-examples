import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteAppinstalls202609ExternalInstallRoute } from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app.openapi(deleteAppinstalls202609ExternalInstallRoute, (c) => {
  throw new Error('Not implemented')
})
