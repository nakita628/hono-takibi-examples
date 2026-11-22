import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UserCustomerAccountCreditCardInfoRoute,
  getV2UserCustomerAccountProfilePictureInfoRoute,
  getV2UserCustomerAccountRoute,
  postV2UserCustomerAccountActivateRoute,
  postV2UserCustomerAccountChangeEmailRoute,
  postV2UserCustomerAccountChangePasswordRoute,
  postV2UserCustomerAccountResendEmailActivationRoute,
  putV2UserCustomerAccountCompanyInfoRoute,
  putV2UserCustomerAccountCreditCardInfoRoute,
  putV2UserCustomerAccountPersonalInfoRoute,
  putV2UserCustomerAccountProfilePictureInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customer__AccountHandler = app
  .openapi(getV2UserCustomerAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerAccountActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerAccountChangeEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerAccountChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserCustomerAccountCompanyInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerAccountCreditCardInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserCustomerAccountCreditCardInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserCustomerAccountPersonalInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerAccountProfilePictureInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserCustomerAccountProfilePictureInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerAccountResendEmailActivationRoute, (c) => {
    throw new Error('Not implemented')
  })
