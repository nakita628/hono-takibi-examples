import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2OrganizationSubscriptionsOrganizationSubscriptionIdRoute,
  getApiV2OrganizationsOrganizationIdSubscriptionsRoute,
  getApiV2OrganizationSubscriptionsOrganizationSubscriptionIdRoute,
  getApiV2OrganizationSubscriptionsRoute,
  getApiV2UsersUserIdOrganizationSubscriptionsRoute,
  postApiV2OrganizationSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationSubscriptionsHandler = app
  .openapi(getApiV2OrganizationSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrganizationSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationSubscriptionsOrganizationSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrganizationSubscriptionsOrganizationSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdOrganizationSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
