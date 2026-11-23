import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1alpha1NameRoute,
  getV1alpha1NameRoute,
  getV1alpha1ParentRowsRoute,
  getV1alpha1TablesRoute,
  getV1alpha1WorkspacesRoute,
  patchV1alpha1NameRoute,
  postV1alpha1ParentRowsBatchCreateRoute,
  postV1alpha1ParentRowsBatchDeleteRoute,
  postV1alpha1ParentRowsBatchUpdateRoute,
  postV1alpha1ParentRowsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1alpha1Handler = app
  .openapi(getV1alpha1TablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1WorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentRowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentRowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentRowsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentRowsBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentRowsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
