import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProjectsRefConfigStorageRoute,
  getV1ProjectsRefStorageBucketsRoute,
  patchV1ProjectsRefConfigStorageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storageHandler = app
  .openapi(getV1ProjectsRefStorageBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefConfigStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
