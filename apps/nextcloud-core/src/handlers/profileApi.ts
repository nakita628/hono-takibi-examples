import { OpenAPIHono } from '@hono/zod-openapi'
import { getOcsV2PhpProfileTargetUserIdRoute, putOcsV2PhpProfileTargetUserIdRoute } from '../routes'

const app = new OpenAPIHono()

export const profileApiHandler = app
  .openapi(putOcsV2PhpProfileTargetUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpProfileTargetUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
