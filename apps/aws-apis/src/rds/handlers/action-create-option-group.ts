import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateOptionGroupRoute, postActionCreateOptionGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateOptionGroupHandler = app
  .openapi(getActionCreateOptionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateOptionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
