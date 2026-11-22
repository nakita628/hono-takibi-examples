import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFoldersFolderIdGetSharedLinkRoute,
  getSharedItemsFoldersRoute,
  putFoldersFolderIdAddSharedLinkRoute,
  putFoldersFolderIdRemoveSharedLinkRoute,
  putFoldersFolderIdUpdateSharedLinkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharedLinksFoldersHandler = app
  .openapi(getSharedItemsFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoldersFolderIdGetSharedLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFoldersFolderIdAddSharedLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFoldersFolderIdUpdateSharedLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFoldersFolderIdRemoveSharedLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
