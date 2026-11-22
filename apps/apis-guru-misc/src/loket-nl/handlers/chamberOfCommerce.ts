import { OpenAPIHono } from '@hono/zod-openapi'
import { getChamberofcommerceChamberOfCommerceNumberCompanyinformationRoute } from '../routes'

const app = new OpenAPIHono()

export const chamberOfCommerceHandler = app.openapi(
  getChamberofcommerceChamberOfCommerceNumberCompanyinformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
