import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute,
  getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const xComHandler = app
  .openapi(getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
