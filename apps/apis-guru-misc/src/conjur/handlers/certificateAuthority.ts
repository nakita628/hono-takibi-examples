import { OpenAPIHono } from '@hono/zod-openapi'
import { postCaAccountServiceIdSignRoute } from '../routes'

const app = new OpenAPIHono()

export const certificateAuthorityHandler = app.openapi(postCaAccountServiceIdSignRoute, (c) => {
  throw new Error('Not implemented')
})
