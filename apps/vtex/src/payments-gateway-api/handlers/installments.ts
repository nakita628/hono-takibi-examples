import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPvtInstallmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const installmentsHandler = app.openapi(getApiPvtInstallmentsRoute, (c) => {
  throw new Error('Not implemented')
})
