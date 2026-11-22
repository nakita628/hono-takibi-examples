import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSharesSharedDriveItemIdDriveItemContentRoute,
  getSharesSharedDriveItemIdDriveItemRoute,
  getSharesSharedDriveItemIdItemsDriveItemIdContentRoute,
  getSharesSharedDriveItemIdItemsDriveItemIdRoute,
  getSharesSharedDriveItemIdItemsRoute,
  getSharesSharedDriveItemIdRootContentRoute,
  getSharesSharedDriveItemIdRootRoute,
  putSharesSharedDriveItemIdDriveItemContentRoute,
  putSharesSharedDriveItemIdItemsDriveItemIdContentRoute,
  putSharesSharedDriveItemIdRootContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharesDriveItemHandler = app
  .openapi(getSharesSharedDriveItemIdDriveItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdDriveItemContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSharesSharedDriveItemIdDriveItemContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdItemsDriveItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdItemsDriveItemIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSharesSharedDriveItemIdItemsDriveItemIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdRootContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSharesSharedDriveItemIdRootContentRoute, (c) => {
    throw new Error('Not implemented')
  })
