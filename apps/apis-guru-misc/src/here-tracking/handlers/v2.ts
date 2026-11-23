import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2HealthRoute,
  getV2TimestampRoute,
  getV2VersionRoute,
  postV2IndexRoute,
  postV2TokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TimestampRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
