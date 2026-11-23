import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteImagesIdRoute,
  getImagesActionsIdRoute,
  getImagesActionsRoute,
  getImagesIdActionsActionIdRoute,
  getImagesIdActionsRoute,
  getImagesIdRoute,
  getImagesRoute,
  postImagesIdActionsChangeProtectionRoute,
  putImagesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app
  .openapi(getImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImagesIdActionsChangeProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesIdActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
