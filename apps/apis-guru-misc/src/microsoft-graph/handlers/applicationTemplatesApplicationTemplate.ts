import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApplicationTemplatesApplicationTemplateIdRoute,
  getApplicationTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationTemplatesApplicationTemplateHandler = app
  .openapi(getApplicationTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationTemplatesApplicationTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
