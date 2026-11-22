import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTunnelsIdRoute,
  getTunnelsIdRoute,
  getTunnelsRoute,
  postTunnelsIdActionsRotateTokenRoute,
  postTunnelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tunnelsHandler = app
  .openapi(getTunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTunnelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTunnelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTunnelsIdActionsRotateTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
