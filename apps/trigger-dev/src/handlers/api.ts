import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV1EventsRoute,
  postApiV3BatchesBatchIdItemsRoute,
  postApiV3BatchesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiV1EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3BatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3BatchesBatchIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
