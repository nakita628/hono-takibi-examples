import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApplicationTemplatesApplicationTemplateIdRoute,
  getApplicationTemplatesCountRoute,
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
  .openapi(getApplicationTemplatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
