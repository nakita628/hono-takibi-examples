import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWhatsappMediaWhatsappUserIdMediaIdRoute,
  getWhatsappMediaWhatsappUserIdMediaIdRoute,
  postWhatsappMediaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const whatsappMediaHandler = app
  .openapi(postWhatsappMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWhatsappMediaWhatsappUserIdMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhatsappMediaWhatsappUserIdMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
