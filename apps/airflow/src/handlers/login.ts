import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2AuthCliMetadataRoute,
  getApiV2AuthLoginRoute,
  getApiV2AuthLogoutRoute,
} from '../routes'

const app = new OpenAPIHono()

export const loginHandler = app
  .openapi(getApiV2AuthLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthCliMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
