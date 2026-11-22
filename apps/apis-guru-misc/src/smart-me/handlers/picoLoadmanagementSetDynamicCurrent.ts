import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiPicoLoadmanagementgroupCurrentSerialRoute } from '../routes'

const app = new OpenAPIHono()

export const picoLoadmanagementSetDynamicCurrentHandler = app.openapi(
  postApiPicoLoadmanagementgroupCurrentSerialRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
