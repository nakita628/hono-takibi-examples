import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePhoneNumberPhoneNumberIdContactFlowInstanceIdRoute,
  deletePhoneNumberPhoneNumberIdRoute,
  getPhoneNumberPhoneNumberIdRoute,
  postPhoneNumberClaimRoute,
  postPhoneNumberListRoute,
  postPhoneNumberSearchAvailableRoute,
  putPhoneNumberPhoneNumberIdContactFlowRoute,
  putPhoneNumberPhoneNumberIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneNumberHandler = app
  .openapi(putPhoneNumberPhoneNumberIdContactFlowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumberClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumberPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneNumberPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPhoneNumberPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneNumberPhoneNumberIdContactFlowInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumberListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumberSearchAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
