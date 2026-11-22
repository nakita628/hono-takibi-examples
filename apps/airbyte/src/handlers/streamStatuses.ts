import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1StreamStatusesCreateRoute,
  postV1StreamStatusesLatestPerRunStateRoute,
  postV1StreamStatusesListRoute,
  postV1StreamStatusesUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const streamStatusesHandler = app
  .openapi(postV1StreamStatusesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StreamStatusesLatestPerRunStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StreamStatusesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StreamStatusesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
