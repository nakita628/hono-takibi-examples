import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRelationTuplesRoute,
  patchAdminRelationTuplesRoute,
  putAdminRelationTuplesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(deleteAdminRelationTuplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminRelationTuplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRelationTuplesRoute, (c) => {
    throw new Error('Not implemented')
  })
