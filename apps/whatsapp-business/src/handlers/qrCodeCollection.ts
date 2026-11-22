import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVersionPhoneNumberIDMessageQrdlsRoute,
  postVersionPhoneNumberIDMessageQrdlsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const qrCodeCollectionHandler = app
  .openapi(getVersionPhoneNumberIDMessageQrdlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDMessageQrdlsRoute, (c) => {
    throw new Error('Not implemented')
  })
