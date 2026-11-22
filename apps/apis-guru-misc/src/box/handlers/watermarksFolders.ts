import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFoldersFolderIdWatermarkRoute,
  getFoldersFolderIdWatermarkRoute,
  putFoldersFolderIdWatermarkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const watermarksFoldersHandler = app
  .openapi(deleteFoldersFolderIdWatermarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoldersFolderIdWatermarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFoldersFolderIdWatermarkRoute, (c) => {
    throw new Error('Not implemented')
  })
