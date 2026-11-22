import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3FoldersRoute, getV3FoldersSearchRoute, postV3FoldersRoute } from '../routes'

const app = new OpenAPIHono()

export const foldersHandler = app
  .openapi(getV3FoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3FoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3FoldersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
