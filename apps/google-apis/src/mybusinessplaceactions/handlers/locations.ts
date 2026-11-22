import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentPlaceActionLinksRoute,
  patchV1NameRoute,
  postV1ParentPlaceActionLinksRoute,
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
  .openapi(getV1ParentPlaceActionLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentPlaceActionLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
