import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdFreezePeriodsFreezePeriodIdRoute,
  getApiV4ProjectsIdFreezePeriodsFreezePeriodIdRoute,
  getApiV4ProjectsIdFreezePeriodsRoute,
  postApiV4ProjectsIdFreezePeriodsRoute,
  putApiV4ProjectsIdFreezePeriodsFreezePeriodIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const freezePeriodsHandler = app
  .openapi(getApiV4ProjectsIdFreezePeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdFreezePeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdFreezePeriodsFreezePeriodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdFreezePeriodsFreezePeriodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdFreezePeriodsFreezePeriodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
