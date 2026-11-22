import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CartsMineCollectTotalsRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineCollectTotalsHandler = app.openapi(putV1CartsMineCollectTotalsRoute, (c) => {
  throw new Error('Not implemented')
})
