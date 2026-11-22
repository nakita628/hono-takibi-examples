import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4ProjectsIdMirrorPullRoute,
  postApiV4ProjectsIdMirrorPullRoute,
  putApiV4ProjectsIdMirrorPullRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectMirrorsHandler = app
  .openapi(postApiV4ProjectsIdMirrorPullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdMirrorPullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMirrorPullRoute, (c) => {
    throw new Error('Not implemented')
  })
