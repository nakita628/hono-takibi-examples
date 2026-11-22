import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePhoneNumberIdRoute,
  getPhoneNumberIdRoute,
  getPhoneNumberRoute,
  getV2PhoneNumberRoute,
  patchPhoneNumberIdRoute,
  postPhoneNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneNumbersHandler = app
  .openapi(postPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
