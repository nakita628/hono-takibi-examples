import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTemplatesIdRoute,
  getTemplatesIdPreviewRoute,
  getTemplatesIdRoute,
  getTemplatesRoute,
  postTemplatesPreviewRoute,
  postTemplatesRoute,
  putTemplatesIdDefaultRoute,
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
  .openapi(postTemplatesPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTemplatesIdDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
