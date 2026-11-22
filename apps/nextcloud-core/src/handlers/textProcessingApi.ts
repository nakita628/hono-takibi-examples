import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpTextprocessingTaskIdRoute,
  getOcsV2PhpTextprocessingTaskIdRoute,
  getOcsV2PhpTextprocessingTasksAppAppIdRoute,
  getOcsV2PhpTextprocessingTasktypesRoute,
  postOcsV2PhpTextprocessingScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const textProcessingApiHandler = app
  .openapi(getOcsV2PhpTextprocessingTasktypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTextprocessingScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTextprocessingTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpTextprocessingTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTextprocessingTasksAppAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
