import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsAppApiApiV1OccCommandRoute,
  getOcsV2PhpAppsAppApiApiV1OccCommandRoute,
  postOcsV2PhpAppsAppApiApiV1OccCommandRoute,
} from '../routes'

const app = new OpenAPIHono()

export const occCommandHandler = app
  .openapi(postOcsV2PhpAppsAppApiApiV1OccCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1OccCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1OccCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
