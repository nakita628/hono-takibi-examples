import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPhoneNumbersPhoneNumberIdVoicemailRoute,
  patchPhoneNumbersPhoneNumberIdVoicemailRoute,
  postPhoneNumbersPhoneNumberIdVoicemailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const voicemailHandler = app
  .openapi(getPhoneNumbersPhoneNumberIdVoicemailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneNumbersPhoneNumberIdVoicemailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumbersPhoneNumberIdVoicemailRoute, (c) => {
    throw new Error('Not implemented')
  })
