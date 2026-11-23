import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDiscoursePostEventEventsIcsRoute,
  getDiscoursePostEventEventsJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const discoursePostEventHandler = app
  .openapi(getDiscoursePostEventEventsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoursePostEventEventsIcsRoute, (c) => {
    throw new Error('Not implemented')
  })
