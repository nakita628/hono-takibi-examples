import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1IpIpIdIpId1Route } from '../routes'

const app = new OpenAPIHono()

export const ipHandler = app.openapi(getV1IpIpIdIpId1Route, (c) => {
  throw new Error('Not implemented')
})
