import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiGuidesIdRoute,
  getApiGuidesIdRoute,
  patchApiGuidesIdRoute,
  postApiGuidesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const guidesHandler = app
  .openapi(postApiGuidesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGuidesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiGuidesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiGuidesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
