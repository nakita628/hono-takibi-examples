import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsProjectIdInvitesEmailRoute,
  getV1ProjectsProjectIdInvitesRoute,
  postV1ProjectsProjectIdInvitesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invitesHandler = app
  .openapi(getV1ProjectsProjectIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdInvitesEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
