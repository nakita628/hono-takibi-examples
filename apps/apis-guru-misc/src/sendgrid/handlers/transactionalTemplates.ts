import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTemplatesTemplateIdRoute,
  getTemplatesRoute,
  getTemplatesTemplateIdRoute,
  patchTemplatesTemplateIdRoute,
  postTemplatesRoute,
  postTemplatesTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionalTemplatesHandler = app
  .openapi(getTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
