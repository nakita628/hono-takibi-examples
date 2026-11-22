import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFoldersIdRoute,
  getFoldersIdRoute,
  getFoldersRoute,
  postFoldersRoute,
  putFoldersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const foldersHandler = app
  .openapi(getFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
