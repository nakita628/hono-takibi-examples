import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsAccountIdWorkersWorkersWorkerIdVersionsVersionIdProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const workerProfilingHandler = app.openapi(
  postAccountsAccountIdWorkersWorkersWorkerIdVersionsVersionIdProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
