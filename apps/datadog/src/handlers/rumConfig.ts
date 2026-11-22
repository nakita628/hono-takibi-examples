import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2RumConfigRoute,
  patchApiV2RumConfigRoute,
  postApiV2RumConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rumConfigHandler = app
  .openapi(getApiV2RumConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2RumConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RumConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
