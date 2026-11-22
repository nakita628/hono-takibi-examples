import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiRoute,
  getContributeJsonRoute,
  getHeartbeatRoute,
  getLbheartbeatRoute,
  getRoute,
  getVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const utilitiesHandler = app
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLbheartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContributeJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
