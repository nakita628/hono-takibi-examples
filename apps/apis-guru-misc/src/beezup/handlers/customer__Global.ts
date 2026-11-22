import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2UserCustomerIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const customer__GlobalHandler = app.openapi(getV2UserCustomerIndexRoute, (c) => {
  throw new Error('Not implemented')
})
