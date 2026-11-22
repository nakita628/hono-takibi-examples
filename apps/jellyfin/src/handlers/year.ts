import { OpenAPIHono } from '@hono/zod-openapi'
import { getYearsRoute, getYearsYearRoute } from '../routes'

const app = new OpenAPIHono()

export const yearHandler = app
  .openapi(getYearsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYearsYearRoute, (c) => {
    throw new Error('Not implemented')
  })
