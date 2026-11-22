import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2HealthRoute,
  getV2TimestampRoute,
  getV2VersionRoute,
  getV3HealthRoute,
  getV3VersionRoute,
  postV2IndexRoute,
  postV2TokenRoute,
  postV3BatchRoute,
  postV3IndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ingestionHandler = app
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
  .openapi(postV3IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
