import { OpenAPIHono } from '@hono/zod-openapi'
import { getGroupUniqueIdRoute, patchGroupUniqueIdRoute, putGroupUniqueIdRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupUniqueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupUniqueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupUniqueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
