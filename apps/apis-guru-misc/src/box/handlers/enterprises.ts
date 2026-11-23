import { OpenAPIHono } from '@hono/zod-openapi'
import { getEnterprisesEnterpriseIdDevicePinnersRoute } from '../routes'

const app = new OpenAPIHono()

export const enterprisesHandler = app.openapi(getEnterprisesEnterpriseIdDevicePinnersRoute, (c) => {
  throw new Error('Not implemented')
})
