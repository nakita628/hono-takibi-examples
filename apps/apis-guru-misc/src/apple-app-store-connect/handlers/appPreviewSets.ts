import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AppPreviewSetsIdRoute,
  getV1AppPreviewSetsIdAppPreviewsRoute,
  getV1AppPreviewSetsIdRelationshipsAppPreviewsRoute,
  getV1AppPreviewSetsIdRoute,
  patchV1AppPreviewSetsIdRelationshipsAppPreviewsRoute,
  postV1AppPreviewSetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appPreviewSetsHandler = app
  .openapi(postV1AppPreviewSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppPreviewSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPreviewSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPreviewSetsIdAppPreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPreviewSetsIdRelationshipsAppPreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppPreviewSetsIdRelationshipsAppPreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
