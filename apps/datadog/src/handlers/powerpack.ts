import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2PowerpacksPowerpackIdRoute,
  getApiV2PowerpacksPowerpackIdRoute,
  getApiV2PowerpacksRoute,
  patchApiV2PowerpacksPowerpackIdRoute,
  postApiV2PowerpacksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const powerpackHandler = app
  .openapi(getApiV2PowerpacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PowerpacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PowerpacksPowerpackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PowerpacksPowerpackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2PowerpacksPowerpackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
