import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSophosPostureProvidersIdRoute,
  getSophosPostureProvidersIdRoute,
  getSophosPostureProvidersRoute,
  patchSophosPostureProvidersIdRoute,
  putSophosPostureProvidersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sophosPostureProvidersHandler = app
  .openapi(getSophosPostureProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSophosPostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSophosPostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSophosPostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSophosPostureProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
