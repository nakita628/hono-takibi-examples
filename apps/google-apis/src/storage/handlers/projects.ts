import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdHmacKeysAccessIdRoute,
  getProjectsProjectIdHmacKeysAccessIdRoute,
  getProjectsProjectIdHmacKeysRoute,
  getProjectsProjectIdServiceAccountRoute,
  postProjectsProjectIdHmacKeysRoute,
  putProjectsProjectIdHmacKeysAccessIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getProjectsProjectIdHmacKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdHmacKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdHmacKeysAccessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdHmacKeysAccessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectIdHmacKeysAccessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdServiceAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
