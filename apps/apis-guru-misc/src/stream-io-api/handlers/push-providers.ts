import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePushProvidersTypeNameRoute,
  getPushProvidersRoute,
  postPushProvidersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pushProvidersHandler = app
  .openapi(getPushProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPushProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePushProvidersTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
