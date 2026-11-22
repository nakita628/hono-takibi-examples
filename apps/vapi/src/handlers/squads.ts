import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSquadIdRoute,
  getSquadIdRoute,
  getSquadRoute,
  patchSquadIdRoute,
  postSquadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const squadsHandler = app
  .openapi(postSquadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSquadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSquadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSquadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSquadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
