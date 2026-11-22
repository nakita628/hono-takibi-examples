import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiFileGetTrashItemsPhpRoute,
  postApiFileDeleteTrashFilesPhpRoute,
  postApiFileRestoreFilesPhpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trashHandler = app
  .openapi(postApiFileDeleteTrashFilesPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileGetTrashItemsPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileRestoreFilesPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
