import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2WhatsappMessageTemplatesIdRoute,
  deleteWhatsappMessageTemplatesIdRoute,
  getV2WhatsappMessageTemplatesIdRoute,
  getV2WhatsappMessageTemplatesRoute,
  getWhatsappMessageTemplatesIdRoute,
  getWhatsappMessageTemplatesRoute,
  patchV2WhatsappMessageTemplatesIdRoute,
  patchWhatsappMessageTemplatesIdRoute,
  postV2WhatsappMessageTemplatesRoute,
  postWhatsappMessageTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const whatsappMessageTemplatesHandler = app
  .openapi(getV2WhatsappMessageTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WhatsappMessageTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WhatsappMessageTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WhatsappMessageTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2WhatsappMessageTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhatsappMessageTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhatsappMessageTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWhatsappMessageTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhatsappMessageTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWhatsappMessageTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
