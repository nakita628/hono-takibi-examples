import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRelationTuplesRoute,
  getNamespacesRoute,
  getRelationTuplesRoute,
  patchAdminRelationTuplesRoute,
  postOplSyntaxCheckRoute,
  putAdminRelationTuplesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const relationshipHandler = app
  .openapi(deleteAdminRelationTuplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminRelationTuplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRelationTuplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOplSyntaxCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRelationTuplesRoute, (c) => {
    throw new Error('Not implemented')
  })
