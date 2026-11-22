import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBoulderEmployeeSalariesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBoulderEmployeeSalariesHandler = app.openapi(
  getRepositorySearchTypeBoulderEmployeeSalariesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
