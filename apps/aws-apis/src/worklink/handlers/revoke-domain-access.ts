import { OpenAPIHono } from '@hono/zod-openapi'
import { postRevokeDomainAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const revokeDomainAccessHandler = app.openapi(postRevokeDomainAccessRoute, (c) => {
  throw new Error('Not implemented')
})
