import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdOrganizationsIdRoute,
  getAppsAppIdOrganizationsIdRestoreRoute,
  getAppsAppIdOrganizationsIdRoute,
  getAppsAppIdOrganizationsRoute,
  postAppsAppIdOrganizationsBatchRoute,
  postAppsAppIdOrganizationsIdRoute,
  postAppsAppIdOrganizationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getAppsAppIdOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdOrganizationsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdOrganizationsIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
