import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminProductOptionsIdRoute,
  deleteAdminProductOptionsIdValuesValueIdRoute,
  getAdminProductOptionsIdRoute,
  getAdminProductOptionsIdValuesRoute,
  getAdminProductOptionsIdValuesValueIdRoute,
  getAdminProductOptionsRoute,
  postAdminProductOptionsIdRoute,
  postAdminProductOptionsIdValuesValueIdRoute,
  postAdminProductOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productOptionsHandler = app
  .openapi(getAdminProductOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminProductOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductOptionsIdValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductOptionsIdValuesValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductOptionsIdValuesValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminProductOptionsIdValuesValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
