import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ParentChannelsRoute,
  getV1ParentPlatformsRoute,
  getV1ParentReleasesRoute,
  getV1ParentVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const platformsHandler = app
  .openapi(getV1ParentChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentPlatformsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
