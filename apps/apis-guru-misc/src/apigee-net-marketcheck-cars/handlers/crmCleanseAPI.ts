import { OpenAPIHono } from '@hono/zod-openapi'
import { getCrmCheckCarVinRoute } from '../routes'

const app = new OpenAPIHono()

export const crmCleanseAPIHandler = app.openapi(getCrmCheckCarVinRoute, (c) => {
  throw new Error('Not implemented')
})
