import { OpenAPIHono } from '@hono/zod-openapi'
import { getCompanyRoute, getCompanySearchRoute, postCompanySearchRoute } from '../routes'

const app = new OpenAPIHono()

export const companyHandler = app
  .openapi(getCompanyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompanySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
