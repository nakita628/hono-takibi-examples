import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsNameRoute,
  getProjectsNameRoute,
  getProjectsRoute,
  postProjectsRoute,
  putProjectsNameRoute,
  putProjectsNameSendProjectSessionActionRoute,
  putProjectsNameStartProjectSessionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsNameSendProjectSessionActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsNameStartProjectSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
