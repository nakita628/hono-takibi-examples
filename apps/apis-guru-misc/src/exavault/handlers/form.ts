import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFormsEntriesIdRoute,
  getFormsEntriesIdRoute,
  getFormsIdRoute,
  getFormsRoute,
  patchFormsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formHandler = app
  .openapi(getFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFormsEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormsEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFormsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
