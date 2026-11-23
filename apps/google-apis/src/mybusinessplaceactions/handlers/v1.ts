import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentPlaceActionLinksRoute,
  getV1PlaceActionTypeMetadataRoute,
  patchV1NameRoute,
  postV1ParentPlaceActionLinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1PlaceActionTypeMetadataRoute, (c) => {
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
  .openapi(getV1ParentPlaceActionLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentPlaceActionLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
