import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCssTemplateIndexRoute,
  deleteCssTemplatePkRoute,
  getCssTemplateIndexRoute,
  getCssTemplateInfoRoute,
  getCssTemplatePkRoute,
  getCssTemplateRelatedColumnNameRoute,
  postCssTemplateIndexRoute,
  putCssTemplatePkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cssTemplateHandler = app
  .openapi(deleteCssTemplateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCssTemplateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCssTemplateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCssTemplateInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCssTemplateRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCssTemplatePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCssTemplatePkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCssTemplatePkRoute, (c) => {
    throw new Error('Not implemented')
  })
