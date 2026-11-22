import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsProjectIdKeysKeyIdRoute,
  getV1ProjectsProjectIdKeysKeyIdRoute,
  getV1ProjectsProjectIdKeysRoute,
  postV1ProjectsProjectIdKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keysHandler = app
  .openapi(getV1ProjectsProjectIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
