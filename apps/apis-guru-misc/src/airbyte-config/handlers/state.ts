import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1StateCreateOrUpdateRoute, postV1StateGetRoute } from '../routes'

const app = new OpenAPIHono()

export const stateHandler = app
  .openapi(postV1StateCreateOrUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StateGetRoute, (c) => {
    throw new Error('Not implemented')
  })
