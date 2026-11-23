import { OpenAPIHono } from '@hono/zod-openapi'
import { getCreateGroupPadRoute, postCreateGroupPadRoute } from '../routes'

const app = new OpenAPIHono()

export const createGroupPadHandler = app
  .openapi(getCreateGroupPadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreateGroupPadRoute, (c) => {
    throw new Error('Not implemented')
  })
