import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1InvitationsIdRoute,
  getV1InvitationsIdRoute,
  getV1InvitationsRoute,
  postV1InvitationsIdAcceptRoute,
  postV1InvitationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invitationsHandler = app
  .openapi(getV1InvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1InvitationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvitationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvitationsIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
