import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTemplatesTemplateIdRoute,
  getTemplatesRoute,
  getTemplatesTemplateIdRoute,
  postTemplatesOutputRoute,
  postTemplatesRoute,
  postTemplatesTemplateIdCopyRoute,
  postTemplatesTemplateIdEditorRoute,
  postTemplatesTemplateIdOutputRoute,
  putTemplatesTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesOutputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateIdEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateIdOutputRoute, (c) => {
    throw new Error('Not implemented')
  })
