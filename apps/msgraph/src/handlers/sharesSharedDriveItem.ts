import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSharesSharedDriveItemIdRoute,
  getSharesCountRoute,
  getSharesRoute,
  getSharesSharedDriveItemIdRoute,
  patchSharesSharedDriveItemIdRoute,
  postSharesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharesSharedDriveItemHandler = app
  .openapi(getSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharesSharedDriveItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSharesSharedDriveItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
