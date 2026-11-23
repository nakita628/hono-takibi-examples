import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTemplatesIdRoute,
  getTemplatesFieldsRoute,
  getTemplatesIdRoute,
  getTemplatesRoute,
  postTemplatesIdRenderRoute,
  postTemplatesRoute,
  putTemplatesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesIdRenderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
