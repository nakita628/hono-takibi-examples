import { OpenAPIHono } from '@hono/zod-openapi'
import { getChamberofcommerceChamberOfCommerceNumberCompanyinformationRoute } from '../routes'

const app = new OpenAPIHono()

export const chamberofcommerceHandler = app.openapi(
  getChamberofcommerceChamberOfCommerceNumberCompanyinformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
