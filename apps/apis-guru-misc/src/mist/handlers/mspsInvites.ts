import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1MspsMspIdInvitesInviteIdRoute,
  postApiV1MspsMspIdInvitesRoute,
  putApiV1MspsMspIdInvitesInviteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mspsInvitesHandler = app
  .openapi(postApiV1MspsMspIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MspsMspIdInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MspsMspIdInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
