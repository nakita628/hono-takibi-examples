import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountRoute, getOrganizationActivitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(getAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
