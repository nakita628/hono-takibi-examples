import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVerifiedNumbersPhoneNumberRoute,
  getVerifiedNumbersPhoneNumberRoute,
  getVerifiedNumbersRoute,
  postVerifiedNumbersPhoneNumberActionsVerifyRoute,
  postVerifiedNumbersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const verifiedNumbersHandler = app
  .openapi(getVerifiedNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerifiedNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVerifiedNumbersPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVerifiedNumbersPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerifiedNumbersPhoneNumberActionsVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
