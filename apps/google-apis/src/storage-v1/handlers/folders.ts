import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBBucketFoldersFolderRoute,
  getBBucketFoldersFolderRoute,
  getBBucketFoldersRoute,
  postBBucketFoldersRoute,
  postBBucketFoldersSourceFolderRenameToFoldersDestinationFolderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const foldersHandler = app
  .openapi(getBBucketFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBBucketFoldersFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketFoldersFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketFoldersSourceFolderRenameToFoldersDestinationFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
