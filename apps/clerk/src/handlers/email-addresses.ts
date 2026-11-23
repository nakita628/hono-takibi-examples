import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmailAddressesEmailAddressIdRoute,
  getEmailAddressesEmailAddressIdRoute,
  patchEmailAddressesEmailAddressIdRoute,
  postEmailAddressesEmailAddressIdAttemptVerificationRoute,
  postEmailAddressesEmailAddressIdPrepareVerificationRoute,
  postEmailAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailAddressesHandler = app
  .openapi(postEmailAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailAddressesEmailAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailAddressesEmailAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmailAddressesEmailAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailAddressesEmailAddressIdPrepareVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailAddressesEmailAddressIdAttemptVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
