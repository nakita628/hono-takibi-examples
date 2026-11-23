import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAtsApplicantsIdRoute,
  getAtsApplicantsRoute,
  getAtsJobsIdRoute,
  getAtsJobsRoute,
  postAtsApplicantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const atsHandler = app
  .openapi(getAtsApplicantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAtsApplicantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAtsApplicantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAtsJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAtsJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
