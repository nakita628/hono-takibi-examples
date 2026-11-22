import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1JobsRetryStatesCreateOrUpdateRoute, postV1JobsRetryStatesGetRoute } from '../routes'

const app = new OpenAPIHono()

export const jobRetryStatesHandler = app
  .openapi(postV1JobsRetryStatesCreateOrUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsRetryStatesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
