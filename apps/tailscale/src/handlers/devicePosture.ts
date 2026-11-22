import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePostureIntegrationsIdRoute,
  getPostureIntegrationsIdRoute,
  getTailnetTailnetPostureIntegrationsRoute,
  patchPostureIntegrationsIdRoute,
  postTailnetTailnetPostureIntegrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicePostureHandler = app
  .openapi(getTailnetTailnetPostureIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetPostureIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostureIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPostureIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePostureIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
