import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1AttributesRoute,
  getV1CategoriesBatchGetRoute,
  getV1CategoriesRoute,
  getV1ChainsSearchRoute,
  getV1NameGetGoogleUpdatedRoute,
  getV1NameRoute,
  getV1ParentLocationsRoute,
  patchV1NameRoute,
  postV1GoogleLocationsSearchRoute,
  postV1NameAssociateRoute,
  postV1NameClearLocationAssociationRoute,
  postV1ParentLocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1AttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CategoriesBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChainsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GoogleLocationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getV1ParentLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
