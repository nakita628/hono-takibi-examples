import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPublicV1EmbeddedOrganizationsRoute,
  postPublicV1EmbeddedScopedTokenRoute,
  postPublicV1EmbeddedWidgetTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicHandler = app
  .openapi(postPublicV1EmbeddedWidgetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1EmbeddedScopedTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1EmbeddedOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
