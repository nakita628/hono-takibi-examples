import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDShareInviteMonetaryAccountResponseItemIdRoute,
  getUserUserIDShareInviteMonetaryAccountResponseRoute,
  putUserUserIDShareInviteMonetaryAccountResponseItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shareInviteMonetaryAccountResponseHandler = app
  .openapi(getUserUserIDShareInviteMonetaryAccountResponseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDShareInviteMonetaryAccountResponseItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDShareInviteMonetaryAccountResponseItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
