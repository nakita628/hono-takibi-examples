import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OrganizationsOrganizationIdMessagingRoute,
  patchApiV1OrganizationsOrganizationIdMessagingRoute,
  postApiV1OrganizationsOrganizationIdMessagingEnqueueCustomMessageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagingHandler = app
  .openapi(getApiV1OrganizationsOrganizationIdMessagingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1OrganizationsOrganizationIdMessagingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrganizationsOrganizationIdMessagingEnqueueCustomMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
