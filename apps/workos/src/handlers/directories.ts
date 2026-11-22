import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoriesIdRoute,
  getDirectoriesIdRoute,
  getDirectoriesRoute,
  postDirectoriesIdSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoriesHandler = app
  .openapi(getDirectoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoriesIdSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
