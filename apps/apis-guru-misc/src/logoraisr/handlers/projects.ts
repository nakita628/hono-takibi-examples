import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsIndexRoute,
  getProjectsProjectNumberIndexRoute,
  postProjectsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getProjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectNumberIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
