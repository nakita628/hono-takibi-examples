import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSchemasFullNameRoute,
  getSchemasFullNameRoute,
  getSchemasRoute,
  patchSchemasFullNameRoute,
  postSchemasRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schemasHandler = app
  .openapi(postSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemasFullNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSchemasFullNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSchemasFullNameRoute, (c) => {
    throw new Error('Not implemented')
  })
