import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTemplatesIdRoute,
  getTemplatesIdRoute,
  getTemplatesRoute,
  patchTemplatesIdRoute,
  postTemplatesIdDuplicateRoute,
  postTemplatesIdPublishRoute,
  postTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(postTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
