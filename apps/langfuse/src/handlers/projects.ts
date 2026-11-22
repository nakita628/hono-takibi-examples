import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPublicProjectsProjectIdApiKeysApiKeyIdRoute,
  deleteApiPublicProjectsProjectIdRoute,
  getApiPublicProjectsProjectIdApiKeysRoute,
  getApiPublicProjectsRoute,
  postApiPublicProjectsProjectIdApiKeysRoute,
  postApiPublicProjectsRoute,
  putApiPublicProjectsProjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getApiPublicProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPublicProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicProjectsProjectIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicProjectsProjectIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicProjectsProjectIdApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
