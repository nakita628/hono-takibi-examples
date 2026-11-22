import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFilesFileIdAppItemAssociationsRoute,
  getFoldersFolderIdAppItemAssociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appItemAssociationsHandler = app
  .openapi(getFilesFileIdAppItemAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoldersFolderIdAppItemAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
