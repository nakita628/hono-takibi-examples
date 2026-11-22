import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminPropertyLabelsIdRoute,
  getAdminPropertyLabelsIdRoute,
  getAdminPropertyLabelsRoute,
  postAdminPropertyLabelsBatchRoute,
  postAdminPropertyLabelsIdRoute,
  postAdminPropertyLabelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const propertyLabelsHandler = app
  .openapi(getAdminPropertyLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPropertyLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPropertyLabelsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPropertyLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPropertyLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminPropertyLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
