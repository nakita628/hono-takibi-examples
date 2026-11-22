import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postTargetsActivateIndexRoute,
  postTargetsArchivedIndexRoute,
  postTargetsArchiveIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const archiveHandler = app
  .openapi(postTargetsActivateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsArchiveIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsArchivedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
