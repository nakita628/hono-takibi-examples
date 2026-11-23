import { OpenAPIHono } from '@hono/zod-openapi'
import { getCrmCheckCarVinRoute } from '../routes'

const app = new OpenAPIHono()

export const crmCheckHandler = app.openapi(getCrmCheckCarVinRoute, (c) => {
  throw new Error('Not implemented')
})
