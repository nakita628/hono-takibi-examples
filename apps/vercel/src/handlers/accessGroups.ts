import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdRoute,
  deleteV1AccessGroupsIdOrNameRoute,
  getV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdRoute,
  getV1AccessGroupsIdOrNameMembersRoute,
  getV1AccessGroupsIdOrNameProjectsRoute,
  getV1AccessGroupsIdOrNameRoute,
  getV1AccessGroupsRoute,
  patchV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdRoute,
  postV1AccessGroupsAccessGroupIdOrNameProjectsRoute,
  postV1AccessGroupsIdOrNameRoute,
  postV1AccessGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessGroupsHandler = app
  .openapi(getV1AccessGroupsIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccessGroupsIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccessGroupsIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccessGroupsIdOrNameMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccessGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccessGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccessGroupsIdOrNameProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccessGroupsAccessGroupIdOrNameProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
