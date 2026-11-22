import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLivePlaysRoute,
  getPlaysRoute,
  getPlayStatsRoute,
  getPlayStatTypesRoute,
  getPlayTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playsHandler = app
  .openapi(getLivePlaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayStatTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaysRoute, (c) => {
    throw new Error('Not implemented')
  })
