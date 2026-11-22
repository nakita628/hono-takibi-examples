import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsMineRoute, postV1CartsMineRoute, putV1CartsMineRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineHandler = app
  .openapi(getV1CartsMineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsMineRoute, (c) => {
    throw new Error('Not implemented')
  })
