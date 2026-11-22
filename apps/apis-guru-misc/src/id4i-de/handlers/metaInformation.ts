import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1InfoRoute } from '../routes'

const app = new OpenAPIHono()

export const metaInformationHandler = app.openapi(getApiV1InfoRoute, (c) => {
  throw new Error('Not implemented')
})
