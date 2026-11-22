import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiQuicksearchRoute, postApiQuicksearchRoute } from '../routes'

const app = new OpenAPIHono()

export const repoSearchHandler = app
  .openapi(getApiQuicksearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiQuicksearchRoute, (c) => {
    throw new Error('Not implemented')
  })
