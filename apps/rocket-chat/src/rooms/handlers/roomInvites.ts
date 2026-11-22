import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1RemoveInviteIdRoute,
  getApiV1ListInvitesRoute,
  postApiV1FindOrCreateInviteRoute,
  postApiV1UseInviteTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roomInvitesHandler = app
  .openapi(postApiV1FindOrCreateInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ListInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RemoveInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UseInviteTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
