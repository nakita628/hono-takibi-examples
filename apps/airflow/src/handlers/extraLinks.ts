import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksRoute } from '../routes'

const app = new OpenAPIHono()

export const extraLinksHandler = app.openapi(
  getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
