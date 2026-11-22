import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirDirIdPhoneNumbersRoute,
  getDirDirIdPhoneNumbersRoute,
  postDirDirIdPhoneNumbersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneNumbersHandler = app
  .openapi(deleteDirDirIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirDirIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirDirIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
