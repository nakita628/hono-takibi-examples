import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTemplatesTmplIdRoute,
  getTemplatesRoute,
  getTemplatesTmplIdRoute,
  postTemplatesRoute,
  postTemplatesTmplIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getTemplatesTmplIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTmplIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTemplatesTmplIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
