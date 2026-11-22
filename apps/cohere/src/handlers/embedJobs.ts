import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1EmbedJobsIdRoute,
  getV1EmbedJobsRoute,
  postV1EmbedJobsIdCancelRoute,
  postV1EmbedJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const embedJobsHandler = app
  .openapi(postV1EmbedJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmbedJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmbedJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmbedJobsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
