import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIndexPhpAppsOauth2AuthorizeRoute,
  postIndexPhpAppsOauth2ApiV1TokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexPhpHandler = app
  .openapi(getIndexPhpAppsOauth2AuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexPhpAppsOauth2ApiV1TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
