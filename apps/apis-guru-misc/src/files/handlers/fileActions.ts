import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFileActionsMetadataPathRoute,
  postFileActionsBeginUploadPathRoute,
  postFileActionsCopyPathRoute,
  postFileActionsMovePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fileActionsHandler = app
  .openapi(postFileActionsBeginUploadPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileActionsCopyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileActionsMetadataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileActionsMovePathRoute, (c) => {
    throw new Error('Not implemented')
  })
