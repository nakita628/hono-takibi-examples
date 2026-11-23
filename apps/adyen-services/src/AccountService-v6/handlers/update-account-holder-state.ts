import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateAccountHolderStateRoute } from '../routes'

const app = new OpenAPIHono()

export const updateAccountHolderStateHandler = app.openapi(
  postUpdateAccountHolderStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
