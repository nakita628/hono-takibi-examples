import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2UsersMeApiKeysKeyIdRoute,
  getApiV2UsersMeApiKeysRoute,
  postApiV2UsersMeApiKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app
  .openapi(getApiV2UsersMeApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersMeApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersMeApiKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
