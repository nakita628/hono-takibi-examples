import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpCloudAppsAppRoute,
  getOcsV2PhpCloudAppsAppRoute,
  getOcsV2PhpCloudAppsRoute,
  postOcsV2PhpCloudAppsAppRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app
  .openapi(getOcsV2PhpCloudAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudAppsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCloudAppsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpCloudAppsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
