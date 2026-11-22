import { OpenAPIHono } from '@hono/zod-openapi'
import { getSignUpsIdRoute, patchSignUpsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const signUpsHandler = app
  .openapi(getSignUpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSignUpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
