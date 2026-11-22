import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1FilesFileKeyVariablesLocalRoute,
  getV1FilesFileKeyVariablesPublishedRoute,
  postV1FilesFileKeyVariablesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const variablesHandler = app
  .openapi(getV1FilesFileKeyVariablesLocalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyVariablesPublishedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FilesFileKeyVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
