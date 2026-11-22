import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSharesSharedDriveItemIdDriveItemContentRoute,
  deleteSharesSharedDriveItemIdItemsDriveItemIdContentRoute,
  deleteSharesSharedDriveItemIdRootContentRoute,
  getSharesSharedDriveItemIdDriveItemContentRoute,
  getSharesSharedDriveItemIdDriveItemRoute,
  getSharesSharedDriveItemIdItemsCountRoute,
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
  .openapi(deleteSharesSharedDriveItemIdDriveItemContentRoute, (c) => {
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
  .openapi(deleteSharesSharedDriveItemIdItemsDriveItemIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesSharedDriveItemIdItemsCountRoute, (c) => {
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
  .openapi(deleteSharesSharedDriveItemIdRootContentRoute, (c) => {
    throw new Error('Not implemented')
  })
