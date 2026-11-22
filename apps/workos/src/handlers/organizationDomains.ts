import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationDomainsIdRoute,
  getOrganizationDomainsIdRoute,
  postOrganizationDomainsIdVerifyRoute,
  postOrganizationDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationDomainsHandler = app
  .openapi(postOrganizationDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationDomainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationDomainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationDomainsIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
