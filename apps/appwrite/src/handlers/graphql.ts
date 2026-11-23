import { OpenAPIHono } from '@hono/zod-openapi'
import { postGraphqlMutationRoute, postGraphqlRoute } from '../routes'

const app = new OpenAPIHono()

export const graphqlHandler = app
  .openapi(postGraphqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGraphqlMutationRoute, (c) => {
    throw new Error('Not implemented')
  })
