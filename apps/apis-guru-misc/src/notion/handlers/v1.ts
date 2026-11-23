import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BlocksIdRoute,
  getV1BlocksIdChildrenRoute,
  getV1BlocksIdRoute,
  getV1CommentsRoute,
  getV1DatabasesIdRoute,
  getV1PagesIdRoute,
  getV1PagesPageIdPropertiesPropertyIdRoute,
  getV1UsersIdRoute,
  patchV1BlocksIdChildrenRoute,
  patchV1BlocksIdRoute,
  patchV1DatabasesIdRoute,
  patchV1PagesIdRoute,
  postV1DatabasesIdQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1BlocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BlocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BlocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BlocksIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BlocksIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatabasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DatabasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DatabasesIdQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PagesPageIdPropertiesPropertyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
