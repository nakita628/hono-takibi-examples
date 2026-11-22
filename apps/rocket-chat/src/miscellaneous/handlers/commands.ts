import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1CommandsGetRoute,
  getApiV1CommandsListRoute,
  getApiV1CommandsPreviewRoute,
  postApiV1CommandsPreviewRoute,
  postApiV1CommandsRunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commandsHandler = app
  .openapi(getApiV1CommandsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CommandsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CommandsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CommandsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CommandsRunRoute, (c) => {
    throw new Error('Not implemented')
  })
