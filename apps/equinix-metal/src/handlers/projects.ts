import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsIdRoute,
  getProjectsIdCustomdataRoute,
  getProjectsIdRoute,
  getProjectsProjectIdInvitationsRoute,
  getProjectsProjectIdIpsIdCustomdataRoute,
  getProjectsProjectIdMembershipsRoute,
  getProjectsRoute,
  postProjectsIdTransfersRoute,
  postProjectsProjectIdInvitationsRoute,
  postProjectsRoute,
  putProjectsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdCustomdataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdIpsIdCustomdataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
