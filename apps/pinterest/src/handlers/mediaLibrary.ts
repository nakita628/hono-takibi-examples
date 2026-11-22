import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMediaLibraryBusinessesBusinessIdAssetsRoute,
  getMediaLibraryBusinessesBusinessIdAssetsAssetIdRoute,
  getMediaLibraryBusinessesBusinessIdAssetsRoute,
  patchMediaLibraryBusinessesBusinessIdAssetsRoute,
  postMediaLibraryBusinessesBusinessIdAssetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mediaLibraryHandler = app
  .openapi(getMediaLibraryBusinessesBusinessIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMediaLibraryBusinessesBusinessIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMediaLibraryBusinessesBusinessIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMediaLibraryBusinessesBusinessIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMediaLibraryBusinessesBusinessIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
