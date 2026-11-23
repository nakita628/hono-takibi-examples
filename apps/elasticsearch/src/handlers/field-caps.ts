import { OpenAPIHono } from '@hono/zod-openapi'
import { getFieldCapsRoute, postFieldCapsRoute } from '../routes'

const app = new OpenAPIHono()

export const fieldCapsHandler = app
  .openapi(getFieldCapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFieldCapsRoute, (c) => {
    throw new Error('Not implemented')
  })
