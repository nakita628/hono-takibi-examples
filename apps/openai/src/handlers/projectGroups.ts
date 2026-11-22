import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationProjectsProjectIdGroupsGroupIdRoute,
  getOrganizationProjectsProjectIdGroupsGroupIdRoute,
  getOrganizationProjectsProjectIdGroupsRoute,
  postOrganizationProjectsProjectIdGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectGroupsHandler = app
  .openapi(getOrganizationProjectsProjectIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationProjectsProjectIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
