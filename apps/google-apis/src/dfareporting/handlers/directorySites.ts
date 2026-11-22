import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdDirectorySitesIdRoute,
  getUserprofilesProfileIdDirectorySitesRoute,
  postUserprofilesProfileIdDirectorySitesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directorySitesHandler = app
  .openapi(getUserprofilesProfileIdDirectorySitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdDirectorySitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdDirectorySitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
