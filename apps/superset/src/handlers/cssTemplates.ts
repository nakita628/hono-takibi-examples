import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1CssTemplateIndexRoute,
  deleteApiV1CssTemplatePkRoute,
  getApiV1CssTemplateIndexRoute,
  getApiV1CssTemplateInfoRoute,
  getApiV1CssTemplatePkRoute,
  getApiV1CssTemplateRelatedColumnNameRoute,
  postApiV1CssTemplateIndexRoute,
  putApiV1CssTemplatePkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cssTemplatesHandler = app
  .openapi(deleteApiV1CssTemplateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CssTemplateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CssTemplateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CssTemplateInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CssTemplateRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CssTemplatePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CssTemplatePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CssTemplatePkRoute, (c) => {
    throw new Error('Not implemented')
  })
