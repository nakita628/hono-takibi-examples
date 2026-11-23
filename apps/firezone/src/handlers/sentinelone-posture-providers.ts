import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSentinelonePostureProvidersIdRoute,
  getSentinelonePostureProvidersIdRoute,
  getSentinelonePostureProvidersRoute,
  patchSentinelonePostureProvidersIdRoute,
  putSentinelonePostureProvidersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sentinelonePostureProvidersHandler = app
  .openapi(getSentinelonePostureProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSentinelonePostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSentinelonePostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSentinelonePostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSentinelonePostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
