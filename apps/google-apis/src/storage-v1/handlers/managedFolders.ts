import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBBucketManagedFoldersManagedFolderRoute,
  getBBucketManagedFoldersManagedFolderIamRoute,
  getBBucketManagedFoldersManagedFolderIamTestPermissionsRoute,
  getBBucketManagedFoldersManagedFolderRoute,
  getBBucketManagedFoldersRoute,
  postBBucketManagedFoldersRoute,
  putBBucketManagedFoldersManagedFolderIamRoute,
} from '../routes'

const app = new OpenAPIHono()

export const managedFoldersHandler = app
  .openapi(getBBucketManagedFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketManagedFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBBucketManagedFoldersManagedFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketManagedFoldersManagedFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketManagedFoldersManagedFolderIamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBBucketManagedFoldersManagedFolderIamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketManagedFoldersManagedFolderIamTestPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
