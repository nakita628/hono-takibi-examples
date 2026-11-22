import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSipPhonesPhoneIdRoute,
  getSipPhonesRoute,
  patchSipPhonesPhoneIdRoute,
  postSipPhonesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sipPhoneHandler = app
  .openapi(getSipPhonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSipPhonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSipPhonesPhoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSipPhonesPhoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
