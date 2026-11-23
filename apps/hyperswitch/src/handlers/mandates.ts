import { OpenAPIHono } from '@hono/zod-openapi'
import { getMandatesMandateIdRoute, postMandatesRevokeMandateIdRoute } from '../routes'

const app = new OpenAPIHono()

export const mandatesHandler = app
  .openapi(getMandatesMandateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMandatesRevokeMandateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
