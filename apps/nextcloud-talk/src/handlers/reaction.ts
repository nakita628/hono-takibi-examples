import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRoute,
  getOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reactionHandler = app
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
