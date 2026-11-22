import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getItemsItemIdRemoteImagesProvidersRoute,
  getItemsItemIdRemoteImagesRoute,
  postItemsItemIdRemoteImagesDownloadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const remoteImageHandler = app
  .openapi(getItemsItemIdRemoteImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdRemoteImagesDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdRemoteImagesProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
