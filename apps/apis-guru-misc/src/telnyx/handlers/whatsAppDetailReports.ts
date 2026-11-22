import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWhatsappDetailRecordReportsIdRoute,
  getWhatsappDetailRecordReportsIdRoute,
  getWhatsappDetailRecordReportsRoute,
  postWhatsappDetailRecordReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const whatsAppDetailReportsHandler = app
  .openapi(getWhatsappDetailRecordReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhatsappDetailRecordReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWhatsappDetailRecordReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhatsappDetailRecordReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
