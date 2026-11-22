import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CompanyCreditsCreditIdRoute } from '../routes'

const app = new OpenAPIHono()

export const companyCreditsCreditIdHandler = app.openapi(getV1CompanyCreditsCreditIdRoute, (c) => {
  throw new Error('Not implemented')
})
