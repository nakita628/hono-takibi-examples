import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDShareInviteMonetaryAccountInquiryItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDShareInviteMonetaryAccountInquiryRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDShareInviteMonetaryAccountInquiryRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDShareInviteMonetaryAccountInquiryItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shareInviteMonetaryAccountInquiryHandler = app
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDShareInviteMonetaryAccountInquiryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDShareInviteMonetaryAccountInquiryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDShareInviteMonetaryAccountInquiryItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDShareInviteMonetaryAccountInquiryItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
