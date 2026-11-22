import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1JobSearchallCompanyNameRoute, getApiV1JobSearchJobTitleRoute } from '../routes'

const app = new OpenAPIHono()

export const jobHandler = app
  .openapi(getApiV1JobSearchJobTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1JobSearchallCompanyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
