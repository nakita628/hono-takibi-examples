import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiFolderDownloadSharedFilePhpRoute,
  getApiFolderDownloadSharedFolderPhpRoute,
  getApiFolderGetShareFolderLinksPhpRoute,
  getApiFolderShareFolderPhpRoute,
  postApiFolderCreateShareFolderLinkPhpRoute,
  postApiFolderDeleteShareFolderLinkPhpRoute,
  postApiFolderUploadToSharedFolderPhpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharedFoldersHandler = app
  .openapi(postApiFolderCreateShareFolderLinkPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderDeleteShareFolderLinkPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderDownloadSharedFilePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderDownloadSharedFolderPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderGetShareFolderLinksPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFolderShareFolderPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFolderUploadToSharedFolderPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
