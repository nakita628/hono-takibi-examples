import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpText2imageTaskIdRoute,
  getOcsV2PhpText2imageIsAvailableRoute,
  getOcsV2PhpText2imageTaskIdImageIndexRoute,
  getOcsV2PhpText2imageTaskIdRoute,
  getOcsV2PhpText2imageTasksAppAppIdRoute,
  postOcsV2PhpText2imageScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const textToImageApiHandler = app
  .openapi(getOcsV2PhpText2imageIsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpText2imageScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpText2imageTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpText2imageTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpText2imageTaskIdImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpText2imageTasksAppAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
