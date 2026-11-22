import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SavedGroupsIdRoute,
  deleteV1SavedGroupsIdUploadsVersionRoute,
  getV1SavedGroupsIdReferencesRoute,
  getV1SavedGroupsIdRoute,
  getV1SavedGroupsIdUploadsRoute,
  getV1SavedGroupsIdUploadsVersionRoute,
  getV1SavedGroupsRoute,
  postV1SavedGroupsIdArchiveRoute,
  postV1SavedGroupsIdRoute,
  postV1SavedGroupsIdUnarchiveRoute,
  postV1SavedGroupsIdUploadsRoute,
  postV1SavedGroupsIdUploadsVersionLoadsRoute,
  postV1SavedGroupsIdUploadUrlRoute,
  postV1SavedGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const savedGroupsHandler = app
  .openapi(getV1SavedGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SavedGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SavedGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SavedGroupsIdReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SavedGroupsIdUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsIdUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsIdUploadUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsIdUploadsVersionLoadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SavedGroupsIdUploadsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SavedGroupsIdUploadsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
