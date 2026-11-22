import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AgreementsRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app.openapi(getV1AgreementsRoute, (c) => {
  throw new Error('Not implemented')
})
