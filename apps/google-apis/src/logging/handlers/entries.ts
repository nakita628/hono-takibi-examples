import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV2EntriesCopyRoute,
  postV2EntriesListRoute,
  postV2EntriesTailRoute,
  postV2EntriesWriteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const entriesHandler = app
  .openapi(postV2EntriesCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EntriesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EntriesTailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EntriesWriteRoute, (c) => {
    throw new Error('Not implemented')
  })
