import { OpenAPIHono } from '@hono/zod-openapi'
import { getPollsRoute, patchPollsRoute, postPollsRoute } from '../routes'

const app = new OpenAPIHono()

export const pollsHandler = app
  .openapi(getPollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPollsRoute, (c) => {
    throw new Error('Not implemented')
  })
