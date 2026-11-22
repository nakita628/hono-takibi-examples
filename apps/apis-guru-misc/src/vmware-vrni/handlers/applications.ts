import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsApplicationsIdRoute,
  deleteGroupsApplicationsIdTiersTierIdRoute,
  getGroupsApplicationsIdRoute,
  getGroupsApplicationsIdTiersRoute,
  getGroupsApplicationsIdTiersTierIdRoute,
  getGroupsApplicationsRoute,
  getGroupsTiersTierIdRoute,
  postGroupsApplicationsIdTiersRoute,
  postGroupsApplicationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app
  .openapi(getGroupsApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsApplicationsIdTiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsApplicationsIdTiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsApplicationsIdTiersTierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsApplicationsIdTiersTierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsTiersTierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
