import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1MagicLinksEmailInviteRoute,
  postV1MagicLinksEmailLoginOrCreateRoute,
  postV1MagicLinksEmailRevokeInviteRoute,
  postV1MagicLinksEmailSendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicLinksHandler = app
  .openapi(postV1MagicLinksEmailSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MagicLinksEmailLoginOrCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MagicLinksEmailInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MagicLinksEmailRevokeInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
