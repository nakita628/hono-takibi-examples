import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ContextualBanditQueriesIdRoute,
  getV1ContextualBanditQueriesIdRoute,
  getV1ContextualBanditQueriesRoute,
  postV1ContextualBanditQueriesRoute,
  putV1ContextualBanditQueriesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contextualBanditQueriesHandler = app
  .openapi(getV1ContextualBanditQueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ContextualBanditQueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ContextualBanditQueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContextualBanditQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
