import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationRoute,
  getOrganizationSearchRoute,
  postOrganizationSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationHandler = app
  .openapi(getOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
