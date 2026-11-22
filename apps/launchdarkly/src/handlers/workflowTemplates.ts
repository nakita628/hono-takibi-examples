import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2TemplatesTemplateKeyRoute,
  getApiV2TemplatesRoute,
  postApiV2TemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowTemplatesHandler = app
  .openapi(getApiV2TemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TemplatesTemplateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
