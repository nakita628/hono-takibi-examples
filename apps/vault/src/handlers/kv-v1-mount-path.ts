import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKvV1MountPathPathRoute,
  getKvV1MountPathPathIndexRoute,
  getKvV1MountPathPathRoute,
  postKvV1MountPathPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const kvV1MountPathHandler = app
  .openapi(getKvV1MountPathPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKvV1MountPathPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKvV1MountPathPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKvV1MountPathPathIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
