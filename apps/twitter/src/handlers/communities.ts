import { OpenAPIHono } from '@hono/zod-openapi'
import { get2CommunitiesIdRoute, get2CommunitiesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const communitiesHandler = app
  .openapi(get2CommunitiesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2CommunitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
