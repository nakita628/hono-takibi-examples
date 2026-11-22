import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVersionPhoneNumberIDWhatsappCommerceSettingsRoute,
  postVersionPhoneNumberIDWhatsappCommerceSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commerceSettingsHandler = app
  .openapi(getVersionPhoneNumberIDWhatsappCommerceSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDWhatsappCommerceSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
