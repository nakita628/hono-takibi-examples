import { OpenAPIHono } from '@hono/zod-openapi'
import { getAtsApplicantsIdRoute, getAtsApplicantsRoute, postAtsApplicantsRoute } from '../routes'

const app = new OpenAPIHono()

export const applicantsHandler = app
  .openapi(getAtsApplicantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAtsApplicantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAtsApplicantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
