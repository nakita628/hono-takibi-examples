import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmTaskSeries202609TaskIdRoute,
  getCrmTaskSeries202609TaskIdRoute,
  patchCrmTaskSeries202609TaskIdRoute,
  postCrmTaskSeries202609Route,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(postCrmTaskSeries202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmTaskSeries202609TaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmTaskSeries202609TaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmTaskSeries202609TaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
