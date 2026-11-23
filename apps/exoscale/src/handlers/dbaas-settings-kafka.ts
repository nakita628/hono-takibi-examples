import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbaasSettingsKafkaRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasSettingsKafkaHandler = app.openapi(getDbaasSettingsKafkaRoute, (c) => {
  throw new Error('Not implemented')
})
