import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1NameRoute,
  getV1ParentDevicesRoute,
  getV1ParentRoomsRoute,
  getV1ParentStructuresRoute,
  postV1NameExecuteCommandRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameExecuteCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentStructuresRoute, (c) => {
    throw new Error('Not implemented')
  })
