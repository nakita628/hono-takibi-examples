import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1NegotiableCartsCartIdPaymentInformationRoute,
  postV1NegotiableCartsCartIdPaymentInformationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const negotiableCartsCartIdPaymentInformationHandler = app
  .openapi(getV1NegotiableCartsCartIdPaymentInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NegotiableCartsCartIdPaymentInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
