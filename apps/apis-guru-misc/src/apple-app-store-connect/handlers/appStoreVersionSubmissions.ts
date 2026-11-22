import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AppStoreVersionSubmissionsIdRoute,
  postV1AppStoreVersionSubmissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appStoreVersionSubmissionsHandler = app
  .openapi(postV1AppStoreVersionSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppStoreVersionSubmissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
