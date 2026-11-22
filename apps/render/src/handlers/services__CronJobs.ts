import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteCronJobsCronJobIdRunsRoute, postCronJobsCronJobIdRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const services__CronJobsHandler = app
  .openapi(postCronJobsCronJobIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCronJobsCronJobIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
