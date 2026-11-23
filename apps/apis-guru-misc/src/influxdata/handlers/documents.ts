import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDocumentsTemplatesTemplateIDLabelsLabelIDRoute,
  deleteDocumentsTemplatesTemplateIDRoute,
  getDocumentsTemplatesRoute,
  getDocumentsTemplatesTemplateIDLabelsRoute,
  getDocumentsTemplatesTemplateIDRoute,
  postDocumentsTemplatesRoute,
  postDocumentsTemplatesTemplateIDLabelsRoute,
  putDocumentsTemplatesTemplateIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(getDocumentsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDocumentsTemplatesTemplateIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsTemplatesTemplateIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDocumentsTemplatesTemplateIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsTemplatesTemplateIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsTemplatesTemplateIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDocumentsTemplatesTemplateIDLabelsLabelIDRoute, (c) => {
    throw new Error('Not implemented')
  })
