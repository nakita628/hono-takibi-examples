import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWhatsappUsersWhatsappUserIdRoute,
  patchWhatsappUsersWhatsappUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const whatsAppUsersHandler = app
  .openapi(getWhatsappUsersWhatsappUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWhatsappUsersWhatsappUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
