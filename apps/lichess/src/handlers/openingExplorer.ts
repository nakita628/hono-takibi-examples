import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLichessRoute,
  getMastersPgnGameIdRoute,
  getMastersRoute,
  getPlayerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const openingExplorerHandler = app
  .openapi(getMastersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLichessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMastersPgnGameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
