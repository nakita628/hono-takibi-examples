import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameGetGoogleUpdatedRoute,
  getV1NameRoute,
  patchV1NameRoute,
  postV1NameAssociateRoute,
  postV1NameClearLocationAssociationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameAssociateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameClearLocationAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameGetGoogleUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
