import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationDetailsOrganizationDetailIdRoute,
  getOrganizationDetailsRoute,
  postOrganizationDetailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationDetailsHandler = app
  .openapi(getOrganizationDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationDetailsOrganizationDetailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
