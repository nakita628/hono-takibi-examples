import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDanglingIndexUuidRoute,
  getDanglingRoute,
  postDanglingIndexUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const danglingHandler = app
  .openapi(postDanglingIndexUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDanglingIndexUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDanglingRoute, (c) => {
    throw new Error('Not implemented')
  })
