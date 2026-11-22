import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getImagesRemoteRoute,
  getItemsItemIdRemoteImagesProvidersRoute,
  getItemsItemIdRemoteImagesRoute,
  postItemsItemIdRemoteImagesDownloadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const remoteImageHandler = app
  .openapi(getImagesRemoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdRemoteImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdRemoteImagesDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdRemoteImagesProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
