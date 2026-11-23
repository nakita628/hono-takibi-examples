import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateReplaceRootVolumeTaskRoute,
  postActionCreateReplaceRootVolumeTaskRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateReplaceRootVolumeTaskHandler = app
  .openapi(getActionCreateReplaceRootVolumeTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateReplaceRootVolumeTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
