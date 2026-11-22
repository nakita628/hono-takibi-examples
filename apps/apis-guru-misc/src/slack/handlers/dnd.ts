import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDndInfoRoute,
  getDndTeamInfoRoute,
  postDndEndDndRoute,
  postDndEndSnoozeRoute,
  postDndSetSnoozeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dndHandler = app
  .openapi(postDndEndDndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDndEndSnoozeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDndInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDndSetSnoozeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDndTeamInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
