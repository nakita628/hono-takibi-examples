import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsAccountIdContainersImagePreparationsRoute } from '../routes'

const app = new OpenAPIHono()

export const containerImagesHandler = app.openapi(
  postAccountsAccountIdContainersImagePreparationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
