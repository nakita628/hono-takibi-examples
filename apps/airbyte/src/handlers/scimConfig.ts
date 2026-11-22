import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1ScimConfigDisableRoute,
  postV1ScimConfigEnableRoute,
  postV1ScimConfigGetRoute,
  postV1ScimConfigRotateTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scimConfigHandler = app
  .openapi(postV1ScimConfigGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScimConfigEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScimConfigRotateTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScimConfigDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
