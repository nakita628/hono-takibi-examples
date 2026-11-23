import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFoldersIdRoute,
  deleteFoldersRoute,
  getFoldersIdRoute,
  getFoldersRoute,
  patchFoldersIdRoute,
  patchFoldersRoute,
  postFoldersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const foldersHandler = app
  .openapi(getFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFoldersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
