import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV2OnCallPagesPageIdAcknowledgeRoute,
  postApiV2OnCallPagesPageIdEscalateRoute,
  postApiV2OnCallPagesPageIdRerouteRoute,
  postApiV2OnCallPagesPageIdResolveRoute,
  postApiV2OnCallPagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onCallPagingHandler = app
  .openapi(postApiV2OnCallPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OnCallPagesPageIdAcknowledgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OnCallPagesPageIdEscalateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OnCallPagesPageIdRerouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OnCallPagesPageIdResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
