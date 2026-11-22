import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberIdRoute,
  deletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersRoute,
  patchPhoneAutoReceptionistsAutoReceptionistIdRoute,
  postPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersRoute,
  postPhoneAutoReceptionistsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneAutoReceptionistsHandler = app
  .openapi(postPhoneAutoReceptionistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneAutoReceptionistsAutoReceptionistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
