import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1ActionAmendRoute,
  postV1ActionCreateRoute,
  postV1ActionDeleteRoute,
  postV1ActionExecuteRoute,
  postV1ActionGenerateRoute,
  postV1ActionQueryMoreRoute,
  postV1ActionQueryRoute,
  postV1ActionSubscribeRoute,
  postV1ActionUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionsHandler = app
  .openapi(postV1ActionAmendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActionCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActionDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActionExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActionGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActionQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActionQueryMoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActionSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ActionUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
