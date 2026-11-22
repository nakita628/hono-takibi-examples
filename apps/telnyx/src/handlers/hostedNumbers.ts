import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMessagingHostedNumberOrdersIdRoute,
  deleteMessagingHostedNumbersIdRoute,
  getMessagingHostedNumberOrdersIdRoute,
  getMessagingHostedNumberOrdersRoute,
  postMessagingHostedNumberOrdersEligibilityNumbersCheckRoute,
  postMessagingHostedNumberOrdersIdActionsFileUploadRoute,
  postMessagingHostedNumberOrdersIdValidationCodesRoute,
  postMessagingHostedNumberOrdersIdVerificationCodesRoute,
  postMessagingHostedNumberOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hostedNumbersHandler = app
  .openapi(getMessagingHostedNumberOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingHostedNumberOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingHostedNumberOrdersEligibilityNumbersCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessagingHostedNumberOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingHostedNumberOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingHostedNumberOrdersIdActionsFileUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingHostedNumberOrdersIdValidationCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingHostedNumberOrdersIdVerificationCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessagingHostedNumbersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
