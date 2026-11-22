import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointSimpleRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointSimpleRecordsHandler = app.openapi(
  getRepositorySearchTypeTypePointSimpleRecordsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
