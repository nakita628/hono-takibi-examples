import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChannelFoldersRoute,
  patchChannelFoldersChannelFolderIdRoute,
  patchChannelFoldersRoute,
  postChannelFoldersCreateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelFoldersHandler = app
  .openapi(postChannelFoldersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChannelFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChannelFoldersChannelFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
