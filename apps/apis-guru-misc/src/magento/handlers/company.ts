import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CompanyIndexRoute, postV1CompanyIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const companyHandler = app
  .openapi(getV1CompanyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CompanyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
