import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugNotificationsActionsIndexRoute,
  postOrganizationsOrganizationIdOrSlugNotificationsActionsIndexRoute,
  putOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spikeProtectionHandler = app
  .openapi(getOrganizationsOrganizationIdOrSlugNotificationsActionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugNotificationsActionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
