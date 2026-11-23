import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePostureIntegrationsIdRoute,
  getPostureIntegrationsIdRoute,
  patchPostureIntegrationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postureHandler = app
  .openapi(getPostureIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPostureIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePostureIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
