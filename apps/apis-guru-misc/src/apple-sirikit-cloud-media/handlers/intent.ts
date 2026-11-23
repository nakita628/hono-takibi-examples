import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIntentAddMediaRoute,
  postIntentPlayMediaRoute,
  postIntentUpdateMediaAffinityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const intentHandler = app
  .openapi(postIntentAddMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntentPlayMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntentUpdateMediaAffinityRoute, (c) => {
    throw new Error('Not implemented')
  })
