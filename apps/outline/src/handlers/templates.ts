import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postTemplatesCreateRoute,
  postTemplatesDeleteRoute,
  postTemplatesDuplicateRoute,
  postTemplatesInfoRoute,
  postTemplatesListRoute,
  postTemplatesRestoreRoute,
  postTemplatesUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(postTemplatesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
