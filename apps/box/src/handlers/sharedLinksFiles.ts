import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFilesFileIdGetSharedLinkRoute,
  getSharedItemsRoute,
  putFilesFileIdAddSharedLinkRoute,
  putFilesFileIdRemoveSharedLinkRoute,
  putFilesFileIdUpdateSharedLinkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharedLinksFilesHandler = app
  .openapi(getSharedItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdGetSharedLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFilesFileIdAddSharedLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFilesFileIdUpdateSharedLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFilesFileIdRemoveSharedLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
