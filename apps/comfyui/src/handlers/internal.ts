import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInternalFolderPathsRoute,
  getInternalLogsRawRoute,
  getInternalLogsRoute,
  patchInternalLogsSubscribeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const internalHandler = app
  .openapi(getInternalFolderPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternalLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInternalLogsRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInternalLogsSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
