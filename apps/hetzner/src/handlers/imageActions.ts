import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getImagesActionsIdRoute,
  getImagesActionsRoute,
  getImagesIdActionsActionIdRoute,
  getImagesIdActionsRoute,
  postImagesIdActionsChangeProtectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imageActionsHandler = app
  .openapi(getImagesActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesActionsIdRoute, (c) => {
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
