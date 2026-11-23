import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSharedLinksIdAssetsRoute,
  deleteSharedLinksIdRoute,
  getSharedLinksIdRoute,
  getSharedLinksMeRoute,
  getSharedLinksRoute,
  patchSharedLinksIdRoute,
  postSharedLinksLoginRoute,
  postSharedLinksRoute,
  putSharedLinksIdAssetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharedLinksHandler = app
  .openapi(getSharedLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharedLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharedLinksLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharedLinksMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSharedLinksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharedLinksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharedLinksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSharedLinksIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSharedLinksIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
