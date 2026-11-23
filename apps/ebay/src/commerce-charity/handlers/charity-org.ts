import { OpenAPIHono } from '@hono/zod-openapi'
import { getCharityOrgCharityOrgIdRoute, getCharityOrgRoute } from '../routes'

const app = new OpenAPIHono()

export const charityOrgHandler = app
  .openapi(getCharityOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCharityOrgCharityOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
