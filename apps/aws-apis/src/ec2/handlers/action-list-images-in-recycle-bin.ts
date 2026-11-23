import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListImagesInRecycleBinRoute,
  postActionListImagesInRecycleBinRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionListImagesInRecycleBinHandler = app
  .openapi(getActionListImagesInRecycleBinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListImagesInRecycleBinRoute, (c) => {
    throw new Error('Not implemented')
  })
