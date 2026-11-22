import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWhatsappHostedSignupsIdRoute,
  getWhatsappHostedSignupsRoute,
  getWhatsappSignupIdStatusRoute,
  getWhatsappSignupRoute,
  postWhatsappHostedSignupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const whatsappSignupHandler = app
  .openapi(getWhatsappHostedSignupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhatsappHostedSignupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhatsappHostedSignupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhatsappSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhatsappSignupIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
