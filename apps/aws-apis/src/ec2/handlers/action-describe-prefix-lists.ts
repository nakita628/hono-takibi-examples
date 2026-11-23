import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribePrefixListsRoute, postActionDescribePrefixListsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribePrefixListsHandler = app
  .openapi(getActionDescribePrefixListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribePrefixListsRoute, (c) => {
    throw new Error('Not implemented')
  })
