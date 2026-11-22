import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2InvoicingTemplatesTemplateIdRoute,
  getV2InvoicingTemplatesRoute,
  getV2InvoicingTemplatesTemplateIdRoute,
  postV2InvoicingTemplatesRoute,
  putV2InvoicingTemplatesTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getV2InvoicingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InvoicingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InvoicingTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2InvoicingTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2InvoicingTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
