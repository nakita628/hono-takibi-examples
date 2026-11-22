import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsFilesSharingApiV1ShareesRecommendedRoute,
  getOcsV2PhpAppsFilesSharingApiV1ShareesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shareesapiHandler = app
  .openapi(getOcsV2PhpAppsFilesSharingApiV1ShareesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsFilesSharingApiV1ShareesRecommendedRoute, (c) => {
    throw new Error('Not implemented')
  })
