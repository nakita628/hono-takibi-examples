import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOrganizationHealthResourceCollectionRoute,
  postOrganizationHealthRoute,
  postOrganizationInsightsRoute,
  postOrganizationInsightsSearchRoute,
  postOrganizationOverviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationHandler = app
  .openapi(postOrganizationHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationHealthResourceCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationInsightsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
