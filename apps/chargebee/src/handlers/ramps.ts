import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRampsRampIdRoute,
  getRampsRoute,
  postRampsRampIdDeleteRoute,
  postRampsRampIdUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rampsHandler = app
  .openapi(getRampsRampIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRampsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRampsRampIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRampsRampIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
