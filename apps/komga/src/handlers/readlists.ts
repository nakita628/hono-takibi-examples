import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ReadlistsIdRoute,
  getApiV1ReadlistsIdFileRoute,
  getApiV1ReadlistsIdRoute,
  getApiV1ReadlistsRoute,
  patchApiV1ReadlistsIdRoute,
  postApiV1ReadlistsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const readlistsHandler = app
  .openapi(getApiV1ReadlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReadlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ReadlistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReadlistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1ReadlistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReadlistsIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
