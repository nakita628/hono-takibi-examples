import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdProjectsIdRoute,
  getUserprofilesProfileIdProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getUserprofilesProfileIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
