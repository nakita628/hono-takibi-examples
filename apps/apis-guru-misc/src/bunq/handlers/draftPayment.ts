import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const draftPaymentHandler = app
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
