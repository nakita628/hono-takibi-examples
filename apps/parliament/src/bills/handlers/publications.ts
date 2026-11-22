import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1BillsBillIdPublicationsRoute,
  getApiV1BillsBillIdStagesStageIdPublicationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicationsHandler = app
  .openapi(getApiV1BillsBillIdPublicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillsBillIdStagesStageIdPublicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
