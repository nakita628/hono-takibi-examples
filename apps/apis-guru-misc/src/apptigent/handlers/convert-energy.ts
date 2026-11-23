import { OpenAPIHono } from '@hono/zod-openapi'
import { postConvertEnergyRoute } from '../routes'

const app = new OpenAPIHono()

export const convertEnergyHandler = app.openapi(postConvertEnergyRoute, (c) => {
  throw new Error('Not implemented')
})
