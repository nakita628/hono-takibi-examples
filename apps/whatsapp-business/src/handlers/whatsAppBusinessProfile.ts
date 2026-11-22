import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVersionPhoneNumberIDWhatsappBusinessProfileRoute,
  postVersionPhoneNumberIDWhatsappBusinessProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const whatsAppBusinessProfileHandler = app
  .openapi(getVersionPhoneNumberIDWhatsappBusinessProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDWhatsappBusinessProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
