import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDetectMitigationactionsExecutionsRoute,
  getDetectMitigationactionsTasksStartTimeEndTimeRoute,
  getDetectMitigationactionsTasksTaskIdRoute,
  putDetectMitigationactionsTasksTaskIdCancelRoute,
  putDetectMitigationactionsTasksTaskIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const detectHandler = app
  .openapi(putDetectMitigationactionsTasksTaskIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDetectMitigationactionsTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDetectMitigationactionsTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDetectMitigationactionsExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDetectMitigationactionsTasksStartTimeEndTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
