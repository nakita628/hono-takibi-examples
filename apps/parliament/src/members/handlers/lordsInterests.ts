import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiLordsInterestsRegisterRoute, getApiLordsInterestsStaffRoute } from '../routes'

const app = new OpenAPIHono()

export const lordsInterestsHandler = app
  .openapi(getApiLordsInterestsRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLordsInterestsStaffRoute, (c) => {
    throw new Error('Not implemented')
  })
