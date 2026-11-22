import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVersionWhatsAppBusinessProfileIDRoute,
  postVersionWhatsAppBusinessProfileIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const whatsAppBusinessProfilesHandler = app
  .openapi(getVersionWhatsAppBusinessProfileIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWhatsAppBusinessProfileIDRoute, (c) => {
    throw new Error('Not implemented')
  })
