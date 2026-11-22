import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getImagesIdActionsActionIdRoute,
  getImagesIdActionsRoute,
  postImagesIdActionsChangeProtectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imageActionsHandler = app
  .openapi(getImagesIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImagesIdActionsChangeProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesIdActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
