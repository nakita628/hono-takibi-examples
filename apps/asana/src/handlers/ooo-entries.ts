import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOooEntriesOooEntryGidRoute,
  getOooEntriesOooEntryGidRoute,
  getOooEntriesRoute,
  postOooEntriesRoute,
  putOooEntriesOooEntryGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oooEntriesHandler = app
  .openapi(getOooEntriesOooEntryGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOooEntriesOooEntryGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOooEntriesOooEntryGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOooEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOooEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
