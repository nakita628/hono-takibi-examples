import { OpenAPIHono } from '@hono/zod-openapi'
import { getKycRoute } from '../routes'

const app = new OpenAPIHono()

export const kycHandler = app.openapi(getKycRoute, (c) => {
  throw new Error('Not implemented')
})
