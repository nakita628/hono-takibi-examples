import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceInvitesDeviceInviteIdRoute,
  getDeviceInvitesDeviceInviteIdRoute,
  postDeviceInvitesDashAcceptRoute,
  postDeviceInvitesDeviceInviteIdResendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceInvitesHandler = app
  .openapi(getDeviceInvitesDeviceInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceInvitesDeviceInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceInvitesDeviceInviteIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceInvitesDashAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
