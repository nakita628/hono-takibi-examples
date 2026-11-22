import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CartsMineBalanceApplyRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineBalanceApplyHandler = app.openapi(postV1CartsMineBalanceApplyRoute, (c) => {
  throw new Error('Not implemented')
})
