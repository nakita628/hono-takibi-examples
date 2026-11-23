import { OpenAPIHono } from '@hono/zod-openapi'
import { getDistrictAdminsIdRoute, getDistrictAdminsRoute } from '../routes'

const app = new OpenAPIHono()

export const districtAdminsHandler = app
  .openapi(getDistrictAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistrictAdminsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
