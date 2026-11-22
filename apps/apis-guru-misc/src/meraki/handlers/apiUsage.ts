import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsOrganizationIdApiRequestsOverviewRoute,
  getOrganizationsOrganizationIdApiRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiUsageHandler = app
  .openapi(getOrganizationsOrganizationIdApiRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApiRequestsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
