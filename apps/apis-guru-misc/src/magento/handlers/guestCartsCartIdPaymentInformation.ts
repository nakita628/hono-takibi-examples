import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1GuestCartsCartIdPaymentInformationRoute,
  postV1GuestCartsCartIdPaymentInformationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdPaymentInformationHandler = app
  .openapi(getV1GuestCartsCartIdPaymentInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestCartsCartIdPaymentInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
