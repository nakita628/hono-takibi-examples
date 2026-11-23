import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1NotesRoute,
  postV1NotesRoute,
  postV1ParentPermissionsBatchCreateRoute,
  postV1ParentPermissionsBatchDeleteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1NotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentPermissionsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentPermissionsBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
