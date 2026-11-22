import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkspaceSlugMembersMemberSlugActivitiesIdRoute,
  getWorkspaceSlugActivitiesIdRoute,
  getWorkspaceSlugActivitiesRoute,
  getWorkspaceSlugMembersMemberSlugActivitiesRoute,
  getWorkspaceSlugOrganizationsOrganizationIdActivitiesRoute,
  postWorkspaceSlugActivitiesRoute,
  postWorkspaceSlugMembersMemberSlugActivitiesRoute,
  putWorkspaceSlugMembersMemberSlugActivitiesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const activitiesHandler = app
  .openapi(getWorkspaceSlugActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspaceSlugActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugActivitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugMembersMemberSlugActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspaceSlugMembersMemberSlugActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspaceSlugMembersMemberSlugActivitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspaceSlugMembersMemberSlugActivitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugOrganizationsOrganizationIdActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
