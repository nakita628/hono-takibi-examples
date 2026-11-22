import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsFilesSharingApiV1DeletedsharesRoute,
  postOcsV2PhpAppsFilesSharingApiV1DeletedsharesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deletedShareapiHandler = app
  .openapi(getOcsV2PhpAppsFilesSharingApiV1DeletedsharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesSharingApiV1DeletedsharesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
