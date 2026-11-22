import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVersionPhoneNumberIDMessageQrdlsQRCodeIDRoute,
  getVersionPhoneNumberIDMessageQrdlsQRCodeIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const individualQRCodeHandler = app
  .openapi(getVersionPhoneNumberIDMessageQrdlsQRCodeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionPhoneNumberIDMessageQrdlsQRCodeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
