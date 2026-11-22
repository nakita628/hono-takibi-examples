import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsIdWebhooksRoute,
  getProjectsIdWebhooksRoute,
  postProjectsIdWebhooksRoute,
  putProjectsIdWebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectWebhooksHandler = app
  .openapi(deleteProjectsIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
