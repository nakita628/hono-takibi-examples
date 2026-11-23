import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublisherAccountIdProfilesRoute } from '../routes'

const app = new OpenAPIHono()

export const publisherHandler = app.openapi(getPublisherAccountIdProfilesRoute, (c) => {
  throw new Error('Not implemented')
})
